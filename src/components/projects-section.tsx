import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest text-amber-400/80">
            PORTFOLIO
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Código en producción, demos interactivas y proyectos open source que
            demuestran capacidades full-stack e IA.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
