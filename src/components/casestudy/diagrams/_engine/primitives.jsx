import { EDGE_STYLES, NODE_RADIUS } from "./tokens";
import { resolveEdgePorts } from "./layout";

/* ──────────────────────────────────────────────────────────────────────────── */
/* Background + Container                                                        */

/**
 * Chrome — the framed background for a diagram.
 *
 * Renders an outer card, an inset inner panel, a faint blueprint grid, and an
 * optional header chip (project tag) tinted with the spec's accent color.
 * Together this is what gives each diagram its own visual identity without
 * touching the layout of nodes/edges.
 */
export const Chrome = ({ w, h, accent = "accent", title, headerH = 0, gridId }) => {
  const accentVar = `var(--diag-${accent})`;
  return (
    <g>
      <rect
        x={0} y={0} width={w} height={h} rx={14}
        style={{ fill: "var(--diag-bg)" }}
      />
      <defs>
        <pattern id={gridId} width={28} height={28} patternUnits="userSpaceOnUse">
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            style={{ stroke: "var(--diag-grid)" }}
            strokeWidth={0.6}
          />
        </pattern>
        <linearGradient id={`${gridId}-accent`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor={accentVar} stopOpacity={0.6} />
          <stop offset="55%"  stopColor={accentVar} stopOpacity={0.12} />
          <stop offset="100%" stopColor={accentVar} stopOpacity={0.6} />
        </linearGradient>
      </defs>
      <rect
        x={1} y={1} width={w - 2} height={h - 2} rx={13}
        fill={`url(#${gridId})`}
      />
      <rect
        x={1} y={1} width={w - 2} height={h - 2} rx={13}
        fill="none"
        stroke={`url(#${gridId}-accent)`}
        strokeWidth={1.4}
      />
      {title && headerH > 0 && (
        <g>
          <circle cx={28} cy={headerH / 2 + 1} r={4} style={{ fill: accentVar }} />
          <text
            x={40} y={headerH / 2 + 5}
            className="diagInfoBold"
            style={{
              fill: accentVar,
              fontSize: 11,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            {title}
          </text>
          <line
            x1={20} y1={headerH - 1} x2={w - 20} y2={headerH - 1}
            style={{ stroke: "var(--diag-grid)" }}
            strokeWidth={1}
          />
        </g>
      )}
    </g>
  );
};

/* ──────────────────────────────────────────────────────────────────────────── */
/* Lane separator + label                                                        */

export const Lane = ({ labelY, label, divider, dividerY, spec }) => (
  <g>
    {divider && (
      <line
        x1={30}
        y1={dividerY}
        x2={spec.size.w - 30}
        y2={dividerY}
        style={{ stroke: "var(--diag-grid)" }}
        strokeWidth={1}
        strokeDasharray="6,4"
      />
    )}
    {label && (
      <text x={30} y={labelY} className="diagLane">
        ── {label} ──
      </text>
    )}
  </g>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/* Group container (used for MCP client/server boxes, AIComponent layers)        */

export const Group = ({ rect, label, variant = "frame", labelAlign = "center" }) => {
  const colorVar = variant === "frame" ? "var(--diag-accent)" : `var(--diag-${variant})`;
  const fillOpacity = variant === "frame" ? 0.05 : 0.14;
  const labelX = labelAlign === "left" ? rect.x + 14 : rect.cx;
  const anchor = labelAlign === "left" ? "start" : "middle";

  return (
    <g>
      <rect
        x={rect.x}
        y={rect.y}
        width={rect.w}
        height={rect.h}
        rx={10}
        style={{ fill: colorVar, stroke: colorVar }}
        fillOpacity={fillOpacity}
        strokeWidth={1.3}
        strokeDasharray="6,3"
      />
      {label && (
        <text
          x={labelX}
          y={rect.y + 16}
          textAnchor={anchor}
          className="diagInfoBold"
          style={{ fill: colorVar, fontSize: 10, fontWeight: 700, letterSpacing: 0.3 }}
        >
          {label}
        </text>
      )}
    </g>
  );
};

/* ──────────────────────────────────────────────────────────────────────────── */
/* Node — the box                                                                */

export const Node = ({ rect, variant = "accent", label, sub, dashed, ghost, muted }) => {
  const subs = !sub ? [] : Array.isArray(sub) ? sub.filter(Boolean) : [sub];
  const lineCount = subs.length;
  const labelY = lineCount === 0
    ? rect.cy + 4
    : lineCount === 1
      ? rect.y + rect.h / 2 - 3
      : rect.y + 22;
  const subStartY = lineCount <= 1 ? labelY + 17 : rect.y + 38;
  const className = ghost
    ? "diagNode"
    : `diagNode diagNode--${variant}${muted ? " diagNode--muted" : ""}`;
  const textOpacity = muted ? 0.6 : 1;
  const labelClass = ghost ? "diagInfoBold" : "diagLabel";
  const subClass   = ghost ? "diagInfo"     : "diagSub";

  return (
    <g>
      <rect
        x={rect.x}
        y={rect.y}
        width={rect.w}
        height={rect.h}
        rx={NODE_RADIUS}
        className={className}
        {...(ghost && {
          style: { fill: "var(--diag-ghost)", stroke: "var(--diag-ghost-border)" },
          strokeWidth: 1,
          strokeDasharray: dashed ? "5,3" : undefined,
        })}
      />
      {label && (
        <text x={rect.cx} y={labelY} textAnchor="middle" className={labelClass} opacity={textOpacity}>
          {label}
        </text>
      )}
      {subs.map((s, i) => (
        <text
          key={i}
          x={rect.cx}
          y={subStartY + i * 13}
          textAnchor="middle"
          className={subClass}
          opacity={textOpacity}
        >
          {s}
        </text>
      ))}
    </g>
  );
};

/* ──────────────────────────────────────────────────────────────────────────── */
/* Step badge — numbered circle on an edge                                       */

export const StepBadge = ({ x, y, num, accent = "accent" }) => (
  <g>
    <circle cx={x} cy={y} r={10} style={{ fill: `var(--diag-${accent})` }} stroke="#fff" strokeWidth={1.5} />
    <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">
      {num}
    </text>
  </g>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/* Edge — connecting line with optional step + label                             */

export const Edge = ({ from, to, step, style = "default", port = "auto", label, labelOffset = -8, accent }) => {
  const ports = resolveEdgePorts(from, to, port);
  if (!ports) return null;

  const def = EDGE_STYLES[style] || EDGE_STYLES.default;
  const midX = (ports.x1 + ports.x2) / 2;
  const midY = (ports.y1 + ports.y2) / 2;
  const colorVar = `var(--diag-${def.colorKey})`;

  return (
    <g>
      <line
        x1={ports.x1}
        y1={ports.y1}
        x2={ports.x2}
        y2={ports.y2}
        style={{ stroke: colorVar }}
        strokeWidth={def.width}
        strokeDasharray={def.dashed ? "5,3" : undefined}
        markerEnd={`url(#diag-arrow-${def.colorKey})`}
      />
      {label && (
        <text
          x={midX}
          y={midY + labelOffset}
          textAnchor="middle"
          className="diagInfo"
          style={{ fill: colorVar, fontSize: 9, fontWeight: 600 }}
        >
          {label}
        </text>
      )}
      {step != null && <StepBadge x={midX} y={midY} num={step} accent={accent} />}
    </g>
  );
};

/* ──────────────────────────────────────────────────────────────────────────── */
/* Sidecar — small box outside the main flow (ECR, IAM, Mailgun, ...)            */

export const Sidecar = ({ rect, label, sub, accent = "accent" }) => (
  <g>
    <rect
      x={rect.x}
      y={rect.y}
      width={rect.w}
      height={rect.h}
      rx={8}
      style={{ fill: "var(--diag-ghost)", stroke: `var(--diag-${accent})` }}
      strokeWidth={1}
    />
    <text
      x={rect.x + rect.w / 2}
      y={rect.y + rect.h / 2 - 3}
      textAnchor="middle"
      className="diagInfoBold"
    >
      {label}
    </text>
    {sub && (
      <text
        x={rect.x + rect.w / 2}
        y={rect.y + rect.h / 2 + 11}
        textAnchor="middle"
        className="diagInfo"
        style={{ fontSize: 9 }}
      >
        {sub}
      </text>
    )}
  </g>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/* Legend — variant swatches in a corner                                         */

export const Legend = ({ items, x, y }) => (
  <g>
    {items.map((item, i) => {
      const variant = typeof item === "string" ? item : item.variant;
      const label   = typeof item === "string" ? capitalize(item) : item.label;
      const ly = y + i * 20;
      return (
        <g key={`${variant}-${i}`}>
          <rect
            x={x}
            y={ly}
            width={14}
            height={14}
            rx={3}
            className={`diagNode diagNode--${variant}`}
          />
          <text x={x + 22} y={ly + 11} className="diagInfo">
            {label}
          </text>
        </g>
      );
    })}
  </g>
);

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
