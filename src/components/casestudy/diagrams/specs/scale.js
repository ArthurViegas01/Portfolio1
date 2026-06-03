/**
 * Horizontal scaling architecture for the RAG case study.
 * Shows replication: LB → N FastAPI → Redis → N Celery → PostgreSQL.
 */
const scale = {
  i18nNamespace: "scale",
  ariaLabel: { key: "ariaLabel", fallback: "Scale Architecture" },
  accent: "blue",
  title: "Horizontal Scale",
  size: { w: 740, h: 300 },

  lanes: [
    { id: "main", y: 50, divider: false },
  ],

  nodes: [
    { id: "lb", lane: "main", col: 0, variant: "accent",
      label: { key: "nodes.lb", fallback: "Load Balancer" },
      size: { w: 100, h: 50 } },

    { id: "api1", lane: "main", col: 1, row: 0, variant: "blue", label: "FastAPI", sub: "#1", size: "sm" },
    { id: "api2", lane: "main", col: 1, row: 1, variant: "blue", label: "FastAPI", sub: "#2", size: "sm" },
    { id: "apiN", lane: "main", col: 1, row: 2, variant: "blue", label: "FastAPI", sub: "#N", size: "sm" },

    { id: "redis", lane: "main", col: 2, variant: "red",
      label: "Redis", sub: { key: "nodes.redisSub", fallback: "Queue" },
      size: { w: 90, h: 50 } },

    { id: "cel1", lane: "main", col: 3, row: 0, variant: "green", label: "Celery", sub: "#1", size: "sm" },
    { id: "cel2", lane: "main", col: 3, row: 1, variant: "green", label: "Celery", sub: "#2", size: "sm" },
    { id: "celN", lane: "main", col: 3, row: 2, variant: "green", label: "Celery", sub: "#N", size: "sm" },

    { id: "pg", lane: "main", col: 4, variant: "purple",
      label: "PostgreSQL", sub: "+ pgvector",
      size: { w: 110, h: 50 } },
  ],

  edges: [
    { from: "lb", to: "api1" }, { from: "lb", to: "api2" }, { from: "lb", to: "apiN" },
    { from: "api1", to: "redis" }, { from: "api2", to: "redis" }, { from: "apiN", to: "redis" },
    { from: "redis", to: "cel1" }, { from: "redis", to: "cel2" }, { from: "redis", to: "celN" },
    { from: "cel1", to: "pg" }, { from: "cel2", to: "pg" }, { from: "celN", to: "pg" },
  ],

  annotations: [
    { relativeTo: "lb",    anchor: "below", dy: 26, textKey: "labels.roundRobin",   className: "diagStep" },
    { relativeTo: "api2",  anchor: "below", dy: 56, textKey: "labels.stateless",    className: "diagStep" },
    { relativeTo: "redis", anchor: "below", dy: 26, textKey: "labels.backpressure", className: "diagStep" },
    { relativeTo: "cel2",  anchor: "below", dy: 56, textKey: "labels.autoScaled",   className: "diagStep" },
    { relativeTo: "pg",    anchor: "below", dy: 26, textKey: "labels.readReplicas", className: "diagStep" },
    { x: 370, y: 252, textAnchor: "middle", className: "diagLane", textKey: "labels.caption" },
  ],
};

export default scale;
