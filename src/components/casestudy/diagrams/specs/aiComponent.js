/**
 * Synth — AI component generator (Next.js + Groq + Babel + iframe sandbox).
 *
 * Three layers: user (Monaco/Zustand), server (API + Groq), client runtime
 * (streaming → validation → Babel → iframe → live preview).
 */
const aiComponent = {
  i18nNamespace: "aiComponent",
  ariaLabel: { key: "ariaLabel", fallback: "AI Component Architecture" },
  size: { w: 860, h: 480 },

  groups: [
    { id: "user",    x: 14,  y: 14,  w: 168, h: 200, labelKey: "groups.user",    variant: "blue",   labelAlign: "left" },
    { id: "server",  x: 240, y: 14,  w: 208, h: 200, labelKey: "groups.server",  variant: "green",  labelAlign: "center" },
    { id: "runtime", x: 468, y: 14,  w: 380, h: 452, labelKey: "groups.runtime", variant: "orange", labelAlign: "left" },
  ],

  nodes: [
    { id: "monaco", x: 30, y: 56, variant: "blue",
      labelKey: "nodes.monaco", subKey: "nodes.monacoSub",
      size: { w: 140, h: 70 } },
    { id: "zustand", x: 30, y: 140, variant: "blue",
      labelKey: "nodes.zustand", subKey: "nodes.zustandSub",
      size: { w: 140, h: 58 } },

    { id: "apiRoute", x: 256, y: 56, variant: "green",
      labelKey: "nodes.apiRoute", subKey: "nodes.apiRouteSub",
      size: { w: 176, h: 60 } },
    { id: "groq", x: 256, y: 132, variant: "green",
      labelKey: "nodes.groq", subKey: "nodes.groqSub",
      size: { w: 176, h: 60 } },

    { id: "stream", x: 484, y: 38, variant: "orange",
      labelKey: "nodes.stream", subKey: "nodes.streamSub",
      size: { w: 156, h: 58 } },
    { id: "decoder", x: 484, y: 118, variant: "orange",
      labelKey: "nodes.decoder", subKey: "nodes.decoderSub",
      size: { w: 156, h: 54 } },
    { id: "validation", x: 484, y: 198, variant: "red",
      labelKey: "nodes.validation", subKey: "nodes.validationSub",
      size: { w: 156, h: 54 } },
    { id: "babel", x: 484, y: 282, variant: "purple",
      labelKey: "nodes.babel", subKey: "nodes.babelSub",
      size: { w: 156, h: 58 } },
    { id: "framer", x: 484, y: 372, ghost: true, dashed: true,
      labelKey: "nodes.framer", subKey: "nodes.framerSub",
      size: { w: 156, h: 50 } },

    { id: "iframe", x: 662, y: 270, variant: "green",
      labelKey: "nodes.iframe", subKey: "nodes.iframeSub",
      size: { w: 172, h: 80 } },
    { id: "output", x: 662, y: 374, variant: "green",
      labelKey: "nodes.output", subKey: "nodes.outputSub",
      size: { w: 172, h: 68 } },
  ],

  edges: [
    { from: "monaco",     to: "apiRoute",   port: "right-left", label: { key: "edges.step2" }, labelOffset: -10 },
    { from: "apiRoute",   to: "groq",       style: "success", port: "bottom-top" },
    { from: "groq",       to: "stream",     style: "warning", port: "right-left", label: { key: "edges.step3" }, labelOffset: -10 },
    { from: "stream",     to: "decoder",    style: "warning", port: "bottom-top" },
    { from: "decoder",    to: "validation", style: "warning", port: "bottom-top" },
    { from: "validation", to: "babel",      port: "bottom-top", label: { key: "edges.step6" }, labelOffset: -8 },
    { from: "babel",      to: "iframe",     port: "right-left", label: { key: "edges.step7" }, labelOffset: -10 },
    { from: "iframe",     to: "output",     style: "success", port: "bottom-top" },
  ],

  annotations: [
    { relativeTo: "zustand", anchor: "below", dy: 14, textKey: "labels.stateSync",
      style: { fontSize: 8, fill: "var(--diag-accent)", opacity: 0.7 } },
  ],
};

export default aiComponent;
