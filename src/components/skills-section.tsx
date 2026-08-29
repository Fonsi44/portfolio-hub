"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/lib/site";

export function SkillsSection() {
  const reduced = useReducedMotion();
  const doubled = [...skills, ...skills];

  return (
    <section id="stack" className="scroll-mt-24 border-y border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
            Stack
          </p>
          <h2 className="text-3xl font-bold text-white">Tecnologías</h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={reduced ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-full border border-white/8 bg-zinc-950/80 px-4 py-2 font-mono text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {!reduced && (
          <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex w-max gap-8 whitespace-nowrap"
              aria-hidden="true"
            >
              {doubled.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="font-mono text-4xl font-bold text-white/5 md:text-6xl"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
