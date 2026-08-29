export const site = {
  name: "Fonsi",
  fullName: "Alfonso Roiget",
  role: "Full-stack Developer & AI Engineer",
  location: "Honduras",
  tagline: "Construyo productos web de producción, agentes IA y plataformas SaaS.",
  bio: `Desarrollador full-stack con experiencia construyendo aplicaciones reales en producción. Especializado en Next.js, TypeScript, PostgreSQL y arquitecturas con IA (RAG, tool calling, agentes conversacionales).`,
  longBio: `Mi proyecto flagship — Justicia-Verdadera — es una plataforma jurídica completa en producción para un despacho en Honduras: SEO, blog, calculadora de penas, intranet con auth JWT + 2FA, RBAC y búsqueda semántica con pgvector.

Busco oportunidades como desarrollador full-stack donde pueda aportar desde el frontend hasta la infraestructura, con especial interés en productos que integren IA de forma útil.`,
  email: "fonsi@example.com",
  github: "https://github.com/Fonsi44",
  portfolio: "https://portfolio-hub-flax.vercel.app",
  available: true,
};

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
      "Demo de motion design con GSAP y useGSAP. Hero timeline con stagger, ScrollTrigger en feature cards, glow ambient animado y respeto a prefers-reduced-motion. Mismo design system cyan/dark del portfolio.",
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
    gradient: "from-cyan-500/20 via-teal-500/10 to-emerald-500/5",
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
];

export const skills = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "GSAP / ScrollTrigger",
  "Partykit",
  "Vercel AI SDK",
  "Gemini 3.6 Flash",
  "RAG / pgvector",
  "PostgreSQL",
  "Playwright",
  "GitHub Actions",
];

export const navItems = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contacto" },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
