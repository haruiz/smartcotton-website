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
      { label: "Project Team", href: "/project-team" }
    ]
  },
  {
    label: "Research",
    items: [
      { label: "Research Highlights", href: "/research-highlights" },
      { label: "Ongoing Activities", href: "/ongoing-activities" },
      { label: "Photo Gallery", href: "/gallery" }
    ]
  },
  { label: "Publications", href: "/publications" },
  { label: "Outreach", href: "/outreach" },
  {
    label: "Updates",
    items: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" }
    ]
  },
  { label: "Contact", href: "/contact" }
] as const satisfies readonly NavItem[];

export const flatNavItems: readonly NavLink[] = navItems.flatMap((item): NavLink[] =>
  "items" in item ? [...item.items] : [item]
);

export const contact = {
  organization: "Texas A&M AgriLife",
  building: "Soil and Crop Sciences, Heep Center",
  address: "370 Olsen Blvd., College Station, TX 77843, TAMU-2474",
  footerEmail: "deepak.loura@agnet.tamu.edu",
  projectContacts: [
    {
      name: "Muthukumar Bagavathiannan",
      role: "PI/LEAD",
      email: "muthu.bagavathiannan@tamu.edu"
    },
    {
      name: "Deepak Loura",
      role: "Project Manager",
      email: "deepak.loura@agnet.tamu.edu"
    }
  ]
};

export const socialLinks = [
  {
    label: "SAS Cotton LinkedIn",
    note: "Official project LinkedIn page.",
    href: "https://www.linkedin.com/in/nifa-sas-smart-cotton-project-2b067537a/"
  },
  {
    label: "Muthukumar Bagavathiannan - Project Lead / PI",
    href: "https://www.linkedin.com/in/muthukumar-bagavathiannan-22b20847/"
  },
  {
    label: "Deepak Loura - Project Manager",
    href: "https://www.linkedin.com/in/deepakloura72294/"
  }
] as const;

export const focusAreas = [
  "Soil organic carbon and carbon-intensity baselines",
  "Reduced tillage, cover crops, living mulches, and soil health",
  "AMF, microbiome, pathobiome, and cotton root traits",
  "UAS, sensors, satellite data, and AI/ML-ready datasets",
  "Economics, risk, insurance, and market opportunities",
  "Farmer adoption, Extension, education, and rural workforce development"
];
