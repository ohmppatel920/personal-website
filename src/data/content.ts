import type { Work, SkillGroup, MoreItem, Link } from "./types";

/* Voice note: keep this copy plain. No em dashes, no three-item rhetorical
 * lists, no "X, not Y" flourishes, no colon-then-punchline. Vary sentence
 * length. En dashes are fine inside date and number ranges only. */

export const profile = {
  name: "Ohm Patel",
  // Consulting positioning: undefined problems, real analysis, healthcare + tech.
  headline: ["I find the problem", "worth solving,", "then ship the fix."],
  intro:
    "I'm a Brown engineer, and most of what I've worked on started out undefined. Someone knew something was wrong but couldn't say what to do about it. Figuring out the actual question is the part I'm good at, and I can usually build whatever the answer turns out to require. Almost all of it has been in healthcare and technology, between R&D at Eli Lilly, two summers at Yale Medicine, and market analyses I picked up on my own.",
  eyebrow: "Brown University · Engineering · Healthcare & Technology",
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
    "I like problems that show up badly defined. Most of the work I care about started that way. At Lilly, nobody could tell me which manual workflow was costing the department the most, so I spent the first stretch interviewing people until it was obvious. Yale was two summers with no scope at all, where the hard part was choosing which questions deserved the time.",
    "After the analysis, I can usually build the thing too. I've shipped full-stack applications, data pipelines, and LLM systems that had to be reliable enough for people to trust the output. So when I recommend something, I already know roughly what it takes to build it. Nearly all of that has been in healthcare and technology.",
    "Two of the things that taught me the most don't look like work experience. I captained Brown to its first national volleyball championship, and I've spent three years running a healthcare publication that now has eight editorial teams under it. Both come down to making calls without enough information and living with them.",
  ],
  education: {
    school: "Brown University",
    degrees: ["Sc.B. Mechanical Engineering, GPA 3.96 / 4.00"],
    period: "Sep 2023 – May 2027",
    honor: "APIA Nakupuna Foundation Scholarship",
    coursework:
      "Data Structures & Algorithms · Computer Systems · Object-Oriented Programming · Differential Equations",
  },
};

/* -------------------------------------------------------------------------
 *  WORK. Split into Experience and Project cards (rendered in two sections,
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
      "Ran discovery across a biopharmaceutical R&D department to work out which manual workflow was actually costing the most, turned that into requirements, and shipped the internal application that replaced it. Manual effort dropped by about 40%. Onboarded 15 users across several drug-discovery programs, then watched what they did after launch and reworked the parts they were routing around. Worked with engineering, operations, and scientific teams from scoping through deployment.",
    tags: ["Discovery & Scoping", "Requirements", "Cross-functional", "Adoption Tracking", "LLM Pipeline"],
    image: "/projects/lilly.jpg",
    imgPos: "center",
  },
  {
    kind: "Experience",
    title: "Yale University",
    sub: "Engineering Researcher, AMGEN Scholar · Schools of Engineering & Medicine",
    dates: "Summer 2024 & 2025",
    blurb:
      "Two summers of biomedical research with no scope defined for me. I picked which questions were worth pursuing, built the Python and FlowKit pipeline that answered them, and presented to the lab at the end of each summer. The pipeline quantified 8 markers across experimental conditions. Co-author on a manuscript under review at Springer Nature, and a full ABRCMS travel award.",
    tags: ["Ambiguous Scope", "Hypothesis Testing", "Data Pipelines", "Presenting Findings"],
    image: "/projects/yale.jpg",
    imgPos: "left top",
  },
  {
    kind: "Experience",
    title: "Brown University",
    sub: "Engineering Researcher, UTRA Scholar · School of Engineering",
    dates: "Fall 2024",
    blurb:
      "Designed and ran the weekly intake and validation process for an ion-chromatography study, 150 samples a week for ten weeks. That work structured the 1,500 records every downstream analysis depended on.",
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
      "Run a student healthcare publication the way you'd run a small organization. Led 8 editorial teams through draft review across three published cycles, and now handle operations, logistics, and budget as Director.",
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
      "Captained Brown to its first D1AAA national championship. I own opponent scouting and the tactical calls during matches, plus travel, budget, and roster logistics for the program.",
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
      "Analyzed 446,614 CFPB credit-card and deposit complaints over 36 months through a reproducible pipeline that normalizes out bank-size effects. Most disputes escalate over the bank's handling of the process, which covers 74% of dispute complaints. The odds of getting relief swing from 21% to 59% depending on which issuer you're with. The deck closes on one recommendation and the metric that would show whether it worked.",
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
      "An investment point of view on three 2026 biopharma royalty ideas: radiopharmaceuticals, non-opioid pain, and cardiometabolic. I framed the three together as one portfolio, with risk spread deliberately across tiers. Everything is built on public sources with citations throughout, and it ends on the questions that would break the thesis.",
    tags: ["Healthcare Strategy", "Market Research", "Portfolio Framework", "Deck Design"],
    image: "/projects/royalty-lens.jpg",
    links: [{ label: "Read the deck", href: "/Royalty-Lens-2026.pdf" }],
  },
  {
    kind: "Project",
    title: "Cairn: Course Copilot",
    sub: "Solo build · user research, PRD, shipped product",
    dates: "2026",
    blurb:
      "Ran empathy interviews and journey-mapped how students actually pick courses during shopping period, wrote the PRD, then shipped against it. It turns Brown's roughly 5,400-section catalog into a decision by pairing constrained suggestions with a board that surfaces schedule conflicts and total workload. I built the reliability layer before anyone real touched it. Conflict detection runs deterministically outside the model, the ranker can't produce a rating that wasn't in the retrieved data, and the backend reserves inference budget before it commits to a call.",
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
    title: "sideOut: Market Analysis & Roadmap",
    sub: "Solo build · competitive analysis and product roadmap",
    dates: "2026 – Present",
    blurb:
      "Started with a feature and price comparison of Hudl, Balltime, and the open-source options against what teams actually spend, which is close to $1,200 a year. Ideation sessions with teammates narrowed it to a staged roadmap where every release stands on its own. Shipped v1 off that plan, a pose-estimation pipeline that pulls jump height, approach velocity, and load timing out of a single phone video. Fully typed, 87% test coverage, Docker, CI.",
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
      "An evaluation system for measuring how reliably an LLM answers questions about dense documents. I benchmarked six retrieval configurations against a 30-question test set and instrumented it so that a failure points back at the stage that caused it. That's the question sitting underneath any decision about whether a system is ready to deploy.",
    tags: ["AI Evaluation", "Responsible AI", "ChromaDB · RAGAS", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/ohmppatel920/rag-eval-harness" },
    ],
    graphic: "rag",
  },
  {
    kind: "Project",
    title: "This Site",
    sub: "Solo build · design and front-end",
    dates: "2026",
    blurb:
      "The portfolio you're reading, designed and built from scratch. Dark canvas, editorial typography, a magnetic custom cursor, scroll-reveal motion, and a commit-line divider I drew as a signature. Deployed on Vercel.",
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
    sub: "Solo build · numerical simulation and UI",
    dates: "2024",
    blurb:
      "A physics sandbox that pairs a 3-DOF rocket-trajectory simulator (RK4) with a transient heat-conduction solver. Governing equations are documented, the numerical cores are tested, and there's an interactive UI for moving through parameters quickly.",
    tags: ["Python", "NumPy", "Streamlit", "Numerical Methods"],
    image: "/projects/aero-sim.jpg",
    links: [
      { label: "Live demo", href: "https://aero-sim-lab.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/ohmppatel920/aero-sim-lab" },
    ],
  },
];

// Remaining roles, kept compact. Reverse-chronological.
export const moreExperience: MoreItem[] = [
  { org: "University Orthopedics", role: "X-Ray Reading Shadow", dates: "Spring 2025" },
  { org: "Yale School of Medicine", role: "SURF Scholar, Miller-Jensen Lab", dates: "Summer 2024" },
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
