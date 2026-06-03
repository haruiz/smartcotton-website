import { ExternalLink } from "lucide-react";
import type { Publication } from "@/content/publications";

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className="rounded-lg border border-cotton-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded-full bg-cotton-100 px-3 py-1 font-medium text-cotton-800">{publication.type}</span>
        <span className="text-cotton-900/60">{publication.year}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-7 text-cotton-900">{publication.title}</h3>
      <p className="mt-3 text-sm leading-6 text-cotton-900/70">{publication.authors}</p>
      <p className="mt-2 text-sm font-medium text-cotton-900/80">{publication.venue}</p>
      {publication.link ? (
        <a
          className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-skydata-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-skydata-800"
          href={publication.link}
          rel="noreferrer"
          target="_blank"
        >
          Original publication
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      ) : null}
    </article>
  );
}
