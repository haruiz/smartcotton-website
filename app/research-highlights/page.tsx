import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { researchHighlights } from "@/content/researchHighlights";

export const metadata: Metadata = {
  title: "Research Highlights",
  description:
    "Explore SmartCotton research on soil health, carbon sequestration, greenhouse gas reduction, precision agriculture, pest management, water stewardship, and resilient cotton systems.",
  openGraph: {
    title: "Research Highlights | SmartCotton",
    description: "Featured SmartCotton research themes across climate-smart cotton production and precision agriculture."
  }
};

const filters = ["All", "Soil systems", "Digital agriculture", "Regenerative systems", "Adoption pathways"];

export default function ResearchHighlightsPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <SectionHeader
          eyebrow="Research Highlights"
          title="Featured projects and emerging findings"
          description="These highlights summarize the major research areas guiding SmartCotton field trials, analytics, and extension activities across climate-smart cotton systems."
        />
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Static research category filters">
          {filters.map((filter) => (
            <span key={filter} className="rounded-full border border-cotton-200 bg-cotton-50 px-4 py-2 text-sm font-medium text-cotton-800">
              {filter}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {researchHighlights.map((highlight) => (
            <Card key={highlight.title} title={highlight.title} description={highlight.summary} meta={highlight.category}>
              {highlight.update ? (
                <div className="rounded-md bg-cotton-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">Annual report update focus</p>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/70">{highlight.update}</p>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
