import type { Metadata } from "next";
import Link from "next/link";
import { FileDown } from "lucide-react";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionHeader } from "@/components/SectionHeader";
import { publications } from "@/content/publications";
import { annualReports } from "@/content/projectFeatures";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse SmartCotton journal articles, conference presentations, reports, and extension publications from the climate-smart cotton research network.",
  openGraph: {
    title: "Publications | SmartCotton",
    description: "SmartCotton research publications, conference presentations, reports, and extension resources."
  }
};

const publicationSections = [
  {
    title: "Peer-reviewed publications",
    description: "Journal articles and reviewed scholarly outputs from the project network.",
    items: publications.filter((publication) => publication.type === "Journal Article")
  },
  {
    title: "Conference presentations and abstracts",
    description: "Conference papers, presentations, and abstracts shared through professional meetings.",
    items: publications.filter((publication) => publication.type === "Conference Paper")
  },
  {
    title: "Manuscripts",
    description: "Manuscripts in preparation, review, or approved pre-publication tracking.",
    items: publications.filter((publication) => publication.type === "Manuscript")
  },
  {
    title: "Extension materials",
    description: "Grower-facing factsheets, technical briefs, and outreach publications.",
    items: publications.filter((publication) => publication.type === "Extension Publication")
  }
];

export default function PublicationsPage() {
  return (
    <section className="bg-cotton-50 py-16">
      <div className="container-page">
        <SectionHeader
          eyebrow="Publications"
          title="Journal articles, conference papers, reports, and extension publications"
          description="This library shares peer-reviewed research, conference outputs, reports, and extension materials produced by the SmartCotton network."
        />
        <div className="mt-8 rounded-lg border border-cotton-200 bg-white p-4 text-sm text-cotton-900/70">
          Publications and downloadable materials will be added as project outputs are reviewed, released, and approved for public distribution.
          {/* TODO: Add static client-side search or future FastAPI publication search endpoint. */}
        </div>

        <div className="mt-10 grid gap-10">
          {publicationSections.map((section) => (
            <section key={section.title} aria-labelledby={section.title.toLowerCase().replaceAll(" ", "-")}>
              <div className="flex flex-col gap-2 border-b border-cotton-200 pb-4">
                <h2 id={section.title.toLowerCase().replaceAll(" ", "-")} className="text-2xl font-semibold text-cotton-900">
                  {section.title}
                </h2>
                <p className="text-sm leading-6 text-cotton-900/70">{section.description}</p>
              </div>
              {section.items.length > 0 ? (
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {section.items.map((publication) => (
                    <PublicationCard key={publication.id} publication={publication} />
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-lg border border-dashed border-cotton-200 bg-white p-5 text-sm text-cotton-900/65">
                  Approved items will appear here as they become available.
                </div>
              )}
            </section>
          ))}
        </div>

        <section id="annual-reports" className="mt-12" aria-labelledby="annual-reports-heading">
          <div className="flex flex-col gap-2 border-b border-cotton-200 pb-4">
            <h2 id="annual-reports-heading" className="text-2xl font-semibold text-cotton-900">
              Annual reports
            </h2>
            <p className="text-sm leading-6 text-cotton-900/70">
              Approved annual progress reports will be linked here for download.
            </p>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {annualReports.map((report) => (
              <article key={report.year} className="rounded-lg border border-cotton-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">
                  {report.year} | {report.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-cotton-900">{report.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cotton-900/70">{report.summary}</p>
                {report.isAvailable ? (
                  <Link
                    href={report.href}
                    className="focus-ring mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-skydata-700 underline"
                  >
                    <FileDown aria-hidden="true" size={16} />
                    {report.status}
                  </Link>
                ) : (
                  <p className="mt-5 inline-flex items-center gap-2 rounded-md border border-cotton-200 bg-cotton-50 px-4 py-2 text-sm font-semibold text-cotton-900/70">
                    <FileDown aria-hidden="true" size={16} />
                    {report.status}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
