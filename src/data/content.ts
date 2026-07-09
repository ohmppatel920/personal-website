import type { Work, SkillGroup, MoreItem, Link } from "./types";

export const profile = {
  name: "Ohm Patel",
  // Builder positioning — SWE + Product, big-tech aimed. No domain lock-in.
  headline: ["I build software", "people use", "and ship it."],
  intro:
    "A Brown engineer who builds full-stack software, ships to production, and leads teams. I care about the whole arc — the systems underneath and the product people actually touch. Targeting SWE and product roles in big tech.",
  eyebrow: "Brown University · Engineering → Software & Product",
  place: "Providence, RI · Indianapolis, IN",
  email: "ohm_patel@brown.edu",
  links: {
    resume: "/Ohm-Patel_Resume.pdf",
    github: "https://github.com/ohmppatel920",
    linkedin: "https://www.linkedin.com/in/ohmppatel",
  } as Record<string, string>,
};

export const about = {
  photo: "/headshot.jpg",
  atmosphere: "/about-sunset.jpg",
  paragraphs: [
    "I like building things end to end — the data layer, the backend, the interface, and the decisions about what's worth building at all. That instinct shows up everywhere: full-stack apps and ML pipelines, but also captaining a team to a national title and running a student publication as editor-in-chief.",
    "Right now I'm a data & software engineer at Eli Lilly, shipping tools used across the department. I move fast, sweat the details, and care as much about whether a product lands with people as whether the code is clean. Next: SWE or product at a place building at scale.",
  ],
  education: {
    school: "Brown University",
    degrees: [
      "B.S. Mechanical Engineering — GPA 3.96 / 4.00",
      "M.S. Computer Science — intended, 2027–2028",
    ],
    period: "Sep 2023 – May 2028",
    honor: "APIA Nakupuna Foundation Scholarship",
  },
};

/* -------------------------------------------------------------------------
 *  WORK — split into Experience and Project cards (rendered in two sections,
 *  filtered by `kind`). Add an item by appending an object. Required: kind,
 *  title, sub, dates, blurb, tags. Optional: links[], image ("/projects/x.jpg"
 *  + optional imgPos), or graphic (designed SVG: pk|rag|cytometry|trophy|code).
 * ---------------------------------------------------------------------- */
export const work: Work[] = [
  {
    kind: "Experience",
    title: "Eli Lilly",
    sub: "Data & Software Engineering Intern",
    dates: "May 2026 – Present",
    blurb:
      "Building a full-stack app that aggregates and analyzes large datasets across 6 projects — cutting manual review time 65% — plus an LLM pipeline that structures data from unformatted reports. Shipping to the company network.",
    tags: ["Python", "FastAPI", "LLM APIs", "Full-stack"],
    image: "/projects/lilly.jpg",
    imgPos: "center",
  },
  {
    kind: "Experience",
    title: "Yale — AMGEN Scholar",
    sub: "Engineering Researcher",
    dates: "Summer 2025",
    blurb:
      "Built a Python pipeline processing high-dimensional data to quantify and visualize markers across conditions, surfacing trends that drove follow-up experiments. Full ABRCMS travel award; Springer Nature co-author (under review).",
    tags: ["Python", "Data Pipelines", "Data Viz"],
    image: "/projects/yale.jpg",
    imgPos: "left top",
  },
  {
    kind: "Experience",
    title: "Brown — UTRA Research",
    sub: "Data / Environmental Research",
    dates: "Fall 2024",
    blurb:
      "Cleaned and structured ion-chromatography data from 1,500 samples with Python / Pandas, normalizing PFOA concentrations and organizing metadata for downstream analysis across soil and sand systems.",
    tags: ["Python", "Pandas", "Data Cleaning"],
    image: "/projects/utra.jpg",
    imgPos: "center",
  },
  {
    kind: "Experience",
    title: "Brown Journal of Healthcare Advancement",
    sub: "Editor-in-Chief → Director",
    dates: "Sep 2023 – Present",
    blurb:
      "Run a student publication like a product: led editorial teams, workshops, and review pipelines across three shipped cycles; now oversee operations, logistics, and budget as Director.",
    tags: ["Leadership", "Product Ops", "Editorial"],
    image: "/projects/journal.jpg",
    links: [{ label: "Visit site", href: "https://brownhealthjournal.cargo.site" }],
  },
  {
    kind: "Experience",
    title: "Brown Men's Volleyball",
    sub: "Outside Hitter · Player → Captain",
    dates: "Sep 2023 – Present",
    blurb:
      "Captained Brown to its first-ever national championship (D1 AAA) — leading in-game tactical calls and scouting. Also ran the off-court operation: travel, budget, roster, and social that drove 500K+ views.",
    tags: ["Leadership", "Strategy", "Social · 500K+"],
    image: "/projects/volleyball.jpg",
    imgPos: "center",
  },
  {
    kind: "Project",
    title: "RAG Evaluation Harness",
    sub: "Solo build · LLM / retrieval systems",
    dates: "2025",
    blurb:
      "A benchmarking harness that isolates retrieval vs. generation failure modes so a RAG pipeline can be tuned on evidence, not vibes. Benchmarked 6+ configs across chunk size, embedding model, and top-k; a cross-encoder reranker gave the biggest gain.",
    tags: ["ChromaDB", "RAGAS", "DeepEval", "Gemini API", "Python"],
    graphic: "rag",
  },
  {
    kind: "Project",
    title: "Aero Sim Lab",
    sub: "Solo build · numerical simulation + UI",
    dates: "2024",
    blurb:
      "A physics sandbox pairing a 3-DOF rocket-trajectory simulator (RK4) with a transient heat-conduction solver — documented governing equations, tested numerical cores, and an interactive UI for fast parameter exploration.",
    tags: ["Python", "NumPy", "Streamlit", "Numerical Methods"],
    image: "/projects/aero-sim.jpg",
    links: [
      { label: "Live demo", href: "https://aero-sim-lab.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/ohmppatel920/aero-sim-lab" },
    ],
  },
];

// Remaining roles, kept compact.
export const moreExperience: MoreItem[] = [
  { org: "Yale School of Medicine", role: "SURF Scholar — Miller-Jensen Lab", dates: "Summer 2024" },
  { org: "Stony Brook University", role: "Materials Researcher (published abstract)", dates: "Summer 2022" },
  { org: "University Orthopedics", role: "X-Ray Reading Shadow", dates: "Spring 2025" },
  { org: "Rhode Island Hospital", role: "Pediatric Clinic Volunteer & Shadow", dates: "2023–24" },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "TypeScript", "Java", "SQL", "MATLAB"] },
  {
    label: "Frameworks & Tools",
    items: ["FastAPI", "Pandas", "NumPy", "Plotly", "Pytest", "Streamlit"],
  },
  {
    label: "Data · ML · LLM",
    items: ["LLM APIs", "ChromaDB", "RAGAS", "DeepEval", "Gemini API"],
  },
  {
    label: "Tools & practice",
    items: ["Git / GitHub", "FlowKit", "Product sense", "Team leadership"],
  },
];

export const navLinks: Link[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
