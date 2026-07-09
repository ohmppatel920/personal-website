const W = 1200;
const MID = 22;

// A clean data/signal waveform: mixed sine harmonics with occasional flat "packets".
function buildPath() {
  const pts: string[] = [`M 0 ${MID}`];
  for (let x = 0; x <= W; x += 8) {
    const t = x / W;
    const y =
      MID +
      Math.sin(t * Math.PI * 14) * 6 +
      Math.sin(t * Math.PI * 33) * 2.5 +
      (Math.floor(t * 20) % 5 === 0 ? 3 : 0);
    pts.push(`L ${x} ${y.toFixed(2)}`);
  }
  return pts.join(" ");
}
const d = buildPath();

export default function SignalWave({ label }: { label?: string }) {
  return (
    <div className="sig" role="separator" aria-hidden>
      <svg className="sig-svg" viewBox={`0 0 ${W} 44`} preserveAspectRatio="none">
        <path className="sw-base" d={d} pathLength={1} />
        <path className="sw-scan" d={d} pathLength={1} />
      </svg>
      {label ? <span className="sig-label">{label}</span> : null}
    </div>
  );
}
