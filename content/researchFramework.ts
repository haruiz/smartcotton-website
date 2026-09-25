export type ResearchTheme = {
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  href: string;
  image: string;
  alt: string;
};

export type ObjectiveResearchDetail = {
  number: number;
  title: string;
  researchQuestion: string;
  measured: string[];
  locations: string;
  approach: string;
  currentActivity: string;
  relatedHref: string;
};

export const researchThemes: ResearchTheme[] = [
  {
    title: "Soil Health & Carbon",
    eyebrow: "Objective 1",
    description:
      "Researchers are establishing soil organic carbon, nutrient, biological, and physical baselines that can support long-term evaluation of climate-smart cotton systems.",
    bullets: ["Soil organic carbon", "Nutrient status", "Soil biology", "Physical indicators"],
    href: "/research-highlights#themes",
    image: "/images/project-photos/cotton-flower-canopy.jpg",
    alt: "Cotton flower surrounded by green field canopy"
  },
  {
    title: "Regenerative Production Systems",
    eyebrow: "Objective 1",
    description:
      "Multi-state trials compare cover crops, reduced tillage, living mulches, planting systems, rotations, and alternative weed-control approaches across Cotton Belt environments.",
    bullets: ["Cover crops", "Reduced tillage", "Living mulches", "Planting systems"],
    href: "/research-highlights#field-work",
    image: "/images/project-photos/cotton-row-canopy.jpg",
    alt: "Low view between cotton rows for field research"
  },
  {
    title: "Climate & Resource Efficiency",
    eyebrow: "Objectives 1-2",
    description:
      "Field and modeling work examines greenhouse gas emissions, crop water use, irrigation scheduling, nutrient-use efficiency, and production decisions in variable climates.",
    bullets: ["GHG emissions", "Crop water use", "Irrigation", "Nutrient efficiency"],
    href: "/ongoing-activities",
    image: "/images/activities/soil-samples-sub-sampling-table.jpeg",
    alt: "Organized soil samples prepared for SmartCotton laboratory analysis"
  },
  {
    title: "Precision Agriculture & AI/ML",
    eyebrow: "Objective 2",
    description:
      "The project is developing AI/ML-ready datasets from UAS imagery, sensors, satellite data, agronomic measurements, yield, fiber quality, and irrigation records.",
    bullets: ["UAS imagery", "Remote sensing", "Machine learning", "Smart irrigation"],
    href: "/research-highlights#publications",
    image: "/images/project-photos/cotton-harvest-machinery.jpg",
    alt: "Cotton harvest machinery in a mature field"
  },
  {
    title: "Economics & Farmer Adoption",
    eyebrow: "Objectives 3-4",
    description:
      "Economic and social-science teams study profitability, production risk, insurance implications, market opportunities, and the practical conditions that shape grower adoption.",
    bullets: ["Profitability", "Risk", "Market opportunities", "Adoption constraints"],
    href: "/project#objectives",
    image: "/images/annual-meeting-2025-discussion-1.jpeg",
    alt: "SmartCotton collaborators discussing project progress during an annual meeting"
  },
  {
    title: "Extension, Education & Workforce",
    eyebrow: "Objectives 5-6",
    description:
      "Extension, outreach, and training activities connect research with growers, consultants, students, industry partners, and the next generation of cotton-system professionals.",
    bullets: ["Grower engagement", "Field days", "Student training", "Workforce development"],
    href: "/outreach",
    image: "/images/annual-meeting-2025-team-screen.jpeg",
    alt: "SmartCotton collaborators gathered around a presentation screen during an annual update meeting"
  }
];

export const projectFlow = [
  "Field research",
  "Soil & environmental measurement",
  "Precision sensing & AI/ML",
  "Economic & social analysis",
  "Extension & producer engagement",
  "Practical cotton management strategies"
];

export const impactAreas = [
  {
    title: "Production resilience",
    description: "Compare practices that may help cotton systems perform under variable weather, pest pressure, and soil conditions."
  },
  {
    title: "Resource efficiency",
    description: "Connect water, nutrients, sensors, and management data so production decisions can be evaluated more precisely."
  },
  {
    title: "Environmental performance",
    description: "Measure soil carbon, greenhouse gas, soil health, and biological indicators needed for climate-smart assessment."
  },
  {
    title: "Farm-level decision support",
    description: "Translate coordinated research into usable information for growers, advisers, Extension professionals, and supply-chain partners."
  }
];

export const objectiveResearchDetails: ObjectiveResearchDetail[] = [
  {
    number: 1,
    title: "Regenerative cotton production practices and long-term effects",
    researchQuestion:
      "Which regenerative practices are practical across Cotton Belt environments, and how do they influence soil carbon, soil health, water, roots, and production systems over time?",
    measured: [
      "Soil organic carbon and nutrient baselines",
      "Greenhouse gas and soil-respiration indicators",
      "Water use, cover crop performance, and weed suppression",
      "Microbiome, soil-borne pathogens, AMF, phosphatase, and root traits"
    ],
    locations:
      "Texas, New Mexico, Arizona, Georgia, North Carolina, Mississippi, Alabama, Tennessee, and associated collaborator locations named in project records.",
    approach:
      "Field trials, on-farm sampling, common soil protocols, cover crop and tillage comparisons, planting-system evaluations, living mulch work, perennial grass buffer studies, and simulation modeling.",
    currentActivity:
      "Teams are coordinating multi-state soil sampling, regenerative practice evaluations, cover crop work, root and microbiome studies, and objective-level annual progress reporting.",
    relatedHref: "/ongoing-activities"
  },
  {
    number: 2,
    title: "Precision AI/ML and smart technologies",
    researchQuestion:
      "How can sensing, UAS, AI/ML, smart irrigation, and diagnostic tools support more precise cotton management?",
    measured: [
      "UAS and satellite imagery",
      "Soil moisture and sensor records",
      "Plant growth, yield, fiber quality, and treatment data",
      "Nutrient deficiency and pest-diagnosis information"
    ],
    locations: "Multi-state research and technology datasets from participating Cotton Belt teams.",
    approach:
      "The project is organizing AI/ML-ready data streams, sensor-based irrigation workflows, UAS-based diagnosis activities, and simulation-based decision-support inputs.",
    currentActivity:
      "Current work focuses on data coordination, sensor and imagery integration, treatment records, and model-ready datasets rather than public claims of finalized tool performance.",
    relatedHref: "/research-highlights#publications"
  },
  {
    number: 3,
    title: "Economic feasibility and market opportunities",
    researchQuestion:
      "What are the economic tradeoffs, risks, and potential market pathways associated with precision regenerative cotton practices?",
    measured: [
      "Profitability and productivity",
      "Risk and insurance implications",
      "Market-oriented opportunities",
      "Technology and practice adoption costs"
    ],
    locations: "Economic analyses draw from project field activities and Cotton Belt production contexts.",
    approach:
      "Researchers are connecting agronomic management records with profitability, risk, insurance, productivity, and market-opportunity analysis.",
    currentActivity:
      "The project has listed economic presentations and manuscripts tied to precision management, insurance, and productivity questions.",
    relatedHref: "/publications"
  },
  {
    number: 4,
    title: "Farmer experiences and adoption",
    researchQuestion:
      "How do producers understand, evaluate, and decide whether to adopt regenerative and precision cotton practices?",
    measured: [
      "Grower experiences",
      "Adoption barriers and opportunities",
      "Stakeholder perceptions",
      "Regional decision-making context"
    ],
    locations: "Cotton Belt producer and stakeholder engagement activities coordinated with project partners.",
    approach:
      "Focus groups, farm visits, producer discussions, survey planning, stakeholder engagement, and collaboration with adoption-focused partners.",
    currentActivity:
      "Teams are expanding adoption research through producer engagement, annual-report activities, and Soil Health Institute collaboration.",
    relatedHref: "/outreach"
  },
  {
    number: 5,
    title: "Extension and outreach",
    researchQuestion:
      "How can project findings be shared with growers, consultants, Extension professionals, students, industry, and local partners as the work develops?",
    measured: [
      "Field days and grower meetings",
      "Workshops, conferences, seminars, and webinars",
      "Stakeholder visits and podcasts",
      "Audience and participant records where available"
    ],
    locations: "Outreach records span both reporting periods and multiple Cotton Belt partner locations.",
    approach:
      "Extension teams use field days, meetings, workshops, presentations, media, stakeholder visits, and training activities to connect research with practice.",
    currentActivity:
      "The current outreach archive includes 44 records from field days, grower meetings, workshops, conferences, webinars, stakeholder visits, and training activities.",
    relatedHref: "/outreach"
  },
  {
    number: 6,
    title: "Education and rural workforce development",
    researchQuestion:
      "How can SmartCotton train students and early-career professionals for interdisciplinary cotton, soil, precision agriculture, and Extension work?",
    measured: [
      "Graduate and postdoctoral training",
      "Undergraduate research participation",
      "Field, greenhouse, and data skills",
      "Professional development and mentoring activities"
    ],
    locations: "Training activities are tied to partner institutions and project research sites.",
    approach:
      "Students and trainees participate in field sampling, greenhouse work, weed identification, sprayer calibration, data collection, data entry, analysis, and presentations.",
    currentActivity:
      "Year 2 records note graduate and postdoctoral research experience plus four undergraduate trainees gaining hands-on project skills.",
    relatedHref: "/project-team#postdoctoral-researchers-and-graduate-students"
  }
];

export const newsroomTags = [
  "Research",
  "Field Activities",
  "Soil Health",
  "Precision Agriculture",
  "Extension",
  "Students",
  "Publications",
  "Events",
  "Project News"
];

export const projectActionHighlights = [
  "Field sampling",
  "Laboratory work",
  "UAS flights",
  "Student research",
  "Presentations",
  "Grower engagement"
];
