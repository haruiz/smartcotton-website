export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Year 2 progress expands SmartCotton research across eight states",
    date: "2025-2026 reporting period",
    summary:
      "The project advanced multi-state field research, soil and microbial analyses, regenerative practice evaluation, precision technology planning, economic analysis, farmer adoption studies, outreach, and training across Texas, New Mexico, Arizona, Georgia, North Carolina, Mississippi, Alabama, and Tennessee.",
    image: "/images/cotton-field-research-real.png",
    alt: "Cotton research field representing multi-state SmartCotton progress"
  },
  {
    title: "SmartCotton teams document 46 scientific outputs from 2024-2026 source materials",
    date: "2024-2026",
    summary:
      "Source materials include peer-reviewed publications, submitted and in-preparation manuscripts, conference abstracts, proceedings, oral presentations, poster presentations, seminars, and webinars.",
    image: "/images/precision-cotton-banner-real.png",
    alt: "Precision agriculture imagery representing research outputs"
  },
  {
    title: "2025 SAS CAP annual update meeting held in Salt Lake City",
    date: "November 9, 2025",
    summary:
      "The SAS CAP Grant Annual Update Meeting was scheduled as a hybrid in-person and online meeting at the Salt Lake Marriott Downtown at City Creek from 12:00 PM to 4:00 PM Mountain Time.",
    image: "/images/annual-meeting-2025-team-screen.jpeg",
    alt: "SmartCotton collaborators gathered around a presentation screen during the annual update meeting"
  },
  {
    title: "Outreach and Extension connect climate-smart cotton research with growers and stakeholders",
    date: "2024-2026",
    summary:
      "The updated outreach record includes field days, grower meetings, workshops, conferences, seminars, webinars, podcasts, stakeholder visits, and training activities for producers, consultants, industry, students, and local partners.",
    image: "/images/news-field-day.svg",
    alt: "Illustrated field day scene representing outreach and Extension"
  },
  {
    title: "Student training supports the next generation of climate-smart cotton scientists",
    date: "2025-2026 reporting period",
    summary:
      "Project training includes graduate and postdoctoral research experience plus four undergraduate trainees gaining field and greenhouse experience in weed identification, sprayer calibration, data collection, and data entry.",
    image: "/images/soil-carbon-banner-real.png",
    alt: "Soil research image representing training and field data collection"
  }
];
