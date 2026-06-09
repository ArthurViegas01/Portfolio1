/* ============================================================
   CV BUILDER — turns the master resume + a job analysis into a
   tailored, ATS-friendly resume model, then serializes it to
   plain text / Markdown / ATS-HTML (print & Word) and a cover
   letter. All pure functions — no React, no side effects.
   ============================================================ */

import { CATEGORIES } from "../components/skills/skillsData";
import { hasToken } from "./atsEngine";
import { PROFILE, SUMMARY, EXPERIENCE, EDUCATION, PROJECTS, SPOKEN } from "./resumeData";

const CATEGORY_LABELS = {
  ai: { pt: "IA / Engenharia de LLM", en: "AI / LLM Engineering" },
  languages: { pt: "Linguagens", en: "Languages" },
  backend: { pt: "Back-End", en: "Back-End" },
  frontend: { pt: "Front-End", en: "Front-End" },
  data: { pt: "Bancos & Dados", en: "Databases & Data" },
  cloud: { pt: "Cloud / DevOps", en: "Cloud / DevOps" },
  reliability: { pt: "Observabilidade & Confiabilidade", en: "Observability & Reliability" },
  testing: { pt: "Testes & Qualidade", en: "Testing & Quality" },
  architecture: { pt: "Arquitetura & Padrões", en: "Architecture & Patterns" },
  integrations: { pt: "Integrações", en: "Integrations" },
  security: { pt: "Segurança & Compliance", en: "Security & Compliance" },
  practices: { pt: "Práticas & Metodologia", en: "Practices & Methodology" },
  domain: { pt: "Domínio & Especializado", en: "Domain / Specialized" },
};

const SECTION = {
  summary: { pt: "Resumo", en: "Summary" },
  core: { pt: "Competências-chave", en: "Core Competencies" },
  skills: { pt: "Habilidades", en: "Skills" },
  experience: { pt: "Experiência Profissional", en: "Professional Experience" },
  projects: { pt: "Projetos Selecionados", en: "Selected Projects" },
  education: { pt: "Formação", en: "Education" },
  languages: { pt: "Idiomas", en: "Languages" },
};

// Whole-token match via the shared ATS matcher — avoids mid-word/bidirectional
// substring false positives (e.g. "Vite" boosting on "Vitest").
const matchesAny = (text, labels) =>
  labels.some((l) => l.length > 1 && hasToken(text, l));

const tailoredSummary = (lang, base, analysis) => {
  if (!analysis || !analysis.topMatched || !analysis.topMatched.length) return base;
  const top = analysis.topMatched.slice(0, 8).join(", ");
  return (
    base +
    (lang === "pt"
      ? ` Destaques alinhados a esta vaga: ${top}.`
      : ` Highlights aligned to this role: ${top}.`)
  );
};

/**
 * Build a resolved (single-language) resume model, optionally tailored
 * to a job analysis (reorders skills/projects/bullets, never invents).
 */
export function buildModel({ lang = "en", analysis = null } = {}) {
  const matchedLabels = analysis ? analysis.matched.map((m) => m.label) : [];

  // Skills: reorder within and across categories by relevance.
  let skillGroups = CATEGORIES.map((cat) => {
    const skills = cat.skills.map((s) => s.name);
    const ordered = analysis
      ? [...skills].sort(
          (a, b) =>
            (matchesAny(b, matchedLabels) ? 1 : 0) - (matchesAny(a, matchedLabels) ? 1 : 0)
        )
      : skills;
    const relevance = analysis
      ? skills.filter((s) => matchesAny(s, matchedLabels)).length
      : 0;
    return { id: cat.id, label: CATEGORY_LABELS[cat.id]?.[lang] || cat.id, skills: ordered, relevance };
  });
  if (analysis) {
    skillGroups = [...skillGroups].sort((a, b) => b.relevance - a.relevance);
  }

  // Experience: keep all, surface keyword-matching bullets first.
  const experience = EXPERIENCE.map((e) => {
    const bullets = e.bullets[lang] || e.bullets.en;
    const ordered = analysis
      ? [...bullets].sort(
          (a, b) =>
            (matchesAny(b, matchedLabels) ? 1 : 0) - (matchesAny(a, matchedLabels) ? 1 : 0)
        )
      : bullets;
    return {
      company: e.company,
      role: e.role[lang] || e.role.en,
      period: e.period,
      location: e.location[lang] || e.location.en,
      stack: e.stack,
      bullets: ordered,
    };
  });

  // Projects: order by relevance to the job; cap at 5.
  let projects = PROJECTS.map((p) => {
    const hay = [p.name, p.stack.join(" "), p.blurb[lang] || p.blurb.en].join(" ");
    const relevance = analysis ? matchedLabels.filter((l) => hasToken(hay, l)).length : 0;
    return {
      name: p.name,
      stack: p.stack,
      blurb: p.blurb[lang] || p.blurb.en,
      link: p.link,
      relevance,
    };
  });
  if (analysis) projects = [...projects].sort((a, b) => b.relevance - a.relevance);
  projects = projects.slice(0, 5);

  const coreSkills = analysis ? analysis.matched.slice(0, 14).map((m) => m.label) : [];

  return {
    lang,
    section: Object.fromEntries(Object.entries(SECTION).map(([k, v]) => [k, v[lang]])),
    name: PROFILE.name,
    title: PROFILE.title[lang],
    location: PROFILE.location[lang],
    openTo: PROFILE.openTo[lang],
    email: PROFILE.email,
    phone: PROFILE.phone,
    links: PROFILE.links,
    summary: tailoredSummary(lang, SUMMARY[lang], analysis),
    coreSkills,
    skillGroups,
    experience,
    projects,
    education: EDUCATION.map((e) => ({
      school: e.school[lang] || e.school.en,
      degree: e.degree[lang] || e.degree.en,
      period: e.period,
    })),
    spoken: SPOKEN[lang],
    meta: {
      tailored: !!analysis,
      role: analysis?.role ? analysis.role[lang] : null,
      score: analysis?.score ?? null,
    },
  };
}

// ── Serializers ──

export function toPlainText(m) {
  const L = [];
  L.push(m.name.toUpperCase());
  L.push(m.title);
  L.push(`${m.location}  |  ${m.openTo}`);
  L.push(`${m.email}  |  ${m.phone}`);
  L.push(`${m.links.site}  |  ${m.links.github}  |  ${m.links.linkedin}`);
  L.push("");
  L.push(m.section.summary.toUpperCase());
  L.push(m.summary);
  L.push("");
  if (m.coreSkills.length) {
    L.push(m.section.core.toUpperCase());
    L.push(m.coreSkills.join(" · "));
    L.push("");
  }
  L.push(m.section.skills.toUpperCase());
  m.skillGroups.forEach((g) => L.push(`${g.label}: ${g.skills.join(", ")}`));
  L.push("");
  L.push(m.section.experience.toUpperCase());
  m.experience.forEach((e) => {
    L.push(`${e.role} — ${e.company} (${e.period}, ${e.location})`);
    e.bullets.forEach((b) => L.push(`  - ${b}`));
    L.push("");
  });
  L.push(m.section.projects.toUpperCase());
  m.projects.forEach((p) => {
    L.push(`${p.name}`);
    L.push(`  ${p.stack.join(", ")}`);
    L.push(`  ${p.blurb}`);
    L.push("");
  });
  L.push(m.section.education.toUpperCase());
  m.education.forEach((e) => L.push(`${e.degree} — ${e.school} (${e.period})`));
  L.push("");
  L.push(m.section.languages.toUpperCase());
  L.push(m.spoken);
  return L.join("\n");
}

// Escape angle brackets only, so renderers don't treat e.g. "<script setup>"
// as an HTML tag and strip it. (& is left literal — it renders fine in Markdown.)
const mdEsc = (s) => String(s).replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function toMarkdown(m) {
  const L = [];
  L.push(`# ${m.name}`);
  L.push(`**${m.title}** — ${m.location} · ${m.openTo}`);
  L.push("");
  L.push(`${m.email} · ${m.phone} · ${m.links.site} · ${m.links.github} · ${m.links.linkedin}`);
  L.push("");
  L.push(`## ${m.section.summary}`);
  L.push(mdEsc(m.summary));
  if (m.coreSkills.length) {
    L.push("");
    L.push(`## ${m.section.core}`);
    L.push(m.coreSkills.map((s) => `\`${s}\``).join(" "));
  }
  L.push("");
  L.push(`## ${m.section.skills}`);
  m.skillGroups.forEach((g) => L.push(`- **${g.label}:** ${mdEsc(g.skills.join(", "))}`));
  L.push("");
  L.push(`## ${m.section.experience}`);
  m.experience.forEach((e) => {
    L.push(`### ${e.role} — ${e.company}`);
    L.push(`*${e.period} · ${e.location}*`);
    e.bullets.forEach((b) => L.push(`- ${mdEsc(b)}`));
    L.push("");
  });
  L.push(`## ${m.section.projects}`);
  m.projects.forEach((p) => {
    L.push(`### ${p.name}`);
    L.push(`*${mdEsc(p.stack.join(" · "))}*`);
    L.push(mdEsc(p.blurb));
    L.push("");
  });
  L.push(`## ${m.section.education}`);
  m.education.forEach((e) => L.push(`- **${e.degree}** — ${e.school} *(${e.period})*`));
  L.push("");
  L.push(`## ${m.section.languages}`);
  L.push(m.spoken);
  return L.join("\n");
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Clean single-column semantic HTML — parseable by ATS, printable to PDF,
// and openable in Word (.doc).
export function toAtsHtml(m, { forWord = false } = {}) {
  const head = forWord
    ? `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8">`
    : `<!DOCTYPE html><html lang="${m.lang}"><head><meta charset="utf-8">`;

  const style = `
    <style>
      @page { size: A4; margin: 14mm; }
      * { box-sizing: border-box; }
      body { font-family: Calibri, Arial, "Segoe UI", sans-serif; color: #1a1a1a; font-size: 10.5pt; line-height: 1.4; max-width: 800px; margin: 0 auto; padding: 16px; }
      h1 { font-size: 19pt; margin: 0 0 2px; }
      .role { font-size: 11.5pt; color: #2f3a86; font-weight: 600; margin: 0 0 4px; }
      .contact { font-size: 9pt; color: #333; margin-bottom: 10px; }
      h2 { font-size: 11pt; text-transform: uppercase; letter-spacing: .04em; border-bottom: 1.5px solid #2f3a86; color: #2f3a86; padding-bottom: 2px; margin: 14px 0 6px; }
      p { margin: 0 0 6px; }
      ul { margin: 2px 0 8px; padding-left: 18px; }
      li { margin: 0 0 3px; }
      .job-head { display: flex; justify-content: space-between; gap: 8px; }
      .job-head strong { font-size: 10.5pt; }
      .muted { color: #555; }
      .sk b { color: #1a1a1a; }
      .proj { margin-bottom: 8px; }
      .proj .stack { font-size: 8.8pt; color: #2f3a86; }
      .core { font-size: 9.5pt; }
      a { color: #2f3a86; text-decoration: none; }
    </style>`;

  const contact = [
    esc(m.email),
    esc(m.phone),
    esc(m.location),
    `<a href="https://${esc(m.links.site)}">${esc(m.links.site)}</a>`,
    `<a href="https://${esc(m.links.github)}">${esc(m.links.github)}</a>`,
    `<a href="https://${esc(m.links.linkedin)}">${esc(m.links.linkedin)}</a>`,
  ].join(" &nbsp;•&nbsp; ");

  const core = m.coreSkills.length
    ? `<h2>${esc(m.section.core)}</h2><p class="core">${m.coreSkills.map(esc).join(" &nbsp;·&nbsp; ")}</p>`
    : "";

  const skills = m.skillGroups
    .map((g) => `<p class="sk"><b>${esc(g.label)}:</b> ${esc(g.skills.join(", "))}</p>`)
    .join("");

  const experience = m.experience
    .map(
      (e) => `
      <div class="job-head"><strong>${esc(e.role)} — ${esc(e.company)}</strong><span class="muted">${esc(e.period)} · ${esc(e.location)}</span></div>
      <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`
    )
    .join("");

  const projects = m.projects
    .map(
      (p) => `<div class="proj"><strong>${esc(p.name)}</strong><div class="stack">${esc(p.stack.join(" · "))}</div><div>${esc(p.blurb)}</div></div>`
    )
    .join("");

  const education = m.education
    .map((e) => `<p><strong>${esc(e.degree)}</strong> — ${esc(e.school)} <span class="muted">(${esc(e.period)})</span></p>`)
    .join("");

  return `${head}<title>${esc(m.name)} — ${esc(m.title)}</title>${style}</head><body>
    <h1>${esc(m.name)}</h1>
    <p class="role">${esc(m.title)} · ${esc(m.openTo)}</p>
    <p class="contact">${contact}</p>
    <h2>${esc(m.section.summary)}</h2>
    <p>${esc(m.summary)}</p>
    ${core}
    <h2>${esc(m.section.skills)}</h2>
    ${skills}
    <h2>${esc(m.section.experience)}</h2>
    ${experience}
    <h2>${esc(m.section.projects)}</h2>
    ${projects}
    <h2>${esc(m.section.education)}</h2>
    ${education}
    <h2>${esc(m.section.languages)}</h2>
    <p>${esc(m.spoken)}</p>
  </body></html>`;
}

export function toCoverLetter({ lang = "en", analysis = null } = {}) {
  const roleName =
    (analysis?.role && analysis.role[lang]) || (lang === "pt" ? "a vaga" : "the role");
  const top = analysis?.topMatched?.slice(0, 6).join(", ") || "";
  const date = new Date().toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (lang === "pt") {
    return `${date}

Prezada equipe de recrutamento,

Escrevo para demonstrar meu interesse em ${roleName}. Sou Engenheiro de Software com 4 anos de experiência construindo sistemas de IA em produção — pipelines RAG, orquestração multi-agente com LangGraph, servidores MCP e back-ends cloud-native com FastAPI, Django, AWS e Terraform.

Meu perfil se alinha diretamente aos requisitos da vaga${top ? `, com destaque para: ${top}` : ""}. Na Dataglass, liderei a Dockerização completa da plataforma e construí pipelines de CI/CD na AWS que eliminaram 100% dos passos manuais de deploy, além de desenvolver um agente de IA in-product na Vertex AI.

Teria prazer em contribuir com a mesma combinação de profundidade técnica e foco em produção no seu time. Obrigado pela consideração.

Atenciosamente,
${PROFILE.name}
${PROFILE.email} · ${PROFILE.phone}`;
  }

  return `${date}

Dear Hiring Team,

I'm writing to express my interest in ${roleName}. I'm a Software Engineer with 4 years of experience building production AI systems — RAG pipelines, multi-agent orchestration with LangGraph, MCP servers, and cloud-native back-ends with FastAPI, Django, AWS, and Terraform.

My background maps directly to your requirements${top ? `, notably: ${top}` : ""}. At Dataglass I led the full Dockerization of the platform and built AWS CI/CD pipelines that eliminated 100% of manual deploy steps, and I shipped an in-product AI agent on Vertex AI.

I'd be glad to bring the same blend of technical depth and production focus to your team. Thank you for your consideration.

Best regards,
${PROFILE.name}
${PROFILE.email} · ${PROFILE.phone}`;
}

export function fileSlug(m) {
  const tag = m.meta.tailored
    ? (m.meta.role || "tailored").replace(/[^a-zA-Z]+/g, "-")
    : "master";
  return `Arthur-Viegas-CV-${tag}-${m.lang}`.replace(/-+/g, "-");
}
