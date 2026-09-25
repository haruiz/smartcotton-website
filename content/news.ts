export type NewsItem = {
  title: string;
  date: string;
  category: "Research" | "Field Activities" | "Soil Health" | "Precision Agriculture" | "Extension" | "Students" | "Publications" | "Events" | "Project News";
  tags: string[];
  summary: string;
  image: string;
  alt: string;
  href: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Year 2 progress expands SmartCotton research across eight states",
    date: "2025-2026 reporting period",
    category: "Project News",
    tags: ["Research", "Field Activities", "Soil Health"],
    summary:
      "The project advanced multi-state field research, soil and microbial analyses, regenerative practice evaluation, precision technology planning, economic analysis, farmer adoption studies, outreach, and training across Texas, New Mexico, Arizona, Georgia, North Carolina, Mississippi, Alabama, and Tennessee.",
    image: "/images/project-photos/cotton-open-boll-field.jpg",
    alt: "Open cotton boll representing multi-state SmartCotton progress",
    href: "/ongoing-activities"
  },
  {
    title: "SmartCotton teams document 46 scientific outputs from 2024-2026 source materials",
    date: "2024-2026",
    category: "Publications",
    tags: ["Research", "Publications", "Precision Agriculture"],
    summary:
      "Source materials include peer-reviewed publications, submitted and in-preparation manuscripts, conference abstracts, proceedings, oral presentations, poster presentations, seminars, and webinars.",
    image: "/images/project-photos/cotton-dark-boll.jpg",
    alt: "Cotton boll in a field canopy representing research outputs",
    href: "/publications"
  },
  {
    title: "2025 SAS CAP annual update meeting held in Salt Lake City",
    date: "November 9, 2025",
    category: "Events",
    tags: ["Events", "Project News"],
    summary:
      "The SAS CAP Grant Annual Update Meeting was scheduled as a hybrid in-person and online meeting at the Salt Lake Marriott Downtown at City Creek from 12:00 PM to 4:00 PM Mountain Time.",
    image: "/images/annual-meeting-2025-team-screen.jpeg",
    alt: "SmartCotton collaborators gathered around a presentation screen during the annual update meeting",
    href: "/events"
  },
  {
    title: "Outreach and Extension connect climate-smart cotton research with growers and stakeholders",
    date: "2024-2026",
    category: "Extension",
    tags: ["Extension", "Field Activities", "Events"],
    summary:
      "The updated outreach record includes field days, grower meetings, workshops, conferences, seminars, webinars, podcasts, stakeholder visits, and training activities for producers, consultants, industry, students, and local partners.",
    image: "/images/annual-meeting-2025-discussion-1.jpeg",
    alt: "SmartCotton collaborators in a meeting discussion representing outreach and stakeholder engagement",
    href: "/outreach"
  },
  {
    title: "Student training supports the next generation of climate-smart cotton scientists",
    date: "2025-2026 reporting period",
    category: "Students",
    tags: ["Students", "Field Activities", "Research"],
    summary:
      "Project training includes graduate and postdoctoral research experience plus four undergraduate trainees gaining field and greenhouse experience in weed identification, sprayer calibration, data collection, and data entry.",
    image: "/images/project-photos/cotton-pollinator-flower.jpg",
    alt: "Pollinator inside a cotton flower representing field training and crop observation",
    href: "/project-team#postdoctoral-researchers-and-graduate-students"
  }
];
