import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Toolkit</h2>
      <dl className="skills">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <dt>{g.label}</dt>
            <dd>{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
