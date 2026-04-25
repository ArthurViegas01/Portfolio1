import StepBadge from "./StepBadge";

const DataglassDiagram = ({ lang }) => {
  const isEn = lang === "en";
  const L = isEn
    ? { browser: "Browser", alb: "AWS ALB", django: "Django + DRF", rds: "PostgreSQL RDS",
        s3: "AWS S3", redis: "Redis", celery: "Celery Workers", tableau: "Tableau Server API",
        webFlow: "Web Request Flow", asyncFlow: "Async Task Flow", multiTenant: "Multi-Tenant" }
    : { browser: "Browser", alb: "AWS ALB", django: "Django + DRF", rds: "PostgreSQL RDS",
        s3: "AWS S3", redis: "Redis", celery: "Celery Workers", tableau: "Tableau Server API",
        webFlow: "Fluxo Web", asyncFlow: "Fluxo Assíncrono", multiTenant: "Multi-Tenant" };

  return (
    <svg viewBox="0 0 820 400" xmlns="http://www.w3.org/2000/svg" className="archDiagram" aria-label="Dataglass AWS Architecture">
      <defs>
        <marker id="arrD" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,60%,50%)" />
        </marker>
        <marker id="arrDGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="hsl(230,8%,60%)" />
        </marker>
      </defs>

      <rect x="0" y="0" width="820" height="400" rx="12" fill="var(--body-color)" />
      <rect x="10" y="10" width="800" height="380" rx="10" fill="var(--container-color)" opacity="0.6" />

      {/* Web Request Flow */}
      <text x="30" y="35" className="diagLane">── {L.webFlow} ──</text>

      <rect x="30" y="48" width="100" height="52" rx="8" className="diagNode diagNode--blue" />
      <text x="80" y="71" textAnchor="middle" className="diagLabel">{L.browser}</text>
      <text x="80" y="90" textAnchor="middle" className="diagSub">HTTPS</text>

      <line x1="130" y1="74" x2="175" y2="74" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrD)" />
      <StepBadge x={153} y={74} num={1} />

      <rect x="177" y="48" width="100" height="52" rx="8" className="diagNode diagNode--orange" />
      <text x="227" y="71" textAnchor="middle" className="diagLabel">{L.alb}</text>
      <text x="227" y="90" textAnchor="middle" className="diagSub">Load Balancer</text>

      <line x1="277" y1="74" x2="327" y2="74" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrD)" />
      <StepBadge x={302} y={74} num={2} />

      <rect x="329" y="40" width="140" height="68" rx="8" className="diagNode diagNode--accent" />
      <text x="399" y="65" textAnchor="middle" className="diagLabel">{L.django}</text>
      <text x="399" y="82" textAnchor="middle" className="diagSub">Elastic Beanstalk</text>
      <text x="399" y="98" textAnchor="middle" className="diagSub">{L.multiTenant}</text>

      <line x1="469" y1="65" x2="524" y2="65" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrD)" />
      <StepBadge x={497} y={65} num={3} />

      <rect x="526" y="40" width="120" height="52" rx="8" className="diagNode diagNode--purple" />
      <text x="586" y="63" textAnchor="middle" className="diagLabel">{L.rds}</text>
      <text x="586" y="82" textAnchor="middle" className="diagSub">Row-level isolation</text>

      <line x1="469" y1="90" x2="524" y2="108" stroke="hsl(230,60%,50%)" strokeWidth="1.6" markerEnd="url(#arrD)" />
      <StepBadge x={497} y={99} num={4} />

      <rect x="526" y="102" width="120" height="46" rx="8" className="diagNode diagNode--green" />
      <text x="586" y="121" textAnchor="middle" className="diagLabel">{L.s3}</text>
      <text x="586" y="138" textAnchor="middle" className="diagSub">Signed URLs</text>

      {/* Async Flow */}
      <line x1="30" y1="210" x2="790" y2="210" stroke="var(--text-color)" strokeWidth="0.5" strokeDasharray="6,4" opacity="0.3" />
      <text x="30" y="204" className="diagLane">── {L.asyncFlow} ──</text>

      <line x1="399" y1="108" x2="250" y2="228" stroke="hsl(230,60%,50%)" strokeWidth="1.6" markerEnd="url(#arrD)" />
      <StepBadge x={325} y={168} num={5} />

      <rect x="177" y="228" width="120" height="52" rx="8" className="diagNode diagNode--red" />
      <text x="237" y="251" textAnchor="middle" className="diagLabel">{L.redis}</text>
      <text x="237" y="270" textAnchor="middle" className="diagSub">Task Broker</text>

      <line x1="297" y1="254" x2="342" y2="254" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrD)" />
      <StepBadge x={320} y={254} num={6} />

      <rect x="344" y="228" width="130" height="52" rx="8" className="diagNode diagNode--green" />
      <text x="409" y="251" textAnchor="middle" className="diagLabel">{L.celery}</text>
      <text x="409" y="270" textAnchor="middle" className="diagSub">Docker Pool</text>

      <line x1="474" y1="254" x2="524" y2="254" stroke="hsl(230,60%,50%)" strokeWidth="1.8" markerEnd="url(#arrD)" />
      <StepBadge x={499} y={254} num={7} />

      <rect x="526" y="228" width="140" height="52" rx="8" className="diagNode diagNode--orange" />
      <text x="596" y="251" textAnchor="middle" className="diagLabel">{L.tableau}</text>
      <text x="596" y="270" textAnchor="middle" className="diagSub">REST API / Sync</text>

      {/* Integration badges */}
      {[
        { x: 30,  label: "Mailgun",  sub: "DKIM/SPF" },
        { x: 145, label: "Bugsnag",  sub: "APM" },
        { x: 255, label: "ECR",      sub: "Docker Images" },
        { x: 360, label: "IAM",      sub: "Instance Profile" },
      ].map(({ x, label, sub }) => (
        <g key={label}>
          <rect x={x} y="330" width="100" height="40" rx="6" fill="var(--container-color)" stroke="var(--accent-color)" strokeWidth="0.8" opacity="0.7" />
          <text x={x + 50} y="347" textAnchor="middle" className="diagSub" style={{ fontSize: "8px", fontWeight: "600" }}>{label}</text>
          <text x={x + 50} y="362" textAnchor="middle" className="diagSub" style={{ fontSize: "7px" }}>{sub}</text>
        </g>
      ))}

      {/* Legend */}
      {[
        { cls: "diagNode--blue",   label: "Browser",   y: 228 },
        { cls: "diagNode--orange", label: "AWS",       y: 248 },
        { cls: "diagNode--accent", label: "Django",    y: 268 },
        { cls: "diagNode--purple", label: "RDS",       y: 288 },
        { cls: "diagNode--green",  label: "S3/Celery", y: 308 },
        { cls: "diagNode--red",    label: "Redis",     y: 328 },
      ].map(({ cls, label, y }) => (
        <g key={label}>
          <rect x="700" y={y} width="14" height="14" rx="3" className={cls} />
          <text x="718" y={y + 11} className="diagSub">{label}</text>
        </g>
      ))}
    </svg>
  );
};

export default DataglassDiagram;
