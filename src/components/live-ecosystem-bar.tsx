"use client";

import usePartySocket from "partysocket/react";
import { Activity, Radio, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { AppId, PARTY_HOST, randomColor, randomName } from "@/lib/party-config";

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
  hub: "Portfolio",
  "ai-agent": "DocuMind",
  saas: "SaaS Dash",
  landing: "Motion Lab",
  collab: "Collab",
};

export function LiveEcosystemBar() {
  const [name] = useState(randomName);
  const [color] = useState(randomColor);
  const [users, setUsers] = useState<EcosystemUser[]>([]);
  const [activities, setActivities] = useState<ActivityEvent[]>([]);
  const [connected, setConnected] = useState(false);

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

  const byApp = users.reduce(
    (acc, u) => {
      acc[u.app] = (acc[u.app] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
      <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-950/90 shadow-lg shadow-cyan-500/5 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/5 px-4 py-2">
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
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            {Object.entries(byApp).map(([app, count]) => (
              <span key={app} className="flex items-center gap-1 font-mono text-[10px] text-zinc-500">
                <Users className="h-3 w-3" aria-hidden="true" />
                {APP_LABELS[app as AppId] ?? app}: {count}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto px-4 py-2 scrollbar-none">
          <Activity className="h-3.5 w-3.5 shrink-0 text-violet-400" aria-hidden="true" />
          {activities.length === 0 ? (
            <span className="font-mono text-[10px] text-zinc-600">Esperando actividad en el ecosistema…</span>
          ) : (
            activities.slice(-5).map((a) => (
              <span
                key={a.id}
                className="shrink-0 rounded-full border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-zinc-400"
              >
                <span style={{ color: users.find((u) => u.name === a.user)?.color ?? "#22d3ee" }}>
                  {a.user}
                </span>
                {" · "}
                {a.action}
                {a.detail ? `: ${a.detail}` : ""}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
