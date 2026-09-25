import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  GraduationCap,
  Handshake,
  Leaf,
  MessageSquareText,
  Sprout,
  UsersRound
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { annualProgress } from "@/content/annualProgress";
import { officialProject, projectObjectives } from "@/content/projectFeatures";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "About SmartCotton",
  description:
    "Learn how SmartCotton brings researchers, growers, Extension specialists, economists, and technology experts together for resilient, profitable, climate-smart cotton systems.",
  openGraph: {
    title: "About SmartCotton",
    description:
      "A USDA-NIFA SAS-CAP project connecting regenerative cotton research, precision technology, economics, adoption, Extension, and education across the Cotton Belt."
  }
};

const objectiveIcons = [Leaf, Brain, BarChart3, MessageSquareText, Handshake, GraduationCap];

const objectiveShortTitles = [
  "Regenerative production systems",
  "Precision AI/ML and smart technologies",
  "Economics and market opportunities",
  "Farmer adoption and decision-making",
  "Extension and outreach",
  "Education and rural workforce"
];

const researchThemes = [
  {
    title: "Field & systems research",
    description:
      "Regenerative management, soil health, water, weeds, rotations, living mulches, and cotton production systems.",
    href: "/research-highlights",
    icon: Sprout
  },
  {
    title: "Data, technology & economics",
    description:
      "Precision agriculture, AI/ML, simulation, UAS, sensors, profitability, insurance, and production risk.",
    href: "/ongoing-activities",
    icon: Brain
  },
  {
    title: "Adoption, Extension & education",
    description:
      "Grower adoption, Extension programs, stakeholder engagement, workforce development, and student training.",
    href: "/project-team",
    icon: UsersRound
  }
];

const projectStats = [
  { value: officialProject.projectPeriod, label: "Project period" },
  { value: officialProject.program, label: "Funding program" },
  { value: "6", label: "Integrated objectives" },
  { value: `${officialProject.implementationStates.length}`, label: "Cotton Belt states" },
  { value: "2024-68012-41750", label: "Award number" },
  { value: "Texas A&M AgriLife", label: "Lead institution" }
];

const challengePoints = [
  "Cotton production systems are being asked to manage soil degradation, climate variability, input costs, pest pressure, water limitations, labor challenges, and sustainability expectations at the same time.",
  "Single-location studies are not enough for a crop grown across contrasting Cotton Belt soils, rainfall patterns, irrigation contexts, and production systems.",
  "SmartCotton therefore treats regenerative practices, precision technologies, economics, adoption, Extension, and education as connected parts of one production system."
];

const approachPoints = [
  "Field and laboratory teams measure soil carbon, nutrients, greenhouse gas indicators, water use, root traits, soil biology, and production responses.",
  "Precision agriculture teams organize UAS, satellite, sensor, irrigation, yield, fiber quality, and management datasets for AI/ML and decision-support work.",
  "Economic, social-science, Extension, and education teams evaluate feasibility, adoption pathways, stakeholder engagement, and workforce training."
];

const expectedOutcomes = [
  "Regionally relevant information on regenerative cotton practices and soil-health indicators.",
  "Better organized datasets for precision management, smart irrigation, nutrient diagnostics, and AI/ML workflows.",
  "Economic and adoption insight that can help frame practical producer decisions.",
  "Extension, outreach, and educational pathways that connect research with growers, advisers, students, and partners."
];

const yearTwo = annualProgress.find((progress) => progress.year === "Year 2");

export default function ProjectPage() {
  return (
    <>
      <section className="bg-white">
        <div className="container-page grid min-h-[34rem] gap-10 py-14 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:py-16">
          <div className="animate-section-rise">
            <p className="eyebrow">About SmartCotton</p>
            <h1 className="heading-display mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
              Building a more resilient future for U.S. cotton
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cotton-900/75 sm:text-xl">
              SmartCotton brings researchers, growers, Extension specialists, economists, and technology experts together
              to develop practical solutions for resilient, profitable, and climate-smart cotton systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/research-highlights" className="btn-primary">
                Explore our research
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link href="/project-team" className="btn-secondary">
                Meet the team
              </Link>
            </div>
          </div>

          <div className="image-frame animate-section-rise">
            <Image
              src={getAssetPath("/images/project-photos/cotton-open-boll-field.jpg")}
              width={920}
              height={680}
              alt="Open cotton boll in a project field"
              className="aspect-[4/3] w-full object-cover"
              priority
            />
            <div className="border-t border-cotton-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">
                USDA-NIFA SAS-CAP | Award No. {officialProject.awardNumber}
              </p>
              <p className="mt-2 text-sm leading-6 text-cotton-900/70">
                {officialProject.fullTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band-dark">
        <div className="container-page grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-center">
          <h2 className="max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Evidence that can support resilient farms, healthier soils, and a stronger cotton supply.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            SmartCotton connects field research, precision technologies, economics, Extension, and education to develop
            practical strategies for cotton producers across diverse environments.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="container-page">
          <SectionHeader
            eyebrow="Project at a Glance"
            title="One coordinated project, many connected pieces"
            description="Core project facts are grouped here so the rest of the page can focus on the SmartCotton story."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {projectStats.map((item) => (
              <div key={item.label} className="stat-card">
                <p className="text-lg font-semibold leading-6 text-cotton-900">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-wide text-cotton-900/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="eyebrow">The Challenge</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Why a coordinated Cotton Belt project is needed</h2>
          </div>
          <div className="grid gap-4 lg:col-span-2">
            {challengePoints.map((point) => (
              <p key={point} className="rounded-lg border border-cotton-200 bg-cotton-50 p-5 text-sm leading-7 text-cotton-900/75">
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-cream">
        <div className="container-page grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
          <div>
            <p className="eyebrow">Our Approach</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Integrated research, Extension, economics, and education</h2>
            <p className="mt-4 text-sm leading-7 text-cotton-900/70">
              SmartCotton is organized to generate field, laboratory, economic, and outreach information together. That structure helps the project evaluate practices while also preparing pathways for producer engagement and workforce development.
            </p>
          </div>
          <div className="grid gap-3">
            {approachPoints.map((point, index) => (
              <div key={point} className="surface-card p-5">
                <p className="font-serif text-3xl font-semibold text-cotton-300">{index + 1}</p>
                <p className="mt-2 text-sm leading-6 text-cotton-900/75">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="objectives" className="section-band-muted scroll-mt-24">
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Research Roadmap"
              title="Six objectives. One integrated cotton system."
              description="The roadmap links production, technology, economics, adoption, outreach, and education into a single applied research platform."
            />
            <Link href="/research-highlights" className="text-link inline-flex items-center gap-2 text-sm">
              Explore project objectives
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectObjectives.map((objective, index) => {
              const Icon = objectiveIcons[index] ?? Leaf;
              const shouldShowConnector = index !== 2 && index !== projectObjectives.length - 1;

              return (
                <article key={objective.number} className="surface-card relative min-h-64 p-5">
                  {shouldShowConnector ? (
                    <span className="pointer-events-none absolute -right-5 top-1/2 hidden h-px w-5 bg-cotton-300 lg:block" aria-hidden="true" />
                  ) : null}
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-serif text-4xl font-semibold leading-none text-cotton-300">
                      {String(objective.number).padStart(2, "0")}
                    </p>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cotton-900 text-white">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold leading-7 text-cotton-900">
                    {objectiveShortTitles[index] ?? objective.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-cotton-900/70">{objective.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band-cream">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <SectionHeader
              eyebrow={yearTwo ? `${yearTwo.year} | ${yearTwo.period}` : "Research Organization"}
              title="How the work comes together"
              description="Long progress details are condensed into three major workstreams that visitors can scan quickly."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {researchThemes.map((theme) => {
                const Icon = theme.icon;

                return (
                  <Link
                    key={theme.title}
                    href={theme.href}
                    className="focus-ring group flex h-full flex-col rounded-lg border border-cotton-200/90 bg-white p-5 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-cotton-300 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cotton-100 text-cotton-900">
                      <Icon aria-hidden="true" size={21} />
                    </div>
                    <h2 className="mt-5 text-lg font-semibold leading-6 text-cotton-900">{theme.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-cotton-900/70">{theme.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-skydata-700">
                      Learn more
                      <ArrowRight aria-hidden="true" size={15} className="transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-page grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <SectionHeader
            eyebrow="Expected Outcomes"
            title="What the project is working toward"
            description="The public site describes research activity and intended applications without inventing results that have not been reported."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {expectedOutcomes.map((outcome) => (
              <article key={outcome} className="surface-card p-5">
                <p className="text-sm leading-6 text-cotton-900/75">{outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="container-page">
          <figure className="overflow-hidden rounded-lg border border-cotton-200 bg-cotton-50 shadow-sm">
            <Image
              src={getAssetPath("/images/activities/soil-samples-sub-sampling-table.jpeg")}
              width={1400}
              height={720}
              alt="SmartCotton team organizing soil samples for multi-state soil carbon research"
              className="aspect-[21/9] w-full object-cover"
            />
            <figcaption className="border-t border-cotton-200 bg-white px-5 py-3 text-xs leading-5 text-cotton-900/65">
              Coordinated soil sampling and processing help establish soil organic carbon baselines across the U.S. Cotton Belt.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-cotton-900 py-14 text-white md:py-16">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark">Next Step</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Continue to team, research, or contact details.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              About SmartCotton stays focused on the project structure. Use the dedicated pages for the complete directory, current research activity, publications, outreach, and contact routes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/project-team" className="btn-secondary border-white/30 bg-white text-cotton-900 hover:bg-cotton-100">
              Project team
            </Link>
            <Link href="/research-highlights" className="btn-secondary border-white/30 bg-white text-cotton-900 hover:bg-cotton-100">
              View research
            </Link>
            <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-cotton-100 px-5 py-3 text-sm font-semibold text-cotton-900 transition hover:bg-white">
              Contact
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
