"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/content";
import Magnetic from "./Magnetic";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// The thesis line — split for typographic control + per-line mask reveal.
const lines: React.ReactNode[] = [
  <>I build software</>,
  <>
    people <span className="gradient-ink">use</span>,
  </>,
  <>
    and <span className="serif-em">ship it.</span>
  </>,
];

const reveal: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.15 + i * 0.11, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <header id="top" className="hero container">
      <motion.p
        className="eyebrow eyebrow--brown"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.05 }}
      >
        {profile.eyebrow}
      </motion.p>

      <h1 className="hero-headline">
        {lines.map((line, i) => (
          <span className="line-mask" key={i}>
            <motion.span
              className="line-inner"
              variants={reveal}
              custom={i}
              initial="hidden"
              animate="show"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        className="hero-intro"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {profile.intro}
      </motion.p>

      <motion.div
        className="hero-meta"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <Magnetic>
          <a
            className="btn btn--primary"
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            data-cursor="open"
          >
            Résumé <span className="arrow">↗</span>
          </a>
        </Magnetic>
        <Magnetic strength={0.25}>
          <a className="btn" href={profile.links.github} target="_blank" rel="noopener noreferrer" data-hover>
            GitHub
          </a>
        </Magnetic>
        <Magnetic strength={0.25}>
          <a className="btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" data-hover>
            LinkedIn
          </a>
        </Magnetic>
        <Magnetic strength={0.25}>
          <a className="btn" href={`mailto:${profile.email}`} data-hover>
            Email
          </a>
        </Magnetic>
      </motion.div>

      <div className="hero-scroll">
        <span>{profile.place}</span>
        <span>Scroll ↓</span>
      </div>
    </header>
  );
}
