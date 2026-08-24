export type ResearchHighlight = {
  title: string;
  category: string;
  summary: string;
  update?: string;
};

export const researchHighlights: ResearchHighlight[] = [
  {
    title: "Soil Carbon, Soil Health, and Carbon-Intensity Baselines",
    category: "Soil systems",
    summary:
      "SmartCotton teams are collecting and analyzing soil organic carbon, carbon and nitrogen profiles, soil respiration, wet aggregate stability, AMF, phosphatase activity, and related soil health indicators across Cotton Belt environments.",
    update:
      "Year 2 included Texas sampling across five tillage and cover crop treatments, New Mexico soil profile carbon and nitrogen work, Georgia and North Carolina SOC and AMF sampling, and Mississippi completion of 30 on-farm soil sampling sites."
  },
  {
    title: "Cover Crops, Tillage, Bed Systems, and Regenerative Cotton",
    category: "Regenerative systems",
    summary:
      "Field research evaluates cover crops, reduced tillage, raised and flat bed systems, cotton/forage sorghum rotation, irrigated desert production, and organic or transitional practices.",
    update:
      "Preliminary Texas Blackland results showed cover crops maintained or improved yield performance, especially under the two-week termination treatment. Arizona cover crop treatments produced higher lint yield than controls under irrigated conditions."
  },
  {
    title: "Living Mulches, Weed Suppression, and Cotton Root Traits",
    category: "Regenerative systems",
    summary:
      "Teams are studying cool-season perennial grasses, weed suppression, allelopathic cotton lines, cereal rye termination, cotton root traits, and photosynthetic traits in regenerative systems.",
    update:
      "Year 2 outputs included WSSA, Southern Cover Crop Council, Southern Weed Science Society, Beltwide, and CANVAS presentations on living mulches, cover crop termination, root traits, NDVI, and weed suppression."
  },
  {
    title: "Microbiome, Pathobiome, AMF, and Hyphosphere Research",
    category: "Soil biology",
    summary:
      "Microbial research connects cotton soil health with AMF, microbiome assembly, hyphosphere bacteria, Fusarium oxysporum f. sp. vasinfectum Race 4, and pathobiome dynamics.",
    update:
      "The project completed DNA extraction and 16S sequencing for Brazos Bottom and Lamesa samples and documented distinct microbial signatures among production systems."
  },
  {
    title: "UAS, Sensors, Satellite Data, and AI/ML-Ready Datasets",
    category: "Precision agriculture",
    summary:
      "Objective 2 is building data streams from soil moisture sensors, UAS platforms, satellite imagery, plant height, biomass, yield, fiber quality, irrigation, and treatment strategies.",
    update:
      "Year 2 work developed a comprehensive data acquisition plan with research programs, institutes, and industry partners involved in irrigation research."
  },
  {
    title: "Simulation Modeling for Climate Adaptation",
    category: "Digital agriculture",
    summary:
      "Simulation work evaluates regenerative practices and climate adaptation strategies using decision-support tools that can compare farming practices, planting dates, and crop rotations.",
    update:
      "GaiaDhi AgTech and Texas A&M configured and calibrated the Holos DSS model for the TAMU cotton test farm, completed yield validation testing, and modeled soil CO2 emissions and planting-date effects."
  },
  {
    title: "Economics, Risk, Insurance, and Market Opportunities",
    category: "Economics",
    summary:
      "Economic research evaluates profitability, productivity, precision management technologies, soil health practices, risk, insurance, and potential market pathways for climate-smart cotton.",
    update:
      "Year 2 analysis found that improved soil health can increase yield and reduce crop failure risk in dryland cotton, with yield benefits outweighing higher insurance costs."
  },
  {
    title: "Farmer Adoption and Social Dimensions of Soil Health",
    category: "Adoption pathways",
    summary:
      "Social science research examines how farmers experience regenerative adoption, what barriers and opportunities shape decisions, and how on-farm research networks are formed.",
    update:
      "UGA and Soil Health Institute collaborators facilitated three South Georgia focus groups with nine current or prospective cotton farmers and developed a survey instrument for SAS-CAP soil sampling participants."
  },
  {
    title: "Extension, Education, and Workforce Development",
    category: "Extension and training",
    summary:
      "Outreach and training activities connect project findings with growers, consultants, industry, students, local stakeholders, graduate students, postdocs, and undergraduate trainees.",
    update:
      "The source document lists 26 Year 1 outreach records, extensive Year 2 field days and meetings, and four undergraduate trainees gaining field and greenhouse weed science experience."
  }
];
