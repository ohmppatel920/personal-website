import { work, sideBuilds } from "@/data/content";
import WorkThumb from "./WorkThumb";
import Reveal from "./Reveal";

export default function Projects() {
  const items = work.filter((w) => w.kind === "Project");
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Projects</h2>
      <p className="section-note">Analysis and products I took on outside of class and work.</p>

      <div className="cards">
        {items.map((w, i) => (
          <Reveal key={w.title} y={12} className={i === 0 ? "span-2" : undefined}>
            <article className={i === 0 ? "card card--wide" : "card"}>
              <div className="card-thumb">
                <WorkThumb work={w} />
              </div>
              <div className="card-body">
                <p className="card-meta">
                  {w.sub} · {w.dates}
                </p>
                <h3>{w.title}</h3>
                <p>{w.blurb}</p>
                {w.links && (
                  <p className="card-links">
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

      <div className="side-builds">
        <p className="label">Smaller builds</p>
        <ul>
          {sideBuilds.map((b) => (
            <li key={b.title}>
              <span className="side-title">{b.title}</span>
              <span className="muted">{b.line}</span>
              {b.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
