"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "building.",
  "shipping to prod.",
  "let's build something.",
  "npm run deploy",
];

export default function TerminalType() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(PHRASES[0]);
      return;
    }
    const full = PHRASES[i];
    let delay = deleting ? 45 : 85;
    if (!deleting && text === full) delay = 1500;
    if (deleting && text === "") delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setI((p) => (p + 1) % PHRASES.length);
      } else {
        setText(
          deleting
            ? full.slice(0, text.length - 1)
            : full.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, i]);

  return (
    <div className="sig" role="separator" aria-hidden>
      <div className="tt">
        <span className="tt-prompt">ohm@brown ~ %</span>
        <span>{text}</span>
        <span className="tt-caret" />
      </div>
    </div>
  );
}
