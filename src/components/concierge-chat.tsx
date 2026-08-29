"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

function messageText(parts: { type: string; text?: string }[]) {
  return parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/concierge" }), []);

  const { messages, sendMessage, status, error } = useChat({ transport });

  const busy = status === "streaming" || status === "submitted";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text || busy) return;
    setDraft("");
    sendMessage({ text });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-zinc-950/95 px-4 py-3 font-mono text-xs text-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur-xl transition hover:border-cyan-400/50 hover:bg-zinc-900"
        aria-expanded={open}
        aria-label={open ? "Cerrar concierge" : "Abrir concierge IA"}
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        Concierge IA
      </button>

      {open && (
        <div
          className="fixed bottom-20 left-6 z-50 flex h-[min(480px,70vh)] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-950/98 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
          role="dialog"
          aria-label="Concierge IA del portfolio"
        >
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <Bot className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            <div>
              <p className="font-mono text-xs text-cyan-300">Concierge Fonsi</p>
              <p className="font-mono text-[10px] text-zinc-600">Gemini · conoce todos los demos</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <p className="text-sm text-zinc-500">
                Pregunta qué demo ver según tu caso: soporte IA, documentos, RevOps, colaboración…
              </p>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`rounded-xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-6 bg-cyan-500/10 text-cyan-100"
                    : "mr-6 border border-white/5 bg-white/[0.02] text-zinc-300"
                }`}
              >
                <p className="whitespace-pre-wrap">{messageText(m.parts)}</p>
              </div>
            ))}
            {busy && (
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Loader2 className="h-3 w-3 animate-spin" />
                Pensando…
              </div>
            )}
            {error && <p className="text-xs text-red-400">{error.message}</p>}
          </div>

          <form onSubmit={onSubmit} className="border-t border-white/5 p-3">
            <div className="flex gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="¿Qué demo me recomiendas?"
                className="flex-1 rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 font-mono text-xs text-zinc-200 placeholder:text-zinc-600 focus:border-cyan-500/40 focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy || !draft.trim()}
                className="rounded-lg bg-cyan-500/15 px-3 py-2 text-cyan-300 ring-1 ring-cyan-500/30 disabled:opacity-50"
                aria-label="Enviar"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
