"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
  frames: string[];
};

export function ProjectDemoLoop({ title, frames }: Props) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || frames.length <= 1) return;
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 2500);
    return () => clearInterval(id);
  }, [frames.length]);

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
        <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          Demo loop · 10s
        </span>
        <span className="font-mono text-[10px] text-zinc-600">{title}</span>
      </div>
      <div className="relative aspect-video bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <p className="relative font-mono text-sm text-cyan-300 transition-opacity duration-500">
          {frames[frame]}
        </p>
        <div className="absolute bottom-4 left-4 flex gap-1">
          {frames.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-6 rounded-full ${i === frame ? "bg-cyan-400" : "bg-zinc-700"}`}
            />
          ))}
        </div>
      </div>
      <p className="border-t border-white/5 px-4 py-2 font-mono text-[10px] text-zinc-600">
        Preview animado — abre el demo live para la experiencia completa
      </p>
    </div>
  );
}
