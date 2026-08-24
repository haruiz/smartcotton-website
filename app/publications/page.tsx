import type { Metadata } from "next";
import Link from "next/link";
import { FileDown } from "lucide-react";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionHeader } from "@/components/SectionHeader";
import { publications, type Publication } from "@/content/publications";
import { annualReports } from "@/content/projectFeatures";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse SmartCotton peer-reviewed publications, submitted manuscripts, manuscripts in preparation, conference abstracts, proceedings, presentations, seminars, webinars, and annual reports.",
  openGraph: {
    title: "Publications | SmartCotton",
    description: "SmartCotton research publications, scientific outputs, conference presentations, reports, and Extension resources."
  }
};

const publicationSections: { title: string; description: string; items: Publication[] }[] = [
  {
    title: "Published peer-reviewed publications",
    description: "Journal articles listed as published in the 2024-2026 source materials.",
    items: publications.filter((publication) => publication.status === "Published")
  },
  {
    title: "Submitted manuscripts",
    description: "Manuscripts listed as submitted or submission-ready, separated from published papers.",
    items: publications.filter((publication) => publication.status === "Submitted")
  },
  {
    title: "Manuscripts in preparation",
    description: "Manuscripts listed as in preparation in the source document.",
    items: publications.filter((publication) => publication.status === "In preparation")
  },
  {
    title: "Conference abstracts and proceedings",
    description: "Conference abstracts and proceedings from Beltwide, CANVAS, Southern Weed Science Society, and related meetings.",
    items: publications.filter((publication) => publication.status === "Abstract" || publication.status === "Proceeding")
  },
  {
    title: "Oral and poster presentations",
    description: "Research presentations, posters, flash talks, and conference presentations from the project network.",
    items: publications.filter((publication) => publication.status === "Presentation")
  },
  {
    title: "Seminars and webinars",
    description: "Seminars and webinars sharing project findings with research, grower, and stakeholder audiences.",
    items: publications.filter((publication) => publication.status === "Seminar/Webinar")
  }
];

const reportingPeriods = ["All", "2024-2025", "2025-2026"];
const outputTypes = ["Published", "Submitted", "In preparation", "Abstract", "Proceeding", "Presentation", "Seminar/Webinar"];

export default function PublicationsPage() {
  return (
    <section className="section-band-muted">
      <div className="container-page">
        <SectionHeader
          as="h1"
          eyebrow="Publications"
          title="Reports and outputs without the wall of text"
          description="Annual reports, publications, presentations, and project outputs are grouped so visitors can start with the overview and expand each library section as needed."
        />

        <div className="surface-card mt-8 grid gap-4 p-5 text-sm text-cotton-900/70 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-semibold text-cotton-900">{publications.length} source-listed outputs</p>
            <p className="mt-2 leading-6">
              Items are grouped by status and output type so draft manuscripts are not confused with published papers.
            </p>
          </div>
          <div className="grid gap-3">
            <div className="flex flex-wrap gap-2" aria-label="Reporting period filters">
              {reportingPeriods.map((period) => (
                <span key={period} className="chip">
                  {period}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Output type filters">
              {outputTypes.map((type) => (
                <span key={type} className="chip text-skydata-700">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section id="annual-reports" className="mt-10" aria-labelledby="annual-reports-heading">
          <div className="section-divider flex flex-col gap-2">
            <h2 id="annual-reports-heading" className="text-2xl font-semibold text-cotton-900">
              Annual reports
            </h2>
            <p className="text-sm leading-6 text-cotton-900/70">
              Submitted annual reports summarized as project overviews for each reporting year.
            </p>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {annualReports.map((report) => (
              <article key={report.year} className="surface-card p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">
                  {report.year} | {report.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-cotton-900">{report.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cotton-900/70">{report.summary}</p>
                <details className="mt-4 rounded-md border border-cotton-200 bg-cotton-50 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-cotton-900">Project overview points</summary>
                  <ul className="mt-3 grid gap-3 text-sm leading-6 text-cotton-900/70">
                    {report.overview.map((item) => (
                      <li key={item} className="border-l-2 border-cotton-200 pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
                {report.isAvailable ? (
                  <Link
                    href={report.href}
                    className="text-link mt-5 inline-flex items-center gap-2 text-sm"
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

        <section className="mt-12" aria-labelledby="publication-library-heading">
          <div className="section-divider flex flex-col gap-2">
            <h2 id="publication-library-heading" className="text-2xl font-semibold text-cotton-900">
              Publication library
            </h2>
            <p className="text-sm leading-6 text-cotton-900/70">
              Open a section to view the records in that status group.
            </p>
          </div>
          <div className="mt-5 grid gap-4">
            {publicationSections.map((section) => (
              <details
                key={section.title}
                open={section.title === "Published peer-reviewed publications"}
                className="surface-card p-5"
              >
                <summary className="cursor-pointer text-xl font-semibold text-cotton-900">
                  {section.title} ({section.items.length})
                </summary>
                <p className="mt-3 text-sm leading-6 text-cotton-900/70">{section.description}</p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {section.items.map((publication) => (
                    <PublicationCard key={publication.id} publication={publication} />
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
