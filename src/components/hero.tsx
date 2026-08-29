"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm tracking-[0.3em] text-amber-400/80">
            FULL-STACK · AI AGENTS · HONDURAS
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Fonsi
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Construyo aplicaciones web de producción, agentes IA y plataformas
            SaaS con Next.js, TypeScript y PostgreSQL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
          >
            Ver proyectos
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Fonsi44"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-6 border-t border-white/5 pt-8"
        >
          {[
            { value: "3+", label: "Proyectos en producción" },
            { value: "Next.js 16", label: "Stack principal" },
            { value: "Open", label: "Disponible para trabajo" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-white md:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
