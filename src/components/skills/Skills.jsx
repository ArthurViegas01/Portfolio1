import { useMemo, useState } from "react";
import "./skills.css";
import { useLanguage } from "../../context/LanguageContext";
import {
  CATEGORIES,
  PROJECTS,
  TOTAL_SKILLS,
  TOTAL_CATEGORIES,
  TOTAL_PROJECTS,
} from "./skillsData";

const Skills = () => {
  const { t } = useLanguage();
  const s = t.skills;

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const visibleCategories = useMemo(
    () =>
      activeCategory === "all"
        ? CATEGORIES
        : CATEGORIES.filter((c) => c.id === activeCategory),
    [activeCategory]
  );

  // How many skills (across the whole dataset) the traced project proves —
  // used for the live-region announcement, not just what's currently filtered.
  const projectSkillCount = useMemo(() => {
    if (!activeProject) return 0;
    return CATEGORIES.reduce(
      (sum, c) => sum + c.skills.filter((sk) => sk.proof.includes(activeProject)).length,
      0
    );
  }, [activeProject]);

  // Whether the currently visible cards contain any skill from the traced
  // project — false only when a single category is filtered AND that project
  // touched none of its skills (the otherwise-confusing "all dimmed" state).
  const hasVisibleMatch = useMemo(() => {
    if (!activeProject) return true;
    return visibleCategories.some((c) =>
      c.skills.some((sk) => sk.proof.includes(activeProject))
    );
  }, [activeProject, visibleCategories]);

  // Localized "Proven in: …" text — exposed visually as a tooltip and to
  // assistive tech as visually-hidden content (title alone is unreachable
  // on touch / for screen readers).
  const provenanceLabel = (skill) => {
    const names = skill.proof.map((key) => {
      const p = PROJECTS[key];
      return p?.pro ? `${p.label} (${s.proTag})` : p?.label;
    });
    return `${s.proven}: ${names.join(" · ")}`;
  };

  const toggleProject = (key) =>
    setActiveProject((prev) => (prev === key ? null : key));

  const stats = [
    { value: `${TOTAL_SKILLS}+`, label: s.stats.skills },
    { value: TOTAL_CATEGORIES, label: s.stats.categories },
    { value: TOTAL_PROJECTS, label: s.stats.projects },
    { value: "100%", label: s.stats.verified },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="sectionTitle">{s.title}</h2>
      <span className="sectionSubtitle">{s.subtitle}</span>

      <div className="skillsContainer container">
        {/* Verified-in-code lead + at-a-glance stats */}
        <p className="skillsLead">
          <i className="uil uil-shield-check" aria-hidden="true"></i>
          {s.lead}
        </p>

        <div className="skillsStats">
          {stats.map((stat) => (
            <div key={stat.label} className="skillsStat">
              <span className="skillsStat-value">{stat.value}</span>
              <span className="skillsStat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Category filter — a toggle-button group, not a tab widget */}
        <div className="skillsFilters" role="group" aria-label={s.filterLabel}>
          <button
            type="button"
            aria-pressed={activeCategory === "all"}
            className={`skillsFilter ${activeCategory === "all" ? "skillsFilter--active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            <i className="uil uil-apps" aria-hidden="true"></i>
            <span>{s.all}</span>
            <span className="skillsFilter-count">{TOTAL_SKILLS}</span>
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={activeCategory === cat.id}
              className={`skillsFilter ${activeCategory === cat.id ? "skillsFilter--active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <i className={cat.icon} aria-hidden="true"></i>
              <span>{s.categories[cat.id]}</span>
              <span className="skillsFilter-count">{cat.skills.length}</span>
            </button>
          ))}
        </div>

        {/* key remounts the grid so the staggered skillsCardIn entrance replays on filter change */}
        <div className="skillsGrid" key={activeCategory}>
          {visibleCategories.map((cat, i) => {
            const matchesProject =
              !activeProject || cat.skills.some((sk) => sk.proof.includes(activeProject));

            return (
              <article
                key={cat.id}
                className={`skillsCard ${activeProject && !matchesProject ? "is-dim" : ""}`}
                style={{ "--i": i }}
              >
                <header className="skillsCard-head">
                  <span className={`skillsCard-icon skillsCard-icon--${cat.accent}`}>
                    <i className={cat.icon} aria-hidden="true"></i>
                  </span>
                  <h3 className="skillsCard-title">{s.categories[cat.id]}</h3>
                  <span className="skillsCard-count">{cat.skills.length}</span>
                </header>

                <ul className="skillsChips">
                  {cat.skills.map((skill) => {
                    const matched =
                      activeProject && skill.proof.includes(activeProject);
                    const dimmed = activeProject && !matched;
                    // Briefcase flags skills demonstrated *only* in professional
                    // work (no public repo) — dual-use skills still trace to a
                    // pro project but stay un-badged to avoid clutter.
                    const isPro = skill.proof.every((k) => PROJECTS[k]?.pro);

                    return (
                      <li
                        key={skill.name}
                        className={[
                          "skillChip",
                          skill.core ? "skillChip--core" : "",
                          matched ? "is-match" : "",
                          dimmed ? "is-dim" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        title={provenanceLabel(skill)}
                      >
                        <span className="skillChip-name">{skill.name}</span>
                        {isPro && (
                          <i className="uil uil-briefcase-alt skillChip-pro" aria-hidden="true"></i>
                        )}
                        <span className="sr-only">. {provenanceLabel(skill)}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Empty state: a single category filtered + a project that touched none of it */}
        {activeProject && !hasVisibleMatch && (
          <p className="skillsEmpty">
            <i className="uil uil-search-minus" aria-hidden="true"></i>
            {s.noMatch.replace("{project}", PROJECTS[activeProject].label)}
          </p>
        )}

        {/* Provenance legend — click a project to trace its skills */}
        <div className="skillsLegend">
          <span className="skillsLegend-title">
            <i className="uil uil-link" aria-hidden="true"></i> {s.legendTitle}
          </span>
          <div className="skillsLegend-items">
            {Object.entries(PROJECTS).map(([key, p]) => (
              <button
                key={key}
                type="button"
                aria-pressed={activeProject === key}
                className={`skillsLegend-item ${activeProject === key ? "is-active" : ""}`}
                onClick={() => toggleProject(key)}
              >
                {p.label}
                {p.pro && <span className="skillsLegend-pro">{s.proShort}</span>}
              </button>
            ))}
            {activeProject && (
              <button
                type="button"
                className="skillsLegend-clear"
                onClick={() => setActiveProject(null)}
              >
                <i className="uil uil-times" aria-hidden="true"></i> {s.clear}
              </button>
            )}
          </div>
          <p className="skillsLegend-hint">{s.traceHint}</p>
        </div>

        {/* Screen-reader announcement when a project trace is toggled */}
        <p className="sr-only" aria-live="polite">
          {activeProject
            ? s.traceLive
                .replace("{count}", projectSkillCount)
                .replace("{project}", PROJECTS[activeProject].label)
            : ""}
        </p>

        <p className="skillsSpoken">
          <i className="uil uil-globe" aria-hidden="true"></i> {s.spoken}
        </p>
      </div>
    </section>
  );
};

export default Skills;
