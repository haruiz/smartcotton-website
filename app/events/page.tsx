import type { Metadata } from "next";
import { EventCalendar } from "@/components/EventCalendar";
import { SectionHeader } from "@/components/SectionHeader";
import { events } from "@/content/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Find upcoming and past SmartCotton field days, workshops, webinars, conference sessions, and extension events.",
  openGraph: {
    title: "Events | SmartCotton",
    description: "Upcoming and past SmartCotton events, workshops, webinars, field days, and conference updates."
  }
};

export default function EventsPage() {
  return (
    <section className="section-band-muted">
      <div className="container-page">
        <SectionHeader
          as="h1"
          eyebrow="Events"
          title="Field days, meetings, and project milestones"
          description="A calendar-style view of SmartCotton events for growers, researchers, students, Extension teams, and partners."
        />
        <EventCalendar events={events} />
      </div>
    </section>
  );
}
