# Prompt de continuidade — ZapAgent

> Cole este prompt no início da próxima sessão do Cowork do ZapAgent.
> Ele dá contexto suficiente para Claude entender o projeto, posicionamento estratégico, e propor o próximo passo certo.

---

## Quem eu sou

Sou Arthur Viegas, Full-Stack Software Engineer, 4 anos de experiência (Dataglass, PUCRS), com foco em AI Engineering. Mora em Porto Alegre. Meta principal: vaga internacional pleno/sênior (Irlanda ou remoto USD/EUR). Meta secundária: construir o ZapAgent como produto comercializável para gerar renda via PJ enquanto a vaga internacional não fecha.

Stack core: Python (Django, FastAPI, Celery, LangChain, LangGraph), AWS (CodePipeline, Beanstalk, ECR, S3), Docker, Terraform, React/Next.js, pgvector, Supabase.

## O que é o ZapAgent

SaaS multi-tenant de IA para WhatsApp, voltado a pequenos negócios brasileiros (clínicas, profissionais liberais, comércio). O agente responde FAQs, agenda compromissos no Google Calendar e faz handoff para humano quando a confiança cai. Cada empresa cliente tem sua própria FAQ, configurações, integração WhatsApp e billing.

**Posicionamento estratégico:** este projeto cumpre três objetivos ao mesmo tempo:
1. **Portfolio piece** — vira o 5º case study do portfólio (substitui o "Multi-Agent Doc Assistant standalone" que seria criado só pra mostrar LangGraph), preenchendo gaps de Terraform, Next.js em produção e multi-agent orchestration.
2. **Produto comercializável** — base do meu produto PJ ("Caminho A — productized service") para clínicas e profissionais liberais em Porto Alegre. Ticket alvo: R$ 2.500 setup + R$ 590/mês.
3. **Demo técnico para entrevista** — sistema completo de ponta a ponta (infra → backend → agente → frontend → billing) defensável em entrevista sênior.

## Stack

- **Dashboard:** Next.js 14 (App Router) + TypeScript + Tailwind, deploy Vercel
- **API:** FastAPI + Celery + LangGraph, deploy VPS Hetzner
- **LLM:** Claude Haiku via Anthropic API
- **WhatsApp:** Evolution API self-hosted (com StubProvider para dev)
- **Banco:** Supabase (Postgres + pgvector + Auth + Storage)
- **Pagamentos:** Asaas
- **IaC:** Terraform (Hetzner + AWS)
- **CI/CD:** GitHub Actions
- **Repositório:** https://github.com/ArthurViegas01/ZapAgent

Estrutura monorepo: `apps/api` (FastAPI), `apps/web` (Next.js), `db/migrations`, `infra/terraform`, `docker-compose.yml`, `Makefile`. Documentação já existente no repo: `ARCHITECTURE.md`, `CHANGELOG.md`, `DEPLOY.md`, `ROADMAP.md`, `SETUP_GOOGLE_CALENDAR.md`, `portfolio_zapagent.md`.

## Estado atual (declarado pelo usuário em 2026-05-23)

- **Código:** esqueleto pronto, lógica de negócio parcial. Estrutura, autenticação e integrações técnicas funcionam isoladamente, mas o agente LangGraph e/ou o fluxo conversacional completo ainda não estão fechados.
- **Deploy:** apenas local (docker-compose / make up). VPS Hetzner não provisionada, Vercel não conectado ao repo.
- **Tenants de teste existentes:** EmpresaTeste(NãoDeletar), Pearson Hardman, Pearson Specter.
- **Integrações WhatsApp + Google Calendar:** já funcionaram em demos anteriores. Atualmente desconectadas no tenant de teste.
- **Billing Asaas:** não validado em produção.

## Decisões em aberto (bloqueiam evolução comercial, não técnica)

1. **Nome final do produto.** "Zap" é marca registrada da Meta para WhatsApp — risco de cease-and-desist quando ganhar tração. Decidir e comprar domínio.
2. **Estrutura jurídica.** MEI vs ME vs PF. Recomendação minha: abrir MEI agora (15 min, gov.br) para destravar emissão de NF.
3. **Branding visual** (logo, cor primária, font).
4. **Modelo de cobrança final** (mensalidade fixa vs por uso vs híbrido).

## Plano mestre (resumo)

Há um plano mestre integrado mantido no projeto Cowork separado (do portfólio) em `PLANO_MESTRE.md`. O ZapAgent ocupa as seções 3, 4, 5 desse plano:

- **§3 ZapAgent — fechar o core** (~2 semanas): agente LangGraph completo (researcher → responder → critic → handoff), fluxo conversacional FAQ + agendamento, isolamento multi-tenant validado com RLS no Supabase, billing Asaas funcional, testes pytest, observabilidade básica.
- **§4 ZapAgent — deploy em produção** (~1 semana): terraform apply em Hetzner, Vercel conectado, Supabase prod, DNS, SSL, smoke test end-to-end com WhatsApp real.
- **§5 ZapAgent — virar 5º case study no portfólio** (~3 dias): será feito no projeto Cowork do portfólio, não aqui.

## O que eu quero desta sessão

Antes de propor implementação, **faça uma varredura completa do repositório** (ARCHITECTURE.md, ROADMAP.md, código de `apps/api` e `apps/web`, migrations, terraform) e me devolva:

1. **Status report estruturado** do que funciona vs. o que tem buracos. Componente por componente:
   - Auth (Supabase Auth, RLS)
   - Tenants (multi-tenancy, isolamento)
   - Conexão WhatsApp (Evolution API ou Stub)
   - Agente LangGraph (quantos nodes, quais funcionam)
   - Fluxo conversacional (FAQ, agendamento, handoff)
   - Google Calendar (OAuth, criação de eventos)
   - Billing (Asaas webhooks, trial, bloqueio por inadimplência)
   - Dashboard Next.js (CRUD FAQ, conversas, integrações, configurações)
   - Testes (pytest, vitest, CI)
   - IaC (Terraform módulos, estado)
   - Observabilidade (logging, tracing, sentry)

2. **Lista priorizada do que falta** para o produto estar "vendável" (ou seja, eu poder fechar o primeiro piloto pago com uma clínica em POA). Não é "100% completo" — é "mínimo para um cliente pagante não cancelar nas primeiras 2 semanas". Cada item com estimativa grossa (horas/dias).

3. **Próximo passo concreto** (1 tarefa, não 10). O melhor custo/benefício para a próxima sessão de trabalho. Justifique a escolha.

## Importante

- Eu trabalho como pleno-sênior. Espero qualidade de código nesse nível: tipagem, validação Pydantic v2, separação de responsabilidades, testes, logging estruturado.
- Antes de implementar, planeje com base em evidências sólidas. Se faltar contexto, pergunte antes.
- Mantenha o `CHANGELOG.md` atualizado a cada mudança versionada.
- Não invente código novo se já existir uma abstração. Reuse o que está no repo.
- O StubProvider de WhatsApp é proposital — para desenvolvimento sem precisar do gateway real funcionando. Não troque por chamada direta à Evolution sem motivo.
