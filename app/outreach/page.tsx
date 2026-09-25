import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Image as ImageIcon, MapPin, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { outreachActivities, type OutreachActivity } from "@/content/outreach";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "SmartCotton outreach, Extension, grower meetings, field days, student training, conference participation, and stakeholder engagement activities.",
  openGraph: {
    title: "Outreach | SmartCotton",
    description:
      "Field days, grower meetings, workshops, demonstrations, student training, and project outreach from the SmartCotton network."
  }
};

const outreachSections = [
  {
    title: "Field days and demonstrations",
    match: (activity: OutreachActivity) => /field day|field visits|tour|demonstrat/i.test(`${activity.type} ${activity.title}`)
  },
  {
    title: "Grower meetings and producer engagement",
    match: (activity: OutreachActivity) => /grower|producer|farmer|stakeholder/i.test(`${activity.type} ${activity.title} ${activity.audience}`)
  },
  {
    title: "Extension programs and workshops",
    match: (activity: OutreachActivity) => /extension|workshop|training|course|school/i.test(`${activity.type} ${activity.title}`)
  },
  {
    title: "Conference participation and seminars",
    match: (activity: OutreachActivity) => /conference|seminar|webinar|presentation|podcast/i.test(`${activity.type} ${activity.title}`)
  },
  {
    title: "Student training and workforce development",
    match: (activity: OutreachActivity) => /student|course|workforce|training/i.test(`${activity.type} ${activity.title} ${activity.audience}`)
  }
];

const outreachYears = Array.from(new Set(outreachActivities.map((activity) => activity.year)));
const outreachTypes = Array.from(new Set(outreachActivities.map((activity) => activity.type))).sort();

const outreachPhotos = [
  {
    src: "/images/project-photos/cotton-pollinator-flower.jpg",
    alt: "Pollinator inside a cotton flower in a project field",
    caption: "Field observation and crop ecology"
  },
  {
    src: "/images/project-photos/cotton-closeup-boll.jpg",
    alt: "Close-up of an open cotton boll",
    caption: "Cotton boll development"
  },
  {
    src: "/images/project-photos/cotton-flower-bee.jpg",
    alt: "Bee visiting a cotton flower in a project field",
    caption: "Crop ecology and pollinator activity"
  }
];

function OutreachCard({ activity }: { activity: OutreachActivity }) {
  return (
    <article className="surface-card p-5">
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
        <span className="chip bg-cotton-100 text-cotton-700">{activity.type}</span>
        <span className="chip text-skydata-700">{activity.year}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-7 text-cotton-900">{activity.title}</h3>
      <div className="mt-3 grid gap-2 text-sm leading-6 text-cotton-900/65">
        <p className="flex gap-2">
          <CalendarDays aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cotton-700" />
          <span>{activity.date}</span>
        </p>
        <p className="flex gap-2">
          <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cotton-700" />
          <span>{activity.location}</span>
        </p>
        <p className="flex gap-2">
          <UsersRound aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cotton-700" />
          <span>{activity.audience}</span>
        </p>
      </div>
      <p className="mt-4 text-sm leading-6 text-cotton-900/72">{activity.summary}</p>
      {activity.participants ? (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-cotton-700">
          Participants: <span className="normal-case tracking-normal text-cotton-900/70">{activity.participants}</span>
        </p>
      ) : null}
    </article>
  );
}

export default function OutreachPage() {
  return (
    <section className="section-band-muted">
      <div className="container-page">
        <SectionHeader
          as="h1"
          eyebrow="Outreach"
          title="Field days, grower meetings, training, and project engagement"
          description="Verified SmartCotton outreach and Extension records are organized by activity type so producers, partners, students, and project collaborators can find relevant engagement activities quickly."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="stat-card">
            <p className="text-3xl font-semibold text-cotton-900">{outreachActivities.length}</p>
            <p className="mt-1 text-sm font-medium text-cotton-900/65">Verified outreach records</p>
          </div>
          <div className="stat-card">
            <p className="text-3xl font-semibold text-cotton-900">{outreachYears.length}</p>
            <p className="mt-1 text-sm font-medium text-cotton-900/65">Reporting periods</p>
          </div>
          <div className="stat-card">
            <p className="text-3xl font-semibold text-cotton-900">{outreachTypes.length}</p>
            <p className="mt-1 text-sm font-medium text-cotton-900/65">Activity types</p>
          </div>
        </div>

        <div className="surface-card mt-8 p-5">
          <p className="text-sm font-semibold text-cotton-900">Available filters</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {outreachYears.map((year) => (
              <span key={year} className="chip">{year}</span>
            ))}
            {outreachTypes.slice(0, 14).map((type) => (
              <span key={type} className="chip text-skydata-700">{type}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10">
          {outreachSections.map((section) => {
            const items = outreachActivities.filter(section.match);

            return (
              <section key={section.title} aria-labelledby={`${section.title.toLowerCase().replaceAll(" ", "-")}-heading`}>
                <div className="section-divider">
                  <h2 id={`${section.title.toLowerCase().replaceAll(" ", "-")}-heading`} className="text-2xl font-semibold text-cotton-900">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/70">
                    {items.length} verified records from the current outreach dataset.
                  </p>
                </div>
                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {items.slice(0, 9).map((activity) => (
                    <OutreachCard key={`${section.title}-${activity.year}-${activity.date}-${activity.title}`} activity={activity} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <section className="surface-card-muted mt-12 p-6" aria-labelledby="outreach-photos-heading">
          <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-cotton-900 shadow-sm">
                <ImageIcon aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <h2 id="outreach-photos-heading" className="text-xl font-semibold text-cotton-900">
                  Project field photos
                </h2>
                <p className="mt-2 text-sm leading-6 text-cotton-900/70">
                  Original SmartCotton project photos are used across the site for field research, crop development, and outreach context.
                </p>
                <Link href="/contact" className="text-link mt-4 inline-flex text-sm">
                  Contact the project team for outreach media coordination
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {outreachPhotos.map((photo) => (
                <figure key={photo.src} className="overflow-hidden rounded-lg border border-cotton-200 bg-white shadow-sm">
                  <Image
                    src={getAssetPath(photo.src)}
                    width={640}
                    height={420}
                    alt={photo.alt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="p-3 text-xs font-medium leading-5 text-cotton-900/70">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
