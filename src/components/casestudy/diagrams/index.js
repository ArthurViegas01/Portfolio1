/**
 * Public API of the diagram subsystem.
 *
 * Consumers import only this file:
 *   import { ArchDiagram } from "./diagrams";
 *   <ArchDiagram id="dataglass" />
 *
 * To add a new diagram:
 *   1. Drop a spec in specs/<id>.js
 *   2. Register it in specs/index.js
 *   3. Add labels under translations.js → caseStudy.diagrams.<id>
 */
export { default as ArchDiagram } from "./_engine/ArchDiagram";
export { default as SPECS } from "./specs";
