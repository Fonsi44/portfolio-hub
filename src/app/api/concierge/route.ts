import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { projectsSystemPrompt } from "@/lib/projects-context";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = (await req.json()) as { messages: UIMessage[] };

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return Response.json(
        { error: "GOOGLE_GENERATIVE_AI_API_KEY is not configured" },
        { status: 500 },
      );
    }

    const result = streamText({
      model: google("gemini-3.6-flash"),
      system: projectsSystemPrompt(),
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("[concierge] error:", error);
    const message = error instanceof Error ? error.message : "An error occurred.";
    return Response.json({ error: message }, { status: 500 });
  }
}
