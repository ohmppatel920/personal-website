import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const year = 2026;
  return (
    <section id="contact" className="contact container">
      <div className="section-head">
        <div>
          <p className="eyebrow eyebrow--brown">Contact</p>
        </div>
        <span className="idx">05 / 05</span>
      </div>

      <Reveal>
        <p className="section-title" style={{ maxWidth: "20ch" }}>
          Let&apos;s build something people actually use.
        </p>
        <p className="contact-big">
          <a href={`mailto:${profile.email}`} data-hover data-cursor="email">
            {profile.email}
          </a>
        </p>
      </Reveal>

      <div className="footer">
        <span>© {year} Ohm Patel — Providence, RI</span>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" data-hover>
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" data-hover>
            LinkedIn
          </a>
          <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" data-hover>
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
