import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsItem } from "@/content/news";
import { getAssetPath } from "@/utils/path";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden">
      <Image
        src={getAssetPath(item.image)}
        width={720}
        height={420}
        alt={item.alt}
        className="image-zoom aspect-[12/7] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <span className="chip text-skydata-700">{item.category}</span>
          <span className="chip bg-white">{item.date}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-cotton-900/70">{item.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-md bg-cotton-50 px-2.5 py-1 text-xs font-semibold text-cotton-900/60">
              {tag}
            </span>
          ))}
        </div>
        <Link href={item.href} className="text-link mt-auto inline-flex items-center gap-2 pt-5 text-sm">
          Read more
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </article>
  );
}
