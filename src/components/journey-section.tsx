"use client";

import { motion, useReducedMotion } from "framer-motion";
import { journey, site } from "@/lib/site";

export function JourneySection() {
  const reduced = useReducedMotion();

  return (
    <section id="journey" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
            Mi camino
          </p>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            De ventas a agentes de IA
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-zinc-400">
            No empecé programando. Empecé vendiendo, escuchando y resolviendo
            problemas de personas reales. Esa base comercial es hoy mi ventaja
            al construir productos con IA.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-emerald-500/40 md:left-1/2 md:block md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {journey.map((step, i) => (
              <motion.article
                key={step.title}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="hidden md:block" aria-hidden="true" />

                <div
                  className={`relative rounded-2xl border border-white/8 bg-zinc-950/60 p-6 backdrop-blur-sm md:p-8 ${
                    i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div
                    className="absolute -left-[3px] top-8 hidden h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#030306] md:left-auto md:top-1/2 md:block md:-translate-y-1/2 md:translate-x-0"
                    style={
                      i % 2 === 0
                        ? { right: "-1.625rem" }
                        : { left: "-1.625rem" }
                    }
                    aria-hidden="true"
                  />

                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-hidden="true">
                      {step.icon}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-400/60 uppercase">
                      {step.era}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-violet-500/5 to-transparent p-8 text-center md:p-10"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
            Visión
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-200">
            {site.vision}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
