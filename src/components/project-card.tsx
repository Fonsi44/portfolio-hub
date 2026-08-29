"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

const categoryColors = {
  fullstack: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  ai: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  frontend: "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

const categoryLabels = {
  fullstack: "Full-stack",
  ai: "AI Agent",
  frontend: "Frontend",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-zinc-900/50 p-6 transition hover:border-amber-500/30 hover:bg-zinc-900/80"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <span
            className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[project.category]}`}
          >
            {categoryLabels[project.category]}
          </span>
          <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        </div>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-amber-400/10 px-2 py-0.5 text-xs text-amber-400">
            Featured
          </span>
        )}
      </div>

      <p className="mb-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

      <ul className="mb-5 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-zinc-500">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400/60" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-400"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-500">
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      <div className="flex gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-amber-400/10 hover:text-amber-400"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Demo live
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
        >
          <Code2 className="h-3.5 w-3.5" />
          Código
        </a>
      </div>
    </motion.article>
  );
}
