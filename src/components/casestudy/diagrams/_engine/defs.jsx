import { PALETTE_KEYS, ARROW_HEAD } from "./tokens";

/**
 * Shared SVG <defs> for every diagram.
 *
 * One marker per palette color, referenced as `url(#diag-arrow-{key})`.
 * Defined inside each diagram's own <svg> root so markers stay scoped.
 */
export const Defs = () => (
  <defs>
    {PALETTE_KEYS.map((key) => (
      <marker
        key={key}
        id={`diag-arrow-${key}`}
        markerWidth={ARROW_HEAD.w}
        markerHeight={ARROW_HEAD.h}
        refX={ARROW_HEAD.refX}
        refY={ARROW_HEAD.refY}
        orient="auto"
      >
        <path d="M0,0 L0,6 L8,3 z" fill={`var(--diag-${key})`} />
      </marker>
    ))}
  </defs>
);
