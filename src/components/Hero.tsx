import { profile } from "@/data/content";
import Reveal from "./Reveal";

const external = (href: string) => !href.startsWith("#");

export default function Hero() {
  return (
    <header id="top" className="hero container">
      <Reveal y={12}>
        <p className="kicker">{profile.eyebrow}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-intro">{profile.intro}</p>
      </Reveal>

      <Reveal y={12} delay={0.1}>
        <div className="recent">
          <p className="label">Recently</p>
          <ul>
            {profile.recently.map((r) => (
              <li key={r.text}>
                <a
                  href={r.href}
                  {...(external(r.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {r.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-actions">
          <a className="btn btn--solid" href={profile.links.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
          <a className="btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </Reveal>
    </header>
  );
}
