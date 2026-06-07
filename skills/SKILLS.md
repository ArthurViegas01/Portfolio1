# Arthur Pereira Viegas — Inventário Completo de Skills

> **Full-Stack & AI Engineer** · Porto Alegre, RS, Brasil · Aberto a remoto / Irlanda
> arthurviegas@gmail.com · [github.com/ArthurViegas01](https://github.com/ArthurViegas01) · [linkedin.com/in/arthurpviegas](https://linkedin.com/in/arthurpviegas) · [arthurviegas.netlify.app](https://arthurviegas.netlify.app)

Este documento foi gerado a partir da **leitura da documentação e verificação do código-fonte real** dos meus
projetos. Cada skill marcada com ✓ foi confirmada com evidência de arquivo (não apenas mencionada em README).

**Legenda de origem (proveniência da evidência):**

| Tag | Projeto | Codinome | O que é |
|---|---|---|---|
| `Encaixe` | `ZapAgent` | Encaixe | SaaS multi-tenant de atendimento WhatsApp com IA |
| `Context` | `RAG` | Context | Pipeline RAG sobre documentos privados (PDF/DOCX) |
| `Devscope` | `Reporeaver` | Devscope | Servidor MCP de análise de perfis GitHub para LLMs |
| `Synth` | `componentgenerator` | Synth | Gerador de componentes React em tempo real via LLM |
| `Portfolio` | `Portfolio1` | — | Site pessoal com case studies e diagramas interativos |
| `General` | `general` | General | Placar digital do jogo de dados (Vue 3) |
| `Dely` | `TransporteCargas` | Dely | Calculadora de fretes / alocação de frota (acadêmico) |
| `★Profissional` | Dataglass / Dell | — | Experiência profissional (repositório não incluído nesta pasta) |

---

## 1. Mapa: projeto → o que comprova

| Projeto | Stack-núcleo verificada | Destaque técnico |
|---|---|---|
| **Encaixe** | FastAPI · LangGraph · Claude Haiku · Voyage AI · pgvector · Celery · Next.js 14 · Supabase · Terraform | Agente LangGraph de 6 nós com checkpointing durável; isolamento multi-tenant por RLS |
| **Context** | FastAPI · Celery · pgvector · fastembed/ONNX · React/Vite · Docker/Nginx | Busca híbrida (semântica + FTS) com Reciprocal Rank Fusion |
| **Devscope** | FastMCP · GitHub API · Groq/Llama 3.1-70b · LangChain · Terraform · Docker · React/TS | Servidor MCP com 4 tools e streaming token-a-token |
| **Synth** | Next.js 15 · LLM multi-provider · Monaco · Babel in-browser · Zustand | Compilação de TSX no navegador dentro de iframe sandbox |
| **Portfolio** | React 18 · Vite · i18n PT/EN · engine de diagramas SVG · EmailJS | Engine própria de diagramas (DSL declarativa → layout → SVG) |
| **General** | Vue 3 · Pinia · Vue Router · Vite | Composables singleton, guards de rota, Teleport/Transitions |
| **Dely** | React · TypeScript strict · Vite · Recharts · Context+useReducer | Algoritmo de alocação de frota; dashboard com filtros/ordenação |

---

## 2. Skills consolidadas por categoria

> Cada item indica o(s) projeto(s) onde foi **verificado no código**.

### 2.1 Linguagens
- ✓ **Python 3.11 / 3.12** — `Encaixe` `Context` `Devscope`
- ✓ **TypeScript 5.x (strict)** — `Synth` `Devscope (front)` `Encaixe (web)` `Dely`
- ✓ **JavaScript (ES2022, módulos)** — `Portfolio` `General`
- ✓ **SQL (PostgreSQL)** — `Encaixe` `Context`
- ✓ **HTML5 · CSS3 / Tailwind / CSS custom properties** — todos os fronts
- ✓ **Bash / PowerShell** (deploy scripts, Makefile) — `Context` `Encaixe` `Devscope`

### 2.2 IA / Engenharia de LLM
- ✓ **Pipelines RAG completos** (ingestão → chunking → embedding → retrieval → geração com citação) — `Context` `Encaixe`
- ✓ **Busca híbrida** semântica (pgvector cosine) + lexical (Postgres FTS) + **Reciprocal Rank Fusion (RRF)** — `Context` *(search_service.py: `_fuse_rrf`, fórmula 1/(k+rank))*
- ✓ **Postgres Full-Text Search com stemming em português** (`to_tsvector('portuguese')`, `ts_rank`) — `Context`
- ✓ **Query expansion / normalização de acentos / mapeamento de ordinais** PT-BR — `Context` *(`_remove_accents`, `_ORDINAL_MAP`, `_expand_query`)*
- ✓ **pgvector** com índice **HNSW** (`vector_cosine_ops`, operador `<=>`) — `Context (384d)` `Encaixe (1024d)`
- ✓ **Embeddings locais** via **fastembed/ONNX** (`all-MiniLM-L6-v2`, 384d, sem PyTorch) — `Context`
- ✓ **Embeddings via Voyage AI** (família `voyage-3`, vetores de 1024 dim) — `Encaixe`
- ✓ **LangGraph**: agente como máquina de estados de 6 nós com `conditional_edges` (roteamento por confiança) — `Encaixe` *(agent/graph.py)*
- ✓ **LangGraph checkpointing durável** via `AsyncPostgresSaver` (`langgraph-checkpoint-postgres`) — `Encaixe`
- ✓ **LangChain**: `ChatPromptTemplate`, `JsonOutputParser` (saída estruturada), text splitters — `Devscope` `Context` `Encaixe`
- ✓ **MCP (Model Context Protocol)** com **FastMCP**: 4 tools via `@mcp.tool`, transporte **Streamable HTTP / JSON-RPC** — `Devscope`
- ✓ **Streaming de LLM token-a-token** (progress notifications via `ctx.report_progress` + `astream`) — `Devscope`; **ReadableStream/TextDecoder** — `Synth`
- ✓ **Abstração multi-provider de LLM** trocada por env var:
  - Groq (Llama 3) · Ollama (local) · Anthropic (Claude) · OpenAI — `Synth`
  - Groq · Ollama · OpenAI — `Context`
- ✓ **Anthropic SDK** (Claude Haiku via `client.messages.create`) — `Encaixe` `Synth`
- ✓ **Groq + Llama 3.1-70b** via LangChain e SDK bruto — `Devscope`
- ✓ **Classificação de intenção** com cadeia de fallback (LLM → heurística por palavra-chave PT) — `Encaixe`
- ✓ **Extração estruturada (JSON) com Claude** para slot-filling de agendamento — `Encaixe`
- ✓ **Prompt engineering**: system prompts parametrizados por tenant, confidence scoring, handoff humano — `Encaixe` `Synth` `Devscope`
- ✓ **Tracking de custo/tokens** (input/output/cache) por tenant — `Encaixe`
- `★Profissional` **Vertex AI · Gemini · Function Calling** (agente in-product RAG sobre dados de saúde) — Dataglass

### 2.3 Back-end
- ✓ **FastAPI** (async, `Depends` DI, `lifespan`, middleware, webhooks, CORS, Swagger) — `Context` `Devscope` `Encaixe`
- ✓ **Python assíncrono**: `asyncio`, `asyncpg`, `@asynccontextmanager`, **`contextvars`** para estado por task — `Encaixe` `Context` `Devscope`
- ✓ **Connection pooling assíncrono** (`AsyncConnectionPool` asyncpg, min/max) — `Encaixe` `Context`
- ✓ **SQLAlchemy 2.0** (ORM async, modelos declarativos, `AsyncSession`) — `Context` `Encaixe`
- ✓ **Celery + Redis** (fila distribuída, retries, `time_limit`/`soft_time_limit`, Celery Beat) — `Context` `Encaixe`
- ✓ **Pydantic v2 + pydantic-settings** (BaseSettings, `@field_validator`, `model_config`) — todos os Python
- ✓ **ASGI middleware customizado** cobrindo sub-app MCP montado — `Devscope`
- ✓ **Gunicorn + UvicornWorker** para ASGI em produção — `Context`
- ✓ **Idempotência de webhook** via `UNIQUE(source, external_id)` + log de eventos — `Encaixe`
- ✓ **Node.js / Next.js API routes** com streaming — `Synth`
- ✓ Design de **REST API**, padrão **polling** para tarefas longas, **state machine** de status de documento — `Context`
- `★Profissional` **Django · Django REST Framework · Celery** (plataforma principal) — Dataglass

### 2.4 Front-end
- ✓ **React 18** (hooks: `useState/useReducer/useContext/useEffect/useMemo`, refs, Context API) — `Portfolio` `Context` `Devscope` `Dely` `Synth`
- ✓ **Next.js** — 15 App Router + API routes/streaming (`Synth`); 14 App Router + Supabase SSR (`Encaixe`)
- ✓ **Vue 3** Composition API `<script setup>` + **Pinia** (setup store) + **Vue Router** (hash history, lazy routes, navigation guards) — `General`
- ✓ **Vue avançado**: `Teleport`, `Transition`/`TransitionGroup`, `<component :is>`, `defineEmits`, `nextTick` — `General`
- ✓ **Vite** (config, path aliases `@`, `import.meta.env`) — `Portfolio` `Context` `Dely` `Devscope` `General`
- ✓ **Tailwind CSS** (dark mode por classe, utilitários responsivos) — `Synth` `Devscope` `Dely` `Encaixe`
- ✓ **Gerência de estado**: Zustand + persist/localStorage (`Synth`) · Pinia (`General`) · Context API + useReducer (`Dely`)
- ✓ **Monaco Editor** (lazy-load `ssr:false`) + **Babel Standalone** (compilação TSX no navegador) + **iframe sandbox** (`allow-scripts` sem same-origin) — `Synth`
- ✓ **Error boundary via `postMessage`** entre iframe e pai; sistema multi-viewport (mobile/tablet/desktop) — `Synth`
- ✓ **Engine própria de diagramas SVG**: specs declarativas → `computeLayout` (alinhamento de colunas, roteamento automático de arestas) → SVG acessível, i18n-aware — `Portfolio`
- ✓ **Recharts** (bar/pie/line), tabela com busca/filtro/ordenação, **memoização com `useMemo`** — `Dely`
- ✓ **Swiper** (carrossel) · **react-markdown / remark-gfm** — `Portfolio` `Context` `Devscope`
- ✓ **Framer Motion** (animações/transições) — `Synth`
- ✓ **i18n PT/EN** via React Context (`translations.js`) — `Portfolio`
- ✓ **EmailJS** (envio de e-mail client-side, validação de formulário com regex) — `Portfolio`
- ✓ **Toggle dark/light** com persistência em `localStorage` (`Header.jsx`: `document.body.classList('dark-theme')`) — `Portfolio`
- ✓ **Zod** (validação de schema em runtime no front) — `Encaixe (web)`
- ✓ **Forms multi-step / wizard** com validação e enforcement de constraints — `Dely` `Encaixe`
- ✓ **Responsivo mobile-first, dark mode, acessibilidade (ARIA / HTML semântico)** — transversal

### 2.5 Bancos de dados & armazenamento
- ✓ **PostgreSQL 16** + **pgvector** (extensão, `Vector(n)`, índice HNSW) — `Encaixe` `Context`
- ✓ **Row Level Security (RLS) + GUC `app.tenant_id`** (`SET LOCAL`, policies `tenant_isolation`) — `Encaixe`
- ✓ **Redis**: broker/result do Celery, cache com TTL namespaced, rate-limit, cache de JID `@lid`, storage temporário de arquivos com TTL — `Encaixe` `Context` `Devscope`
- ✓ **Lua scripting** para operações atômicas no Redis (INCR + EXPIRE) — `Devscope`
- ✓ **Supabase** (Postgres + Auth + SSR + RLS) — `Encaixe` · **Upstash Redis** (serverless) — `Devscope`
- ✓ **Alembic** (migrações) + migrações SQL versionadas (`0001_init.sql` …) — `Encaixe` `Context`
- ✓ **localStorage** com serialização e tratamento de erro — `General` `Dely` `Synth`
- ✓ **Retenção/purga de dados** (job agendado por `data_retention_days`) — `Encaixe`
- `★Profissional` **AWS S3 · RDS · ElastiCache** (migração de assets e desacoplamento de storage) — Dataglass

### 2.6 Cloud / DevOps / Infra
- ✓ **Docker + Docker Compose** (multi-stage, targets dev/prod, healthchecks, usuário non-root uid:1001) — `Encaixe` `Context` `Devscope`
- ✓ **Terraform / IaC**:
  - providers **Railway + Netlify**, **validação de política de região** no `plan` (regex bloqueando regiões BR) — `Devscope`
  - módulos **Hetzner Cloud** (`hcloud_server` + cloud-init), **AWS Secrets Manager**, Railway — `Encaixe`
- ✓ **CI/CD GitHub Actions**: lint (ruff) + type-check (mypy) + testes/coverage, build & push de imagem, deploy multi-serviço, gates de aprovação manual — `Encaixe` `Context` `Devscope`
- ✓ **GHCR** (registry de containers, tagging semântico `sha`/`latest`/`semver`, redeploy via mutation GraphQL) — `Devscope`
- ✓ **Railway** (`railway.toml`, deploy a partir de Dockerfile) — `Context` `Devscope` `Encaixe`
- ✓ **Netlify** (deploy estático, `netlify.toml`, redirects SPA, security headers, `@netlify/plugin-nextjs`) — `Portfolio` `Synth` `Dely` `Context` `Devscope`
- ✓ **Vercel** (dashboard Next.js) · **Hetzner VPS** (API + worker via Compose) — `Encaixe`
- ✓ **Nginx** (reverse proxy, upstreams, gzip, cache de estáticos, healthcheck) — `Context`
- ✓ **Gestão de segredos** (AWS Secrets Manager, `.env` por ambiente, segredos mascarados no Terraform) — `Encaixe` `Devscope`
- ✓ **Automação de deploy** (`deploy.sh`, `Makefile`) — `Context` `Encaixe` `Devscope`
- `★Profissional` **AWS CodePipeline · CodeBuild · Elastic Beanstalk · EC2 · ECR** (pipeline CI/CD eliminando 100% dos deploys manuais) — Dataglass

### 2.7 Observabilidade & Confiabilidade
- ✓ **structlog** (logging estruturado JSON em prod, console em dev) — `Devscope` `Encaixe`
- ✓ **Sentry** (integrações FastAPI/Celery/httpx/asyncpg, amostragem de traces, `send_default_pii=False`) — `Encaixe`
- ✓ **Health/readiness checks** (endpoint reportando provider, região, conectividade Redis) — `Context` `Devscope` `Encaixe`
- ✓ **Rate limiting** (janela fixa via Redis INCR; per-tenant 120/60s + per-IP 30/60s) — `Encaixe` `Devscope`
- ✓ **Circuit breaker / fail-open** (`_breaker_is_open`/`_on_failure`) — `Encaixe`
- ✓ **Request-ID tracing** (propagação webhook → worker → provider) — `Encaixe`
- ✓ **Retry com backoff** (`tenacity`) e recuperação de tarefas travadas — `Encaixe` `Context`

### 2.8 Testes & Qualidade de código
- ✓ **pytest** (+ `pytest-asyncio`, `pytest-cov`, `pytest-mock`) — `Context` `Devscope` `Encaixe`
- ✓ **respx** (mock de httpx) + **fakeredis** (Redis em memória) — `Devscope` `Encaixe`
- ✓ **Testes de integração de isolamento RLS/tenant** (`test_rls_isolation.py`) — `Encaixe`
- ✓ **Mock de DB e embeddings** via `sys.modules` (testes sem infra externa) — `Context`
- ✓ **Ruff** (lint + format) + **mypy strict** — `Devscope` `Encaixe`
- ✓ **ESLint + @typescript-eslint** — `Devscope` e fronts
- ✓ Dependências de **Vitest + Testing Library** — `Encaixe (web)` `Dely`

### 2.9 Arquitetura & Padrões
- ✓ **SaaS multi-tenant** (RLS + tenant context por request + roteamento de webhook por tenant) — `Encaixe`
- ✓ **Ports & Adapters** (interface `WhatsAppProvider`: `EvolutionProvider` real vs `StubProvider` offline, via factory) — `Encaixe`
- ✓ **Máquina de estados** para orquestração de agente — `Encaixe`
- ✓ **Event-driven** (webhooks idempotentes + filas Redis) — `Encaixe` `Context`
- ✓ **Arquitetura em camadas** (API → fila → workers → DB) e **API stateless** para escala horizontal — `Context` `Synth` `Devscope`
- ✓ **Camada de serviço** (módulos puros `calculadora.ts`/`storage.ts`) — `Dely`
- ✓ **UI declarativa data-driven** (specs/dados separados da lógica de render) — `Portfolio`
- ✓ **Sandbox/isolamento de segurança** (iframe sem same-origin, registry de módulos por regex) — `Synth`

### 2.10 Integrações externas
- ✓ **WhatsApp via Evolution API** (Baileys self-hosted) + workaround **`@lid`** (side-channel Redis, TTL 24h) — `Encaixe`
- ✓ **Google Calendar OAuth2** por tenant (refresh de token, criação de evento) — `Encaixe`
- ✓ **GitHub REST API** (paginação até 500 repos, base64 do README, parsing de URL por regex) — `Devscope`
- ✓ **EmailJS** — `Portfolio` · APIs **Groq / Anthropic / OpenAI / Voyage AI / Ollama** — vários
- `★Profissional` **Tableau Cloud API** (plataforma de visualização para clientes de saúde) — Dataglass

### 2.11 Segurança & Compliance
- ✓ **LGPD** (opt-out `PARAR/SAIR`, retenção configurável, audit log em `webhook_events`, PII off no Sentry) — `Encaixe`
- ✓ **OAuth2 / JWT** (`python-jose`), auth de webhook por instância (menor privilégio) — `Encaixe`
- ✓ **Containers non-root, CORS restrito, security headers, segredos mascarados** — `Devscope` `Encaixe`

### 2.12 Práticas & Metodologia
- ✓ **Git / Git Flow**, **monorepo** (`apps/` + `infra/` + `db/` + `docs/`) — `Encaixe` `Devscope`
- ✓ **Documentação técnica forte** (README, ARCHITECTURE.md, DEPLOY.md, ROADMAP, TESTING, runbooks) — projetos principais
- ✓ **Consciência de unit economics / custo** (escolha de Haiku, self-host de Evolution, ~US$15/mês total) — `Encaixe`
- `★Profissional` **Agile / Scrum / Kanban · Code Review · Mentoria** (mentoria de estagiário, −40% no ciclo de PR) — Dataglass

### 2.13 Domínio / Especializado
- ✓ **NLP em português** (normalização de acentos, expansão de ordinais, heurísticas de intenção) — `Context` `Encaixe`
- ✓ **Processamento de documentos** (PyMuPDF/PDF, python-docx/DOCX) — `Context`
- ✓ **Algoritmos de negócio** (binning de alocação de frota por peso, cálculo multi-trecho) — `Dely`
- ✓ **Data viz** (Recharts) — `Dely` · `★Profissional` **Tableau** — Dataglass

### 2.14 Idiomas
- **Português** (nativo) · **Inglês** (avançado / profissional)

---

## 3. O que isto adiciona ao currículo atual

Skills **verificadas no código** que ainda não constavam (ou estavam subdimensionadas) no CV:

1. **Voyage AI embeddings** — o Encaixe usa Voyage AI (1024d); o CV só citava "Sentence Transformers" (que é do Context). → Cito **os dois stacks de embedding**.
2. **Busca híbrida + Reciprocal Rank Fusion + Postgres FTS em português** — diferencial técnico forte.
3. **LangGraph checkpointing durável (PostgresSaver)** — além de "orquestração multi-agente".
4. **Abstração multi-provider de LLM** (até 4 providers trocados por env).
5. **Observabilidade de produção**: Sentry + structlog + Request-ID tracing.
6. **Resiliência**: circuit breaker, rate limiting (janela fixa), retry/backoff, fail-open.
7. **Compliance LGPD** (opt-out, retenção, audit log).
8. **Terraform com providers reais** (Railway/Netlify/Hetzner/AWS SM) + validação de política de região.
9. **Ports & Adapters** + workaround `@lid` do WhatsApp (ótimas histórias de entrevista).
10. **Qualidade**: Ruff + mypy strict + suíte unit/integração/smoke (incl. isolamento de tenant).
11. **Frontend além de React/Next**: **Vue 3 + Pinia** e **Recharts/data-viz**.
12. **Superfície de deploy maior**: GHCR, Nginx, Hetzner VPS, Vercel, Upstash.

---

## 4. Correções de precisão (verificadas no código)

- **Synth** — `README.md` e `PROJECT.md` diziam "Next.js 16", mas o `package.json` usa **`next@^15.3.2`** (Next.js 15). ✅ **Corrigido** nos arquivos do projeto (incl. comentário do `next.config.mjs`).
- **Portfolio** — o `scripts/patch-ajv.js` **existe**, mas é **código morto**: sobrou da era webpack (corrigia `ajv-keywords` aninhado em `babel-loader`/`file-loader`/`fork-ts-checker`). Hoje o projeto é **Vite** e **não há `postinstall`** no `package.json` — o script nunca roda e seus alvos nem existem. ⚠️ Candidato a remoção.
- **Portfolio** — o tema light/dark **tem toggle real em JS** (`Header.jsx`: botão sol/lua, `document.body.classList('dark-theme')`, persistido em `localStorage` na chave `theme`), além das CSS custom properties. ✅ O claim do README está **correto** (a verificação automática inicial não havia aberto o `Header.jsx`).
- **Portfolio** — `README.md` diz "Vite 8": ✅ **correto** (`vite@^8.0.14`).
- **Encaixe** — embeddings: default `voyage-3-lite` com `output_dimension=1024` (configurável para `voyage-3`). Descrito como "família voyage-3, 1024 dim".

---

*Gerado a partir de verificação automatizada do código-fonte. Última atualização: 2026-06-06.*
