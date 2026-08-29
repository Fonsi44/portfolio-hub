"use client";

import usePartySocket from "partysocket/react";
import { Activity, ExternalLink, Radio, Rocket, Users } from "lucide-react";
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
};

const FLAGSHIP_APPS: AppId[] = ["ai-agent", "saas", "collab"];

export function LiveEcosystemBar() {
  const [name] = useState(randomName);
  const [color] = useState(randomColor);
  const [users, setUsers] = useState<EcosystemUser[]>([]);
  const [activities, setActivities] = useState<ActivityEvent[]>([]);
  const [connected, setConnected] = useState(false);
  const [expanded, setExpanded] = useState(true);

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
        setActivities((prev) => [...prev.slice(-19), data.event]);
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
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2">
      <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-950/95 shadow-lg shadow-cyan-500/5 backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 px-4 py-2">
          <div className="flex items-center gap-2">
            <Radio
              className={`h-3.5 w-3.5 ${connected ? "text-emerald-400" : "text-red-400"}`}
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] tracking-widest text-cyan-400/80 uppercase">
              Live Ecosystem
            </span>
            <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
              {users.length} online
            </span>
            {flagshipOnline > 0 && (
              <span className="hidden font-mono text-[10px] text-zinc-500 sm:inline">
                · {flagshipOnline} en productos
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <Rocket className="mr-1 hidden h-3 w-3 text-cyan-600 sm:block" aria-hidden="true" />
            {flagshipProjects.map((p) => (
              <a
                key={p.slug}
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] text-zinc-400 transition hover:border-cyan-500/30 hover:text-cyan-300"
              >
                {p.icon} {p.title}
                <ExternalLink className="h-2.5 w-2.5 opacity-50" aria-hidden="true" />
              </a>
            ))}
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="ml-1 font-mono text-[9px] text-zinc-600 hover:text-zinc-400"
            >
              {expanded ? "−" : "+"}
            </button>
          </div>
        </div>
        {expanded && (
          <>
            <div className="hidden items-center gap-3 border-b border-white/5 px-4 py-1.5 sm:flex">
              {FLAGSHIP_APPS.map((app) => {
                const count = users.filter((u) => u.app === app).length;
                return (
                  <span key={app} className="flex items-center gap-1 font-mono text-[10px] text-zinc-500">
                    <Users className="h-3 w-3" aria-hidden="true" />
                    {APP_LABELS[app]}: {count}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto px-4 py-2 scrollbar-none">
              <Activity className="h-3.5 w-3.5 shrink-0 text-violet-400" aria-hidden="true" />
              {activities.length === 0 ? (
                <span className="font-mono text-[10px] text-zinc-600">
                  Abre un producto flagship — la actividad aparece aquí en vivo
                </span>
              ) : (
                activities.slice(-6).map((a) => (
                  <span
                    key={a.id}
                    className="shrink-0 rounded-full border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-zinc-400"
                  >
                    <span className="text-cyan-500/80">{APP_LABELS[a.app]}</span>
                    {" · "}
                    <span style={{ color: users.find((u) => u.name === a.user)?.color ?? "#22d3ee" }}>
                      {a.user}
                    </span>
                    {" · "}
                    {a.action}
                    {a.detail ? `: ${a.detail.slice(0, 40)}` : ""}
                  </span>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
