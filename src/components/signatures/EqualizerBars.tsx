const BARS = 48;

export default function EqualizerBars() {
  return (
    <div className="sig" role="separator" aria-hidden>
      <div className="eq">
        {Array.from({ length: BARS }).map((_, i) => (
          <span
            key={i}
            className="eq-bar"
            style={{ animationDelay: `${(i / BARS) * 2.4 - 2.4}s` }}
          />
        ))}
      </div>
    </div>
  );
}
