"use client";

import { Code2, Mail } from "lucide-react";
import Link from "next/link";

const nav = [
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contacto" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0d12]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm tracking-widest text-amber-400">
          FONSI<span className="text-zinc-500">.dev</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Fonsi44"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label="GitHub"
          >
            <Code2 className="h-4 w-4" />
          </a>
          <a
            href="mailto:fonsi@example.com"
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
