export const translations = {
  pt: {
    nav: {
      home: 'Home',
      skills: 'Habilidades',
      services: 'Serviços',
      qualification: 'Qualificações',
      portfolio: 'Portfolio',
      contact: 'Contato',
    },
    home: {
      subtitle: 'Full Stack & AI Engineer',
      description:
        'Engenheiro de Software graduado pela PUCRS especializado em sistemas com IA. Construo pipelines RAG end-to-end com FastAPI, processo documentos de forma assíncrona com Celery e implemento busca semântica com pgvector. Combino arquitetura de dados com desenvolvimento Full Stack de alto impacto.',
      cta: 'Fale comigo!',
    },
    about: {
      title: 'Sobre mim',
      subtitle: 'Minha introdução',
      description:
        'Full Stack Engineer especializado em backends com IA. Graduado em Engenharia de Software pela PUCRS, construí pipelines RAG end-to-end com FastAPI, LangChain, Sentence Transformers e pgvector. Inglês fluente, com experiência em projetos reais entregando sistemas que combinam LLMs com arquitetura de dados robusta.',
      downloadCV: 'Download Currículo',
      experience: 'Experiência',
      experienceYears: '4+ anos de desenvolvimento',
      projects: 'Projetos',
      projectsCount: '10+ projetos entregues',
      support: 'Disponibilidade',
      supportText: 'Aberto a oportunidades remotas',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Expertise técnica',
    },
    services: {
      title: 'Serviços',
      subtitle: 'O que eu ofereço:',
      items: [
        {
          icon: 'uil uil-robot',
          title: 'AI / RAG Engineering',
          description:
            'Desenvolvimento de pipelines RAG end-to-end para sistemas de perguntas e respostas sobre documentos.',
          bullets: [
            'Chunking e embedding de documentos com LangChain e Sentence Transformers',
            'Busca semântica com PostgreSQL + pgvector',
            'Integração com LLMs (Llama 3 via Groq API, Ollama)',
            'Processamento assíncrono de PDFs e DOCXs com Celery + Redis',
          ],
        },
        {
          icon: 'uil uil-layer-group',
          title: 'Full Stack Development',
          description:
            'Desenvolvimento de aplicações web completas, do backend à interface do usuário.',
          bullets: [
            'APIs REST escaláveis com FastAPI e Django',
            'Interfaces modernas com React e Vue 3',
            'Containerização com Docker e Docker Compose',
            'Deploy em Railway, Netlify e AWS',
          ],
        },
        {
          icon: 'uil uil-database',
          title: 'API & Data Architecture',
          description:
            'Design de arquiteturas de dados e APIs para sistemas de alto desempenho.',
          bullets: [
            'Modelagem de bancos vetoriais com pgvector',
            'Filas assíncronas com Celery + Redis',
            'Integrações REST e pipelines de dados',
            'Gestão de secrets segura (AWS Secrets Manager)',
          ],
        },
      ],
      seeMore: 'Veja mais',
      close: 'Fechar',
    },
    qualification: {
      title: 'Qualificação',
      subtitle: 'Minha jornada',
      education: 'Educação',
      experience: 'Experiência',
    },
    work: {
      title: 'Portfolio',
      subtitle: 'Projetos recentes',
      viewProject: 'Ver projeto',
      github: 'GitHub',
      viewDetails: 'Ver detalhes',
      categories: {
        all: 'Todos',
        python: 'Python',
        vue: 'Vue',
        bootstrap: 'Bootstrap',
        design: 'Design',
      },
    },
    contact: {
      title: 'Entre em contato',
      subtitle: 'Fale comigo',
      contactsTitle: 'Contatos',
      writeMe: 'Me escreva',
      formTitle: 'Me envie seu projeto',
      name: 'Nome',
      namePlaceholder: 'Digite seu nome',
      email: 'Email',
      emailPlaceholder: 'Digite seu email',
      project: 'Projeto',
      projectPlaceholder: 'Descreva seu projeto',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar. Tente novamente.',
      errors: {
        nameRequired: 'Nome é obrigatório',
        emailRequired: 'Email é obrigatório',
        emailInvalid: 'Email inválido',
        projectRequired: 'Descreva seu projeto',
      },
    },
    footer: {
      about: 'Sobre mim',
      projects: 'Projetos',
      rights: '© Arthur Pereira Viegas. Todos os direitos reservados',
    },
  },

  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      services: 'Services',
      qualification: 'Experience',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    home: {
      subtitle: 'Full Stack & AI Engineer',
      description:
        'Software Engineer graduated from PUCRS, specialized in AI-powered systems. I build end-to-end RAG pipelines with FastAPI, process documents asynchronously with Celery, and implement semantic search with pgvector. I combine data architecture with high-impact Full Stack development.',
      cta: "Let's talk!",
    },
    about: {
      title: 'About me',
      subtitle: 'My introduction',
      description:
        'Full Stack Engineer specialized in AI-powered backends. B.Sc. in Software Engineering from PUCRS. I built end-to-end RAG pipelines with FastAPI, LangChain, Sentence Transformers, and pgvector. Fluent in English, with hands-on experience shipping systems that combine LLMs with robust data architecture.',
      downloadCV: 'Download CV',
      experience: 'Experience',
      experienceYears: '4+ years of development',
      projects: 'Projects',
      projectsCount: '10+ projects shipped',
      support: 'Availability',
      supportText: 'Open to remote opportunities',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical expertise',
    },
    services: {
      title: 'Services',
      subtitle: 'What I offer:',
      items: [
        {
          icon: 'uil uil-robot',
          title: 'AI / RAG Engineering',
          description:
            'End-to-end RAG pipeline development for document question-answering systems.',
          bullets: [
            'Document chunking & embedding with LangChain and Sentence Transformers',
            'Semantic search with PostgreSQL + pgvector',
            'LLM integration (Llama 3 via Groq API, Ollama)',
            'Async PDF and DOCX processing with Celery + Redis',
          ],
        },
        {
          icon: 'uil uil-layer-group',
          title: 'Full Stack Development',
          description:
            'End-to-end web application development, from backend APIs to user interfaces.',
          bullets: [
            'Scalable REST APIs with FastAPI and Django',
            'Modern interfaces with React and Vue 3',
            'Containerization with Docker and Docker Compose',
            'Deployment on Railway, Netlify, and AWS',
          ],
        },
        {
          icon: 'uil uil-database',
          title: 'API & Data Architecture',
          description:
            'Data and API architecture design for high-performance systems.',
          bullets: [
            'Vector database modeling with pgvector',
            'Async task queues with Celery + Redis',
            'REST integrations and data pipelines',
            'Secrets management and secure configuration (AWS Secrets Manager)',
          ],
        },
      ],
      seeMore: 'See more',
      close: 'Close',
    },
    qualification: {
      title: 'Qualification',
      subtitle: 'My journey',
      education: 'Education',
      experience: 'Experience',
    },
    work: {
      title: 'Portfolio',
      subtitle: 'Recent projects',
      viewProject: 'View project',
      github: 'GitHub',
      viewDetails: 'View details',
      categories: {
        all: 'All',
        python: 'Python',
        vue: 'Vue',
        bootstrap: 'Bootstrap',
        design: 'Design',
      },
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Contact me',
      contactsTitle: 'Contact info',
      writeMe: 'Write me',
      formTitle: 'Send me your project',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'Your email',
      project: 'Project',
      projectPlaceholder: 'Describe your project or idea',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send. Please try again.',
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email address',
        projectRequired: 'Please describe your project',
      },
    },
    footer: {
      about: 'About',
      projects: 'Projects',
      rights: '© Arthur Pereira Viegas. All rights reserved',
    },
  },
};
