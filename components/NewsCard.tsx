import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/content/news";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="overflow-hidden rounded-lg border border-cotton-200 bg-white shadow-sm">
      <Image src={item.image} width={720} height={420} alt={item.alt} className="aspect-[12/7] w-full object-cover" />
      <div className="p-6">
        <p className="text-sm font-medium text-cotton-700">{item.date}</p>
        <h3 className="mt-2 text-xl font-semibold leading-7 text-cotton-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-cotton-900/70">{item.summary}</p>
        <Link href="/news" className="focus-ring mt-4 inline-block rounded-sm text-sm font-semibold text-skydata-700 underline">
          Read update
        </Link>
      </div>
    </article>
  );
}
