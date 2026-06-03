import type { Metadata } from "next";
import Image from "next/image";
import { BarChart3, Brain, Droplets, Leaf, Microscope, Sprout } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { projectSections } from "@/content/project";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "Project",
  description:
    "Learn how SmartCotton integrates field trials, soil health research, emissions measurement, precision agriculture, and extension to advance climate-smart cotton production.",
  openGraph: {
    title: "Project | SmartCotton",
    description: "SmartCotton connects research, technology, and outreach to support resilient and climate-smart cotton systems."
  }
};

const projectMetrics = [
  { label: "Research scope", value: "SAS-CAP", detail: "USDA-NIFA coordinated agricultural project" },
  { label: "Production focus", value: "Cotton Belt", detail: "Climate-smart systems across major cotton regions" },
  { label: "Core approach", value: "Field + Data", detail: "Integrated trials, measurements, analytics, and extension" }
];

const frameworkSteps = [
  "Evaluate regenerative management in production-scale field systems.",
  "Measure soil health, greenhouse gas, pest, nutrient, and water outcomes.",
  "Translate results into decision support for practical cotton management."
];

const researchPillars = [
  { title: "Soil Health", description: "Track carbon, biology, structure, and long-term soil function.", icon: Sprout },
  { title: "Climate Metrics", description: "Measure greenhouse gas emissions and sequestration potential.", icon: BarChart3 },
  { title: "Water Stewardship", description: "Connect irrigation, rainfall, and crop response in cotton systems.", icon: Droplets },
  { title: "Pest Management", description: "Study pest pressure, weed control, and resilient field practices.", icon: Microscope },
  { title: "Precision Agriculture", description: "Use sensing and data layers to guide management decisions.", icon: Brain },
  { title: "Grower Outcomes", description: "Move research findings toward practical, extension-ready guidance.", icon: Leaf }
];

export default function ProjectPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Project</p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight text-cotton-900 sm:text-5xl">
              A coordinated framework for renewing American cotton.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-cotton-900/70">
              SmartCotton tests how regenerative practices, field-scale measurements, and digital technologies can move
              U.S. cotton toward a more resilient, climate-smart, and economically practical production system.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {projectMetrics.map((metric) => (
                <div key={metric.label} className="border-l-2 border-cotton-300 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-cotton-900">{metric.value}</p>
                  <p className="mt-1 text-sm leading-5 text-cotton-900/65">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-cotton-200 bg-cotton-50 shadow-soft">
            <Image
              src={getAssetPath("/images/cotton-field-research-real.png")}
              width={900}
              height={640}
              alt="Cotton research field"
              className="aspect-[4/3] w-full object-cover"
              priority
            />
            <div className="border-t border-cotton-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">Research hypothesis</p>
              <p className="mt-2 text-base leading-7 text-cotton-900">
                Regenerative management and precision tools can improve soil stewardship while supporting reliable cotton
                production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cotton-200 bg-cotton-50 py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Program Structure"
            title="Research organized around practical production decisions"
            description="The project connects field experiments, environmental measurements, analytics, and outreach so findings can move from research plots into grower-facing recommendations."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {researchPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article key={pillar.title} className="rounded-lg border border-cotton-200 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cotton-100 text-cotton-700">
                    <Icon aria-hidden="true" size={20} />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-cotton-900">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/70">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Research Framework</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cotton-900 sm:text-4xl">
                From field evidence to climate-smart recommendations
              </h2>
            </div>
            <div className="grid gap-4">
              {frameworkSteps.map((step, index) => (
                <div key={step} className="grid gap-4 rounded-lg border border-cotton-200 bg-white p-5 shadow-sm sm:grid-cols-[4rem_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skydata-700 text-base font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="self-center text-base leading-7 text-cotton-900/75">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectSections.map((section) => (
              <article key={section.title} className="border-t border-cotton-200 pt-5">
                <h3 className="text-xl font-semibold text-cotton-900">{section.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cotton-900/70">{section.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cotton-900 py-16 text-white md:py-20">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-200">Expected Impact</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Evidence that can support resilient farms, healthier soils, and a stronger cotton supply.
            </h2>
          </div>
          <p className="text-base leading-8 text-white/75">
            SmartCotton is built to connect sustainability goals with field realities: carbon sequestration, lower emissions,
            input efficiency, pest and nutrient stewardship, water management, and labor-aware production practices.
          </p>
        </div>
      </section>
    </>
  );
}
