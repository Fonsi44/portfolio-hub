"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.available && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponible para trabajo
            </div>
          )}

          <p className="mb-4 font-mono text-xs tracking-[0.35em] text-cyan-400/70 uppercase">
            {site.role} · {site.location}
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
            <span className="text-balance">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {site.name}
              </span>
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400 md:text-xl">
            {site.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:from-cyan-300 hover:to-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030306]"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Explorar proyectos
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-4 border-t border-white/5 pt-10 md:gap-8"
        >
          {[
            { value: "3+", label: "Proyectos en producción" },
            { value: "Next.js 16", label: "Stack principal" },
            { value: "AI + RAG", label: "Especialización" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold tabular-nums text-white md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
