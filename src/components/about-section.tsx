"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, MapPin, TrendingUp } from "lucide-react";
import { site } from "@/lib/site";

const traits = [
  {
    icon: TrendingUp,
    title: "Mentalidad comercial",
    text: "Sé escuchar, negociar y entender qué necesita el cliente antes de proponer una solución.",
  },
  {
    icon: Heart,
    title: "Pasión por la IA",
    text: "No paro de experimentar: agentes, automatización, creación de contenido y nuevas herramientas cada semana.",
  },
];

export function AboutSection() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
            Sobre mí
          </p>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            {site.fullName}
          </h2>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {site.location}
          </p>
          <p className="mt-6 text-pretty leading-relaxed text-zinc-400">{site.bio}</p>

          <div className="mt-8 space-y-4">
            {traits.map((trait) => (
              <div
                key={trait.title}
                className="flex gap-4 rounded-xl border border-white/5 bg-zinc-950/40 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <trait.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{trait.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">{trait.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col rounded-2xl border border-white/8 bg-zinc-950/60 p-8 backdrop-blur-sm"
        >
          <p className="text-pretty leading-relaxed text-zinc-400">{site.longBio}</p>

          <blockquote className="mt-8 border-l-2 border-cyan-500/40 pl-4">
            <p className="text-pretty text-sm italic leading-relaxed text-zinc-300">
              &ldquo;La IA no es el futuro para mí — es el presente que estoy
              construyendo, proyecto a proyecto, hasta poder dedicarme a ello al
              100%.&rdquo;
            </p>
            <footer className="mt-2 font-mono text-xs text-zinc-600">— Alfonso Roiget</footer>
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#journey"
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Ver mi camino
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-white/20 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
