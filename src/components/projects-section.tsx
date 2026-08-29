"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/site";
import { projects } from "@/lib/site";

const categoryLabels = {
  fullstack: "Full-stack",
  ai: "AI Agent",
  frontend: "Frontend",
};

const categoryColors = {
  fullstack: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  ai: "text-violet-400 border-violet-500/20 bg-violet-500/10",
  frontend: "text-sky-400 border-sky-500/20 bg-sky-500/10",
};

type Filter = "all" | Project["category"];

function ProjectLauncherCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <Link
        href={`/projects/${project.slug}`}
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br ${project.gradient} p-6 transition duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 focus-visible:ring-2 focus-visible:ring-cyan-400`}
      >
        <div className="mb-4 flex items-start justify-between">
          <span className="text-3xl" role="img" aria-label={project.title}>
            {project.icon}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[project.category]}`}
          >
            {categoryLabels[project.category]}
          </span>
        </div>

        <div className="flex-1">
          <p className="font-mono text-xs text-zinc-500">{project.year}</p>
          <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-0.5 text-sm text-cyan-400/80">{project.subtitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-black/20 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="flex items-center gap-1 text-xs font-medium text-cyan-400 opacity-0 transition group-hover:opacity-100">
            Ver case study
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1 text-xs text-zinc-400 transition hover:bg-cyan-500/10 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={`Abrir demo de ${project.title}`}
          >
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
            Demo
          </a>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "Todos" },
    { id: "ai", label: "AI" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full-stack" },
  ];

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
              Portfolio
            </p>
            <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
              Proyectos & Demos
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-zinc-400">
              Demos de agentes IA, dashboards, motion design y colaboración en
              tiempo real. Cada proyecto con estilo propio, demo live y código
              open source.
            </p>
          </div>
          <p className="font-mono text-xs text-zinc-600">
            ⌘K para navegar rápido
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                filter === f.id
                  ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                  : "border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectLauncherCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
