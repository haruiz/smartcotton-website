export type EventItem = {
  title: string;
  date: string;
  calendarMonth: `${number}-${number}`;
  calendarDay?: `${number}-${number}-${number}`;
  location: string;
  status: "Upcoming" | "Past";
  category: "Annual Meeting" | "Field Day" | "Webinar" | "Conference" | "Workshop";
  time?: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const events: EventItem[] = [
  {
    title: "Cotton Cropping Systems Field Day",
    date: "September 2026",
    calendarMonth: "2026-09",
    location: "Texas",
    status: "Upcoming",
    category: "Field Day",
    summary:
      "The source document lists a field day with nearly 100 attendees and a research stop on cotton cropping systems evaluated in the SAS project."
  },
  {
    title: "2026 SAS Cotton Annual Project Meeting",
    date: "Sunday, November 1, 2026",
    calendarMonth: "2026-11",
    calendarDay: "2026-11-01",
    location: "DoubleTree by Hilton Hotel, Portland, Oregon; hybrid meeting",
    status: "Upcoming",
    category: "Annual Meeting",
    time: "12:00-4:30 PM PST",
    summary:
      "The Year 2 progress and Year 3 planning meeting will include research updates, key findings, coordination across institutions, and updates on publications, datasets, and outreach activities.",
    image: "/images/events/sas-cotton-annual-project-meeting-2026-flyer.png",
    imageAlt:
      "Flyer for the 2026 SAS Cotton Annual Project Meeting showing the date, time, Portland location, hybrid format, and meeting highlights",
    imageCaption: "2026 SAS Cotton Annual Project Meeting flyer"
  },
  {
    title: "SAS CAP Grant Annual Update Meeting",
    date: "Sunday, November 9, 2025",
    calendarMonth: "2025-11",
    calendarDay: "2025-11-09",
    location: "Room Alta-Snowbird, 2nd Floor, Salt Lake Marriott Downtown at City Creek, Salt Lake City, UT",
    status: "Past",
    category: "Annual Meeting",
    time: "12:00 PM-4:00 PM Mountain Time; hybrid in-person and online",
    summary:
      "Annual SAS-CAP update meeting for project reporting and coordination. The source notes lunch served at noon and a hybrid format."
  },
  {
    title: "Central Arizona Field Day",
    date: "November 19, 2025",
    calendarMonth: "2025-11",
    calendarDay: "2025-11-19",
    location: "Arizona",
    status: "Past",
    category: "Field Day",
    summary:
      "University of Arizona collaborators demonstrated regenerative cotton research and connected updates with growers, consultants, industry, local stakeholders, and agency professionals."
  },
  {
    title: "CANVAS 2025 Project Presentations",
    date: "November 2025",
    calendarMonth: "2025-11",
    location: "Salt Lake City, UT",
    status: "Past",
    category: "Conference",
    summary:
      "SmartCotton collaborators presented research on cotton cultivar development, wet aggregate stability, cover crop termination, cereal rye allelopathy, and related soil and crop topics."
  },
  {
    title: "J. Phil Campbell REC Cotton Field Day",
    date: "September 23, 2025",
    calendarMonth: "2025-09",
    calendarDay: "2025-09-23",
    location: "Watkinsville, GA",
    status: "Past",
    category: "Field Day",
    summary:
      "University of Georgia collaborators engaged farmers and students through cotton field research activities at the J. Phil Campbell Research and Education Center."
  },
  {
    title: "Beltwide Cotton Conference Research Updates",
    date: "January 7-9, 2026",
    calendarMonth: "2026-01",
    calendarDay: "2026-01-07",
    location: "San Antonio, TX",
    status: "Past",
    category: "Conference",
    summary:
      "Project collaborators shared research on microbiome diversity, hyphosphere FOV4 pathobiome work, bed and cover crop systems, UAV-derived NDVI, economics, insurance, and weed suppression."
  }
];
