import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";
import { projects } from "@/lib/site";

export const maxDuration = 30;

const matchSchema = z.object({
  flagshipSlug: z.string(),
  labSlug: z.string().optional(),
  reasoning: z.string(),
  quickStart: z.string(),
});

const slugs = projects.map((p) => p.slug);

function mockMatch(role: string, useCase: string) {
  const text = `${role} ${useCase}`.toLowerCase();
  if (
    text.includes("legal") ||
    text.includes("abogad") ||
    text.includes("despacho") ||
    text.includes("law") ||
    text.includes("seo corporativ")
  ) {
    return {
      flagshipSlug: "justicia-verdadera",
      labSlug: undefined,
      reasoning:
        "Pineda y Asociados es un proyecto finalizado en producción — web corporativa legal con SEO, intranet y RAG. Ideal como referencia de entrega real.",
      quickStart: "Visita pinedayasociadoshn.com y explora el blog jurídico y la calculadora de penas.",
    };
  }
  const flagship =
    useCase.toLowerCase().includes("support") || useCase.toLowerCase().includes("ticket")
      ? "ai-support-inbox"
      : useCase.toLowerCase().includes("doc")
        ? "ai-document-agent"
        : useCase.toLowerCase().includes("collab") || useCase.toLowerCase().includes("equipo")
          ? "realtime-collab"
          : "saas-dashboard";
  return {
    flagshipSlug: flagship,
    labSlug: "llm-trace-lab",
    reasoning: `Mock match for ${role} — configure GOOGLE_GENERATIVE_AI_API_KEY for live Gemini recommendations.`,
    quickStart: "Open the flagship demo and follow the on-screen guide.",
  };
}

export async function POST(req: Request) {
  try {
    const { role, useCase, stackPreference } = (await req.json()) as {
      role?: string;
      useCase?: string;
      stackPreference?: string;
    };

    if (!role?.trim() || !useCase?.trim()) {
      return Response.json({ error: "role and useCase are required" }, { status: 400 });
    }

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return Response.json(mockMatch(role, useCase));
    }

    const catalog = projects.map((p) => ({
      slug: p.slug,
      title: p.title,
      tier: p.tier,
      completed: p.completed ?? false,
      description: p.description,
      stack: p.stack,
    }));

    const { object } = await generateObject({
      model: google("gemini-3.6-flash"),
      schema: matchSchema,
      prompt: `Match a portfolio visitor to the best project(s).
Role: ${role}
Use case: ${useCase}
Stack preference: ${stackPreference ?? "any"}

Available projects:
${JSON.stringify(catalog)}

For legal/law firm/corporate SEO → prefer justicia-verdadera (completed production).
For AI demos → prefer flagship or lab slugs.

Pick flagshipSlug and optional labSlug from these slugs only: ${slugs.join(", ")}.
Provide reasoning in Spanish if inputs are Spanish.`,
    });

    if (!slugs.includes(object.flagshipSlug)) {
      return Response.json(mockMatch(role, useCase));
    }

    return Response.json(object);
  } catch (error) {
    console.error("[match] error:", error);
    const message = error instanceof Error ? error.message : "An error occurred.";
    return Response.json({ error: message }, { status: 500 });
  }
}
