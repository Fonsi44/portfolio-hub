import { projects } from "./site";

export function buildProjectsCatalog() {
  return projects
    .filter((p) => p.slug !== "justicia-verdadera")
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      subtitle: p.subtitle,
      description: p.description,
      tier: p.tier,
      category: p.category,
      stack: p.stack.join(", "),
      liveUrl: p.liveUrl,
      scopeBadges: p.scopeBadges?.join(", ") ?? "",
      tryHint: p.tryHint ?? "",
    }));
}

export function projectsSystemPrompt() {
  const catalog = buildProjectsCatalog();
  return `You are Fonsi's portfolio concierge — helpful, concise, professional.
You know these demos (JSON):
${JSON.stringify(catalog, null, 2)}

Rules:
- Recommend the best demo(s) for the visitor's goal. Prefer 1 flagship + optionally 1 lab.
- Always include markdown links to live demos: [Title](liveUrl).
- Mention scope badges honestly (Gemini API, Mock data, etc.).
- Respond in the same language the user writes in.
- Alfons Roiget builds AI agents, full-stack products, and portfolio demos.
- Do NOT invent features not in the catalog.`;
}
