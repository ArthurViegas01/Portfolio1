import React from "react";

const TerraformCICDDiagram = ({ lang = "en" }) => {
  const t = {
    en: {
      prFlow: "PR Flow — terraform plan",
      mergeFlow: "Merge to main — terraform apply",
      dev: "Developer",
      pr: "Pull Request",
      tfplan: "tf-plan.yml",
      checkout: "Checkout + Setup",
      init: "terraform init",
      plan: "terraform plan",
      comment: "PR Comment",
      planOut: "Plan output posted\nto Pull Request",
      merge: "Merge to main",
      tfapply: "tf-apply.yml",
      checkout2: "Checkout + Setup",
      init2: "terraform init",
      apply: "terraform apply",
      aws: "AWS Resources",
      provisioned: "VPC · EC2 · S3 · RDS",
      secrets: "GitHub Secrets",
      secretsDetail: "AWS_ACCESS_KEY_ID\nAWS_SECRET_ACCESS_KEY",
    },
    pt: {
      prFlow: "Fluxo de PR — terraform plan",
      mergeFlow: "Merge para main — terraform apply",
      dev: "Desenvolvedor",
      pr: "Pull Request",
      tfplan: "tf-plan.yml",
      checkout: "Checkout + Setup",
      init: "terraform init",
      plan: "terraform plan",
      comment: "Comentário no PR",
      planOut: "Output do plan postado\nno Pull Request",
      merge: "Merge para main",
      tfapply: "tf-apply.yml",
      checkout2: "Checkout + Setup",
      init2: "terraform init",
      apply: "terraform apply",
      aws: "Recursos AWS",
      provisioned: "VPC · EC2 · S3 · RDS",
      secrets: "GitHub Secrets",
      secretsDetail: "AWS_ACCESS_KEY_ID\nAWS_SECRET_ACCESS_KEY",
    },
  };
  const l = t[lang] || t.en;

  return (
    <svg
      viewBox="0 0 860 440"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", fontFamily: "inherit" }}
    >
      <rect width="860" height="440" rx="16" fill="#1e1e2e" />

      {/* ── DEFS ── */}
      <defs>
        <marker id="tcArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#6c6cff" />
        </marker>
        <marker id="tcArrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#40a040" />
        </marker>
        <marker id="tcArrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#d07030" />
        </marker>
      </defs>

      {/* ═══════════ TOP ROW — PR FLOW ═══════════ */}
      <text x="430" y="28" textAnchor="middle" fill="#9090c0" fontSize="11" fontWeight="600" letterSpacing="0.5">
        {l.prFlow}
      </text>

      {/* Developer */}
      <rect x="20" y="42" width="100" height="52" rx="8" fill="#2a2a4a" stroke="#6c6cff" strokeWidth="1.5" />
      <text x="70" y="62" textAnchor="middle" fill="#a0a0e0" fontSize="10" fontWeight="700">{l.dev}</text>
      <text x="70" y="80" textAnchor="middle" fill="#7070c0" fontSize="8">git push</text>

      {/* → PR */}
      <line x1="120" y1="68" x2="148" y2="68" stroke="#6c6cff" strokeWidth="1.5" markerEnd="url(#tcArrow)" />

      {/* Pull Request */}
      <rect x="148" y="42" width="100" height="52" rx="8" fill="#2a2a4a" stroke="#6c6cff" strokeWidth="1.5" />
      <text x="198" y="62" textAnchor="middle" fill="#a0a0e0" fontSize="10" fontWeight="700">{l.pr}</text>
      <text x="198" y="78" textAnchor="middle" fill="#7070c0" fontSize="8">GitHub</text>

      {/* → tf-plan.yml */}
      <line x1="248" y1="68" x2="276" y2="68" stroke="#6c6cff" strokeWidth="1.5" markerEnd="url(#tcArrow)" />

      {/* tf-plan.yml workflow box */}
      <rect x="276" y="30" width="320" height="82" rx="8" fill="#1e2a3a" stroke="#4a6aaa" strokeWidth="1.5" />
      <text x="436" y="50" textAnchor="middle" fill="#70a0e0" fontSize="10" fontWeight="700">{l.tfplan}  ·  GitHub Actions</text>
      {/* steps inside */}
      <rect x="290" y="56" width="82" height="44" rx="6" fill="#243040" stroke="#4a6aaa" strokeWidth="1" />
      <text x="331" y="74" textAnchor="middle" fill="#a0c0e0" fontSize="8" fontWeight="600">{l.checkout}</text>
      <text x="331" y="88" textAnchor="middle" fill="#7090b0" fontSize="7">TF 1.7</text>

      <line x1="372" y1="78" x2="386" y2="78" stroke="#4a6aaa" strokeWidth="1" markerEnd="url(#tcArrow)" />

      <rect x="386" y="56" width="70" height="44" rx="6" fill="#243040" stroke="#4a6aaa" strokeWidth="1" />
      <text x="421" y="76" textAnchor="middle" fill="#a0c0e0" fontSize="8" fontWeight="600">{l.init}</text>
      <text x="421" y="88" textAnchor="middle" fill="#7090b0" fontSize="7">S3 backend</text>

      <line x1="456" y1="78" x2="470" y2="78" stroke="#4a6aaa" strokeWidth="1" markerEnd="url(#tcArrow)" />

      <rect x="470" y="56" width="70" height="44" rx="6" fill="#243040" stroke="#4a6aaa" strokeWidth="1" />
      <text x="505" y="76" textAnchor="middle" fill="#a0c0e0" fontSize="8" fontWeight="600">{l.plan}</text>
      <text x="505" y="88" textAnchor="middle" fill="#7090b0" fontSize="7">-out=plan.tfplan</text>

      {/* → PR Comment */}
      <line x1="596" y1="68" x2="624" y2="68" stroke="#6c6cff" strokeWidth="1.5" markerEnd="url(#tcArrow)" />

      {/* PR Comment */}
      <rect x="624" y="42" width="120" height="52" rx="8" fill="#2a3a2a" stroke="#40a040" strokeWidth="1.5" />
      <text x="684" y="60" textAnchor="middle" fill="#80e080" fontSize="10" fontWeight="700">{l.comment}</text>
      <text x="684" y="74" textAnchor="middle" fill="#60b060" fontSize="7">{l.planOut}</text>

      {/* GitHub Secrets side note */}
      <rect x="750" y="42" width="96" height="52" rx="8" fill="#3a2a1a" stroke="#d07030" strokeWidth="1" />
      <text x="798" y="60" textAnchor="middle" fill="#d09050" fontSize="9" fontWeight="700">{l.secrets}</text>
      <text x="798" y="74" textAnchor="middle" fill="#c08040" fontSize="7">AWS_ACCESS_KEY_ID</text>
      <text x="798" y="86" textAnchor="middle" fill="#c08040" fontSize="7">AWS_SECRET_ACCESS_KEY</text>
      {/* secrets dotted lines to both workflows */}
      <line x1="750" y1="68" x2="744" y2="68" stroke="#d07030" strokeWidth="1" strokeDasharray="3,2" />

      {/* separator */}
      <line x1="20" y1="140" x2="840" y2="140" stroke="#3a3a5a" strokeWidth="1" strokeDasharray="4,4" />

      {/* ═══════════ BOTTOM ROW — MERGE FLOW ═══════════ */}
      <text x="430" y="166" textAnchor="middle" fill="#9090c0" fontSize="11" fontWeight="600" letterSpacing="0.5">
        {l.mergeFlow}
      </text>

      {/* Merge to main */}
      <rect x="20" y="182" width="120" height="52" rx="8" fill="#2a2a4a" stroke="#6c6cff" strokeWidth="1.5" />
      <text x="80" y="202" textAnchor="middle" fill="#a0a0e0" fontSize="10" fontWeight="700">{l.merge}</text>
      <text x="80" y="218" textAnchor="middle" fill="#7070c0" fontSize="8">main branch</text>

      {/* → tf-apply.yml */}
      <line x1="140" y1="208" x2="168" y2="208" stroke="#6c6cff" strokeWidth="1.5" markerEnd="url(#tcArrow)" />

      {/* tf-apply.yml workflow box */}
      <rect x="168" y="170" width="370" height="82" rx="8" fill="#1e2a3a" stroke="#4a6aaa" strokeWidth="1.5" />
      <text x="353" y="190" textAnchor="middle" fill="#70a0e0" fontSize="10" fontWeight="700">{l.tfapply}  ·  GitHub Actions</text>

      <rect x="182" y="196" width="82" height="44" rx="6" fill="#243040" stroke="#4a6aaa" strokeWidth="1" />
      <text x="223" y="214" textAnchor="middle" fill="#a0c0e0" fontSize="8" fontWeight="600">{l.checkout2}</text>
      <text x="223" y="228" textAnchor="middle" fill="#7090b0" fontSize="7">TF 1.7</text>

      <line x1="264" y1="218" x2="278" y2="218" stroke="#4a6aaa" strokeWidth="1" markerEnd="url(#tcArrow)" />

      <rect x="278" y="196" width="70" height="44" rx="6" fill="#243040" stroke="#4a6aaa" strokeWidth="1" />
      <text x="313" y="216" textAnchor="middle" fill="#a0c0e0" fontSize="8" fontWeight="600">{l.init2}</text>
      <text x="313" y="228" textAnchor="middle" fill="#7090b0" fontSize="7">S3 backend</text>

      <line x1="348" y1="218" x2="362" y2="218" stroke="#4a6aaa" strokeWidth="1" markerEnd="url(#tcArrow)" />

      <rect x="362" y="196" width="80" height="44" rx="6" fill="#1a3a1a" stroke="#40a040" strokeWidth="1.5" />
      <text x="402" y="216" textAnchor="middle" fill="#80e080" fontSize="8" fontWeight="700">{l.apply}</text>
      <text x="402" y="228" textAnchor="middle" fill="#60b060" fontSize="7">auto-approve</text>

      <line x1="442" y1="218" x2="460" y2="218" stroke="#40a040" strokeWidth="1.5" markerEnd="url(#tcArrowGreen)" />

      {/* Wait for approval step */}
      <rect x="460" y="196" width="64" height="44" rx="6" fill="#2a2a1a" stroke="#a0a040" strokeWidth="1" />
      <text x="492" y="212" textAnchor="middle" fill="#d0d060" fontSize="8" fontWeight="600">Verify</text>
      <text x="492" y="226" textAnchor="middle" fill="#a0a040" fontSize="7">plan ok?</text>
      <text x="492" y="238" textAnchor="middle" fill="#a0a040" fontSize="7">exit code 0</text>

      <line x1="524" y1="218" x2="542" y2="218" stroke="#40a040" strokeWidth="1.5" markerEnd="url(#tcArrowGreen)" />

      {/* → AWS Resources */}
      <rect x="542" y="182" width="150" height="52" rx="8" fill="#1a3a1a" stroke="#40a040" strokeWidth="1.5" />
      <text x="617" y="202" textAnchor="middle" fill="#80e080" fontSize="10" fontWeight="700">{l.aws}</text>
      <text x="617" y="218" textAnchor="middle" fill="#60b060" fontSize="8">{l.provisioned}</text>

      {/* secrets dotted line to apply */}
      <line x1="750" y1="94" x2="798" y2="94" stroke="#d07030" strokeWidth="0" />
      <line x1="798" y1="94" x2="798" y2="208" stroke="#d07030" strokeWidth="1" strokeDasharray="3,2" />
      <line x1="798" y1="208" x2="750" y2="208" stroke="#d07030" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#tcArrowOrange)" />

      {/* ── Infra state diagram (bottom) ── */}
      <rect x="20" y="280" width="820" height="144" rx="12" fill="#1a1a2e" stroke="#3a3a5a" strokeWidth="1" />
      <text x="430" y="302" textAnchor="middle" fill="#7070a0" fontSize="10" fontWeight="600" letterSpacing="0.5">
        Terraform State Flow
      </text>

      {/* state flow */}
      <rect x="40" y="314" width="120" height="88" rx="8" fill="#2a2a4a" stroke="#6060aa" strokeWidth="1" />
      <text x="100" y="334" textAnchor="middle" fill="#a0a0e0" fontSize="9" fontWeight="700">terraform init</text>
      <text x="100" y="350" textAnchor="middle" fill="#7070c0" fontSize="8">Downloads providers</text>
      <text x="100" y="364" textAnchor="middle" fill="#7070c0" fontSize="8">aws · random · tls</text>
      <text x="100" y="378" textAnchor="middle" fill="#7070c0" fontSize="8">Configures S3 backend</text>

      <line x1="160" y1="358" x2="190" y2="358" stroke="#6060aa" strokeWidth="1.5" markerEnd="url(#tcArrow)" />

      <rect x="190" y="314" width="130" height="88" rx="8" fill="#2a2a4a" stroke="#6060aa" strokeWidth="1" />
      <text x="255" y="334" textAnchor="middle" fill="#a0a0e0" fontSize="9" fontWeight="700">terraform plan</text>
      <text x="255" y="350" textAnchor="middle" fill="#7070c0" fontSize="8">Reads current state</text>
      <text x="255" y="364" textAnchor="middle" fill="#7070c0" fontSize="8">from S3</text>
      <text x="255" y="378" textAnchor="middle" fill="#7070c0" fontSize="8">Diffs desired config</text>

      <line x1="320" y1="358" x2="350" y2="358" stroke="#6060aa" strokeWidth="1.5" markerEnd="url(#tcArrow)" />

      <rect x="350" y="314" width="130" height="88" rx="8" fill="#1a3a1a" stroke="#40a040" strokeWidth="1.5" />
      <text x="415" y="334" textAnchor="middle" fill="#80e080" fontSize="9" fontWeight="700">terraform apply</text>
      <text x="415" y="350" textAnchor="middle" fill="#60b060" fontSize="8">Acquires DynamoDB lock</text>
      <text x="415" y="364" textAnchor="middle" fill="#60b060" fontSize="8">Provisions/updates</text>
      <text x="415" y="378" textAnchor="middle" fill="#60b060" fontSize="8">Writes new state to S3</text>

      <line x1="480" y1="358" x2="510" y2="358" stroke="#40a040" strokeWidth="1.5" markerEnd="url(#tcArrowGreen)" />

      <rect x="510" y="314" width="130" height="88" rx="8" fill="#2a3a2a" stroke="#40a040" strokeWidth="1" />
      <text x="575" y="334" textAnchor="middle" fill="#80e080" fontSize="9" fontWeight="700">State Updated</text>
      <text x="575" y="350" textAnchor="middle" fill="#60b060" fontSize="8">S3: terraform.tfstate</text>
      <text x="575" y="364" textAnchor="middle" fill="#60b060" fontSize="8">Lock released</text>
      <text x="575" y="378" textAnchor="middle" fill="#60b060" fontSize="8">Resources tagged</text>

      <line x1="640" y1="358" x2="670" y2="358" stroke="#40a040" strokeWidth="1.5" markerEnd="url(#tcArrowGreen)" />

      <rect x="670" y="314" width="148" height="88" rx="8" fill="#1a3a1a" stroke="#40a040" strokeWidth="1.5" />
      <text x="744" y="334" textAnchor="middle" fill="#80e080" fontSize="9" fontWeight="700">AWS Infra Live</text>
      <text x="744" y="350" textAnchor="middle" fill="#60b060" fontSize="8">VPC provisioned</text>
      <text x="744" y="364" textAnchor="middle" fill="#60b060" fontSize="8">EC2 running FastAPI</text>
      <text x="744" y="378" textAnchor="middle" fill="#60b060" fontSize="8">S3 · IAM · SSM ready</text>
    </svg>
  );
};

export default TerraformCICDDiagram;
