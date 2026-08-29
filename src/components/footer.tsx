import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.fullName} · Next.js · Tailwind · Framer Motion
        </p>
        <Link
          href="https://github.com/Fonsi44/portfolio-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs transition hover:text-cyan-400 focus-visible:text-cyan-400"
        >
          github.com/Fonsi44/portfolio-hub
        </Link>
      </div>
    </footer>
  );
}
