import React, { useState } from "react";
import "./casestudy.css";
import { useLanguage } from "../../context/LanguageContext";
import ArchDiagram          from "./diagrams/ArchDiagram";
import ScaleDiagram         from "./diagrams/ScaleDiagram";
import DataglassDiagram     from "./diagrams/DataglassDiagram";
import DataglassCICDDiagram from "./diagrams/DataglassCICDDiagram";
import MCPDiagram            from "./diagrams/MCPDiagram";
import AIComponentDiagram   from "./diagrams/AIComponentDiagram";

const PROJECTS = [
  { id: "contextRag",   label: "Context (RAG)",           icon: "uil uil-robot",        badge: "AI / RAG"      },
  { id: "dataglass",    label: "Dataglass",               icon: "uil uil-chart-bar",    badge: "SaaS / AWS"    },
  { id: "mcp",          label: "GitHub Portfolio Intel.", icon: "uil uil-plug",          badge: "MCP Server"    },
  { id: "aiComponent",  label: "AI Component Generator", icon: "uil uil-brackets-curly", badge: "AI / Next.js" },
];

const TECH_BADGES = {
  contextRag:  ["FastAPI", "Celery", "Redis", "PostgreSQL", "pgvector", "LangChain", "Sentence Transformers", "Groq / Llama 3"],
  dataglass:   ["Django", "DRF", "Celery", "ElastiCache", "Docker", "ECR", "Elastic Beanstalk", "RDS", "S3", "CodePipeline", "CodeBuild", "Secrets Manager", "Tableau"],
  mcp:         ["Python", "FastMCP", "GitHub API", "LangChain", "Redis", "Pydantic v2", "Groq / Llama 3", "Docker", "Railway"],
  aiComponent: ["Next.js 15", "Groq API", "Llama 3", "Babel Standalone", "Monaco Editor", "Zustand", "Tailwind CSS", "Framer Motion"],
};

const GROUPED_TECH_BADGES = {
  aiComponent: {
    backend:  ["Next.js 15", "Groq API", "Llama 3"],
    frontend: ["Babel Standalone", "Monaco Editor", "Zustand", "Tailwind CSS", "Framer Motion"],
  },
};

const STEP_ICONS = {
  aiComponent: [
    "uil uil-edit-alt",
    "uil uil-server",
    "uil uil-arrows-h",
    "uil uil-filter",
    "uil uil-brackets-curly",
    "uil uil-window",
    "uil uil-exchange-alt",
    "uil uil-cog",
  ],
};

const CTAS = {
  contextRag:  { github: "https://github.com/ArthurViegas01/RAG",                    demo: "https://contextrag.netlify.app"          },
  dataglass:   { github: null,                                                         demo: "https://dataglass.co"                    },
  mcp:         { github: "https://github.com/ArthurViegas01/Reporeaver",              demo: "https://github.com/ArthurViegas01/Reporeaver#readme"           },
  aiComponent: { github: "https://github.com/ArthurViegas01/componentgenerator",     demo: "https://uicomponentgenerator.netlify.app"                       },
};

const DIAGRAMS = {
  contextRag:  ArchDiagram,
  dataglass:   DataglassDiagram,
  mcp:         MCPDiagram,
  aiComponent: AIComponentDiagram,
};

const CaseStudy = () => {
  const { t, lang } = useLanguage();
  const cs = t.caseStudy;

  const [activeProject, setActiveProject] = useState("contextRag");
  const [activeTab,     setActiveTab]     = useState("architecture");

  const content =
    activeProject === "contextRag"  ? cs :
    activeProject === "dataglass"   ? cs.dataglass :
    activeProject === "mcp"         ? cs.mcp :
                                      cs.aiComponent;

  const tabs = [
    { id: "architecture", icon: "uil uil-sitemap",      label: content.tabs.architecture },
    { id: "tradeoffs",    icon: "uil uil-balance-scale", label: content.tabs.tradeoffs    },
    { id: "scalability",  icon: "uil uil-chart-growth",  label: content.tabs.scalability  },
    { id: "security",     icon: "uil uil-shield-check",  label: content.tabs.security     },
    ...(activeProject === "dataglass"
      ? [{ id: "cicd", icon: "uil uil-code-branch", label: content.tabs.cicd }]
      : []),
  ];

  const activeProjectMeta = PROJECTS.find((p) => p.id === activeProject);
  const Diagram = DIAGRAMS[activeProject];

  const handleProjectChange = (id) => {
    setActiveProject(id);
    setActiveTab("architecture");
  };

  return (
    <section className="caseStudy section" id="casestudy">
      <h2 className="sectionTitle">{cs.title}</h2>
      <span className="sectionSubtitle">{cs.subtitle}</span>

      {/* Project selector */}
      <div className="csProjectNav container">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            className={`csProjectBtn ${activeProject === p.id ? "csProjectBtn--active" : ""}`}
            onClick={() => handleProjectChange(p.id)}
          >
            <i className={p.icon}></i>
            <span>{p.label}</span>
            <span className="csProjectBadge">{p.badge}</span>
          </button>
        ))}
      </div>

      {/* Hero */}
      <div className="csHero container">
        <div className="csHero-badge">
          <i className={activeProjectMeta.icon}></i> System Design Case Study
        </div>
        <h3 className="csHero-title">{activeProjectMeta.label}</h3>
        <p className="csHero-desc">{content.heroDesc}</p>
        {GROUPED_TECH_BADGES[activeProject] ? (
          <div className="csTechBadgeGroups">
            {Object.entries(GROUPED_TECH_BADGES[activeProject]).map(([groupKey, badges]) => (
              <div key={groupKey} className="csTechBadgeGroup">
                <span className="csTechBadgeGroupLabel">
                  <i className={groupKey === "backend" ? "uil uil-server" : "uil uil-desktop"}></i>
                  {groupKey === "backend" ? "Backend" : "Frontend"}
                </span>
                <div className="csTechBadges">
                  {badges.map((badge) => (
                    <span key={badge} className="csTechBadge">{badge}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="csTechBadges">
            {TECH_BADGES[activeProject].map((badge) => (
              <span key={badge} className="csTechBadge">{badge}</span>
            ))}
          </div>
        )}
      </div>

      {/* Problem statement */}
      <div className="csProblem container">
        <div className="csProblem-icon"><i className="uil uil-exclamation-triangle"></i></div>
        <div>
          <h4 className="csProblem-title">{content.problem.title}</h4>
          <p className="csProblem-text">{content.problem.text}</p>
        </div>
      </div>

      {/* Tab nav */}
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

      {/* Tab panels */}
      <div className="csPanel container">

        {activeTab === "architecture" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-sitemap"></i> {content.architecture.title}
            </h4>
            <p className="csPanel-intro">{content.architecture.intro}</p>
            <div className="csDiagramWrapper">
              <Diagram lang={lang} />
            </div>
            <div className="csFlowSteps">
              {content.architecture.steps.map((step, i) => (
                <div key={i} className="csFlowStep">
                  <div className="csFlowStep-num">{i + 1}</div>
                  <div>
                    <strong>
                      {STEP_ICONS[activeProject]?.[i] && (
                        <i className={`${STEP_ICONS[activeProject][i]} csFlowStep-icon`}></i>
                      )}
                      {step.title}
                    </strong>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tradeoffs" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-balance-scale"></i> {content.tradeoffs.title}
            </h4>
            <p className="csPanel-intro">{content.tradeoffs.intro}</p>
            <div className="csTradeoffGrid">
              {content.tradeoffs.items.map((item, i) => (
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
                        <i className="uil uil-thumbs-up"></i> {lang === "en" ? "Why i chose it" : "Por que escolhi"}
                      </span>
                      <ul>{item.pros.map((p, j) => <li key={j}>{p}</li>)}</ul>
                    </div>
                    <div className="csToItem csToItem--con">
                      <span className="csToItem-label">
                        <i className="uil uil-thumbs-down"></i> {lang === "en" ? "Trade-off accepted" : "Trade-off aceito"}
                      </span>
                      <ul>{item.cons.map((c, j) => <li key={j}>{c}</li>)}</ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "scalability" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-chart-growth"></i> {content.scalability.title}
            </h4>
            <p className="csPanel-intro">{content.scalability.intro}</p>
            {activeProject === "contextRag" && (
              <div className="csDiagramWrapper">
                <ScaleDiagram lang={lang} />
              </div>
            )}
            <div className="csScaleGrid">
              {content.scalability.pillars.map((pillar, i) => (
                <div key={i} className="csScaleCard">
                  <div className={`csScaleCard-icon csScaleCard-icon--${pillar.color}`}>
                    <i className={pillar.icon}></i>
                  </div>
                  <h5>{pillar.title}</h5>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
            <div className="csBottleneck">
              <i className="uil uil-info-circle"></i>
              <span>
                <strong>{lang === "en" ? "Known bottleneck:" : "Gargalo conhecido:"}</strong>{" "}
                {content.scalability.bottleneck}
              </span>
              <button
                className="csBottleneckMitigar"
                onClick={() => setActiveTab("tradeoffs")}
              >
                {lang === "en" ? "How to mitigate" : "Como mitigar"} →
              </button>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-shield-check"></i> {content.security.title}
            </h4>
            <p className="csPanel-intro">{content.security.intro}</p>
            <div className="csSecGrid">
              {content.security.items.map((item, i) => (
                <div key={i} className="csSecCard">
                  <div className="csSecCard-icon"><i className={item.icon}></i></div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                  <div className="csSecCard-tag">{item.tag}</div>
                </div>
              ))}
            </div>
            {(activeProject === "dataglass" || activeProject === "mcp") && (
              <div className="csPerfBox">
                <h5><i className="uil uil-tachometer-fast"></i> {content.security.perfTitle}</h5>
                <div className="csPerfMetrics">
                  {content.security.metrics.map((m, i) => (
                    <div key={i} className="csPerfMetric">
                      <span className="csPerfMetric-value">{m.value}</span>
                      <span className="csPerfMetric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "cicd" && activeProject === "dataglass" && (
          <div className="csPanelContent">
            <h4 className="csPanel-title">
              <i className="uil uil-code-branch"></i> {content.cicd.title}
            </h4>
            <p className="csPanel-intro">{content.cicd.intro}</p>
            <div className="csDiagramWrapper">
              <DataglassCICDDiagram lang={lang} />
            </div>
            <div className="csFlowSteps">
              {content.cicd.stages.map((stage, i) => (
                <div key={i} className="csFlowStep">
                  <div className="csFlowStep-num">{i + 1}</div>
                  <div>
                    <strong>{stage.title}</strong>
                    <p>{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="csPerfBox">
              <h5><i className="uil uil-tachometer-fast"></i> {content.cicd.metricsTitle}</h5>
              <div className="csPerfMetrics">
                {content.cicd.metrics.map((m, i) => (
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
        {CTAS[activeProject].github && (
          <a href={CTAS[activeProject].github} target="_blank" rel="noreferrer" className="button button--flex">
            <i className="bx bxl-github"></i> {content.ctaGithub || cs.ctaGithub}
          </a>
        )}
        <a
          href={CTAS[activeProject].demo}
          target="_blank"
          rel="noreferrer"
          className={`button button--flex ${CTAS[activeProject].github ? "button--outline" : ""}`}
        >
          <i className="uil uil-external-link-alt"></i> {content.ctaDemo || cs.ctaDemo}
        </a>
      </div>
    </section>
  );
};

export default CaseStudy;
