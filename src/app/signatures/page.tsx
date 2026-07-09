import CommitLine from "@/components/signatures/CommitLine";
import SignalWave from "@/components/signatures/SignalWave";
import TerminalType from "@/components/signatures/TerminalType";
import EqualizerBars from "@/components/signatures/EqualizerBars";
import PulseDivider from "@/components/PulseDivider";

const items = [
  {
    key: "A",
    name: "Commit line / git graph",
    note: "Glow travels left→right lighting each commit node. Reads: a builder who ships.",
    el: <CommitLine label="git push" />,
  },
  {
    key: "B",
    name: "Signal / oscilloscope wave",
    note: "Traveling glow along a clean data waveform. Elegant, neutral, premium.",
    el: <SignalWave label="signal" />,
  },
  {
    key: "C",
    name: "Terminal type-out",
    note: "A prompt that types and cycles phrases with a blinking caret. Unmistakably SWE.",
    el: <TerminalType />,
  },
  {
    key: "D",
    name: "Equalizer bars",
    note: "Bars ripple in a traveling wave. Abstract, lively, brand-neutral.",
    el: <EqualizerBars />,
  },
  {
    key: "—",
    name: "Current: ECG heartbeat (to be replaced)",
    note: "The healthcare-coded one we're moving away from.",
    el: <PulseDivider label="vitals" />,
  },
];

export default function SignaturesPreview() {
  return (
    <main className="container" style={{ paddingBlock: "5rem" }}>
      <p className="eyebrow eyebrow--brown">Signature test</p>
      <h1 className="section-title" style={{ marginBottom: "0.6rem" }}>
        Pick the section divider
      </h1>
      <p style={{ color: "var(--bone-dim)", maxWidth: "60ch", marginBottom: "3.5rem" }}>
        Each keeps the traveling-glow motion. Watch them animate, then tell me the
        letter you want. (This page is temporary — I&apos;ll remove it once you pick.)
      </p>

      <div style={{ display: "grid", gap: "3.5rem" }}>
        {items.map((it) => (
          <section key={it.name}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <span
                className="mono"
                style={{
                  color: "var(--teal)",
                  fontSize: "1.1rem",
                  minWidth: "1.5rem",
                }}
              >
                {it.key}
              </span>
              <div>
                <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.3rem", margin: 0 }}>
                  {it.name}
                </h2>
                <p className="mono" style={{ color: "var(--bone-faint)", fontSize: "0.72rem", marginTop: "0.3rem" }}>
                  {it.note}
                </p>
              </div>
            </div>
            {it.el}
          </section>
        ))}
      </div>
    </main>
  );
}
