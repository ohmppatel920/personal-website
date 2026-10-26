export type Link = { label: string; href: string };

export type Work = {
  kind: "Experience" | "Project";
  title: string;
  /** role / org context line, e.g. "Data & Software Intern · biopharma R&D" */
  sub: string;
  dates: string;
  blurb: string;
  tags?: string[];
  links?: Link[];
  /** Screenshot/photo in /public (takes priority over `graphic`). */
  image?: string;
  /** CSS object-position for the thumbnail image (default "top center"). */
  imgPos?: string;
  /** Designed SVG thumbnail key when there's no real image. */
  graphic?: "pk" | "rag" | "cytometry" | "trophy" | "code";
};

/** Smaller builds listed under Projects as one-liners. */
export type SideBuild = {
  title: string;
  line: string;
  links: Link[];
};

export type SkillGroup = { label: string; items: string[] };

export type MoreItem = {
  org: string;
  role: string;
  dates: string;
};
