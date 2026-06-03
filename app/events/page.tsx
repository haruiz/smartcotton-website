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
    <section className="bg-cotton-50 py-16">
      <div className="container-page">
        <SectionHeader
          eyebrow="Events"
          title="Upcoming and past SmartCotton activities"
          description="SmartCotton events create opportunities for researchers, growers, students, extension specialists, and partners to exchange findings and practical guidance."
        />
        <EventCalendar events={events} />
      </div>
    </section>
  );
}
