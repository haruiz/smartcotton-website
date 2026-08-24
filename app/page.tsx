import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, FileDown, Newspaper } from "lucide-react";
import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { ProjectNetwork } from "@/components/ProjectNetwork";
import { SectionHeader } from "@/components/SectionHeader";
import { annualProgress } from "@/content/annualProgress";
import { events } from "@/content/events";
import { annualReports, impactSnapshot, projectObjectives } from "@/content/projectFeatures";
import { newsItems } from "@/content/news";
import { researchHighlights } from "@/content/researchHighlights";
import { getAssetPath } from "@/utils/path";

const storyCards = [
  {
    label: "Research",
    title: "Regenerative cotton systems",
    description: "Field teams test cover crops, tillage, living mulches, rotations, soil biology, and water strategies.",
    href: "/research-highlights"
  },
  {
    label: "Technology",
    title: "Precision decision support",
    description: "Sensors, UAS, satellite data, AI/ML workflows, and simulation models turn field data into usable guidance.",
    href: "/ongoing-activities"
  },
  {
    label: "Adoption",
    title: "Grower-ready pathways",
    description: "Economics, risk analysis, Extension, and training help findings move from experiments to decisions.",
    href: "/project"
  }
];

const objectivePathways = [
  {
    title: "Research",
    description: "Soil health, regenerative management, precision technology, economics, and adoption science.",
    href: "/research-highlights",
    image: "/images/soil-carbon-banner-real.png"
  },
  {
    title: "Extension",
    description: "Field days, meetings, workshops, stakeholder visits, and practical grower-facing updates.",
    href: "/ongoing-activities",
    image: "/images/annual-meeting-2025-discussion-1.jpeg"
  },
  {
    title: "Training",
    description: "Graduate, postdoctoral, undergraduate, and rural workforce development across cotton systems.",
    href: "/project-team",
    image: "/images/precision-cotton-banner-real.png"
  }
];

export default function Home() {
  const upcomingEvents = events.filter((event) => event.status === "Upcoming").slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section-band">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">What if...</p>
            <h2 className="heading-display mt-3 max-w-3xl text-4xl sm:text-5xl">
              Cotton fields could store more carbon, use inputs more precisely, and stay profitable in a changing climate?
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="text-xl font-semibold leading-8 text-cotton-900">We can.</p>
            <p className="text-base leading-7 text-cotton-900/70">
              SmartCotton connects field trials, soil health science, AI-ready data, economics, farmer adoption, Extension,
              and workforce training across the U.S. Cotton Belt.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {impactSnapshot.slice(0, 3).map((metric) => (
                <div key={metric.label} className="stat-card">
                  <p className="text-3xl font-semibold text-cotton-900">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-cotton-900/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="image-frame">
            <Image
              src={getAssetPath("/images/cotton-field-research-real.png")}
              width={1100}
              height={760}
              alt="Cotton field research rows"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Actionable Research</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              Built for field decisions, not just reports.
            </h2>
            <div className="mt-8 grid gap-5">
              {storyCards.map((card) => (
                <Link key={card.title} href={card.href} className="surface-card focus-ring group block p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">{card.label}</p>
                  <h3 className="mt-1 text-xl font-semibold text-cotton-900 group-hover:text-skydata-700">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/70">{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-page">
          <SectionHeader
            eyebrow="SmartCotton Pathways"
            title="Research, Extension, and training in one Cotton Belt network"
            description="Each pathway leads to shorter summaries first, with detailed annual-report information available deeper in the site."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {objectivePathways.map((pathway) => (
              <Link key={pathway.title} href={pathway.href} className="surface-card focus-ring group overflow-hidden">
                <Image
                  src={getAssetPath(pathway.image)}
                  width={720}
                  height={440}
                  alt=""
                  className="image-zoom aspect-[12/7] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-cotton-900 group-hover:text-skydata-700">{pathway.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/70">{pathway.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-skydata-700">
                    Explore <ArrowRight aria-hidden="true" size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectNetwork />

      <section className="section-band-spacious">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Research Highlights"
              title="Selected areas of emphasis"
              description="Explore core research themes shaping the project, from soil carbon and greenhouse gas measurement to precision management and production resilience."
            />
            <Link href="/research-highlights" className="text-link inline-flex items-center gap-2 text-sm">
              View all highlights
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {researchHighlights.slice(0, 3).map((highlight) => (
              <Card key={highlight.title} title={highlight.title} description={highlight.summary} meta={highlight.category}>
                {highlight.update ? (
                  <details className="rounded-md border border-cotton-200 bg-cotton-50 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-cotton-900">Annual update</summary>
                    <p className="mt-3 text-sm leading-6 text-cotton-900/65">{highlight.update}</p>
                  </details>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Annual Progress"
              title="Year 1 and Year 2 progress at a glance"
              description="A compact route into the annual reports, with full details available in the report library."
            />
            <Link href="/publications#annual-reports" className="text-link inline-flex items-center gap-2 text-sm">
              View report library
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {annualProgress.map((progress) => {
              const report = annualReports.find((item) => item.year === progress.year);

              return (
                <Card key={progress.year} title={progress.headline} description={progress.summary} meta={`${progress.year} | ${progress.period}`}>
                  <div className="grid gap-2 text-sm leading-6 text-cotton-900/70">
                    {progress.entries.slice(0, 3).map((entry) => (
                      <p key={`${progress.year}-${entry.title}`}>
                        <span className="font-semibold text-cotton-900">{entry.objective}:</span> {entry.title}
                      </p>
                    ))}
                  </div>
                  {report?.isAvailable ? (
                  <Link
                    href={report.href}
                    className="text-link mt-4 inline-flex items-center gap-2 text-sm"
                  >
                    <FileDown aria-hidden="true" size={16} />
                    {report.status}
                  </Link>
                ) : (
                  <p className="mt-4 text-sm font-medium text-cotton-900/70">{report?.status}</p>
                )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band-dark">
        <div className="container-page">
          <div className="max-w-4xl">
            <p className="eyebrow-on-dark">Project Goals</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Six official objectives guide the SAS-CAP work.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              The project links regenerative production, precision technologies, economics, adoption research, outreach, and
              education so Cotton Belt findings can move from experiments into practical decision-making.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectObjectives.slice(0, 6).map((objective) => (
              <article key={objective.number} className="rounded-lg border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-cotton-200">Objective {objective.number}</p>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-white">{objective.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-spacious">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="surface-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cotton-100 text-cotton-900">
                  <Newspaper aria-hidden="true" size={18} />
                </div>
                <h2 className="text-xl font-semibold text-cotton-900">Latest News</h2>
              </div>
              <Link href="/news" className="text-link text-sm">
                All news
              </Link>
            </div>
            <p className="mt-4 text-sm font-medium text-cotton-900">{newsItems[0]?.title}</p>
            <p className="mt-2 text-sm leading-6 text-cotton-900/70">{newsItems[0]?.summary}</p>
          </div>
          <div className="surface-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cotton-100 text-cotton-900">
                  <CalendarDays aria-hidden="true" size={18} />
                </div>
                <h2 className="text-xl font-semibold text-cotton-900">Upcoming Events</h2>
              </div>
              <Link href="/events" className="text-link text-sm">
                All events
              </Link>
            </div>
            <div className="mt-4 grid gap-4">
              {upcomingEvents.map((event) => (
                <article key={event.title} className="border-l-2 border-cotton-300 pl-4">
                  <p className="text-sm font-semibold text-cotton-900">{event.title}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cotton-700">
                    {event.date}{event.time ? ` | ${event.time}` : ""}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-cotton-900/70">{event.location}</p>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/70">{event.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Partners</p>
            <h2 className="mt-2 max-w-2xl font-serif text-3xl font-semibold text-cotton-900">
              Built by a multi-institutional cotton research network.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-cotton-900/70">
            Partner institutions, growers, Extension programs, and industry collaborators connect field work with practical
            decision-making across major cotton production regions.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="container-page">
          <div className="surface-card flex flex-col gap-6 bg-cotton-50 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-cotton-900">Connect with the SmartCotton project</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-cotton-900/70">
                Contact the project team for research questions, outreach coordination, publication requests, and partnership opportunities.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Contact the team
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
