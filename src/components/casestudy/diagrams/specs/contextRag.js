/**
 * RAG case study (Context project): ingestion + query lanes.
 * Pipeline: ingest documents → embeddings; query → retrieve → LLM → answer.
 */
const contextRag = {
  i18nNamespace: "contextRag",
  ariaLabel: { key: "ariaLabel", fallback: "RAG Architecture Diagram" },
  size: { w: 820, h: 420 },

  lanes: [
    { id: "ingest", y: 50,  labelKey: "lanes.ingest", divider: false },
    { id: "query",  y: 262, labelKey: "lanes.query",  divider: true, dividerY: 248 },
  ],

  nodes: [
    { id: "client1", lane: "ingest", col: 0, variant: "blue",
      labelKey: "nodes.client",
      sub: { key: "nodes.clientSub", fallback: "Browser / API" } },
    { id: "api1",    lane: "ingest", col: 1, variant: "accent",
      labelKey: "nodes.api", sub: "Python ASGI" },
    { id: "redis",   lane: "ingest", col: 2, variant: "red",
      labelKey: "nodes.redis", subKey: "nodes.redisSub" },
    { id: "worker",  lane: "ingest", col: 3, variant: "green",
      labelKey: "nodes.worker", sub: "LangChain" },
    { id: "db1",     lane: "ingest", col: 3, row: 1, variant: "purple",
      labelKey: "nodes.db", subKey: "nodes.dbHNSW" },

    { id: "client2", lane: "query", col: 0, variant: "blue",
      labelKey: "nodes.client", subKey: "nodes.query" },
    { id: "api2",    lane: "query", col: 1, variant: "accent",
      labelKey: "nodes.api", subKey: "nodes.embed" },
    { id: "db2",     lane: "query", col: 2, variant: "purple",
      labelKey: "nodes.db", subKey: "nodes.topK" },
    { id: "llm",     lane: "query", col: 3, variant: "orange",
      labelKey: "nodes.llm", subKey: "nodes.context" },
    { id: "answer",  lane: "query", col: 3, row: 1, variant: "green",
      labelKey: "nodes.answer", size: { w: 120, h: 44 } },
  ],

  edges: [
    { from: "client1", to: "api1",   step: 1 },
    { from: "api1",    to: "redis",  step: 2 },
    { from: "redis",   to: "worker", step: 3 },
    { from: "worker",  to: "db1",    step: 4 },

    { from: "client2", to: "api2" },
    { from: "api2",    to: "db2",    step: 6 },
    { from: "db2",     to: "llm",    step: 7 },
    { from: "llm",     to: "answer", step: 8, style: "success", port: "bottom-top" },
  ],

  legend: {
    items: ["blue", "accent", "red", "green", "purple", "orange"],
    x: 700, y: 270,
  },
};

export default contextRag;
