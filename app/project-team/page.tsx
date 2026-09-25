import type { Metadata } from "next";
import { UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamGroups, teamMembers } from "@/content/team";

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

function groupFocus(name: string) {
  if (name === "Project Leadership") return "Project direction, coordination, and USDA-NIFA SAS-CAP management.";
  if (name === "Co-PIs / Project Investigators") return "Objective leadership across research, Extension, economics, technology, and partner activities.";
  if (name === "Postdoctoral Researchers and Graduate Students") return "Hands-on field, greenhouse, laboratory, data, and publication work.";
  if (name === "Project Evaluators") return "Evaluation support for research, Extension, education, and project performance.";
  if (name === "Trust In Food / Farm Journal Team") return "Producer engagement, outreach, and stakeholder communication.";
  if (name === "Soil Health Institute Collaborators") return "Soil health and farmer adoption collaboration.";
  return "External stakeholder advice from production, industry, market, and partner perspectives.";
}

function groupEyebrow(name: string, memberCount: number) {
  if (name === "Project Leadership") return `${memberCount} members | Project leadership`;
  return `${memberCount} members | A-Z by name`;
}

export default function ProjectTeamPage() {
  return (
    <section className="section-band">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <SectionHeader
            as="h1"
            eyebrow="Project Team"
            title="The people behind SmartCotton"
            description="A Cotton Belt team connecting field science, Extension, economics, technology, soil health, stakeholder engagement, evaluation, and training."
          />
          <div className="surface-card-muted p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-cotton-900 shadow-sm">
                <UsersRound aria-hidden="true" size={20} />
              </div>
              <div>
                <p className="text-2xl font-semibold leading-none text-cotton-900">{teamMembers.length}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cotton-900/60">Listed project members and advisors</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-cotton-900/70">
              Profiles are grouped by verified role categories and listed alphabetically by name within each section.
            </p>
          </div>
        </div>

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
                <p className="eyebrow">{groupEyebrow(group.name, group.members.length)}</p>
                <h2 id={`${groupId(group.name)}-heading`} className="mt-2 font-serif text-3xl font-semibold text-cotton-900">
                  {group.name}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-cotton-900/70">{group.description}</p>
                <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-cotton-900/75">
                  {groupFocus(group.name)}
                </p>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member) => (
                  <TeamMemberCard key={`${group.name}-${member.name}`} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
