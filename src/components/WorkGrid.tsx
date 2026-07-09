import { work, moreExperience } from "@/data/content";
import type { Work } from "@/data/types";
import WorkThumb from "./WorkThumb";
import Reveal from "./Reveal";

function Card({ w, i }: { w: Work; i: number }) {
  return (
    <Reveal delay={Math.min(i * 0.05, 0.2)}>
      <article className="card" data-hover>
        <div className="card-thumb">
          <WorkThumb work={w} />
          <span className="card-kind">{w.kind}</span>
        </div>
        <div className="card-body">
          <h3 className="card-title">{w.title}</h3>
          <p className="card-sub">
            {w.sub} <span className="card-dot">·</span> {w.dates}
          </p>
          <p className="card-blurb">{w.blurb}</p>
          <div className="card-tags">
            {w.tags.map((t) => (
              <span className="card-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          {w.links && w.links.length > 0 && (
            <div className="card-links">
              {w.links.map((l) => (
                <a
                  key={l.href}
                  className="card-link"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  data-cursor="open"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function WorkGrid({
  id,
  kind,
  eyebrow,
  title,
  idx,
  showMore = false,
}: {
  id: string;
  kind: Work["kind"];
  eyebrow: string;
  title: React.ReactNode;
  idx: string;
  showMore?: boolean;
}) {
  const items = work.filter((w) => w.kind === kind);
  return (
    <section id={id} className="section container">
      <div className="section-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <span className="idx">{idx}</span>
      </div>

      <div className="card-grid">
        {items.map((w, i) => (
          <Card key={w.title} w={w} i={i} />
        ))}
      </div>

      {showMore && (
        <Reveal delay={0.05}>
          <div className="more">
            <span className="more-label">Also</span>
            {moreExperience.map((m) => (
              <span className="more-item" key={m.org}>
                <b>{m.role}</b> · {m.org} · {m.dates}
              </span>
            ))}
          </div>
        </Reveal>
      )}
    </section>
  );
}
