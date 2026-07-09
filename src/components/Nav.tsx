"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" data-scrolled={scrolled}>
      <a href="#top" className="nav-mark" data-hover>
        Ohm Patel<b>.</b>
      </a>
      <div className="nav-links">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
      <a
        className="nav-resume"
        href={profile.links.resume}
        target="_blank"
        rel="noopener noreferrer"
        data-hover
        data-cursor="open"
      >
        Résumé ↗
      </a>
    </nav>
  );
}
