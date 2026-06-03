export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  image: string;
  alt: string;
};

// TODO: Add MDX news posts and real article images as the communications workflow matures.
export const newsItems: NewsItem[] = [
  {
    title: "WSSA member scientist receives $10 million grant for climate-smart cotton research",
    date: "September 18, 2024",
    summary:
      "The Weed Science Society of America highlighted the USDA-NIFA coordinated agricultural project supporting climate-smart cotton production research.",
    image: "/images/news-field-day.svg",
    alt: "Illustrated field day scene for SmartCotton news"
  },
  {
    title: "USDA-NIFA project launches multi-state SmartCotton collaboration",
    date: "September 4, 2024",
    summary:
      "SmartCotton brings together researchers and extension partners to advance regenerative practices, precision management, and sustainable cotton systems.",
    image: "/images/news-field-day.svg",
    alt: "Illustrated cotton field and research notes"
  },
  {
    title: "A drive to make the U.S. a leader in organic cotton",
    date: "November 9, 2023",
    summary:
      "Texas A&M AgriLife Research described efforts to identify opportunities for expanding domestic organic cotton production and grower support.",
    image: "/images/news-field-day.svg",
    alt: "Illustrated cotton boll and field rows"
  }
];
