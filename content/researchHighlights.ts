export type ResearchHighlight = {
  title: string;
  category: string;
  summary: string;
  update?: string;
};

export const researchHighlights: ResearchHighlight[] = [
  {
    title: "Soil Carbon and Nutrient Baselines",
    category: "Objective 1.1",
    summary:
      "Teams are establishing soil organic carbon, carbon-intensity, and nutrient baselines across Cotton Belt ecoregions.",
    update:
      "Year 2 report updates include Texas soil sampling across five tillage and cover crop treatments, New Mexico soil profile carbon and nitrogen work, Georgia and North Carolina SOC and AMF sampling, and completion of 30 Mississippi on-farm soil sampling sites."
  },
  {
    title: "Regenerative Practice Evaluations",
    category: "Objective 1.2",
    summary:
      "Field teams evaluate cover crop establishment, bed systems, living mulches, alternative weed control, rotations, and reduced tillage.",
    update:
      "Annual report findings include cotton/forage sorghum rotation work, circular grass buffer strips in New Mexico, Texas bed configuration and cover crop termination studies, Arizona irrigated cover crop trials, and Agricenter flame weeding, mulch, cultivation, and autonomous tractor treatments."
  },
  {
    title: "Soil Health, GHG, Microbiome, and Cotton Traits",
    category: "Objectives 1.2.2-1.3",
    summary:
      "Research tracks soil carbon and GHG outcomes, water use, perennial grasses, soil microbiomes, soil-borne pathogens, and cotton root traits.",
    update:
      "Year 2 progress includes soil respiration and wet aggregate stability measurements, AMF and phosphatase analyses underway, microbial DNA extraction and 16S sequencing, distinct microbial signatures among production systems, and cotton line and cultivar evaluations for weed suppression, photosynthetic traits, and root traits."
  },
  {
    title: "Precision AI/ML Diagnostics and Management",
    category: "Objective 2",
    summary:
      "Objective 2 develops UAS-based diagnosis, site-specific treatment frameworks, smart irrigation systems, and nutrient deficiency diagnostics.",
    update:
      "The Year 2 report describes AI/ML-ready datasets from soil moisture sensors, UAS platforms, satellite imagery, plant height, biomass, yield, fiber quality, irrigation amounts, and treatment strategies, plus Holos DSS calibration for the TAMU cotton test farm."
  },
  {
    title: "Economics, Markets, Adoption, and Workforce Pathways",
    category: "Objectives 3-6",
    summary:
      "Economic, adoption, Extension, and education teams connect precision regenerative practices with profitability, producer decision-making, outreach, and workforce training.",
    update:
      "Year 2 work included economic meta-analysis and Monte Carlo risk analysis, South Georgia farmer focus groups with Soil Health Institute collaboration, county meetings and conference outreach, and four Texas Tech undergraduates trained in field and greenhouse weed science."
  },
  {
    title: "Farmer Adoption Across the Cotton Belt",
    category: "Objective 4",
    summary:
      "Social science teams study producers' multi-dimensional experiences with regenerative practice adoption and soil health management.",
    update:
      "The Year 2 report notes three South Georgia focus groups with current or prospective cotton farmers, Soil Health Institute collaboration, farm visits, farmer discussions, and a field survey instrument for Georgia producers participating in SAS-CAP soil sampling."
  },
  {
    title: "Extension, Outreach, and Grower Engagement",
    category: "Objective 5",
    summary:
      "Extension work moves regenerative climate-smart cotton knowledge through meetings, field updates, conferences, and stakeholder engagement.",
    update:
      "The annual report describes county meetings, a public radio segment, agricultural conferences, university symposiums, and outreach to farmers, consultants, industry, students, and stakeholders."
  },
  {
    title: "Education and Rural Workforce Development",
    category: "Objective 6",
    summary:
      "Education activities train the next generation of research and Extension scientists, practitioners, and rural workforce participants.",
    update:
      "Year 2 workforce development included four Texas Tech undergraduate students gaining hands-on experience in field and greenhouse weed science, weed identification, sprayer calibration, small-plot data collection, and data entry."
  },
  {
    title: "Simulation Modeling for Climate Adaptation",
    category: "Objective 1.3",
    summary:
      "Simulation work evaluates long-term climate impacts of regenerative practices, planting dates, crop rotations, and adaptive production strategies.",
    update:
      "GaiaDhi AgTech and Texas A&M configured and calibrated the Holos DSS model for the TAMU cotton test farm, completed yield validation testing, modeled soil CO2 emission trends, and initiated crop rotation simulations."
  }
];
