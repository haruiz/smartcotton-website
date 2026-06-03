import type { Metadata } from "next";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionHeader } from "@/components/SectionHeader";
import { publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse SmartCotton journal articles, conference presentations, reports, and extension publications from the climate-smart cotton research network.",
  openGraph: {
    title: "Publications | SmartCotton",
    description: "SmartCotton research publications, conference presentations, reports, and extension resources."
  }
};

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
          Publications will be added as project outputs are reviewed, released, and approved for public distribution.
          {/* TODO: Add static client-side search or future FastAPI publication search endpoint. */}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
}
