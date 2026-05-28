/**
 * MCP server architecture (Devscope/Reporeaver).
 *
 * Client (Claude Desktop) talks JSON-RPC to FastMCP server, which dispatches
 * to handlers calling GitHub, Redis cache, LangChain, and an LLM.
 */
const mcp = {
  i18nNamespace: "mcp",
  ariaLabel: { key: "ariaLabel", fallback: "MCP Server Architecture" },
  accent: "orange",
  title: "MCP · Tool Protocol",
  size: { w: 860, h: 450 },

  groups: [
    { id: "client", contains: ["claude", "toolList"], padding: 14,
      labelKey: "groups.client", variant: "blue", labelAlign: "center" },
    { id: "server", contains: ["protocol", "dispatcher", "handlers"], padding: 14,
      labelKey: "groups.server", variant: "orange", labelAlign: "center" },
  ],

  nodes: [
    { id: "claude",   x: 34,  y: 56,  variant: "blue",
      labelKey: "nodes.claude", sub: "+ IDE Agents", size: { w: 124, h: 48 } },
    { id: "toolList", x: 34,  y: 116, ghost: true,
      label: null,
      sub: [
        { key: "nodes.analyze" },
        { key: "nodes.evaluate" },
        { key: "nodes.mapJob" },
        { key: "nodes.summary" },
      ],
      size: { w: 124, h: 90 } },

    { id: "protocol",   x: 270, y: 56,  variant: "accent",
      labelKey: "nodes.protocol", sub: "JSON-RPC 2.0 / SSE", size: { w: 160, h: 48 } },
    { id: "dispatcher", x: 270, y: 132, variant: "orange",
      labelKey: "nodes.dispatcher", sub: "Routes tool calls", size: { w: 160, h: 48 } },
    { id: "handlers",   x: 270, y: 212, variant: "green",
      labelKey: "nodes.handlers", sub: "Pydantic validated", size: { w: 160, h: 48 } },

    { id: "cache",     x: 510, y: 56,  variant: "red",
      labelKey: "nodes.cache", subKey: "nodes.cacheSub", size: { w: 140, h: 52 } },
    { id: "github",    x: 510, y: 132, variant: "blue",
      labelKey: "nodes.github", sub: "REST API v3 · PAT scoped", size: { w: 140, h: 52 } },
    { id: "langchain", x: 510, y: 212, variant: "green",
      labelKey: "nodes.langchain", sub: "Skill extraction · Chains", size: { w: 140, h: 52 } },
    { id: "llm",       x: 510, y: 278, variant: "purple",
      labelKey: "nodes.llm", sub: "Streaming · <200ms first token", size: { w: 140, h: 52 } },
    { id: "result",    x: 510, y: 358, variant: "accent",
      labelKey: "nodes.result", sub: "Structured · Streamed", size: { w: 140, h: 48 } },

    { id: "stack1", x: 680, y: 56,  ghost: true,
      label: "Docker + Railway", sub: "python:3.12-slim", size: { w: 160, h: 52 } },
    { id: "stack2", x: 680, y: 132, ghost: true,
      label: "FastMCP SDK", sub: "Anthropic official", size: { w: 160, h: 52 } },
    { id: "stack3", x: 680, y: 212, ghost: true,
      label: "Pydantic v2", sub: "Input validation", size: { w: 160, h: 52 } },
    { id: "stack4", x: 680, y: 288, ghost: true,
      label: "fastapi-limiter", sub: "30 req/min per IP", size: { w: 160, h: 52 } },
  ],

  edges: [
    { from: "claude",     to: "protocol",   step: 1, port: "right-left", label: { key: "edges.toolCall", fallback: "tool_call (JSON-RPC)" }, labelOffset: -10 },
    { from: "protocol",   to: "claude",     style: "success", port: "left-right", label: { key: "edges.result", fallback: "structured result" }, labelOffset: 14 },
    { from: "protocol",   to: "dispatcher", step: 2, port: "bottom-top" },
    { from: "dispatcher", to: "handlers",   step: 3, port: "bottom-top" },
    { from: "handlers",   to: "github",     step: 4 },
    { from: "handlers",   to: "langchain",  step: 5 },
    { from: "handlers",   to: "llm",        step: 6 },
    { from: "cache",      to: "github",     port: "bottom-top" },
    { from: "llm",        to: "result",     style: "success", port: "bottom-top" },
    { from: "github",     to: "handlers",   style: "muted" },
  ],

  annotations: [
    { x: 760, y: 376, textAnchor: "middle", textKey: "labels.stack", className: "diagLane" },
  ],
};

export default mcp;
