/* ============================================================
   ATS ENGINE — deterministic keyword matching (no LLM/API)
   ------------------------------------------------------------
   Parses a pasted job description and scores it against Arthur's
   real skill set. `owned: true` keywords are skills he genuinely
   has (so a CV can truthfully emphasize them); `owned: false`
   keywords are common market terms kept ONLY to detect gaps —
   they are never injected into a generated CV.
   ============================================================ */

// label + whether Arthur owns the skill + extra match aliases.
const K = (label, owned, aliases = []) => ({ label, owned, aliases: [label, ...aliases] });

export const KEYWORDS = [
  // ── Languages ──
  K("Python", true, ["python3"]),
  K("TypeScript", true, ["type script"]),
  K("JavaScript", true, ["ecmascript", "es6", "es2022"]),
  K("SQL", true, []),
  K("HTML", true, ["html5"]),
  K("CSS", true, ["css3", "sass", "scss"]),
  K("Bash", true, ["shell scripting", "shell script", "powershell", "power shell"]),
  K("Go", false, ["golang"]),
  K("Java", false, ["spring", "spring boot"]),
  K("C#", false, ["c sharp", "dotnet", "asp net", "net", "net core", "net framework"]),
  K("C++", false, ["cpp"]),
  K("Ruby", false, ["ruby on rails", "rails"]),
  K("PHP", false, ["laravel"]),
  K("Rust", false, []),
  K("Scala", false, []),
  K("Elixir", false, []),

  // ── AI / LLM ──
  K("RAG", true, ["retrieval augmented generation", "retrieval-augmented"]),
  K("LLM", true, ["large language model", "llms"]),
  K("LangChain", true, []),
  K("LangGraph", true, []),
  K("MCP", true, ["model context protocol"]),
  K("Prompt engineering", true, ["prompting"]),
  K("Semantic search", true, ["vector search", "similarity search"]),
  K("pgvector", true, ["vector database", "vector db", "vector store"]),
  K("Embeddings", true, ["embedding", "sentence transformers"]),
  K("Anthropic Claude", true, ["claude", "anthropic"]),
  K("OpenAI", true, ["gpt", "openai api", "gpt-4"]),
  K("Groq", true, []),
  K("Llama", true, ["llama 3", "llama3"]),
  K("Ollama", true, []),
  K("Vertex AI", true, ["vertexai"]),
  K("Gemini", true, []),
  K("Function calling", true, ["tool calling", "tool use"]),
  K("NLP", true, ["natural language processing"]),
  K("Machine Learning", true, ["ml"]),
  K("Generative AI", true, ["genai", "gen ai"]),
  K("PyTorch", false, ["torch"]),
  K("TensorFlow", false, ["tensor flow"]),
  K("scikit-learn", false, ["sklearn", "scikit learn"]),
  K("Pandas", false, []),
  K("NumPy", false, []),
  K("Deep Learning", false, []),
  K("Hugging Face", false, ["huggingface"]),
  K("Computer Vision", false, []),

  // ── Back-end ──
  K("FastAPI", true, []),
  K("Django", true, ["drf", "django rest", "django rest framework"]),
  K("Celery", true, []),
  K("Pydantic", true, []),
  K("SQLAlchemy", true, []),
  K("REST API", true, ["rest", "restful", "rest apis", "api development"]),
  K("Microservices", true, ["microservice"]),
  K("Async programming", true, ["asyncio", "asynchronous", "concurrency"]),
  K("Gunicorn", true, ["uvicorn"]),
  K("Webhooks", true, ["webhook"]),
  K("Node.js", true, ["nodejs", "node js"]),
  K("Flask", false, []),
  K("Express", false, ["express js"]),
  K("GraphQL", false, []),
  K("gRPC", false, []),
  K("WebSockets", false, ["websocket"]),

  // ── Front-end ──
  K("React", true, ["react js", "reactjs"]),
  K("Next.js", true, ["nextjs", "next js"]),
  K("Vue", true, ["vuejs", "vue js", "vue 3"]),
  K("Vite", true, []),
  K("Tailwind CSS", true, ["tailwind"]),
  K("Zustand", true, []),
  K("Pinia", true, []),
  K("Vue Router", true, []),
  K("Framer Motion", true, []),
  K("Swiper", true, []),
  K("State management", true, []),
  K("Recharts", true, ["data visualization", "dataviz", "charts"]),
  K("Accessibility", true, ["a11y", "wcag", "aria"]),
  K("i18n", true, ["internationalization", "localization"]),
  K("Responsive design", true, ["responsive"]),
  K("Zod", true, []),
  K("Monaco Editor", true, []),
  K("EmailJS", true, []),
  K("Angular", false, []),
  K("Svelte", false, []),
  K("Redux", false, []),

  // ── Databases ──
  K("PostgreSQL", true, ["postgres"]),
  K("Redis", true, []),
  K("Supabase", true, []),
  K("Database design", true, ["data modeling", "schema design"]),
  K("Alembic", true, ["database migrations"]),
  K("MySQL", false, []),
  K("MongoDB", false, ["mongo"]),
  K("Elasticsearch", false, ["elastic search"]),
  K("DynamoDB", false, []),

  // ── Cloud / DevOps ──
  K("Docker", true, ["containers", "containerization", "docker compose"]),
  K("Terraform", true, ["iac", "infrastructure as code"]),
  K("AWS", true, ["amazon web services", "ec2", "s3", "ecr", "rds", "elastic beanstalk", "codepipeline", "codebuild", "secrets manager", "elasticache"]),
  K("Google Cloud", true, ["gcp", "google cloud platform"]),
  K("CI/CD", true, ["ci cd", "continuous integration", "continuous deployment", "continuous delivery"]),
  K("GitHub Actions", true, []),
  K("Nginx", true, []),
  K("Linux", true, ["unix"]),
  K("Vercel", true, []),
  K("Netlify", true, []),
  K("Railway", true, []),
  K("Kubernetes", false, ["k8s"]),
  K("AWS Lambda", false, ["serverless", "lambda functions"]),
  K("Azure", false, []),
  K("Jenkins", false, []),
  K("GitLab CI", false, ["gitlab ci cd"]),
  K("CircleCI", false, []),
  K("Ansible", false, []),
  K("Pulumi", false, []),

  // ── Observability / reliability ──
  K("Sentry", true, ["error tracking"]),
  K("Observability", true, ["monitoring", "structured logging", "logging"]),
  K("Rate limiting", true, []),
  K("Prometheus", false, []),
  K("Grafana", false, []),
  K("Datadog", false, []),

  // ── Testing / quality ──
  K("pytest", true, ["unit testing", "unit tests"]),
  K("Testing", true, ["automated testing", "integration testing", "test automation"]),
  K("TDD", true, ["test driven development"]),
  K("Vitest", true, ["jest"]),
  K("mypy", true, ["type checking", "static analysis"]),
  K("Linting", true, ["ruff", "eslint"]),
  K("Cypress", false, []),
  K("Playwright", false, []),
  K("Selenium", false, []),

  // ── Architecture ──
  K("Multi-tenant", true, ["multitenant", "multi tenancy", "multitenancy"]),
  K("Event-driven", true, ["event driven", "message queue", "queues"]),
  K("Distributed systems", true, ["distributed"]),
  K("Scalability", true, ["scalable", "high availability"]),
  K("System design", true, ["software architecture", "architecture"]),
  K("Hexagonal architecture", true, ["ports and adapters", "clean architecture"]),
  K("Design patterns", true, []),
  K("Kafka", false, ["apache kafka"]),
  K("RabbitMQ", false, []),

  // ── Security ──
  K("OAuth2", true, ["oauth", "sso"]),
  K("JWT", true, ["json web token"]),
  K("Authentication", true, ["authorization", "auth"]),
  K("LGPD", true, ["data privacy"]),
  // GDPR kept as gap-only: sources substantiate LGPD (Brazil), not GDPR (EU).
  // It surfaces as a gap for EU roles rather than an unbacked claim.
  K("GDPR", false, []),
  K("Security", true, ["application security", "secure coding"]),
  K("SOC 2", false, ["soc2"]),
  K("PCI DSS", false, ["pci"]),

  // ── Data / BI ──
  K("Tableau", true, []),
  K("Data analysis", true, ["data analytics", "analytics"]),
  K("Data pipelines", true, ["etl", "data pipeline"]),
  K("Power BI", false, ["powerbi"]),
  K("Apache Spark", false, ["spark"]),
  K("Airflow", false, []),
  K("dbt", false, []),
  K("Snowflake", false, []),
  K("BigQuery", false, []),

  // ── Practices / soft ──
  K("Git", true, ["git flow", "version control"]),
  K("Agile", true, ["scrum", "kanban"]),
  K("Code review", true, ["pull requests", "peer review"]),
  K("Mentoring", true, ["mentorship"]),
  K("Technical documentation", true, ["documentation"]),
  K("English", true, ["fluent english", "english proficiency"]),
  K("Remote work", true, ["remote", "distributed team"]),
  K("Communication", true, ["communication skills"]),
  K("Problem solving", true, ["problem-solving"]),
  K("Teamwork", true, ["collaboration", "team player"]),

  // ── Roles ──
  K("Full-stack", true, ["full stack", "fullstack"]),
  K("Back-end", true, ["backend", "back end"]),
  K("Front-end", true, ["frontend", "front end"]),
  K("AI Engineering", true, ["ai engineer", "ai engineering"]),
  K("Software Engineering", true, ["software engineer", "software development", "sde"]),
  K("DevOps", true, []),
  K("Data Engineering", false, []),
  K("Platform Engineering", false, []),
  K("Mobile development", false, ["react native", "flutter", "ios", "android"]),
];

// ── Text normalization & matching ──
const normalize = (s) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/[^a-z0-9+#]+/g, " ") // keep word chars, + and #
    .replace(/\s+/g, " ")
    .trim();

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Count whole-token occurrences of an alias in already-normalized text.
// normalize() collapses every separator to a single space, so tokens are
// space-delimited and we match on space/string boundaries — NO lookbehind,
// which would throw a SyntaxError (white-screen) on Safari < 16.4.
const countMatches = (normText, aliasRaw) => {
  const alias = normalize(aliasRaw);
  if (!alias) return 0;
  const re = new RegExp(`(?:^| )${escapeRe(alias)}(?=$| )`, "g");
  const m = normText.match(re);
  return m ? m.length : 0;
};

// Whole-token test (boundary-safe, lookbehind-free) — shared with cvBuilder.
export const normalizeText = normalize;
export const hasToken = (text, phrase) => {
  const a = normalize(phrase);
  if (!a) return false;
  return new RegExp(`(?:^| )${escapeRe(a)}(?=$| )`).test(normalize(text));
};

const ROLE_PATTERNS = [
  { id: "ai", label: { pt: "Engenheiro de IA", en: "AI Engineer" }, aliases: ["ai engineer", "ml engineer", "machine learning engineer", "genai", "llm engineer"] },
  { id: "backend", label: { pt: "Engenheiro Back-End", en: "Back-End Engineer" }, aliases: ["backend", "back end", "back-end"] },
  { id: "frontend", label: { pt: "Engenheiro Front-End", en: "Front-End Engineer" }, aliases: ["frontend", "front end", "front-end"] },
  { id: "fullstack", label: { pt: "Engenheiro Full-Stack", en: "Full-Stack Engineer" }, aliases: ["full stack", "fullstack", "full-stack"] },
  { id: "devops", label: { pt: "Engenheiro DevOps", en: "DevOps Engineer" }, aliases: ["devops", "sre", "site reliability", "platform engineer"] },
  { id: "data", label: { pt: "Engenheiro de Dados", en: "Data Engineer" }, aliases: ["data engineer", "data engineering"] },
];

const detectRole = (norm) => {
  let best = null;
  let bestHits = 0;
  for (const r of ROLE_PATTERNS) {
    const hits = r.aliases.reduce((s, a) => s + countMatches(norm, a), 0);
    if (hits > bestHits) {
      bestHits = hits;
      best = r;
    }
  }
  return best ? { id: best.id, ...best.label } : null;
};

// Whole-token presence test (lookbehind-free) over normalized text.
const hasAnyWord = (normText, words) =>
  new RegExp(`(?:^| )(?:${words.join("|")})(?=$| )`).test(normText);

const detectSeniority = (norm) => {
  if (hasAnyWord(norm, ["senior", "sr", "staff", "principal", "lead", "especialista"]))
    return { pt: "Sênior", en: "Senior" };
  if (hasAnyWord(norm, ["junior", "jr", "estagio", "estagiario", "intern", "internship", "trainee"]))
    return { pt: "Júnior", en: "Junior" };
  if (hasAnyWord(norm, ["mid", "pleno", "intermediate"]))
    return { pt: "Pleno", en: "Mid-level" };
  return null;
};

/**
 * Analyze a job description against the owned skill set.
 * @returns {{score:number, matched:Array, gaps:Array, jobKeywordCount:number, role:object|null, seniority:object|null, topMatched:string[]}}
 */
export function analyzeJob(text) {
  const norm = normalize(text);
  const found = [];
  for (const entry of KEYWORDS) {
    let hits = 0;
    for (const alias of entry.aliases) hits += countMatches(norm, alias);
    if (hits > 0) found.push({ label: entry.label, owned: entry.owned, hits });
  }

  const matched = found.filter((f) => f.owned).sort((a, b) => b.hits - a.hits);
  const gaps = found.filter((f) => !f.owned).sort((a, b) => b.hits - a.hits);
  const jobKeywordCount = found.length;
  const score = jobKeywordCount ? Math.round((100 * matched.length) / jobKeywordCount) : 0;

  return {
    score,
    matched,
    gaps,
    jobKeywordCount,
    role: detectRole(norm),
    seniority: detectSeniority(norm),
    topMatched: matched.slice(0, 14).map((m) => m.label),
  };
}

// Every skill Arthur owns — used for the keyword-library view.
export const OWNED_KEYWORDS = KEYWORDS.filter((k) => k.owned).map((k) => k.label);
export const OWNED_COUNT = OWNED_KEYWORDS.length;
