import teamData from "./team.json";

export type TeamGroupName =
  | "Project Leadership"
  | "Co-PIs / Project Investigators"
  | "Postdoctoral Researchers and Graduate Students"
  | "Project Evaluators"
  | "Trust In Food / Farm Journal Team"
  | "Soil Health Institute Collaborators"
  | "Stakeholder Advisory Panel";

export type TeamMember = {
  name: string;
  picture: string;
  position: string;
  institution: string;
  group: TeamGroupName;
  profileLink?: string;
  bio?: string;
};

export const teamMembers = teamData as TeamMember[];

export const teamGroupOrder: TeamGroupName[] = [
  "Project Leadership",
  "Co-PIs / Project Investigators",
  "Postdoctoral Researchers and Graduate Students",
  "Project Evaluators",
  "Trust In Food / Farm Journal Team",
  "Soil Health Institute Collaborators",
  "Stakeholder Advisory Panel"
];

export const teamGroupDescriptions: Record<TeamGroupName, string> = {
  "Project Leadership": "Project lead and project management contacts identified in the source document.",
  "Co-PIs / Project Investigators": "Investigators leading research, Extension, economics, technology, and partner activities across institutions.",
  "Postdoctoral Researchers and Graduate Students": "Postdoctoral researchers and graduate trainees listed in the project team source table.",
  "Project Evaluators": "Professional, research, education, and Extension evaluators supporting project assessment.",
  "Trust In Food / Farm Journal Team": "Outreach and stakeholder engagement collaborators from Trust In Food and Farm Journal.",
  "Soil Health Institute Collaborators": "Soil Health Institute collaborators supporting soil health and farmer adoption work.",
  "Stakeholder Advisory Panel": "External stakeholder advisors representing production, industry, market, and partner perspectives."
};

function sortMembersByName(members: TeamMember[]) {
  return [...members].sort((first, second) => {
    const firstName = first.name.replace(/\s*\([^)]*\)/g, "").trim();
    const secondName = second.name.replace(/\s*\([^)]*\)/g, "").trim();

    return firstName.localeCompare(secondName, undefined, { sensitivity: "base" });
  });
}

const leadershipOrder = ["Muthukumar Bagavathiannan", "Deepak Loura"];

function sortMembers(name: TeamGroupName, members: TeamMember[]) {
  if (name !== "Project Leadership") {
    return sortMembersByName(members);
  }

  return [...members].sort((first, second) => {
    const firstPriority = leadershipOrder.indexOf(first.name);
    const secondPriority = leadershipOrder.indexOf(second.name);

    if (firstPriority !== -1 || secondPriority !== -1) {
      return (firstPriority === -1 ? Number.MAX_SAFE_INTEGER : firstPriority) -
        (secondPriority === -1 ? Number.MAX_SAFE_INTEGER : secondPriority);
    }

    return first.name.localeCompare(second.name, undefined, { sensitivity: "base" });
  });
}

export const teamGroups = teamGroupOrder.map((name) => ({
  name,
  description: teamGroupDescriptions[name],
  members: sortMembers(name, teamMembers.filter((member) => member.group === name))
}));
