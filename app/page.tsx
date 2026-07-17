import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { ProjectNetwork } from "@/components/ProjectNetwork";
import { SectionHeader } from "@/components/SectionHeader";
import { events } from "@/content/events";
import { annualReports, impactSnapshot, officialProject, projectGlanceItems } from "@/content/projectFeatures";
import { focusAreas } from "@/content/site";
import { newsItems } from "@/content/news";
import { researchHighlights } from "@/content/researchHighlights";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Welcome to the SmartCotton Research Project Website</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cotton-900 sm:text-5xl">
              Advancing the next generation of climate-smart cotton.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cotton-900/70">
              SmartCotton is a USDA-NIFA Sustainable Agriculture Systems Coordinated Agricultural Project focused on
              regenerative practices, soil health, climate-smart management, and precision agriculture.
            </p>
            <div className="mx-auto mt-8 max-w-4xl rounded-lg border border-cotton-200 bg-cotton-50 p-6 text-left">
              <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Official project title</p>
              <h3 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{officialProject.fullTitle}</h3>
              <p className="mt-4 text-sm font-medium text-cotton-900/70">
                {officialProject.program} | Award No. {officialProject.awardNumber} | Project period: {officialProject.projectPeriod}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cotton-200 bg-white py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="Project at a Glance"
            title="Fast facts for collaborators, stakeholders, and visitors"
            description="The SmartCotton project brings together a multi-state research network to develop precision regenerative practices and market opportunities for climate-smart cotton."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {projectGlanceItems.map((item) => (
              <div key={item.label} className="rounded-lg border border-cotton-200 bg-cotton-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">{item.label}</p>
                <p className="mt-2 text-base font-semibold text-cotton-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cotton-200 bg-cotton-50 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Research Focus Areas"
            title="Focused science, practical outcomes"
            description="SmartCotton brings together field research, environmental measurement, data science, and extension to evaluate practices that can strengthen U.S. cotton production."
          />
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area} className="border-b border-cotton-200 pb-4">
                <p className="text-base font-semibold text-cotton-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectNetwork />

      <section className="bg-cotton-900 py-16 text-white md:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cotton-200">Impact Snapshot</p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Early reach across research, outreach, and training.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/70">
              Summary numbers can be updated as annual reports and approved project metrics are released.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {impactSnapshot.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-5 text-white/75">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Research Highlights"
              title="Selected areas of emphasis"
              description="Explore core research themes shaping the project, from soil carbon and greenhouse gas measurement to precision management and production resilience."
            />
            <Link href="/research-highlights" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-skydata-700 underline">
              View all highlights
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {researchHighlights.slice(0, 3).map((highlight) => (
              <Card key={highlight.title} title={highlight.title} description={highlight.summary} meta={highlight.category}>
                {highlight.update ? <p className="text-sm leading-6 text-cotton-900/65">{highlight.update}</p> : null}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cotton-200 bg-cotton-50 py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Annual Progress"
              title="Project reports and yearly updates"
              description="Annual report cards provide a public place for approved Year 1 and Year 2 progress summaries and downloadable report files."
            />
            <Link href="/publications#annual-reports" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-skydata-700 underline">
              View report library
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {annualReports.map((report) => (
              <Card key={report.year} title={report.title} description={report.summary} meta={`${report.year} | ${report.period}`}>
                {report.isAvailable ? (
                  <Link
                    href={report.href}
                    className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-skydata-700 underline"
                  >
                    <FileDown aria-hidden="true" size={16} />
                    {report.status}
                  </Link>
                ) : (
                  <p className="text-sm font-medium text-cotton-900/70">{report.status}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cotton-900 py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-200">Project Goals</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Improve cotton resilience while reducing the environmental footprint of production.
            </h2>
          </div>
          <p className="text-base leading-7 text-white/75">
            SmartCotton links field trials, extension, and data-driven management to support soil stewardship, greenhouse
            gas reduction, input-use efficiency, and climate-smart cotton supply.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="border-t border-cotton-200 pt-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-cotton-900">Latest News</h2>
              <Link href="/news" className="focus-ring rounded-sm text-sm font-semibold text-skydata-700 underline">
                All news
              </Link>
            </div>
            <p className="mt-4 text-sm font-medium text-cotton-900">{newsItems[0]?.title}</p>
            <p className="mt-2 text-sm leading-6 text-cotton-900/70">{newsItems[0]?.summary}</p>
          </div>
          <div className="border-t border-cotton-200 pt-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-cotton-900">Upcoming Event</h2>
              <Link href="/events" className="focus-ring rounded-sm text-sm font-semibold text-skydata-700 underline">
                All events
              </Link>
            </div>
            <p className="mt-4 text-sm font-medium text-cotton-900">{events[0]?.title}</p>
            <p className="mt-2 text-sm leading-6 text-cotton-900/70">{events[0]?.summary}</p>
          </div>
        </div>
      </section>

      <section className="bg-cotton-50 py-20">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Partners</p>
            <h2 className="mt-2 max-w-2xl font-serif text-3xl font-semibold text-cotton-900">
              Built for a multi-institutional cotton research network.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-cotton-900/70">
            SmartCotton is built through collaboration among universities, extension programs, growers, and industry partners working across major cotton production regions.
          </p>
          {/* TODO: Replace partner placeholders with approved logos, links, and institutional acknowledgments. */}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Contact</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-cotton-900">Connect with the SmartCotton project</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-cotton-900/70">
                Contact the project team for research questions, outreach coordination, publication requests, and partnership opportunities.
              </p>
            </div>
            <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-cotton-900 px-5 py-3 text-sm font-semibold text-white hover:bg-cotton-700">
              Contact the team
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
