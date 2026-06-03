import scale         from "./scale";
import contextRag    from "./contextRag";
import dataglass     from "./dataglass";
import dataglassCICD from "./dataglassCICD";
import encaixe       from "./encaixe";
import mcp           from "./mcp";
import aiComponent   from "./aiComponent";

/**
 * All diagram specs, keyed by the id passed to <ArchDiagram id="..." />.
 *
 * Sub-views of a case study use the suffix syntax:
 *   contextRag:scale, dataglass:cicd
 */
const SPECS = {
  scale,
  contextRag,
  dataglass,
  encaixe,
  mcp,
  aiComponent,

  "contextRag:scale": scale,
  "dataglass:cicd":   dataglassCICD,
};

export default SPECS;
