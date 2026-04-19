import ImgDonut from "../../assets/donutblender.png";
import ImgTransportadora from "../../assets/TransportadoraDely5.png";
import ImgContextRag from "../../assets/work3.jpg";
import ImgJogoGeneral from "../../assets/work4.jpg";

export const projectsData = [
  {
    id: 1,
    image: ImgContextRag,
    title: "ContextRAG",
    category: "python",
    description_pt:
      "Pipeline RAG end-to-end com FastAPI e Celery para processamento assíncrono de documentos. Faz upload de PDFs e DOCXs, realiza chunking com LangChain, gera embeddings via Sentence Transformers (all-MiniLM-L6-v2), armazena vetores no PostgreSQL + pgvector para busca semântica e consulta o Llama 3 via Groq API para respostas contextualizadas.",
    description_en:
      "End-to-end RAG pipeline built with FastAPI and Celery for async document processing. Uploads PDF and DOCX files, chunks content with LangChain, generates embeddings via Sentence Transformers (all-MiniLM-L6-v2), stores vectors in PostgreSQL + pgvector for semantic search, and queries Llama 3 through the Groq API for context-aware answers.",
    technologies: ["FastAPI", "Celery", "pgvector", "LangChain", "Groq / Llama 3"],
    link: "https://contextrag.netlify.app",
    github: null,
  },
  {
    id: 2,
    image: ImgJogoGeneral,
    title: "Jogo General",
    category: "vue",
    description_pt:
      "Implementacao web do classico jogo de dados General (Yahtzee). Desenvolvido com Vue 3 (Composition API) e Pinia para gerenciamento de estado, com logica completa de pontuacao, animacoes de dados e interface interativa.",
    description_en:
      "Web implementation of the classic dice game General (Yahtzee). Built with Vue 3 (Composition API) and Pinia for state management, featuring complete scoring logic, dice animations, and an interactive UI.",
    technologies: ["Vue 3", "Pinia", "JavaScript", "CSS3"],
    link: "https://jogogeneral.netlify.app",
    github: null,
  },
  {
    id: 3,
    image: ImgTransportadora,
    title: "Transportadora",
    category: "bootstrap",
    description_pt:
      "Landing page responsiva desenvolvida para uma empresa de transporte. Layout moderno com secoes de servicos, frota e contato, construido com HTML, CSS e Bootstrap.",
    description_en:
      "Responsive landing page for a transport company. Modern layout with services, fleet, and contact sections, built with HTML, CSS, and Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://stcarthurviegas.netlify.app",
    github: null,
  },
  {
    id: 4,
    image: ImgDonut,
    title: "Donut 3D",
    category: "design",
    description_pt:
      "Modelagem e renderizacao 3D de um donut realista, criado durante o curso Blender Guru. Projeto de aprendizado com foco em modelagem, iluminacao e texturizacao com Blender.",
    description_en:
      "3D modeling and rendering of a realistic donut, created during the Blender Guru course. A learning project focused on modeling, lighting, and texturing with Blender.",
    technologies: ["Blender", "3D Modeling", "Rendering"],
    link: "https://www.youtube.com/watch?v=B_ymnGZIKK4",
    github: null,
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "python" },
  { name: "vue" },
  { name: "bootstrap" },
  { name: "design" },
];
