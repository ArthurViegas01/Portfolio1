const ScaleDiagram = ({ lang }) => {
  const isEn = lang === "en";

  return (
    <svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" className="archDiagram" aria-label="Scale Architecture">
      <defs>
        <marker id="arrS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,60%,50%)" />
        </marker>
      </defs>
      <rect x="0" y="0" width="740" height="260" rx="12" fill="var(--body-color)" />
      <rect x="8" y="8" width="724" height="244" rx="10" fill="var(--container-color)" opacity="0.55" />

      {/* Load Balancer */}
      <rect x="20" y="100" width="100" height="50" rx="8" className="diagNode diagNode--accent" />
      <text x="70" y="121" textAnchor="middle" className="diagLabel">Load</text>
      <text x="70" y="138" textAnchor="middle" className="diagLabel">Balancer</text>

      <line x1="120" y1="125" x2="165" y2="95"  stroke="hsl(230,60%,50%)" strokeWidth="1.6" markerEnd="url(#arrS)" />
      <line x1="120" y1="125" x2="165" y2="125" stroke="hsl(230,60%,50%)" strokeWidth="1.6" markerEnd="url(#arrS)" />
      <line x1="120" y1="125" x2="165" y2="155" stroke="hsl(230,60%,50%)" strokeWidth="1.6" markerEnd="url(#arrS)" />

      {/* FastAPI replicas */}
      {[72, 104, 136].map((y, i) => (
        <g key={i}>
          <rect x="167" y={y} width="90" height="40" rx="8" className="diagNode diagNode--blue" />
          <text x="212" y={y + 17} textAnchor="middle" className="diagLabel">FastAPI</text>
          <text x="212" y={y + 33} textAnchor="middle" className="diagSub">{i < 2 ? `#${i + 1}` : "#N"}</text>
        </g>
      ))}

      <line x1="257" y1="92"  x2="305" y2="110" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />
      <line x1="257" y1="124" x2="305" y2="124" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />
      <line x1="257" y1="156" x2="305" y2="138" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />

      {/* Redis */}
      <rect x="307" y="100" width="90" height="50" rx="8" className="diagNode diagNode--red" />
      <text x="352" y="121" textAnchor="middle" className="diagLabel">Redis</text>
      <text x="352" y="138" textAnchor="middle" className="diagSub">Queue</text>

      <line x1="397" y1="120" x2="440" y2="100" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />
      <line x1="397" y1="125" x2="440" y2="125" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />
      <line x1="397" y1="130" x2="440" y2="150" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />

      {/* Celery workers */}
      {[76, 108, 140].map((y, i) => (
        <g key={i}>
          <rect x="442" y={y} width="90" height="40" rx="8" className="diagNode diagNode--green" />
          <text x="487" y={y + 17} textAnchor="middle" className="diagLabel">Celery</text>
          <text x="487" y={y + 33} textAnchor="middle" className="diagSub">{i < 2 ? `#${i + 1}` : "#N"}</text>
        </g>
      ))}

      <line x1="532" y1="115" x2="580" y2="125" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />
      <line x1="532" y1="125" x2="580" y2="125" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />
      <line x1="532" y1="160" x2="580" y2="135" stroke="hsl(230,60%,50%)" strokeWidth="1.4" markerEnd="url(#arrS)" />

      {/* PostgreSQL */}
      <rect x="582" y="100" width="110" height="50" rx="8" className="diagNode diagNode--purple" />
      <text x="637" y="121" textAnchor="middle" className="diagLabel">PostgreSQL</text>
      <text x="637" y="138" textAnchor="middle" className="diagSub">+ pgvector</text>

      {/* Labels */}
      {[
        { x: 70,  label: isEn ? "Round-robin"        : "Round-robin" },
        { x: 212, label: isEn ? "Stateless replicas" : "Réplicas stateless" },
        { x: 352, label: isEn ? "Backpressure"       : "Buffer de fila" },
        { x: 487, label: isEn ? "Auto-scaled"        : "Auto-scaled" },
        { x: 637, label: isEn ? "Read replicas"      : "Read replicas" },
      ].map(({ x, label }) => (
        <text key={x} x={x} y="205" textAnchor="middle" className="diagStep">{label}</text>
      ))}

      <text x="370" y="240" textAnchor="middle" className="diagLane">
        {isEn ? "Horizontal scaling to handle 100k+ requests" : "Escalonamento horizontal para 100k+ requisições"}
      </text>
    </svg>
  );
};

export default ScaleDiagram;
