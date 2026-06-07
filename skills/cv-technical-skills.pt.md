# Competências Técnicas — bloco pronto p/ currículo (PT)

> Substituição direta para a seção **COMPETÊNCIAS TÉCNICAS** do currículo.
> Cada linha é sustentada por código-fonte verificado nos projetos (Encaixe, Context, Devscope, Synth,
> Portfolio, General, Dely) + experiência profissional na Dataglass.

## Opção A — Completa (portfólio / CV detalhado)

**Engenharia de IA / LLM:** Pipelines RAG (ingestão → chunking → embedding → retrieval → geração ancorada), Busca Híbrida (vetorial + keyword) com Reciprocal Rank Fusion, LangGraph (agentes multi-nó, roteamento condicional, checkpointing durável em Postgres), LangChain (prompt templates, saída JSON estruturada), servidores MCP / Model Context Protocol (FastMCP), streaming de LLM token-a-token, abstração multi-provider de LLM (Claude, Groq/Llama 3, Gemini/Vertex AI, OpenAI, Ollama), function/tool calling, classificação de intenção, busca semântica, pgvector (HNSW), embeddings (Voyage AI, Sentence Transformers / fastembed-ONNX), prompt engineering, tracking de tokens/custo por tenant

**Linguagens:** Python, TypeScript, JavaScript (ES2022+), SQL, HTML5, CSS3 / Tailwind / SASS

**Back-End:** FastAPI, Django, Django REST Framework, Celery, Node.js (Next.js API routes), Python assíncrono (asyncio, asyncpg, contextvars), SQLAlchemy 2.0 (async), Pydantic v2, REST APIs, microsserviços, ASGI middleware, webhooks idempotentes, Gunicorn/Uvicorn

**Front-End:** React 18, Next.js (14/15, App Router), Vue 3 (Composition API, Pinia), TypeScript, Vite, Tailwind CSS, gerência de estado (Zustand, Pinia, Context API + useReducer), Monaco Editor, Recharts, Framer Motion, i18n, design responsivo, acessibilidade (ARIA), Zod

**Cloud & DevOps:** AWS (CodePipeline, CodeBuild, Elastic Beanstalk, EC2, S3, ECR, RDS, ElastiCache, Secrets Manager), Google Cloud Platform, Docker & Docker Compose (multi-stage, non-root), Terraform / IaC (providers Railway, Netlify, Hetzner, AWS), CI/CD (GitHub Actions), GHCR, Nginx, Railway, Vercel, Netlify

**Bancos de Dados:** PostgreSQL, pgvector, Redis / ElastiCache / Upstash, Supabase, Row-Level Security (multi-tenancy), migrações Alembic

**Observabilidade & Confiabilidade:** Sentry, structlog (logging estruturado), health checks, rate limiting, circuit breakers, retry/backoff (tenacity), request-ID tracing

**Testes & Qualidade:** pytest (asyncio, coverage), respx, fakeredis, Vitest / Testing Library, Ruff, mypy (strict), ESLint, testes de integração (isolamento de tenant), TDD

**Arquitetura & Práticas:** SaaS multi-tenant, sistemas event-driven, ports & adapters, serviços em camadas/stateless, Git / Git Flow, monorepos, Agile / Scrum / Kanban, code review & mentoria, conformidade com LGPD

**Dados & Analytics:** Tableau (integração via API), visualização de dados, migração de dados, processamento de documentos (PDF/DOCX), NLP em português (FTS, normalização de acentos/ordinais)

**Idiomas:** Português (Nativo), Inglês (Avançado / Profissional)

---

## Opção B — Compacta (CV de 1 página / amigável a ATS)

**Engenharia de IA / LLM:** RAG, Busca Híbrida + RRF, LangGraph, LangChain, MCP (FastMCP), pgvector, embeddings (Voyage AI, Sentence Transformers), function calling, streaming de LLM, multi-provider (Claude, Groq/Llama 3, Gemini, OpenAI, Ollama), prompt engineering

**Linguagens:** Python, TypeScript, JavaScript, SQL, HTML5, CSS3 / SASS

**Back-End:** FastAPI, Django / DRF, Celery, Node.js, Python assíncrono (asyncpg), SQLAlchemy 2.0, Pydantic v2, REST APIs, microsserviços

**Front-End:** React, Next.js, Vue 3, TypeScript, Vite, Tailwind CSS, Zustand / Pinia, Recharts, Framer Motion, design responsivo

**Cloud & DevOps:** AWS (CodePipeline, CodeBuild, Elastic Beanstalk, EC2, S3, ECR, RDS, Secrets Manager), GCP, Docker, Terraform, CI/CD (GitHub Actions), GHCR, Nginx, Railway, Netlify, Vercel

**Bancos de Dados:** PostgreSQL, pgvector, Redis / ElastiCache, Supabase, multi-tenancy com RLS

**Confiabilidade & Testes:** Sentry, structlog, rate limiting, circuit breakers; pytest, Vitest, Ruff, mypy, ESLint, TDD

**Práticas:** SaaS multi-tenant, event-driven, ports & adapters, Git Flow, Agile / Scrum, code review, conformidade LGPD

**Idiomas:** Português (Nativo), Inglês (Avançado)

---

### Notas
- *Sentence Transformers* é correto (usado via `fastembed`/ONNX com `all-MiniLM-L6-v2` no **Context**). **Voyage AI** é o stack de embeddings do **Encaixe** — citar os dois reflete dois pipelines distintos.
- *Gemini / Vertex AI / Function Calling / Tableau / Django / AWS CodePipeline* vêm da experiência profissional na **Dataglass** (repo não incluído nesta pasta; evidência via case study do portfólio).
