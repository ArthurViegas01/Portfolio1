# Plano Mestre, Arthur Viegas, Q2/Q3 2026

> Documento vivo. Atualizar checkboxes conforme avança.
> Última revisão: 2026-05-23 (após primeira sessão de execução).

Plano integrado cobrindo três frentes em paralelo:
1. **Posicionamento** (CV + LinkedIn + portfólio alinhados para mercado internacional)
2. **ZapAgent** (produto técnico + 5º case study do portfólio + base da oferta PJ) — **trabalho de código gerenciado em projeto Cowork separado**. Ver `ZAPAGENT_continuation_prompt.md` para retomar lá. As seções §3 e §4 abaixo permanecem como referência para acompanhamento de progresso macro, mas a execução do código não acontece neste projeto Cowork. A §5 (caso de estudo do ZapAgent no portfólio) **sim** é feita aqui.
3. **PJ / Renda** (formalização + oferta empacotada + primeiros clientes em POA)
4. **Aplicações internacionais** (Irlanda + remoto USD/EUR)

Cada frente tem critério de pronto explícito. Marcos com `[BLOQUEIO]` impedem outros itens de avançar.

---

## 0. Decisões abertas (resolver antes de executar)

Bloqueiam o resto. Tratar primeiro.

- [ ] **[BLOQUEIO]** Branding final do produto.
  - Risco real: "Zap" é marca registrada da Meta para WhatsApp. "ZapAgent" pode receber cease-and-desist em 6-24 meses, exatamente quando o produto começar a ter tração.
  - Ação: gerar 5-10 alternativas → checar disponibilidade `.com.br` + `.com` + INPI → escolher.
  - Sugestões iniciais para validar: AtendeAI, FalaPro, Atendi, Concierge, Recepta, AgendaBot, AssistAI, Salience, Recepi, Bemvindo.
  - Após decisão: comprar domínio (Registro.br + .com via Cloudflare/Namecheap) e atualizar nome em todo o repo.

- [ ] **[BLOQUEIO]** Estrutura jurídica.
  - Opções:
    - **MEI** (R$ 81k/ano teto, ~R$ 75/mês): rápido (15 min online), porém limita ticket e não emite NF de "consultoria em TI" sem cadastrar serviço específico.
    - **ME Simples Nacional Anexo III ou V** (até R$ 360k/ano): permite faturamento alto, alíquota efetiva começa ~6%, requer contador (~R$ 200-400/mês).
    - **PF** (recibo + carnê-leão): rápido e legal, mas cliente B2B raramente aceita; bom só pra piloto.
  - Recomendação: **abrir MEI hoje** (custo zero, libera NF) e migrar para ME quando faturamento mensal recorrente passar de R$ 5k/mês.
  - Ação: definir caminho, abrir CNPJ no portal gov.br (~15 min), configurar emissor de NF.

- [ ] **Conta PJ.** Após CNPJ: abrir conta digital (Nubank PJ, Inter PJ, Cora) e cadastrar no Asaas/Stripe.

---

## 1. Posicionamento — CV, LinkedIn, portfólio (Semana 1)

**Critério de pronto:** as três superfícies (CV, LinkedIn headline, portfólio Home) contam a mesma história em uma frase: "Full-Stack + AI Engineer com 4 anos, entrega RAG/Multi-Agent + Cloud em produção".

### 1.1 Currículo (`CVarthurviegas.pdf`) — ✅ **Concluído (CV_arthurviegas_v2.md)**
- [x] Título Dataglass: "Junior Full-stack Developer" → "Full-Stack Developer" (escolha conservadora vs "Software Engineer" para evitar mismatch em background check; pode evoluir depois).
- [x] Summary reescrito destacando IA já em produção (não mais "expanding into AI").
- [x] Bullet de promoção mencionado no estágio.
- [x] Seção "Selected Projects" adicionada com ZapAgent (in development), MCP, Context RAG e AI Component Generator.
- [x] "Languages" separado em "Programming Languages" e "Spoken Languages".
- [x] Terraform, LangGraph, Next.js, FastAPI, pgvector, Hetzner, Supabase adicionados aos skills.
- [x] Typo "Agile/Rich" → "Agile/Scrum" corrigido.
- [x] Versão EN finalizada em `CV_arthurviegas_v2.md`.
- [ ] Exportar para PDF (Word/Google Docs/Canva → PDF) e atualizar `src/assets/CVarthurviegas.pdf` no portfólio.
- [ ] Versão PT (se for aplicar em vagas BR específicas — baixa prioridade).

### 1.2 LinkedIn — ✅ **Conteúdo gerado em `LINKEDIN_arthurviegas.md`** (publicação manual pendente)
- [x] Headline EN e PT redigidos.
- [x] "Sobre" / "About" EN e PT redigidos sincronizados ao CV summary.
- [ ] Publicar headline novo no perfil.
- [ ] Publicar "Sobre" / "About" no perfil (LinkedIn permite duas línguas).
- [ ] Mudar título da experiência Dataglass de "Junior Full-stack Developer" para "Full-Stack Developer" (coerente com CV).
- [ ] Featured: pinar 3 itens, link do portfólio, link do ZapAgent (após deploy), link do MCP Server.
- [ ] Adicionar skills no perfil: LangGraph, Terraform, Multi-Agent Systems, MCP, Next.js.
- [ ] Pedir 2-3 recomendações (1 colega Dataglass + 1 ex-supervisor PUCRS/DELL + 1 cliente do ZapAgent quando houver).
- [ ] Ativar "Open to Work" com filtros, Ireland, Remote (worldwide), Brazil.

### 1.3 Portfólio (Home + About) — ✅ **Concluído nesta sessão**
- [x] Tag "Disponível" removida do Home (`src/components/home/Data.jsx`).
- [x] Em dashes (`—`) removidos de 3 arquivos user-facing (59 ocorrências). Visível em translations, qualification, work cards.
- [x] Home description (PT/EN) reescrito mencionando LangGraph, multi-agent e ZapAgent.
- [x] About description (PT/EN) reescrito sincronizado ao CV summary.
- [ ] Sincronizar contagem `10+ projetos` → `12+ projetos` após adicionar ZapAgent card (faz junto do case study).
- [ ] Verificar consistência PT/EN visualmente após rodar `npm start`.

---

## 2. Cleanup do repositório do portfólio (Semana 1, paralelo a §1)

**Critério de pronto:** repo passa em code review de recrutador técnico sênior sem dar vergonha.

### 2.1 Dead code e housekeeping
- [ ] Remover `src/components/casestudy/diagrams/TerraformDiagram.jsx` (órfão, não importado).
- [ ] Remover `src/components/casestudy/diagrams/TerraformCICDDiagram.jsx` (órfão, não importado).
- [ ] Confirmar com `grep -r "TerraformDiagram\|TerraformCICDDiagram" src/` que não há referência antes de deletar.
- [ ] Limpar import de imagens não usadas em `src/assets/` (ex: `work9.jpg`, `work33.jpg` se órfãos, verificar uso primeiro).

### 2.2 Documentação — ✅ Parcial
- [x] `CHANGELOG.md` criado na raiz seguindo Keep a Changelog (v0.1.0 estado inicial + Unreleased com mudanças desta sessão).
- [ ] Reescrever `README.md` (hoje é boilerplate CRA), incluir descrição, stack, screenshots, link deploy (Netlify), como rodar local, como deployar, decisões arquiteturais.

### 2.3 Git hygiene
- [ ] Branch atual é `develop`. Definir se `main` será o branch de produção e fazer merge `develop` → `main` (ou continuar com `develop` se Netlify aponta pra ele — confirmar).
- [ ] Commit pendente de 2026-04-27 (mencionado na memória): verificar e commitar.

### 2.4 Modernização (opcional, fazer apenas se vai fazer entrevista pra senior FE)
- [ ] Migrar de CRA (deprecated em 2024) para Vite. Não é urgente — só vire prioridade se aparecer vaga senior frontend.

---

## 3. ZapAgent — fechar o core (Semanas 2-3) — 🔀 **Delegado para projeto Cowork separado**

> Esta seção fica como referência de escopo. A execução do código acontece no Cowork dedicado do ZapAgent. Para retomar lá, use `ZAPAGENT_continuation_prompt.md`. Acompanhamento de progresso macro pode ser anotado aqui ou no `CHANGELOG.md` do próprio repo ZapAgent.

**Critério de pronto:** uma demo end-to-end roda local sem intervenção: tenant novo → empresa onboardada → FAQ cadastrada → WhatsApp recebendo mensagem → agente respondendo → agendamento no Google Calendar criado → tudo aparece no dashboard.

Estado declarado: "esqueleto pronto, lógica de negócio parcial". Vou listar tarefas baseado no que aparenta do repo (revisar com você na sessão de implementação real).

### 3.1 Agente LangGraph (apps/api)
- [ ] Mapear estado atual do grafo em `apps/api` — quais nodes estão implementados, quais faltam.
- [ ] Implementar/fechar nodes: `intent_classifier` → `faq_retriever` → `responder` → `confidence_critic` → (se baixa) `human_handoff`.
- [ ] Branch para fluxo de agendamento: `intent=schedule` → `slot_extractor` → `calendar_check` → `confirm` → `book`.
- [ ] Checkpoint persistence em Postgres (Supabase) para conversas multi-turn.
- [ ] Configurar Claude Haiku via Anthropic SDK como LLM principal; deixar Groq como fallback config.
- [ ] Validação de hallucination no node `responder` (forçar citação de fonte da FAQ quando aplicável).

### 3.2 Fluxo conversacional
- [ ] Webhook Evolution API recebe → enfileira no Celery → worker chama LangGraph → resposta volta via Evolution.
- [ ] Garantir idempotência: mensagem duplicada do WhatsApp não dispara duas respostas.
- [ ] Latência alvo: < 4s para mensagens FAQ, < 8s para agendamento. Medir e logar.
- [ ] Handoff humano: quando confidence < threshold, marcar conversa como `requires_human` no dashboard e parar de responder até intervenção.

### 3.3 Multi-tenancy
- [ ] Auditar isolamento: toda query SQL deve filtrar `company_id`. Usar Row Level Security do Supabase como segunda camada.
- [ ] Testar com dois tenants (Pearson Hardman + Pearson Specter já existem como fixture) — garantir que FAQ de um não vaza para outro.
- [ ] Endpoints REST do FastAPI: middleware que extrai `company_id` do JWT do Supabase Auth e injeta no contexto da request.

### 3.4 Billing Asaas
- [ ] Webhook Asaas → atualiza `subscription_status` da company.
- [ ] Bloquear envio de mensagens quando `subscription_status != active` (exceto trial).
- [ ] Trial de 7 dias automático no signup.
- [ ] Página de billing no dashboard mostrando plano + próximo vencimento + link para portal Asaas.

### 3.5 Dashboard (apps/web)
- [ ] Conectar WhatsApp: o QR code do Evolution precisa aparecer no dashboard via WebSocket ou polling.
- [ ] Conversas: listar threads, abrir histórico, painel humano pra responder quando handoff.
- [ ] FAQ: CRUD + import de planilha CSV/XLS (clínica geralmente tem FAQ em Word, precisa fácil import).
- [ ] Integrações: Google Calendar OAuth funcionando (já está, validar) + página de status.
- [ ] Configurações: nome agente, persona, horário comercial, mensagem fora do horário.

### 3.6 Testes (entra no portfolio narrativo)
- [ ] pytest em `apps/api` cobrindo: webhook→graph→response, isolamento tenant, billing webhook.
- [ ] Vitest em `apps/web` para componentes críticos (auth, FAQ form, billing).
- [ ] GitHub Actions: `ci.yml` rodando os dois suites em todo PR.
- [ ] Badge de coverage no README do repo.

### 3.7 Observabilidade mínima
- [ ] Logging estruturado (JSON) em apps/api com `request_id`, `tenant_id`, `conversation_id`.
- [ ] LangSmith tracing OU OpenTelemetry exporter para console em dev e para Grafana Cloud free tier em prod.
- [ ] Sentry no front e no back (free tier).
- [ ] Healthcheck `/healthz` e `/readyz` no FastAPI.

---

## 4. ZapAgent — deploy em produção (Semana 3) — 🔀 **Delegado para projeto Cowork separado**

> Idem §3. Execução no Cowork dedicado do ZapAgent.

**Critério de pronto:** URL pública do dashboard funcional, número WhatsApp real conectado, conversa real testada por você ou amigo.

### 4.1 Infra (Terraform)
- [ ] Revisar `infra/terraform/` — provider Hetzner configurado, secrets via tf var ou Vault.
- [ ] `terraform plan` em ambiente prod, revisar.
- [ ] `terraform apply` → VPS provisionada com cloud-init aplicando docker-compose.
- [ ] DNS no Cloudflare: `app.<dominio>` → Vercel, `api.<dominio>` → Hetzner.
- [ ] SSL/TLS via Caddy ou Traefik no Hetzner (Let's Encrypt automático).

### 4.2 Supabase prod
- [ ] Criar projeto separado para prod (não usar o de dev).
- [ ] Rodar migrations: `make migrate-prod`.
- [ ] RLS habilitado em todas as tabelas com tenant_id.
- [ ] Backup automático ativo (Supabase Pro tier — avaliar custo R$ 100/mês).

### 4.3 Vercel
- [ ] Importar repo → root: `apps/web` → framework Next.js.
- [ ] Variáveis de ambiente: `NEXT_PUBLIC_SUPABASE_URL`, anon key, API URL, Asaas public key.
- [ ] Deploy preview por PR.
- [ ] Custom domain.

### 4.4 Anthropic + Google + Asaas em prod
- [ ] API key Anthropic com limite mensal (~US$ 50/mês inicial é conservador).
- [ ] Google Cloud OAuth: tirar do "modo de testes" e publicar app (passa por revisão Google — 1-3 semanas se pedir scopes sensíveis; só Calendar.events é leve, pode ser instantâneo).
- [ ] Asaas em produção (não sandbox), webhook apontado para URL prod.

### 4.5 Smoke test
- [ ] Criar tenant real seu, conectar seu WhatsApp pessoal, fazer 5 conversas de FAQ + 2 agendamentos.
- [ ] Validar billing: simular falha de pagamento e ver se bloqueia mensagens.

---

## 5. ZapAgent — adicionar como 5º case study no portfólio (Semana 4) — 📍 **Executado aqui**

> Esta é a única parte do ZapAgent que rola neste projeto Cowork. Pode ser feita em paralelo, mesmo antes do deploy do ZapAgent estar pronto, usando "(in development)" nas descrições.

**Critério de pronto:** seção "Arquiteturas" do portfólio mostra ZapAgent ao lado de Context RAG, Dataglass, MCP, AI Component Generator. Recrutador conseguiria abrir e entender em 3 minutos.

### 5.1 Card em Data.jsx
- [ ] Adicionar projeto: `id: 8`, `category: 'ai'` ou nova categoria `'saas'`.
- [ ] Imagem nova em `src/assets/` (screenshot do dashboard ZapAgent).
- [ ] Descrição PT/EN curta destacando: multi-tenant SaaS, LangGraph, WhatsApp, Hetzner + Vercel + Supabase + Terraform.
- [ ] Link demo (app.<dominio>) e GitHub.

### 5.2 Case Study (CaseStudy.jsx)
- [ ] Adicionar entrada em `PROJECTS`: `{ id: 'zapagent', label: 'ZapAgent', icon: 'uil uil-whatsapp', badge: 'SaaS / Multi-Agent' }`.
- [ ] `TECH_BADGES.zapagent`: Next.js 14, FastAPI, LangGraph, Claude Haiku, Evolution API, Supabase, pgvector, Asaas, Terraform, Hetzner, GitHub Actions.
- [ ] `CTAS.zapagent`: links GitHub + demo.
- [ ] `DIAGRAMS.zapagent`: criar `ZapAgentDiagram.jsx` (SVG da arquitetura — reaproveitar conteúdo do `ARCHITECTURE.md` do repo).
- [ ] Adicionar tradução em `translations.js` (`cs.zapagent`): heroDesc, tabs (architecture / tradeoffs / scalability / security / business-model — sim, adicionar aba de modelo de negócio, é diferencial).
- [ ] Possíveis trade-offs a documentar: Hetzner vs AWS (custo vs facilidade), Evolution API vs WhatsApp Business API oficial (legal vs custo), Claude Haiku vs GPT-4o-mini vs Llama 3 70B (latência + custo + qualidade), Supabase vs RDS managed (DX vs lock-in).

### 5.3 Atualizar projectsNav se criar categoria 'saas'
- [ ] Adicionar `{ name: 'saas' }` em `projectsNav` se decidir separar de 'ai'.
- [ ] Tradução do label.

---

## 6. PJ comercial — oferta + prospecção (Semanas 4-6)

**Nicho recomendado:** clínicas e profissionais liberais em Porto Alegre (sweet spot: ticket R$ 2-5k setup + R$ 400-800/mês recorrente, ROI quantificável por redução de no-show, distribuição peer-to-peer forte, concorrência fraca).

### 6.1 Oferta empacotada
- [ ] Definir SKU inicial: "Atendente IA para Clínicas" — inclui setup, treinamento da FAQ com dados do cliente, integração WhatsApp + Google Calendar, dashboard de uso, 1 mês de ajustes.
- [ ] Preço: setup R$ 2.500 (uma vez) + R$ 590/mês (com 1.000 mensagens/mês, R$ 0,15 por mensagem excedente).
- [ ] Proposta comercial template (PDF ou Notion público): 1 página com problema → solução → preço → ROI calculado para 5 cancelamentos/mês evitados.
- [ ] Termo de uso + contrato de prestação de serviços (modelar com advogado online — Direito Digital, ~R$ 800).

### 6.2 Landing page de venda
- [ ] Domínio comprado (item bloqueio 0).
- [ ] Landing simples: hero + dor + solução (vídeo demo de 60s) + preço + depoimento (após 1º caso) + form contato. Pode ser página standalone no Vercel ou subdomínio do site institucional.
- [ ] Pixel Meta + GA4 para tracking.
- [ ] Botão "Agende uma demo" → Calendly.

### 6.3 Lista de prospecção (semana 4)
- [ ] Mapear 30 clínicas em POA priorizando: dentistas (Petrópolis/Higienópolis), dermatologistas, fisioterapeutas, psicólogos, advocacias pequenas. Critério: ter Instagram ativo (sinal de openness a digital) e WhatsApp como canal principal.
- [ ] Fontes: Google Maps + Doctoralia + Instagram + grupos de Facebook locais.
- [ ] Planilha simples com: nome, contato decisor, canal (DM, e-mail, físico), data primeira abordagem, resposta, próximo passo.

### 6.4 Outbound (semanas 5-6)
- [ ] Enviar 10 abordagens/semana via WhatsApp direto da clínica + DM Instagram.
- [ ] Script curto (3 linhas + CTA): "Vi que a clínica atende muita demanda no WhatsApp. Construí uma IA que responde dúvidas e agenda automático no Google Calendar. Tô buscando 2 clínicas piloto pra validar em junho com 50% de desconto. Conversamos 15 minutos?"
- [ ] Meta: 2 reuniões agendadas/semana → 1 piloto fechado nas 4 semanas.

### 6.5 Primeiro piloto
- [ ] Onboarding manual: ir até a clínica, configurar pessoalmente, treinar a secretária.
- [ ] Acompanhar primeiros 7 dias com proatividade (ajustar FAQ, calibrar handoff threshold).
- [ ] Pedir testimonial em vídeo + permissão para usar nome como case.
- [ ] Publicar case no LinkedIn + landing.

---

## 7. Aplicações internacionais (Semanas 4-6, paralelo a §6)

**Critério de pronto:** 15 aplicações enviadas até fim da semana 6, com tracking.

### 7.1 Preparação (precisa estar pronto antes de aplicar)
- [ ] CV EN finalizado (§1.1).
- [ ] LinkedIn EN headline atualizado (§1.2).
- [ ] ZapAgent publicado e linkado no portfólio (§5).

### 7.2 Fontes de vaga
- [ ] LinkedIn — filtro Ireland, Remote, "Python OR LangChain OR LangGraph".
- [ ] Wellfound (ex-AngelList) — startups remote.
- [ ] Jobs.ashbyhq.com / Greenhouse / Lever — buscar empresas que usam stack similar.
- [ ] Empresas-alvo Irlanda: Workday, Stripe, HubSpot, Intercom, Workhuman, Salesforce, Personio.
- [ ] Empresas remote-friendly: Anthropic, Hugging Face, LangChain Inc, Replicate, Mistral, Posthog.

### 7.3 Aplicações
- [ ] 10 vagas Irlanda + 5 remote = 15 aplicações até semana 6.
- [ ] Cover letter template + variações de 30s por vaga (não escrever do zero cada uma).
- [ ] Tracking em planilha: empresa, vaga, data, status, observações, follow-up date.
- [ ] Follow-up 7-10 dias após aplicar sem resposta (LinkedIn ao recrutador).

---

## 8. Acompanhamento e rituais

- [ ] **Sessão semanal** (60min, sábado de manhã): atualizar este documento, marcar concluídos, mover itens travados.
- [ ] **CHANGELOG.md em cada repo** atualizado a cada mudança versionada.
- [ ] **Métricas mensais simples**: aplicações enviadas, respostas recebidas, entrevistas marcadas, leads PJ, demos feitas, pilotos fechados, MRR.

---

## Anexo A — Decisões já tomadas

| Decisão | Detalhe |
|---|---|
| Substituir LangGraph standalone pelo ZapAgent | ZapAgent já é multi-agent + tem narrativa mais forte que um POC standalone. Resolve gap LangGraph + Terraform + Next.js de uma vez. |
| Nicho PJ inicial | Clínicas / profissionais liberais em POA. Comércio entra na onda 2, B2B na onda 3. |
| Posicionamento | "Software Engineer · AI & Cloud" em todas as superfícies. "AI Engineer" sozinho assusta empresas que querem full-stack; "Full-Stack" sozinho esconde o diferencial. |
| Mercado-alvo principal | Irlanda + remote USD/EUR > regional BR > freelance. |
| Título Dataglass no CV | "Full-Stack Developer" (sem "Junior", sem promover a "Software Engineer" para evitar mismatch de background check). |
| ZapAgent código vs case study | Código vive em Cowork separado. Case study no portfólio (§5) é feito aqui. |
| Em dashes (`—`) | Removidos do portfólio user-facing e do CV. Substituídos por vírgula no corpo e dois-pontos em títulos. |
| Tag "Disponível" | Removida do Home do portfólio. |

## Anexo B — Decisões pendentes (precisam fechar antes da execução comercial)

- [ ] Nome final do produto e domínio.
- [ ] Estrutura jurídica (MEI vs ME).
- [ ] Branding visual mínimo (cor primária, logotipo, font), pode ser feito em 2h no Figma.
- [ ] Modelo de cobrança final (mensalidade fixa vs por uso vs híbrido).
- [ ] Se o portfólio migra de CRA → Vite agora ou depois.

## Anexo C — Próximas sessões neste Cowork (Portfolio1)

Sequência sugerida em ordem de custo/benefício decrescente:

1. **ZapAgent como 5º case study (§5)** — 3-4h. Maior payoff visual e narrativo. Adiciona card em `Data.jsx`, entrada em `CaseStudy.jsx` com 4-5 abas, novo `ZapAgentDiagram.jsx` em SVG, traduções PT/EN, screenshot do dashboard.
2. **Cleanup repo (§2.1 + §2.2)** — 1-2h. Remover dead code Terraform, reescrever README, possível merge develop → main.
3. **Publicar conteúdo do LinkedIn** (§1.2 manual steps) — 30 min. Não é código, é ação no LinkedIn pessoal.
4. **Aplicações internacionais (§7)** — esforço contínuo. Começa quando case study do ZapAgent estiver publicado.
