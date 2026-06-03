/**
 * Design tokens for architecture diagrams.
 *
 * Every visual decision (colors, sizes, edge styles) flows from this file.
 * To restyle every diagram in the portfolio, edit here — not the specs.
 *
 * @typedef {"blue"|"accent"|"red"|"green"|"purple"|"orange"|"ghost"|"frame"} NodeVariant
 * @typedef {"default"|"success"|"warning"|"muted"|"branch"} EdgeStyle
 * @typedef {"default"|"wide"|"xwide"|"tall"|"sm"|"xl"|{w:number,h:number}} NodeSize
 */

export const PALETTE_KEYS = ["accent", "blue", "red", "green", "purple", "orange", "muted"];

export const SIZE_PRESETS = {
  default: { w: 120, h: 52 },
  wide:    { w: 150, h: 52 },
  xwide:   { w: 170, h: 52 },
  tall:    { w: 130, h: 68 },
  sm:      { w: 90,  h: 42 },
  xl:      { w: 200, h: 60 },
};

export const EDGE_STYLES = {
  default: { colorKey: "accent", width: 1.8, dashed: false },
  success: { colorKey: "green",  width: 1.6, dashed: false },
  warning: { colorKey: "orange", width: 1.6, dashed: false },
  muted:   { colorKey: "muted",  width: 1.4, dashed: true  },
  branch:  { colorKey: "accent", width: 1.5, dashed: false },
};

export const LAYOUT = {
  paddingX:   30,
  paddingY:   20,
  laneGap:    20,
  colGap:     14,
  rowGap:     10,
  sidecarH:   42,
  sidecarGap: 14,
  sidecarPaddingBottom: 16,
  legendItemH: 18,
  legendW:    100,
  legendPaddingRight: 24,
};

export const NODE_RADIUS = 8;
export const ARROW_HEAD  = { w: 8, h: 8, refX: 6, refY: 3 };

export function resolveSize(size) {
  if (size && typeof size === "object" && "w" in size) return size;
  return SIZE_PRESETS[size] || SIZE_PRESETS.default;
}
