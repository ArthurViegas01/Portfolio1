import React from "react";

const TerraformDiagram = ({ lang = "en" }) => {
  const t = {
    en: {
      modules: "Terraform Modules",
      networking: "networking/",
      compute: "compute/",
      database: "database/",
      storage: "storage/",
      vpc: "VPC + Subnets",
      sg: "Security Groups",
      ec2: "EC2 t3.micro",
      nginx: "nginx + FastAPI",
      userdata: "user_data bootstrap",
      rds: "RDS PostgreSQL",
      optional: "optional",
      s3app: "S3 Bucket",
      static: "Static assets",
      state: "Remote State",
      s3state: "S3 (state file)",
      dynamo: "DynamoDB (lock)",
      infra: "AWS Infrastructure",
      region: "eu-west-1",
    },
    pt: {
      modules: "Módulos Terraform",
      networking: "networking/",
      compute: "compute/",
      database: "database/",
      storage: "storage/",
      vpc: "VPC + Subnets",
      sg: "Security Groups",
      ec2: "EC2 t3.micro",
      nginx: "nginx + FastAPI",
      userdata: "bootstrap via user_data",
      rds: "RDS PostgreSQL",
      optional: "opcional",
      s3app: "S3 Bucket",
      static: "Assets estáticos",
      state: "Estado Remoto",
      s3state: "S3 (state file)",
      dynamo: "DynamoDB (lock)",
      infra: "Infraestrutura AWS",
      region: "eu-west-1",
    },
  };
  const l = t[lang] || t.en;

  return (
    <svg
      viewBox="0 0 860 480"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", fontFamily: "inherit" }}
    >
      {/* Background */}
      <rect width="860" height="480" rx="16" fill="#1e1e2e" />

      {/* ── MODULES BOX (left) ── */}
      <rect x="20" y="20" width="200" height="440" rx="12" fill="#2a2a3e" stroke="#6c6cff" strokeWidth="1.5" />
      <text x="120" y="48" textAnchor="middle" fill="#a0a0d0" fontSize="11" fontWeight="600" letterSpacing="0.5">
        {l.modules}
      </text>

      {/* networking module */}
      <rect x="36" y="62" width="168" height="68" rx="8" fill="#3a3a5c" stroke="#6c6cff" strokeWidth="1" />
      <text x="50" y="82" fill="#9090e0" fontSize="10" fontWeight="700">{l.networking}</text>
      <text x="50" y="99" fill="#c0c0e0" fontSize="9">{l.vpc}</text>
      <text x="50" y="114" fill="#c0c0e0" fontSize="9">{l.sg}</text>

      {/* compute module */}
      <rect x="36" y="146" width="168" height="82" rx="8" fill="#3a3a5c" stroke="#6c6cff" strokeWidth="1" />
      <text x="50" y="166" fill="#9090e0" fontSize="10" fontWeight="700">{l.compute}</text>
      <text x="50" y="183" fill="#c0c0e0" fontSize="9">{l.ec2}</text>
      <text x="50" y="198" fill="#c0c0e0" fontSize="9">{l.nginx}</text>
      <text x="50" y="213" fill="#8080b0" fontSize="9" fontStyle="italic">{l.userdata}</text>

      {/* database module */}
      <rect x="36" y="244" width="168" height="68" rx="8" fill="#3a3a5c" stroke="#6c6cff" strokeWidth="1" />
      <text x="50" y="264" fill="#9090e0" fontSize="10" fontWeight="700">{l.database}</text>
      <text x="50" y="281" fill="#c0c0e0" fontSize="9">{l.rds}</text>
      <rect x="50" y="286" width="50" height="14" rx="4" fill="#4a3a70" />
      <text x="75" y="297" textAnchor="middle" fill="#b090e0" fontSize="8">{l.optional}</text>

      {/* storage module */}
      <rect x="36" y="328" width="168" height="56" rx="8" fill="#3a3a5c" stroke="#6c6cff" strokeWidth="1" />
      <text x="50" y="348" fill="#9090e0" fontSize="10" fontWeight="700">{l.storage}</text>
      <text x="50" y="365" fill="#c0c0e0" fontSize="9">{l.s3app}</text>
      <text x="50" y="378" fill="#8080b0" fontSize="9" fontStyle="italic">{l.static}</text>

      {/* ── ARROWS modules → AWS ── */}
      {/* networking → VPC */}
      <line x1="204" y1="96" x2="310" y2="130" stroke="#6c6cff" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)" />
      {/* compute → EC2 */}
      <line x1="204" y1="187" x2="310" y2="220" stroke="#6c6cff" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)" />
      {/* database → RDS */}
      <line x1="204" y1="278" x2="310" y2="310" stroke="#6c6cff" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)" />
      {/* storage → S3 */}
      <line x1="204" y1="356" x2="310" y2="380" stroke="#6c6cff" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)" />

      {/* ── AWS INFRA BOX (center) ── */}
      <rect x="310" y="20" width="340" height="440" rx="12" fill="#1a2a1a" stroke="#3a8a3a" strokeWidth="1.5" />
      <text x="480" y="48" textAnchor="middle" fill="#60c060" fontSize="11" fontWeight="600" letterSpacing="0.5">
        {l.infra}
      </text>
      <text x="480" y="63" textAnchor="middle" fill="#408040" fontSize="9">{l.region}</text>

      {/* VPC block */}
      <rect x="326" y="74" width="308" height="100" rx="8" fill="#1e3a1e" stroke="#3a8a3a" strokeWidth="1" />
      <text x="342" y="94" fill="#60c060" fontSize="10" fontWeight="700">VPC  10.0.0.0/16</text>
      <rect x="342" y="100" width="130" height="58" rx="6" fill="#2a4a2a" stroke="#3a8a3a" strokeWidth="0.8" />
      <text x="407" y="118" textAnchor="middle" fill="#80e080" fontSize="9" fontWeight="600">Public Subnet</text>
      <text x="407" y="132" textAnchor="middle" fill="#c0e0c0" fontSize="8">10.0.1.0/24</text>
      <text x="407" y="145" textAnchor="middle" fill="#c0e0c0" fontSize="8">Internet Gateway</text>
      <rect x="486" y="100" width="132" height="58" rx="6" fill="#2a4a2a" stroke="#506050" strokeWidth="0.8" strokeDasharray="3,2" />
      <text x="552" y="118" textAnchor="middle" fill="#80a080" fontSize="9" fontWeight="600">Private Subnet</text>
      <text x="552" y="132" textAnchor="middle" fill="#80a080" fontSize="8">10.0.2.0/24</text>
      <text x="552" y="145" textAnchor="middle" fill="#607060" fontSize="8" fontStyle="italic">future use</text>

      {/* EC2 block */}
      <rect x="326" y="190" width="140" height="80" rx="8" fill="#1e3a1e" stroke="#3a8a3a" strokeWidth="1" />
      <text x="396" y="210" textAnchor="middle" fill="#60c060" fontSize="10" fontWeight="700">EC2 t3.micro</text>
      <text x="396" y="226" textAnchor="middle" fill="#c0e0c0" fontSize="8">nginx (reverse proxy)</text>
      <text x="396" y="240" textAnchor="middle" fill="#c0e0c0" fontSize="8">FastAPI (uvicorn)</text>
      <text x="396" y="255" textAnchor="middle" fill="#8080b0" fontSize="8">SSM Session Manager</text>

      {/* RDS block */}
      <rect x="486" y="190" width="132" height="80" rx="8" fill="#2a1a3a" stroke="#7a4aaa" strokeWidth="1" strokeDasharray="5,2" />
      <text x="552" y="210" textAnchor="middle" fill="#b080e0" fontSize="10" fontWeight="700">RDS PostgreSQL</text>
      <text x="552" y="226" textAnchor="middle" fill="#c0a0e0" fontSize="8">db.t3.micro</text>
      <text x="552" y="240" textAnchor="middle" fill="#c0a0e0" fontSize="8">private subnet</text>
      <rect x="510" y="247" width="84" height="14" rx="4" fill="#3a2a5a" />
      <text x="552" y="258" textAnchor="middle" fill="#b080e0" fontSize="8">{l.optional}</text>

      {/* S3 block */}
      <rect x="326" y="288" width="140" height="64" rx="8" fill="#1e3a1e" stroke="#3a8a3a" strokeWidth="1" />
      <text x="396" y="308" textAnchor="middle" fill="#60c060" fontSize="10" fontWeight="700">S3 Bucket</text>
      <text x="396" y="324" textAnchor="middle" fill="#c0e0c0" fontSize="8">Static files</text>
      <text x="396" y="338" textAnchor="middle" fill="#c0e0c0" fontSize="8">Versioning enabled</text>

      {/* IAM block */}
      <rect x="486" y="288" width="132" height="64" rx="8" fill="#3a2a1a" stroke="#aa7a2a" strokeWidth="1" />
      <text x="552" y="308" textAnchor="middle" fill="#e0b060" fontSize="10" fontWeight="700">IAM</text>
      <text x="552" y="324" textAnchor="middle" fill="#e0c080" fontSize="8">Least-privilege roles</text>
      <text x="552" y="338" textAnchor="middle" fill="#e0c080" fontSize="8">Instance Profile</text>

      {/* SG note */}
      <rect x="326" y="368" width="292" height="76" rx="8" fill="#1a2020" stroke="#2a6a6a" strokeWidth="1" />
      <text x="472" y="388" textAnchor="middle" fill="#60b0b0" fontSize="10" fontWeight="700">Security Groups</text>
      <text x="472" y="404" textAnchor="middle" fill="#a0d0d0" fontSize="8">HTTP/HTTPS 0.0.0.0/0 · SSH restricted to admin IP</text>
      <text x="472" y="418" textAnchor="middle" fill="#a0d0d0" fontSize="8">RDS port open only to EC2 SG · egress unrestricted</text>
      <text x="472" y="432" textAnchor="middle" fill="#60a0a0" fontSize="8">SSM endpoints: no direct SSH required</text>

      {/* ── REMOTE STATE BOX (right) ── */}
      <rect x="670" y="20" width="170" height="210" rx="12" fill="#2a1a1a" stroke="#aa4a2a" strokeWidth="1.5" />
      <text x="755" y="48" textAnchor="middle" fill="#e06040" fontSize="11" fontWeight="600" letterSpacing="0.5">
        {l.state}
      </text>

      {/* S3 state */}
      <rect x="686" y="58" width="138" height="64" rx="8" fill="#3a2a1a" stroke="#aa4a2a" strokeWidth="1" />
      <text x="755" y="78" textAnchor="middle" fill="#e08060" fontSize="10" fontWeight="700">S3</text>
      <text x="755" y="94" textAnchor="middle" fill="#e0b090" fontSize="8">{l.s3state}</text>
      <text x="755" y="108" textAnchor="middle" fill="#e0b090" fontSize="8">Versioning + encryption</text>

      {/* DynamoDB */}
      <rect x="686" y="136" width="138" height="64" rx="8" fill="#3a2a1a" stroke="#aa4a2a" strokeWidth="1" />
      <text x="755" y="156" textAnchor="middle" fill="#e08060" fontSize="10" fontWeight="700">DynamoDB</text>
      <text x="755" y="172" textAnchor="middle" fill="#e0b090" fontSize="8">{l.dynamo}</text>
      <text x="755" y="186" textAnchor="middle" fill="#e0b090" fontSize="8">LockID key</text>

      {/* State → Modules arrow */}
      <line x1="670" y1="100" x2="650" y2="100" stroke="#aa4a2a" strokeWidth="1.5" markerEnd="url(#arrOrange)" />
      <text x="660" y="94" textAnchor="middle" fill="#aa4a2a" fontSize="8">state</text>

      {/* Arrow defs */}
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#6c6cff" />
        </marker>
        <marker id="arrOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#aa4a2a" />
        </marker>
      </defs>
    </svg>
  );
};

export default TerraformDiagram;
