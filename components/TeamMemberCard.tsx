import Image from "next/image";
import { clsx } from "clsx";
import { ExternalLink } from "lucide-react";
import type { TeamMember } from "@/content/team";
import { getAssetPath } from "@/utils/path";

type TeamMemberCardProps = {
  member: TeamMember;
  featured?: boolean;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function roleFocus(member: TeamMember) {
  if (member.group === "Project Leadership") return "Project leadership and coordination";
  if (member.group === "Co-PIs / Project Investigators") return "Research, Extension, technology, economics, or partner objective leadership";
  if (member.group === "Postdoctoral Researchers and Graduate Students") return "Field, laboratory, greenhouse, data, and training support";
  if (member.group === "Project Evaluators") return "Project evaluation and assessment";
  if (member.group === "Trust In Food / Farm Journal Team") return "Outreach and stakeholder engagement";
  if (member.group === "Soil Health Institute Collaborators") return "Soil health and adoption collaboration";
  return "Stakeholder advisory input";
}

export function TeamMemberCard({ member, featured = false }: TeamMemberCardProps) {
  const hasPortrait = member.picture !== "/images/team-placeholder.svg";

  return (
    <article
      className={clsx(
        "surface-card flex h-full flex-col p-5",
        featured && "bg-white"
      )}
    >
      {hasPortrait ? (
        <Image
          src={getAssetPath(member.picture)}
          width={320}
          height={320}
          alt={`Portrait of ${member.name}`}
          className="aspect-square w-full rounded-md border border-cotton-200 bg-cotton-50 object-contain object-center"
        />
      ) : (
        <div
          className="flex aspect-square w-full items-center justify-center rounded-md border border-cotton-200 bg-cotton-100 text-2xl font-semibold text-cotton-900"
          aria-label={`Portrait placeholder for ${member.name}`}
        >
          {getInitials(member.name)}
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <h3 className="mt-4 text-xl font-semibold leading-7 text-cotton-900">{member.name}</h3>
        <dl className="mt-3 grid gap-3 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-cotton-700">Role</dt>
            <dd className="mt-1 leading-6 text-cotton-900/75">{member.position}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-cotton-700">Affiliation</dt>
            <dd className="mt-1 leading-6 text-cotton-900/75">{member.institution}</dd>
          </div>
        </dl>
      </div>
      <div className="mt-4 rounded-md border border-cotton-200 bg-cotton-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">Role focus</p>
        <p className="mt-1 text-sm leading-5 text-cotton-900/70">{roleFocus(member)}</p>
      </div>
      {member.bio ? (
        featured ? (
          <p className="mt-3 text-sm leading-6 text-cotton-900/70">{member.bio}</p>
        ) : (
          <details className="mt-3 rounded-md border border-cotton-200 bg-cotton-50 p-3">
            <summary className="cursor-pointer text-sm font-semibold text-cotton-900">Bio</summary>
            <p className="mt-2 text-sm leading-6 text-cotton-900/70">{member.bio}</p>
          </details>
        )
      ) : null}
      {member.profileLink ? (
        <a
          href={member.profileLink}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary mt-5 w-fit px-3 py-2"
        >
          Profile
          <ExternalLink aria-hidden="true" size={15} />
        </a>
      ) : null}
    </article>
  );
}
