import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCarousel } from "@/components/TeamCarousel";
import { teamMembers } from "@/content/team";

export const metadata: Metadata = {
  title: "Project Team",
  description:
    "Meet the SmartCotton leadership, researchers, extension specialists, collaborators, industry partners, and students advancing climate-smart cotton systems.",
  openGraph: {
    title: "Project Team | SmartCotton",
    description: "SmartCotton team members and collaborators supporting research, extension, technology development, and stakeholder engagement."
  }
};

export default function ProjectTeamPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <SectionHeader
          eyebrow="Project Team"
          title="Leadership, Researchers, and Collaborators"
          description="The SmartCotton project brings together a multidisciplinary team of principal investigators, researchers, extension specialists, industry partners, and students advancing sustainable cotton production through research, technology development, and stakeholder engagement."
        />
        <TeamCarousel members={teamMembers} itemsPerPage={6} />
      </div>
    </section>
  );
}
