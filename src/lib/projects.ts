export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  category: "fullstack" | "ai" | "frontend";
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "justicia-verdadera",
    title: "Justicia-Verdadera",
    description:
      "Plataforma jurídica integral: SEO, blog, calculadora de penas, intranet SGIE y RAG con pgvector.",
    longDescription:
      "Proyecto de producción para despacho legal en Honduras. Incluye web pública indexable, auth JWT + 2FA TOTP, RBAC, gestión de expedientes, chat con motor de reglas local (sin LLM externo) y búsqueda semántica con pgvector en Neon PostgreSQL.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Drizzle ORM",
      "Neon PostgreSQL",
      "pgvector",
      "Vitest",
      "Playwright",
    ],
    liveUrl: "https://www.pinedayasociadoshn.com",
    repoUrl: "https://github.com/Fonsi44/Justicia-Verdadera",
    featured: true,
    category: "fullstack",
    highlights: [
      "Auth JWT + 2FA TOTP con RBAC granular",
      "RAG semántico con pgvector en producción",
      "CI completo: ESLint, TypeScript, Vitest, Playwright",
      "SEO-first: JSON-LD, metadata centralizada, IndexNow",
    ],
  },
  {
    slug: "ai-document-agent",
    title: "AI Document Agent",
    description:
      "Agente conversacional con tool calling para analizar, buscar y resumir documentos.",
    longDescription:
      "Demo de agente IA con Vercel AI SDK. El agente puede buscar en una base de documentos, extraer datos estructurados y generar resúmenes usando herramientas definidas con Zod.",
    stack: ["Next.js", "Vercel AI SDK", "OpenAI", "Zod", "TypeScript"],
    liveUrl: "https://ai-document-agent.vercel.app",
    repoUrl: "https://github.com/Fonsi44/ai-document-agent",
    featured: true,
    category: "ai",
    highlights: [
      "Tool calling con esquemas Zod tipados",
      "Streaming de respuestas en tiempo real",
      "UI de chat con historial de herramientas invocadas",
    ],
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "Dashboard product-grade con métricas, gráficos interactivos, tablas y dark mode.",
    longDescription:
      "Interfaz de administración SaaS con diseño profesional. Incluye KPI cards, gráficos de ingresos y usuarios, tabla de transacciones con filtros, y tema claro/oscuro persistente.",
    stack: ["Next.js", "shadcn/ui", "Recharts", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://saas-dashboard-gules-chi.vercel.app",
    repoUrl: "https://github.com/Fonsi44/saas-dashboard",
    featured: true,
    category: "frontend",
    highlights: [
      "Componentes shadcn/ui personalizados",
      "Gráficos interactivos con Recharts",
      "Dark mode con persistencia en localStorage",
      "Datos mock realistas para demo",
    ],
  },
];

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Drizzle ORM",
  "Vercel AI SDK",
  "RAG / pgvector",
  "JWT + 2FA",
  "Vitest",
  "Playwright",
  "GitHub Actions",
];
