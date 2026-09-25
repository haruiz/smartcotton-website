export const officialProject = {
  shortName: "SmartCotton",
  fullTitle:
    "Climate-Smart Cotton: Developing Precision Regenerative Practices and Market Opportunities for Addressing Climate Change in the Cotton Belt",
  program: "USDA-NIFA SAS-CAP",
  awardNumber: "2024-68012-41750",
  projectPeriod: "2024-2029",
  leadInstitution: "Texas A&M AgriLife Research",
  principalInvestigator: "Muthukumar Bagavathiannan",
  principalInvestigatorProfileUrl: "https://soilcrop.tamu.edu/people/bagavathiannan-muthu/",
  projectManager: "Deepak Loura",
  projectManagerProfileUrl: "https://soilcrop.tamu.edu/people/loura-deepak/",
  implementationStates: ["Texas", "New Mexico", "Arizona", "Georgia", "North Carolina", "Mississippi", "Alabama", "Tennessee"]
};

export const projectGlanceItems = [
  { label: "Funding program", value: officialProject.program },
  { label: "Award number", value: officialProject.awardNumber },
  { label: "Project period", value: officialProject.projectPeriod },
  { label: "Lead institution", value: officialProject.leadInstitution },
  { label: "PI / Project lead", value: officialProject.principalInvestigator },
  { label: "Project manager", value: officialProject.projectManager },
  { label: "Implementation scope", value: `${officialProject.implementationStates.length} Cotton Belt states named in Year 2 progress` },
  { label: "Official objectives", value: "Six integrated SAS-CAP objectives" }
];

export const impactSnapshot = [
  { value: "8", label: "Implementation states named in Year 2 progress" },
  { value: "6", label: "Official SAS-CAP objectives" },
  { value: "46", label: "2024-2026 scientific outputs listed in the source document" },
  { value: "26", label: "Year 1 outreach and Extension records summarized" },
  { value: "4", label: "Undergraduate trainees noted in Year 2 workforce development" }
];

export const annualReports = [
  {
    year: "Year 1",
    period: "2024-2025",
    title: "Year 1 project overview: launch, baselines, and early outreach",
    summary:
      "The first annual report covers the April 2024-March 2025 startup period. Work centered on launching the SAS-CAP network, establishing soil carbon and field baselines, initiating regenerative cotton trials, building data, economic, and adoption frameworks, and beginning outreach to growers, consultants, Extension audiences, and students.",
    overview: [
      "Field and soil-health baseline work began in multiple Cotton Belt locations, including producer engagement, soil organic carbon sampling, living mulch and cover-crop evaluations, cultivar and root studies, circular buffer strip research, gas flux monitoring, and on-farm recruitment.",
      "Precision and decision-support groundwork was initiated through field measurements, biomass and yield sampling, irrigation and sensor planning, and coordination of future AI/ML and economic analyses.",
      "Outreach, stakeholder engagement, and training began through field days, grower meetings, professional conferences, Extension programs, student and postdoctoral mentoring, and planning for technical bulletins, training modules, and digital content."
    ]
  },
  {
    year: "Year 2",
    period: "2025-2026",
    title: "Year 2 project overview: multi-state implementation and integrated analysis",
    summary:
      "The second annual report covers the April 2025-March 2026 reporting period. The project expanded across eight states with coordinated field research, soil and microbial analyses, regenerative practice evaluation, precision technology datasets, simulation work, economic and risk analysis, farmer adoption studies, outreach, and workforce training.",
    overview: [
      "Regenerative cotton research advanced through soil carbon, respiration, aggregate stability, AMF, phosphatase, microbiome, root-trait, cover-crop, bed configuration, rotation, buffer-strip, and on-farm sampling activities across major cotton production regions.",
      "Precision technology work moved toward AI/ML-ready data streams using soil moisture sensors, UAS and satellite imagery, plant growth, biomass, yield, fiber quality, irrigation, treatment data, and Holos DSS simulations.",
      "Economic, adoption, Extension, and education work expanded through profitability and risk analyses, focus groups with producers, field days, grower meetings, workshops, conferences, seminars, webinars, stakeholder visits, and hands-on undergraduate, graduate, and postdoctoral training."
    ]
  }
];

export type ProjectObjective = {
  number: number;
  title: string;
  summary: string;
  details: string[];
};

export const projectObjectives: ProjectObjective[] = [
  {
    number: 1,
    title: "Regenerative production practices and long-term effects",
    summary:
      "Develop regenerative cotton production practices and investigate their long-term effects on U.S. Cotton Belt production systems.",
    details: [
      "Establish soil organic carbon and carbon-intensity baselines for ecoregions in the U.S. Cotton Belt.",
      "Investigate regenerative practices for reducing tillage and improving soil health.",
      "Evaluate long-term climate impacts of regenerative practices using simulation models."
    ]
  },
  {
    number: 2,
    title: "Precision AI/ML and smart technologies",
    summary:
      "Develop and/or evaluate precision AI/ML and smart technologies for resource conservation and climate-change mitigation and adaptation in cotton.",
    details: [
      "Build AI/ML-ready datasets from soil moisture sensors, UAS platforms, satellite imagery, agronomic measurements, yield, fiber quality, irrigation, and management treatments.",
      "Evaluate simulation-based decision support for adaptive climate-smart cotton production."
    ]
  },
  {
    number: 3,
    title: "Economic feasibility and market opportunities",
    summary:
      "Evaluate economic feasibility of precision regenerative production practices and determine new market opportunities.",
    details: [
      "Assess profitability, productivity, risk, and insurance implications of precision and soil health practices.",
      "Connect regenerative production outcomes with market-oriented opportunities for climate-smart cotton."
    ]
  },
  {
    number: 4,
    title: "Farmer adoption experiences",
    summary:
      "Understand farmers' multidimensional experiences and adoption of regenerative practices across the Cotton Belt.",
    details: [
      "Use focus groups, surveys, farm visits, and producer discussions to understand adoption barriers and opportunities.",
      "Coordinate with Soil Health Institute collaborators and Cotton Belt teams to expand adoption research."
    ]
  },
  {
    number: 5,
    title: "Extension and outreach",
    summary:
      "Promote adoption of regenerative climate-smart cotton practices through innovative and collaborative Extension and outreach activities.",
    details: [
      "Share research updates through field days, grower meetings, workshops, conferences, webinars, seminars, podcasts, and stakeholder events.",
      "Develop outreach pathways that connect research findings with growers, consultants, industry, students, and local stakeholders."
    ]
  },
  {
    number: 6,
    title: "Education and rural workforce development",
    summary:
      "Provide educational opportunities for the next generation of research and Extension scientists and practitioners and strengthen rural workforce development.",
    details: [
      "Train graduate students, postdoctoral researchers, undergraduate researchers, and project trainees through field, greenhouse, data, and professional development experiences.",
      "Support hands-on skill development in weed identification, sprayer calibration, field-data collection, data entry, precision agriculture, and regenerative cotton research."
    ]
  }
];

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export type GalleryCollection = {
  eyebrow: string;
  title: string;
  description: string;
  photos: GalleryItem[];
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Regenerative cotton field trials",
    description: "Field and on-farm work evaluating cover crops, tillage, bed systems, rotations, living mulches, and soil health indicators.",
    image: "/images/project-photos/cotton-row-canopy.jpg",
    alt: "Low view between cotton rows in a green field"
  },
  {
    title: "Soil carbon and soil health sampling",
    description: "Sampling campaigns supporting soil organic carbon, respiration, wet aggregate stability, AMF, phosphatase, microbiome, and pathobiome analyses.",
    image: "/images/project-photos/cotton-flower-canopy.jpg",
    alt: "Cotton flower surrounded by green cotton canopy"
  },
  {
    title: "UAS, sensors, and AI-ready datasets",
    description: "Remote sensing, sensor, satellite, yield, fiber quality, and agronomic measurements supporting precision AI/ML cotton research.",
    image: "/images/project-photos/cotton-harvest-machinery.jpg",
    alt: "Cotton harvest machinery in a mature field"
  },
  {
    title: "Field days, meetings, and training",
    description: "Outreach, Extension, student training, annual updates, and Cotton Belt stakeholder engagement activities.",
    image: "/images/project-photos/cotton-flower-bee.jpg",
    alt: "Bee visiting a cotton flower in a project field"
  },
  {
    title: "Cotton boll development",
    description: "Close-up views of cotton bolls and flowers help visitors connect the project story to the crop itself.",
    image: "/images/project-photos/cotton-closeup-boll.jpg",
    alt: "Close-up of an open cotton boll"
  },
  {
    title: "Pollinator activity in cotton",
    description: "Project field imagery highlights the living field environment where agronomic and ecological measurements take place.",
    image: "/images/project-photos/cotton-pollinator-flower.jpg",
    alt: "Pollinator inside a cotton flower"
  }
];

export const sanguAngadiVisitGallery: GalleryCollection = {
  eyebrow: "Professional Visit",
  title: "Visit with Dr. Sangu Angadi",
  description:
    "Dr. Sangu Angadi, SmartCotton collaborator from New Mexico State University, visited Texas A&M for an interactive and informative session with graduate students. He shared insights from his extensive experience in crop physiology, water conservation, buffer strips, and protection of the Ogallala Aquifer.",
  photos: [
    {
      title: "Texas A&M AgriLife visit",
      description: "Dr. Angadi joined SmartCotton graduate students during his visit to Texas A&M.",
      image: "/images/gallery/sangu-angadi-visit-agrilife-lobby.jpeg",
      alt: "Dr. Sangu Angadi with SmartCotton graduate students in the Texas A&M AgriLife building lobby",
      objectPosition: "center bottom"
    },
    {
      title: "Graduate student session",
      description:
        "The visit included an interactive discussion with graduate students on climate-smart crop research, water conservation, and practical lessons from multi-state cotton systems.",
      image: "/images/gallery/sangu-angadi-visit-student-session.jpeg",
      alt: "Dr. Sangu Angadi with SmartCotton graduate students during an interactive session",
      objectPosition: "center bottom"
    },
    {
      title: "Greenhouse discussion",
      description:
        "Dr. Angadi shared applied insights with students while visiting greenhouse research areas connected to crop physiology and resource-conservation research.",
      image: "/images/gallery/sangu-angadi-visit-greenhouse-discussion.jpeg",
      alt: "Dr. Sangu Angadi and students discussing plants in a greenhouse research area",
      objectPosition: "center bottom"
    },
    {
      title: "Precision agriculture exchange",
      description:
        "The group discussed precision agriculture tools, field phenotyping, and sensing approaches that support SmartCotton research across water-limited cotton production regions.",
      image: "/images/gallery/sangu-angadi-visit-uas-discussion.jpeg",
      alt: "Dr. Sangu Angadi and a graduate student discussing UAS equipment for precision agriculture research",
      objectPosition: "center bottom"
    }
  ]
};

export const annualMeetingGallery: GalleryCollection = {
  eyebrow: "Annual Meeting",
  title: "SAS Cotton annual project meetings",
  description:
    "Annual meeting materials and photos from SAS Cotton project update meetings, including the 2026 annual project meeting flyer and 2025 update meeting photos.",
  photos: [
    {
      title: "2026 annual project meeting flyer",
      description:
        "The 2026 SAS Cotton Annual Project Meeting will focus on Year 2 progress, Year 3 planning, collaboration, publications, datasets, and outreach updates.",
      image: "/images/events/sas-cotton-annual-project-meeting-2026-flyer.png",
      alt: "2026 SAS Cotton Annual Project Meeting flyer with date, time, location, hybrid meeting format, and meeting highlights",
      objectPosition: "center center"
    },
    {
      title: "Annual meeting discussion",
      description: "Project team members meet in person during the SAS CAP Grant Annual Update Meeting.",
      image: "/images/annual-meeting-2025-discussion-1.jpeg",
      alt: "SmartCotton project members seated around a conference room during the SAS CAP Annual Update Meeting"
    },
    {
      title: "Project team presentation",
      description: "SmartCotton collaborators gather around the meeting screen during the hybrid annual update session.",
      image: "/images/annual-meeting-2025-team-screen.jpeg",
      alt: "SmartCotton collaborators standing around a presentation screen during the annual update meeting"
    },
    {
      title: "Research updates",
      description: "Team members share research progress, field updates, and coordination plans during the annual project meeting.",
      image: "/images/annual-meeting-2025-discussion-2.jpeg",
      alt: "SmartCotton team members participating in a conference room discussion during the annual meeting"
    },
    {
      title: "Group photo",
      description: "In-person participants gather for a group photo during the SAS CAP Grant Annual Update Meeting.",
      image: "/images/annual-meeting-2025-group-photo.jpeg",
      alt: "SmartCotton annual meeting participants posing for a group photo in a conference room"
    },
    {
      title: "Team coordination",
      description: "The annual update meeting brought collaborators together for project reporting, discussion, and next-step planning.",
      image: "/images/annual-meeting-2025-team-presentation.jpeg",
      alt: "SmartCotton collaborators gathered in front of a presentation screen during the annual update meeting"
    }
  ]
};

export const ce2CollegeStationGallery: GalleryCollection = {
  eyebrow: "College Station CE2 Research",
  title: "Cover crop planting on beds in College Station, Texas",
  description:
    "Original field photographs from the SmartCotton CE2 study location in College Station, Texas, showing cover crop field management, sampling, cotton growth observations, and research team activity.",
  photos: [
    {
      title: "Quadrat-based field observations",
      description:
        "A sampling quadrat is used for field observations and sample collection within the CE2 research plots.",
      image: "/images/research/ce2-college-station/ce2-college-station-sampling-quadrat.jpeg",
      alt: "Research team members kneeling beside a sampling quadrat in a College Station field",
      objectPosition: "center center"
    },
    {
      title: "Field management in cover crops",
      description:
        "Field equipment operating in the CE2 study area as part of cover crop and cotton system management.",
      image: "/images/research/ce2-college-station/ce2-college-station-tractor-field-management.jpeg",
      alt: "Tractor operating in a green cover crop field at College Station, Texas",
      objectPosition: "center center"
    },
    {
      title: "Field preparation activity",
      description:
        "Equipment activity in the College Station field during cover crop termination and field-preparation work.",
      image: "/images/research/ce2-college-station/ce2-college-station-field-preparation-tractor.jpeg",
      alt: "Tractor and field implement moving through a cover crop research field under cloudy sky",
      objectPosition: "center center"
    },
    {
      title: "Field sampling and data collection",
      description:
        "Team members collect field samples and observations from CE2 plots in College Station, Texas.",
      image: "/images/research/ce2-college-station/ce2-college-station-field-sampling-team.jpeg",
      alt: "Research team members collecting field samples in a cover crop research plot",
      objectPosition: "center center"
    },
    {
      title: "Cotton growth observations",
      description:
        "Cotton plants growing in the experimental field are monitored as part of CE2 field observations.",
      image: "/images/research/ce2-college-station/ce2-college-station-cotton-growth-field-observations.jpeg",
      alt: "Cotton plants growing in experimental rows with crop residue between rows",
      objectPosition: "center center"
    },
    {
      title: "Research team field activity",
      description:
        "Research team members document field activity while working in the College Station CE2 study area.",
      image: "/images/research/ce2-college-station/ce2-college-station-research-team-field.jpeg",
      alt: "Research team members standing in a cotton field during sampling activity",
      objectPosition: "center center"
    }
  ]
};

export const northCarolinaCoverCropGallery: GalleryCollection = {
  eyebrow: "North Carolina Research",
  title: "Cover crop planting on beds and field sampling",
  description:
    "The North Carolina team is advancing CE2 research on cover crop planting on beds while continuing planting, stand evaluation, soil coring, field sampling, and biomass-processing activities.",
  photos: [
    {
      title: "Cover crop planting on beds",
      description:
        "Field equipment is used to establish cotton research plots into cover crop residue as part of the North Carolina CE2 research effort.",
      image: "/images/research/nc-cover-crop-planting.jpeg",
      alt: "Planter moving through cover crop residue in a North Carolina field",
      objectPosition: "center center"
    },
    {
      title: "Stand evaluation",
      description:
        "Team members complete field counts and crop monitoring to track cotton establishment and plot conditions.",
      image: "/images/research/nc-cover-crop-stand-counts.jpeg",
      alt: "Researchers evaluating cotton stand counts in a North Carolina field",
      objectPosition: "center center"
    },
    {
      title: "Soil core extraction",
      description:
        "Soil coring supports measurements connected to soil health, carbon, and cover crop system performance.",
      image: "/images/research/nc-cover-crop-extracting-soil-core.jpeg",
      alt: "Researchers extracting a soil core in a cover crop field",
      objectPosition: "center center"
    },
    {
      title: "Soil core storage",
      description:
        "Collected soil cores are organized and stored for processing and analysis after field sampling.",
      image: "/images/research/nc-cover-crop-soil-cores.jpeg",
      alt: "Soil core tubes stored on a laboratory shelf",
      objectPosition: "center center"
    }
  ]
};

export const northCarolinaSoilBaselineGallery: GalleryCollection = {
  eyebrow: "North Carolina Soil Baselines",
  title: "Soil organic carbon and nutrient baseline sampling",
  description:
    "The North Carolina team expanded soil organic carbon and nutrient baseline sampling to 24 fields, using a gas-powered soil sampling system to improve field collection efficiency while samples move through drying, grinding, and shipment preparation.",
  photos: [
    {
      title: "Expanded field sampling network",
      description:
        "Aerial field imagery shows the scale of the North Carolina sampling network supporting soil organic carbon and nutrient baseline work.",
      image: "/images/research/nc-soc-field-aerial.jpeg",
      alt: "Aerial view of North Carolina cotton fields in the soil baseline sampling network",
      objectPosition: "center center"
    },
    {
      title: "Gas-powered soil sampling",
      description:
        "The team is using a gas-powered soil sampling system to make field collection faster and more efficient across multiple fields.",
      image: "/images/research/nc-soc-gas-powered-sampling.jpeg",
      alt: "Researcher using a gas-powered soil sampling system in a cotton field",
      objectPosition: "center center"
    },
    {
      title: "Soil core collection",
      description:
        "Field sampling captures soil cores that support the larger multi-state dataset for carbon and nutrient baseline measurements.",
      image: "/images/research/nc-soc-soil-core-field.jpeg",
      alt: "Researcher collecting a soil core in a North Carolina cotton field",
      objectPosition: "center center"
    },
    {
      title: "Sample preparation and grinding",
      description:
        "Processed samples are dried, ground, organized, and prepared for shipment to Texas for project analyses.",
      image: "/images/research/nc-soc-soil-grinding.jpeg",
      alt: "Soil samples and grinding equipment arranged on a field laboratory cart",
      objectPosition: "center center"
    }
  ]
};

export const galleryCollections: GalleryCollection[] = [
  ce2CollegeStationGallery,
  northCarolinaSoilBaselineGallery,
  northCarolinaCoverCropGallery,
  sanguAngadiVisitGallery,
  annualMeetingGallery
];
