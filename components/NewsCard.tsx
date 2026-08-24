import Image from "next/image";
import type { NewsItem } from "@/content/news";
import { getAssetPath } from "@/utils/path";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="surface-card group overflow-hidden">
      <Image
        src={getAssetPath(item.image)}
        width={720}
        height={420}
        alt={item.alt}
        className="image-zoom aspect-[12/7] w-full object-cover"
      />
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">{item.date}</p>
        <h3 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-cotton-900/70">{item.summary}</p>
      </div>
    </article>
  );
}
