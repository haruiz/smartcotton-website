import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import type { ObjectiveResearchDetail } from "@/content/researchFramework";

type ObjectiveCardProps = {
  objective: ObjectiveResearchDetail;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

export function ObjectiveCard({ objective, icon: Icon }: ObjectiveCardProps) {
  return (
    <details className="surface-card p-5" open={objective.number === 1}>
      <summary className="cursor-pointer list-none">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cotton-900 text-white">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">
              Objective {objective.number}
            </p>
            <h3 className="mt-1 text-xl font-semibold leading-7 text-cotton-900">{objective.title}</h3>
          </div>
        </div>
      </summary>
      <div className="mt-5 grid gap-5 border-t border-cotton-200 pt-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">Research question</p>
          <p className="mt-2 text-sm leading-6 text-cotton-900/75">{objective.researchQuestion}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-cotton-700">Participating locations</p>
          <p className="mt-2 text-sm leading-6 text-cotton-900/70">{objective.locations}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">What is being measured</p>
          <ul className="mt-2 grid gap-2 text-sm leading-6 text-cotton-900/70">
            {objective.measured.map((item) => (
              <li key={item} className="border-l-2 border-cotton-300 pl-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-cotton-700">Methods and current activity</p>
          <p className="mt-2 text-sm leading-6 text-cotton-900/70">{objective.approach}</p>
          <p className="mt-2 text-sm leading-6 text-cotton-900/70">{objective.currentActivity}</p>
          <Link href={objective.relatedHref} className="text-link mt-4 inline-flex items-center gap-2 text-sm">
            Related updates
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </div>
    </details>
  );
}
