# Selected Projects — CV-ready paragraphs (EN)

> One polished, recruiter-facing paragraph per project. Tech stacks reflect **verified source code**.
> Order is by impact: lead with the two flagship AI systems, then the MCP server and the LLM tool,
> then the supporting front-end projects.

---

## Encaixe — Multi-Tenant WhatsApp AI SaaS
**FastAPI · LangGraph · Claude Haiku · Voyage AI · pgvector · Celery · Redis · Next.js 14 · Supabase · Terraform**

Customer-service SaaS for Brazilian small businesses where a **LangGraph agent** (6-node state machine:
classify intent → retrieve context → generate → score confidence → schedule / hand off) answers FAQs via
**Voyage AI + pgvector semantic search**, books appointments through **Google Calendar OAuth2**, and escalates to
a human when confidence is low. Multi-tenancy is enforced with **PostgreSQL Row-Level Security** and a per-request
`app.tenant_id` GUC; conversation state is durably persisted with **LangGraph's Postgres checkpointer**. WhatsApp is
integrated through the **Evolution API** behind a **ports-&-adapters** provider (with an offline stub for tests),
including a Redis side-channel workaround for privacy-mode (`@lid`) contacts. Production-grade: Sentry + structlog
observability, Redis rate limiting with a circuit breaker, idempotent webhooks, LGPD opt-out/retention, and
GitHub Actions CI/CD deploying to a Hetzner VPS (API/worker) and Vercel (Next.js dashboard).

---

## Context — RAG Pipeline over Private Documents
**FastAPI · Celery · pgvector · fastembed/ONNX · LangChain · React · Vite · Docker · Nginx**

Retrieval-Augmented Generation system: users upload PDFs/DOCX and get answers grounded in their own documents with
source attribution. An asynchronous **Celery pipeline** parses (PyMuPDF / python-docx), chunks (LangChain splitters),
and embeds (**fastembed/ONNX, all-MiniLM-L6-v2, no PyTorch**) into **pgvector (HNSW)**. Retrieval is **hybrid** —
vector cosine similarity fused with PostgreSQL full-text search (Portuguese stemming) via **Reciprocal Rank Fusion**,
plus query expansion and accent/ordinal normalization. **Multi-provider LLM** (Groq / Ollama / OpenAI) switchable by
env var. Fully containerized (separate API and worker images), deployable to Railway or a self-hosted VPS behind
**Nginx**, with GitHub Actions CI and coverage reporting.

---

## Devscope — MCP Server for AI Agents
**Python · FastMCP · GitHub API · Groq/Llama 3.1-70b · LangChain · Redis · Docker · Terraform**

**Model Context Protocol** server that exposes GitHub profile-analysis tools to LLM clients (Claude and others).
Four tools registered via FastMCP — analyze profile, evaluate repository, map profile to a job description
(**LangChain structured JSON output**), and stream a recruiter summary token-by-token over **Streamable HTTP /
JSON-RPC**. Backed by **Llama 3.1-70b via Groq**, a namespaced **Redis cache** and a **Lua-based atomic rate limiter**
implemented as custom Starlette middleware covering the mounted MCP sub-app. Multi-stage **Docker** (non-root),
provisioned with **Terraform** (Railway + Netlify providers, with region-policy validation), images published to
**GHCR**, and a React + TypeScript front-end using the official MCP client SDK. Strict quality gates: Ruff, mypy,
pytest with respx + fakeredis.

---

## Synth — Real-Time AI Component Generator
**Next.js 15 · multi-provider LLM · Monaco Editor · Babel Standalone · Zustand**

Tool that streams LLM-generated React/TSX **token-by-token** into a **Monaco editor** and compiles it **live in the
browser** with Babel Standalone inside a hardened **iframe sandbox** (`allow-scripts`, no same-origin), communicating
errors back via `postMessage`. A single streaming **Next.js API route** abstracts four LLM providers
(Groq / Ollama / Anthropic / OpenAI) behind one env-switched interface. Includes client-side validation (import
whitelist, fence stripping), an automatic mock-props generator that infers values from TypeScript types, multi-viewport
preview, revision history, and Zustand stores with localStorage persistence. Deployed on Netlify.

---

## Portfolio — Personal Site with Interactive Architecture Diagrams
**React 18 · Vite · React Context (i18n) · custom SVG diagram engine · EmailJS**

Bilingual (PT/EN) portfolio whose centerpiece is a **custom architecture-diagram engine**: case studies are written as
**declarative specs** (nodes, edges, lanes — no coordinates) that a layout engine turns into accessible SVG with
automatic column alignment and edge routing, fully internationalized. Includes a validated EmailJS contact form and a
Swiper testimonials carousel, and a persisted dark/light theme toggle. Deployed on Netlify (Node 22). [arthurviegas.netlify.app](https://arthurviegas.netlify.app)

---

## Dely — Freight Calculator & Analytics (academic)
**React 18 · TypeScript (strict) · Vite · Recharts · Tailwind**

Cargo-transport app that computes routes, costs, and weight-based **truck-allocation** across Brazilian capitals, with a
multi-step wizard and an analytics dashboard (Recharts bar/pie/line, searchable/sortable table, CSV export). State via
**Context API + useReducer**; calculation outcomes modeled with **TypeScript discriminated unions** for type-safe error
handling. Built for an IT Academy program.

---

## General — Vue 3 Dice-Game Scoreboard
**Vue 3 (Composition API) · Pinia · Vue Router · Vite**

Mobile-first digital scoreboard built with **Vue 3 `<script setup>`** and a **Pinia setup store**, featuring
route navigation guards, `Teleport`-based modals, animated transitions, Promise-based modal/toast composables, and
localStorage persistence. A focused demonstration of the Vue ecosystem.

---

## Dataglass — Multi-Tenant Health-Data SaaS + AI Agent *(professional experience)*
**Django · DRF · Vertex AI · Gemini · Function Calling · Celery · Google Cloud**

Flagship multi-tenant B2B platform selling companies access to curated health-data modules, integrated with Tableau
Cloud. Built an in-product **AI agent on Vertex AI** with Google **function calling** that performs retrieval-augmented
Q&A over client data and orchestrates multi-step workflows. (Led full Dockerization and AWS CI/CD automation —
see professional experience.)
