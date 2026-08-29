import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-cyan-400 focus-visible:text-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver al portfolio
        </Link>

        <div className="mb-6 flex items-start gap-4">
          <span className="text-5xl" role="img" aria-label={project.title}>
            {project.icon}
          </span>
          <div>
            <p className="font-mono text-xs text-zinc-500">{project.year}</p>
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              {project.title}
            </h1>
            <p className="mt-1 text-cyan-400">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-pretty text-lg leading-relaxed text-zinc-400">
          {project.longDescription}
        </p>

        <ul className="my-8 space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm text-zinc-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              {h}
            </li>
          ))}
        </ul>

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
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:from-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Abrir demo live
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
