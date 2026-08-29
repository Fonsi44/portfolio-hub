export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Fonsi · Built with Next.js & Tailwind
        </p>
        <p className="font-mono text-xs">
          <a
            href="https://github.com/Fonsi44/portfolio-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-300"
          >
            github.com/Fonsi44/portfolio-hub
          </a>
        </p>
      </div>
    </footer>
  );
}
