import ImgDonut from "../../assets/donutblender.png";
import ImgTransportadora from "../../assets/work2.jpg";
import ImgContextRag from "../../assets/work3.jpg";
import ImgJogoGeneral from "../../assets/work4.jpg";
import ImgDataglass from "../../assets/work6.jpg";

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
  { name: "web" },
  { name: "3d" },
];
