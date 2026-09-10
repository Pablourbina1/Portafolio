import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />

      <section id="projects" className="w-full border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>projects</SectionLabel>
          <h2 className="mt-1 text-2xl md:text-3xl font-semibold">
            What I&apos;ve built
          </h2>
          <p className="mt-2 text-text-muted">
            A mix of full-stack work and early game dev projects.
          </p>

          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
