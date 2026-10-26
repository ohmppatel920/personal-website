import type { Work, SideBuild, SkillGroup, MoreItem, Link } from "./types";

/* Voice note: keep this copy plain. No em dashes, no three-item rhetorical
 * lists, no "X, not Y" flourishes, no colon-then-punchline, no rhetorical
 * questions. Concrete numbers over adjectives. Vary sentence length.
 * En dashes are fine inside date and number ranges only. */

export const profile = {
  name: "Ohm Patel",
  eyebrow: "Brown University · Engineering · Class of 2027",
  intro:
    "I'm an engineering student at Brown, recruiting for consulting, strategy and product roles. Most of my work has been in healthcare. Lately I've also been doing my own analysis on consumer finance and credit.",
  recently: [
    { text: "Spent the summer at Eli Lilly building an internal tool for drug-discovery teams", href: "#experience" },
    { text: "Wrote a credit memo on Embecta's secured bonds", href: "/Embecta-Credit-Memo.pdf" },
    { text: "Captained Brown men's volleyball to the 2026 D1AAA national title", href: "#experience" },
  ] as { text: string; href: string }[],
  place: "Providence, RI",
  email: "ohm_patel@brown.edu",
  links: {
    resume: "/OhmPatel_Resume.pdf",
    github: "https://github.com/ohmppatel920",
    linkedin: "https://www.linkedin.com/in/ohmppatel",
  } as Record<string, string>,
};

export const about = {
  photo: "/about-sunset.jpg",
  paragraphs: [
    "I study mechanical engineering at Brown and graduate in 2027. Most of my work so far has been in healthcare, including R&D tooling at Eli Lilly and two summers of lab research at Yale.",
    "Over the past year I've taken on analysis projects of my own, on biopharma royalties, bank complaint data and a distressed medtech credit. I'm looking for consulting, strategy and product roles in healthcare, tech or finance.",
    "I can also build. When a recommendation needs a prototype or a data pipeline I usually write it myself, so I have a rough idea of the cost before I suggest it.",
    "Outside class I captain the men's volleyball team and direct the Brown Journal of Healthcare Advancement.",
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
 *  WORK. Experience renders as a list, Projects as cards with thumbnails.
 *  Required: kind, title, sub, dates, blurb. Projects also use tags, links
 *  and image ("/projects/x.jpg", optional imgPos) or graphic.
 *
 *  Project order: the analysis-to-recommendation pieces lead, then products.
 * ---------------------------------------------------------------------- */
export const work: Work[] = [
  {
    kind: "Experience",
    title: "Eli Lilly",
    sub: "Data & Software Intern, biopharma R&D",
    dates: "May – Aug 2026",
    blurb:
      "Interviewed scientists and operations staff to find which manual workflow was costing the department the most, then wrote the requirements and built the internal app that replaced it. Manual effort fell by about 40%. Rolled it out to 15 users across several drug-discovery programs and reworked the parts they were routing around.",
  },
  {
    kind: "Experience",
    title: "Yale University",
    sub: "Engineering Researcher, AMGEN Scholar",
    dates: "Summers 2024 & 2025",
    blurb:
      "Two summers in a biomedical lab with an open brief. I picked the questions, built a Python and FlowKit pipeline that quantified 8 markers across conditions, and presented the results to the lab. Co-author on a manuscript under review at Springer Nature, and an ABRCMS travel award.",
  },
  {
    kind: "Experience",
    title: "Brown Men's Volleyball",
    sub: "Captain, Outside Hitter",
    dates: "Sep 2023 – Present",
    blurb:
      "Captained the team to Brown's first D1AAA national championship in April 2026. I run opponent scouting and the tactical calls during matches, and handle travel, budget and roster logistics.",
    links: [
      {
        label: "Championship article",
        href: "https://www.browndailyherald.com/article/2026/04/mens-club-volleyball-crowned-d1aaa-national-champions-in-historic-win",
      },
    ],
  },
  {
    kind: "Experience",
    title: "Brown Journal of Healthcare Advancement",
    sub: "Editor-in-Chief, now Director",
    dates: "Sep 2023 – Present",
    blurb:
      "Led 8 editorial teams through three published issues as Editor-in-Chief. As Director I handle operations, logistics and the budget.",
    links: [{ label: "Journal site", href: "https://brownhealthjournal.cargo.site" }],
  },
  {
    kind: "Experience",
    title: "Brown University",
    sub: "Engineering Researcher, UTRA Scholar",
    dates: "Fall 2024",
    blurb:
      "Set up and ran intake and validation for an ion-chromatography study, 150 samples a week for ten weeks. The 1,500 records it produced fed every later analysis.",
  },
  {
    kind: "Project",
    title: "Embecta Credit Memo",
    sub: "High-yield credit · three-statement model",
    dates: "2026",
    blurb:
      "Embecta makes insulin pen needles, and its US sales are falling as patients switch to GLP-1s and payers push cheaper brands. I modelled the company from its 10-K and 10-Qs with a debt schedule for all four bonds and loans, then ran base, downside and stress cases. The memo recommends the 5% 2030 secured notes at about 81 and puts the break point at roughly 50% gross margin.",
    tags: ["Credit analysis", "Excel", "Healthcare"],
    image: "/projects/embecta-credit.jpg",
    imgPos: "center",
    links: [
      { label: "Memo (PDF)", href: "/Embecta-Credit-Memo.pdf" },
      { label: "Model (Excel)", href: "/Embecta-Credit-Model.xlsx" },
    ],
  },
  {
    kind: "Project",
    title: "Where Consumer Banking Breaks",
    sub: "Market analysis · consumer fintech",
    dates: "2026",
    blurb:
      "Analyzed 446,614 CFPB credit-card and deposit complaints over 36 months, adjusted for bank size. How a bank handles the dispute drives 74% of dispute complaints, and a customer's odds of getting relief run from 21% to 59% depending on the issuer. The deck ends on one recommendation and the metric that would show it worked.",
    tags: ["Market analysis", "Python", "Financial services"],
    image: "/projects/consumer-banking.jpg",
    links: [
      { label: "Deck (PDF)", href: "/Consumer-Banking-Breaks.pdf" },
      { label: "Dashboard", href: "/consumer-banking-dashboard.html" },
    ],
  },
  {
    kind: "Project",
    title: "A Royalty Lens on 2026",
    sub: "Investment view · biopharma",
    dates: "2026",
    blurb:
      "Three 2026 biopharma royalty ideas in radiopharmaceuticals, non-opioid pain and cardiometabolic disease, sized as one portfolio with the risk spread across tiers. Built on public sources and cited throughout. It closes with the questions that would change the view.",
    tags: ["Healthcare strategy", "Market research"],
    image: "/projects/royalty-lens.jpg",
    links: [{ label: "Deck (PDF)", href: "/Royalty-Lens-2026.pdf" }],
  },
  {
    kind: "Project",
    title: "Cairn",
    sub: "Product · user research to shipped app",
    dates: "2026",
    blurb:
      "Interviewed students about how they actually choose courses, wrote a PRD, and shipped a planner over Brown's roughly 5,400-section catalog. Schedule conflicts are checked in plain code outside the model, and recommendations can only cite ratings that exist in the data.",
    tags: ["User research", "PRD", "Next.js"],
    image: "/projects/cairn.jpg",
    imgPos: "top",
    links: [
      { label: "Live demo", href: "https://ohmppatel920.github.io/course-navigator/" },
      { label: "PRD", href: "https://github.com/ohmppatel920/course-navigator/blob/main/docs/PRD.md" },
    ],
  },
  {
    kind: "Project",
    title: "sideOut",
    sub: "Product · competitive analysis and roadmap",
    dates: "2026 – Present",
    blurb:
      "Compared Hudl, Balltime and the open-source options on features and price against what college teams spend, which is about $1,200 a year. Shipped the first release from that roadmap, a pose-estimation pipeline that measures jump height and approach speed from one phone video.",
    tags: ["Competitive analysis", "Roadmap", "Python"],
    image: "/projects/sideout.jpg",
    imgPos: "center 62%",
    links: [
      { label: "Live demo", href: "https://ohmppatel920.github.io/sideout/" },
      { label: "GitHub", href: "https://github.com/ohmppatel920/sideout" },
    ],
  },
];

export const sideBuilds: SideBuild[] = [
  {
    title: "LLM reliability harness",
    line: "Benchmarked six retrieval setups against a 30-question test set on SEC filings.",
    links: [{ label: "GitHub", href: "https://github.com/ohmppatel920/rag-eval-harness" }],
  },
  {
    title: "Aero Sim Lab",
    line: "Rocket-trajectory and heat-conduction simulator with an interactive UI.",
    links: [{ label: "Demo", href: "https://aero-sim-lab.streamlit.app/" }],
  },
  {
    title: "This site",
    line: "Next.js and TypeScript, hosted on Vercel.",
    links: [{ label: "GitHub", href: "https://github.com/ohmppatel920/personal-website" }],
  },
];

// Earlier roles, kept compact. Reverse-chronological.
export const moreExperience: MoreItem[] = [
  { org: "University Orthopedics", role: "X-ray reading shadow", dates: "Spring 2025" },
  { org: "Yale School of Medicine", role: "SURF Scholar, Miller-Jensen Lab", dates: "Summer 2024" },
  { org: "Rhode Island Hospital", role: "Pediatric clinic volunteer", dates: "2023–24" },
  { org: "Stony Brook University", role: "Materials researcher, published abstract", dates: "Summer 2022" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Analysis",
    items: ["Excel modelling (three-statement, debt schedules, scenarios)", "Market sizing", "Python and pandas", "SQL"],
  },
  {
    label: "Product",
    items: ["User interviews", "Journey maps", "PRDs and roadmaps", "Adoption tracking"],
  },
  {
    label: "Writing",
    items: ["Investment memos", "Decks", "Editing a journal"],
  },
  {
    label: "Technical",
    items: ["TypeScript and Next.js", "Python and FastAPI", "LLM APIs and retrieval", "Docker and CI"],
  },
];

export const navLinks: Link[] = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
