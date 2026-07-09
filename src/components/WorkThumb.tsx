import type { Work } from "@/data/types";

/* Deterministic hand-placed points so SSR and client match (no Math.random). */

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="thumb-svg"
      viewBox="0 0 320 190"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function PK() {
  // Concentration–time curve: rise to Cmax, then decay. Data/analytics.
  const d =
    "M 24 158 C 44 158 60 60 92 48 C 128 34 150 78 190 104 C 226 128 260 138 300 146";
  return (
    <Frame>
      <defs>
        <linearGradient id="pkfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--teal)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[40, 80, 120].map((y) => (
        <line key={y} x1="24" y1={y} x2="300" y2={y} className="thumb-grid" />
      ))}
      <line x1="24" y1="158" x2="300" y2="158" className="thumb-axis" />
      <line x1="24" y1="30" x2="24" y2="158" className="thumb-axis" />
      <path d={`${d} L 300 158 L 24 158 Z`} fill="url(#pkfill)" stroke="none" />
      <path d={d} className="thumb-line" />
      {[
        [92, 48],
        [190, 104],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3.5" className="thumb-dot-teal" />
      ))}
    </Frame>
  );
}

function RAG() {
  // Embedding scatter with a query node linked to nearest neighbours.
  const dots = [
    [50, 40], [78, 66], [40, 96], [96, 120], [70, 150], [120, 54],
    [150, 92], [176, 140], [210, 60], [244, 104], [270, 150], [300, 80],
    [130, 168], [200, 168], [256, 40], [30, 140],
  ];
  const query: [number, number] = [176, 100];
  const neighbours = [[150, 92], [210, 60], [176, 140]];
  return (
    <Frame>
      {neighbours.map(([x, y], i) => (
        <line key={i} x1={query[0]} y1={query[1]} x2={x} y2={y} className="thumb-edge" />
      ))}
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" className="thumb-dot-dim" />
      ))}
      {neighbours.map(([x, y], i) => (
        <circle key={`n${i}`} cx={x} cy={y} r="4" className="thumb-dot-teal" />
      ))}
      <circle cx={query[0]} cy={query[1]} r="7" className="thumb-dot-peri" />
      <circle cx={query[0]} cy={query[1]} r="12" className="thumb-ring-peri" />
    </Frame>
  );
}

function Cytometry() {
  // Flow-cytometry quadrant dot plot.
  const cl = (cx: number, cy: number, n: number, cls: string, spread: number) => {
    const seeds = [
      [0.2, 0.5], [-0.4, 0.1], [0.3, -0.3], [-0.1, -0.4], [0.5, 0.2],
      [-0.3, 0.4], [0.1, 0.3], [-0.5, -0.2], [0.4, -0.1], [0, 0.15],
    ];
    return seeds.slice(0, n).map(([dx, dy], i) => (
      <circle
        key={`${cls}${cx}${i}`}
        cx={cx + dx * spread}
        cy={cy + dy * spread}
        r="2.6"
        className={cls}
      />
    ));
  };
  return (
    <Frame>
      <line x1="160" y1="20" x2="160" y2="170" className="thumb-axis" />
      <line x1="24" y1="95" x2="300" y2="95" className="thumb-axis" />
      {cl(90, 135, 10, "thumb-dot-dim", 34)}
      {cl(230, 55, 10, "thumb-dot-teal", 30)}
      {cl(235, 140, 7, "thumb-dot-peri", 26)}
    </Frame>
  );
}

function Trophy() {
  return (
    <Frame>
      <g className="thumb-line" fill="none">
        <path d="M 130 60 H 190 V 78 C 190 104 172 118 160 118 C 148 118 130 104 130 78 Z" />
        <path d="M 130 66 C 112 66 108 88 126 92" />
        <path d="M 190 66 C 208 66 212 88 194 92" />
        <line x1="160" y1="118" x2="160" y2="134" />
        <path d="M 142 150 H 178 L 172 134 H 148 Z" />
      </g>
      <text x="160" y="96" className="thumb-num" textAnchor="middle">1</text>
      {[[110, 44], [214, 52], [96, 96], [226, 110], [160, 32]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.2" className="thumb-dot-teal" />
      ))}
    </Frame>
  );
}

function CodeThumb() {
  const lines = [
    [40, 60, 120], [40, 78, 180], [64, 96, 90], [64, 114, 140], [40, 132, 70],
  ];
  return (
    <Frame>
      {[[44, 40], [58, 40], [72, 40]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" className="thumb-dot-dim" />
      ))}
      {lines.map(([x, y, w], i) => (
        <rect key={i} x={x} y={y} width={w} height="6" rx="3" className={i % 2 ? "thumb-bar-peri" : "thumb-bar-teal"} />
      ))}
    </Frame>
  );
}

const MAP = {
  pk: PK,
  rag: RAG,
  cytometry: Cytometry,
  trophy: Trophy,
  code: CodeThumb,
};

export default function WorkThumb({ work }: { work: Work }) {
  if (work.image) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        className="thumb-img"
        src={work.image}
        alt=""
        loading="lazy"
        style={work.imgPos ? { objectPosition: work.imgPos } : undefined}
      />
    );
  }
  const Graphic = MAP[work.graphic ?? "code"];
  return <Graphic />;
}
