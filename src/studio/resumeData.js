/* ============================================================
   MASTER RESUME — single source of truth for CV generation
   ------------------------------------------------------------
   Bilingual (pt/en). This is the always-up-to-date data the
   Studio uses to generate tailored, ATS-friendly CVs. Skills
   come from ../components/skills/skillsData.js so there is one
   source of truth for the skill set.
   PT uses proper accents (this produces a real document, unlike
   translations.js which is accent-light for UI code).
   ============================================================ */

export const PROFILE = {
  name: "Arthur Pereira Viegas",
  title: {
    pt: "Engenheiro Full-Stack & de IA",
    en: "Full-Stack & AI Engineer",
  },
  location: {
    pt: "Porto Alegre, RS, Brasil",
    en: "Porto Alegre, Brazil",
  },
  openTo: {
    pt: "Aberto a oportunidades remotas / Irlanda",
    en: "Open to remote opportunities / Ireland",
  },
  email: "arthurpviegas@gmail.com",
  phone: "+55 51 99613-4122",
  links: {
    site: "arthurviegas.netlify.app",
    github: "github.com/ArthurViegas01",
    linkedin: "linkedin.com/in/arthur-viegas",
  },
};

export const SUMMARY = {
  pt: "Engenheiro de Software com 4 anos de experiência construindo sistemas de IA em produção. Especializado em pipelines RAG, orquestração multi-agente com LangGraph, servidores MCP e back-ends cloud-native (FastAPI, Django, AWS, Terraform). Bacharel em Engenharia de Software pela PUCRS. Inglês fluente e experiência em times internacionais distribuídos.",
  en: "Software Engineer with 4 years of experience building production AI systems. Specialized in RAG pipelines, multi-agent orchestration with LangGraph, MCP servers, and cloud-native back-ends (FastAPI, Django, AWS, Terraform). B.Sc. in Software Engineering (PUCRS). Fluent English with experience on distributed international teams.",
};

export const EXPERIENCE = [
  {
    company: "Dataglass",
    role: { pt: "Desenvolvedor Full-Stack (Estágio)", en: "Full-Stack Developer (Intern)" },
    period: "2023 – 2024",
    location: { pt: "Remoto", en: "Remote" },
    stack: ["Django", "DRF", "React", "Celery", "Redis", "Docker", "AWS", "Vertex AI", "Tableau"],
    bullets: {
      pt: [
        "Entreguei features full-stack em Django REST Framework e React para um SaaS multi-tenant de Business Intelligence em dados de saúde, integrado ao Tableau.",
        "Liderei a Dockerização completa da plataforma e construí pipelines de CI/CD na AWS (CodePipeline, CodeBuild, Elastic Beanstalk, ECR) que eliminaram 100% dos passos manuais de deploy.",
        "Construí um agente de IA in-product na Vertex AI com function calling (Gemini) para Q&A com RAG sobre os dados dos clientes.",
        "Processei dados de forma assíncrona com Celery + Redis/ElastiCache e integrei APIs de terceiros (Mailgun, Bugsnag, Intercom).",
        "Atuei em sprints Scrum com código revisado via pull requests; contribuí com revisões e documentação que ajudaram a reduzir o ciclo de PR do time em ~40%.",
      ],
      en: [
        "Shipped full-stack features across Django REST Framework and React for a multi-tenant health-data Business Intelligence SaaS integrated with Tableau.",
        "Led the full Dockerization of the platform and built AWS CI/CD pipelines (CodePipeline, CodeBuild, Elastic Beanstalk, ECR) that eliminated 100% of manual deploy steps.",
        "Built an in-product AI agent on Vertex AI with Gemini function calling for retrieval-augmented Q&A over client data.",
        "Processed data asynchronously with Celery + Redis/ElastiCache and integrated third-party APIs (Mailgun, Bugsnag, Intercom).",
        "Worked in Scrum sprints with code reviewed via pull requests; contributed thorough reviews and documentation that helped cut the team's PR cycle time ~40%.",
      ],
    },
  },
  {
    company: "Dell / PUCRS",
    role: { pt: "Analista de Dados (Estágio)", en: "Data Analyst (Intern)" },
    period: "2021 – 2022",
    location: { pt: "Porto Alegre, BR", en: "Porto Alegre, BR" },
    stack: ["Tableau", "SQL", "Python", "Data Pipelines"],
    bullets: {
      pt: [
        "Analisei dados educacionais e construí dashboards em Tableau para apoiar decisões pedagógicas em um programa conjunto Dell–PUCRS.",
        "Automatizei relatórios e pipelines de dados, reduzindo trabalho manual recorrente.",
      ],
      en: [
        "Analyzed educational data and built Tableau dashboards to support pedagogical decisions in a joint Dell–PUCRS program.",
        "Automated reporting and data pipelines, reducing recurring manual work.",
      ],
    },
  },
];

export const EDUCATION = [
  {
    school: {
      pt: "PUCRS — Pontifícia Universidade Católica do Rio Grande do Sul",
      en: "PUCRS — Pontifical Catholic University of Rio Grande do Sul",
    },
    degree: {
      pt: "Bacharelado em Engenharia de Software",
      en: "B.Sc. in Software Engineering",
    },
    period: "2021 – 2025",
  },
  {
    school: {
      pt: "Instituto Adventista de São Paulo",
      en: "Instituto Adventista de São Paulo",
    },
    degree: { pt: "Técnico em TI", en: "Technical Degree in IT" },
    period: "2016",
  },
];

export const SPOKEN = {
  pt: "Português (nativo) · Inglês (avançado / profissional)",
  en: "Portuguese (native) · English (advanced / professional)",
};

// Recruiter-facing project entries. `keywords` feed the tailoring
// relevance ranking; `stack` is what prints on the CV.
export const PROJECTS = [
  {
    id: "encaixe",
    name: "Encaixe — Multi-Tenant WhatsApp AI SaaS",
    category: "ai",
    stack: ["FastAPI", "LangGraph", "Claude Haiku", "Voyage AI", "pgvector", "Celery", "Redis", "Next.js 14", "Supabase", "Terraform"],
    link: "github.com/ArthurViegas01/ZapAgent",
    blurb: {
      pt: "SaaS de atendimento com um agente LangGraph (máquina de estados de 6 nós) que classifica intenção, busca FAQ por similaridade (Voyage AI + pgvector), agenda no Google Calendar e escala para humano. Multi-tenancy com Row-Level Security, observabilidade (Sentry, structlog), rate limiting com circuit breaker e CI/CD no GitHub Actions.",
      en: "Customer-service SaaS with a LangGraph agent (6-node state machine) that classifies intent, retrieves FAQ via similarity search (Voyage AI + pgvector), books appointments via Google Calendar, and escalates to a human. Multi-tenancy via Row-Level Security, observability (Sentry, structlog), rate limiting with a circuit breaker, and GitHub Actions CI/CD.",
    },
  },
  {
    id: "context",
    name: "Context — RAG Pipeline over Private Documents",
    category: "ai",
    stack: ["FastAPI", "Celery", "pgvector", "fastembed / ONNX", "LangChain", "React", "Docker", "Nginx"],
    link: "github.com/ArthurViegas01/RAG",
    blurb: {
      pt: "Pipeline RAG end-to-end: upload de PDFs/DOCX, chunking com LangChain, embeddings locais (fastembed/ONNX) em pgvector (HNSW) e busca híbrida (vetorial + full-text em português) com Reciprocal Rank Fusion. LLM multi-provider (Groq / Ollama / OpenAI) trocável por env var; totalmente containerizado.",
      en: "End-to-end RAG pipeline: PDF/DOCX upload, LangChain chunking, local embeddings (fastembed/ONNX) into pgvector (HNSW), and hybrid search (vector + Portuguese full-text) with Reciprocal Rank Fusion. Multi-provider LLM (Groq / Ollama / OpenAI) switchable by env var; fully containerized.",
    },
  },
  {
    id: "devscope",
    name: "Devscope — MCP Server for AI Agents",
    category: "ai",
    stack: ["Python", "FastMCP", "GitHub API", "Groq / Llama 3.1-70b", "LangChain", "Redis", "Docker", "Terraform"],
    link: "github.com/ArthurViegas01/Reporeaver",
    blurb: {
      pt: "Servidor Model Context Protocol que expõe ferramentas de análise de perfis GitHub a LLM clients via Streamable HTTP / JSON-RPC. Quatro tools (FastMCP), saída estruturada com LangChain, cache em Redis e rate limiter atômico em Lua, com Terraform (Railway + Netlify) e imagens no GHCR.",
      en: "Model Context Protocol server exposing GitHub profile-analysis tools to LLM clients over Streamable HTTP / JSON-RPC. Four FastMCP tools, LangChain structured output, Redis cache and a Lua atomic rate limiter, provisioned with Terraform (Railway + Netlify) and images on GHCR.",
    },
  },
  {
    id: "synth",
    name: "Synth — Real-Time AI Component Generator",
    category: "ai",
    stack: ["Next.js 15", "Groq API", "Monaco Editor", "Babel Standalone", "Zustand", "Tailwind CSS"],
    link: "github.com/ArthurViegas01/componentgenerator",
    blurb: {
      pt: "Streaming de TSX gerado por LLM token-a-token em um editor Monaco, compilado ao vivo no navegador com Babel Standalone dentro de um iframe sandbox endurecido. Rota Next.js única abstrai quatro provedores de LLM; inclui validação client-side e persistência com Zustand.",
      en: "Streams LLM-generated TSX token-by-token into a Monaco editor, compiled live in the browser with Babel Standalone inside a hardened iframe sandbox. A single Next.js route abstracts four LLM providers; includes client-side validation and Zustand persistence.",
    },
  },
  {
    id: "dely",
    name: "Dely — Freight Calculator & Analytics",
    category: "fullstack",
    stack: ["React 18", "TypeScript", "Vite", "Recharts", "Tailwind CSS"],
    link: "github.com/ArthurViegas01/TransporteCargas",
    blurb: {
      pt: "App de transporte de cargas que calcula rotas, custos e alocação de frota por peso entre capitais, com wizard multi-step e dashboard analítico (Recharts, tabela com busca/ordenação, export CSV). Estado com Context API + useReducer e unions discriminadas em TypeScript.",
      en: "Cargo-transport app computing routes, costs, and weight-based fleet allocation across capitals, with a multi-step wizard and analytics dashboard (Recharts, searchable/sortable table, CSV export). State via Context API + useReducer and TypeScript discriminated unions.",
    },
  },
  {
    id: "general",
    name: "General — Vue 3 Dice-Game Scoreboard",
    category: "fullstack",
    stack: ["Vue 3", "Pinia", "Vue Router", "Vite"],
    link: "github.com/ArthurViegas01/general",
    blurb: {
      pt: "Placar digital mobile-first em Vue 3 (<script setup>) com Pinia setup store, guards de navegação, modais com Teleport, transições animadas e composables Promise-based para modais/toasts.",
      en: "Mobile-first digital scoreboard in Vue 3 (<script setup>) with a Pinia setup store, navigation guards, Teleport modals, animated transitions, and Promise-based modal/toast composables.",
    },
  },
];

// The polished, designer-made PDF that already ships with the site.
export const DESIGNED_CV_FILENAME = "CVarthurviegas.pdf";
