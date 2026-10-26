"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" data-scrolled={scrolled}>
      <div className="nav-inner">
        <a href="#top" className="nav-name">
          {profile.name}
        </a>
        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="nav-resume" href={profile.links.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </div>
      </div>
    </nav>
  );
}
