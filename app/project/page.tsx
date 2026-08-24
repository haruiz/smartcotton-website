import type { Metadata } from "next";
import Image from "next/image";
import { BarChart3, Brain, GraduationCap, Handshake, Leaf, MessageSquareText } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { annualProgress } from "@/content/annualProgress";
import { officialProject, projectGlanceItems, projectObjectives } from "@/content/projectFeatures";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "Project",
  description:
    "Learn how SmartCotton, USDA-NIFA SAS-CAP award 2024-68012-41750, develops regenerative cotton practices, AI/ML technologies, economic analysis, adoption research, Extension, and workforce training.",
  openGraph: {
    title: "Project | SmartCotton",
    description: "SmartCotton connects regenerative cotton research, precision technology, economics, adoption, Extension, and education across the Cotton Belt."
  }
};

const objectiveIcons = [Leaf, Brain, BarChart3, MessageSquareText, Handshake, GraduationCap];
const yearTwo = annualProgress.find((progress) => progress.year === "Year 2");

export default function ProjectPage() {
  return (
    <>
      <section className="section-band">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Project</p>
            <h1 className="heading-display mt-3 max-w-4xl text-4xl sm:text-5xl">
              Precision regenerative cotton for the U.S. Cotton Belt.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-cotton-900/70">
              SmartCotton brings field research, digital agriculture, economics, Extension, and training into one coordinated
              project.
            </p>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-cotton-900">
              {officialProject.fullTitle}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {projectGlanceItems.slice(0, 6).map((item) => (
                <div key={item.label} className="surface-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">{item.label}</p>
                  <p className="mt-2 text-base font-semibold leading-6 text-cotton-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="image-frame relative">
            <Image
              src={getAssetPath("/images/cotton-field-research-real.png")}
              width={900}
              height={640}
              alt="Cotton research field"
              className="aspect-[4/3] w-full object-cover"
              priority
            />
            <div className="border-t border-cotton-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">Research scope</p>
              <p className="mt-2 text-base leading-7 text-cotton-900">
                Year 2 progress names work across {officialProject.implementationStates.join(", ")}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionHeader
              eyebrow="Six Official Objectives"
              title="A practical research roadmap"
              description="Each objective has a clear job: measure, model, analyze, engage, extend, or train."
            />
            <div className="grid gap-5">
              {projectObjectives.map((objective, index) => {
                const Icon = objectiveIcons[index] ?? Leaf;

                return (
                  <article key={objective.number} className="surface-card p-6">
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cotton-900 text-white">
                        <Icon aria-hidden="true" size={21} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">Objective {objective.number}</p>
                        <h2 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{objective.title}</h2>
                        <p className="mt-3 text-sm leading-6 text-cotton-900/70">{objective.summary}</p>
                        <details className="mt-4 rounded-md border border-cotton-200 bg-cotton-50 p-4">
                          <summary className="cursor-pointer text-sm font-semibold text-cotton-900">Objective details</summary>
                          <ul className="mt-3 grid gap-2 text-sm leading-6 text-cotton-900/70">
                            {objective.details.map((detail) => (
                              <li key={detail} className="border-l-2 border-cotton-200 pl-3">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </details>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {yearTwo ? (
        <section className="section-band">
          <div className="container-page">
            <SectionHeader
              eyebrow={`${yearTwo.year} | ${yearTwo.period}`}
              title={yearTwo.headline}
              description="A shorter view of Year 2 progress. Detailed accomplishments stay expandable so the page is easier to scan."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {yearTwo.entries.map((entry) => (
                <article key={`${entry.objective}-${entry.title}`} className="surface-card-muted p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">{entry.objective}</p>
                  <h2 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{entry.title}</h2>
                  <p className="mt-3 text-sm font-semibold text-cotton-900/75">{entry.team}</p>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/70">{entry.summary}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-cotton-700">Locations</p>
                  <p className="mt-1 text-sm leading-6 text-cotton-900/70">{entry.locations.join(", ")}</p>
                  <details className="mt-4 rounded-md border border-cotton-200 bg-white p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-cotton-900">Key accomplishments</summary>
                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-cotton-900/70">
                      {entry.accomplishments.slice(0, 4).map((item) => (
                        <li key={item} className="border-l-2 border-cotton-300 pl-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-band-dark">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="eyebrow-on-dark">Expected Impact</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Evidence that can support resilient farms, healthier soils, and a stronger cotton supply.
            </h2>
          </div>
          <p className="text-base leading-8 text-white/75">
            The source-backed work connects soil carbon, regenerative practice evaluation, precision agriculture, water
            management, economics, risk, farmer adoption, Extension, and education into a scalable climate-smart cotton
            research platform.
          </p>
        </div>
      </section>
    </>
  );
}
