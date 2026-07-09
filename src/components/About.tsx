import Image from "next/image";
import { about } from "@/data/content";
import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="section-head">
        <div>
          <p className="eyebrow">Profile</p>
          <h2 className="section-title">The short version</h2>
        </div>
        <span className="idx">01 / 05</span>
      </div>

      <div className="about-grid">
        <Reveal className="about-photo">
          <Image
            src={about.photo}
            alt="Portrait of Ohm Patel"
            width={900}
            height={1200}
            priority
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="edu">
              <p className="eyebrow">Education</p>
              <div className="edu-school">{about.education.school}</div>
              {about.education.degrees.map((d) => (
                <div className="edu-line" key={d}>
                  {d}
                </div>
              ))}
              <div className="edu-honor">
                {about.education.honor} · {about.education.period}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <div className="atmos-band">
          <ParallaxImage
            src={about.atmosphere}
            alt="Ohm above the clouds at dawn"
            width={1798}
            height={2400}
          />
          <p className="atmos-quote">
            Above the fog — where the clearest thinking happens.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
