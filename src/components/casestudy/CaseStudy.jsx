import React, { useState } from "react";
import "./casestudy.css";
import { useLanguage } from "../../context/LanguageContext";

/* ── Inline SVG Architecture Diagram ── */
const ArchDiagram = ({ lang }) => {
  const labels =
    lang === "en"
      ? {
          client: "Client",
          api: "FastAPI",
          queue: "Task Queue",
          worker: "Celery Worker",
          db: "PostgreSQL + pgvector",
          llm: "Groq API / Llama 3",
          redis: "Redis (Broker)",
          step1: "1. Upload PDF/DOCX",
          step2: "2. Enqueue task",
          step3: "3. Pull task",
          step4: "4. Chunk + Embed",
          step5: "5. Store vectors",
          step6: "6. Similarity search",
          step7: "7. LLM inference",
          step8: "8. Answer",
          query: "Query",
        }
      : {
          client: "Cliente",
          api: "FastAPI",
          queue: "Fila de Tarefas",
          worker: "Celery Worker",
          db: "PostgreSQL + pgvector",
          llm: "Groq API / Llama 3",
          redis: "Redis (Broker)",
          step1: "1. Upload PDF/DOCX",
          step2: "2. Enfileirar tarefa",
          step3: "3. Consumir tarefa",
          step4: "4. Chunk + Embedding",
          step5: "5. Armazenar vetores",
          step6: "6. Busca por similaridade",
          step7: "7. Inferência LLM",
          step8: "8. Resposta",
          query: "Consulta",
        };

  return (
    <svg
      viewBox="0 0 820 420"
      xmlns="http://www.w3.org/2000/svg"
      className="archDiagram"
      aria-label="RAG Architecture Diagram"
    >
      {/* ── defs: arrowhead ── */}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,60%,50%)" />
        </marker>
        <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,8%,60%)" />
        </marker>
      </defs>

      {/* ── background bands ── */}
      <rect x="0" y="0" width="820" height="420" rx="12" fill="var(--body-color)" />
      <rect x="10" y="10" width="800" height="400" rx="10" fill="var(--container-color)" opacity="0.6" />

      {/* ── INGESTION FLOW (top lane) ── */}
      {/* Client */}
      <rect x="30" y="40" width="110" height="52" rx="8" className="diagNode diagNode--blue" />
      <text x="85" y="63" textAnchor="middle" className="diagLabel">{labels.client}</text>
      <text x="85" y="82" textAnchor="middle" className="diagSub">Browser / API</text>

      {/* Arrow 1 */}
      <line x1="140" y1="66" x2="195" y2="66" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrow)" />
      <text x="168" y="58" textAnchor="middle" className="diagStep">{labels.step1}</text>

      {/* FastAPI */}
      <rect x="197" y="40" width="110" height="52" rx="8" className="diagNode diagNode--accent" />
      <text x="252" y="63" textAnchor="middle" className="diagLabel">{labels.api}</text>
      <text x="252" y="82" textAnchor="middle" className="diagSub">Python ASGI</text>

      {/* Arrow 2 */}
      <line x1="307" y1="66" x2="362" y2="66" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrow)" />
      <text x="335" y="58" textAnchor="middle" className="diagStep">{labels.step2}</text>

      {/* Redis */}
      <rect x="364" y="40" width="110" height="52" rx="8" className="diagNode diagNode--red" />
      <text x="419" y="63" textAnchor="middle" className="diagLabel">{labels.redis}</text>
      <text x="419" y="82" textAnchor="middle" className="diagSub">Message Broker</text>

      {/* Arrow 3 */}
      <line x1="474" y1="66" x2="529" y2="66" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrow)" />
      <text x="502" y="58" textAnchor="middle" className="diagStep">{labels.step3}</text>

      {/* Celery Worker */}
      <rect x="531" y="40" width="120" height="52" rx="8" className="diagNode diagNode--green" />
      <text x="591" y="63" textAnchor="middle" className="diagLabel">{labels.worker}</text>
      <text x="591" y="82" textAnchor="middle" className="diagSub">LangChain</text>

      {/* Arrow 4 down */}
      <line x1="591" y1="92" x2="591" y2="145" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrow)" />
      <text x="620" y="122" textAnchor="start" className="diagStep">{labels.step4}</text>

      {/* pgvector */}
      <rect x="531" y="147" width="120" height="52" rx="8" className="diagNode diagNode--purple" />
      <text x="591" y="168" textAnchor="middle" className="diagLabel">{labels.db}</text>
      <text x="591" y="187" textAnchor="middle" className="diagSub">HNSW Index</text>

      {/* Arrow 5 left */}
      <line x1="531" y1="173" x2="476" y2="173" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrow)" />
      <text x="504" y="165" textAnchor="middle" className="diagStep">{labels.step5}</text>

      {/* ── QUERY FLOW (bottom lane) ── */}
      {/* Divider */}
      <line x1="30" y1="240" x2="790" y2="240" stroke="var(--text-color)" strokeWidth="0.5" strokeDasharray="6,4" opacity="0.35" />
      <text x="30" y="230" className="diagLane">── {lang === "en" ? "Query Flow" : "Fluxo de Consulta"} ──</text>
      <text x="30" y="110" className="diagLane">── {lang === "en" ? "Ingestion Flow" : "Fluxo de Ingestão"} ──</text>

      {/* Client query */}
      <rect x="30" y="260" width="110" height="52" rx="8" className="diagNode diagNode--blue" />
      <text x="85" y="283" textAnchor="middle" className="diagLabel">{labels.client}</text>
      <text x="85" y="302" textAnchor="middle" className="diagSub">{labels.query}</text>

      {/* Arrow */}
      <line x1="140" y1="286" x2="195" y2="286" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrow)" />

      {/* FastAPI */}
      <rect x="197" y="260" width="110" height="52" rx="8" className="diagNode diagNode--accent" />
      <text x="252" y="283" textAnchor="middle" className="diagLabel">{labels.api}</text>
      <text x="252" y="302" textAnchor="middle" className="diagSub">embed query</text>

      {/* Arrow */}
      <line x1="307" y1="286" x2="362" y2="286" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrow)" />
      <text x="335" y="278" textAnchor="middle" className="diagStep">{labels.step6}</text>

      {/* pgvector search */}
      <rect x="364" y="260" width="120" height="52" rx="8" className="diagNode diagNode--purple" />
      <text x="424" y="283" textAnchor="middle" className="diagLabel">{labels.db}</text>
      <text x="424" y="302" textAnchor="middle" className="diagSub">top-k chunks</text>

      {/* Arrow */}
      <line x1="484" y1="286" x2="539" y2="286" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrow)" />
      <text x="512" y="278" textAnchor="middle" className="diagStep">{labels.step7}</text>

      {/* Groq / LLM */}
      <rect x="541" y="260" width="120" height="52" rx="8" className="diagNode diagNode--orange" />
      <text x="601" y="283" textAnchor="middle" className="diagLabel">{labels.llm}</text>
      <text x="601" y="302" textAnchor="middle" className="diagSub">context window</text>

      {/* Arrow back */}
      <line x1="541" y1="300" x2="140" y2="340" stroke="hsl(230,8%,60%)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrowGray)" />
      <text x="340" y="360" textAnchor="middle" className="diagStep">{labels.step8}</text>

      {/* Answer bubble */}
      <rect x="30" y="348" width="110" height="42" rx="8" className="diagNode diagNode--answer" />
      <text x="85" y="373" textAnchor="middle" className="diagLabel">{lang === "en" ? "Answer" : "Resposta"}</text>

      {/* Legend */}
      <rect x="700" y="260" width="14" height="14" rx="3" className="diagNode--blue" />
      <text x="718" y="272" className="diagSub">Client</text>
      <rect x="700" y="282" width="14" height="14" rx="3" className="diagNode--accent" />
      <text x="718" y="294" className="diagSub">FastAPI</text>
      <rect x="700" y="304" width="14" height="14" rx="3" className="diagNode--red" />
      <text x="718" y="316" className="diagSub">Redis</text>
      <rect x="700" y="326" width="14" height="14" rx="3" className="diagNode--green" />
      <text x="718" y="338" className="diagSub">Celery</text>
      <rect x="700" y="348" width="14" height="14" rx="3" className="diagNode--purple" />
      <text x="718" y="360" className="diagSub">pgvector</text>
      <rect x="700" y="370" width="14" height="14" rx="3" className="diagNode--orange" />
      <text x="718" y="382" className="diagSub">LLM</text>
    </svg>
  );
};

/* ── Scale Diagram (100k rps) ── */
const ScaleDiagram = ({ lang }) => {
  const isEn = lang === "en";
  return (
    <svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" className="archDiagram" aria-label="Scale Architecture">
      <defs>
        <marker id="arrowS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,60%,50%)" />
        </marker>
      </defs>

      <rect x="0" y="0" width="740" height="260" rx="12" fill="var(--body-color)" />
      <rect x="8" y="8" width="724" height="244" rx="10" fill="var(--container-color)" opacity="0.55" />

      {/* Load Balancer */}
      <rect x="20" y="100" width="100" height="50" rx="8" className="diagNode diagNode--accent" />
      <text x="70" y="121" textAnchor="middle" className="diagLabel">Load</text>
      <text x="70" y="138" textAnchor="middle" className="diagLabel">Balancer</text>

      {/* Arrow */}
      <line x1="120" y1="125" x2="165" y2="95" stroke="hsl(230,60%,50%)" strokeWidth="1.6" markerEnd="url(#arrowS)" />
      <line x1="120" y1="125" x2="165" y2="125" stroke="hsl(230,60%,50%)" strokeWidth="1.6" markerEnd="url(#arrowS)" />
      <line x1="120" y1="125" x2="165" y2="155" stroke="hsl(230,60%,50%)" strokeWidth="1.6" markerEnd="url(#arrowS)" />

      {/* FastAPI replicas */}
      <rect x="167" y="72" width="90" height="40" rx="8" className="diagNode diagNode--blue" />
      <text x="212" y="89" textAnchor="middle" className="diagLabel">FastAPI</text>
      <text x="212" y="106" textAnchor="middle" className="diagSub">#1</text>

      <rect x="167" y="104" width="90" height="40" rx="8" className="diagNode diagNode--blue" />
      <text x="212" y="121" textAnchor="middle" className="diagLabel">FastAPI</text>
      <text x="212" y="138" textAnchor="middle" className="diagSub">#2</text>

      <rect x="167" y="136" width="90" height="40" rx="8" className="diagNode diagNode--blue" />
      <text x="212" y="153" textAnchor="middle" className="diagLabel">FastAPI</text>
      <text x="212" y="170" textAnchor="middle" className="diagSub">#N</text>

      {/* Arrow to Redis */}
      <line x1="257" y1="92" x2="305" y2="110" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />
      <line x1="257" y1="124" x2="305" y2="124" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />
      <line x1="257" y1="156" x2="305" y2="138" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />

      {/* Redis */}
      <rect x="307" y="100" width="90" height="50" rx="8" className="diagNode diagNode--red" />
      <text x="352" y="121" textAnchor="middle" className="diagLabel">Redis</text>
      <text x="352" y="138" textAnchor="middle" className="diagSub">Queue</text>

      {/* Arrow to workers */}
      <line x1="397" y1="120" x2="440" y2="100" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />
      <line x1="397" y1="125" x2="440" y2="125" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />
      <line x1="397" y1="130" x2="440" y2="150" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />

      {/* Celery workers */}
      <rect x="442" y="76" width="90" height="40" rx="8" className="diagNode diagNode--green" />
      <text x="487" y="93" textAnchor="middle" className="diagLabel">Celery</text>
      <text x="487" y="110" textAnchor="middle" className="diagSub">#1</text>

      <rect x="442" y="108" width="90" height="40" rx="8" className="diagNode diagNode--green" />
      <text x="487" y="125" textAnchor="middle" className="diagLabel">Celery</text>
      <text x="487" y="142" textAnchor="middle" className="diagSub">#2</text>

      <rect x="442" y="140" width="90" height="40" rx="8" className="diagNode diagNode--green" />
      <text x="487" y="157" textAnchor="middle" className="diagLabel">Celery</text>
      <text x="487" y="174" textAnchor="middle" className="diagSub">#N</text>

      {/* Arrow to DB */}
      <line x1="532" y1="115" x2="580" y2="125" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />
      <line x1="532" y1="125" x2="580" y2="125" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />
      <line x1="532" y1="160" x2="580" y2="135" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrowS)" />

      {/* PostgreSQL */}
      <rect x="582" y="100" width="110" height="50" rx="8" className="diagNode diagNode--purple" />
      <text x="637" y="121" textAnchor="middle" className="diagLabel">PostgreSQL</text>
      <text x="637" y="138" textAnchor="middle" className="diagSub">+ pgvector</text>

      {/* Labels bottom */}
      <text x="70" y="205" textAnchor="middle" className="diagStep">{isEn ? "Round-robin" : "Round-robin"}</text>
      <text x="212" y="205" textAnchor="middle" className="diagStep">{isEn ? "Stateless replicas" : "Réplicas stateless"}</text>
      <text x="352" y="205" textAnchor="middle" className="diagStep">{isEn ? "Backpressure buffer" : "Buffer de fila"}</text>
      <text x="487" y="205" textAnchor="middle" className="diagStep">{isEn ? "Auto-scaled" : "Auto-scaled"}</text>
      <text x="637" y="205" textAnchor="middle" className="diagStep">{isEn ? "Read replicas" : "Read replicas"}</text>

      <text x="370" y="240" textAnchor="middle" className="diagLane">{isEn ? "Horizontal scaling to handle 100k+ requests" : "Escalonamento horizontal para 100k+ requisições"}</text>
    </svg>
  );
};

/* ── Main Component ── */
const CaseStudy = () => {
  const { t, lang } = useLanguage();
  const cs = t.caseStudy;
  const [activeTab, setActiveTab] = useState("architecture");

  const tabs = [
    { id: "architecture", icon: "uil uil-sitemap", label: cs.tabs.architecture },
    { id: "tradeoffs",    icon: "uil uil-balance-scale", label: cs.tabs.tradeoffs },
    { id: "scalability",  icon: "uil uil-chart-growth", label: cs.tabs.scalability },
    { id: "security",     icon: "uil uil-shield-check", label: cs.tabs.security },
  ];

  return (
    <section className="caseStudy section" id="casestudy">
      <h2 className="sectionTitle">{cs.title}</h2>
      <span className="sectionSubtitle">{cs.subtitle}</span>

      {/* Hero Card */}
      <div className="csHero container">
        <div className="csHero-badge">
          <i className="uil uil-robot"></i> System Design Case Study
        </div>
        <h3 className="csHero-title">Context (RAG)</h3>
        <p className="csHero-desc">{cs.heroDesc}</p>
        <div className="csTechBadges">
          {["FastAPI", "Celery", "Redis", "PostgreSQL", "pgvector", "LangChain", "Sentence Transformers", "Groq / Llama 3"].map((t) => (
            <span key={t} className="csTechBadge">{t}</span>
          ))}
        </div>
      </div>

      {/* Problem Statement */}
      <div className="csProblem container">
        <div className="csProblem-icon"><i className="uil uil-exclamation-triangle"></i></div>
        <div>
          <h4 className="csProblem-title">{cs.problem.title}</h4>
          <p className="csProblem-text">{cs.problem.text}</p>
        </div>
      </div>

      {/* Tab Nav */}
      <div className="csTabNav container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`csTabBtn ${activeTab === tab.id ? "csTabBtn--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <i className={tab.icon}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="csPanel container">

        {/* ── ARCHITECTURE ── */}
        {activeTab === "architecture" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-sitemap"></i> {cs.architecture.title}
            </h4>
            <p className="csPanel-intro">{cs.architecture.intro}</p>

            <div className="csDiagramWrapper">
              <ArchDiagram lang={lang} />
            </div>

            <div className="csFlowSteps">
              {cs.architecture.steps.map((step, i) => (
                <div key={i} className="csFlowStep">
                  <div className="csFlowStep-num">{i + 1}</div>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TRADE-OFFS ── */}
        {activeTab === "tradeoffs" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-balance-scale"></i> {cs.tradeoffs.title}
            </h4>
            <p className="csPanel-intro">{cs.tradeoffs.intro}</p>

            <div className="csTradeoffGrid">
              {cs.tradeoffs.items.map((item, i) => (
                <div key={i} className="csTradeoffCard">
                  <div className="csTradeoffCard-header">
                    <span className="csTradeoffCard-decision">{item.decision}</span>
                    <span className="csTradeoffCard-vs">vs</span>
                    <span className="csTradeoffCard-alt">{item.alternative}</span>
                  </div>
                  <div className="csTradeoffCard-verdict">
                    <i className="uil uil-check-circle"></i> {item.verdict}
                  </div>
                  <div className="csToGrid">
                    <div className="csToItem csToItem--pro">
                      <span className="csToItem-label">
                        <i className="uil uil-thumbs-up"></i> {lang === "en" ? "Why we chose it" : "Por que escolhemos"}
                      </span>
                      <ul>
                        {item.pros.map((p, j) => <li key={j}>{p}</li>)}
                      </ul>
                    </div>
                    <div className="csToItem csToItem--con">
                      <span className="csToItem-label">
                        <i className="uil uil-thumbs-down"></i> {lang === "en" ? "Trade-off accepted" : "Trade-off aceito"}
                      </span>
                      <ul>
                        {item.cons.map((c, j) => <li key={j}>{c}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SCALABILITY ── */}
        {activeTab === "scalability" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-chart-growth"></i> {cs.scalability.title}
            </h4>
            <p className="csPanel-intro">{cs.scalability.intro}</p>

            <div className="csDiagramWrapper">
              <ScaleDiagram lang={lang} />
            </div>

            <div className="csScaleGrid">
              {cs.scalability.pillars.map((p, i) => (
                <div key={i} className="csScaleCard">
                  <div className={`csScaleCard-icon csScaleCard-icon--${p.color}`}>
                    <i className={p.icon}></i>
                  </div>
                  <h5>{p.title}</h5>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="csBottleneck">
              <i className="uil uil-info-circle"></i>
              <span><strong>{lang === "en" ? "Known bottleneck:" : "Gargalo conhecido:"}</strong> {cs.scalability.bottleneck}</span>
            </div>
          </div>
        )}

        {/* ── SECURITY ── */}
        {activeTab === "security" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-shield-check"></i> {cs.security.title}
            </h4>
            <p className="csPanel-intro">{cs.security.intro}</p>

            <div className="csSecGrid">
              {cs.security.items.map((item, i) => (
                <div key={i} className="csSecCard">
                  <div className="csSecCard-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                  <div className="csSecCard-tag">{item.tag}</div>
                </div>
              ))}
            </div>

            <div className="csPerfBox">
              <h5><i className="uil uil-tachometer-fast"></i> {cs.security.perfTitle}</h5>
              <div className="csPerfMetrics">
                {cs.security.metrics.map((m, i) => (
                  <div key={i} className="csPerfMetric">
                    <span className="csPerfMetric-value">{m.value}</span>
                    <span className="csPerfMetric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="csCta container">
        <a
          href="https://github.com/ArthurViegas01/RAG"
          target="_blank"
          rel="noreferrer"
          className="button button--flex"
        >
          <i className="bx bxl-github"></i> {cs.ctaGithub}
        </a>
        <a
          href="https://contextrag.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="button button--flex button--outline"
        >
          <i className="uil uil-external-link-alt"></i> {cs.ctaDemo}
        </a>
      </div>
    </section>
  );
};

export default CaseStudy;
