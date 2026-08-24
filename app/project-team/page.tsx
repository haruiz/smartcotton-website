import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamGroups } from "@/content/team";

function groupId(name: string) {
  return name.toLowerCase().replaceAll(" ", "-").replaceAll("/", "").replaceAll("&", "and");
}

export const metadata: Metadata = {
  title: "Project Team",
  description:
    "Meet the SmartCotton project leadership, co-PIs, investigators, postdoctoral researchers, graduate students, evaluators, collaborators, and stakeholder advisory panel.",
  openGraph: {
    title: "Project Team | SmartCotton",
    description: "SmartCotton team members and collaborators supporting research, extension, technology development, evaluation, and stakeholder engagement."
  }
};

export default function ProjectTeamPage() {
  return (
    <section className="section-band">
      <div className="container-page">
        <SectionHeader
          as="h1"
          eyebrow="Project Team"
          title="The people behind SmartCotton"
          description="A Cotton Belt team connecting field science, Extension, economics, technology, soil health, stakeholder engagement, and training."
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {teamGroups.map((group) => (
            <a
              key={group.name}
              href={`#${groupId(group.name)}`}
              className="surface-card-muted focus-ring p-4 text-sm font-semibold text-cotton-900 transition hover:bg-cotton-100"
            >
              {group.name}
              <span className="mt-1 block text-xs font-medium text-cotton-900/60">{group.members.length} members</span>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-14">
          {teamGroups.map((group) => (
            <section
              key={group.name}
              id={groupId(group.name)}
              aria-labelledby={`${groupId(group.name)}-heading`}
              className="scroll-mt-24"
            >
              <div className="section-divider">
                <p className="eyebrow">{group.members.length} members</p>
                <h2 id={`${groupId(group.name)}-heading`} className="mt-2 font-serif text-3xl font-semibold text-cotton-900">
                  {group.name}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-cotton-900/70">{group.description}</p>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member) => (
                  <TeamMemberCard key={`${group.name}-${member.name}`} member={member} featured={group.name === "Project Leadership"} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
