/**
 * Dataglass CI/CD pipelines.
 *
 * Three lanes stacked vertically: base image (muted, manual), dev, prod.
 * Each runs through GitHub → CodeBuild → ECR → Elastic Beanstalk.
 */
const dataglassCICD = {
  i18nNamespace: "dataglassCICD",
  ariaLabel: { key: "ariaLabel", fallback: "Dataglass CI/CD Pipeline" },
  accent: "orange",
  title: "CI/CD · ECR + EB",
  size: { w: 820, h: 460 },

  lanes: [
    { id: "base", y: 36,  labelKey: "lanes.base", divider: false },
    { id: "dev",  y: 124, labelKey: "lanes.dev",  divider: false },
    { id: "prod", y: 220, labelKey: "lanes.prod", divider: false },
  ],

  nodes: [
    { id: "ghB",  lane: "base", col: 0, variant: "blue",   muted: true,
      label: "GitHub",    sub: "Webhook",        size: { w: 90,  h: 46 } },
    { id: "cbB",  lane: "base", col: 1, variant: "green",  muted: true,
      label: "CodeBuild", sub: "buildspec.yml",  size: { w: 110, h: 46 } },
    { id: "ecrB", lane: "base", col: 2, variant: "orange", muted: true,
      label: "ECR",       sub: "python-base",    size: { w: 130, h: 46 } },

    { id: "ghD",  lane: "dev", col: 0, variant: "blue",
      label: "GitHub",          subKey: "branches.dev", size: { w: 90,  h: 46 } },
    { id: "cbD",  lane: "dev", col: 1, variant: "green",
      label: "CodeBuild",        subKey: "build.push",   size: { w: 110, h: 46 } },
    { id: "ecrD", lane: "dev", col: 2, variant: "orange",
      label: "ECR",              sub: "dataglass/dev",   size: { w: 110, h: 46 } },
    { id: "ebD",  lane: "dev", col: 3, variant: "accent",
      label: "Elastic Beanstalk", subKey: "envs.dev",    size: { w: 134, h: 46 } },

    { id: "ghP",  lane: "prod", col: 0, variant: "blue",
      label: "GitHub",           subKey: "branches.main", size: { w: 90,  h: 46 } },
    { id: "cbP",  lane: "prod", col: 1, variant: "green",
      label: "CodeBuild",        subKey: "build.push",    size: { w: 110, h: 46 } },
    { id: "ecrP", lane: "prod", col: 2, variant: "orange",
      label: "ECR",              sub: "dataglass/app",    size: { w: 110, h: 46 } },
    { id: "ebP",  lane: "prod", col: 3, variant: "accent",
      label: "Elastic Beanstalk", subKey: "envs.prod",    size: { w: 134, h: 46 } },
  ],

  edges: [
    { from: "ghB",  to: "cbB",  style: "muted" },
    { from: "cbB",  to: "ecrB", style: "muted" },

    { from: "ghD",  to: "cbD" },
    { from: "cbD",  to: "ecrD" },
    { from: "ecrD", to: "ebD" },

    { from: "ghP",  to: "cbP" },
    { from: "cbP",  to: "ecrP" },
    { from: "ecrP", to: "ebP" },
  ],

  sidecars: [
    { label: "ECR python-base", subKey: "sidecars.ecrPython" },
    { label: "Secrets Manager", subKey: "sidecars.secrets" },
    { label: "CodeArtifact",    subKey: "sidecars.codeArtifact" },
    { label: "Certificate Mgr", sub:    "SSL / TLS" },
  ],
  sidecarSize: { w: 130, h: 42 },
  sidecarY: 324,

  annotations: [
    { x: 30, y: 312, textAnchor: "start", textKey: "labels.buildInputs", className: "diagLane" },

    { x: 110, y: 402, textAnchor: "middle", text: "~3 min",
      style: { fill: "var(--diag-accent)", fontSize: 16, fontWeight: "bold" } },
    { x: 110, y: 420, textAnchor: "middle", text: "CodeBuild", className: "diagSub" },

    { x: 310, y: 402, textAnchor: "middle", text: "~7 min",
      style: { fill: "var(--diag-accent)", fontSize: 16, fontWeight: "bold" } },
    { x: 310, y: 420, textAnchor: "middle", textKey: "metrics.deployTotal", className: "diagSub" },

    { x: 510, y: 402, textAnchor: "middle", text: "2 envs",
      style: { fill: "var(--diag-accent)", fontSize: 16, fontWeight: "bold" } },
    { x: 510, y: 420, textAnchor: "middle", textKey: "metrics.envs", className: "diagSub" },

    { x: 710, y: 402, textAnchor: "middle", textKey: "metrics.zeroDowntime",
      style: { fill: "var(--diag-accent)", fontSize: 14, fontWeight: "bold" } },
    { x: 710, y: 420, textAnchor: "middle", textKey: "metrics.rollingUpdate", className: "diagSub" },
  ],
};

export default dataglassCICD;
