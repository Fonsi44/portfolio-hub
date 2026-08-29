"use client";

import { ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";

type Props = {
  url: string;
  title: string;
  hint?: string;
};

export function ProjectLivePreview({ url, title, hint }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            Live preview
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 hover:text-cyan-300"
        >
          Abrir pantalla completa
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
      <div className="relative aspect-[16/10] w-full bg-zinc-900">
        {!loaded && !blocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-cyan-500/50" aria-hidden="true" />
          </div>
        )}
        {blocked ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-sm text-zinc-400">
              Preview embebido no disponible — abre la demo en una pestaña nueva.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-zinc-950"
            >
              Abrir {title}
            </a>
          </div>
        ) : (
          <iframe
            src={url}
            title={`Preview de ${title}`}
            className="h-full w-full border-0"
            onLoad={() => setLoaded(true)}
            onError={() => setBlocked(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        )}
      </div>
      {hint && (
        <p className="border-t border-white/5 px-4 py-3 font-mono text-[11px] text-zinc-500">
          💡 {hint}
        </p>
      )}
    </div>
  );
}
