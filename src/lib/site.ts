import { fonsiUrls } from "./domains";

export const site = {
  name: "Fonsi",
  fullName: "Alfons Roiget",
  role: "AI Builder & Creador de contenido",
  location: "Honduras",
  domain: "fonsidev.com",
  tagline:
    "Vengo del mundo comercial. Hoy construyo agentes de IA, productos web y contenido sobre la tecnología que me apasiona.",
  bio: `Años en ventas y negociación me enseñaron a escuchar, cerrar y entender qué necesita la gente. Ahora canalizo eso en código: agentes conversacionales, plataformas en producción y demos que demuestran lo que la IA puede hacer de verdad.`,
  longBio: `Mi transición no fue de la noche a la mañana. Empecé creando contenido, probando herramientas, construyendo proyectos reales — hasta llegar a desplegar plataformas completas con auth, bases de datos y RAG en producción.

Mi objetivo es claro: dedicarme al 100% a la inteligencia artificial — agentes, automatización y productos que resuelvan problemas reales. Este portfolio es la prueba de ese camino.`,
  email: "alfonsroiget@gmail.com",
  phoneTel: "+34661911574",
  whatsapp: "34661911574",
  github: "https://github.com/Fonsi44",
  portfolio: fonsiUrls.hub,
  available: true,
  vision:
    "Trabajar a tiempo completo construyendo con IA — agentes, automatización y productos que la gente use de verdad.",
};

export type JourneyStep = {
  era: string;
  title: string;
  description: string;
  icon: string;
};

export const journey: JourneyStep[] = [
  {
    era: "Origen",
    title: "Mundo comercial",
    description:
      "Años en ventas y relación con clientes. Aprendí negociación, escucha activa y cómo traducir necesidades en soluciones concretas.",
    icon: "🤝",
  },
  {
    era: "Transición",
    title: "Descubrimiento de la IA",
    description:
      "Las IA cambiaron mi forma de trabajar. Empecé a crear contenido, experimentar con prompts, automatizar tareas y entender el potencial real de la tecnología.",
    icon: "✨",
  },
  {
    era: "Construcción",
    title: "De contenido a código",
    description:
      "Pasé de consumir IA a construirla: agentes con tool calling, dashboards, landings animadas, colaboración en tiempo real y plataformas full-stack en producción.",
    icon: "⚡",
  },
  {
    era: "Objetivo",
    title: "100% dedicado a la IA",
    description:
      "Busco oportunidades para vivir de lo que me apasiona: agentes inteligentes, automatización y productos web que integren IA de forma útil.",
    icon: "🎯",
  },
];

export type ProjectCategory = "fullstack" | "ai" | "frontend";
export type ProjectTier = "flagship" | "production" | "lab";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  tier: ProjectTier;
  category: ProjectCategory;
  highlights: string[];
  architecture?: string[];
  tryHint?: string;
  gradient: string;
  icon: string;
  year: string;
  scopeBadges?: string[];
  /** Client-facing name when the product serves a real organization */
  clientName?: string;
  /** True when the project is shipped and live — not a portfolio demo */
  completed?: boolean;
};

export const projects: Project[] = [
  {
    slug: "justicia-verdadera",
    title: "Pineda y Asociados",
    subtitle: "Justicia-Verdadera · Despacho legal digital",
    description:
      "Web corporativa sofisticada para bufete de abogados: SEO posicionado, blog jurídico, calculadora de penas, intranet SGIE y asistente con RAG en producción.",
    longDescription:
      "Proyecto finalizado y en producción para Pineda y Asociados (Honduras). Plataforma jurídica integral con identidad visual premium, indexación SEO (JSON-LD, metadata, IndexNow), blog de contenido legal, calculadora de penas pública, zona privada con auth JWT + 2FA TOTP, RBAC, gestión de expedientes y chat jurídico con búsqueda semántica pgvector en Neon PostgreSQL. CI completo: Vitest + Playwright.",
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
    tier: "production",
    category: "fullstack",
    completed: true,
    clientName: "Pineda y Asociados",
    highlights: [
      "Proyecto entregado y operativo en producción",
      "SEO-first: posicionamiento orgánico y JSON-LD",
      "Auth JWT + 2FA TOTP con RBAC granular",
      "RAG semántico con pgvector para consultas jurídicas",
    ],
    architecture: [
      "Web pública indexable + intranet SGIE aislada por rol",
      "Blog jurídico y calculadora de penas como captación SEO",
      "Motor de reglas local + pgvector en Neon PostgreSQL",
      "CI: ESLint, TypeScript, Vitest, Playwright en cada PR",
    ],
    tryHint: "Explora el blog, la calculadora de penas y la experiencia de marca del despacho",
    gradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/5",
    icon: "⚖️",
    year: "2025–2026",
    scopeBadges: ["Proyecto finalizado", "SEO posicionado", "Producción", "RAG"],
  },
  {
    slug: "ai-document-agent",
    title: "DocuMind",
    subtitle: "Enterprise Document Intelligence",
    description:
      "Agente IA con archivo documental, historial persistente, ⌘K y tool calling real con Gemini.",
    longDescription:
      "Producto flagship de IA documental: sube archivos .txt/.md/.csv, indexa en sesión, chat con historial persistente, command palette ⌘K, export markdown y preview con citas clicables. El agente usa herramientas tipadas con Gemini — no es un chat genérico.",
    stack: ["Next.js", "Vercel AI SDK", "Gemini 3.6 Flash", "Zod", "Partykit", "TypeScript"],
    liveUrl: fonsiUrls.documind,
    repoUrl: "https://github.com/Fonsi44/ai-document-agent",
    featured: true,
    tier: "flagship",
    category: "ai",
    highlights: [
      "Upload real .txt/.md/.csv en sesión",
      "⌘K — buscar docs y lanzar queries",
      "Tool cards + citas DOC-xxx clicables",
      "Summarize con Gemini 3.6 Flash",
    ],
    architecture: [
      "Next.js App Router + Vercel AI SDK streaming",
      "Gemini 3.6 Flash con 4 herramientas Zod tipadas",
      "Partykit ecosystem feed para actividad cross-app",
      "Sesiones persistidas en localStorage del cliente",
    ],
    tryHint: "Prueba ⌘K → «Resume contrato SaaS» y haz click en una cita DOC-xxx",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
    icon: "🤖",
    year: "2026",
    scopeBadges: ["Gemini API", "Live sync", "File upload", "Honest demo"],
  },
  {
    slug: "saas-dashboard",
    title: "RevOps",
    subtitle: "Revenue Operations Platform",
    description:
      "Panel B2B completo: KPIs live, clientes, billing, settings y ⌘K para navegar como en producción.",
    longDescription:
      "Plataforma de operaciones de revenue — no un dashboard de juguete. Multi-vista (dashboard, analytics, customers, billing, settings), métricas en vivo via Partykit, drawers de detalle, alertas ops, date range funcional y command palette global.",
    stack: ["Next.js", "Recharts", "Partykit", "cmdk", "TypeScript"],
    liveUrl: fonsiUrls.revops,
    repoUrl: "https://github.com/Fonsi44/saas-dashboard",
    featured: true,
    tier: "flagship",
    category: "frontend",
    highlights: [
      "⌘K — navegar, buscar clientes y TXs",
      "Billing + Settings funcionales",
      "KPIs y transacciones en vivo",
      "Customer drawer con historial",
    ],
    architecture: [
      "Shell multi-vista con Recharts y dark mode",
      "Partykit room «saas» para metric-tick y transaction-new",
      "Command palette cmdk para navegación ops",
      "Date range slicing sobre dataset mock realista",
    ],
    tryHint: "Pulsa ⌘K → busca «Acme Corp» → abre el customer drawer",
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/5",
    icon: "📊",
    year: "2026",
    scopeBadges: ["Live sync", "Mock data", "Honest demo"],
  },
  {
    slug: "animated-landing",
    title: "Pulse",
    subtitle: "Motion Analytics SaaS",
    description:
      "SaaS de telemetría motion: FPS, viewers y GPU en vivo — producto + demo GSAP integrados.",
    longDescription:
      "Pulse mide el rendimiento de landings animadas. Hero con stats live via Partykit, pricing, testimonios, marquee infinito y telemetría flotante — esta página es el producto y el portfolio demo.",
    stack: ["Next.js", "GSAP", "Partykit", "ScrollTrigger", "Tailwind v4"],
    liveUrl: fonsiUrls.pulse,
    repoUrl: "https://github.com/Fonsi44/animated-landing",
    featured: false,
    tier: "lab",
    category: "frontend",
    highlights: [
      "Telemetría live: FPS, viewers, GPU",
      "Pricing + testimonios como producto real",
      "Marquee infinito + ScrollTrigger reveals",
      "Reduced motion support",
    ],
    architecture: [
      "PerformanceObserver para LCP, CLS, INP en cliente",
      "GSAP ScrollTrigger + toggle Motion ON/OFF con baseline",
      "Partykit room «landing» para viewers y FPS feed",
      "AI Motion Report via /api/audit con métricas JSON",
    ],
    tryHint: "Pulsa «Motion OFF» y compara métricas · luego «AI Motion Report»",
    gradient: "from-orange-500/20 via-rose-500/10 to-amber-500/5",
    icon: "✨",
    year: "2026",
    scopeBadges: ["Live sync", "Real FPS", "Honest demo"],
  },
  {
    slug: "realtime-collab",
    title: "Collab Board",
    subtitle: "Realtime Team Workspace",
    description:
      "Tablero multiusuario real: salas, plantillas, undo, export JSON y cursores sincronizados.",
    longDescription:
      "Herramienta de colaboración en tiempo real via Partykit. Identidad persistente, salas compartibles, plantillas (retro, brainstorm, kanban), sticky notes con drag fluido, undo ⌘Z, export del board y presencia live. Abre dos tabs — impresiona al instante.",
    stack: ["Next.js", "Partykit", "WebSockets", "partysocket", "TypeScript"],
    liveUrl: fonsiUrls.collab,
    repoUrl: "https://github.com/Fonsi44/realtime-collab",
    featured: true,
    tier: "flagship",
    category: "fullstack",
    highlights: [
      "Plantillas: Retro, Brainstorm, Kanban",
      "Guía interactiva + centro de ayuda",
      "Import/export JSON · salas ?room=",
      "Live cursors multi-tab",
    ],
    architecture: [
      "Partykit server compartido con rooms dinámicos",
      "Pointer events para drag sin jank",
      "Sync note-add/update/move/delete/color via WebSocket",
      "Identidad persistida + plantillas de sala",
    ],
    tryHint: "Abre ?room=demo en dos tabs · aplica plantilla Sprint Retro",
    gradient: "from-rose-500/20 via-orange-500/10 to-amber-500/5",
    icon: "🔄",
    year: "2026",
    scopeBadges: ["Live sync", "WebSockets", "Honest demo"],
  },
  {
    slug: "automation-workflows",
    title: "FlowForge",
    subtitle: "AI Automation Workflows",
    description:
      "Orquestador con 3 plantillas, config por paso, payload JSON y historial de ejecuciones.",
    longDescription:
      "FlowForge: elige entre Lead Enrichment, Invoice Processing o Support Triage. Configura cada step, lanza con payload de prueba y observa Live Run Log + historial. El paso AI llama a Gemini via /api/enrich — con fallback mock si falta API key.",
    stack: ["Next.js", "Partykit", "partysocket", "TypeScript", "Tailwind v4"],
    liveUrl: fonsiUrls.flowforge,
    repoUrl: "https://github.com/Fonsi44/automation-workflows",
    featured: false,
    tier: "lab",
    category: "ai",
    highlights: [
      "3 templates: leads, invoices, support",
      "Config panel + payload JSON por run",
      "Live Run Log con duraciones e I/O",
      "Historial de ejecuciones locales",
    ],
    architecture: [
      "3 rutas Gemini: /api/enrich, classify, extract",
      "Config model + temperature pasada al API",
      "Webhook simulator dispara runs completos",
      "Traces IA → ModelTrace via localStorage compartido",
    ],
    tryHint: "Run Support Triage · abre ModelTrace y verifica el trace de FlowForge",
    gradient: "from-lime-500/20 via-green-500/10 to-emerald-500/5",
    icon: "⚙️",
    year: "2026",
    scopeBadges: ["Gemini API", "Live sync", "Mock workflow", "Honest demo"],
  },
  {
    slug: "ai-support-inbox",
    title: "SignalDesk",
    subtitle: "AI Support Inbox",
    description:
      "Bandeja de soporte con triage IA: Gemini clasifica tickets, prioriza urgencia y redacta borradores de respuesta.",
    longDescription:
      "SignalDesk centraliza tickets de soporte y usa Gemini para clasificar intención (billing, técnico, ventas), asignar prioridad y generar borradores de respuesta listos para revisión. Inbox unificado, cola por agente y feed de actividad en vivo via Partykit — pensado para equipos que quieren IA en el flujo sin perder control humano.",
    stack: ["Next.js", "Vercel AI SDK", "Gemini 3.6 Flash", "Partykit", "TypeScript"],
    liveUrl: fonsiUrls.signaldesk,
    repoUrl: "https://github.com/Fonsi44/ai-support-inbox",
    featured: true,
    tier: "flagship",
    category: "ai",
    highlights: [
      "Triage automático con Gemini",
      "Prioridad y routing por intención",
      "Borradores de respuesta editables",
      "Feed de actividad en vivo",
    ],
    architecture: [
      "Next.js App Router + Vercel AI SDK",
      "Gemini 3.6 Flash para clasificación y drafts",
      "Partykit room para presencia y eventos de cola",
      "Inbox con estados: new → triaged → assigned → resolved",
    ],
    tryHint: "Abre un ticket de prueba y revisa el borrador generado por IA",
    gradient: "from-indigo-500/20 via-blue-500/10 to-violet-500/5",
    icon: "📬",
    year: "2026",
    scopeBadges: ["Gemini API", "Live sync", "Honest demo"],
  },
  {
    slug: "llm-trace-lab",
    title: "ModelTrace",
    subtitle: "LLM Observability Lab",
    description:
      "Panel de observabilidad LLM: ejecuta prompts con Gemini, captura latencia/tokens y explora traces de sesión.",
    longDescription:
      "ModelTrace simula un dashboard de observabilidad para LLMs en producción. Ejecuta prompts reales con Gemini 3.6 Flash, registra latencia, tokens de entrada/salida y permite filtrar traces por estado. Métricas de sesión (p95, error rate) se calculan sobre runs locales — ideal para demostrar MLOps/LLMOps sin infra pesada.",
    stack: ["Next.js", "Vercel AI SDK", "Gemini 3.6 Flash", "TypeScript", "Tailwind v4"],
    liveUrl: fonsiUrls.modeltrace,
    repoUrl: "https://github.com/Fonsi44/llm-trace-lab",
    featured: false,
    tier: "lab",
    category: "ai",
    highlights: [
      "Runs reales con Gemini 3.6 Flash",
      "Traces expandibles con I/O",
      "Métricas p95 y tokens/min",
      "Filtros ok / fallback / error",
    ],
    architecture: [
      "Runs via /api/run con captura latency/tokens",
      "Cost estimator FinOps + export OTel JSON",
      "Compare traces con explicación Gemini",
      "Ingest cross-app: FlowForge, Partykit trace-new",
    ],
    tryHint: "Ejecuta un prompt · compara 2 traces · exporta OTel JSON",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
    icon: "📡",
    year: "2026",
    scopeBadges: ["Gemini API", "Session traces", "Honest demo"],
  },
];

export const skills = [
  "Vercel AI SDK",
  "Gemini 3.6 Flash",
  "Agentes IA",
  "Tool Calling",
  "RAG / pgvector",
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "GSAP / ScrollTrigger",
  "Partykit",
  "Workflow Automation",
  "PostgreSQL",
  "Playwright",
  "GitHub Actions",
];

export const navItems = [
  { href: "#about", label: "Sobre mí" },
  { href: "#journey", label: "Mi camino" },
  { href: "#showcase", label: "Proyecto legal" },
  { href: "#projects", label: "Demos IA" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contacto" },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const productionProjects = projects.filter((p) => p.tier === "production");
export const completedProjects = projects.filter((p) => p.completed);
export const labProjects = projects.filter((p) => p.tier === "lab");
export const showcaseProject = completedProjects[0] ?? productionProjects[0];
