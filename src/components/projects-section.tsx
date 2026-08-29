"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FlaskConical } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/site";
import {
  flagshipProjects,
  labProjects,
  productionProjects,
} from "@/lib/site";

function ScopeBadges({ badges }: { badges?: string[] }) {
  if (!badges?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-white/10 bg-zinc-950/80 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

function FlagshipCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-8 md:p-10"
      style={{ backgroundImage: `linear-gradient(135deg, transparent 60%)` }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
        aria-hidden="true"
      />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl" role="img" aria-label={project.title}>
              {project.icon}
            </span>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 font-mono text-[10px] tracking-widest text-cyan-400 uppercase">
              Producto flagship
            </span>
          </div>
          <h3 className="text-3xl font-bold text-white md:text-4xl">{project.title}</h3>
          <p className="mt-1 text-lg text-cyan-400/90">{project.subtitle}</p>
          <div className="mt-3">
            <ScopeBadges badges={project.scopeBadges} />
          </div>
          <p className="mt-4 text-pretty leading-relaxed text-zinc-300">{project.description}</p>
          <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="font-mono text-[11px] text-zinc-500">
                → {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:from-cyan-300 hover:to-cyan-400"
          >
            Abrir producto
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-cyan-500/30 hover:text-cyan-300"
          >
            Case study
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`flex flex-col rounded-2xl border border-white/8 bg-gradient-to-br ${project.gradient} p-5 transition hover:border-white/15`}
    >
      <span className="text-2xl">{project.icon}</span>
      <h3 className="mt-2 font-semibold text-white">{project.title}</h3>
      <div className="mt-2">
        <ScopeBadges badges={project.scopeBadges} />
      </div>
      <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-400"
      >
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
        Demo
      </a>
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
            Productos
          </p>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            Pocos proyectos. Mucha profundidad.
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-zinc-400">
            Cuatro productos interactivos con IA real (Gemini 3.6 Flash) — no demos vacíos
            superficiales. Cada una con identidad propia, backend live y flujos completos.
          </p>
        </div>

        <div className="space-y-8">
          {flagshipProjects.map((project, i) => (
            <FlagshipCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {productionProjects.length > 0 && (
          <div className="mt-20">
            <p className="mb-6 font-mono text-xs tracking-[0.3em] text-emerald-400/70 uppercase">
              En producción
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {productionProjects.map((project) => (
                <CompactCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}

        {labProjects.length > 0 && (
          <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div className="mb-4 flex items-center gap-2 text-zinc-500">
              <FlaskConical className="h-4 w-4" aria-hidden="true" />
              <span className="font-mono text-xs tracking-widest uppercase">Lab · experimentos</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {labProjects.map((project) => (
                <CompactCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
