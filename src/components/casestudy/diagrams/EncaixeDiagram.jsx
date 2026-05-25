import StepBadge from "./StepBadge";

const EncaixeDiagram = ({ lang }) => {
  const isEn = lang === "en";
  const L = isEn
    ? {
        ingestLane:    "Ingestion Flow",
        processLane:   "LangGraph Pipeline (Celery Worker)",
        whatsapp:      "WhatsApp",
        evolution:     "Evolution API",
        fastapi:       "FastAPI Webhook",
        webhookEvents: "webhook_events",
        redis:         "Redis (Broker)",
        classify:      "classify_intent",
        retrieve:      "retrieve_context",
        generate:      "generate_response",
        confidence:    "check_confidence",
        schedule:      "schedule",
        handoff:       "handoff",
        respond:       "respond",
        haiku:         "Claude Haiku",
        voyage:        "Voyage AI + pgvector",
        calendar:      "Google Calendar",
        resend:        "Resend (email)",
        sendWa:        "Evolution.send_text()",
        dedupe:        "unique (source, external_id)",
        ackSub:        "200 ACK · < 200ms",
        wsSub:         "Baileys (self-hosted)",
        topK:          "top-4 FAQ · cosine",
        confSub:       "threshold per tenant",
      }
    : {
        ingestLane:    "Fluxo de Ingestão",
        processLane:   "Pipeline LangGraph (Celery Worker)",
        whatsapp:      "WhatsApp",
        evolution:     "Evolution API",
        fastapi:       "Webhook FastAPI",
        webhookEvents: "webhook_events",
        redis:         "Redis (Broker)",
        classify:      "classify_intent",
        retrieve:      "retrieve_context",
        generate:      "generate_response",
        confidence:    "check_confidence",
        schedule:      "schedule",
        handoff:       "handoff",
        respond:       "respond",
        haiku:         "Claude Haiku",
        voyage:        "Voyage AI + pgvector",
        calendar:      "Google Calendar",
        resend:        "Resend (e-mail)",
        sendWa:        "Evolution.send_text()",
        dedupe:        "unique (source, external_id)",
        ackSub:        "ACK 200 · < 200ms",
        wsSub:         "Baileys (self-hosted)",
        topK:          "top-4 FAQ · cosseno",
        confSub:       "limiar por tenant",
      };

  return (
    <svg viewBox="0 0 860 520" xmlns="http://www.w3.org/2000/svg" className="archDiagram" aria-label="Encaixe LangGraph Architecture">
      <defs>
        <marker id="eArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,60%,50%)" />
        </marker>
        <marker id="eArrG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(145,55%,42%)" />
        </marker>
        <marker id="eArrO" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(35,90%,52%)" />
        </marker>
      </defs>

      <rect x="0" y="0" width="860" height="520" rx="12" fill="var(--body-color)" />
      <rect x="10" y="10" width="840" height="500" rx="10" fill="var(--container-color)" opacity="0.55" />

      {/* === INGESTION LANE === */}
      <text x="30" y="35" className="diagLane">── {L.ingestLane} ──</text>

      <rect x="30" y="50" width="110" height="52" rx="8" className="diagNode diagNode--green" />
      <text x="85" y="73" textAnchor="middle" className="diagLabel">{L.whatsapp}</text>
      <text x="85" y="92" textAnchor="middle" className="diagSub">user message</text>

      <line x1="140" y1="76" x2="195" y2="76" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#eArr)" />
      <StepBadge x={168} y={76} num={1} />

      <rect x="197" y="50" width="130" height="52" rx="8" className="diagNode diagNode--blue" />
      <text x="262" y="73" textAnchor="middle" className="diagLabel">{L.evolution}</text>
      <text x="262" y="92" textAnchor="middle" className="diagSub">{L.wsSub}</text>

      <line x1="327" y1="76" x2="382" y2="76" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#eArr)" />
      <StepBadge x={355} y={76} num={2} />

      <rect x="384" y="50" width="140" height="52" rx="8" className="diagNode diagNode--accent" />
      <text x="454" y="73" textAnchor="middle" className="diagLabel">{L.fastapi}</text>
      <text x="454" y="92" textAnchor="middle" className="diagSub">{L.ackSub}</text>

      <line x1="524" y1="76" x2="579" y2="76" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#eArr)" />
      <StepBadge x={552} y={76} num={3} />

      <rect x="581" y="50" width="140" height="52" rx="8" className="diagNode diagNode--purple" />
      <text x="651" y="73" textAnchor="middle" className="diagLabel">{L.webhookEvents}</text>
      <text x="651" y="92" textAnchor="middle" className="diagSub">{L.dedupe}</text>

      <line x1="721" y1="76" x2="776" y2="76" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#eArr)" />
      <StepBadge x={748} y={76} num={4} />

      <rect x="778" y="50" width="62" height="52" rx="8" className="diagNode diagNode--red" />
      <text x="809" y="73" textAnchor="middle" className="diagLabel">{L.redis}</text>
      <text x="809" y="92" textAnchor="middle" className="diagSub">broker</text>

      {/* Bridge from Redis (lane 1) → Worker (lane 2) */}
      <line x1="809" y1="102" x2="809" y2="155" stroke="hsl(35,90%,52%)" strokeWidth="1.8" markerEnd="url(#eArrO)" />
      <text x="822" y="130" className="diagSub" fontSize="9">delay()</text>

      {/* === PROCESSING LANE === */}
      <text x="30" y="135" className="diagLane">── {L.processLane} ──</text>

      <rect x="30" y="155" width="160" height="52" rx="8" className="diagNode diagNode--accent" />
      <text x="110" y="178" textAnchor="middle" className="diagLabel">{L.classify}</text>
      <text x="110" y="197" textAnchor="middle" className="diagSub">{L.haiku}</text>

      <line x1="190" y1="181" x2="245" y2="181" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#eArr)" />
      <StepBadge x={218} y={181} num={5} />

      <rect x="247" y="155" width="170" height="52" rx="8" className="diagNode diagNode--purple" />
      <text x="332" y="178" textAnchor="middle" className="diagLabel">{L.retrieve}</text>
      <text x="332" y="197" textAnchor="middle" className="diagSub">{L.voyage}</text>

      <line x1="417" y1="181" x2="472" y2="181" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#eArr)" />
      <StepBadge x={445} y={181} num={6} />

      <rect x="474" y="155" width="170" height="52" rx="8" className="diagNode diagNode--accent" />
      <text x="559" y="178" textAnchor="middle" className="diagLabel">{L.generate}</text>
      <text x="559" y="197" textAnchor="middle" className="diagSub">{L.haiku}</text>

      <line x1="644" y1="181" x2="699" y2="181" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#eArr)" />
      <StepBadge x={672} y={181} num={7} />

      <rect x="701" y="155" width="140" height="52" rx="8" className="diagNode diagNode--red" />
      <text x="771" y="178" textAnchor="middle" className="diagLabel">{L.confidence}</text>
      <text x="771" y="197" textAnchor="middle" className="diagSub">{L.confSub}</text>

      {/* === BRANCHING from confidence === */}
      <line x1="771" y1="207" x2="180" y2="285" stroke="hsl(145,55%,42%)" strokeWidth="1.5" markerEnd="url(#eArrG)" />
      <line x1="771" y1="207" x2="450" y2="285" stroke="hsl(35,90%,52%)" strokeWidth="1.5" markerEnd="url(#eArrO)" />
      <line x1="771" y1="207" x2="720" y2="285" stroke="hsl(230,60%,50%)" strokeWidth="1.5" markerEnd="url(#eArr)" />

      {/* schedule branch */}
      <rect x="80" y="290" width="200" height="60" rx="8" className="diagNode diagNode--green" />
      <text x="180" y="313" textAnchor="middle" className="diagLabel">{L.schedule}</text>
      <text x="180" y="332" textAnchor="middle" className="diagSub">{L.calendar}</text>

      {/* handoff branch */}
      <rect x="350" y="290" width="200" height="60" rx="8" className="diagNode diagNode--orange" />
      <text x="450" y="313" textAnchor="middle" className="diagLabel">{L.handoff}</text>
      <text x="450" y="332" textAnchor="middle" className="diagSub">{L.resend}</text>

      {/* respond branch */}
      <rect x="620" y="290" width="200" height="60" rx="8" className="diagNode diagNode--blue" />
      <text x="720" y="313" textAnchor="middle" className="diagLabel">{L.respond}</text>
      <text x="720" y="332" textAnchor="middle" className="diagSub">{L.sendWa}</text>

      {/* Branch labels */}
      <text x="180" y="280" textAnchor="middle" className="diagSub" fontSize="9" fill="hsl(145,55%,42%)">intent: scheduling · conf ≥ 0.65</text>
      <text x="450" y="280" textAnchor="middle" className="diagSub" fontSize="9" fill="hsl(35,90%,52%)">conf &lt; 0.65 · opt_out</text>
      <text x="720" y="280" textAnchor="middle" className="diagSub" fontSize="9" fill="hsl(230,60%,50%)">conf ≥ 0.65 · default</text>

      {/* === BACK TO WHATSAPP via provider === */}
      <line x1="720" y1="350" x2="720" y2="395" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#eArr)" />

      <rect x="600" y="397" width="240" height="50" rx="8" className="diagNode" fill="var(--body-color)" stroke="hsl(230,8%,60%)" strokeWidth="1" strokeDasharray="4,3" />
      <text x="720" y="418" textAnchor="middle" className="diagLabel">WhatsAppProvider (port)</text>
      <text x="720" y="436" textAnchor="middle" className="diagSub">Evolution · WPP · Meta Cloud · Stub</text>

      {/* === SECURITY/INFRA STACK BADGES === */}
      <rect x="30" y="460" width="800" height="44" rx="8" className="diagNode" fill="var(--body-color)" stroke="hsl(230,8%,60%)" strokeWidth="1" />
      <text x="170" y="478" textAnchor="middle" className="diagLabel">RLS + GUC app.tenant_id</text>
      <text x="170" y="495" textAnchor="middle" className="diagSub">defesa em profundidade</text>
      <text x="370" y="478" textAnchor="middle" className="diagLabel">Idempotência</text>
      <text x="370" y="495" textAnchor="middle" className="diagSub">unique (source, external_id)</text>
      <text x="560" y="478" textAnchor="middle" className="diagLabel">Token per-instance</text>
      <text x="560" y="495" textAnchor="middle" className="diagSub">webhook auth · não admin key</text>
      <text x="740" y="478" textAnchor="middle" className="diagLabel">structlog + X-Request-Id</text>
      <text x="740" y="495" textAnchor="middle" className="diagSub">trace webhook → worker → provider</text>
    </svg>
  );
};

export default EncaixeDiagram;
