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
    coursework:
      "Data Structures & Algorithms · Systems · Machine Learning · Applied Mathematics",
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
    sub: "Data & Software Intern",
    dates: "May 2026 – Present",
    blurb:
      "Developed an internal application serving scientists across the department with data collation, integration, and analysis. Built and deployed an LLM-powered extraction pipeline to substantially reduce manual data-review time.",
    tags: ["Python", "FastAPI", "LLM APIs", "Backend"],
    image: "/projects/lilly.jpg",
    imgPos: "center",
  },
  {
    kind: "Experience",
    title: "Yale — AMGEN Scholar",
    sub: "Engineering Researcher · data pipelines",
    dates: "Summer 2024 & 2025",
    blurb:
      "Built a Python / FlowKit data pipeline to process high-dimensional flow-cytometry (.fcs) files, quantifying and visualizing 8 markers across experimental conditions — surfacing trends that drove follow-up experiments. Full ABRCMS travel award; Springer Nature co-author (under review).",
    tags: ["Python", "FlowKit", "Data Pipelines", "Data Viz"],
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
    links: [
      {
        label: "Championship article",
        href: "https://www.browndailyherald.com/article/2026/04/mens-club-volleyball-crowned-d1aaa-national-champions-in-historic-win",
      },
      { label: "Instagram", href: "https://www.instagram.com/brownmensvolleyball" },
    ],
  },
  {
    kind: "Project",
    title: "sideOut — Jump Lab",
    sub: "Solo build · computer vision",
    dates: "2026",
    blurb:
      "Turns one side-view phone video into a full jump readout: MediaPipe pose estimation (33 points/frame) extracts height, reach, approach velocity, and load/takeoff/landing timing as an annotated skeleton overlay. Shipped like a product — fully typed, 87%-covered test suite, Docker, CI/CD; local-first, no cloud.",
    tags: ["Python", "Computer Vision", "MediaPipe", "OpenCV", "pytest · CI/CD"],
    image: "/projects/sideout.jpg",
    imgPos: "center 62%",
    links: [
      { label: "Live demo", href: "https://ohmppatel920.github.io/sideout/" },
      { label: "GitHub", href: "https://github.com/ohmppatel920/sideout" },
    ],
  },
  {
    kind: "Project",
    title: "What a Pill Is Worth",
    sub: "Self-initiated pricing POV · product strategy",
    dates: "2026",
    blurb:
      "A value-based pricing point of view: how should the first oral GLP-1s be priced against the injectables that built the obesity market? Decomposes the value drivers — efficacy gap, convenience, access, cost-to-serve — into an illustrative price ceiling, then argues for a volume/access play priced below it. Built entirely from public sources; every figure illustrative and tied to a named analog.",
    tags: ["Product Strategy", "Pricing", "Market Analysis", "Segmentation"],
    image: "/projects/glp1-pricing.jpg",
    links: [{ label: "Read the deck", href: "/Oral-GLP1-Pricing.pdf" }],
  },
  {
    kind: "Project",
    title: "RAG Evaluation Harness",
    sub: "Solo build · LLM / retrieval systems",
    dates: "2025",
    blurb:
      "A benchmarking harness over SEC 10-K filings that isolates retrieval vs. generation failure modes so a RAG pipeline can be tuned on evidence, not vibes. Benchmarked 6+ configs (chunk size, embedding model, top-k) on a 30-question eval set; a cross-encoder reranker gave the biggest single-step gain in recall and faithfulness.",
    tags: ["ChromaDB", "RAGAS", "DeepEval", "Gemini API", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/ohmppatel920/rag-eval-harness" },
    ],
    graphic: "rag",
  },
  {
    kind: "Project",
    title: "This Site",
    sub: "Solo build · design + front-end",
    dates: "2026",
    blurb:
      "The portfolio you're reading — designed and built from scratch: an immersive dark canvas, editorial typography, a magnetic custom cursor, scroll-reveal motion, and a signature commit-line divider. Shipped end to end and deployed on Vercel.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    links: [
      { label: "GitHub", href: "https://github.com/ohmppatel920/personal-website" },
      { label: "Live", href: "https://ohmppatel.dev" },
    ],
    graphic: "code",
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

// Remaining roles, kept compact — reverse-chronological.
export const moreExperience: MoreItem[] = [
  { org: "University Orthopedics", role: "X-Ray Reading Shadow", dates: "Spring 2025" },
  { org: "Yale School of Medicine", role: "SURF Scholar — Miller-Jensen Lab", dates: "Summer 2024" },
  { org: "Rhode Island Hospital", role: "Pediatric Clinic Volunteer & Shadow", dates: "2023–24" },
  { org: "Stony Brook University", role: "Materials Researcher (published abstract)", dates: "Summer 2022" },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "TypeScript", "Java", "SQL", "MATLAB"] },
  {
    label: "Frameworks & Tools",
    items: ["React / Next.js", "FastAPI", "Tailwind", "Pandas", "NumPy", "Pytest", "Streamlit"],
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
