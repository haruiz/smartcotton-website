import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { researchHighlights } from "@/content/researchHighlights";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "Research Highlights",
  description:
    "Explore SmartCotton research on soil health, carbon sequestration, greenhouse gas reduction, precision agriculture, pest management, water stewardship, and resilient cotton systems.",
  openGraph: {
    title: "Research Highlights | SmartCotton",
    description: "Featured SmartCotton research themes across climate-smart cotton production and precision agriculture."
  }
};

const featureImages = [
  "/images/soil-carbon-banner-real.png",
  "/images/cotton-field-research-real.png",
  "/images/precision-cotton-banner-real.png"
];

const filters = ["Soil health", "Regenerative systems", "Precision data", "Economics", "Extension"];

export default function ResearchHighlightsPage() {
  const featuredHighlights = researchHighlights.slice(0, 3);
  const supportingHighlights = researchHighlights.slice(3);

  return (
    <section className="section-band">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <SectionHeader
            as="h1"
            eyebrow="Research Highlights"
            title="Research built for Cotton Belt decisions"
            description="A shorter entry point into the project science, with detailed annual-report updates available inside each theme."
          />
          <div className="surface-card-muted grid gap-3 p-4 sm:grid-cols-5">
            {filters.map((filter) => (
              <span key={filter} className="rounded-md bg-white px-3 py-2 text-center text-xs font-semibold text-cotton-900 shadow-sm">
                {filter}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredHighlights.map((highlight, index) => (
            <article key={highlight.title} className="surface-card group overflow-hidden">
              <Image
                src={getAssetPath(featureImages[index])}
                width={760}
                height={500}
                alt=""
                className="image-zoom aspect-[12/7] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">{highlight.category}</p>
                <h2 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{highlight.title}</h2>
                <p className="mt-3 text-sm leading-6 text-cotton-900/70">{highlight.summary}</p>
                {highlight.update ? (
                  <details className="mt-4 rounded-md border border-cotton-200 bg-cotton-50 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-cotton-900">Annual update</summary>
                    <p className="mt-3 text-sm leading-6 text-cotton-900/70">{highlight.update}</p>
                  </details>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14" aria-labelledby="more-research-themes">
          <div className="section-divider flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">More Themes</p>
              <h2 id="more-research-themes" className="mt-2 font-serif text-3xl font-semibold text-cotton-900">
                Browse the supporting science
              </h2>
            </div>
            <Link href="/ongoing-activities" className="text-link inline-flex items-center gap-2 text-sm">
              See field activity
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {supportingHighlights.map((highlight) => (
              <Card key={highlight.title} title={highlight.title} description={highlight.summary} meta={highlight.category}>
                {highlight.update ? (
                  <details className="rounded-md border border-cotton-200 bg-cotton-50 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-cotton-900">Annual update</summary>
                    <p className="mt-3 text-sm leading-6 text-cotton-900/70">{highlight.update}</p>
                  </details>
                ) : null}
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
