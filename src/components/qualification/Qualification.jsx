import { useRef, useEffect, useState } from "react";
import "./qualification.css";
import { useLanguage } from "../../context/LanguageContext";

/*
 * Horizontal timeline (time flows on the X axis).
 *
 * Architecture note: cards, axis nodes and duration capsules are ALL direct
 * children of ONE CSS grid (.qtl) and are positioned by the SAME `grid-column`
 * index. That single source of truth is what guarantees a card, its stem and
 * its node share one column center (pixel-perfect alignment) and what lets the
 * 2021 column hold the degree (above the axis) and the first job (below it) on
 * the exact same X position: the "studied while working" story.
 *
 * Columns (chronological slots): 1=2016  2=2017  3=2021  4=2023  5=2024  6=trailing gutter.
 */
const Qualification = () => {
  const { t, lang } = useLanguage();
  const en = lang === "en";
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setOn(true); obs.disconnect(); }
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // ── Single merged, chronological source of truth ──────────────────────────
  // capStart/capEnd are grid-column lines for the duration capsule on the axis.
  const events = [
    {
      id: "tec", kind: "edu", col: 1,
      icon: "uil uil-graduation-cap",
      date: "2016",
      title: en ? "Technical Degree in IT" : "Técnico em TI",
      org: "Instituto Adventista de São Paulo",
    },
    {
      id: "hs", kind: "edu", col: 2, capStart: 2, capEnd: 3,
      icon: "uil uil-graduation-cap",
      date: "2017 – 2019",
      title: en ? "High School" : "Ensino Médio",
      org: "Cesi, Viamópolis",
    },
    {
      id: "bsc", kind: "edu", col: 3, capStart: 3, capEnd: 7,
      icon: "uil uil-graduation-cap",
      date: "2021 – 2025",
      title: en ? "B.Sc. Software Engineering" : "Engenharia de Software",
      org: "PUCRS",
      srNote: en ? "Concurrent with full-time work" : "Simultâneo ao trabalho",
    },
    {
      id: "dell", kind: "exp", col: 3, capStart: 3, capEnd: 4,
      icon: "uil uil-briefcase-alt",
      date: "2021 – 2022",
      title: en ? "Data Analyst (Intern)" : "Analista de Dados (Estágio)",
      org: "Dell / PUCRS",
      desc: en
        ? "Tableau dashboards and automated data pipelines."
        : "Dashboards em Tableau e automação de pipelines de dados.",
      srNote: en ? "Concurrent with B.Sc. Software Engineering" : "Simultâneo à graduação",
    },
    {
      id: "dgi", kind: "exp", col: 4, capStart: 4, capEnd: 5,
      icon: "uil uil-briefcase-alt",
      date: "2023 – 2024",
      title: en ? "Fullstack Developer (Intern)" : "Desenvolvedor Fullstack (Estágio)",
      org: "Dataglass",
      desc: en
        ? "Django REST + React features, Docker, AWS deploys."
        : "Features em Django REST + React, Docker e deploy na AWS.",
    },
    {
      id: "dgf", kind: "exp", col: 5, capStart: 5, capEnd: 7, present: true,
      icon: "uil uil-bolt",
      date: `2024 – ${t.qualification.present}`,
      title: en ? "Full Stack Developer" : "Desenvolvedor Full Stack",
      org: "Dataglass",
      desc: en
        ? "Hired after the internship. Architecture, CI/CD, AWS."
        : "Efetivado após o estágio. Arquitetura, CI/CD e AWS.",
      srNote: en ? "Current role" : "Cargo atual",
    },
  ];

  // One bead per chronological slot (the 2021 slot is shared by two cards).
  const nodes = [
    { col: 1, year: "2016", side: "below" },
    { col: 2, year: "2017", side: "below" },
    { col: 3, year: "2021", side: "below", shared: true },
    { col: 4, year: "2023", side: "above" },
    { col: 5, year: "2024", side: "above", present: true },
  ];

  const capsules = events
    .filter((e) => e.capEnd)
    .map((e) => ({ id: e.id, kind: e.kind, start: e.capStart, end: e.capEnd, present: e.present }));

  return (
    <section className="qualification section" id="qualification">
      <h2 className="sectionTitle">{t.qualification.title}</h2>
      <span className="sectionSubtitle">{t.qualification.subtitle}</span>

      {/* Legend: names the two tracks (also the non-color signal for a11y) */}
      <div className="qtl-legend">
        <span className="qtl-legend__item" data-kind="edu">
          <i className="uil uil-graduation-cap" aria-hidden="true" />
          {t.qualification.education}
        </span>
        <span className="qtl-legend__item" data-kind="exp">
          <i className="uil uil-briefcase-alt" aria-hidden="true" />
          {t.qualification.experience}
        </span>
      </div>

      <div className="qtl-scroll" role="region" aria-label={t.qualification.title} tabIndex={0}>
        <div
          className={`qtl${on ? " qtl--on" : ""}`}
          ref={ref}
          role="list"
        >
          {/* ── Axis (decorative) ── */}
          <span className="qtl-axis" aria-hidden="true">
            <span className="qtl-axis__base" />
            <span className="qtl-axis__progress" />
          </span>

          {/* ── Convergence beam behind the 2021 interchange (decorative) ── */}
          <span className="qtl-beam" aria-hidden="true" style={{ gridColumn: 3 }} />

          {/* ── Duration capsules on the axis (decorative) ── */}
          {capsules.map((c) => (
            <span
              key={`cap-${c.id}`}
              className="qtl-cap"
              data-kind={c.kind}
              data-present={c.present || undefined}
              aria-hidden="true"
              style={{ gridColumn: `${c.start} / ${c.end}`, "--d": `${c.start * 0.09}s` }}
            />
          ))}

          {/* ── Nodes: bead + year label (decorative) ── */}
          {nodes.map((n) => (
            <span
              key={`node-${n.col}`}
              className="qtl-node"
              data-side={n.side}
              data-shared={n.shared || undefined}
              data-present={n.present || undefined}
              aria-hidden="true"
              style={{ gridColumn: n.col, "--d": `${n.col * 0.09 + 0.1}s` }}
            >
              <span className="qtl-bead" />
              <span className="qtl-year">{n.year}</span>
            </span>
          ))}

          {/* ── Live terminus: the journey continues past 2024 ── */}
          <span className="qtl-now" aria-hidden="true" style={{ gridColumn: 6 }}>
            <i className="uil uil-angle-double-right qtl-now__arrow" />
            <span className="qtl-now__label">{t.qualification.today}</span>
          </span>

          {/* ── Cards: ONE template, identical anatomy for every event ── */}
          {events.map((e, i) => (
            <article
              key={e.id}
              className="qtl-card"
              role="listitem"
              data-kind={e.kind}
              data-present={e.present || undefined}
              aria-label={[e.title, e.org, e.date, e.srNote].filter(Boolean).join(", ")}
              style={{ gridColumn: e.col, "--d": `${i * 0.09 + 0.25}s` }}
            >
              <header className="qtl-card__head">
                <span className="qtl-card__chip">
                  <i className={e.icon} aria-hidden="true" />
                </span>
                <span className="qtl-card__date">{e.date}</span>
              </header>
              <h3 className="qtl-card__title">{e.title}</h3>
              <p className="qtl-card__org">
                <i className="uil uil-building" aria-hidden="true" />
                {e.org}
              </p>
              {e.desc && <p className="qtl-card__desc">{e.desc}</p>}
            </article>
          ))}
        </div>
      </div>

      {/* Parallel-chapter footnote (the 2021 study + work overlap) */}
      <p className={`qtl-note${on ? " qtl-note--on" : ""}`}>
        <span className="qtl-note__dot" aria-hidden="true" />
        {t.qualification.parallel}
      </p>
    </section>
  );
};

export default Qualification;
