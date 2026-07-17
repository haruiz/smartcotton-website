export const officialProject = {
  shortName: "SmartCotton",
  fullTitle:
    "Climate-Smart Cotton: Developing Precision Regenerative Practices and Market Opportunities for Addressing Climate Change in the Cotton Belt",
  program: "USDA-NIFA SAS-CAP",
  awardNumber: "2024-68012-41750",
  projectPeriod: "2024-2029",
  leadInstitution: "Texas A&M AgriLife",
  principalInvestigator: "Dr. Muthukumar Bagavathiannan",
  projectManager: "Henry Nguyen"
};

export const projectGlanceItems = [
  { label: "Funding program", value: officialProject.program },
  { label: "Award number", value: officialProject.awardNumber },
  { label: "Project period", value: officialProject.projectPeriod },
  { label: "Lead institution", value: officialProject.leadInstitution },
  { label: "Principal investigator", value: officialProject.principalInvestigator },
  { label: "Project manager", value: officialProject.projectManager }
];

export const impactSnapshot = [
  { value: "8+", label: "Cotton Belt states" },
  { value: "30+", label: "Research sites" },
  { value: "40+", label: "Project outputs" },
  { value: "900+", label: "Participants reached" },
  { value: "Training", label: "Students and postdocs" }
];

export const annualReports = [
  {
    year: "Year 1",
    period: "2024-2025",
    title: "Foundational field trials, network coordination, and baseline data collection",
    summary:
      "This year we have focused on data collection. So, currently we are in experiment",
    href: "/reports/smartcotton-2024-2025-report.pdf",
    status: "Download report PDF",
    isAvailable: true
  },
  {
    year: "Year 2",
    period: "2025-2026",
    title: "Expanded field measurements, precision management workflows, and stakeholder engagement",
    summary:
      "Year 2 updates will summarize field data collection, AI/ML precision management progress, regenerative practice evaluations, and extension participation.",
    href: "/reports/smartcotton-year-2-annual-report.pdf",
    status: "Pending approved report file",
    isAvailable: false
  }
];

export const projectObjectives = [
  "Evaluate regenerative cotton production practices across representative Cotton Belt environments.",
  "Quantify soil health, carbon sequestration, and greenhouse gas outcomes from climate-smart management.",
  "Develop AI/ML-enabled precision management tools using field measurements, remote sensing, and production data.",
  "Assess pest, nutrient, water, and input-use strategies that support resilient cotton systems.",
  "Analyze economics, adoption pathways, and market opportunities for climate-smart cotton.",
  "Deliver extension, education, and workforce training resources for growers, students, and project partners."
];

export const galleryItems = [
  {
    title: "Field trials",
    description: "Production-scale and plot-scale cotton trials across Cotton Belt environments.",
    image: "/images/cotton-field-research-real.png",
    alt: "Cotton research field with rows of plants"
  },
  {
    title: "Soil sampling",
    description: "Sampling campaigns supporting soil health, carbon, and greenhouse gas analysis.",
    image: "/images/soil-carbon-banner-real.png",
    alt: "Soil health research in a cotton production setting"
  },
  {
    title: "UAS and drone work",
    description: "Remote sensing activities for AI/ML-enabled precision cotton management.",
    image: "/images/precision-cotton-banner-real.png",
    alt: "Precision agriculture imagery over cotton fields"
  },
  {
    title: "Field days and training",
    description: "Outreach, student training, team meetings, and Cotton Belt engagement activities.",
    image: "/images/news-field-day.svg",
    alt: "Illustration of a field day and research outreach event"
  }
];
