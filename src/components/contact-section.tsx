import { Code2, Mail, MessageCircle, Phone } from "lucide-react";
import { ContactFormAi } from "@/components/contact-form-ai";
import { site } from "@/lib/site";

const channels: {
  icon: typeof Mail;
  label: string;
  value?: string;
  href: string;
  cta: string;
}[] = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${site.email}`,
    cta: "Enviar correo",
  },
  {
    icon: Phone,
    label: "Teléfono",
    href: `tel:${site.phoneTel}`,
    cta: "Llamar",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: `https://wa.me/${site.whatsapp}`,
    cta: "Escribir por WhatsApp",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "Fonsi44",
    href: site.github,
    cta: "Ver repositorios",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
            Contacto
          </p>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            Hablemos de IA
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-zinc-400">
            Busco oportunidades para construir con inteligencia artificial —
            agentes, automatización, productos web. Disponible para proyectos
            remotos desde {site.location}.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.label === "GitHub" || channel.label === "WhatsApp" ? "_blank" : undefined}
              rel={
                channel.label === "GitHub" || channel.label === "WhatsApp"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex flex-col rounded-2xl border border-white/8 bg-zinc-950/60 p-6 transition hover:border-cyan-500/30 hover:bg-zinc-950/80 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div className="mb-4 inline-flex w-fit rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400 transition group-hover:bg-cyan-500/20">
                <channel.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
                {channel.label}
              </p>
              {channel.value ? (
                <p className="mt-1 text-lg font-medium text-white">{channel.value}</p>
              ) : (
                <p className="mt-1 text-lg font-medium text-white">{channel.cta}</p>
              )}
              <p className="mt-3 text-sm text-cyan-400 opacity-0 transition group-hover:opacity-100">
                {channel.cta} →
              </p>
            </a>
          ))}
        </div>
        <ContactFormAi />
      </div>
    </section>
  );
}
