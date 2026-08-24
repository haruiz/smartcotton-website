import { ExternalLink } from "lucide-react";
import type { Publication } from "@/content/publications";

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className="surface-card p-6">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="chip bg-cotton-100">{publication.type}</span>
        <span className="chip text-skydata-700">{publication.status}</span>
        <span className="text-cotton-900/60">{publication.year}</span>
        <span className="text-cotton-900/60">{publication.reportingPeriod}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-cotton-900/75">{publication.citation}</p>
      {publication.link ? (
        <a
          className="btn-primary mt-5 bg-skydata-700 px-4 py-2 hover:bg-skydata-500"
          href={publication.link}
          rel="noreferrer"
          target="_blank"
        >
          Open source
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      ) : null}
    </article>
  );
}
