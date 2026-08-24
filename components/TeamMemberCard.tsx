import Image from "next/image";
import { clsx } from "clsx";
import { ExternalLink } from "lucide-react";
import type { TeamMember } from "@/content/team";
import { getAssetPath } from "@/utils/path";

type TeamMemberCardProps = {
  member: TeamMember;
  featured?: boolean;
};

export function TeamMemberCard({ member, featured = false }: TeamMemberCardProps) {
  const hasPortrait = member.picture !== "/images/team-placeholder.svg";

  return (
    <article
      className={clsx(
        "surface-card h-full p-5",
        featured && "bg-white"
      )}
    >
      <Image
        src={getAssetPath(member.picture)}
        width={320}
        height={240}
        alt={`Portrait of ${member.name}`}
        className={clsx(
          "w-full rounded-md border border-cotton-200 bg-cotton-50",
          featured ? "aspect-[16/10]" : "aspect-[4/3]",
          hasPortrait ? "object-cover" : "object-contain p-6"
        )}
      />
      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-cotton-700">{member.institution}</p>
      <h3 className={clsx("mt-1 font-semibold text-cotton-900", featured ? "text-2xl" : "text-lg")}>{member.name}</h3>
      <p className="mt-1 text-sm text-cotton-900/70">{member.position}</p>
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
