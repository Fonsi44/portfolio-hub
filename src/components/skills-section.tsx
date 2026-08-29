"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/projects";

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 font-mono text-sm tracking-widest text-amber-400/80">
            STACK
          </p>
          <h2 className="text-3xl font-bold text-white">Tecnologías</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-full border border-white/8 bg-zinc-900/60 px-4 py-2 font-mono text-sm text-zinc-300 transition hover:border-amber-400/30 hover:text-amber-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
