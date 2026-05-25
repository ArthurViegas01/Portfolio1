import React from "react";

const AIComponentDiagram = ({ lang = "en" }) => {
  const t = {
    en: {
      userLayer: "User Layer",
      serverLayer: "Next.js 15 Server",
      clientRuntime: "Client Runtime",
      monaco: "Monaco Editor",
      monacoSub: "Prompt input",
      zustand: "Zustand Store",
      zustandSub: "code · history · status",
      apiRoute: "API Route",
      apiRouteSub: "/api/generate",
      groq: "Groq SDK",
      groqSub: "Llama 3 · streaming",
      stream: "ReadableStream",
      streamSub: "token by token",
      decoder: "TextDecoder",
      decoderSub: "chunk assembly",
      validation: "Validation Layer",
      validationSub: "hallucination guard",
      babel: "Babel Standalone",
      babelSub: "TSX → JS (browser)",
      iframe: "iframe Sandbox",
      iframeSub: "isolated render",
      framer: "Framer Motion",
      framerSub: "transitions",
      output: "Live Component",
      outputSub: "rendered preview",
      step1: "prompt",
      step2: "POST /api/generate",
      step3: "Groq stream",
      step4: "ReadableStream",
      step5: "incremental code",
      step6: "validated TSX",
      step7: "compiled JS",
      step8: "render",
    },
    pt: {
      userLayer: "Camada do Usuário",
      serverLayer: "Servidor Next.js 15",
      clientRuntime: "Runtime do Cliente",
      monaco: "Monaco Editor",
      monacoSub: "entrada do prompt",
      zustand: "Zustand Store",
      zustandSub: "código · histórico · status",
      apiRoute: "API Route",
      apiRouteSub: "/api/generate",
      groq: "Groq SDK",
      groqSub: "Llama 3 · streaming",
      stream: "ReadableStream",
      streamSub: "token por token",
      decoder: "TextDecoder",
      decoderSub: "montagem de chunks",
      validation: "Camada de Validação",
      validationSub: "guarda de alucinações",
      babel: "Babel Standalone",
      babelSub: "TSX → JS (browser)",
      iframe: "iframe Sandbox",
      iframeSub: "renderização isolada",
      framer: "Framer Motion",
      framerSub: "transições",
      output: "Componente Live",
      outputSub: "preview renderizado",
      step1: "prompt",
      step2: "POST /api/generate",
      step3: "Groq stream",
      step4: "ReadableStream",
      step5: "código incremental",
      step6: "TSX validado",
      step7: "JS compilado",
      step8: "render",
    },
  };
  const l = t[lang] || t.en;

  return (
    <svg
      viewBox="0 0 860 538"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", fontFamily: "inherit" }}
    >
      <rect width="860" height="538" rx="16" fill="#1e1e2e" />

      <defs>
        <marker id="acd-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#6c6cff" />
        </marker>
        <marker id="acd-arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#40b040" />
        </marker>
        <marker id="acd-arrow-orange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#d08030" />
        </marker>
        <marker id="acd-arrow-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#a060e0" />
        </marker>
      </defs>

      {/* ── USER LAYER ── */}
      <text x="20" y="30" fill="#5050a0" fontSize="10" fontWeight="600" letterSpacing="1">{l.userLayer.toUpperCase()}</text>

      {/* Monaco Editor */}
      <rect x="20" y="40" width="148" height="72" rx="10" fill="#2a2a4a" stroke="#6c6cff" strokeWidth="1.5" />
      <text x="94" y="62" textAnchor="middle" fill="#a0a0ff" fontSize="11" fontWeight="700">{l.monaco}</text>
      <text x="94" y="78" textAnchor="middle" fill="#7070c0" fontSize="9">{l.monacoSub}</text>
      <rect x="34" y="84" width="120" height="18" rx="4" fill="#1a1a3a" />
      <text x="94" y="97" textAnchor="middle" fill="#5050a0" fontSize="8" fontFamily="monospace">{"<generate /> TSX..."}</text>

      {/* Zustand */}
      <rect x="20" y="128" width="148" height="58" rx="10" fill="#2a2a4a" stroke="#6c6cff" strokeWidth="1.5" />
      <text x="94" y="150" textAnchor="middle" fill="#a0a0ff" fontSize="11" fontWeight="700">{l.zustand}</text>
      <text x="94" y="166" textAnchor="middle" fill="#7070c0" fontSize="9">{l.zustandSub}</text>

      {/* Step 1: prompt → API */}
      <line x1="168" y1="76" x2="248" y2="76" stroke="#6c6cff" strokeWidth="1.5" markerEnd="url(#acd-arrow)" />
      <text x="208" y="70" textAnchor="middle" fill="#5050a0" fontSize="8">{l.step2}</text>

      {/* ── SERVER LAYER ── */}
      <rect x="246" y="22" width="196" height="180" rx="12" fill="#1a2a1a" stroke="#40b040" strokeWidth="1.5" />
      <text x="344" y="40" textAnchor="middle" fill="#50a050" fontSize="10" fontWeight="600" letterSpacing="1">{l.serverLayer.toUpperCase()}</text>

      {/* API Route */}
      <rect x="262" y="50" width="164" height="62" rx="8" fill="#203020" stroke="#40b040" strokeWidth="1" />
      <text x="344" y="70" textAnchor="middle" fill="#80d080" fontSize="11" fontWeight="700">{l.apiRoute}</text>
      <text x="344" y="86" textAnchor="middle" fill="#60a060" fontSize="9">{l.apiRouteSub}</text>
      <text x="344" y="101" textAnchor="middle" fill="#406040" fontSize="8">{"server component · Node.js Runtime"}</text>

      {/* Step → Groq */}
      <line x1="344" y1="112" x2="344" y2="128" stroke="#40b040" strokeWidth="1.5" markerEnd="url(#acd-arrow-green)" />

      {/* Groq SDK */}
      <rect x="262" y="128" width="164" height="62" rx="8" fill="#203020" stroke="#40b040" strokeWidth="1" />
      <text x="344" y="148" textAnchor="middle" fill="#80d080" fontSize="11" fontWeight="700">{l.groq}</text>
      <text x="344" y="164" textAnchor="middle" fill="#60a060" fontSize="9">{l.groqSub}</text>
      <text x="344" y="179" textAnchor="middle" fill="#406040" fontSize="8">{"< 200ms first token"}</text>

      {/* Stream arrow out of server */}
      <line x1="442" y1="159" x2="474" y2="159" stroke="#d08030" strokeWidth="1.5" markerEnd="url(#acd-arrow-orange)" />

      {/* ── CLIENT RUNTIME ── */}
      <text x="474" y="30" fill="#5a3a10" fontSize="10" fontWeight="600" letterSpacing="1">{l.clientRuntime.toUpperCase()}</text>

      {/* ReadableStream — y=40 */}
      <rect x="474" y="40" width="148" height="58" rx="8" fill="#2a1a0a" stroke="#d08030" strokeWidth="1.5" />
      <text x="548" y="60" textAnchor="middle" fill="#e0a060" fontSize="11" fontWeight="700">{l.stream}</text>
      <text x="548" y="76" textAnchor="middle" fill="#b07040" fontSize="9">{l.streamSub}</text>

      {/* → TextDecoder (gap +10 → y=126) */}
      <line x1="548" y1="98" x2="548" y2="126" stroke="#d08030" strokeWidth="1.5" markerEnd="url(#acd-arrow-orange)" />

      {/* TextDecoder — y=126 */}
      <rect x="474" y="126" width="148" height="54" rx="8" fill="#2a1a0a" stroke="#d08030" strokeWidth="1.5" />
      <text x="548" y="146" textAnchor="middle" fill="#e0a060" fontSize="11" fontWeight="700">{l.decoder}</text>
      <text x="548" y="162" textAnchor="middle" fill="#b07040" fontSize="9">{l.decoderSub}</text>

      {/* → Validation (y=208) */}
      <line x1="548" y1="180" x2="548" y2="208" stroke="#d08030" strokeWidth="1.5" markerEnd="url(#acd-arrow-orange)" />

      {/* Validation — y=208 */}
      <rect x="474" y="208" width="148" height="54" rx="8" fill="#2a1510" stroke="#e05030" strokeWidth="1.5" />
      <text x="548" y="228" textAnchor="middle" fill="#f08060" fontSize="10" fontWeight="700">{l.validation}</text>
      <text x="548" y="244" textAnchor="middle" fill="#b05030" fontSize="9">{l.validationSub}</text>

      {/* → Babel (y=290) */}
      <line x1="548" y1="262" x2="548" y2="290" stroke="#a060e0" strokeWidth="1.5" markerEnd="url(#acd-arrow-purple)" />
      <text x="565" y="280" fill="#a060e0" fontSize="8">{l.step6}</text>

      {/* Babel Standalone — y=290 */}
      <rect x="474" y="290" width="148" height="58" rx="8" fill="#1a1030" stroke="#a060e0" strokeWidth="1.5" />
      <text x="548" y="310" textAnchor="middle" fill="#c090f0" fontSize="11" fontWeight="700">{l.babel}</text>
      <text x="548" y="326" textAnchor="middle" fill="#8050b0" fontSize="9">{l.babelSub}</text>
      <text x="548" y="340" textAnchor="middle" fill="#604080" fontSize="8">{"no server compile step"}</text>

      {/* Babel → iframe (Babel center y=319) */}
      <line x1="622" y1="319" x2="668" y2="319" stroke="#a060e0" strokeWidth="1.5" markerEnd="url(#acd-arrow-purple)" />
      <text x="658" y="311" textAnchor="end" fill="#a060e0" fontSize="8">{l.step7}</text>

      {/* iframe Sandbox — y=279 (center 319) */}
      <rect x="668" y="279" width="168" height="80" rx="10" fill="#1a2a1a" stroke="#40b040" strokeWidth="2" />
      <text x="752" y="301" textAnchor="middle" fill="#80e080" fontSize="11" fontWeight="700">{l.iframe}</text>
      <text x="752" y="317" textAnchor="middle" fill="#60b060" fontSize="9">{l.iframeSub}</text>
      <rect x="684" y="323" width="136" height="24" rx="4" fill="#102010" stroke="#306030" strokeWidth="1" />
      <text x="752" y="339" textAnchor="middle" fill="#40a040" fontSize="8" fontFamily="monospace">{"sandbox=\"allow-scripts\""}</text>

      {/* iframe → Live Output */}
      <line x1="752" y1="359" x2="752" y2="381" stroke="#40b040" strokeWidth="2" markerEnd="url(#acd-arrow-green)" />

      {/* Live Output — y=381 */}
      <rect x="668" y="381" width="168" height="68" rx="10" fill="#102010" stroke="#40b040" strokeWidth="2" />
      <text x="752" y="403" textAnchor="middle" fill="#80e080" fontSize="12" fontWeight="700">{l.output}</text>
      <text x="752" y="421" textAnchor="middle" fill="#60b060" fontSize="9">{l.outputSub}</text>
      <rect x="690" y="427" width="124" height="16" rx="4" fill="#1a3a1a" />
      <text x="752" y="439" textAnchor="middle" fill="#50a050" fontSize="8">{"< 200ms first token"}</text>

      {/* Framer Motion note — y=376 */}
      <rect x="474" y="376" width="148" height="46" rx="8" fill="#201030" stroke="#a060e0" strokeWidth="1" strokeDasharray="4,2" />
      <text x="548" y="396" textAnchor="middle" fill="#c090f0" fontSize="10" fontWeight="600">{l.framer}</text>
      <text x="548" y="412" textAnchor="middle" fill="#7040a0" fontSize="9">{l.framerSub}</text>

      {/* Zustand state sync annotation */}
      <text x="94" y="210" textAnchor="middle" fill="#4040a0" fontSize="8">{"↕ state sync"}</text>

      {/* ── KEY DESIGN DECISIONS footer ── y=462 */}
      {/* <rect x="20" y="462" width="820" height="62" rx="8" fill="#16162a" stroke="#2a2a4a" strokeWidth="1" />
      <text x="430" y="480" textAnchor="middle" fill="#6060a0" fontSize="10" fontWeight="700" letterSpacing="0.5">{"KEY DESIGN DECISIONS"}</text> */}

      {/* Row 1 — titles (fontSize 11) */}
      {/* <text x="80"  y="498" textAnchor="middle" fill="#9090c0" fontSize="11">{"Babel in browser"}</text>
      <text x="240" y="498" textAnchor="middle" fill="#9090c0" fontSize="11">{"iframe sandbox"}</text>
      <text x="430" y="498" textAnchor="middle" fill="#9090c0" fontSize="11">{"Groq streaming"}</text>
      <text x="620" y="498" textAnchor="middle" fill="#9090c0" fontSize="11">{"Zustand (no Redux)"}</text>
      <text x="790" y="498" textAnchor="middle" fill="#9090c0" fontSize="11">{"Node.js Runtime"}</text> */}

      {/* Row 2 — subtexts (fontSize 10) */}
      {/* <text x="80"  y="513" textAnchor="middle" fill="#6060a0" fontSize="10">{"zero server compile cost"}</text>
      <text x="240" y="513" textAnchor="middle" fill="#6060a0" fontSize="10">{"prevents XSS from generated code"}</text>
      <text x="430" y="513" textAnchor="middle" fill="#6060a0" fontSize="10">{"token-by-token · low first-token latency"}</text>
      <text x="620" y="513" textAnchor="middle" fill="#6060a0" fontSize="10">{"lightweight client state"}</text>
      <text x="790" y="513" textAnchor="middle" fill="#6060a0" fontSize="10">{"platform timeouts apply"}</text> */}
    </svg>
  );
};

export default AIComponentDiagram;
