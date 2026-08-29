import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const maxDuration = 20;

export async function POST(req: Request) {
  try {
    const { events } = (await req.json()) as {
      events?: { app: string; user: string; action: string; detail?: string }[];
    };

    if (!events?.length) {
      return Response.json({ narrative: "El ecosistema está en calma — abre un demo flagship." });
    }

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      const last = events[events.length - 1];
      return Response.json({
        narrative: `${last.app}: ${last.user} ${last.action}${last.detail ? ` — ${last.detail.slice(0, 40)}` : ""}`,
        fallback: true,
      });
    }

    const { text } = await generateText({
      model: google("gemini-3.6-flash"),
      prompt: `Summarize in ONE short sentence (Spanish) what is happening across this live portfolio ecosystem:
${JSON.stringify(events.slice(-5))}`,
    });

    return Response.json({ narrative: text.trim() });
  } catch (error) {
    console.error("[narrative]", error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
