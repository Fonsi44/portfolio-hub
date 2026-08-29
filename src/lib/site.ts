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
    tier: "production",
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
    title: "DocuMind",
    subtitle: "Enterprise Document Intelligence",
    description:
      "Agente IA con archivo documental, historial persistente, ⌘K y tool calling real con Gemini.",
    longDescription:
      "Producto flagship de IA documental: workspace de 4 paneles, 8 documentos indexados, sesiones de chat persistentes, command palette, export markdown, preview con citas clicables y feed live. El agente usa herramientas tipadas — no es un chat genérico.",
    stack: ["Next.js", "Vercel AI SDK", "Gemini 3.6 Flash", "Zod", "Partykit", "TypeScript"],
    liveUrl: "https://ai-document-agent.vercel.app",
    repoUrl: "https://github.com/Fonsi44/ai-document-agent",
    featured: true,
    tier: "flagship",
    category: "ai",
    highlights: [
      "Historial de consultas persistente",
      "⌘K — buscar docs y lanzar queries",
      "Tool cards + citas DOC-xxx clicables",
      "Export markdown · onboarding guiado",
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
    icon: "🤖",
    year: "2026",
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
    liveUrl: "https://saas-dashboard-gules-chi.vercel.app",
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
    featured: false,
    tier: "lab",
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
    title: "Collab Board",
    subtitle: "Realtime Team Workspace",
    description:
      "Tablero multiusuario real: salas, plantillas, undo, export JSON y cursores sincronizados.",
    longDescription:
      "Herramienta de colaboración en tiempo real via Partykit. Identidad persistente, salas compartibles, plantillas (retro, brainstorm, kanban), sticky notes con drag fluido, undo ⌘Z, export del board y presencia live. Abre dos tabs — impresiona al instante.",
    stack: ["Next.js", "Partykit", "WebSockets", "partysocket", "TypeScript"],
    liveUrl: "https://realtime-collab-pink.vercel.app",
    repoUrl: "https://github.com/Fonsi44/realtime-collab",
    featured: true,
    tier: "flagship",
    category: "fullstack",
    highlights: [
      "Plantillas: Retro, Brainstorm, Kanban",
      "Undo ⌘Z · export JSON",
      "Salas ?room= compartibles",
      "Live cursors multi-tab",
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
    featured: false,
    tier: "lab",
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

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const productionProjects = projects.filter((p) => p.tier === "production");
export const labProjects = projects.filter((p) => p.tier === "lab");
