import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import type { ResearchTheme } from "@/content/researchFramework";
import { getAssetPath } from "@/utils/path";

type ResearchThemeCardProps = {
  theme: ResearchTheme;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  compact?: boolean;
};

export function ResearchThemeCard({ theme, icon: Icon, compact = false }: ResearchThemeCardProps) {
  return (
    <Link
      href={theme.href}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-lg border border-cotton-200/90 bg-white shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-cotton-300 hover:shadow-md"
    >
      <div className="relative overflow-hidden bg-cotton-50">
        <Image
          src={getAssetPath(theme.image)}
          width={760}
          height={430}
          alt={theme.alt}
          className="aspect-[16/9] w-full object-cover transition duration-200 group-hover:scale-[1.02]"
        />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-white text-cotton-900 shadow-sm">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">{theme.eyebrow}</p>
        <h3 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{theme.title}</h3>
        <p className="mt-3 text-sm leading-6 text-cotton-900/70">{theme.description}</p>
        {!compact ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {theme.bullets.map((bullet) => (
              <span key={bullet} className="chip">
                {bullet}
              </span>
            ))}
          </div>
        ) : null}
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-skydata-700">
          Learn more
          <ArrowRight aria-hidden="true" size={15} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
