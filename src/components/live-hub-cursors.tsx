"use client";

import usePartySocket from "partysocket/react";
import { useCallback, useEffect, useState } from "react";
import { PARTY_HOST, randomColor, randomName } from "@/lib/party-config";

type Cursor = { id: string; x: number; y: number; name: string; color: string };

export function LiveHubCursors() {
  const [name] = useState(randomName);
  const [color] = useState(randomColor);
  const [cursors, setCursors] = useState<Cursor[]>([]);

  const socket = usePartySocket({
    host: PARTY_HOST,
    room: "hub",
    onOpen() {
      socket.send(JSON.stringify({ type: "join", name, color }));
    },
    onMessage(evt) {
      const data = JSON.parse(evt.data);
      if (data.type === "hub-sync") setCursors(data.cursors);
      if (data.type === "hub-cursor") {
        setCursors((prev) => [...prev.filter((c) => c.id !== data.id), data]);
      }
      if (data.type === "hub-cursor-remove") {
        setCursors((prev) => prev.filter((c) => c.id !== data.id));
      }
    },
  });

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (socket.readyState !== WebSocket.OPEN) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      socket.send(JSON.stringify({ type: "hub-cursor", x, y, name, color }));
    },
    [socket, name, color],
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  return (
    <>
      {cursors.map((cursor) => (
        <div
          key={cursor.id}
          className="pointer-events-none fixed z-[60] transition-all duration-75"
          style={{ left: `${cursor.x}vw`, top: `${cursor.y}vh` }}
        >
          <svg width="14" height="18" viewBox="0 0 16 20" fill={cursor.color} aria-hidden="true">
            <path d="M0 0L0 16L4 12L7 19L10 18L7 11L14 11Z" />
          </svg>
          <span
            className="ml-2 rounded px-1.5 py-0.5 font-mono text-[9px] text-white"
            style={{ backgroundColor: cursor.color }}
          >
            {cursor.name}
          </span>
        </div>
      ))}
    </>
  );
}
