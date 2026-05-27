/**
 * Encaixe (WhatsApp AI agent) — LangGraph pipeline with branching decisions.
 *
 * 5-column grid keeps confidence (col 4) aligned with respond (col 4) so the
 * default branch edge is a clean vertical drop instead of a long diagonal.
 */
const encaixe = {
  i18nNamespace: "encaixe",
  ariaLabel: { key: "ariaLabel", fallback: "Encaixe LangGraph Architecture" },
  size: { w: 920, h: 540 },

  lanes: [
    { id: "ingest",    y: 50,  labelKey: "lanes.ingest",  divider: false },
    { id: "process",   y: 160, labelKey: "lanes.process", divider: false },
    { id: "decisions", y: 296, divider: false },
  ],

  nodes: [
    { id: "whatsapp",      lane: "ingest", col: 0, variant: "green",
      label: "WhatsApp", subKey: "nodes.whatsappSub", size: { w: 110, h: 52 } },
    { id: "evolution",     lane: "ingest", col: 1, variant: "blue",
      labelKey: "nodes.evolution", subKey: "nodes.wsSub", size: { w: 140, h: 52 } },
    { id: "fastapi",       lane: "ingest", col: 2, variant: "accent",
      labelKey: "nodes.fastapi", subKey: "nodes.ackSub", size: { w: 150, h: 52 } },
    { id: "webhookEvents", lane: "ingest", col: 3, variant: "purple",
      labelKey: "nodes.webhookEvents", subKey: "nodes.dedupe", size: { w: 160, h: 52 } },
    { id: "redis",         lane: "ingest", col: 4, variant: "red",
      label: "Redis", sub: "broker", size: { w: 90, h: 52 } },

    { id: "classify",   lane: "process", col: 1, variant: "accent",
      labelKey: "nodes.classify", subKey: "nodes.haiku", size: { w: 140, h: 52 } },
    { id: "retrieve",   lane: "process", col: 2, variant: "purple",
      labelKey: "nodes.retrieve", subKey: "nodes.voyage", size: { w: 150, h: 52 } },
    { id: "generate",   lane: "process", col: 3, variant: "accent",
      labelKey: "nodes.generate", subKey: "nodes.haiku", size: { w: 160, h: 52 } },
    { id: "confidence", lane: "process", col: 4, variant: "red",
      labelKey: "nodes.confidence", subKey: "nodes.confSub", size: { w: 150, h: 52 } },

    { id: "schedule", lane: "decisions", col: 2, variant: "green",
      labelKey: "nodes.schedule", subKey: "nodes.calendar", size: { w: 170, h: 60 } },
    { id: "handoff",  lane: "decisions", col: 3, variant: "orange",
      labelKey: "nodes.handoff", subKey: "nodes.resend", size: { w: 170, h: 60 } },
    { id: "respond",  lane: "decisions", col: 4, variant: "blue",
      labelKey: "nodes.respond", subKey: "nodes.sendWa", size: { w: 170, h: 60 } },

    { id: "provider", x: 600, y: 416, ghost: true, dashed: true,
      labelKey: "nodes.provider", sub: "Evolution · WPP · Meta Cloud · Stub",
      size: { w: 240, h: 52 } },
  ],

  edges: [
    { from: "whatsapp",      to: "evolution",     step: 1 },
    { from: "evolution",     to: "fastapi",       step: 2 },
    { from: "fastapi",       to: "webhookEvents", step: 3 },
    { from: "webhookEvents", to: "redis",         step: 4 },

    { from: "redis", to: "classify", style: "warning", label: "delay()", labelOffset: -6 },

    { from: "classify", to: "retrieve",   step: 5 },
    { from: "retrieve", to: "generate",   step: 6 },
    { from: "generate", to: "confidence", step: 7 },

    { from: "confidence", to: "schedule", style: "success" },
    { from: "confidence", to: "handoff",  style: "warning" },
    { from: "confidence", to: "respond",  port: "bottom-top" },

    { from: "respond", to: "provider", port: "bottom-top" },
  ],

  annotations: [
    { relativeTo: "schedule", anchor: "above", dy: 4, textKey: "labels.branchSchedule",
      style: { fill: "var(--diag-green)",  fontSize: 9 } },
    { relativeTo: "handoff",  anchor: "above", dy: 4, textKey: "labels.branchHandoff",
      style: { fill: "var(--diag-orange)", fontSize: 9 } },
    { relativeTo: "respond",  anchor: "above", dy: 4, textKey: "labels.branchRespond",
      style: { fill: "var(--diag-accent)", fontSize: 9 } },
  ],

  sidecars: [
    { labelKey: "sidecars.rls.title",         subKey: "sidecars.rls.sub" },
    { labelKey: "sidecars.idempotency.title", subKey: "sidecars.idempotency.sub" },
    { labelKey: "sidecars.token.title",       subKey: "sidecars.token.sub" },
    { labelKey: "sidecars.logging.title",     subKey: "sidecars.logging.sub" },
  ],
  sidecarSize: { w: 200, h: 48 },
  sidecarY: 482,
};

export default encaixe;
