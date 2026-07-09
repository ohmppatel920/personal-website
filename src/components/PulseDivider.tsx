const W = 1200;
const BASE = 20;

// One recognizable heartbeat centered at cx, on a y=20 baseline.
function beat(cx: number) {
  return [
    `L ${cx - 44} ${BASE}`,
    `L ${cx - 14} ${BASE}`,
    `L ${cx - 8} ${BASE - 4}`,
    `L ${cx - 2} ${BASE + 5}`,
    `L ${cx + 2} ${BASE - 16}`, // R peak
    `L ${cx + 8} ${BASE + 15}`, // S trough
    `L ${cx + 12} ${BASE - 2}`,
    `L ${cx + 18} ${BASE}`,
  ].join(" ");
}

const beats = [150, 450, 750, 1050];
const d =
  `M 0 ${BASE} ` +
  beats.map(beat).join(" ") +
  ` L ${W} ${BASE}`;

export default function PulseDivider({ label }: { label?: string }) {
  return (
    <div className="pulse" role="separator" aria-hidden>
      <svg
        className="pulse-svg"
        viewBox={`0 0 ${W} 40`}
        preserveAspectRatio="none"
      >
        <path className="pulse-base" d={d} pathLength={1} />
        <path className="pulse-scan" d={d} pathLength={1} />
      </svg>
      {label ? <span className="pulse-label mono">{label}</span> : null}
    </div>
  );
}
