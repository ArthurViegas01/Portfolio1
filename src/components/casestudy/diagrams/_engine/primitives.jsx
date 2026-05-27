import { EDGE_STYLES, NODE_RADIUS } from "./tokens";
import { resolveEdgePorts } from "./layout";

/* ──────────────────────────────────────────────────────────────────────────── */
/* Background + Container                                                        */

export const Chrome = ({ w, h }) => (
  <>
    <rect x={0} y={0} width={w} height={h} rx={12} fill="var(--diag-bg)" />
    <rect x={10} y={10} width={w - 20} height={h - 20} rx={10} fill="var(--diag-inner)" opacity={0.6} />
  </>
);

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
        stroke="var(--text-color)"
        strokeWidth={0.5}
        strokeDasharray="6,4"
        opacity={0.3}
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
  const stroke = variant === "frame" ? "var(--diag-accent)" : `var(--diag-${variant})`;
  const fillOpacity = variant === "frame" ? 0.04 : 0.12;
  const labelX = labelAlign === "left" ? rect.x + 12 : rect.cx;
  const anchor = labelAlign === "left" ? "start" : "middle";

  return (
    <g>
      <rect
        x={rect.x}
        y={rect.y}
        width={rect.w}
        height={rect.h}
        rx={10}
        fill={stroke}
        fillOpacity={fillOpacity}
        stroke={stroke}
        strokeWidth={1.2}
        strokeDasharray="5,3"
      />
      {label && (
        <text
          x={labelX}
          y={rect.y + 16}
          textAnchor={anchor}
          className="diagLane"
          style={{ fill: stroke, opacity: 0.95, fontWeight: 600 }}
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
          fill: "var(--diag-ghost)",
          stroke: "var(--diag-ghost-border)",
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

export const StepBadge = ({ x, y, num }) => (
  <g>
    <circle cx={x} cy={y} r={9} fill="var(--diag-accent)" />
    <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">
      {num}
    </text>
  </g>
);

/* ──────────────────────────────────────────────────────────────────────────── */
/* Edge — connecting line with optional step + label                             */

export const Edge = ({ from, to, step, style = "default", port = "auto", label, labelOffset = -8 }) => {
  const ports = resolveEdgePorts(from, to, port);
  if (!ports) return null;

  const def = EDGE_STYLES[style] || EDGE_STYLES.default;
  const midX = (ports.x1 + ports.x2) / 2;
  const midY = (ports.y1 + ports.y2) / 2;

  return (
    <g>
      <line
        x1={ports.x1}
        y1={ports.y1}
        x2={ports.x2}
        y2={ports.y2}
        stroke={`var(--diag-${def.colorKey})`}
        strokeWidth={def.width}
        strokeDasharray={def.dashed ? "5,3" : undefined}
        markerEnd={`url(#diag-arrow-${def.colorKey})`}
      />
      {label && (
        <text
          x={midX}
          y={midY + labelOffset}
          textAnchor="middle"
          className="diagSub"
          style={{ fill: `var(--diag-${def.colorKey})`, opacity: 0.9 }}
        >
          {label}
        </text>
      )}
      {step != null && <StepBadge x={midX} y={midY} num={step} />}
    </g>
  );
};

/* ──────────────────────────────────────────────────────────────────────────── */
/* Sidecar — small box outside the main flow (ECR, IAM, Mailgun, ...)            */

export const Sidecar = ({ rect, label, sub }) => (
  <g>
    <rect
      x={rect.x}
      y={rect.y}
      width={rect.w}
      height={rect.h}
      rx={6}
      fill="var(--diag-ghost)"
      stroke="var(--diag-accent)"
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
