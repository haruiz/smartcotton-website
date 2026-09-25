import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { newsItems } from "@/content/news";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "News",
  description:
    "Read SmartCotton news, project announcements, research milestones, partner updates, and stories from climate-smart cotton field work.",
  openGraph: {
    title: "News | SmartCotton",
    description: "News, announcements, and research updates from the SmartCotton project."
  }
};

export default function NewsPage() {
  const [leadItem, ...remainingItems] = newsItems;

  return (
    <>
      <section className="bg-white py-14 md:py-16 lg:py-20">
        <div className="container-page">
          <div>
            <p className="eyebrow">News & Project Updates</p>
            <h1 className="heading-display mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
              SmartCotton news and project updates
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-cotton-900/75 sm:text-lg">
              Recent project activities, field updates, publications, events, and team milestones.
            </p>
          </div>
        </div>
      </section>

      {leadItem ? (
        <section className="section-band-muted">
          <div className="container-page">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                eyebrow="Featured Story"
                title="Project progress across the Cotton Belt"
                description="The lead story gives visitors a quick view of recent project momentum, with details routed to the relevant project page."
              />
              <Link href={leadItem.href} className="text-link inline-flex items-center gap-2 text-sm">
                Read more
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <article className="surface-card group mt-8 grid overflow-hidden bg-white lg:grid-cols-[1.08fr_0.92fr]">
              <Image
                src={getAssetPath(leadItem.image)}
                width={1180}
                height={760}
                alt={leadItem.alt}
                className="image-zoom h-full min-h-[20rem] w-full object-cover"
                priority
              />
              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="chip text-skydata-700">{leadItem.category}</span>
                  <span className="chip bg-white">{leadItem.date}</span>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cotton-900">{leadItem.title}</h2>
                <p className="mt-4 text-sm leading-6 text-cotton-900/70">{leadItem.summary}</p>
                <Link href={leadItem.href} className="btn-primary mt-6 w-fit">
                  Read more
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section className="section-band">
        <div className="container-page">
          <div>
            <SectionHeader
              eyebrow="Newsroom"
              title="Project stories and updates"
              description="Cards are grouped by recent activity type so visitors can scan updates without repeating general project descriptions."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {remainingItems.map((item) => (
                <NewsCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
