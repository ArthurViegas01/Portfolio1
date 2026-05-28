import { LAYOUT, resolveSize } from "./tokens";

/**
 * Layout engine for declarative architecture diagrams.
 *
 * Input: a spec describing lanes, nodes (with lane + col + row), edges, sidecars.
 * Output: absolute rectangles for every visual element.
 *
 * Two key behaviors:
 * 1. Columns are aligned across lanes by default — col=2 in lane "web" shares
 *    its x with col=2 in lane "async", which lets crossing edges flow vertically.
 * 2. Edge endpoints are resolved automatically: the engine picks the side of
 *    each rect closest to the other endpoint, so specs never set coordinates.
 *
 * @typedef {{x:number,y:number,w:number,h:number,cx:number,cy:number}} Rect
 */

/**
 * @param {object} spec
 * @returns {{ nodes: Record<string, Rect>, sidecars: Rect[], groups: Record<string, Rect>, lanes: Record<string, {y:number,labelY:number}> }}
 */
export function computeLayout(spec) {
  const out = { nodes: {}, sidecars: [], groups: {}, lanes: {} };

  const alignColumns = spec.alignColumns !== false;
  const innerWidth   = spec.size.w - LAYOUT.paddingX * 2;

  if (alignColumns) {
    layoutAligned(spec, out, innerWidth);
  } else {
    layoutPerLane(spec, out);
  }

  layoutAbsoluteNodes(spec, out);
  layoutGroups(spec, out);
  layoutSidecars(spec, out);
  layoutLaneLabels(spec, out);

  return out;
}

/* ──────────────────────────────────────────────────────────────────────────── */

function layoutAligned(spec, out, innerWidth) {
  const allCols = collectColumns(spec.nodes);
  const colWidths = allCols.map((col) =>
    Math.max(
      ...spec.nodes
        .filter((n) => n.lane && (n.col ?? 0) === col)
        .map((n) => resolveSize(n.size).w),
      0,
    ),
  );

  const totalCols = colWidths.reduce((a, b) => a + b, 0);
  const totalGap  = (allCols.length - 1) * LAYOUT.colGap;
  const startX    = totalCols + totalGap < innerWidth
    ? LAYOUT.paddingX + (innerWidth - totalCols - totalGap) / 2
    : LAYOUT.paddingX;

  const colX = {};
  let x = startX;
  allCols.forEach((col, i) => {
    colX[col] = x;
    x += colWidths[i] + LAYOUT.colGap;
  });

  for (const lane of spec.lanes || []) {
    const laneNodes = spec.nodes.filter((n) => n.lane === lane.id);
    placeLaneNodes(laneNodes, lane, colX, colWidths, allCols, out);
  }
}

function layoutPerLane(spec, out) {
  const innerWidth = spec.size.w - LAYOUT.paddingX * 2;
  for (const lane of spec.lanes || []) {
    const laneNodes = spec.nodes.filter((n) => n.lane === lane.id);
    if (laneNodes.length === 0) continue;
    const cols = uniqSorted(laneNodes.map((n) => n.col ?? 0));
    const colWidths = cols.map((col) =>
      Math.max(...laneNodes.filter((n) => (n.col ?? 0) === col).map((n) => resolveSize(n.size).w)),
    );

    const totalW = colWidths.reduce((a, b) => a + b, 0);
    const totalGap = (cols.length - 1) * LAYOUT.colGap;
    const startX = totalW + totalGap < innerWidth
      ? LAYOUT.paddingX + (innerWidth - totalW - totalGap) / 2
      : LAYOUT.paddingX;

    const colX = {};
    let x = startX;
    cols.forEach((col, i) => {
      colX[col] = x;
      x += colWidths[i] + LAYOUT.colGap;
    });

    placeLaneNodes(laneNodes, lane, colX, colWidths, cols, out);
  }
}

function placeLaneNodes(laneNodes, lane, colX, colWidths, cols, out) {
  const byColRow = {};
  for (const n of laneNodes) {
    const col = n.col ?? 0;
    const row = n.row ?? 0;
    if (!byColRow[col]) byColRow[col] = [];
    byColRow[col][row] = n;
  }

  const colHeights = cols.map((col) => {
    const rows = byColRow[col] || [];
    let height = 0;
    let count  = 0;
    rows.forEach((node) => {
      if (!node) return;
      height += resolveSize(node.size).h;
      count++;
    });
    if (count > 1) height += (count - 1) * LAYOUT.rowGap;
    return height;
  });
  const laneHeight = Math.max(...colHeights, 0);
  out.lanes[lane.id] = { ...(out.lanes[lane.id] || {}), height: laneHeight };

  for (const col of cols) {
    const rowNodes = byColRow[col] || [];
    const colIdx = cols.indexOf(col);
    const colHeight = colHeights[colIdx];
    const startY = lane.y + (laneHeight - colHeight) / 2;
    let y = startY;
    for (const node of rowNodes) {
      if (!node) {
        y += resolveSize("default").h + LAYOUT.rowGap;
        continue;
      }
      const { w, h } = resolveSize(node.size);
      const colW = colWidths[colIdx];
      const nodeX = colX[col] + (colW - w) / 2;
      out.nodes[node.id] = rectOf(nodeX, y, w, h);
      y += h + LAYOUT.rowGap;
    }
  }
}

function layoutAbsoluteNodes(spec, out) {
  for (const node of spec.nodes) {
    if (node.lane) continue;
    if (typeof node.x !== "number" || typeof node.y !== "number") continue;
    const { w, h } = resolveSize(node.size);
    out.nodes[node.id] = rectOf(node.x, node.y, w, h);
  }
}

function layoutGroups(spec, out) {
  if (!spec.groups) return;
  for (const g of spec.groups) {
    if (typeof g.x === "number" && typeof g.y === "number") {
      out.groups[g.id] = rectOf(g.x, g.y, g.w, g.h);
      continue;
    }
    const members = (g.contains || [])
      .map((nodeId) => out.nodes[nodeId])
      .filter(Boolean);
    if (members.length === 0) continue;
    const pad = g.padding ?? 16;
    const labelPad = g.label || g.labelKey ? 20 : 0;
    const x = Math.min(...members.map((m) => m.x)) - pad;
    const y = Math.min(...members.map((m) => m.y)) - pad - labelPad;
    const right  = Math.max(...members.map((m) => m.x + m.w)) + pad;
    const bottom = Math.max(...members.map((m) => m.y + m.h)) + pad;
    out.groups[g.id] = rectOf(x, y, right - x, bottom - y);
  }
}

function layoutSidecars(spec, out) {
  if (!spec.sidecars || spec.sidecars.length === 0) return;
  const w = spec.sidecarSize?.w ?? 110;
  const h = spec.sidecarSize?.h ?? LAYOUT.sidecarH;
  const gap = LAYOUT.sidecarGap;
  const total = spec.sidecars.length * w + (spec.sidecars.length - 1) * gap;
  const startX = (spec.size.w - total) / 2;
  const y = spec.sidecarY ?? (spec.size.h - h - LAYOUT.sidecarPaddingBottom);

  for (let i = 0; i < spec.sidecars.length; i++) {
    out.sidecars.push(rectOf(startX + i * (w + gap), y, w, h));
  }
}

function layoutLaneLabels(spec, out) {
  if (!spec.lanes) return;
  for (const lane of spec.lanes) {
    const existing = out.lanes[lane.id] || {};
    out.lanes[lane.id] = {
      ...existing,
      y: lane.y,
      labelY: lane.labelY ?? lane.y - 12,
      dividerY: lane.dividerY ?? lane.y - 18,
    };
  }
}

/* ──────────────────────────────────────────────────────────────────────────── */

function collectColumns(nodes) {
  return uniqSorted(nodes.filter((n) => n.lane).map((n) => n.col ?? 0));
}

function uniqSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

function rectOf(x, y, w, h) {
  return { x, y, w, h, cx: x + w / 2, cy: y + h / 2 };
}

/* ──────────────────────────────────────────────────────────────────────────── */
/* Edge port resolution                                                          */

/**
 * Resolve start/end points for an edge connecting two rects.
 * Spec can override with `port: "right-left" | "bottom-top" | ...`.
 * Default ("auto") picks the rect side closest to the other endpoint.
 *
 * @returns {{x1:number,y1:number,x2:number,y2:number}}
 */
export function resolveEdgePorts(from, to, port = "auto") {
  if (!from || !to) return null;

  if (port === "auto") {
    return {
      x1: 0, y1: 0, x2: 0, y2: 0,
      ...sideToSide(from, to),
    };
  }

  const [a, b] = port.split("-");
  const start = sidePoint(from, a, to);
  const end   = sidePoint(to,   b, from);
  return { x1: start.x, y1: start.y, x2: end.x, y2: end.y };
}

function sideToSide(from, to) {
  const dx = to.cx - from.cx;
  const dy = to.cy - from.cy;
  const horiz = Math.abs(dx) * from.h >= Math.abs(dy) * from.w;

  let x1, y1, x2, y2;
  if (horiz) {
    if (dx >= 0) { x1 = from.x + from.w; x2 = to.x; }
    else         { x1 = from.x;          x2 = to.x + to.w; }
    const t = clamp((dx === 0 ? 0.5 : 0.5), 0.2, 0.8);
    y1 = from.y + from.h * t;
    y2 = to.y   + to.h   * t;
  } else {
    if (dy >= 0) { y1 = from.y + from.h; y2 = to.y; }
    else         { y1 = from.y;          y2 = to.y + to.h; }
    x1 = from.cx;
    x2 = to.cx;
  }
  return { x1, y1, x2, y2 };
}

function sidePoint(rect, side, target) {
  switch (side) {
    case "right":  return { x: rect.x + rect.w, y: rect.cy };
    case "left":   return { x: rect.x,          y: rect.cy };
    case "top":    return { x: rect.cx,         y: rect.y };
    case "bottom": return { x: rect.cx,         y: rect.y + rect.h };
    case "topRight":    return { x: rect.x + rect.w * 0.75, y: rect.y };
    case "topLeft":     return { x: rect.x + rect.w * 0.25, y: rect.y };
    case "bottomRight": return { x: rect.x + rect.w * 0.75, y: rect.y + rect.h };
    case "bottomLeft":  return { x: rect.x + rect.w * 0.25, y: rect.y + rect.h };
    default: {
      const auto = sideToSide(rect, target);
      return { x: auto.x1, y: auto.y1 };
    }
  }
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}
