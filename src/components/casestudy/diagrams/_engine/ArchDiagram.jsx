import { useLanguage } from "../../../../context/LanguageContext";
import { computeLayout } from "./layout";
import { Defs } from "./defs";
import { Chrome, Lane, Group, Node, Edge, Sidecar, Legend } from "./primitives";
import SPECS from "../specs";

/**
 * Universal architecture diagram renderer.
 *
 * Consumes a declarative spec (data only — no JSX, no coordinates) and produces
 * a fully laid-out, themed, internationalized SVG.
 *
 * Pass either `id` (loads from specs/) or `spec` (inline).
 *
 * @param {{ id?: string, spec?: object }} props
 */
const ArchDiagram = ({ id, spec: specProp }) => {
  const { t } = useLanguage();
  const spec = specProp || SPECS[id];
  if (!spec) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[ArchDiagram] unknown spec id: ${id}`);
    }
    return null;
  }

  const ns = resolveNamespace(t, spec.i18nNamespace);
  const tr    = (val) => translate(val, ns);
  const trKey = (key) => (key ? getDeep(ns, key) ?? key : null);

  const layout = computeLayout(spec);

  const title = tr(spec.title) ?? trKey(spec.titleKey);
  const headerH = title ? 40 : 0;
  const totalH = spec.size.h + headerH;
  const gridId = `diag-grid-${(id || "spec").replace(/[^a-zA-Z0-9]/g, "-")}`;

  return (
    <svg
      viewBox={`0 0 ${spec.size.w} ${totalH}`}
      xmlns="http://www.w3.org/2000/svg"
      className="archDiagram"
      aria-label={tr(spec.ariaLabel) || "Architecture diagram"}
    >
      <Defs />
      {spec.chrome !== false && (
        <Chrome
          w={spec.size.w}
          h={totalH}
          accent={spec.accent}
          title={title}
          headerH={headerH}
          gridId={gridId}
        />
      )}

      <g transform={`translate(0, ${headerH})`}>
      {spec.groups?.map((g) => (
        <Group
          key={g.id}
          rect={layout.groups[g.id]}
          label={tr(g.label) ?? trKey(g.labelKey)}
          variant={g.variant}
          labelAlign={g.labelAlign}
        />
      ))}

      {spec.lanes?.map((lane, i) => {
        const ll = layout.lanes[lane.id] || {};
        return (
          <Lane
            key={lane.id}
            id={lane.id}
            labelY={ll.labelY}
            label={tr(lane.label) ?? trKey(lane.labelKey)}
            divider={lane.divider ?? i > 0}
            dividerY={ll.dividerY}
            spec={spec}
          />
        );
      })}

      {spec.edges?.map((edge, i) => (
        <Edge
          key={`${edge.from}-${edge.to}-${i}`}
          from={layout.nodes[edge.from]}
          to={layout.nodes[edge.to]}
          step={edge.step}
          style={edge.style}
          port={edge.port}
          label={tr(edge.label) ?? trKey(edge.labelKey)}
          labelOffset={edge.labelOffset}
          accent={spec.accent}
        />
      ))}

      {spec.nodes?.map((node) => (
        <Node
          key={node.id}
          rect={layout.nodes[node.id]}
          variant={node.variant}
          label={tr(node.label) ?? trKey(node.labelKey)}
          sub={resolveSub(node, tr, trKey)}
          dashed={node.dashed}
          ghost={node.ghost}
          muted={node.muted}
        />
      ))}

      {spec.sidecars?.map((s, i) => (
        <Sidecar
          key={i}
          rect={layout.sidecars[i]}
          label={tr(s.label) ?? trKey(s.labelKey)}
          sub={tr(s.sub) ?? trKey(s.subKey)}
          accent={spec.accent}
        />
      ))}

      {spec.legend && (
        <Legend
          items={spec.legend.items.map((item) =>
            typeof item === "string"
              ? { variant: item, label: trKey(`legend.${item}`) ?? capitalize(item) }
              : { variant: item.variant, label: tr(item.label) ?? trKey(item.labelKey) ?? capitalize(item.variant) },
          )}
          x={spec.legend.x ?? spec.size.w - 110}
          y={spec.legend.y ?? 30}
        />
      )}

      {spec.annotations?.map((a, i) => {
        const pos = resolveAnnotationPos(a, layout);
        if (!pos) return null;
        return (
          <text
            key={i}
            x={pos.x}
            y={pos.y}
            textAnchor={a.textAnchor || "middle"}
            className={a.className || "diagSub"}
            style={a.style}
          >
            {tr(a.text) ?? trKey(a.textKey)}
          </text>
        );
      })}
      </g>
    </svg>
  );
};

/* ──────────────────────────────────────────────────────────────────────────── */
/* i18n helpers                                                                  */

function resolveNamespace(t, namespace) {
  if (!namespace) return {};
  const root = t?.caseStudy?.diagrams;
  if (!root) return {};
  return getDeep(root, namespace) ?? {};
}

function translate(val, ns) {
  if (val == null) return null;
  if (typeof val === "string") return val;
  if (val && typeof val === "object") {
    if ("key" in val) {
      const resolved = getDeep(ns, val.key);
      return resolved ?? val.fallback ?? val.key;
    }
    if ("text" in val) return val.text;
  }
  return null;
}

function resolveAnnotationPos(a, layout) {
  if (a.relativeTo) {
    const node = layout.nodes[a.relativeTo];
    if (!node) return null;
    const dx = a.dx ?? 0;
    const dy = a.dy ?? 0;
    switch (a.anchor) {
      case "below":  return { x: node.cx + dx, y: node.y + node.h + (dy || 16) };
      case "above":  return { x: node.cx + dx, y: node.y - (dy || 8) };
      case "left":   return { x: node.x - (dx || 8), y: node.cy + dy };
      case "right":  return { x: node.x + node.w + (dx || 8), y: node.cy + dy };
      default:       return { x: node.cx + dx, y: node.cy + dy };
    }
  }
  if (typeof a.x === "number" && typeof a.y === "number") return { x: a.x, y: a.y };
  return null;
}

function resolveSub(node, tr, trKey) {
  if (Array.isArray(node.sub)) return node.sub.map((item) => tr(item)).filter(Boolean);
  if (node.sub != null) return tr(node.sub);
  if (node.subKey != null) return trKey(node.subKey);
  return null;
}

function getDeep(obj, key) {
  if (!obj || !key) return undefined;
  return key.split(".").reduce((acc, k) => (acc == null ? undefined : acc[k]), obj);
}

function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

export default ArchDiagram;
