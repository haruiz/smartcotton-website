import { ce2CollegeStationGallery, type GalleryCollection } from "./projectFeatures";

type ActivityImage = {
  src: string;
  alt: string;
  caption: string;
};

type FeaturedActivityUpdate = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  objective: string;
  paragraphs: string[];
  studyDetails?: { label: string; value: string }[];
  researchAreas?: string[];
  tags: string[];
  images: ActivityImage[];
  gallery?: GalleryCollection;
};

export const activities = [
  {
    title: "CE2 Cover Crop Planting on Beds",
    summary:
      "The College Station team is evaluating cover crop placement, termination timing, and raised-bed versus flat-row planting systems for cotton production."
  },
  {
    title: "Soil Sample Logistics and Carbon Baseline Processing",
    summary:
      "The Texas A&M team is receiving, organizing, sub-sampling, and coordinating laboratory workflows for soil samples collected across Cotton Belt states under a common protocol."
  },
  {
    title: "Multi-State Regenerative Cotton Trials",
    summary:
      "Teams in Texas, New Mexico, Arizona, Georgia, North Carolina, Mississippi, Alabama, and Tennessee are evaluating tillage, cover crops, bed systems, rotations, living mulches, irrigation, soil health, and weed-management practices."
  },
  {
    title: "Soil Carbon, AMF, and Microbiome Sampling",
    summary:
      "Current measurements include soil organic carbon, respiration, wet aggregate stability, carbon and nitrogen profiles, AMF, phosphatase activity, 16S sequencing, microbiome assembly, and pathobiome dynamics."
  },
  {
    title: "AI/ML and Simulation Data Workflows",
    summary:
      "Objective 2 is coordinating soil moisture sensor, UAS, satellite, plant-height, biomass, yield, fiber quality, irrigation, and treatment datasets while advancing Holos DSS simulations for climate adaptation."
  },
  {
    title: "Economics, Risk, and Adoption Research",
    summary:
      "Economic and social science teams are assessing precision technologies, profitability, soil health risk and insurance implications, farmer adoption barriers, focus-group findings, and survey instruments."
  },
  {
    title: "Outreach, Extension, and Annual Updates",
    summary:
      "Field days, grower meetings, workshops, podcasts, seminars, stakeholder visits, and the SAS CAP annual update meeting are translating findings for producers, consultants, industry, students, and partners."
  },
  {
    title: "Student and Workforce Training",
    summary:
      "Project training includes graduate student and postdoctoral research experience plus undergraduate skill development in weed identification, sprayer calibration, field data collection, data entry, and greenhouse research."
  }
];

export const featuredActivityUpdates: FeaturedActivityUpdate[] = [
  {
    slug: "ce2-cover-crop-planting-on-beds",
    eyebrow: "College Station CE2 Research",
    title: "Cover Crop Planting on Beds: Field Research in College Station, Texas",
    summary:
      "The SmartCotton research team at College Station, Texas, is evaluating cover crop planting strategies for cotton grown on raised beds.",
    objective:
      "Objective 1.2.1 - CE2: evaluate cover crop planting strategies for cotton-raised bed systems.",
    paragraphs: [
      "Our SmartCotton research team at College Station, Texas, is evaluating cover crop planting strategies for cotton grown on raised beds.",
      "The study examines how cover crop placement on beds and in furrows, cover crop termination timing, and raised-bed versus flat-row planting systems influence cotton growth, soil conditions, and crop performance.",
      "Field activities include cover crop establishment and termination, cotton planting, crop observations, soil sampling, biomass collection, and weed assessments. The team is collecting data throughout the growing season to evaluate the different management practices.",
      "This research is part of a coordinated multi-location study involving Texas, Mississippi, and North Carolina. The findings will help identify suitable cover cropping and reduced-tillage strategies for cotton production across different growing environments."
    ],
    studyDetails: [
      { label: "Objective", value: "1.2.1 - CE2" },
      { label: "Featured location", value: "College Station, Texas" },
      { label: "Other participating locations", value: "Stoneville, Mississippi, and Raleigh, North Carolina" },
      { label: "Research status", value: "Ongoing" }
    ],
    researchAreas: [
      "Cover crop establishment and management",
      "Cover crop placement on beds and in furrows",
      "Cover crop termination timing",
      "Cotton growth and crop performance",
      "Soil and plant biomass sampling",
      "Weed observations and cover crop residue monitoring"
    ],
    tags: [
      "CE2",
      "College Station, Texas",
      "Cover crops",
      "Raised beds",
      "Cotton systems",
      "Field sampling",
      "Ongoing research"
    ],
    images: [
      {
        src: "/images/research/ce2-college-station/ce2-college-station-cover-crop-team-field.jpeg",
        alt: "Dr. Rajan and Lithma in a College Station CE2 cover crop field",
        caption: "Cover crop field conditions at the College Station CE2 research location."
      }
    ],
    gallery: ce2CollegeStationGallery
  },
  {
    slug: "soil-sample-logistics-carbon-baselines",
    eyebrow: "Soil Carbon Baselines",
    title: "Coordinated soil sample processing across the U.S. Cotton Belt",
    summary:
      "Texas A&M project teams are receiving, organizing, and sub-sampling soil samples collected from multiple states to support SmartCotton soil organic carbon and carbon intensity baseline work.",
    objective:
      "Establish soil organic carbon and carbon intensity baselines for ecoregions in the U.S. Cotton Belt.",
    paragraphs: [
      "The USDA-funded SAS Cotton Project team at Texas A&M University is receiving, organizing, and sub-sampling a large number of soil samples collected from different states across the U.S. Cotton Belt.",
      "This work supports a key project objective: establishing soil organic carbon and carbon intensity baselines for Cotton Belt ecoregions. The team is coordinating sample logistics, processing, sub-sampling, laboratory coordination, and communication across collaborating locations.",
      "Bringing samples from multiple states together under a common protocol creates a foundation for consistent analysis, interpretation, and a clearer understanding of soil carbon across U.S. cotton production regions.",
      "Thank you to everyone involved in field sampling, shipping, processing, and laboratory work."
    ],
    tags: [
      "USDA",
      "SAS Cotton",
      "Texas A&M University",
      "Soil organic carbon",
      "Soil health",
      "Cotton research",
      "Agronomy",
      "Soil science"
    ],
    images: [
      {
        src: "/images/activities/soil-samples-sub-sampling-table.jpeg",
        alt: "Labeled soil samples organized for sub-sampling in the Texas A&M laboratory",
        caption: "Organized soil samples prepared for sub-sampling."
      },
      {
        src: "/images/activities/soil-samples-arrival-cart.jpeg",
        alt: "Boxes of shipped soil samples arriving for SmartCotton processing",
        caption: "Incoming soil sample shipments from collaborating locations."
      },
      {
        src: "/images/activities/soil-samples-storage-shelves.jpeg",
        alt: "Stored soil sample containers and boxes in a laboratory storage area",
        caption: "Sample storage and staging before processing."
      },
      {
        src: "/images/activities/soil-sample-bagging-workflow.jpeg",
        alt: "Team members bagging and weighing soil samples in the laboratory",
        caption: "Sub-sampling and bagging workflow."
      },
      {
        src: "/images/activities/soil-sample-lab-processing.jpeg",
        alt: "Team member handling soil sample bags beside laboratory equipment",
        caption: "Laboratory coordination for sample processing."
      }
    ]
  }
];
