import { Code2, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 font-mono text-sm tracking-widest text-amber-400/80">
          CONTACTO
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          ¿Trabajamos juntos?
        </h2>
        <p className="mb-10 text-zinc-400">
          Busco oportunidades como desarrollador full-stack. Disponible para
          proyectos remotos y presenciales en Honduras.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Fonsi44"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
          >
            <Code2 className="h-4 w-4" />
            Ver GitHub
          </a>
          <a
            href="mailto:fonsi@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/5"
          >
            <Mail className="h-4 w-4" />
            Enviar email
          </a>
        </div>
      </div>
    </section>
  );
}
