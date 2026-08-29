import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

export const maxDuration = 30;

const schema = z.object({
  intent: z.enum(["hire", "collaboration", "curiosity"]),
  summary: z.string(),
  draftReply: z.string(),
});

export async function POST(req: Request) {
  try {
    const { name, interest, message } = await req.json();
    if (!message?.trim()) return Response.json({ error: "message required" }, { status: 400 });

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return Response.json({
        intent: "curiosity",
        summary: "Mock lead classification",
        draftReply: `Hola ${name ?? ""}, gracias por tu mensaje sobre ${interest ?? "IA"}. Te respondo pronto.`,
        fallback: true,
      });
    }

    const { object } = await generateObject({
      model: google("gemini-3.6-flash"),
      schema,
      prompt: `Classify this portfolio contact lead and draft a short reply for Alfons Roiget (AI builder).
Name: ${name}
Interest: ${interest}
Message: ${message}`,
    });

    return Response.json(object);
  } catch (error) {
    console.error("[contact-intent]", error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
