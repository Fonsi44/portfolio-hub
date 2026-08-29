import { Code2, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
          Contacto
        </p>
        <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
          ¿Trabajamos juntos?
        </h2>
        <p className="mt-4 text-pretty text-zinc-400">
          Busco oportunidades como desarrollador full-stack. Disponible para
          proyectos remotos desde {site.location}.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:from-cyan-300 hover:to-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
            Ver GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-cyan-500/30 hover:bg-cyan-500/5 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
}
