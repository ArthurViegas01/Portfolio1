const ARROW       = "hsl(230,60%,50%)";
const ARROW_MUTED = "hsl(230,20%,65%)";

const PipelineRow = ({ y, label, trigger, nodes, muted }) => {
  const stroke  = muted ? ARROW_MUTED : ARROW;
  const arrowId = muted ? "arrCIbase" : "arrCI";

  return (
    <g>
      <text x="32" y={y - 6} className="diagLane" opacity={muted ? 0.55 : 1}>
        ── {label} ({trigger}) ──
      </text>
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={y} width={n.w} height={46} rx="7" className={n.cls + (muted ? " diagNode--muted" : "")} />
          <text x={n.x + n.w / 2} y={y + 19} textAnchor="middle" className="diagLabel" opacity={muted ? 0.65 : 1}>{n.top}</text>
          <text x={n.x + n.w / 2} y={y + 35} textAnchor="middle" className="diagSub"   opacity={muted ? 0.55 : 1}>{n.bot}</text>
        </g>
      ))}
      {nodes.slice(0, -1).map((n, i) => (
        <line
          key={i}
          x1={n.x + n.w} y1={y + 23}
          x2={nodes[i + 1].x - 1} y2={y + 23}
          stroke={stroke} strokeWidth="1.7" markerEnd={`url(#${arrowId})`}
        />
      ))}
    </g>
  );
};

const DataglassCICDDiagram = ({ lang }) => {
  const isEn = lang === "en";
  const L = isEn
    ? { base: "Base Image Pipeline", dev: "Dev Pipeline", prod: "Production Pipeline",
        baseTrigger: "Manual trigger", devTrigger: "Push to dev branch", prodTrigger: "PR merge to main",
        baseNote: "Rebuilds base layer when Python deps change (rarely)",
        metrics: ["~3 min", "~7 min", "2 envs", "Zero downtime"],
        metricLabels: ["CodeBuild", "Total deploy", "Prod + Dev", "Rolling update"] }
    : { base: "Pipeline Base Image", dev: "Pipeline Dev", prod: "Pipeline Produção",
        baseTrigger: "Trigger manual", devTrigger: "Push na branch dev", prodTrigger: "Merge de PR na main",
        baseNote: "Reconstrói a camada base quando dependências Python mudam (raramente)",
        metrics: ["~3 min", "~7 min", "2 envs", "Zero downtime"],
        metricLabels: ["CodeBuild", "Deploy total", "Prod + Dev", "Rolling update"] };

  return (
    <svg viewBox="0 0 820 430" xmlns="http://www.w3.org/2000/svg" className="archDiagram" aria-label="Dataglass CI/CD Pipeline">
      <defs>
        <marker id="arrCI" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={ARROW} />
        </marker>
        <marker id="arrCIbase" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={ARROW_MUTED} />
        </marker>
      </defs>

      <rect x="0" y="0" width="820" height="430" rx="12" fill="var(--body-color)" />
      <rect x="10" y="10" width="800" height="410" rx="10" fill="var(--container-color)" opacity="0.6" />

      {/* ① python-base pipeline */}
      <PipelineRow
        y={28} muted={true}
        label={`① ${L.base}`} trigger={L.baseTrigger}
        nodes={[
          { x: 32,  w: 90,  cls: "diagNode diagNode--blue",   top: "GitHub",    bot: "Webhook" },
          { x: 175, w: 110, cls: "diagNode diagNode--green",  top: "CodeBuild", bot: "buildspec.yml" },
          { x: 345, w: 130, cls: "diagNode diagNode--orange", top: "ECR",       bot: "python-base" },
        ]}
      />
      <text x="490" y={62} className="diagSub" opacity="0.5" fontSize="8">{L.baseNote}</text>

      {/* ② dev pipeline */}
      <PipelineRow
        y={115} muted={false}
        label={`② ${L.dev}`} trigger={L.devTrigger}
        nodes={[
          { x: 32,  w: 90,  cls: "diagNode diagNode--blue",   top: "GitHub",          bot: "dev branch" },
          { x: 175, w: 110, cls: "diagNode diagNode--green",  top: "CodeBuild",        bot: "Build + Push" },
          { x: 345, w: 110, cls: "diagNode diagNode--orange", top: "ECR",              bot: "dataglass/dev" },
          { x: 515, w: 130, cls: "diagNode diagNode--accent", top: "Elastic Beanstalk", bot: "dev environment" },
        ]}
      />

      {/* ③ prod pipeline */}
      <PipelineRow
        y={215} muted={false}
        label={`③ ${L.prod}`} trigger={L.prodTrigger}
        nodes={[
          { x: 32,  w: 90,  cls: "diagNode diagNode--blue",   top: "GitHub",          bot: "main branch" },
          { x: 175, w: 110, cls: "diagNode diagNode--green",  top: "CodeBuild",        bot: "Build + Push" },
          { x: 345, w: 110, cls: "diagNode diagNode--orange", top: "ECR",              bot: "dataglass/app" },
          { x: 515, w: 130, cls: "diagNode diagNode--accent", top: "Elastic Beanstalk", bot: "production" },
        ]}
      />

      {/* Build inputs */}
      <line x1="30" y1="316" x2="790" y2="316" stroke="var(--text-color)" strokeWidth="0.5" strokeDasharray="5,4" opacity="0.25" />
      <text x="30" y="310" className="diagLane">{isEn ? "── Build inputs ──" : "── Entradas do build ──"}</text>

      {[
        { x: 220, label: "ECR python-base",  sub: isEn ? "Base Docker layer"       : "Camada base Docker" },
        { x: 345, label: "Secrets Manager",  sub: isEn ? "Env vars at build time"  : "Vars injetadas no build" },
        { x: 475, label: "CodeArtifact",     sub: isEn ? "Private packages cache"  : "Cache de pacotes privados" },
        { x: 600, label: "Certificate Mgr",  sub: "SSL / TLS" },
      ].map(({ x, label, sub }) => (
        <g key={label}>
          <rect x={x} y="322" width="118" height="40" rx="6"
            fill="var(--container-color)" stroke="var(--accent-color)" strokeWidth="0.7" opacity="0.8" />
          <text x={x + 59} y="339" textAnchor="middle" className="diagSub" style={{ fontSize: "8px", fontWeight: "600" }}>{label}</text>
          <text x={x + 59} y="354" textAnchor="middle" className="diagSub" style={{ fontSize: "7px" }}>{sub}</text>
        </g>
      ))}

      {/* Dashed arrows from inputs → CodeBuild in pipelines 2 + 3 */}
      {[138, 238].map((y) => (
        <g key={y}>
          <line x1="279" y1="322" x2="230" y2={y + 46} stroke={ARROW} strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#arrCI)" opacity="0.65" />
          <line x1="404" y1="322" x2="265" y2={y + 46} stroke={ARROW} strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#arrCI)" opacity="0.65" />
        </g>
      ))}

      {/* Metrics bar */}
      {L.metrics.map((val, i) => (
        <g key={i}>
          <text x={52 + i * 180} y="400" textAnchor="middle" fill="hsl(230,60%,55%)" fontSize="14" fontWeight="bold" fontFamily="var(--body-font)">{val}</text>
          <text x={52 + i * 180} y="416" textAnchor="middle" className="diagSub">{L.metricLabels[i]}</text>
        </g>
      ))}
    </svg>
  );
};

export default DataglassCICDDiagram;
