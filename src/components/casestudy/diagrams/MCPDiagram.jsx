import StepBadge from "./StepBadge";

const MCPDiagram = ({ lang }) => {
  const isEn = lang === "en";
  const L = isEn
    ? { client: "MCP Client", claude: "Claude Desktop", protocol: "MCP Protocol", server: "FastMCP Server",
        tools: "Tool Dispatcher", github: "GitHub API", langchain: "LangChain", llm: "Groq / Llama 3",
        cache: "Redis Cache", docker: "Docker + Railway", analyze: "analyze_profile()", evaluate: "evaluate_repository()",
        mapJob: "map_to_job()", summary: "generate_recruiter_summary()", result: "Markdown Report",
        req: "tool_call (JSON-RPC)", resp: "structured result" }
    : { client: "Cliente MCP", claude: "Claude Desktop", protocol: "Protocolo MCP", server: "Servidor FastMCP",
        tools: "Despachante", github: "GitHub API", langchain: "LangChain", llm: "Groq / Llama 3",
        cache: "Redis Cache", docker: "Docker + Railway", analyze: "analyze_profile()", evaluate: "evaluate_repository()",
        mapJob: "map_to_job()", summary: "generate_recruiter_summary()", result: "Relatorio Markdown",
        req: "tool_call (JSON-RPC)", resp: "resultado estruturado" };

  return (
    <svg viewBox="0 0 860 430" xmlns="http://www.w3.org/2000/svg" className="archDiagram" aria-label="MCP Server Architecture">
      <defs>
        <marker id="mArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,60%,50%)" />
        </marker>
        <marker id="mArrG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(145,55%,42%)" />
        </marker>
        <marker id="mArrO" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(35,90%,52%)" />
        </marker>
      </defs>

      <rect x="0" y="0" width="860" height="430" rx="12" fill="var(--body-color)" />
      <rect x="10" y="10" width="840" height="410" rx="10" fill="var(--container-color)" opacity="0.55" />

      {/* MCP Client */}
      <rect x="22" y="30" width="148" height="180" rx="10" fill="hsl(230,60%,50%)" opacity="0.12" stroke="hsl(230,60%,50%)" strokeWidth="1.2" strokeDasharray="5,3" />
      <text x="96" y="50" textAnchor="middle" className="diagLane" fill="hsl(230,60%,50%)">{L.client}</text>
      <rect x="34" y="60" width="124" height="48" rx="8" className="diagNode diagNode--blue" />
      <text x="96" y="81" textAnchor="middle" className="diagLabel">{L.claude}</text>
      <text x="96" y="98" textAnchor="middle" className="diagSub">+ IDE Agents</text>
      <rect x="34" y="120" width="124" height="90" rx="8" className="diagNode" fill="var(--body-color)" stroke="hsl(230,8%,60%)" strokeWidth="1" />
      <text x="96" y="141" textAnchor="middle" fontSize="8" fill="hsl(230,30%,70%)">{L.analyze}</text>
      <text x="96" y="157" textAnchor="middle" fontSize="8" fill="hsl(230,30%,70%)">{L.evaluate}</text>
      <text x="96" y="173" textAnchor="middle" fontSize="8" fill="hsl(230,30%,70%)">{L.mapJob}</text>
      <text x="96" y="189" textAnchor="middle" fontSize="8" fill="hsl(230,30%,70%)">{L.summary}</text>

      {/* Client ↔ Server arrows */}
      <line x1="170" y1="115" x2="255" y2="115" stroke="hsl(230,60%,50%)" strokeWidth="2" markerEnd="url(#mArr)" />
      <StepBadge x={212} y={115} num={1} />
      <text x="212" y="107" textAnchor="middle" className="diagSub" fontSize="8">{L.req}</text>
      <line x1="255" y1="135" x2="170" y2="135" stroke="hsl(145,55%,42%)" strokeWidth="1.8" markerEnd="url(#mArrG)" strokeDasharray="5,3" />
      <text x="212" y="152" textAnchor="middle" className="diagSub" fontSize="8">{L.resp}</text>

      {/* FastMCP Server */}
      <rect x="255" y="20" width="190" height="260" rx="10" fill="hsl(35,90%,52%)" opacity="0.10" stroke="hsl(35,90%,52%)" strokeWidth="1.2" strokeDasharray="5,3" />
      <text x="350" y="40" textAnchor="middle" className="diagLane" fill="hsl(35,90%,52%)">{L.server}</text>
      <rect x="270" y="52" width="160" height="48" rx="8" className="diagNode diagNode--accent" />
      <text x="350" y="73" textAnchor="middle" className="diagLabel">{L.protocol}</text>
      <text x="350" y="91" textAnchor="middle" className="diagSub">JSON-RPC 2.0 / SSE</text>
      <line x1="350" y1="100" x2="350" y2="130" stroke="hsl(230,60%,50%)" strokeWidth="1.5" markerEnd="url(#mArr)" />
      <StepBadge x={350} y={117} num={2} />
      <rect x="270" y="132" width="160" height="48" rx="8" className="diagNode diagNode--orange" />
      <text x="350" y="153" textAnchor="middle" className="diagLabel">{L.tools}</text>
      <text x="350" y="171" textAnchor="middle" className="diagSub">Routes tool calls</text>
      <line x1="350" y1="180" x2="350" y2="210" stroke="hsl(230,60%,50%)" strokeWidth="1.5" markerEnd="url(#mArr)" />
      <StepBadge x={350} y={197} num={3} />
      <rect x="270" y="212" width="160" height="48" rx="8" className="diagNode diagNode--green" />
      <text x="350" y="233" textAnchor="middle" className="diagLabel">{isEn ? "Tool Handlers" : "Handlers"}</text>
      <text x="350" y="251" textAnchor="middle" className="diagSub">Pydantic validated</text>

      {/* External: GitHub API */}
      <line x1="430" y1="195" x2="510" y2="160" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#mArr)" />
      <StepBadge x={472} y={178} num={4} />
      <rect x="512" y="130" width="140" height="52" rx="8" className="diagNode diagNode--blue" />
      <text x="582" y="153" textAnchor="middle" className="diagLabel">{L.github}</text>
      <text x="582" y="171" textAnchor="middle" className="diagSub">REST API v3 · PAT scoped</text>

      {/* External: Redis Cache */}
      <line x1="512" y1="175" x2="430" y2="228" stroke="hsl(145,55%,42%)" strokeWidth="1.5" markerEnd="url(#mArrG)" strokeDasharray="5,3" />
      <rect x="512" y="60" width="140" height="52" rx="8" className="diagNode diagNode--red" />
      <text x="582" y="83" textAnchor="middle" className="diagLabel">{L.cache}</text>
      <text x="582" y="101" textAnchor="middle" className="diagSub">TTL 15 min · Rate Limiter</text>
      <line x1="582" y1="112" x2="582" y2="130" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#mArr)" />

      {/* External: LangChain */}
      <line x1="430" y1="238" x2="510" y2="238" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#mArr)" />
      <StepBadge x={472} y={238} num={5} />
      <rect x="512" y="212" width="140" height="52" rx="8" className="diagNode diagNode--green" />
      <text x="582" y="233" textAnchor="middle" className="diagLabel">{L.langchain}</text>
      <text x="582" y="251" textAnchor="middle" className="diagSub">Skill extraction · Chains</text>

      {/* External: LLM */}
      <line x1="430" y1="252" x2="510" y2="300" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#mArr)" />
      <StepBadge x={472} y={278} num={6} />
      <rect x="512" y="276" width="140" height="52" rx="8" className="diagNode diagNode--purple" />
      <text x="582" y="297" textAnchor="middle" className="diagLabel">{L.llm}</text>
      <text x="582" y="315" textAnchor="middle" className="diagSub">Streaming · &lt;200ms first token</text>

      {/* Result */}
      <line x1="582" y1="328" x2="582" y2="358" stroke="hsl(145,55%,42%)" strokeWidth="1.5" markerEnd="url(#mArrG)" />
      <rect x="510" y="360" width="144" height="48" rx="8" className="diagNode diagNode--accent" />
      <text x="582" y="381" textAnchor="middle" className="diagLabel">{L.result}</text>
      <text x="582" y="399" textAnchor="middle" className="diagSub">Structured · Streamed</text>

      {/* Stack badges */}
      {[
        { y: 60,  top: L.docker,       bot: "python:3.12-slim" },
        { y: 130, top: "FastMCP SDK",  bot: "Anthropic official" },
        { y: 200, top: "Pydantic v2",  bot: "Input validation" },
        { y: 270, top: "fastapi-limiter", bot: "30 req/min per IP" },
      ].map(({ y, top, bot }) => (
        <g key={y}>
          <rect x="680" y={y} width="160" height="52" rx="8" className="diagNode" fill="var(--body-color)" stroke="hsl(230,8%,60%)" strokeWidth="1" />
          <text x="760" y={y + 23} textAnchor="middle" className="diagLabel">{top}</text>
          <text x="760" y={y + 41} textAnchor="middle" className="diagSub">{bot}</text>
        </g>
      ))}
      <text x="760" y="380" textAnchor="middle" className="diagLane" fontSize="9" fill="hsl(230,8%,60%)">Stack</text>
    </svg>
  );
};

export default MCPDiagram;
