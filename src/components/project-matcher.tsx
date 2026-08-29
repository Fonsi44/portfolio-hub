"use client";

import { Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { getProject } from "@/lib/site";

type MatchResult = {
  flagshipSlug: string;
  labSlug?: string;
  reasoning: string;
  quickStart: string;
};

export function ProjectMatcher() {
  const [role, setRole] = useState("");
  const [useCase, setUseCase] = useState("");
  const [stack, setStack] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onMatch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, useCase, stackPreference: stack }),
      });
      const data = (await res.json()) as MatchResult & { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  }

  const flagship = result ? getProject(result.flagshipSlug) : null;
  const lab = result?.labSlug ? getProject(result.labSlug) : null;

  return (
    <section className="border-y border-white/5 bg-zinc-950/40 px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-400/70 uppercase">
            Project matcher
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">¿Qué demo encaja contigo?</h2>
          <p className="mt-2 text-sm text-zinc-500">
            3 respuestas → Gemini recomienda flagship + lab con reasoning visible
          </p>
        </div>

        <form onSubmit={onMatch} className="space-y-4">
          {[
            { label: "Tu rol", value: role, set: setRole, ph: "Ej. CTO, PM, reclutador" },
            { label: "Caso de uso", value: useCase, set: setUseCase, ph: "Ej. triage soporte con IA" },
            { label: "Stack (opcional)", value: stack, set: setStack, ph: "Ej. Next.js, Gemini" },
          ].map(({ label, value, set, ph }) => (
            <div key={label}>
              <label className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {label}
              </label>
              <input
                value={value}
                onChange={(e) => set(e.target.value)}
                placeholder={ph}
                className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none"
              />
            </div>
          ))}
          <button
            type="submit"
            disabled={loading || !role.trim() || !useCase.trim()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-4 py-3 font-mono text-sm text-cyan-300 ring-1 ring-cyan-500/30 transition hover:from-cyan-500/30 disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {loading ? "Analizando…" : "Recomendar demos"}
          </button>
        </form>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        {result && flagship && (
          <div className="mt-8 space-y-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
            <p className="text-sm leading-relaxed text-zinc-300">{result.reasoning}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={flagship.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-cyan-500/30 bg-zinc-950 px-4 py-2 font-mono text-xs text-cyan-300 hover:bg-zinc-900"
              >
                {flagship.icon} {flagship.title} →
              </a>
              {lab && (
                <a
                  href={lab.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-2 font-mono text-xs text-zinc-400 hover:border-violet-500/30"
                >
                  {lab.icon} {lab.title} (lab) →
                </a>
              )}
            </div>
            <p className="font-mono text-[10px] text-zinc-500">{result.quickStart}</p>
          </div>
        )}
      </div>
    </section>
  );
}
