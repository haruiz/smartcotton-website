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
  return (
    <article
      className={clsx(
        "h-full rounded-lg border border-cotton-200 bg-white p-5 shadow-sm transition duration-200 hover:border-cotton-300 hover:shadow-soft",
        featured && "bg-white"
      )}
    >
      <Image
        src={getAssetPath(member.picture)}
        width={320}
        height={240}
        alt={`Portrait of ${member.name}`}
        className={clsx("w-full rounded-md bg-cotton-50 object-contain", featured ? "aspect-[16/10]" : "aspect-[4/3]")}
      />
      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-cotton-700">{member.institution}</p>
      <h3 className={clsx("mt-1 font-semibold text-cotton-900", featured ? "text-2xl" : "text-lg")}>{member.name}</h3>
      <p className="mt-1 text-sm text-cotton-900/70">{member.position}</p>
      {member.bio ? <p className="mt-3 text-sm leading-6 text-cotton-900/70">{member.bio}</p> : null}
      {member.profileLink ? (
        <a
          href={member.profileLink}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-cotton-300 px-3 py-2 text-sm font-semibold text-cotton-900 transition hover:bg-cotton-100"
        >
          Profile
          <ExternalLink aria-hidden="true" size={15} />
        </a>
      ) : null}
    </article>
  );
}
