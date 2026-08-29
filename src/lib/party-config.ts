export const PARTY_HOST =
  process.env.NEXT_PUBLIC_PARTYKIT_HOST ?? "portfolio-live-party.fonsi44.partykit.dev";

export type AppId = "hub" | "ai-agent" | "saas" | "landing" | "collab" | "automation" | "support" | "trace";

export const COLORS = ["#22d3ee", "#a78bfa", "#fbbf24", "#34d399", "#f472b6", "#fb923c"];

export function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export function randomName() {
  return `Visitor-${Math.floor(Math.random() * 900 + 100)}`;
}
