import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section container contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-line">Email is the easiest way to reach me.</p>
      <p className="contact-email">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>

      <footer className="footer">
        <span>© 2026 Ohm Patel · {profile.place}</span>
        <span className="footer-links">
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.links.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </span>
      </footer>
    </section>
  );
}
