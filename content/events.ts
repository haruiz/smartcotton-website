export type EventItem = {
  title: string;
  date: string;
  calendarMonth: `${number}-${number}`;
  calendarDay?: `${number}-${number}-${number}`;
  location: string;
  status: "Upcoming" | "Past";
  category: "Field Day" | "Webinar" | "Conference";
  time?: string;
  summary: string;
};

// Add calendarDay when an event has a confirmed date. Month-only events still appear in the calendar agenda.
export const events: EventItem[] = [
  {
    title: "SmartCotton Field Demonstration Day",
    date: "Spring 2026",
    calendarMonth: "2026-04",
    location: "Texas Cotton Belt research site",
    status: "Upcoming",
    category: "Field Day",
    summary:
      "A grower-facing demonstration of regenerative production practices, sensor-enabled management, and early field trial findings."
  },
  {
    title: "Climate-Smart Cotton Research Webinar",
    date: "Summer 2026",
    calendarMonth: "2026-07",
    location: "Online",
    status: "Upcoming",
    category: "Webinar",
    summary:
      "A virtual briefing on soil health, carbon measurement, and precision agriculture tools being evaluated through the project."
  },
  {
    title: "Beltwide Cotton Conference Research Updates",
    date: "January 2025",
    calendarMonth: "2025-01",
    location: "New Orleans, LA",
    status: "Past",
    category: "Conference",
    summary:
      "Project collaborators shared early findings on cover crops, cotton root traits, photosynthesis, and soil health indicators."
  }
];
