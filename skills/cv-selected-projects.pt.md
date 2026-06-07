# Projetos Selecionados — parágrafos prontos p/ currículo (PT)

> Um parágrafo polido por projeto. As stacks refletem **código-fonte verificado**.
> Ordem por impacto: primeiro os dois sistemas de IA principais, depois o servidor MCP e a ferramenta de LLM,
> e por fim os projetos de front-end de apoio.

---

## Encaixe — SaaS multi-tenant de atendimento via WhatsApp com IA
**FastAPI · LangGraph · Claude Haiku · Voyage AI · pgvector · Celery · Redis · Next.js 14 · Supabase · Terraform**

Plataforma de atendimento ao cliente para pequenos negócios brasileiros onde um **agente LangGraph** (máquina de
estados de 6 nós: classificar intenção → recuperar contexto → gerar → avaliar confiança → agendar / encaminhar)
responde a FAQs via **busca semântica com Voyage AI + pgvector**, marca horários através de **OAuth2 do Google
Calendar** e encaminha para um humano quando a confiança é baixa. O isolamento multi-tenant é garantido por
**Row-Level Security do PostgreSQL** com um GUC `app.tenant_id` por requisição; o estado da conversa é persistido de
forma durável com o **checkpointer Postgres do LangGraph**. O WhatsApp é integrado via **Evolution API** atrás de um
provider em **ports & adapters** (com stub offline para testes), incluindo um workaround com side-channel no Redis para
contatos em modo privado (`@lid`). Pronto para produção: observabilidade com Sentry + structlog, rate limiting no Redis
com circuit breaker, webhooks idempotentes, opt-out/retenção (LGPD) e CI/CD em GitHub Actions com deploy em VPS Hetzner
(API/worker) e Vercel (dashboard Next.js).

---

## Context — Pipeline RAG sobre documentos privados
**FastAPI · Celery · pgvector · fastembed/ONNX · LangChain · React · Vite · Docker · Nginx**

Sistema de Geração Aumentada por Recuperação: o usuário envia PDFs/DOCX e recebe respostas ancoradas nos próprios
documentos, com atribuição de fonte. Um **pipeline assíncrono em Celery** faz parse (PyMuPDF / python-docx), chunking
(splitters do LangChain) e embedding (**fastembed/ONNX, all-MiniLM-L6-v2, sem PyTorch**) para o **pgvector (HNSW)**. A
recuperação é **híbrida** — similaridade vetorial por cosseno combinada com full-text search do PostgreSQL (stemming em
português) via **Reciprocal Rank Fusion**, além de expansão de query e normalização de acentos/ordinais.
**LLM multi-provider** (Groq / Ollama / OpenAI) trocável por variável de ambiente. Totalmente containerizado (imagens
separadas de API e worker), com deploy no Railway ou em VPS self-hosted atrás de **Nginx**, CI em GitHub Actions e
relatório de cobertura.

---

## Devscope — Servidor MCP para agentes de IA
**Python · FastMCP · GitHub API · Groq/Llama 3.1-70b · LangChain · Redis · Docker · Terraform**

Servidor **Model Context Protocol** que expõe ferramentas de análise de perfil do GitHub a clientes LLM (Claude e
outros). Quatro tools registradas via FastMCP — analisar perfil, avaliar repositório, mapear perfil contra uma vaga
(**saída JSON estruturada com LangChain**) e gerar um resumo para recrutadores transmitido token-a-token sobre
**Streamable HTTP / JSON-RPC**. Sustentado por **Llama 3.1-70b via Groq**, um **cache Redis** com namespaces e um
**rate limiter atômico baseado em Lua** implementado como middleware Starlette que cobre o sub-app MCP montado.
**Docker** multi-stage (non-root), provisionado com **Terraform** (providers Railway + Netlify, com validação de
política de região), imagens publicadas no **GHCR** e um front-end React + TypeScript usando o SDK cliente oficial do
MCP. Padrões de qualidade rígidos: Ruff, mypy, pytest com respx + fakeredis.

---

## Synth — Gerador de componentes de IA em tempo real
**Next.js 15 · LLM multi-provider · Monaco Editor · Babel Standalone · Zustand**

Ferramenta que transmite TSX/React gerado por LLM **token-a-token** para um **editor Monaco** e o compila **ao vivo no
navegador** com Babel Standalone dentro de um **iframe sandbox** endurecido (`allow-scripts`, sem same-origin),
comunicando erros de volta via `postMessage`. Uma única **API route de streaming do Next.js** abstrai quatro providers
de LLM (Groq / Ollama / Anthropic / OpenAI) por trás de uma interface trocada por env. Inclui validação client-side
(whitelist de imports, remoção de fences), um gerador automático de mock props que infere valores a partir de tipos
TypeScript, preview multi-viewport, histórico de revisões e stores Zustand com persistência em localStorage. Deploy na
Netlify.

---

## Portfolio — Site pessoal com diagramas de arquitetura interativos
**React 18 · Vite · React Context (i18n) · engine de diagramas SVG própria · EmailJS**

Portfólio bilíngue (PT/EN) cujo destaque é uma **engine própria de diagramas de arquitetura**: os case studies são
escritos como **specs declarativas** (nós, arestas, lanes — sem coordenadas) que um motor de layout converte em SVG
acessível com alinhamento automático de colunas e roteamento de arestas, totalmente internacionalizado. Inclui um
formulário de contato com EmailJS (validado), um carrossel de depoimentos com Swiper e um toggle dark/light persistido.
Deploy na Netlify (Node 22). [arthurviegas.netlify.app](https://arthurviegas.netlify.app)

---

## Dely — Calculadora de fretes & analytics (acadêmico)
**React 18 · TypeScript (strict) · Vite · Recharts · Tailwind**

App de transporte de cargas que calcula rotas, custos e **alocação de caminhões** por peso entre capitais brasileiras,
com um formulário em etapas (wizard) e um dashboard de analytics (Recharts bar/pie/line, tabela com busca/ordenação,
exportação CSV). Estado via **Context API + useReducer**; resultados de cálculo modelados com **uniões discriminadas do
TypeScript** para tratamento de erro type-safe. Construído para um programa do IT Academy.

---

## General — Placar digital de jogo de dados em Vue 3
**Vue 3 (Composition API) · Pinia · Vue Router · Vite**

Placar digital mobile-first feito com **Vue 3 `<script setup>`** e uma **Pinia setup store**, com navigation guards de
rota, modais via `Teleport`, transições animadas, composables de modal/toast baseados em Promise e persistência em
localStorage. Uma demonstração focada do ecossistema Vue.

---

## Dataglass — SaaS multi-tenant de dados de saúde + agente de IA *(experiência profissional)*
**Django · DRF · Vertex AI · Gemini · Function Calling · Celery · Google Cloud**

Plataforma B2B multi-tenant que vende a empresas o acesso a módulos curados de dados de saúde, integrada ao Tableau
Cloud. Desenvolvi um **agente de IA no Vertex AI** com **function calling** do Google que faz Q&A com recuperação
aumentada (RAG) sobre os dados do cliente e orquestra fluxos multi-etapas. (Liderei a Dockerização completa e a
automação de CI/CD na AWS — ver experiência profissional.)
