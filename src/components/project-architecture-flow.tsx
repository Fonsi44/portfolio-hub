type Props = {
  title: string;
  steps: string[];
};

export function ProjectArchitectureFlow({ title, steps }: Props) {
  if (!steps.length) return null;

  return (
    <div className="mb-8 rounded-2xl border border-white/8 bg-zinc-950/50 p-6">
      <h2 className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
        Arquitectura · {title}
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-2 md:flex-col md:justify-center">
            <div className="flex min-h-[72px] flex-1 flex-col justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
              <span className="font-mono text-[9px] text-cyan-500/80">Layer {i + 1}</span>
              <p className="mt-1 font-mono text-xs leading-relaxed text-zinc-300">{step}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden shrink-0 font-mono text-cyan-500/40 md:block" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
