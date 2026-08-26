import type { Work, SkillGroup, MoreItem, Link } from "./types";

export const profile = {
  name: "Ohm Patel",
  // Consulting positioning — structured problem-solving, healthcare × tech wedge,
  // differentiated by being able to build what the recommendation implies.
  headline: ["I find the problem", "worth solving,", "then ship the fix."],
  intro:
    "A Brown engineer who takes on problems that arrive badly defined: scope the question, get the data to say something, land on a recommendation — then build what that recommendation implies. Most of that work sits where healthcare meets technology — R&D at Eli Lilly, two summers at Yale Medicine, and self-directed market analysis across biopharma and consumer finance.",
  eyebrow: "Brown University · Engineering · Healthcare × Technology",
  place: "Providence, RI · Indianapolis, IN",
  email: "ohm_patel@brown.edu",
  links: {
    resume: "/OhmPatel_Resume.pdf",
    github: "https://github.com/ohmppatel920",
    linkedin: "https://www.linkedin.com/in/ohmppatel",
  } as Record<string, string>,
};

export const about = {
  photo: "/headshot.jpg",
  atmosphere: "/about-sunset.jpg",
  paragraphs: [
    "I like problems that show up badly defined. The work I'm proudest of started that way — nobody could tell me what to build, so I went and found out. At Lilly that meant interviewing an R&D department to learn which manual workflow was actually costing them the most. At Yale it meant two summers with no defined scope and having to choose which questions were worth the time.",
    "What I add after the analysis is that I can build the thing. Full-stack applications, data pipelines, LLM systems reliable enough that people trust the output — so a recommendation from me arrives with a working sense of what it would take to actually do it. Nearly all of that experience has been in healthcare and technology.",
    "Outside the résumé, two roles taught me the most: captaining Brown to its first national volleyball championship, and directing a healthcare publication across eight editorial teams. Both are the same job — read the situation, make the call, own the result.",
  ],
  education: {
    school: "Brown University",
    degrees: [
      "M.S. Computer Science — expected May 2028",
      "Sc.B. Mechanical Engineering — GPA 3.96 / 4.00",
    ],
    period: "Sep 2023 – May 2028",
    honor: "APIA Nakupuna Foundation Scholarship",
    coursework:
      "Data Structures & Algorithms · Computer Systems · Object-Oriented Programming · Differential Equations",
  },
};

/* -------------------------------------------------------------------------
 *  WORK — split into Experience and Project cards (rendered in two sections,
 *  filtered by `kind`). Add an item by appending an object. Required: kind,
 *  title, sub, dates, blurb, tags. Optional: links[], image ("/projects/x.jpg"
 *  + optional imgPos), or graphic (designed SVG: pk|rag|cytometry|trophy|code).
 *
 *  Ordering is deliberate: within Projects, the analysis-to-recommendation
 *  artifacts lead, then the shipped products, then the technical work.
 * ---------------------------------------------------------------------- */
export const work: Work[] = [
  {
    kind: "Experience",
    title: "Eli Lilly",
    sub: "Data & Software Intern · biopharma R&D",
    dates: "May – Aug 2026",
    blurb:
      "Ran discovery across a biopharmaceutical R&D department to find which manual workflow actually cost the most, translated that into requirements, and shipped the internal application that replaced it — manual effort fell roughly 40%. Onboarded 15 users across several drug-discovery programs, then tracked adoption after launch and reworked the parts they routed around. Worked across engineering, operations, and scientific teams from scoping through deployment.",
    tags: ["Discovery & Scoping", "Requirements", "Cross-functional", "Adoption Tracking", "LLM Pipeline"],
    image: "/projects/lilly.jpg",
    imgPos: "center",
  },
  {
    kind: "Experience",
    title: "Yale — AMGEN Scholar",
    sub: "Engineering Researcher · Schools of Engineering & Medicine",
    dates: "Summer 2024 & 2025",
    blurb:
      "Two summers of biomedical research handed over with no defined scope. Chose which questions were worth pursuing, built the Python / FlowKit pipeline that answered them — quantifying 8 markers across experimental conditions — and presented results to the lab each summer. Co-author on a manuscript under review at Springer Nature; full ABRCMS travel award.",
    tags: ["Ambiguous Scope", "Hypothesis Testing", "Data Pipelines", "Presenting Findings"],
    image: "/projects/yale.jpg",
    imgPos: "left top",
  },
  {
    kind: "Experience",
    title: "Brown — UTRA Scholar",
    sub: "Engineering Researcher · School of Engineering",
    dates: "Fall 2024",
    blurb:
      "Designed and ran the weekly intake and validation process for an ion-chromatography study — 150 samples a week over ten weeks — structuring the 1,500 records that every downstream analysis depended on.",
    tags: ["Process Design", "Data Integrity", "Python · Pandas"],
    image: "/projects/utra.jpg",
    imgPos: "center",
  },
  {
    kind: "Experience",
    title: "Brown Journal of Healthcare Advancement",
    sub: "Editor-in-Chief → Director",
    dates: "Sep 2023 – Present",
    blurb:
      "Run a student healthcare publication like a small organization: led 8 editorial teams through draft review across three published cycles, and now own operations, logistics, and budget as Director.",
    tags: ["Team Leadership", "Operations", "Budget", "Healthcare"],
    image: "/projects/journal.jpg",
    links: [{ label: "Visit site", href: "https://brownhealthjournal.cargo.site" }],
  },
  {
    kind: "Experience",
    title: "Brown Men's Volleyball",
    sub: "Outside Hitter · Player → Captain",
    dates: "Sep 2023 – Present",
    blurb:
      "Captained Brown to its first-ever D1AAA national championship. Own opponent scouting and in-game tactical calls — read the situation, make the call under time pressure, live with the result — plus travel, budget, and roster logistics for the program.",
    tags: ["Leadership", "Scouting & Strategy", "Operations", "Social · 500K+"],
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
    title: "Where Consumer Banking Breaks",
    sub: "Self-directed analysis · consumer fintech",
    dates: "2026",
    blurb:
      "Analyzed 446,614 CFPB credit-card and deposit complaints over 36 months through a reproducible pipeline that normalizes out bank-size effects. The finding: the modal card complaint is now about the dispute-resolution process, not the charge — 74% of dispute complaints — and relief odds range 21–59% across issuers facing the same issue. Closes on one evidence-backed recommendation and the metric that would tell you it worked.",
    tags: ["Market Analysis", "Consumer Fintech", "Python / pandas", "NLP Clustering", "Recommendation"],
    image: "/projects/consumer-banking.jpg",
    links: [
      { label: "Read the deck", href: "/Consumer-Banking-Breaks.pdf" },
      { label: "Explore the dashboard", href: "/consumer-banking-dashboard.html" },
    ],
  },
  {
    kind: "Project",
    title: "A Royalty Lens on 2026",
    sub: "Self-directed · biopharma market strategy",
    dates: "2026",
    blurb:
      "An investment point of view framing three 2026 biopharma royalty ideas — radiopharmaceuticals, non-opioid pain, and cardiometabolic — as one deliberately risk-spread portfolio rather than three hot drugs. Structured around a durability / risk / structure buy-box, built entirely from public cited sources, and closing on the questions that would break the thesis.",
    tags: ["Healthcare Strategy", "Market Research", "Portfolio Framework", "Deck Design"],
    image: "/projects/royalty-lens.jpg",
    links: [{ label: "Read the deck", href: "/Royalty-Lens-2026.pdf" }],
  },
  {
    kind: "Project",
    title: "Cairn — Course Copilot",
    sub: "Solo build · user research → PRD → live product",
    dates: "2026",
    blurb:
      "Ran empathy interviews and journey-mapped how students actually pick courses during shopping period, wrote the PRD, then shipped against it. The product turns Brown's ~5,400-section catalog into a decision: constrained suggestions plus a board that surfaces schedule conflicts and total workload. Built the reliability layer before real users touched it — conflict detection runs deterministically outside the model, the ranker cannot emit a rating that isn't in the retrieved data, and the backend reserves inference budget before committing spend.",
    tags: ["User Research", "PRD", "AI Guardrails", "Next.js · Serverless"],
    image: "/projects/cairn.jpg",
    imgPos: "top",
    links: [
      { label: "Live demo", href: "https://ohmppatel920.github.io/course-navigator/" },
      { label: "GitHub", href: "https://github.com/ohmppatel920/course-navigator" },
      { label: "Read the PRD", href: "https://github.com/ohmppatel920/course-navigator/blob/main/docs/PRD.md" },
    ],
  },
  {
    kind: "Project",
    title: "sideOut — Market Analysis & Roadmap",
    sub: "Solo build · competitive analysis → shipped v1",
    dates: "2026 – Present",
    blurb:
      "Started with a feature-and-price competitive analysis of Hudl, Balltime, and open-source tools against what teams actually spend — near $1,200 a year. Ideation sessions with teammates narrowed it to a staged roadmap where each release delivers standalone value. Shipped v1 off that plan: a pose-estimation pipeline that extracts jump height, approach velocity, and load timing from a single phone video. Fully typed, 87% test coverage, Docker, CI.",
    tags: ["Competitive Analysis", "Pricing", "Roadmap", "Python · MediaPipe"],
    image: "/projects/sideout.jpg",
    imgPos: "center 62%",
    links: [
      { label: "Live demo", href: "https://ohmppatel920.github.io/sideout/" },
      { label: "GitHub", href: "https://github.com/ohmppatel920/sideout" },
    ],
  },
  {
    kind: "Project",
    title: "Finding Where an LLM Stops Being Reliable",
    sub: "Independent project · AI evaluation",
    dates: "2025",
    blurb:
      "An evaluation system that measures how reliably an LLM answers questions over dense documents — benchmarking six retrieval configurations against a 30-question test set, instrumented so that a failure points at the stage that caused it. The practical question sitting underneath every “should we deploy this?” conversation.",
    tags: ["AI Evaluation", "Responsible AI", "ChromaDB · RAGAS", "Python"],
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
  {
    label: "Problem solving",
    items: [
      "Discovery & scoping",
      "Empathy interviews",
      "Journey mapping",
      "Competitive analysis",
      "Market sizing",
      "Requirements & PRDs",
    ],
  },
  {
    label: "Analysis",
    items: ["Python · Pandas · NumPy", "SQL", "Plotly", "Excel", "Reproducible pipelines"],
  },
  {
    label: "Communication",
    items: [
      "Decks & PowerPoint",
      "Technical writing",
      "Non-technical stakeholders",
      "Editorial direction",
    ],
  },
  {
    label: "AI & ML",
    items: [
      "LLM APIs",
      "Retrieval-augmented generation",
      "Model & tool evaluation",
      "Output guardrails",
      "Vector stores",
    ],
  },
  {
    label: "Building",
    items: ["TypeScript · Java", "FastAPI · Next.js", "REST & serverless", "Docker · CI/CD · Git", "Pytest"],
  },
  {
    label: "Ways of working",
    items: ["Agile & staged releases", "Sprint retrospectives", "Daily standups", "Jira · GitHub"],
  },
];

export const navLinks: Link[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
