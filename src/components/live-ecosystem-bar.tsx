"use client";

import usePartySocket from "partysocket/react";
import { Activity, ChevronLeft, ChevronRight, ExternalLink, Radio, Rocket, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { AppId, PARTY_HOST, randomColor, randomName } from "@/lib/party-config";
import { flagshipProjects } from "@/lib/site";

type EcosystemUser = {
  id: string;
  name: string;
  color: string;
  app: AppId;
  section?: string;
};

type ActivityEvent = {
  id: string;
  app: AppId;
  user: string;
  action: string;
  detail?: string;
  ts: number;
};

const APP_LABELS: Record<AppId, string> = {
  hub: "Hub",
  "ai-agent": "DocuMind",
  saas: "RevOps",
  landing: "Pulse",
  collab: "Collab",
  automation: "FlowForge",
  support: "SignalDesk",
  trace: "ModelTrace",
};

const FLAGSHIP_APPS: AppId[] = ["ai-agent", "saas", "collab", "support"];

export function LiveEcosystemBar() {
  const [name] = useState(randomName);
  const [color] = useState(randomColor);
  const [users, setUsers] = useState<EcosystemUser[]>([]);
  const [activities, setActivities] = useState<ActivityEvent[]>([]);
  const [connected, setConnected] = useState(false);
  const [open, setOpen] = useState(false);
  const [narrative, setNarrative] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setOpen(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const socket = usePartySocket({
    host: PARTY_HOST,
    room: "ecosystem",
    onOpen() {
      setConnected(true);
      socket.send(
        JSON.stringify({ type: "ecosystem-join", name, color, app: "hub" as AppId }),
      );
    },
    onClose() {
      setConnected(false);
    },
    onMessage(evt) {
      const data = JSON.parse(evt.data);
      if (data.type === "ecosystem-sync") {
        setUsers(data.users);
        setActivities(data.activities);
      }
      if (data.type === "activity-new") {
        setActivities((prev) => {
          const next = [...prev.slice(-19), data.event];
          if (next.length >= 3 && next.length % 3 === 0) {
            fetch("/api/narrative", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                events: next.slice(-5).map((a: ActivityEvent) => ({
                  app: a.app,
                  user: a.user,
                  action: a.action,
                  detail: a.detail,
                })),
              }),
            })
              .then((r) => r.json())
              .then((d) => d.narrative && setNarrative(d.narrative))
              .catch(() => {});
          }
          return next;
        });
      }
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible && socket.readyState === WebSocket.OPEN) {
          socket.send(
            JSON.stringify({ type: "ecosystem-section", section: visible.target.id }),
          );
        }
      },
      { threshold: 0.3 },
    );

    ["about", "journey", "projects", "stack", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [socket]);

  const flagshipOnline = users.filter((u) => FLAGSHIP_APPS.includes(u.app)).length;

  return (
    <div
      className="fixed top-1/2 right-0 z-40 flex -translate-y-1/2 items-stretch"
      aria-label="Panel del ecosistema en vivo"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-8 flex-col items-center justify-center gap-2 rounded-l-xl border border-r-0 border-cyan-500/20 bg-zinc-950/95 py-4 text-cyan-400 shadow-lg shadow-cyan-500/5 backdrop-blur-xl transition hover:bg-zinc-900/95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030306]"
        aria-expanded={open}
        aria-controls="live-ecosystem-panel"
        aria-label={open ? "Ocultar panel live" : "Mostrar panel live"}
      >
        <Radio
          className={`h-3.5 w-3.5 ${connected ? "text-emerald-400" : "text-red-400"}`}
          aria-hidden="true"
        />
        <span
          className="font-mono text-[9px] tracking-[0.2em] uppercase [writing-mode:vertical-rl]"
          style={{ textOrientation: "mixed" }}
        >
          Live
        </span>
        {open ? (
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
        )}
      </button>

      <div
        id="live-ecosystem-panel"
        className={`overflow-hidden border border-cyan-500/20 bg-zinc-950/95 shadow-lg shadow-cyan-500/5 backdrop-blur-xl transition-[width,opacity] duration-300 ${
          open ? "w-64 opacity-100" : "pointer-events-none w-0 border-0 opacity-0"
        }`}
      >
        <div className="flex w-64 flex-col">
          <div className="border-b border-white/5 px-4 py-3">
            <div className="flex items-center gap-2">
              <Radio
                className={`h-3.5 w-3.5 ${connected ? "text-emerald-400" : "text-red-400"}`}
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] tracking-widest text-cyan-400/80 uppercase">
                Live Ecosystem
              </span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                {users.length} online
              </span>
              {flagshipOnline > 0 && (
                <span className="font-mono text-[10px] text-zinc-500">
                  {flagshipOnline} en productos
                </span>
              )}
            </div>
          </div>

          <div className="border-b border-white/5 px-3 py-3">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-zinc-600 uppercase">
              <Rocket className="h-3 w-3 text-cyan-600" aria-hidden="true" />
              Flagship
            </div>
            <div className="flex flex-col gap-1.5">
              {flagshipProjects.map((p) => (
                <a
                  key={p.slug}
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] text-zinc-400 transition hover:border-cyan-500/30 hover:text-cyan-300"
                >
                  <span className="truncate">
                    {p.icon} {p.title}
                  </span>
                  <ExternalLink className="h-3 w-3 shrink-0 opacity-50" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-b border-white/5 px-4 py-2.5">
            <div className="flex flex-col gap-1.5">
              {FLAGSHIP_APPS.map((app) => {
                const count = users.filter((u) => u.app === app).length;
                return (
                  <span
                    key={app}
                    className="flex items-center justify-between font-mono text-[10px] text-zinc-500"
                  >
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3 w-3" aria-hidden="true" />
                      {APP_LABELS[app]}
                    </span>
                    <span className="text-zinc-400">{count}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="max-h-48 overflow-y-auto px-3 py-3 scrollbar-none">
            {narrative && (
              <p className="mb-3 rounded-lg border border-violet-500/20 bg-violet-500/5 p-2 font-mono text-[10px] leading-relaxed text-violet-200">
                {narrative}
              </p>
            )}
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-zinc-600 uppercase">
              <Activity className="h-3 w-3 text-violet-400" aria-hidden="true" />
              Actividad
            </div>
            {activities.length === 0 ? (
              <p className="text-pretty font-mono text-[10px] leading-relaxed text-zinc-600">
                Abre un producto flagship — la actividad aparece aquí en vivo
              </p>
            ) : (
              <ul className="flex flex-col gap-1.5">
                {activities
                  .slice(-8)
                  .reverse()
                  .map((a) => (
                    <li
                      key={a.id}
                      className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-2 font-mono text-[10px] leading-snug text-zinc-400"
                    >
                      <span className="text-cyan-500/80">{APP_LABELS[a.app]}</span>
                      {" · "}
                      <span
                        style={{
                          color: users.find((u) => u.name === a.user)?.color ?? "#22d3ee",
                        }}
                      >
                        {a.user}
                      </span>
                      {" · "}
                      {a.action}
                      {a.detail ? `: ${a.detail.slice(0, 36)}` : ""}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
