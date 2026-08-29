"use client";

import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export function ContactFormAi() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ intent: string; draftReply: string } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/contact-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, interest, message }),
      });
      const data = await res.json();
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10 rounded-2xl border border-white/8 bg-zinc-950/60 p-6">
      <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
        <Mail className="h-4 w-4" />
        Contacto con intención · Gemini
      </h3>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-200"
        />
        <input
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="Interés (contratar, colaborar…)"
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-200"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Mensaje"
          className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-200"
        />
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/15 px-4 py-2.5 font-mono text-xs text-cyan-300 ring-1 ring-cyan-500/30 disabled:opacity-50"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Clasificar y ver borrador
        </button>
      </form>
      {result && (
        <div className="mt-4 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 text-sm">
          <p className="font-mono text-[10px] uppercase text-violet-400">Intent: {result.intent}</p>
          <p className="mt-2 text-zinc-400">{result.draftReply}</p>
          <a
            href={`mailto:${site.email}?subject=Portfolio contact&body=${encodeURIComponent(result.draftReply)}`}
            className="mt-3 inline-block font-mono text-xs text-cyan-400 hover:underline"
          >
            Enviar por email →
          </a>
        </div>
      )}
    </div>
  );
}
