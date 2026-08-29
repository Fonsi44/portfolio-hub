"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink, Scale } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/site";
import { showcaseProject } from "@/lib/site";

function ScopeBadges({ badges }: { badges?: string[] }) {
  if (!badges?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300/90"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export function ProductionShowcase({ project = showcaseProject }: { project?: Project }) {
  const reduced = useReducedMotion();
  if (!project) return null;

  return (
    <section id="showcase" className="scroll-mt-24 px-6 pb-8 pt-4">
      <div className="mx-auto max-w-5xl">
        <motion.article
          initial={reduced ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-zinc-900/90 to-zinc-950 shadow-lg shadow-emerald-500/5"
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />

          <div className="relative p-8 md:p-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] tracking-widest text-emerald-300 uppercase">
                <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                Proyecto finalizado
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-zinc-400">
                <Scale className="h-3 w-3 text-emerald-400/80" aria-hidden="true" />
                Cliente real · {project.clientName}
              </span>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-5xl" role="img" aria-label={project.title}>
                    {project.icon}
                  </span>
                  <div>
                    <h2 className="text-3xl font-bold text-white md:text-5xl">{project.title}</h2>
                    <p className="mt-1 text-lg text-emerald-300/90">{project.subtitle}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <ScopeBadges badges={project.scopeBadges} />
                </div>

                <p className="text-pretty text-base leading-relaxed text-zinc-200 md:text-lg">
                  {project.description}
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 font-mono text-[11px] leading-relaxed text-zinc-400"
                    >
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400/80" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:from-emerald-300 hover:to-teal-400"
                >
                  Visitar web del despacho
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-emerald-500/30 hover:text-emerald-200"
                >
                  Ver case study
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
