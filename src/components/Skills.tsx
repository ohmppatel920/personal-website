import { skillGroups } from "@/data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-head">
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">What I work with</h2>
        </div>
        <span className="idx">04 / 05</span>
      </div>

      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={Math.min(i * 0.06, 0.24)} className="skill-group">
            <h3>{g.label}</h3>
            <div className="chip-row">
              {g.items.map((s) => (
                <span className="chip" key={s} data-hover>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
