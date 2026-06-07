# Technical Skills — CV-ready block (EN)

> Paste-ready replacement for the **TECHNICAL SKILLS** section of the résumé.
> Every line is backed by verified source code across the personal projects (Encaixe, Context, Devscope,
> Synth, Portfolio, General, Dely) plus professional experience at Dataglass.

## Option A — Full (portfolio / detailed CV)

**AI / LLM Engineering:** RAG pipelines (ingestion → chunking → embedding → retrieval → grounded generation), Hybrid Search (vector + keyword) with Reciprocal Rank Fusion, LangGraph (multi-node agents, conditional routing, durable Postgres checkpointing), LangChain (prompt templates, structured JSON output), MCP / Model Context Protocol servers (FastMCP), token-by-token LLM streaming, multi-provider LLM abstraction (Claude, Groq/Llama 3, Gemini/Vertex AI, OpenAI, Ollama), function/tool calling, intent classification, semantic search, pgvector (HNSW), embeddings (Voyage AI, Sentence Transformers / fastembed-ONNX), prompt engineering, per-tenant token/cost tracking

**Languages:** Python, TypeScript, JavaScript (ES2022+), SQL, HTML5, CSS3 / Tailwind / SASS

**Back-End:** FastAPI, Django, Django REST Framework, Celery, Node.js (Next.js API routes), async Python (asyncio, asyncpg, contextvars), SQLAlchemy 2.0 (async), Pydantic v2, REST APIs, microservices, ASGI middleware, idempotent webhooks, Gunicorn/Uvicorn

**Front-End:** React 18, Next.js (14/15, App Router), Vue 3 (Composition API, Pinia), TypeScript, Vite, Tailwind CSS, state management (Zustand, Pinia, Context API + useReducer), Monaco Editor, Recharts, Framer Motion, i18n, responsive design, accessibility (ARIA), Zod

**Cloud & DevOps:** AWS (CodePipeline, CodeBuild, Elastic Beanstalk, EC2, S3, ECR, RDS, ElastiCache, Secrets Manager), Google Cloud Platform, Docker & Docker Compose (multi-stage, non-root), Terraform / IaC (Railway, Netlify, Hetzner, AWS providers), CI/CD (GitHub Actions), GHCR, Nginx, Railway, Vercel, Netlify

**Databases:** PostgreSQL, pgvector, Redis / ElastiCache / Upstash, Supabase, Row-Level Security (multi-tenancy), Alembic migrations

**Observability & Reliability:** Sentry, structlog (structured logging), health checks, rate limiting, circuit breakers, retry/backoff (tenacity), request-ID tracing

**Testing & Code Quality:** pytest (asyncio, coverage), respx, fakeredis, Vitest / Testing Library, Ruff, mypy (strict), ESLint, integration testing (tenant isolation), TDD

**Architecture & Practices:** Multi-tenant SaaS, event-driven systems, ports & adapters, layered/stateless services, Git / Git Flow, monorepos, Agile / Scrum / Kanban, code review & mentoring, LGPD/data-privacy compliance

**Data & Analytics:** Tableau (API integration), data visualization, data migration, document processing (PDF/DOCX), Portuguese NLP (FTS, accent/ordinal normalization)

**Spoken Languages:** Portuguese (Native), English (Advanced / Professional)

---

## Option B — Compact (1-page CV / ATS-friendly)

**AI / LLM Engineering:** RAG, Hybrid Search + RRF, LangGraph, LangChain, MCP (FastMCP), pgvector, embeddings (Voyage AI, Sentence Transformers), function calling, LLM streaming, multi-provider (Claude, Groq/Llama 3, Gemini, OpenAI, Ollama), prompt engineering

**Languages:** Python, TypeScript, JavaScript, SQL, HTML5, CSS3 / SASS

**Back-End:** FastAPI, Django / DRF, Celery, Node.js, async Python (asyncpg), SQLAlchemy 2.0, Pydantic v2, REST APIs, microservices

**Front-End:** React, Next.js, Vue 3, TypeScript, Vite, Tailwind CSS, Zustand / Pinia, Recharts, Framer Motion, responsive design

**Cloud & DevOps:** AWS (CodePipeline, CodeBuild, Elastic Beanstalk, EC2, S3, ECR, RDS, Secrets Manager), GCP, Docker, Terraform, CI/CD (GitHub Actions), GHCR, Nginx, Railway, Netlify, Vercel

**Databases:** PostgreSQL, pgvector, Redis / ElastiCache, Supabase, RLS multi-tenancy

**Reliability & Testing:** Sentry, structlog, rate limiting, circuit breakers; pytest, Vitest, Ruff, mypy, ESLint, TDD

**Practices:** Multi-tenant SaaS, event-driven, ports & adapters, Git Flow, Agile / Scrum, code review, LGPD compliance

**Spoken Languages:** Portuguese (Native), English (Advanced)

---

### Notes
- *Sentence Transformers* is accurate (used via `fastembed`/ONNX with `all-MiniLM-L6-v2` in **Context**). **Voyage AI** is the embedding stack in **Encaixe** — list both to reflect two distinct embedding pipelines.
- *Gemini / Vertex AI / Function Calling / Tableau / Django / AWS CodePipeline* come from professional experience at **Dataglass** (repo not in this folder; evidenced by the portfolio case study).
