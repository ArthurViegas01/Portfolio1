import ImgDonut from "../../assets/donutblender.png";
import ImgTransportadora from "../../assets/work2.jpg";
import ImgContextRag from "../../assets/work3.jpg";
import ImgJogoGeneral from "../../assets/work4.jpg";
import ImgDataglass from "../../assets/work6.jpg";
import ImgUICompGenerator from "../../assets/work7.jpg";
import ImgTerraform from "../../assets/work8.jpg"; // Terraform AWS Infrastructure
import ImgMCP from "../../assets/work10.jpg"; // MCP Server project

export const projectsData = [
  {
    id: 1,
    image: ImgContextRag,
    title: "Context (RAG)",
    category: "ai",
    description_pt:
      "Pipeline RAG end-to-end com FastAPI e Celery para processamento assincrono de documentos. Faz upload de PDFs e DOCXs, realiza chunking com LangChain, gera embeddings via Sentence Transformers (all-MiniLM-L6-v2), armazena vetores no PostgreSQL + pgvector para busca semantica e consulta o Llama 3 via Groq API para respostas contextualizadas.",
    description_en:
      "End-to-end RAG pipeline built with FastAPI and Celery for async document processing. Uploads PDF and DOCX files, chunks content with LangChain, generates embeddings via Sentence Transformers (all-MiniLM-L6-v2), stores vectors in PostgreSQL + pgvector for semantic search, and queries Llama 3 through the Groq API for context-aware answers.",
    technologies: ["FastAPI", "Celery", "pgvector", "LangChain", "Groq / Llama 3"],
    link: "https://contextrag.netlify.app",
    github: "https://github.com/ArthurViegas01/RAG",
  },
  {
    id: 2,
    image: ImgDataglass,
    title: "Dataglass",
    category: "fullstack",
    description_pt:
      "Plataforma SaaS brasileira de Business Intelligence integrada ao Tableau. Gerencia dashboards, controla acesso por perfis de empresa e processa dados com Celery e Redis. Deploy em producao na AWS com Docker, Elastic Beanstalk, ECR e S3. Integracao com Mailgun, Bugsnag e Intercom.",
    description_en:
      "Brazilian SaaS Business Intelligence platform integrated with Tableau Server. Manages dashboards, controls access per company profile, and processes data with Celery and Redis. Deployed on AWS with Docker, Elastic Beanstalk, ECR, and S3. Integrated with Mailgun, Bugsnag, and Intercom.",
    technologies: ["Django", "DRF", "Celery", "Docker", "AWS", "Tableau"],
    link: "https://dataglass.co",
    github: null,
  },
  {
    id: 3,
    image: ImgJogoGeneral,
    title: "Jogo General",
    category: "web",
    description_pt:
      "Implementacao web do classico jogo de dados General (Yahtzee). Desenvolvido com Vue 3 (Composition API) e Pinia para gerenciamento de estado, com logica completa de pontuacao e interface interativa.",
    description_en:
      "Web implementation of the classic dice game General (Yahtzee). Built with Vue 3 (Composition API) and Pinia for state management, featuring complete scoring logic and an interactive UI.",
    technologies: ["Vue 3", "Pinia", "JavaScript", "CSS3"],
    link: "https://jogogeneral.netlify.app",
    github: "https://github.com/ArthurViegas01/general",
  },
  {
    id: 4,
    image: ImgTransportadora,
    title: "Transportadora",
    category: "web",
    description_pt:
      "Sistema de gestao de transporte de cargas com calculadora de rotas (dados DNIT), formulario multi-step, dashboard analitico com graficos de custo por rota, exportacao CSV e estado global com Context API + useReducer.",
    description_en:
      "Full rewrite of a legacy project (CRA + jQuery) to a modern stack. Freight transport management system with a route calculator (DNIT data), multi-step form, analytics dashboard with cost-per-route charts, CSV export, and global state via Context API + useReducer.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "React Router"],
    link: "https://delytransporte.netlify.app",
    github: "https://github.com/ArthurViegas01/TransporteCargas",
  },
  {
    id: 5,
    image: ImgMCP,
    title: "GitHub Portfolio Intelligence",
    category: "ai",
    description_pt:
      "Servidor MCP (Model Context Protocol) que expoem ferramentas de analise de perfis GitHub para agentes de IA. Claude e outros LLM clients podem analisar repositorios, mapear habilidades para vagas e gerar relatorios de engenheiro em linguagem natural — tudo via protocol nativo de ferramentas. Story: construi uma IA para analisar portfolios de devs, comecando pelo meu proprio.",
    description_en:
      "MCP (Model Context Protocol) server that exposes GitHub profile analysis tools to AI agents. Claude and other LLM clients can analyze repositories, map skills to job postings, and generate engineering reports in natural language — all via the native tool protocol. Story: I built an AI to analyze developer portfolios, starting with my own.",
    technologies: ["Python", "FastMCP", "GitHub API", "LangChain", "Docker", "Railway"],
    link: "https://github.com/ArthurViegas01/mcp-github-analyst",
    github: "https://github.com/ArthurViegas01/mcp-github-analyst",
  },
  {
    id: 6,
    image: ImgUICompGenerator,
    title: "AI Component Generator",
    category: "ai",
    description_pt:
      "Gerador de componentes UI em tempo real com IA. Utiliza streaming via ReadableStream (Groq/Llama 3) e um sandbox seguro em iframe com Babel Standalone para compilar e renderizar codigo TSX/Tailwind instantaneamente. Inclui editor Monaco, gerenciamento de estado com Zustand e sistema de validacao contra alucinacoes.",
    description_en:
      "Real-time AI-powered UI component generator. Features streaming via ReadableStream (Groq/Llama 3) and a secure iframe sandbox using Babel Standalone to compile and render TSX/Tailwind code instantly. Includes Monaco Editor, Zustand state management, and a client-side validation system to prevent AI hallucinations.",
    technologies: ["Next.js 15", "Groq API", "Zustand", "Monaco Editor", "Tailwind CSS", "Framer Motion"],
    link: "https://uicomponentgenerator.netlify.app",
    github: "https://github.com/ArthurViegas01/UI-Component-Generator",
  },
  {
    id: 7,
    image: ImgTerraform,
    title: "Terraform AWS Infrastructure",
    category: "devops",
    description_pt:
      "Infraestrutura AWS completa como codigo (IaC) com Terraform, estruturada em modulos reutilizaveis: networking (VPC, subnets, security groups), compute (EC2 + nginx + FastAPI via user_data), database (RDS opcional) e storage (S3). Estado remoto com S3 + DynamoDB locking. CI/CD via GitHub Actions: terraform plan automatico em PRs e terraform apply no merge para main.",
    description_en:
      "Complete AWS infrastructure as code (IaC) with Terraform, structured in reusable modules: networking (VPC, subnets, security groups), compute (EC2 + nginx + FastAPI via user_data), database (optional RDS), and storage (S3). Remote state with S3 + DynamoDB locking. CI/CD via GitHub Actions: automated terraform plan on PRs and terraform apply on merge to main.",
    technologies: ["Terraform", "AWS", "EC2", "VPC", "S3", "GitHub Actions", "IAM", "SSM"],
    link: "https://github.com/ArthurViegas01/terraform-aws-portfolio-infra",
    github: "https://github.com/ArthurViegas01/terraform-aws-portfolio-infra",
  },
  {
    id: 8,
    image: ImgDonut,
    title: "Donut 3D",
    category: "3d",
    description_pt:
      "Modelagem e renderizacao 3D de um donut realista criado durante o curso Blender Guru. Foco em modelagem, iluminacao e texturizacao com Blender.",
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
  { name: "devops" },
  { name: "web" },
  { name: "3d" },
];
