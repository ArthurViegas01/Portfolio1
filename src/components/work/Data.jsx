import ImgDonut from "../../assets/donutblender.png";

// Thumbs com variantes dark / light  [(1) = light mode]
import ImgEncaixeDark  from "../../assets/Encaixe.png";
import ImgEncaixeLight from "../../assets/Encaixe (1).png";

import ImgContextRagDark  from "../../assets/Context _RAG_.png";
import ImgContextRagLight from "../../assets/Context _RAG_ (1).png";

import ImgDataglassDark  from "../../assets/Dataglass.png";
import ImgDataglassLight from "../../assets/Dataglass (1).png";

import ImgDelyDark  from "../../assets/Dely.png";
import ImgDelyLight from "../../assets/Dely (1).png";

import ImgJogoGeneralDark  from "../../assets/Jogo General.png";
import ImgJogoGeneralLight from "../../assets/Jogo General (1).png";

import ImgSynthDark  from "../../assets/Synth _AI Component Generator_.png";
import ImgSynthLight from "../../assets/Synth _AI Component Generator_ (1).png";

import ImgDevscopeDark  from "../../assets/Devscope.png";
import ImgDevscLight    from "../../assets/Devscope (1).png";

import ImgMiranteDark  from "../../assets/Mirante.png";
import ImgMiranteLight from "../../assets/Mirante (1).png";

// Screenshots reais dos apps (exibidas no hover dos cards)
import ScreenEncaixe        from "../../assets/encaixe.jpg";
import ScreenContextRag     from "../../assets/work3.jpg";
import ScreenDataglass      from "../../assets/work6.jpg";
import ScreenTransportadora from "../../assets/TransportadoraDely.png";
import ScreenJogoGeneral    from "../../assets/work4.jpg";
import ScreenSynth          from "../../assets/work7.jpg";
import ScreenDevscope       from "../../assets/work10.jpg";

export const projectsData = [
  // ── Projeto em destaque ───────────────────────────────────────────────────────
  {
    id: 8,
    image: ImgMiranteDark,
    imageLight: ImgMiranteLight,
    title: "Mirante",
    category: ["fullstack", "ai"],
    description_pt:
      "Central de comando pessoal (single-user) que unifica gestão de projetos, monitoramento de serviços ao vivo e a busca de carreira: vagas, CV mestre adaptável por IA e CRM de candidaturas. Backend em Go (monólito modular, domain-driven) com SQLite via libSQL/Turso, tempo real por SSE e LLM (Groq) com saída estruturada via JSON Schema. Front em SvelteKit (Svelte 5, runes) sobre design system próprio em CSS nativo moderno (View Transitions, dark mode, acessibilidade). Deploy em containers no Railway.",
    description_en:
      "Single-user personal command center unifying project management, live service monitoring, and the full job hunt: postings, an AI-adaptable master CV, and an applications CRM. Go backend (domain-driven modular monolith) with SQLite via libSQL/Turso, real-time over SSE, and an LLM (Groq) with structured output via JSON Schema. SvelteKit front end (Svelte 5, runes) on a custom design system in modern native CSS (View Transitions, dark mode, accessibility). Deployed in containers on Railway.",
    technologies: ["Go", "SvelteKit", "Svelte 5", "libSQL / Turso", "SSE", "Groq", "Railway"],
    link: "https://mirante-web-production.up.railway.app",
    github: null,
  },

  // ── Página 1 ────────────────────────────────────────────────────────────────
  {
    id: 0,
    image: ImgEncaixeDark,
    imageLight: ImgEncaixeLight,
    screenshot: ScreenEncaixe,
    title: "Encaixe",
    category: "ai",
    description_pt:
      "SaaS multi-tenant de atendimento via WhatsApp com IA. Agente LangGraph classifica intencao, busca FAQ por similaridade (pgvector + Voyage AI), agenda no Google Calendar e transfere para humano quando a confianca e baixa. Arquitetura hexagonal com adapter pluggable de provider WhatsApp (Evolution / WPP / Meta Cloud) e fallback Stub para E2E sem rede.",
    description_en:
      "Multi-tenant WhatsApp customer-service SaaS powered by AI. A LangGraph agent classifies intent, retrieves FAQ via similarity search (pgvector + Voyage AI), books appointments in Google Calendar, and hands off to a human when confidence drops. Hexagonal architecture with a pluggable WhatsApp provider adapter (Evolution / WPP / Meta Cloud) and a Stub fallback for E2E without network.",
    technologies: ["FastAPI", "LangGraph", "Claude Haiku", "pgvector", "Next.js 14", "Supabase", "Evolution API"],
    link: "https://github.com/ArthurViegas01/ZapAgent",
    github: "https://github.com/ArthurViegas01/ZapAgent",
  },
  {
    id: 1,
    image: ImgContextRagDark,
    imageLight: ImgContextRagLight,
    screenshot: ScreenContextRag,
    title: "Context (RAG)",
    category: "ai",
    description_pt:
      "Pipeline RAG end-to-end com FastAPI e Celery para processamento assíncrono de documentos. Faz upload de PDFs e DOCXs, realiza chunking com LangChain, gera embeddings via Sentence Transformers (all-MiniLM-L6-v2), armazena vetores no PostgreSQL + pgvector para busca semântica e consulta o Llama 3 via Groq API para respostas contextualizadas.",
    description_en:
      "End-to-end RAG pipeline built with FastAPI and Celery for async document processing. Uploads PDF and DOCX files, chunks content with LangChain, generates embeddings via Sentence Transformers (all-MiniLM-L6-v2), stores vectors in PostgreSQL + pgvector for semantic search, and queries Llama 3 through the Groq API for context-aware answers.",
    technologies: ["FastAPI", "Celery", "pgvector", "LangChain", "Groq / Llama 3"],
    link: "https://contextrag.netlify.app",
    github: "https://github.com/ArthurViegas01/RAG",
  },
  {
    id: 2,
    image: ImgDataglassDark,
    imageLight: ImgDataglassLight,
    screenshot: ScreenDataglass,
    title: "Dataglass",
    category: ["fullstack", "web"],
    description_pt:
      "Plataforma SaaS brasileira de Business Intelligence integrada ao Tableau. Gerencia dashboards, controla acesso por perfis de empresa e processa dados com Celery e Redis. Deploy em produção na AWS com Docker, Elastic Beanstalk, ECR e S3. Integração com Mailgun, Bugsnag e Intercom.",
    description_en:
      "Brazilian SaaS Business Intelligence platform integrated with Tableau Server. Manages dashboards, controls access per company profile, and processes data with Celery and Redis. Deployed on AWS with Docker, Elastic Beanstalk, ECR, and S3. Integrated with Mailgun, Bugsnag, and Intercom.",
    technologies: ["Django", "DRF", "Celery", "Docker", "AWS", "Tableau"],
    link: "https://dataglass.co",
    github: null,
  },
  {
    id: 3,
    image: ImgJogoGeneralDark,
    imageLight: ImgJogoGeneralLight,
    screenshot: ScreenJogoGeneral,
    title: "Jogo General",
    category: "web",
    description_pt:
      "Implementação web do clássico jogo de dados General (Yahtzee). Desenvolvido com Vue 3 (Composition API) e Pinia para gerenciamento de estado, com lógica completa de pontuação e interface interativa.",
    description_en:
      "Web implementation of the classic dice game General (Yahtzee). Built with Vue 3 (Composition API) and Pinia for state management, featuring complete scoring logic and an interactive UI.",
    technologies: ["Vue 3", "Pinia", "JavaScript", "CSS3"],
    link: "https://jogogeneral.netlify.app",
    github: "https://github.com/ArthurViegas01/general",
  },
  {
    id: 4,
    image: ImgDevscopeDark,
    imageLight: ImgDevscLight,
    screenshot: ScreenDevscope,
    title: "Devscope",
    category: "ai",
    description_pt:
      "Servidor MCP (Model Context Protocol) que expõe ferramentas de análise de perfis GitHub para agentes de IA. Claude e outros LLM clients podem analisar repositórios, mapear habilidades para vagas e gerar relatórios de engenheiro em linguagem natural — tudo via protocolo nativo de ferramentas. Story: construí uma IA para analisar portfólios de devs, começando pelo meu próprio.",
    description_en:
      "MCP (Model Context Protocol) server that exposes GitHub profile analysis tools to AI agents. Claude and other LLM clients can analyze repositories, map skills to job postings, and generate engineering reports in natural language — all via the native tool protocol. Story: I built an AI to analyze developer portfolios, starting with my own.",
    technologies: ["Python", "FastMCP", "GitHub API", "LangChain", "Docker", "Railway", "Terraform"],
    link: "https://github.com/ArthurViegas01/Reporeaver",
    github: "https://github.com/ArthurViegas01/Reporeaver",
  },
  {
    id: 5,
    image: ImgSynthDark,
    imageLight: ImgSynthLight,
    screenshot: ScreenSynth,
    title: "Synth",
    category: "ai",
    description_pt:
      "Gerador de componentes UI em tempo real com IA. Utiliza streaming via ReadableStream (Groq/Llama 3) e um sandbox seguro em iframe com Babel Standalone para compilar e renderizar código TSX/Tailwind instantaneamente. Inclui editor Monaco, gerenciamento de estado com Zustand e sistema de validação contra alucinações.",
    description_en:
      "Real-time AI-powered UI component generator. Features streaming via ReadableStream (Groq/Llama 3) and a secure iframe sandbox using Babel Standalone to compile and render TSX/Tailwind code instantly. Includes Monaco Editor, Zustand state management, and a client-side validation system to prevent AI hallucinations.",
    technologies: ["Next.js 15", "Groq API", "Zustand", "Monaco Editor", "Tailwind CSS", "Framer Motion"],
    link: "https://uicomponentgenerator.netlify.app",
    github: "https://github.com/ArthurViegas01/componentgenerator",
  },

  // ── Página 2 ────────────────────────────────────────────────────────────────
  {
    id: 6,
    image: ImgDelyDark,
    imageLight: ImgDelyLight,
    screenshot: ScreenTransportadora,
    title: "Transportadora",
    category: "web",
    description_pt:
      "Sistema de gestão de transporte de cargas com calculadora de rotas (dados DNIT), formulário multi-step, dashboard analítico com gráficos de custo por rota, exportação CSV e estado global com Context API + useReducer.",
    description_en:
      "Full rewrite of a legacy project (CRA + jQuery) to a modern stack. Freight transport management system with a route calculator (DNIT data), multi-step form, analytics dashboard with cost-per-route charts, CSV export, and global state via Context API + useReducer.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "React Router"],
    link: "https://delytransporte.netlify.app",
    github: "https://github.com/ArthurViegas01/TransporteCargas",
  },
  {
    id: 7,
    image: ImgDonut,
    title: "Donut 3D",
    category: "3d",
    description_pt:
      "Modelagem e renderização 3D de um donut realista criado durante o curso Blender Guru. Foco em modelagem, iluminação e texturização com Blender.",
    description_en:
      "3D modeling and rendering of a realistic donut, created during the Blender Guru course. Focused on modeling, lighting, and texturing with Blender.",
    technologies: ["Blender", "3D Modeling", "Rendering"],
    link: "https://www.youtube.com/watch?v=B_ymnGZIKK4",
    github: null,
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "ai" },
  { name: "fullstack" },
  { name: "web" },
  { name: "3d" },
];
