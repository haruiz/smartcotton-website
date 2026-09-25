import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { BannerCarousel } from "@/components/BannerCarousel";
import { officialProject } from "@/content/projectFeatures";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cotton-900 text-white">
      <BannerCarousel />
      <div className="container-page relative z-10 flex min-h-[calc(76vh-4rem)] flex-col justify-center py-16 sm:py-20 lg:py-24">
        <div className="hero-readable max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-cotton-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm backdrop-blur-md">
            <Leaf aria-hidden="true" size={16} />
            USDA-NIFA SAS-CAP Research Partnership
          </p>
          <h1 className="mt-5 max-w-4xl break-words font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            SMARTCOTTON
          </h1>
          <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Precision. Regeneration. Resilience.
          </p>
          <p className="mt-5 max-w-2xl break-words text-base font-medium leading-7 text-white/92 sm:text-lg">
            SmartCotton is a USDA-NIFA Strengthening Agricultural Systems project bringing together researchers,
            Extension specialists, growers, and industry partners across the U.S. Cotton Belt to develop practical
            regenerative and precision-management strategies for more resilient cotton production.
          </p>
          <p className="mt-4 max-w-3xl break-words text-xs font-semibold uppercase leading-5 tracking-wide text-white/90">
            {officialProject.program} | Award No. {officialProject.awardNumber} | {officialProject.projectPeriod}
          </p>
          <p className="mt-2 flex max-w-3xl flex-wrap gap-x-2 gap-y-1 text-sm font-medium text-white/88">
            <span>Lead institution: {officialProject.leadInstitution}</span>
            <span aria-hidden="true">|</span>
            <span>
              PI/Lead:{" "}
              <a
                href={officialProject.principalInvestigatorProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-sm text-white underline decoration-white/45 underline-offset-4 hover:text-cotton-100"
              >
                Dr. Muthukumar Bagavathiannan
              </a>
            </span>
            <span aria-hidden="true">|</span>
            <span>
              Project Manager:{" "}
              <a
                href={officialProject.projectManagerProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-sm text-white underline decoration-white/45 underline-offset-4 hover:text-cotton-100"
              >
                {officialProject.projectManager}
              </a>
            </span>
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/research-highlights"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-cotton-900 transition hover:bg-cotton-100"
            >
              Explore our research
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              href="/project-team"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-white/35 bg-cotton-950/35 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-cotton-950/50"
            >
              Meet the project team
            </Link>
            <Link
              href="/news"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-white/35 bg-cotton-950/35 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-cotton-950/50"
            >
              Latest updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
