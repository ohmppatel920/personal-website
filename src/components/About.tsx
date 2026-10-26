import Image from "next/image";
import { about } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About</h2>

      <div className="about-grid">
        <Reveal y={12}>
          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="edu">
            <p className="label">Education</p>
            <p className="edu-school">{about.education.school}</p>
            {about.education.degrees.map((d) => (
              <p key={d}>{d}</p>
            ))}
            <p className="muted">
              {about.education.period} · {about.education.honor}
            </p>
            <p className="muted">Coursework: {about.education.coursework}</p>
          </div>
        </Reveal>

        <Reveal y={12} delay={0.08}>
          <figure className="about-photo">
            <Image
              src={about.photo}
              alt="Ohm on a ridge above the fog at sunset"
              width={1798}
              height={2400}
              sizes="(max-width: 860px) 100vw, 380px"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
