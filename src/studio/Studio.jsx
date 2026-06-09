import { useEffect, useMemo, useRef, useState } from "react";
import "./studio.css";
import DesignedCV from "../assets/CVarthurviegas.pdf";
import { analyzeJob, OWNED_KEYWORDS, OWNED_COUNT } from "./atsEngine";
import {
  buildModel,
  toPlainText,
  toMarkdown,
  toAtsHtml,
  toCoverLetter,
  fileSlug,
} from "./cvBuilder";
import {
  downloadTxt,
  downloadMd,
  downloadDoc,
  printHtml,
  copyText,
  sha256Hex,
} from "./download";

// SHA-256 of the passphrase. Default passphrase: "viegas-studio-2026".
// Override with VITE_STUDIO_HASH at build time, or generate a new hash in the
// browser console: crypto.subtle.digest('SHA-256', new TextEncoder().encode('new pass'))
const STORED_HASH =
  import.meta.env.VITE_STUDIO_HASH ||
  "5df51f05c1fa46b21d0f89298b9177d12d7ed36671d295f47b5c66cad41fb605";

const SAVED_KEY = "studio_jobs";
const AUTH_KEY = "studio_auth";

const loadSaved = () => {
  try {
    return JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
  } catch (_) {
    return [];
  }
};

const scoreColor = (s) => (s >= 75 ? "var(--diag-green)" : s >= 50 ? "var(--diag-orange)" : "var(--diag-red)");
// Text-safe variant: blended toward the page ink so number/percent text clears
// WCAG AA on the card in both themes (the colored ring bar carries the signal).
const scoreTextColor = (s) => {
  const c = s >= 75 ? "--diag-green" : s >= 50 ? "--diag-orange" : "--diag-red";
  return `color-mix(in srgb, var(${c}) 60%, var(--title-color))`;
};
const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ── Circular ATS score gauge ── */
const ScoreRing = ({ score }) => {
  const r = 46;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - score / 100);
  return (
    <svg className="stRing" viewBox="0 0 110 110" width="118" height="118" role="img"
         aria-label={`Aderência ATS ${score}%`}>
      <circle cx="55" cy="55" r={r} className="stRing-track" />
      <circle
        cx="55" cy="55" r={r}
        className="stRing-bar"
        style={{ stroke: scoreColor(score), strokeDasharray: c, strokeDashoffset: offset }}
      />
      <text x="55" y="52" className="stRing-num" style={{ fill: scoreTextColor(score) }}>{score}%</text>
      <text x="55" y="70" className="stRing-cap">aderência</text>
    </svg>
  );
};

/* ── Login gate ── */
const Gate = ({ onUnlock }) => {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    const hex = await sha256Hex(pass);
    setBusy(false);
    if (hex === STORED_HASH) {
      sessionStorage.setItem(AUTH_KEY, "1");
      onUnlock();
    } else {
      setErr(true);
      setPass("");
    }
  };

  return (
    <div className="stGate">
      <form className="stGate-card" onSubmit={submit}>
        <i className="uil uil-lock-alt stGate-icon" aria-hidden="true"></i>
        <h1 className="stGate-title">Studio privado</h1>
        <p className="stGate-sub">Área restrita — gerador de currículo sob medida.</p>
        <input
          type="password"
          className={`stGate-input ${err ? "is-error" : ""}`}
          placeholder="Senha"
          aria-label="Senha"
          autoComplete="current-password"
          aria-invalid={err}
          aria-describedby={err ? "stGateErr" : undefined}
          value={pass}
          autoFocus
          onChange={(e) => {
            setPass(e.target.value);
            setErr(false);
          }}
        />
        {err && <span id="stGateErr" className="stGate-err" role="alert">Senha incorreta.</span>}
        <button type="submit" className="stBtn stBtn--solid" disabled={busy || !pass}>
          {busy ? "Verificando…" : "Entrar"}
        </button>
        <a className="stGate-back" href="#home">← Voltar ao site</a>
      </form>
    </div>
  );
};

const Studio = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === "1");
  const [lang, setLang] = useState("en"); // CV output language
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [jobText, setJobText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [saved, setSaved] = useState(loadSaved);
  const [toast, setToast] = useState("");
  const [showLetter, setShowLetter] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);

  // Apply theme class only; persistence happens in the toggle so merely viewing
  // the gate never writes localStorage.
  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
  }, [dark]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const toastTimer = useRef(null);
  useEffect(() => () => toastTimer.current && clearTimeout(toastTimer.current), []);
  const flash = (msg) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  };

  const persist = (list) => {
    setSaved(list);
    localStorage.setItem(SAVED_KEY, JSON.stringify(list));
  };

  const runAnalysis = (text) => {
    const a = analyzeJob(text);
    setAnalysis(a);
    return a;
  };

  const onAnalyze = () => {
    const text = jobText.trim();
    if (text.length < 30) {
      flash("Cole uma descrição de vaga mais completa.");
      return;
    }
    const a = runAnalysis(text);
    const seniority = a.seniority ? `${a.seniority.pt} ` : "";
    const title = a.role ? `${seniority}${a.role.pt}` : text.split("\n").find((l) => l.trim())?.slice(0, 48) || "Vaga";
    const entry = {
      id: String(Date.now()),
      title,
      snippet: text.slice(0, 150),
      score: a.score,
      date: new Date().toISOString(),
      jobText: text,
    };
    persist([entry, ...saved.filter((s) => s.jobText !== text)].slice(0, 20));
  };

  const reopen = (entry) => {
    setJobText(entry.jobText);
    runAnalysis(entry.jobText);
    document.querySelector(".stTailor")?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };

  const removeSaved = (id) => persist(saved.filter((s) => s.id !== id));

  const masterModel = useMemo(() => buildModel({ lang }), [lang]);
  const tailoredModel = useMemo(
    () => (analysis ? buildModel({ lang, analysis }) : null),
    [lang, analysis]
  );

  const exportModel = (model, fmt) => {
    if (!model) return;
    const slug = fileSlug(model);
    if (fmt === "pdf") {
      if (!printHtml(toAtsHtml(model)))
        flash("Habilite pop-ups para gerar o PDF.");
    } else if (fmt === "doc") downloadDoc(slug, toAtsHtml(model, { forWord: true }));
    else if (fmt === "txt") downloadTxt(slug, toPlainText(model));
    else if (fmt === "md") downloadMd(slug, toMarkdown(model));
  };

  const ExportRow = ({ model, disabled }) => (
    <div className="stExports">
      <button className="stBtn stBtn--solid" disabled={disabled} onClick={() => exportModel(model, "pdf")}>
        <i className="uil uil-file-download-alt" aria-hidden="true"></i> PDF (imprimir)
      </button>
      <button className="stBtn" disabled={disabled} onClick={() => exportModel(model, "doc")}>
        <i className="uil uil-file-edit-alt" aria-hidden="true"></i> Word (.doc)
      </button>
      <button className="stBtn" disabled={disabled} onClick={() => exportModel(model, "txt")}>
        <i className="uil uil-notes" aria-hidden="true"></i> .txt
      </button>
      <button className="stBtn" disabled={disabled} onClick={() => exportModel(model, "md")}>
        <i className="uil uil-markdown" aria-hidden="true"></i> .md
      </button>
    </div>
  );

  const coverText = useMemo(
    () => (analysis ? toCoverLetter({ lang, analysis }) : ""),
    [lang, analysis]
  );

  if (!authed) return <Gate onUnlock={() => setAuthed(true)} />;

  return (
    <div className="studio">
      {/* Top bar */}
      <header className="stTop">
        <div className="stTop-left">
          <span className="stLogo"><i className="uil uil-create-dashboard" aria-hidden="true"></i> Studio</span>
          <span className="stTag">privado</span>
        </div>
        <div className="stTop-right">
          <div className="stLangToggle" role="group" aria-label="Idioma do currículo">
            <button aria-pressed={lang === "pt"} className={lang === "pt" ? "is-on" : ""} onClick={() => setLang("pt")}>PT</button>
            <button aria-pressed={lang === "en"} className={lang === "en" ? "is-on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <button
            className="stIconBtn"
            aria-label={dark ? "Mudar para tema claro" : "Mudar para tema escuro"}
            onClick={toggleTheme}
          >
            <i className={dark ? "uil uil-sun" : "uil uil-moon"} aria-hidden="true"></i>
          </button>
          <a className="stIconBtn" href="#home" aria-label="Voltar ao site"><i className="uil uil-estate" aria-hidden="true"></i></a>
          <button
            className="stIconBtn"
            aria-label="Sair"
            onClick={() => {
              sessionStorage.removeItem(AUTH_KEY);
              setAuthed(false);
            }}
          >
            <i className="uil uil-signout" aria-hidden="true"></i>
          </button>
        </div>
      </header>

      <main className="stMain">
        {/* Master CV */}
        <section className="stCard">
          <h2 className="stCard-title"><i className="uil uil-file-check-alt" aria-hidden="true"></i> Currículo mestre</h2>
          <p className="stCard-sub">
            Sempre atualizado a partir dos dados do portfólio. Gera versão limpa e legível por ATS em {lang === "pt" ? "Português" : "Inglês"}.
          </p>
          <ExportRow model={masterModel} disabled={false} />
          <a className="stTextLink" href={DesignedCV} download="Arthur-Viegas-CV.pdf">
            <i className="uil uil-palette" aria-hidden="true"></i> Baixar versão com design (PDF)
          </a>
        </section>

        {/* Job-tailored generator */}
        <section className="stCard stTailor">
          <h2 className="stCard-title"><i className="uil uil-bullseye" aria-hidden="true"></i> Currículo sob medida para a vaga</h2>
          <p className="stCard-sub">
            Cole a descrição da vaga. O analisador cruza os requisitos com suas skills reais, calcula a aderência ATS e gera um CV reordenado para passar nos filtros automáticos.
          </p>
          <textarea
            className="stTextarea"
            aria-label="Descrição da vaga"
            placeholder="Cole aqui a descrição completa da vaga (requisitos, stack, responsabilidades)…"
            value={jobText}
            onChange={(e) => setJobText(e.target.value)}
            rows={8}
          />
          <div className="stTailor-actions">
            <button className="stBtn stBtn--solid" onClick={onAnalyze}>
              <i className="uil uil-search-alt" aria-hidden="true"></i> Analisar vaga
            </button>
            {(jobText || analysis) && (
              <button
                className="stBtn stBtn--ghost"
                onClick={() => {
                  setJobText("");
                  setAnalysis(null);
                }}
              >
                Limpar
              </button>
            )}
          </div>

          {analysis && (
            <div className="stResult">
              <div className="stResult-head">
                <ScoreRing score={analysis.score} />
                <div className="stResult-meta">
                  <p>
                    <strong>{analysis.matched.length}</strong> requisitos cobertos de{" "}
                    <strong>{analysis.jobKeywordCount}</strong> detectados.
                  </p>
                  {analysis.role && (
                    <p className="stMuted">
                      Cargo detectado: <strong>{analysis.seniority ? `${analysis.seniority.pt} ` : ""}{analysis.role.pt}</strong>
                    </p>
                  )}
                  <p className="stMuted stHint">
                    {analysis.jobKeywordCount < 5
                      ? "Poucos requisitos reconhecidos — cole a descrição completa para um score mais confiável."
                      : analysis.score >= 75
                      ? "Forte aderência — o CV gerado destaca esses termos no topo."
                      : analysis.score >= 50
                      ? "Aderência média — veja as lacunas abaixo."
                      : "Baixa aderência — confira se a vaga combina com o perfil."}
                  </p>
                </div>
              </div>

              <div className="stKwBlock">
                <h3 className="stKw-title is-match">
                  <i className="uil uil-check-circle" aria-hidden="true"></i> No seu perfil ({analysis.matched.length})
                </h3>
                <div className="stChips">
                  {analysis.matched.map((m) => (
                    <span key={m.label} className="stChip stChip--match">{m.label}</span>
                  ))}
                  {!analysis.matched.length && <span className="stMuted">Nenhum termo reconhecido.</span>}
                </div>
              </div>

              {analysis.gaps.length > 0 && (
                <div className="stKwBlock">
                  <h3 className="stKw-title is-gap">
                    <i className="uil uil-exclamation-triangle" aria-hidden="true"></i> Lacunas — pedidas na vaga, fora do perfil ({analysis.gaps.length})
                  </h3>
                  <div className="stChips">
                    {analysis.gaps.map((g) => (
                      <span key={g.label} className="stChip stChip--gap">{g.label}</span>
                    ))}
                  </div>
                  <p className="stMuted stTiny">
                    Estes termos não são adicionados ao CV (mantém a honestidade). Servem para você decidir o que estudar ou endereçar na carta.
                  </p>
                </div>
              )}

              {tailoredModel && (
                <div className="stPreview">
                  <h3 className="stKw-title"><i className="uil uil-eye" aria-hidden="true"></i> Prévia do resumo gerado</h3>
                  <p className="stSummary">{tailoredModel.summary}</p>
                  <div className="stPreview-actions">
                    <button className="stBtn stBtn--ghost stBtn--sm" onClick={async () => { (await copyText(tailoredModel.summary)) ? flash("Resumo copiado.") : flash("Falha ao copiar."); }}>
                      <i className="uil uil-copy" aria-hidden="true"></i> Copiar resumo
                    </button>
                    <button className="stBtn stBtn--ghost stBtn--sm" onClick={() => setShowLetter((v) => !v)}>
                      <i className="uil uil-envelope-edit" aria-hidden="true"></i> {showLetter ? "Ocultar carta" : "Carta de apresentação"}
                    </button>
                  </div>
                  {showLetter && (
                    <div className="stLetter">
                      <pre className="stLetter-text">{coverText}</pre>
                      <div className="stPreview-actions">
                        <button className="stBtn stBtn--sm" onClick={async () => { (await copyText(coverText)) ? flash("Carta copiada.") : flash("Falha ao copiar."); }}>
                          <i className="uil uil-copy" aria-hidden="true"></i> Copiar
                        </button>
                        <button className="stBtn stBtn--sm" onClick={() => downloadTxt(`Arthur-Viegas-Cover-${lang}`, coverText)}>
                          <i className="uil uil-import" aria-hidden="true"></i> Baixar .txt
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="stTailorExport">
                <h3 className="stKw-title"><i className="uil uil-download-alt" aria-hidden="true"></i> Baixar CV sob medida</h3>
                <ExportRow model={tailoredModel} disabled={!tailoredModel} />
              </div>
            </div>
          )}
        </section>

        {/* Saved analyses */}
        {saved.length > 0 && (
          <section className="stCard">
            <h2 className="stCard-title"><i className="uil uil-history" aria-hidden="true"></i> Vagas analisadas</h2>
            <ul className="stSaved">
              {saved.map((s) => (
                <li key={s.id} className="stSaved-item">
                  <button className="stSaved-main" onClick={() => reopen(s)}>
                    <span className="stSaved-score" style={{ color: scoreTextColor(s.score) }}>{s.score}%</span>
                    <span className="stSaved-body">
                      <span className="stSaved-title">{s.title}</span>
                      <span className="stSaved-snippet" title={s.snippet}>{s.snippet}…</span>
                    </span>
                  </button>
                  <button className="stIconBtn stIconBtn--sm" aria-label="Remover" onClick={() => removeSaved(s.id)}>
                    <i className="uil uil-trash-alt" aria-hidden="true"></i>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Keyword library */}
        <section className="stCard">
          <button className="stCollapse" onClick={() => setShowKeywords((v) => !v)} aria-expanded={showKeywords} aria-controls="stKwList">
            <h2 className="stCard-title"><i className="uil uil-tag-alt" aria-hidden="true"></i> Biblioteca de keywords ({OWNED_COUNT})</h2>
            <i className={`uil ${showKeywords ? "uil-angle-up" : "uil-angle-down"}`} aria-hidden="true"></i>
          </button>
          {showKeywords && (
            <div id="stKwList">
              <p className="stCard-sub">Termos reconhecidos como seus — o analisador procura por estes (e sinônimos) na vaga.</p>
              <div className="stChips">
                {OWNED_KEYWORDS.map((k) => (
                  <span key={k} className="stChip">{k}</span>
                ))}
              </div>
            </div>
          )}
        </section>

        <p className="stFootnote">
          <i className="uil uil-info-circle" aria-hidden="true"></i>
          Acesso protegido por senha no cliente — é uma barreira de privacidade, não autenticação de servidor. Tudo é gerado localmente no seu navegador.
        </p>
      </main>

      {toast && <div className="stToast" role="status">{toast}</div>}
    </div>
  );
};

export default Studio;
