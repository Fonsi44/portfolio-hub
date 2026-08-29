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
      "Agente conversacional con tool calling para analizar, buscar y resumir documentos.",
    longDescription:
      "Demo de agente IA con Vercel AI SDK. El agente busca en una biblioteca de documentos, extrae datos estructurados y genera resúmenes usando herramientas tipadas con Zod. Streaming en tiempo real con visibilidad de herramientas invocadas.",
    stack: ["Next.js", "Vercel AI SDK", "Gemini 3.6 Flash", "Zod", "TypeScript"],
    liveUrl: "https://ai-document-agent.vercel.app",
    repoUrl: "https://github.com/Fonsi44/ai-document-agent",
    featured: true,
    category: "ai",
    highlights: [
      "Tool calling con esquemas Zod tipados",
      "Streaming de respuestas en tiempo real",
      "UI con historial de herramientas invocadas",
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
      "Dashboard product-grade con métricas, gráficos interactivos, tablas y dark mode.",
    longDescription:
      "Interfaz de administración SaaS con KPI cards, gráficos de ingresos y usuarios, tabla de transacciones con filtros por estado, y tema claro/oscuro persistente en localStorage.",
    stack: ["Next.js", "Recharts", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://saas-dashboard-gules-chi.vercel.app",
    repoUrl: "https://github.com/Fonsi44/saas-dashboard",
    featured: true,
    category: "frontend",
    highlights: [
      "KPI cards con indicadores de tendencia",
      "Gráficos interactivos con Recharts",
      "Dark mode con persistencia",
      "Tabla filtrable por estado",
    ],
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/5",
    icon: "📊",
    year: "2026",
  },
  {
    slug: "animated-landing",
    title: "Animated Landing",
    subtitle: "GSAP Motion Design",
    description:
      "Landing con scroll orchestration, parallax, reveals y micro-interacciones vía GSAP ScrollTrigger.",
    longDescription:
      "Demo de motion design con GSAP y useGSAP. Hero timeline con stagger, ScrollTrigger en feature cards, glow ambient animado y respeto a prefers-reduced-motion. Estética sunset/naranja propia.",
    stack: ["Next.js", "GSAP", "ScrollTrigger", "useGSAP", "Tailwind v4"],
    liveUrl: "https://animated-landing-tau.vercel.app",
    repoUrl: "https://github.com/Fonsi44/animated-landing",
    featured: true,
    category: "frontend",
    highlights: [
      "Hero timeline con stagger orchestrado",
      "ScrollTrigger reveals por sección",
      "Animaciones compositor-friendly (transform/opacity)",
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
      "Tablero colaborativo con sticky notes compartidas y cursores en vivo vía Partykit WebSockets.",
    longDescription:
      "Demo de colaboración en tiempo real. Múltiples usuarios ven cursores live, crean sticky notes sincronizadas y editan texto en conjunto. Backend con Partykit server desplegado en edge.",
    stack: ["Next.js", "Partykit", "WebSockets", "partysocket", "TypeScript"],
    liveUrl: "https://realtime-collab-pink.vercel.app",
    repoUrl: "https://github.com/Fonsi44/realtime-collab",
    featured: true,
    category: "fullstack",
    highlights: [
      "Live cursors con labels de usuario",
      "Sticky notes sincronizadas en tiempo real",
      "Partykit server en edge",
      "Abre 2 tabs para probar multi-user",
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
      "Orquestación visual de workflows con ejecución en vivo y log compartido vía Partykit.",
    longDescription:
      "Demo de automatización: pipeline Trigger → AI Agent → Transform → Notify. Cada ejecución se transmite en tiempo real al Live Run Log de todos los usuarios conectados. Estética terminal matrix green.",
    stack: ["Next.js", "Partykit", "partysocket", "TypeScript", "Tailwind v4"],
    liveUrl: "https://automation-workflows.vercel.app",
    repoUrl: "https://github.com/Fonsi44/automation-workflows",
    featured: true,
    category: "ai",
    highlights: [
      "Pipeline visual con steps animados",
      "Live Run Log compartido via WebSocket",
      "Presencia en ecosistema global del portfolio",
      "Simulación de triggers, AI steps y notificaciones",
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
