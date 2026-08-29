import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArchitectureFlow } from "@/components/project-architecture-flow";
import { ProjectDemoLoop } from "@/components/project-demo-loop";
import { ProjectLivePreview } from "@/components/project-live-preview";
import { ProjectTryChecklist } from "@/components/project-try-checklist";
import { getProject, projects, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.name}`,
    description: project.description,
  };
}

const TIER_LABELS = {
  flagship: "Demo interactivo",
  production: "Proyecto finalizado",
  lab: "Lab",
} as const;

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isFlagship = project.tier === "flagship";
  const isProduction = project.tier === "production" || project.completed;
  const liveUrl =
    project.slug === "realtime-collab"
      ? `${project.liveUrl}?room=portfolio-preview`
      : project.liveUrl;

  return (
    <div className="min-h-screen px-6 py-24">
      <div className={`mx-auto ${isFlagship || isProduction ? "max-w-4xl" : "max-w-3xl"}`}>
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-cyan-400 focus-visible:text-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver al portfolio
        </Link>

        <div className="mb-6 flex flex-wrap items-start gap-4">
          <span className="text-5xl" role="img" aria-label={project.title}>
            {project.icon}
          </span>
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase ${
                  isProduction
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                }`}
              >
                {TIER_LABELS[project.tier]}
              </span>
              {project.clientName && (
                <span className="font-mono text-xs text-zinc-500">Cliente · {project.clientName}</span>
              )}
              <span className="font-mono text-xs text-zinc-600">{project.year}</span>
            </div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">{project.title}</h1>
            <p className="mt-1 text-cyan-400">{project.subtitle}</p>
            {project.scopeBadges && project.scopeBadges.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.scopeBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-zinc-950/80 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-pretty text-lg leading-relaxed text-zinc-400">
          {project.longDescription}
        </p>

        {isFlagship && (
          <ProjectLivePreview url={liveUrl} title={project.title} hint={project.tryHint} />
        )}

        {project.architecture && (
          <ProjectArchitectureFlow title={project.title} steps={project.architecture} />
        )}

        <ProjectDemoLoop
          title={project.title}
          frames={[
            project.tryHint ?? project.description,
            ...project.highlights.slice(0, 3),
          ]}
        />

        <ProjectTryChecklist tryHint={project.tryHint} steps={project.highlights.slice(0, 3)} />

        <div className={`my-8 grid gap-3 ${isFlagship ? "sm:grid-cols-2" : ""}`}>
          {project.highlights.map((h) => (
            <div
              key={h}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-sm text-zinc-400"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              {h}
            </div>
          ))}
        </div>

        {project.architecture && (
          <div className="mb-8 rounded-2xl border border-white/8 bg-zinc-950/50 p-6 md:hidden">
            <h2 className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              Stack técnico
            </h2>
            <ul className="space-y-2">
              {project.architecture.map((line) => (
                <li key={line} className="font-mono text-xs leading-relaxed text-zinc-400">
                  → {line}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/8 bg-zinc-950 px-3 py-1 font-mono text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:from-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {isFlagship ? "Usar demo" : isProduction ? "Visitar web en producción" : "Abrir demo live"}
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-cyan-500/30 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Ver código en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
