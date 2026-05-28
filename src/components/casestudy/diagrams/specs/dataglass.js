/**
 * Dataglass SaaS on AWS: web + async lanes with shared multi-tenant Django app.
 */
const dataglass = {
  i18nNamespace: "dataglass",
  ariaLabel: { key: "ariaLabel", fallback: "Dataglass AWS Architecture" },
  accent: "orange",
  title: "AWS · Multi-Tenant",
  size: { w: 820, h: 410 },

  lanes: [
    { id: "web",   y: 50,  labelKey: "lanes.web",   divider: false },
    { id: "async", y: 228, labelKey: "lanes.async", divider: true, dividerY: 210 },
  ],

  nodes: [
    { id: "browser", lane: "web", col: 0, variant: "blue",
      labelKey: "nodes.browser", sub: "HTTPS",
      size: { w: 100, h: 52 } },
    { id: "alb", lane: "web", col: 1, variant: "orange",
      labelKey: "nodes.alb", subKey: "nodes.albSub",
      size: { w: 100, h: 52 } },
    { id: "django", lane: "web", col: 2, variant: "accent",
      labelKey: "nodes.django",
      sub: ["Elastic Beanstalk", { key: "nodes.multiTenant" }],
      size: { w: 140, h: 68 } },
    { id: "rds", lane: "web", col: 3, variant: "purple",
      labelKey: "nodes.rds", subKey: "nodes.rdsSub",
      size: { w: 120, h: 52 } },
    { id: "s3", lane: "web", col: 3, row: 1, variant: "green",
      labelKey: "nodes.s3", sub: "Signed URLs",
      size: { w: 120, h: 46 } },

    { id: "redis", lane: "async", col: 1, variant: "red",
      labelKey: "nodes.redis", subKey: "nodes.redisSub",
      size: { w: 120, h: 52 } },
    { id: "celery", lane: "async", col: 2, variant: "green",
      labelKey: "nodes.celery", sub: "Docker Pool",
      size: { w: 130, h: 52 } },
    { id: "tableau", lane: "async", col: 3, variant: "orange",
      labelKey: "nodes.tableau", sub: "REST API / Sync",
      size: { w: 140, h: 52 } },
  ],

  edges: [
    { from: "browser", to: "alb",     step: 1 },
    { from: "alb",     to: "django",  step: 2 },
    { from: "django",  to: "rds",     step: 3 },
    { from: "django",  to: "s3",      step: 4 },
    { from: "django",  to: "redis",   step: 5 },
    { from: "redis",   to: "celery",  step: 6 },
    { from: "celery",  to: "tableau", step: 7 },
  ],

  sidecars: [
    { label: "Mailgun", sub: "DKIM/SPF" },
    { label: "Bugsnag", sub: "APM" },
    { label: "ECR",     subKey: "sidecars.ecr" },
    { label: "IAM",     subKey: "sidecars.iam" },
  ],
  sidecarY: 332,

  legend: {
    items: ["blue", "orange", "accent", "purple", "green", "red"],
    x: 700, y: 232,
  },
};

export default dataglass;
