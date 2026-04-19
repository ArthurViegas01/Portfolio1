import ImgDonut from "../../assets/donutblender.png";
import ImgTransportadora from "../../assets/TransportadoraDely5.png";
import ImgContextRag from "../../assets/work3.jpg";
import ImgJogoGeneral from "../../assets/work4.jpg";

export const projectsData = [
  {
    id: 1,
    image: ImgDonut,
    title: "Donut - 3D",
    category: "Design",
    description:
      "Modelagem e renderização 3D de um donut realista, criado durante o curso Blender Guru. Projeto de aprendizado de modelagem, iluminação e texturização com Blender.",
    technologies: ["Blender", "3D Modeling", "Rendering"],
    link: "https://www.youtube.com/embed/B_ymnGZIKK4",
    github: null,
  },
  {
    id: 2,
    image: ImgTransportadora,
    title: "Transportadora",
    category: "Bootstrap",
    description:
      "Landing page responsiva desenvolvida para uma empresa de transporte. Layout moderno com seções de serviços, frota e contato, construído com HTML, CSS e Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://stcarthurviegas.netlify.app",
    github: null,
  },
  {
    id: 3,
    image: ImgContextRag,
    title: "ContextRAG",
    category: "Python",
    description:
      "Sistema de perguntas e respostas baseado em RAG (Retrieval-Augmented Generation). Permite fazer upload de documentos e obter respostas contextuais usando LLMs e embeddings semânticos.",
    technologies: ["Python", "LangChain", "FastAPI", "React", "OpenAI"],
    link: "https://contextrag.netlify.app",
    github: null,
  },
  {
    id: 4,
    image: ImgJogoGeneral,
    title: "Jogo General",
    category: "React",
    description:
      "Implementação web do clássico jogo de dados General (Yahtzee). Desenvolvido com React, com lógica completa de pontuação, animações de dados e interface interativa.",
    technologies: ["Vue", "JavaScript", "CSS3"],
    link: "https://jogogeneral.netlify.app",
    github: null,
  },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'Bootstrap',
    },
    {
        name: 'React',
    },
    {
        name: 'Python',
    },
    {
        name: 'Design',
    },
    {
        name: 'Vue',
    },
]
