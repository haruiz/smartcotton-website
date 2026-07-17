export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  items: readonly NavLink[];
};

export type NavItem = NavLink | NavGroup;

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    items: [
      { label: "Project", href: "/project" },
      { label: "Project Team", href: "/project-team" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    label: "Research",
    items: [
      { label: "Research Highlights", href: "/research-highlights" },
      { label: "Ongoing Activities", href: "/ongoing-activities" },
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Publications", href: "/publications" }
    ]
  },
  {
    label: "Updates",
    items: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" }
    ]
  }
] as const satisfies readonly NavItem[];

export const flatNavItems: readonly NavLink[] = navItems.flatMap((item): NavLink[] =>
  "items" in item ? [...item.items] : [item]
);

export const contact = {
  organization: "Texas A&M AgriLife",
  building: "Heep Center",
  address: "370 Olsen Blvd., College Station, TX 77843",
  email: "smartcotton@tamu.edu"
};

export const focusAreas = [
  "Soil health and carbon sequestration",
  "Regenerative production practices",
  "Greenhouse gas reduction",
  "Input-use efficiency",
  "AI/ML-enabled precision agriculture",
  "Pest, nutrient, and water management"
];
