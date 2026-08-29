import { projects } from "./site";

export function buildProjectsCatalog() {
  return projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    description: p.description,
    tier: p.tier,
    category: p.category,
    completed: p.completed ?? false,
    clientName: p.clientName ?? "",
    stack: p.stack.join(", "),
    liveUrl: p.liveUrl,
    scopeBadges: p.scopeBadges?.join(", ") ?? "",
    tryHint: p.tryHint ?? "",
  }));
}

export function projectsSystemPrompt() {
  const catalog = buildProjectsCatalog();
  return `You are Fonsi's portfolio concierge — helpful, concise, professional.
You know these projects (JSON):
${JSON.stringify(catalog, null, 2)}

Rules:
- For legal, law firm, SEO corporate site, or Honduras legal use cases → lead with Pineda y Asociados (justicia-verdadera) — it is a COMPLETED production project, not a demo.
- For interactive AI demos → recommend flagship/lab demos with live URLs.
- Always include markdown links: [Title](liveUrl).
- Mention scope badges honestly (Gemini API, Mock data, Proyecto finalizado, etc.).
- Respond in the same language the user writes in.
- Alfons Roiget builds AI agents, full-stack products, and real client deliveries.
- Do NOT invent features not in the catalog.`;
}
