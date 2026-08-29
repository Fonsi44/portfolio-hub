"use client";

import { useState } from "react";

const DEFAULT_STEPS = [
  "Abrir demo live",
  "Probar feature principal",
  "Ver badge de scope (Gemini / Mock)",
];

type Props = {
  steps?: string[];
  tryHint?: string;
};

export function ProjectTryChecklist({ steps = DEFAULT_STEPS, tryHint }: Props) {
  const allSteps = tryHint ? [tryHint, ...steps] : steps;
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <div className="my-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
      <h2 className="mb-4 font-mono text-xs tracking-widest text-cyan-400 uppercase">
        Try in 30s
      </h2>
      <ul className="space-y-2">
        {allSteps.map((step, i) => (
          <li key={i}>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-zinc-400">
              <input
                type="checkbox"
                checked={!!checked[i]}
                onChange={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
                className="mt-1 rounded border-white/20"
              />
              <span className={checked[i] ? "text-zinc-200 line-through opacity-70" : ""}>{step}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
