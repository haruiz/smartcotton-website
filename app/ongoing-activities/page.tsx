import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { activities, featuredActivityUpdates } from "@/content/activities";
import { annualProgress } from "@/content/annualProgress";
import { outreachActivities } from "@/content/outreach";
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

const outreachYears = Array.from(new Set(outreachActivities.map((activity) => activity.year)));
const outreachTypes = Array.from(new Set(outreachActivities.map((activity) => activity.type))).slice(0, 12);
const defaultOpenOutreachYear = outreachYears.includes("2025-2026") ? "2025-2026" : outreachYears[0];

const activityStats = [
  { label: "Active work streams", value: activities.length },
  { label: "Annual reporting years", value: annualProgress.length },
  { label: "Outreach records", value: outreachActivities.length }
];

function OutreachCard({ activity }: { activity: (typeof outreachActivities)[number] }) {
  return (
    <article className="surface-card-muted p-5">
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
        <span className="chip bg-white text-cotton-700">{activity.type}</span>
        <span className="chip bg-white text-skydata-700">{activity.date}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-cotton-900">{activity.title}</h3>
      <p className="mt-2 text-sm font-medium text-cotton-900/75">{activity.presenter}</p>
      <p className="mt-1 text-sm text-cotton-900/65">{activity.location}</p>
      <p className="mt-3 text-sm leading-6 text-cotton-900/70">{activity.summary}</p>
      <details className="mt-4 rounded-md border border-cotton-200 bg-white p-3">
        <summary className="cursor-pointer text-sm font-semibold text-cotton-900">Audience and reach</summary>
        <div className="mt-3 text-xs leading-5 text-cotton-900/65">
          <p>
            <span className="font-semibold text-cotton-900">Audience:</span> {activity.audience}
          </p>
          {activity.participants ? (
            <p>
              <span className="font-semibold text-cotton-900">Participants:</span> {activity.participants}
            </p>
          ) : null}
        </div>
      </details>
    </article>
  );
}

function FeaturedActivityUpdate({ update }: { update: (typeof featuredActivityUpdates)[number] }) {
  const [leadImage, ...supportingImages] = update.images;

  return (
    <section className="mt-10" aria-labelledby="featured-activity-update-heading">
      <div className="section-divider">
        <p className="eyebrow">Featured activity update</p>
        <h2 id="featured-activity-update-heading" className="mt-2 text-2xl font-semibold text-cotton-900">
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
          <div className="mt-5 grid gap-3 text-sm leading-6 text-cotton-900/70">
            {update.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Activity topics">
            {update.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

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
          title="Field work, outreach, and training in motion"
          description="A public-facing view of what the SmartCotton network is doing now, organized for quick scanning with detailed records available on demand."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
              Recurring field, data, outreach, and training areas drawn from the Year 2 progress narrative.
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

        <section className="mt-14" aria-labelledby="outreach-heading">
          <div className="section-divider">
            <h2 id="outreach-heading" className="text-2xl font-semibold text-cotton-900">
              Outreach and Extension activities
            </h2>
            <p className="mt-2 text-sm leading-6 text-cotton-900/70">
              Field days, grower meetings, workshops, conferences, webinars, seminars, podcasts, stakeholder visits, and training activities from both reporting periods.
            </p>
          </div>

          <div className="surface-card mt-6 grid gap-3 p-4">
            <div className="flex flex-wrap gap-2" aria-label="Outreach years">
              {outreachYears.map((year) => (
                <span key={year} className="chip">
                  {year}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Outreach activity types">
              {outreachTypes.map((type) => (
                <span key={type} className="chip text-skydata-700">
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-8">
            {outreachYears.map((year) => {
              const yearActivities = outreachActivities.filter((activity) => activity.year === year);
              const visibleActivities = yearActivities.slice(0, 6);
              const additionalActivities = yearActivities.slice(6);

              return (
                <details key={year} open={year === defaultOpenOutreachYear} className="surface-card p-6">
                  <summary className="cursor-pointer text-xl font-semibold text-cotton-900">
                    {year} outreach and Extension ({yearActivities.length})
                  </summary>
                  <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {visibleActivities.map((activity) => (
                      <OutreachCard key={`${activity.year}-${activity.presenter}-${activity.title}`} activity={activity} />
                    ))}
                  </div>
                  {additionalActivities.length ? (
                    <details className="mt-5 rounded-md border border-cotton-200 bg-cotton-50 p-4">
                      <summary className="cursor-pointer text-sm font-semibold text-cotton-900">
                        Show {additionalActivities.length} more activities
                      </summary>
                      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {additionalActivities.map((activity) => (
                          <OutreachCard key={`${activity.year}-${activity.presenter}-${activity.title}`} activity={activity} />
                        ))}
                      </div>
                    </details>
                  ) : null}
                </details>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
