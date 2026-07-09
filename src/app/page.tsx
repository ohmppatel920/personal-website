import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkGrid from "@/components/WorkGrid";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Signature from "@/components/Signature";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Signature label="about" />
        <About />
        <Signature label="experience" />
        <WorkGrid
          id="experience"
          kind="Experience"
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve <span className="serif-em">built &amp; led</span>
            </>
          }
          idx="02 / 05"
          showMore
        />
        <Signature label="projects" />
        <WorkGrid
          id="projects"
          kind="Project"
          eyebrow="Projects"
          title="Things I've shipped"
          idx="03 / 05"
        />
        <Signature label="skills" />
        <Skills />
        <Signature label="contact" />
        <Contact />
      </main>
    </>
  );
}
