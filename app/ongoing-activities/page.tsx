import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { activities } from "@/content/activities";

export const metadata: Metadata = {
  title: "Ongoing Activities",
  description:
    "Follow SmartCotton field trials, data collection campaigns, technology demonstrations, workshops, and extension activities supporting climate-smart cotton research.",
  openGraph: {
    title: "Ongoing Activities | SmartCotton",
    description: "Current SmartCotton field research, technology demonstrations, data collection, and extension activities."
  }
};

export default function OngoingActivitiesPage() {
  return (
    <section className="bg-cotton-50 py-16">
      <div className="container-page">
        <SectionHeader
          eyebrow="Ongoing Activities"
          title="Field research, extension, and technology demonstrations"
          description="Current activities connect plot- and field-scale measurements with grower engagement, technology evaluation, and decision-support resources."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {activities.map((activity) => (
            <Card key={activity.title} title={activity.title} description={activity.summary} />
          ))}
        </div>
      </div>
    </section>
  );
}
