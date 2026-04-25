const StepBadge = ({ x, y, num }) => (
  <g>
    <circle cx={x} cy={y} r={9} fill="hsl(230,60%,50%)" />
    <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">{num}</text>
  </g>
);

export default StepBadge;
