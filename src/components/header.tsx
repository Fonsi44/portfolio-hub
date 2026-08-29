"use client";

import { Code2, Mail, Search } from "lucide-react";
import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { useCommand } from "./command-provider";

export function Header() {
  const { toggle } = useCommand();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#030306]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030306]"
        >
          {site.name.toUpperCase()}
          <span className="text-zinc-600">.dev</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-cyan-500/30 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Abrir command palette"
          >
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Buscar</span>
            <kbd className="hidden rounded border border-white/10 px-1 font-mono text-[10px] sm:inline">
              ⌘K
            </kbd>
          </button>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="GitHub"
          >
            <Code2 className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 sm:block"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
