import { work, moreExperience } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  const items = work.filter((w) => w.kind === "Experience");
  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Experience</h2>

      <div className="roles">
        {items.map((w) => (
          <Reveal key={w.title} y={12}>
            <article className="role">
              <div className="role-head">
                <h3>{w.title}</h3>
                <p className="role-sub">{w.sub}</p>
                <p className="role-dates">{w.dates}</p>
              </div>
              <div className="role-body">
                <p>{w.blurb}</p>
                {w.links && (
                  <p className="role-links">
                    {w.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="earlier">
        <p className="label">Earlier</p>
        <ul>
          {moreExperience.map((m) => (
            <li key={m.org}>
              <span>{m.role}</span>
              <span className="muted">
                {m.org}, {m.dates}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
