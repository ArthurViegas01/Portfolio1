import StepBadge from "./StepBadge";

const ArchDiagram = ({ lang }) => {
  const isEn = lang === "en";
  const L = isEn
    ? { client: "Client", api: "FastAPI", worker: "Celery Worker", db: "PostgreSQL + pgvector",
        llm: "Groq API / Llama 3", redis: "Redis (Broker)", query: "Query",
        ingest: "Ingestion Flow", queryFlow: "Query Flow", answer: "Answer" }
    : { client: "Cliente", api: "FastAPI", worker: "Celery Worker", db: "PostgreSQL + pgvector",
        llm: "Groq API / Llama 3", redis: "Redis (Broker)", query: "Consulta",
        ingest: "Fluxo de Ingestão", queryFlow: "Fluxo de Consulta", answer: "Resposta" };

  return (
    <svg viewBox="0 0 820 420" xmlns="http://www.w3.org/2000/svg" className="archDiagram" aria-label="RAG Architecture Diagram">
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,60%,50%)" />
        </marker>
        <marker id="arrGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,8%,60%)" />
        </marker>
      </defs>

      <rect x="0" y="0" width="820" height="420" rx="12" fill="var(--body-color)" />
      <rect x="10" y="10" width="800" height="400" rx="10" fill="var(--container-color)" opacity="0.6" />

      {/* Ingestion Flow */}
      <text x="30" y="35" className="diagLane">── {L.ingest} ──</text>

      <rect x="30" y="50" width="110" height="52" rx="8" className="diagNode diagNode--blue" />
      <text x="85" y="73" textAnchor="middle" className="diagLabel">{L.client}</text>
      <text x="85" y="92" textAnchor="middle" className="diagSub">Browser / API</text>

      <line x1="140" y1="76" x2="195" y2="76" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arr)" />
      <StepBadge x={168} y={76} num={1} />

      <rect x="197" y="50" width="110" height="52" rx="8" className="diagNode diagNode--accent" />
      <text x="252" y="73" textAnchor="middle" className="diagLabel">{L.api}</text>
      <text x="252" y="92" textAnchor="middle" className="diagSub">Python ASGI</text>

      <line x1="307" y1="76" x2="362" y2="76" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arr)" />
      <StepBadge x={335} y={76} num={2} />

      <rect x="364" y="50" width="110" height="52" rx="8" className="diagNode diagNode--red" />
      <text x="419" y="73" textAnchor="middle" className="diagLabel">{L.redis}</text>
      <text x="419" y="92" textAnchor="middle" className="diagSub">Message Broker</text>

      <line x1="474" y1="76" x2="529" y2="76" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arr)" />
      <StepBadge x={502} y={76} num={3} />

      <rect x="531" y="50" width="120" height="52" rx="8" className="diagNode diagNode--green" />
      <text x="591" y="73" textAnchor="middle" className="diagLabel">{L.worker}</text>
      <text x="591" y="92" textAnchor="middle" className="diagSub">LangChain</text>

      <line x1="591" y1="102" x2="591" y2="152" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arr)" />
      <StepBadge x={565} y={122} num={4} />
      <StepBadge x={617} y={140} num={5} />

      <rect x="531" y="154" width="120" height="52" rx="8" className="diagNode diagNode--purple" />
      <text x="591" y="177" textAnchor="middle" className="diagLabel">{L.db}</text>
      <text x="591" y="196" textAnchor="middle" className="diagSub">HNSW Index</text>

      {/* Query Flow */}
      <line x1="30" y1="248" x2="790" y2="248" stroke="var(--text-color)" strokeWidth="0.5" strokeDasharray="6,4" opacity="0.3" />
      <text x="30" y="242" className="diagLane">── {L.queryFlow} ──</text>

      <rect x="30" y="262" width="110" height="52" rx="8" className="diagNode diagNode--blue" />
      <text x="85" y="285" textAnchor="middle" className="diagLabel">{L.client}</text>
      <text x="85" y="304" textAnchor="middle" className="diagSub">{L.query}</text>

      <line x1="140" y1="288" x2="195" y2="288" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arr)" />

      <rect x="197" y="262" width="110" height="52" rx="8" className="diagNode diagNode--accent" />
      <text x="252" y="285" textAnchor="middle" className="diagLabel">{L.api}</text>
      <text x="252" y="304" textAnchor="middle" className="diagSub">embed query</text>

      <line x1="307" y1="288" x2="362" y2="288" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arr)" />
      <StepBadge x={335} y={288} num={6} />

      <rect x="364" y="262" width="120" height="52" rx="8" className="diagNode diagNode--purple" />
      <text x="424" y="285" textAnchor="middle" className="diagLabel">{L.db}</text>
      <text x="424" y="304" textAnchor="middle" className="diagSub">top-k chunks</text>

      <line x1="484" y1="288" x2="539" y2="288" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arr)" />
      <StepBadge x={512} y={288} num={7} />

      <rect x="541" y="262" width="120" height="52" rx="8" className="diagNode diagNode--orange" />
      <text x="601" y="285" textAnchor="middle" className="diagLabel">{L.llm}</text>
      <text x="601" y="304" textAnchor="middle" className="diagSub">context window</text>

      <line x1="541" y1="302" x2="140" y2="348" stroke="hsl(230,8%,60%)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrGray)" />
      <StepBadge x={340} y={340} num={8} />

      <rect x="30" y="352" width="110" height="42" rx="8" className="diagNode diagNode--answer" />
      <text x="85" y="377" textAnchor="middle" className="diagLabel">{L.answer}</text>

      {/* Legend */}
      {[
        { cls: "diagNode--blue",   label: "Client",   y: 262 },
        { cls: "diagNode--accent", label: "FastAPI",  y: 282 },
        { cls: "diagNode--red",    label: "Redis",    y: 302 },
        { cls: "diagNode--green",  label: "Celery",   y: 322 },
        { cls: "diagNode--purple", label: "pgvector", y: 342 },
        { cls: "diagNode--orange", label: "LLM",      y: 362 },
      ].map(({ cls, label, y }) => (
        <g key={label}>
          <rect x="700" y={y} width="14" height="14" rx="3" className={cls} />
          <text x="718" y={y + 11} className="diagSub">{label}</text>
        </g>
      ))}
    </svg>
  );
};

export default ArchDiagram;
