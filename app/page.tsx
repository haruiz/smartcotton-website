import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { events } from "@/content/events";
import { newsItems } from "@/content/news";
import { officialProject } from "@/content/projectFeatures";
import { getAssetPath } from "@/utils/path";

const glanceItems = [
  {
    value: "Multi-state",
    label: "Research network",
    description: "Coordinated work across Cotton Belt environments."
  },
  {
    value: "13+",
    label: "Partner and collaborator sites",
    description: "Research, outreach, Extension, and national partner locations represented in the project map."
  },
  {
    value: "6",
    label: "Major objectives",
    description: "Production, technology, economics, adoption, Extension, and education."
  },
  {
    value: officialProject.projectPeriod,
    label: "Project period",
    description: `USDA-NIFA SAS-CAP | Award No. ${officialProject.awardNumber}.`
  }
];

const entryPoints = [
  {
    title: "Project overview",
    description: "Purpose, objectives, project structure, and expected outcomes.",
    href: "/project",
    action: "Learn more"
  },
  {
    title: "Research highlights",
    description: "Research themes, objective-level science, and active field updates.",
    href: "/research-highlights",
    action: "View research"
  },
  {
    title: "Outreach and training",
    description: "Field days, grower engagement, workshops, and workforce development.",
    href: "/outreach",
    action: "See outreach"
  }
];

const featuredResearch = [
  {
    title: "Soil health and carbon sequestration",
    image: "/images/project-photos/cotton-flower-canopy.jpg",
    alt: "Cotton flower surrounded by green cotton canopy",
    text: "Baseline soil carbon, nutrient, and biological measurements.",
    href: "/research-highlights#themes"
  },
  {
    title: "Regenerative cotton production systems",
    image: "/images/project-photos/cotton-row-canopy.jpg",
    alt: "Low view between cotton rows in a regenerative production research setting",
    text: "Field studies on cover crops, reduced tillage, living mulches, and rotations.",
    href: "/research-highlights#field-work"
  },
  {
    title: "AI/ML and precision management",
    image: "/images/project-photos/cotton-open-boll-field.jpg",
    alt: "Open cotton boll in a project field representing field-scale production data",
    text: "UAS, sensor, satellite, yield, fiber quality, and management datasets.",
    href: "/research-highlights#objective-research"
  },
  {
    title: "Greenhouse gas and resource efficiency",
    image: "/images/activities/soil-samples-sub-sampling-table.jpeg",
    alt: "Organized soil samples prepared for SmartCotton laboratory analysis",
    text: "Soil, water, greenhouse gas, nutrient, and simulation work.",
    href: "/ongoing-activities"
  }
];

const homepagePhotos = [
  {
    src: "/images/project-photos/cotton-harvest-machinery.jpg",
    alt: "Cotton harvest machinery moving through a mature field",
    caption: "Field-scale production"
  },
  {
    src: "/images/project-photos/cotton-flower-bee.jpg",
    alt: "Bee visiting a cotton flower",
    caption: "Crop ecology"
  },
  {
    src: "/images/research/nc-soc-field-aerial.jpeg",
    alt: "Aerial view of North Carolina cotton fields",
    caption: "Regional field sites"
  },
  {
    src: "/images/research/nc-cover-crop-stand-counts.jpeg",
    alt: "Team members evaluating cotton stand counts in the field",
    caption: "Field sampling"
  },
  {
    src: "/images/activities/soil-sample-lab-processing.jpeg",
    alt: "Soil samples being processed for project analysis",
    caption: "Lab processing"
  }
];

const ce2HomepagePhotos = [
  {
    src: "/images/research/ce2-college-station/ce2-college-station-field-sampling-team.jpeg",
    alt: "Research team members collecting field samples in a College Station CE2 cover crop plot",
    caption: "Field sampling"
  },
  {
    src: "/images/research/ce2-college-station/ce2-college-station-cotton-growth-field-observations.jpeg",
    alt: "Cotton plants growing in experimental rows at the College Station CE2 location",
    caption: "Cotton growth observations"
  }
];

export default function Home() {
  const latestNews = newsItems.slice(0, 3);
  const upcomingEvents = events.filter((event) => event.status === "Upcoming").slice(0, 2);

  return (
    <>
      <Hero />

      <section className="section-band">
        <div className="container-page">
          <SectionHeader
            eyebrow="Start Here"
            title="A concise entry point into SmartCotton"
            description="Use the homepage to find the right section quickly. Detailed project, research, outreach, publication, team, and contact information is organized on dedicated pages."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {entryPoints.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="surface-card focus-ring group flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:border-cotton-300 hover:shadow-md"
              >
                <h2 className="text-xl font-semibold leading-7 text-cotton-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-cotton-900/70">{item.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-skydata-700">
                  {item.action}
                  <ArrowRight aria-hidden="true" size={15} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="eyebrow">Research in Action</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cotton-900 sm:text-4xl">
                Research in Action: Cover Crop Planting on Beds
              </h2>
              <p className="mt-4 text-sm leading-6 text-cotton-900/72 sm:text-base sm:leading-7">
                Our SmartCotton team in College Station, Texas, is evaluating cover crop planting strategies for cotton
                grown on raised beds. Field observations, soil sampling, and crop measurements are helping researchers
                assess different management practices as part of a coordinated multi-state study.
              </p>
              <Link href="/ongoing-activities#ce2-cover-crop-planting-on-beds" className="btn-primary mt-6">
                Explore CE2 Research
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ce2HomepagePhotos.map((photo) => (
                <figure key={photo.src} className="group overflow-hidden rounded-lg border border-cotton-200 bg-white shadow-sm">
                  <Image
                    src={getAssetPath(photo.src)}
                    width={900}
                    height={1200}
                    alt={photo.alt}
                    className="aspect-[4/5] w-full object-cover transition duration-200 group-hover:scale-[1.015]"
                  />
                  <figcaption className="border-t border-cotton-200 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-cotton-700">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mb-8 -mt-8 bg-[#fbfcf7] py-4 md:-mb-10 md:-mt-10 md:py-5">
        <div className="container-page">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {homepagePhotos.map((photo) => (
              <figure key={photo.src} className="group overflow-hidden rounded-lg border border-cotton-200 bg-white shadow-sm">
                <Image
                  src={getAssetPath(photo.src)}
                  width={640}
                  height={640}
                  alt={photo.alt}
                  className="aspect-square w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                />
                <figcaption className="border-t border-cotton-200 px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-cotton-700">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="container-page">
          <SectionHeader
            eyebrow="Project at a Glance"
            title="Verified facts from the project record"
            description="These numbers and labels come from the local project data and annual-report-derived content already used by the site."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {glanceItems.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Featured Research"
              title="Research stories with field, lab, and data context"
              description="Each feature points to a deeper page rather than repeating the complete archive on the homepage."
            />
            <Link href="/ongoing-activities" className="text-link inline-flex items-center gap-2 text-sm">
              Current activities
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {featuredResearch.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="focus-ring group grid overflow-hidden rounded-lg border border-cotton-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-cotton-300 hover:shadow-md md:grid-cols-[0.42fr_0.58fr]"
              >
                <Image
                  src={getAssetPath(feature.image)}
                  width={760}
                  height={520}
                  alt={feature.alt}
                  className="h-full min-h-56 w-full object-cover transition duration-200 group-hover:scale-[1.015]"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold leading-8 text-cotton-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-cotton-900/70">{feature.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-skydata-700">
                    Read research details
                    <ArrowRight aria-hidden="true" size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Latest Updates"
              title="News, field activity, and upcoming project events"
              description="A quick entry point into project progress, outreach, scientific outputs, and scheduled activities."
            />
            <div className="flex flex-wrap gap-3">
              <Link href="/news" className="btn-secondary px-4 py-2">
                <Newspaper aria-hidden="true" size={16} />
                All news
              </Link>
              <Link href="/events" className="btn-secondary px-4 py-2">
                <CalendarDays aria-hidden="true" size={16} />
                All events
              </Link>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.68fr_0.32fr]">
            <div className="grid gap-5 md:grid-cols-3">
              {latestNews.map((item) => (
                <NewsCard key={item.title} item={item} />
              ))}
            </div>
            <aside className="rounded-lg border border-cotton-200 bg-cotton-50 p-5 shadow-sm">
              <p className="eyebrow">Upcoming Events</p>
              <div className="mt-4 grid gap-4">
                {upcomingEvents.map((event) => (
                  <Link
                    key={event.title}
                    href="/events"
                    className="focus-ring rounded-md border border-cotton-200 bg-white p-4 transition hover:border-cotton-300"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">{event.category}</p>
                    <h3 className="mt-2 text-base font-semibold leading-6 text-cotton-900">{event.title}</h3>
                    <p className="mt-1 text-sm text-cotton-900/65">{event.date}</p>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-cotton-900/70">{event.summary}</p>
                    {event.image ? (
                      <figure className="mt-3 overflow-hidden rounded-md border border-cotton-200 bg-cotton-50">
                        <Image
                          src={getAssetPath(event.image)}
                          width={640}
                          height={860}
                          alt={event.imageAlt ?? event.title}
                          className="h-auto w-full object-contain"
                        />
                        {event.imageCaption ? (
                          <figcaption className="border-t border-cotton-200 px-3 py-2 text-xs font-medium text-cotton-900/70">
                            {event.imageCaption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Follow the Progress"
        title="Follow the progress of SmartCotton"
        description="Explore current activities, scan scientific outputs, or contact the project team for research, Extension, publication, and partnership questions."
        actions={[
          { label: "Research updates", href: "/ongoing-activities" },
          { label: "Publications", href: "/publications", variant: "secondary" },
          { label: "Contact the team", href: "/contact", variant: "secondary" }
        ]}
        image={{
          src: "/images/smartcotton-project-timeline.png",
          alt: "SAS Cotton Project timeline from 2024 to 2029 showing major project phases"
        }}
      />
    </>
  );
}
