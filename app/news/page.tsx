import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { newsItems } from "@/content/news";

export const metadata: Metadata = {
  title: "News",
  description: "Read SmartCotton news, project announcements, research milestones, partner updates, and stories from climate-smart cotton field work.",
  openGraph: {
    title: "News | SmartCotton",
    description: "News, announcements, and research updates from the SmartCotton project."
  }
};

export default function NewsPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <SectionHeader
          eyebrow="News"
          title="Project announcements and research updates"
          description="Stay informed about SmartCotton milestones, field activities, partner contributions, and research developments across the project."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
