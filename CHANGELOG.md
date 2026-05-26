# Changelog

Todas as alterações relevantes no portfólio são documentadas aqui.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [Unreleased]

### Adicionado
- `PLANO_MESTRE.md`: plano integrado Q2/Q3 2026 cobrindo posicionamento, ZapAgent, PJ e aplicações internacionais. Atualizado para refletir que código do ZapAgent é gerenciado em projeto Cowork separado.
- `CV_arthurviegas_v2.md`: currículo v2 com seção `Selected Projects`, summary realinhado para AI Engineering, categoria de skills `AI / ML Engineering`, remoção do título "Junior" e sem em dashes.
- `LINKEDIN_arthurviegas.md`: conteúdo pronto para publicação no LinkedIn (headline + Sobre em PT e EN), plano de skills, recomendações, Featured e Open to Work.
- `ZAPAGENT_continuation_prompt.md`: prompt de continuidade para o projeto Cowork do ZapAgent (status report estruturado + priorização do que falta para o produto ser "vendável").
- `CHANGELOG.md`: este arquivo.

### Alterado
- `src/components/home/Data.jsx`: removida tag `Disponível` do bloco Home (mantida no `translations.js` como chave inerte para reativação futura).
- `src/translations.js`:
  - 53 ocorrências de em dash (`—`) substituídas por vírgula no corpo do texto e por dois-pontos em títulos de seção dos case studies (PT/EN).
  - `home.description` PT/EN reescrita destacando LangGraph, multi-agent e ZapAgent.
  - `about.description` PT/EN reescrita com narrativa coesa ao CV summary (Dataglass + Docker/CI-CD + IA em produção).
- `src/components/work/Data.jsx`: 2 em dashes substituídos nas descrições dos cards (PT/EN do MCP Server).
- `src/components/qualification/Qualification.jsx`: 4 em dashes substituídos em subtítulos de educação e cargos.

### Pendente (próximas sessões)
- Adicionar ZapAgent como 5º case study (card em `Data.jsx`, entrada em `PROJECTS` do `CaseStudy.jsx`, novo `ZapAgentDiagram.jsx`, traduções PT/EN). Maior payoff visual pendente.
- Remover dead code: `src/components/casestudy/diagrams/TerraformDiagram.jsx` e `TerraformCICDDiagram.jsx` (orfãos).
- Reescrever `README.md` (atualmente é boilerplate do Create React App).
- Avaliar migração de CRA para Vite (opcional, baixa prioridade).
- Publicar conteúdo do LinkedIn (ação manual no perfil pessoal, fora do código).
- Exportar `CV_arthurviegas_v2.md` para PDF e atualizar `src/assets/CVarthurviegas.pdf`.

---

## [0.1.0] - 2026-05-23

### Estado inicial documentado

Snapshot do portfólio no momento em que começou a documentação versionada.

- **Stack:** Create React App + react-scripts 5, React 18, bilíngue PT/EN via Context API (`LanguageContext`), Swiper para carrosséis, EmailJS para form de contato.
- **Seções:** Home, About, Skills, Work (8 categorias de filtro), CaseStudy, Services, Qualification, Contact, Footer, ScrollUp.
- **Case Studies (4):** Context (RAG), Dataglass (com aba CI/CD), GitHub Portfolio Intel. (MCP Server), AI Component Generator.
- **Projetos no Work (7):** Context RAG, Dataglass, Jogo General, Transportadora, MCP Server, AI Component Generator, Donut 3D.
- **Deploy:** Netlify (branch `develop`).
