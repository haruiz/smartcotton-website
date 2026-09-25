import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";
import { PhotoSequence } from "@/components/PhotoSequence";
import { SectionHeader } from "@/components/SectionHeader";
import { activities, featuredActivityUpdates } from "@/content/activities";
import { annualProgress } from "@/content/annualProgress";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "Ongoing Activities",
  description:
    "Follow SmartCotton annual progress, objective-wise research activities, outreach, Extension, field days, grower meetings, training, AI/ML workflows, and climate-smart cotton research.",
  openGraph: {
    title: "Ongoing Activities | SmartCotton",
    description: "Current SmartCotton field research, annual progress, outreach, Extension, data collection, technology demonstrations, and training."
  }
};

const activityStats = [
  { label: "Active work streams", value: activities.length },
  { label: "Annual reporting years", value: annualProgress.length }
];

function FeaturedActivityUpdate({ update }: { update: (typeof featuredActivityUpdates)[number] }) {
  const [leadImage, ...supportingImages] = update.images;
  const headingId = `${update.slug}-heading`;

  return (
    <section id={update.slug} className="mt-10 scroll-mt-28" aria-labelledby={headingId}>
      <div className="section-divider">
        <p className="eyebrow">Featured activity update</p>
        <h2 id={headingId} className="mt-2 text-2xl font-semibold text-cotton-900">
          {update.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-cotton-900/70">{update.summary}</p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <figure className="image-frame">
          <Image
            src={getAssetPath(leadImage.src)}
            width={1350}
            height={1800}
            alt={leadImage.alt}
            className="aspect-[4/3] w-full object-cover"
            priority={false}
          />
          <figcaption className="border-t border-cotton-200 bg-white p-4 text-xs leading-5 text-cotton-900/65">
            {leadImage.caption}
          </figcaption>
        </figure>

        <div className="surface-card p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">{update.eyebrow}</p>
          <div className="mt-4 border-l-2 border-cotton-300 pl-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">Key objective</p>
            <p className="mt-2 text-base font-semibold leading-7 text-cotton-900">{update.objective}</p>
          </div>
          {update.studyDetails ? (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {update.studyDetails.map((detail) => (
                <div key={detail.label} className="rounded-md border border-cotton-200 bg-cotton-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">{detail.label}</p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-cotton-900">{detail.value}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-5 grid gap-3 text-sm leading-6 text-cotton-900/70">
            {update.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {update.researchAreas ? (
            <div className="mt-6 rounded-md border border-cotton-200 bg-cotton-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">Research areas</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-cotton-900/72">
                {update.researchAreas.map((area) => (
                  <li key={area} className="border-l-2 border-cotton-300 pl-3">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Activity topics">
            {update.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {update.gallery ? (
        <PhotoSequence collection={update.gallery} />
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportingImages.map((image) => (
            <figure key={image.src} className="surface-card group overflow-hidden">
              <Image
                src={getAssetPath(image.src)}
                width={1350}
                height={1800}
                alt={image.alt}
                className="image-zoom aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4 text-xs font-medium leading-5 text-cotton-900/70">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

export default function OngoingActivitiesPage() {
  return (
    <section className="section-band-muted">
      <div className="container-page">
        <SectionHeader
          as="h1"
          eyebrow="Ongoing Activities"
          title="Field work and research progress in motion"
          description="A public-facing view of current field, lab, data, and objective-level activity. Outreach records are maintained on the Outreach page."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {activityStats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="text-3xl font-semibold text-cotton-900">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-cotton-900/65">{stat.label}</p>
            </div>
          ))}
        </div>

        {featuredActivityUpdates.map((update) => (
          <FeaturedActivityUpdate key={update.title} update={update} />
        ))}

        <section className="mt-10" aria-labelledby="current-work-heading">
          <div className="section-divider">
            <h2 id="current-work-heading" className="text-2xl font-semibold text-cotton-900">
              Current work streams
            </h2>
            <p className="mt-2 text-sm leading-6 text-cotton-900/70">
              Recurring field, data, laboratory, and training areas drawn from the Year 2 progress narrative.
            </p>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <Card key={activity.title} title={activity.title} description={activity.summary} />
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="annual-progress-heading">
          <div className="section-divider">
            <h2 id="annual-progress-heading" className="text-2xl font-semibold text-cotton-900">
              Annual progress by objective
            </h2>
            <p className="mt-2 text-sm leading-6 text-cotton-900/70">
              Open a year to scan objective-level progress without loading the page with every accomplishment at once.
            </p>
          </div>
          <div className="mt-6 grid gap-6">
            {annualProgress.map((progress) => (
              <details key={progress.year} open={progress.year === "Year 2"} className="surface-card p-6">
                <summary className="cursor-pointer text-xl font-semibold text-cotton-900">
                  {progress.year} | {progress.period}: {progress.headline}
                </summary>
                <p className="mt-4 text-sm leading-6 text-cotton-900/70">{progress.summary}</p>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {progress.entries.map((entry) => (
                    <article key={`${progress.year}-${entry.title}`} className="surface-card-muted p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">{entry.objective}</p>
                      <h3 className="mt-2 text-lg font-semibold leading-7 text-cotton-900">{entry.title}</h3>
                      <p className="mt-3 text-sm font-semibold text-cotton-900/75">{entry.team}</p>
                      <p className="mt-2 text-sm leading-6 text-cotton-900/70">{entry.summary}</p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-cotton-700">Locations</p>
                      <p className="mt-1 text-sm leading-6 text-cotton-900/70">{entry.locations.join(", ")}</p>
                      <details className="mt-4 rounded-md border border-cotton-200 bg-white p-4">
                        <summary className="cursor-pointer text-sm font-semibold text-cotton-900">
                          Key accomplishments ({entry.accomplishments.length})
                        </summary>
                        <ul className="mt-3 grid gap-2 text-sm leading-6 text-cotton-900/70">
                          {entry.accomplishments.map((item) => (
                            <li key={item} className="border-l-2 border-cotton-300 pl-3">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </article>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="surface-card mt-14 p-6" aria-labelledby="outreach-route-heading">
          <h2 id="outreach-route-heading" className="text-2xl font-semibold text-cotton-900">
            Looking for outreach records?
          </h2>
          <p className="mt-2 text-sm leading-6 text-cotton-900/70">
            Field days, grower meetings, workshops, stakeholder visits, and training activities are organized on the Outreach page.
          </p>
          <Link href="/outreach" className="text-link mt-4 inline-flex text-sm">
            See outreach activities
          </Link>
        </section>
      </div>
    </section>
  );
}
