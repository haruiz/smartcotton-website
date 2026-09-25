import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ExternalLink,
  Film,
  GraduationCap,
  Leaf,
  Microscope,
  SearchCheck,
  Sprout,
  UsersRound
} from "lucide-react";
import { ObjectiveCard } from "@/components/ObjectiveCard";
import { activities, featuredActivityUpdates } from "@/content/activities";
import { featuredPartnerInstitutions } from "@/content/projectNetwork";
import {
  northCarolinaCoverCropGallery,
  northCarolinaSoilBaselineGallery,
  officialProject
} from "@/content/projectFeatures";
import { objectiveResearchDetails } from "@/content/researchFramework";
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

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "NC Update", href: "#north-carolina-update" },
  { label: "SOC Baselines", href: "#north-carolina-soil-baselines" },
  { label: "Themes", href: "#themes" },
  { label: "Objectives", href: "#objective-research" },
  { label: "Field Work", href: "#field-work" }
];

const themeCards = [
  {
    label: "Soil & Carbon",
    title: "Baselines for climate-smart cotton",
    description: researchHighlights[0].summary,
    icon: Microscope,
    image: "/images/project-photos/cotton-flower-canopy.jpg"
  },
  {
    label: "Regenerative Production",
    title: "Field systems that build resilience",
    description: researchHighlights[1].summary,
    icon: Sprout,
    image: "/images/project-photos/cotton-row-canopy.jpg"
  },
  {
    label: "Precision Agriculture",
    title: "Sensors, UAS, and site-specific management",
    description: researchHighlights[3].summary,
    icon: SearchCheck,
    image: "/images/project-photos/cotton-harvest-machinery.jpg"
  },
  {
    label: "AI, ML & Simulation",
    title: "Decision support for changing climates",
    description: researchHighlights[8].summary,
    icon: BrainCircuit,
    image: "/images/project-photos/cotton-dark-boll.jpg"
  },
  {
    label: "Economics & Adoption",
    title: "Profitability, risk, and producer decisions",
    description: researchHighlights[4].summary,
    icon: BarChart3,
    image: "/images/annual-meeting-2025-discussion-1.jpeg"
  },
  {
    label: "Extension & Workforce",
    title: "Training and knowledge transfer",
    description: researchHighlights[7].summary,
    icon: GraduationCap,
    image: "/images/annual-meeting-2025-team-screen.jpeg"
  }
];

const workStreams = [
  {
    label: "Field Systems",
    icon: Leaf,
    items: activities.slice(0, 3)
  },
  {
    label: "Digital & Analytical",
    icon: BrainCircuit,
    items: [activities[3]]
  },
  {
    label: "People & Impact",
    icon: UsersRound,
    items: activities.slice(4, 7)
  }
];

const objectiveIcons = [Leaf, BrainCircuit, BarChart3, SearchCheck, UsersRound, GraduationCap];

const ce2FeaturedUpdate = featuredActivityUpdates.find((update) => update.slug === "ce2-cover-crop-planting-on-beds") ?? featuredActivityUpdates[0];
const soilSampleUpdate =
  featuredActivityUpdates.find((update) => update.slug === "soil-sample-logistics-carbon-baselines") ?? featuredActivityUpdates[1] ?? featuredActivityUpdates[0];

const fieldCards = [
  {
    category: ce2FeaturedUpdate.eyebrow,
    title: ce2FeaturedUpdate.title,
    summary: ce2FeaturedUpdate.summary,
    meta: "College Station, Texas",
    image: ce2FeaturedUpdate.images[0].src,
    alt: ce2FeaturedUpdate.images[0].alt,
    href: "/ongoing-activities#ce2-cover-crop-planting-on-beds"
  },
  {
    category: soilSampleUpdate.eyebrow,
    title: soilSampleUpdate.title,
    summary: soilSampleUpdate.summary,
    meta: "Texas A&M laboratory workflow",
    image: soilSampleUpdate.images[0].src,
    alt: soilSampleUpdate.images[0].alt,
    href: "/ongoing-activities#soil-sample-logistics-carbon-baselines"
  },
  {
    category: "Professional Visit",
    title: "Visit with Dr. Sangu Angadi",
    summary: "Graduate students discussed crop physiology, water conservation, buffer strips, and Ogallala Aquifer protection.",
    meta: "Texas A&M AgriLife",
    image: "/images/gallery/sangu-angadi-visit-student-session.jpeg",
    alt: "Dr. Sangu Angadi with SmartCotton graduate students during an interactive session",
    href: "/gallery"
  }
];

const northCarolinaPhotos = northCarolinaCoverCropGallery.photos;
const northCarolinaSoilBaselinePhotos = northCarolinaSoilBaselineGallery.photos;
const northCarolinaProjectUrl = "https://www.linkedin.com/in/nifa-sas-smart-cotton-project-2b067537a/";

export default function ResearchHighlightsPage() {
  const featuredStory = ce2FeaturedUpdate;

  return (
    <>
      <section id="overview" className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-section-rise">
            <p className="eyebrow">SmartCotton Research</p>
            <h1 className="heading-display mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
              Researching the future of resilient cotton systems
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-cotton-900/75 sm:text-lg">
              SmartCotton integrates regenerative production, soil health, precision agriculture, economics, Extension,
              and education across diverse environments of the U.S. Cotton Belt.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#themes" className="btn-primary">
                Explore research themes
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <Link href="/publications" className="btn-secondary">
                View publications
              </Link>
            </div>
          </div>
          <div className="animate-section-rise overflow-hidden rounded-xl border border-cotton-200 bg-cotton-50 shadow-soft">
            <Image
              src={getAssetPath("/images/project-photos/cotton-dark-boll.jpg")}
              width={900}
              height={650}
              alt="Cotton boll against dark leaves in a project field"
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-40 border-y border-cotton-200/80 bg-[#fbfcf7]/95 backdrop-blur" aria-label="Research page sections">
        <div className="container-page flex gap-2 overflow-x-auto py-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring shrink-0 rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cotton-900/70 transition hover:bg-white hover:text-cotton-900">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="bg-white py-8">
        <div className="container-page grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "6", label: "Research objectives" },
            { value: featuredPartnerInstitutions.length, label: "Partner institutions" },
            { value: "Multi-state", label: "Cotton Belt research network" },
            { value: officialProject.projectPeriod, label: "Project period" }
          ].map((metric) => (
            <div key={metric.label} className="rounded-lg border border-cotton-200 bg-cotton-50/70 p-4">
              <p className="text-2xl font-semibold text-cotton-900">{metric.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-cotton-900/60">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="north-carolina-update" className="border-y border-cotton-200/80 bg-[#fbfcf7] py-14 md:py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="overflow-hidden rounded-xl border border-cotton-200 bg-cotton-950 shadow-sm">
              <video
                className="aspect-[16/10] w-full bg-cotton-950 object-cover"
                controls
                preload="metadata"
                poster={getAssetPath("/images/research/nc-cover-crop-planting.jpeg")}
              >
                <source src={getAssetPath("/videos/research/nc-overflowing-cotton.mov")} />
                <a className="text-white underline" href={getAssetPath("/videos/research/nc-overflowing-cotton.mov")}>
                  View the North Carolina field video
                </a>
              </video>
              <div className="flex items-center gap-2 border-t border-white/10 bg-cotton-950 px-4 py-3 text-sm font-semibold text-white/85">
                <Film aria-hidden="true" className="h-4 w-4 text-cotton-200" />
                North Carolina cover crop field activity
              </div>
            </div>

            <div>
              <p className="eyebrow">North Carolina Research Highlight</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                CE2 cover crop planting on beds moves from field work to sampling
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-cotton-900/72 sm:text-base sm:leading-7">
                <p>
                  As part of the{" "}
                  <a
                    href={northCarolinaProjectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-skydata-700 underline decoration-skydata-300 underline-offset-4 transition hover:text-skydata-900"
                  >
                    NIFA-SAS Smart Cotton Project
                  </a>
                  , the North Carolina team is advancing CE2 research on cover crop planting on beds while keeping field
                  activities, crop monitoring, sampling, and biomass processing moving forward.
                </p>
                <p>
                  The photos capture just a few of the many steps behind the research, from planting and stand
                  evaluation to soil coring and field sampling.
                </p>
                <p>
                  Special thanks to <span className="font-semibold text-cotton-900">Avi Goldsmith</span>, a graduate
                  student, and <span className="font-semibold text-cotton-900">Dr. Ramon Leon</span> for leading this
                  work in North Carolina, along with the lab members and undergraduate interns whose support has been
                  important throughout the season.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/gallery" className="btn-primary">
                  View photos in gallery
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <a href={northCarolinaProjectUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                  Project LinkedIn
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {northCarolinaPhotos.map((photo) => (
              <article key={photo.title} className="overflow-hidden rounded-xl border border-cotton-200 bg-white shadow-sm">
                <Image
                  src={getAssetPath(photo.image)}
                  width={720}
                  height={900}
                  alt={photo.alt}
                  className="aspect-[4/3] w-full object-cover"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">
                    {northCarolinaCoverCropGallery.eyebrow}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-6 text-cotton-900">{photo.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/68">{photo.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="north-carolina-soil-baselines" className="bg-white py-14 md:py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="eyebrow">North Carolina Soil Baselines</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
                Soil organic carbon and nutrient baseline work expands to 24 fields
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-cotton-900/72 sm:text-base sm:leading-7">
                <p>
                  Our North Carolina team is making strong progress on the{" "}
                  <span className="font-semibold text-cotton-900">
                    soil organic carbon and nutrient baselines objective
                  </span>{" "}
                  under the{" "}
                  <a
                    href={northCarolinaProjectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-skydata-700 underline decoration-skydata-300 underline-offset-4 transition hover:text-skydata-900"
                  >
                    NIFA-SAS Smart Cotton Project
                  </a>
                  .
                </p>
                <p>
                  This summer, the team expanded the sampling network to{" "}
                  <span className="font-semibold text-cotton-900">24 fields</span> and began using a gas-powered soil
                  sampling system, making field collection much more efficient. Most samples are now processed, with
                  only a few remaining to dry and grind before shipment to Texas.
                </p>
                <p>
                  The photos capture different stages of the work, from field sampling and soil core collection to
                  sample preparation and grinding.
                </p>
                <p>
                  A big thank you to <span className="font-semibold text-cotton-900">Avi Goldsmith</span> and{" "}
                  <span className="font-semibold text-cotton-900">Dr. Ramon Leon</span> for leading this work in North
                  Carolina, along with the students and team members supporting the field and lab activities.
                </p>
                <p>
                  This is what strengthens a multi-state project: local teams generating high-quality data that come
                  together to support a larger research effort.
                </p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-cotton-200 bg-cotton-50 p-4">
                  <p className="text-2xl font-semibold text-cotton-900">24</p>
                  <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-cotton-900/60">
                    Fields sampled
                  </p>
                </div>
                <div className="rounded-lg border border-cotton-200 bg-cotton-50 p-4">
                  <p className="text-2xl font-semibold text-cotton-900">SOC</p>
                  <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-cotton-900/60">
                    Carbon baseline
                  </p>
                </div>
                <div className="rounded-lg border border-cotton-200 bg-cotton-50 p-4">
                  <p className="text-2xl font-semibold text-cotton-900">NC</p>
                  <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-cotton-900/60">
                    Local team data
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/gallery" className="btn-primary">
                  View photos in gallery
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <a href={northCarolinaProjectUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                  Project LinkedIn
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
              </div>
            </div>

            <div className="order-1 overflow-hidden rounded-xl border border-cotton-200 bg-cotton-50 shadow-sm lg:order-2">
              <Image
                src={getAssetPath("/images/research/nc-soc-field-aerial.jpeg")}
                width={1200}
                height={900}
                alt="Aerial view of North Carolina cotton fields in the soil baseline sampling network"
                className="aspect-[4/3] w-full object-cover"
                priority={false}
              />
              <div className="border-t border-cotton-200 bg-white px-4 py-3 text-sm font-semibold text-cotton-900/78">
                Field-scale sampling network for soil organic carbon and nutrient baselines
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {northCarolinaSoilBaselinePhotos.map((photo) => (
              <article key={photo.title} className="overflow-hidden rounded-xl border border-cotton-200 bg-cotton-50 shadow-sm">
                <Image
                  src={getAssetPath(photo.image)}
                  width={720}
                  height={900}
                  alt={photo.alt}
                  className="aspect-[4/3] w-full object-cover"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">
                    {northCarolinaSoilBaselineGallery.eyebrow}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-6 text-cotton-900">{photo.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cotton-900/68">{photo.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="themes" className="border-y border-cotton-200/80 bg-cotton-50 py-14 md:py-16 lg:py-20">
        <div className="container-page">
          <div className="max-w-3xl animate-section-rise">
            <p className="eyebrow">Core Research Themes</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">The science first, the archive second</h2>
            <p className="mt-3 text-sm leading-6 text-cotton-900/70">
              These themes organize the objective-level work described in SmartCotton annual reports and research outputs.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {themeCards.map((theme, index) => {
              const Icon = theme.icon;

              return (
                <article key={theme.label} className="animate-section-rise group overflow-hidden rounded-xl border border-cotton-200/90 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md" style={{ animationDelay: `${index * 40}ms` }}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={getAssetPath(theme.image)}
                      width={760}
                      height={440}
                      alt=""
                      className="aspect-[16/8] w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                    />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-white text-cotton-900 shadow-sm">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">{theme.label}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{theme.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-cotton-900/70">{theme.description}</p>
                    <a href="#objective-research" className="text-link mt-4 inline-flex items-center gap-2 text-sm">
                      Explore theme
                      <ArrowRight aria-hidden="true" size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="objective-research" className="bg-white py-14 md:py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">Objective-by-Objective Research</p>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl">Scientific questions behind each project objective</h2>
              <p className="mt-3 text-sm leading-6 text-cotton-900/70">
                These expandable cards summarize research questions, measurements, methods, locations, and current activity using project records already available in the site.
              </p>
            </div>
            <Link href="/project#objectives" className="text-link inline-flex items-center gap-2 text-sm">
              View project roadmap
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-8 grid gap-5">
            {objectiveResearchDetails.map((objective, index) => (
              <ObjectiveCard key={objective.number} objective={objective} icon={objectiveIcons[index] ?? Leaf} />
            ))}
          </div>
        </div>
      </section>

      <section id="field-work" className="bg-white py-14 md:py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-8 overflow-hidden rounded-xl border border-cotton-200 bg-cotton-50 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Image
              src={getAssetPath(featuredStory.images[0].src)}
              width={1000}
              height={700}
              alt={featuredStory.images[0].alt}
              className="aspect-[4/3] h-full w-full object-cover"
            />
            <div className="p-6 md:p-8">
              <p className="eyebrow">Featured Research</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cotton-900">
                {featuredStory.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-cotton-900/70">{featuredStory.summary}</p>
              <div className="mt-5 grid gap-2 text-sm text-cotton-900/70">
                <p>
                  <span className="font-semibold text-cotton-900">Objective:</span> {featuredStory.objective}
                </p>
                <p>
                  <span className="font-semibold text-cotton-900">Theme:</span> Cover crop planting strategies and raised-bed cotton systems
                </p>
              </div>
              <Link href="/ongoing-activities#ce2-cover-crop-planting-on-beds" className="btn-primary mt-6">
                Read research update
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {workStreams.map((stream) => {
              const Icon = stream.icon;

              return (
                <article key={stream.label} className="rounded-xl border border-cotton-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cotton-100 text-cotton-900">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-cotton-900">{stream.label}</h3>
                  </div>
                  <div className="mt-5 grid gap-4">
                    {stream.items.map((item) => (
                      <div key={item.title} className="border-l-2 border-cotton-200 pl-3">
                        <p className="text-sm font-semibold text-cotton-900">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-cotton-900/65">{item.summary}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {fieldCards.map((card, index) => (
              <Link key={card.title} href={card.href} className="focus-ring group overflow-hidden rounded-xl border border-cotton-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md" style={{ animationDelay: `${index * 45}ms` }}>
                <Image
                  src={getAssetPath(card.image)}
                  width={760}
                  height={460}
                  alt={card.alt}
                  className="aspect-[16/9] w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-skydata-700">{card.category}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-6 text-cotton-900">{card.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cotton-900/55">{card.meta}</p>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-cotton-900/70">{card.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-skydata-700">
                    Read update
                    <ArrowRight aria-hidden="true" size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cotton-900 py-12 text-white md:py-16">
        <div className="container-page flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow-on-dark">Related Pages</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight">Find outputs, outreach, and contact details</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              Research details stay here. Publication records, outreach activities, and contact routes are maintained on their dedicated pages.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/publications" className="btn-secondary border-white/30 bg-white text-cotton-900 hover:bg-cotton-100">
              Publications
            </Link>
            <Link href="/outreach" className="btn-secondary border-white/30 bg-white text-cotton-900 hover:bg-cotton-100">
              Outreach
            </Link>
            <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-cotton-100 px-5 py-3 text-sm font-semibold text-cotton-900 transition hover:bg-white">
              Contact
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
