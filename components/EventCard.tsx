import type { EventItem } from "@/content/events";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="rounded-lg border border-cotton-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-soil-700">{event.status}</p>
      <h3 className="mt-2 text-xl font-semibold text-cotton-900">{event.title}</h3>
      <p className="mt-2 text-sm font-medium text-cotton-900/75">
        {event.date} · {event.location}
      </p>
      <p className="mt-3 text-sm leading-6 text-cotton-900/70">{event.summary}</p>
    </article>
  );
}
