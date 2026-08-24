import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { BannerCarousel } from "@/components/BannerCarousel";
import { officialProject } from "@/content/projectFeatures";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cotton-900 text-white">
      <BannerCarousel />
      <div className="container-page relative z-10 flex min-h-[calc(92vh-4rem)] flex-col justify-center py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur">
            <Leaf aria-hidden="true" size={16} />
            USDA-NIFA SAS-CAP research partnership
          </p>
          <h1 className="mt-6 max-w-4xl break-words font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            SmartCotton
          </h1>
          <p className="mt-4 text-2xl font-semibold text-cotton-100 sm:text-3xl">Renewing American Cotton</p>
          <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-white/80">
            {officialProject.fullTitle}
          </p>
          <p className="mt-4 max-w-3xl break-words text-sm font-semibold uppercase tracking-wide text-cotton-100">
            {officialProject.program} | Award No. {officialProject.awardNumber} | {officialProject.projectPeriod}
          </p>
          <p className="mt-3 flex max-w-3xl flex-wrap gap-x-2 gap-y-1 text-sm font-medium text-white/75">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/project"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-cotton-900 hover:bg-cotton-100"
            >
              Explore the project
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              href="/research-highlights"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              View research highlights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
