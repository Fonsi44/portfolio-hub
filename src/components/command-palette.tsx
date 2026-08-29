"use client";

import { Command } from "cmdk";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
  Search,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { site, flagshipProjects, labProjects, showcaseProject } from "@/lib/site";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ open, onOpenChange }: Props) {
  const router = useRouter();

  const run = useCallback(
    (fn: () => void) => {
      onOpenChange(false);
      fn();
    },
    [onOpenChange],
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <Command
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-cyan-500/10"
        label="Command menu"
      >
        <div className="flex items-center gap-3 border-b border-white/8 px-4">
          <Search className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
          <Command.Input
            placeholder="Buscar proyectos, navegar…"
            className="flex-1 bg-transparent py-4 text-sm text-white outline-none placeholder:text-zinc-600"
            autoFocus
          />
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-lg p-1 text-zinc-500 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Cerrar menú"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <Command.List className="max-h-80 overflow-y-auto overscroll-contain p-2">
          <Command.Empty className="px-4 py-8 text-center text-sm text-zinc-500">
            Sin resultados.
          </Command.Empty>

          {showcaseProject && (
            <Command.Group heading="Proyecto entregado">
              <Command.Item
                value={`production ${showcaseProject.title} legal despacho`}
                onSelect={() => run(() => window.open(showcaseProject.liveUrl, "_blank"))}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-emerald-200 aria-selected:bg-emerald-500/10 aria-selected:text-emerald-200"
              >
                <span className="text-lg">{showcaseProject.icon}</span>
                <div className="flex-1">
                  <p className="font-medium">{showcaseProject.title}</p>
                  <p className="text-xs text-zinc-500">{showcaseProject.subtitle}</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
              </Command.Item>
              <Command.Item
                value={`case study ${showcaseProject.title}`}
                onSelect={() => run(() => router.push(`/projects/${showcaseProject.slug}`))}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-emerald-500/10"
              >
                <ArrowUpRight className="h-4 w-4 text-emerald-500/70" aria-hidden="true" />
                <span>Case study — {showcaseProject.title}</span>
              </Command.Item>
            </Command.Group>
          )}

          <Command.Group heading="Demos interactivos">
            {flagshipProjects.map((p) => (
              <Command.Item
                key={p.slug}
                value={`flagship ${p.title} ${p.subtitle}`}
                onSelect={() => run(() => window.open(p.liveUrl, "_blank"))}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-cyan-500/10 aria-selected:text-cyan-300"
              >
                <span className="text-lg">{p.icon}</span>
                <div className="flex-1">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs text-zinc-500">{p.subtitle}</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Case studies">
            {[...labProjects].map((p) => (
              <Command.Item
                key={p.slug}
                value={`${p.title} ${p.subtitle}`}
                onSelect={() => run(() => router.push(`/projects/${p.slug}`))}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-cyan-500/10 aria-selected:text-cyan-300"
              >
                <span className="text-lg">{p.icon}</span>
                <div className="flex-1">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs text-zinc-500">{p.subtitle}</p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Demos en vivo">
            {flagshipProjects.map((p) => (
              <Command.Item
                key={`live-${p.slug}`}
                value={`demo live ${p.title}`}
                onSelect={() => run(() => window.open(p.liveUrl, "_blank"))}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/5"
              >
                <ExternalLink className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                <span>Abrir {p.title}</span>
              </Command.Item>
            ))}
            <Command.Item
              value="github"
              onSelect={() => run(() => window.open(site.github, "_blank"))}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/5"
            >
              <Code2 className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              <span>GitHub — {site.name}</span>
            </Command.Item>
            <Command.Item
              value="email contacto"
              onSelect={() => run(() => (window.location.href = `mailto:${site.email}`))}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/5"
            >
              <Mail className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              <span>Enviar correo</span>
            </Command.Item>
            <Command.Item
              value="llamar telefono"
              onSelect={() => run(() => (window.location.href = `tel:${site.phoneTel}`))}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/5"
            >
              <Phone className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              <span>Llamar</span>
            </Command.Item>
            <Command.Item
              value="whatsapp"
              onSelect={() => run(() => window.open(`https://wa.me/${site.whatsapp}`, "_blank"))}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/5"
            >
              <MessageCircle className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              <span>WhatsApp</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Secciones">
            {[
              { href: "#about", label: "Sobre mí" },
              { href: "#journey", label: "Mi camino" },
              { href: "#projects", label: "Proyectos" },
              { href: "#stack", label: "Stack" },
              { href: "#contact", label: "Contacto" },
            ].map((item) => (
              <Command.Item
                key={item.href}
                value={item.label}
                onSelect={() =>
                  run(() =>
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" }),
                  )
                }
                className="cursor-pointer rounded-xl px-3 py-2 text-sm text-zinc-300 aria-selected:bg-white/5"
              >
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
