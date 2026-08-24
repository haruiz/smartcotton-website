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
  description: "Read SmartCotton news, project announcements, research milestones, partner updates, and stories from climate-smart cotton field work.",
  openGraph: {
    title: "News | SmartCotton",
    description: "News, announcements, and research updates from the SmartCotton project."
  }
};

export default function NewsPage() {
  const [leadItem, ...remainingItems] = newsItems;

  return (
    <section className="section-band">
      <div className="container-page">
        <SectionHeader
          as="h1"
          eyebrow="News"
          title="Updates from the SmartCotton network"
          description="Short project stories from field research, outreach, annual meetings, publications, and training."
        />

        {leadItem ? (
          <article className="surface-card group mt-10 grid overflow-hidden bg-cotton-50 lg:grid-cols-[1.1fr_0.9fr]">
            <Image
              src={getAssetPath(leadItem.image)}
              width={1100}
              height={700}
              alt={leadItem.alt}
              className="image-zoom h-full min-h-[18rem] w-full object-cover"
              priority
            />
            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">{leadItem.date}</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cotton-900">{leadItem.title}</h2>
              <p className="mt-4 text-sm leading-6 text-cotton-900/70">{leadItem.summary}</p>
              <Link href="/ongoing-activities" className="text-link mt-5 inline-flex items-center gap-2 text-sm">
                See project activity
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>
        ) : null}

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {remainingItems.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
