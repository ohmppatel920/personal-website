const W = 1200;
const Y = 22;
const nodes = [90, 300, 520, 690, 880, 1080];

export default function CommitLine({ label }: { label?: string }) {
  return (
    <div className="sig" role="separator" aria-hidden>
      <svg className="sig-svg" viewBox={`0 0 ${W} 44`} preserveAspectRatio="none">
        <line className="cl-track" x1="0" y1={Y} x2={W} y2={Y} />
        {nodes.map((x, i) => (
          <circle
            key={x}
            className={`cl-node${i === nodes.length - 1 ? " head" : ""}`}
            cx={x}
            cy={Y}
            r={i === nodes.length - 1 ? 5.5 : 4}
            style={{ animationDelay: `${(x / W) * 4.2}s` }}
          />
        ))}
        <circle className="cl-glow" cx="0" cy={Y} r="4" />
      </svg>
      {label ? <span className="sig-label">{label}</span> : null}
    </div>
  );
}
