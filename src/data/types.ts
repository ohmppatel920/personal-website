export type Link = { label: string; href: string };

export type Work = {
  kind: "Experience" | "Project";
  title: string;
  /** role / org context line, e.g. "Software Engineering Intern · Eli Lilly" */
  sub: string;
  dates: string;
  blurb: string;
  tags: string[];
  links?: Link[];
  /** Real screenshot/photo in /public (takes priority over `graphic`). */
  image?: string;
  /** CSS object-position for the thumbnail image (default "top center"). */
  imgPos?: string;
  /** Designed SVG thumbnail key when there's no real image. */
  graphic?: "pk" | "rag" | "cytometry" | "trophy" | "code";
};

export type SkillGroup = { label: string; items: string[] };

export type MoreItem = {
  org: string;
  role: string;
  dates: string;
};
