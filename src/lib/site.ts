export const site = {
  name: "Fonsi",
  fullName: "Alfonso Roiget",
  role: "AI Builder & Creador de contenido",
  location: "Honduras",
  tagline:
    "Vengo del mundo comercial. Hoy construyo agentes de IA, productos web y contenido sobre la tecnología que me apasiona.",
  bio: `Años en ventas y negociación me enseñaron a escuchar, cerrar y entender qué necesita la gente. Ahora canalizo eso en código: agentes conversacionales, plataformas en producción y demos que demuestran lo que la IA puede hacer de verdad.`,
  longBio: `Mi transición no fue de la noche a la mañana. Empecé creando contenido, probando herramientas, construyendo proyectos reales — hasta llegar a desplegar plataformas completas con auth, bases de datos y RAG en producción.

Mi objetivo es claro: dedicarme al 100% a la inteligencia artificial — agentes, automatización y productos que resuelvan problemas reales. Este portfolio es la prueba de ese camino.`,
  email: "alfonsroiget@gmail.com",
  phone: "661911574",
  phoneDisplay: "661 911 574",
  phoneTel: "+34661911574",
  whatsapp: "34661911574",
  github: "https://github.com/Fonsi44",
  portfolio: "https://portfolio-hub-flax.vercel.app",
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
  category: ProjectCategory;
  highlights: string[];
  gradient: string;
  icon: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "justicia-verdadera",
    title: "Justicia-Verdadera",
    subtitle: "Legal SaaS Platform",
    description:
      "Plataforma jurídica integral: SEO, blog, calculadora de penas, intranet SGIE y RAG con pgvector.",
    longDescription:
      "Proyecto de producción para despacho legal en Honduras. Web pública indexable, auth JWT + 2FA TOTP, RBAC, gestión de expedientes, chat con motor de reglas local y búsqueda semántica con pgvector en Neon PostgreSQL. CI completo con Vitest y Playwright.",
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
      "CI: ESLint, TypeScript, Vitest, Playwright",
      "SEO-first: JSON-LD, metadata, IndexNow",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/5",
    icon: "⚖️",
    year: "2025–2026",
  },
  {
    slug: "ai-document-agent",
    title: "AI Document Agent",
    subtitle: "Tool Calling Demo",
    description:
      "Workspace documental con biblioteca de 8 archivos, preview, búsqueda scored y tool cards ricas.",
    longDescription:
      "DocuMind: agente IA con biblioteca lateral categorizada, panel de preview con acciones rápidas, corpus ampliado y resultados de herramientas renderizados como tarjetas (no JSON crudo). Streaming Gemini + feed de actividad live via Partykit.",
    stack: ["Next.js", "Vercel AI SDK", "Gemini 3.6 Flash", "Zod", "Partykit", "TypeScript"],
    liveUrl: "https://ai-document-agent.vercel.app",
    repoUrl: "https://github.com/Fonsi44/ai-document-agent",
    featured: true,
    category: "ai",
    highlights: [
      "Biblioteca con filtros y preview de documentos",
      "Tool cards ricas: búsqueda, extracción, resúmenes",
      "Feed de actividad live via Partykit",
      "8 documentos con metadata y búsqueda scored",
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
    icon: "🤖",
    year: "2026",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    subtitle: "Admin Panel Demo",
    description:
      "Panel ops con KPIs live, clientes, alertas, drawer de transacciones y vistas analytics.",
    longDescription:
      "Dashboard SaaS product-grade: shell multi-vista (dashboard, customers, analytics), banner de alertas ops, drawer de detalle en transacciones, tabla de clientes con health/MRR y métricas sincronizadas en vivo via Partykit.",
    stack: ["Next.js", "Recharts", "Partykit", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://saas-dashboard-gules-chi.vercel.app",
    repoUrl: "https://github.com/Fonsi44/saas-dashboard",
    featured: true,
    category: "frontend",
    highlights: [
      "KPIs y transacciones en vivo via Partykit",
      "Drawer de detalle + timeline por transacción",
      "Vista customers con MRR y health score",
      "Alertas ops dismissibles",
    ],
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/5",
    icon: "📊",
    year: "2026",
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
    liveUrl: "https://animated-landing-tau.vercel.app",
    repoUrl: "https://github.com/Fonsi44/animated-landing",
    featured: true,
    category: "frontend",
    highlights: [
      "Telemetría live: FPS, viewers, GPU",
      "Pricing + testimonios como producto real",
      "Marquee infinito + ScrollTrigger reveals",
      "Reduced motion support",
    ],
    gradient: "from-orange-500/20 via-rose-500/10 to-amber-500/5",
    icon: "✨",
    year: "2026",
  },
  {
    slug: "realtime-collab",
    title: "Realtime Collab",
    subtitle: "Live Cursors & Notes",
    description:
      "Tablero colaborativo con salas compartibles, notas arrastrables, colores y cursores live.",
    longDescription:
      "Collab Board: sticky notes con drag por pointer, toolbar de color/delete, salas via ?room= en URL y sincronización WebSocket Partykit. Abre el mismo enlace en dos tabs para probar multi-user.",
    stack: ["Next.js", "Partykit", "WebSockets", "partysocket", "TypeScript"],
    liveUrl: "https://realtime-collab-pink.vercel.app",
    repoUrl: "https://github.com/Fonsi44/realtime-collab",
    featured: true,
    category: "fullstack",
    highlights: [
      "Salas compartibles con ?room= en URL",
      "Delete + color picker por nota",
      "Drag con pointer events (sin jank)",
      "Live cursors con avatares",
    ],
    gradient: "from-rose-500/20 via-orange-500/10 to-amber-500/5",
    icon: "🔄",
    year: "2026",
  },
  {
    slug: "automation-workflows",
    title: "FlowForge",
    subtitle: "AI Automation Workflows",
    description:
      "Orquestador con 3 plantillas, config por paso, payload JSON y historial de ejecuciones.",
    longDescription:
      "FlowForge: elige entre Lead Enrichment, Invoice Processing o Support Triage. Configura cada step, lanza con payload de prueba y observa Live Run Log + historial con duraciones e I/O simulado — todo broadcast via Partykit.",
    stack: ["Next.js", "Partykit", "partysocket", "TypeScript", "Tailwind v4"],
    liveUrl: "https://automation-workflows.vercel.app",
    repoUrl: "https://github.com/Fonsi44/automation-workflows",
    featured: true,
    category: "ai",
    highlights: [
      "3 templates: leads, invoices, support",
      "Config panel + payload JSON por run",
      "Live Run Log con duraciones e I/O",
      "Historial de ejecuciones locales",
    ],
    gradient: "from-lime-500/20 via-green-500/10 to-emerald-500/5",
    icon: "⚙️",
    year: "2026",
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
  { href: "#projects", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contacto" },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
