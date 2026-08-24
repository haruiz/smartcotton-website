export type ProgressEntry = {
  objective: string;
  title: string;
  locations: string[];
  team: string;
  summary: string;
  accomplishments: string[];
};

export type AnnualProgress = {
  year: "Year 1" | "Year 2";
  period: string;
  headline: string;
  summary: string;
  entries: ProgressEntry[];
};

export const annualProgress: AnnualProgress[] = [
  {
    year: "Year 1",
    period: "2024-2025",
    headline: "Launch-year outputs, outreach, and foundational engagement",
    summary:
      "The Year 1 source content documents the official project objectives, initial scientific outputs, early regenerative cotton research dissemination, and a broad outreach/Extension program from June 2024 through February 2025.",
    entries: [
      {
        objective: "Objective 1",
        title: "Early regenerative cotton and soil health outputs",
        locations: ["Alabama", "New Mexico", "Texas"],
        team: "Auburn, New Mexico State, Texas A&M, and collaborating teams",
        summary:
          "Year 1 outputs included work on cover crops, cotton root and photosynthetic traits, nutrient uptake, soil health, and greenhouse gas reduction in water-limited systems.",
        accomplishments: [
          "Documented a published Field Crops Research paper on 65 years of progress in cotton nutrient uptake, efficiency, and partitioning.",
          "Reported Beltwide and Southern ASA presentations on cover crops, soil health, yield, root traits, and photosynthetic traits in cotton.",
          "Tracked a submission-ready Journal of Environmental Management manuscript on grass buffer strips in irrigation circles and greenhouse gas emissions."
        ]
      },
      {
        objective: "Objective 1",
        title: "Hyphosphere and soil microbiome method development",
        locations: ["Texas"],
        team: "Sanjay Antony-Babu, Gayan Abeysinghe, Elek Nagy, and collaborators",
        summary:
          "The first reporting period included dissemination of a hyphal-baiting method for studying hyphal-dwelling bacteria and plant-associated soil systems.",
        accomplishments: [
          "Presented 'Hunting the Hyphosphere' at the 36th Annual Texas Plant Protection Conference in College Station, Texas.",
          "Prepared a manuscript targeting PlosOne on a novel method to bait hyphosphere bacteria in plant-associated soil."
        ]
      },
      {
        objective: "Objective 5",
        title: "Outreach and Extension across grower, consultant, and industry audiences",
        locations: ["Texas", "Mississippi", "New Mexico", "Oklahoma", "Louisiana", "Tennessee"],
        team: "Benjamin McKnight, Drew Gholson, Rajan Ghimire, and collaborators",
        summary:
          "The source document lists 26 Year 1 outreach and Extension records spanning conferences, workshops, grower meetings, committee briefings, podcasts, and certified crop advisor training.",
        accomplishments: [
          "Reached producers, consultants, industry representatives, farmers, ranchers, local stakeholders, and agricultural professionals through regional meetings.",
          "Highlighted irrigation triggers, water management, soil moisture sensors, tillage, cover crops, crop physiology, and field-crop management.",
          "Built the public outreach base for future SAS-CAP climate-smart cotton recommendations."
        ]
      }
    ]
  },
  {
    year: "Year 2",
    period: "2025-2026",
    headline: "Expanded field research, datasets, economics, adoption, Extension, and training",
    summary:
      "Year 2 progress advanced multi-state field research, soil and microbial analyses, regenerative practice evaluation, precision technology development, economic analysis, farmer adoption studies, outreach, and workforce development across Texas, New Mexico, Arizona, Georgia, North Carolina, Mississippi, Alabama, and Tennessee.",
    entries: [
      {
        objective: "Objective 1",
        title: "Regenerative production systems and soil health measurements",
        locations: ["Texas", "New Mexico", "Arizona", "Georgia", "North Carolina", "Mississippi", "Alabama", "Tennessee"],
        team: "Mowrer, Lewis, Rajan, Ghimire, Sanyal, Basinger, Leon-Gonzalez, Antony-Babu, Sanz-Saez, Gholson, Agricenter, and collaborators",
        summary:
          "Teams evaluated regenerative cotton production practices across multiple states, including tillage and cover crop treatments, crop rotations, bed systems, living mulches, irrigated desert cotton, on-farm soil sampling, root traits, AMF, microbiome/pathobiome work, and autonomous field operations.",
        accomplishments: [
          "Texas teams collected soil samples under five tillage and cover crop treatments and completed soil organic carbon, respiration, and wet aggregate stability measurements, with AMF and phosphatase analyses underway.",
          "New Mexico teams completed first-year soil health data collection and analysis for circular grass buffer strips, collected profile carbon and nitrogen samples, identified on-farm sampling sites, presented preliminary results, and had one manuscript accepted.",
          "Arizona teams demonstrated cover crop production on beds in rotation with upland cotton under irrigation, with cover crop treatments producing higher lint yield than controls.",
          "Georgia and North Carolina teams advanced SOC, bulk density, AMF, mid-season sampling, living mulch, and weed-suppression work.",
          "Microbiome teams completed DNA extraction and 16S sequencing for Brazos Bottom and Lamesa samples, showing distinct microbial signatures among production systems.",
          "Mississippi State completed all 30 on-farm soil sampling sites and collected seasonal crop, soil, and cover crop measurements.",
          "Agricenter International implemented flame weeding, mulch, cultivation, and autonomous tractor operations while collecting labor, weed control, plant response, and yield data."
        ]
      },
      {
        objective: "Objective 2",
        title: "AI/ML-ready datasets and simulation-based decision support",
        locations: ["Texas", "multi-state data network"],
        team: "Mahendra Bhandari, Uday Vaddevolu, Sabin Shrestha, GaiaDhi AgTech, Texas A&M, and partners",
        summary:
          "Progress focused on building AI/ML-ready datasets and advancing simulation tools for climate-smart cotton production.",
        accomplishments: [
          "The team developed a comprehensive data acquisition plan spanning irrigation research programs, institutes, and industry partners.",
          "Planned data streams include soil moisture sensors, UAS platforms, satellite imagery, plant height, biomass, yield, fiber quality, irrigation amounts, and treatment strategies.",
          "GaiaDhi AgTech and Texas A&M configured and calibrated the Holos DSS model for the TAMU cotton test farm, completed yield validation testing, extracted modeled soil CO2 emission trends, simulated planting-date effects, and initiated crop rotation simulations."
        ]
      },
      {
        objective: "Objective 3",
        title: "Economics, profitability, risk, and market potential",
        locations: ["Texas High Plains", "U.S. agronomic literature"],
        team: "Darren Hudson and collaborators",
        summary:
          "Economic analysis evaluated the feasibility, profitability, risk, and market potential of precision regenerative cotton practices.",
        accomplishments: [
          "Completed a meta-analysis of U.S.-based agronomic studies on precision application and soil health practices, including guidance systems, variable rate application, cover crops, and pasture management.",
          "Identified guidance systems and variable rate planters as important cotton practices for improving yield and profitability.",
          "Analyzed risk and insurance impacts of soil health improvements using Monte Carlo simulation and Texas High Plains data.",
          "Found that improved soil health can increase yield and reduce crop failure risk in dryland cotton, with yield benefits outweighing higher insurance costs."
        ]
      },
      {
        objective: "Objective 4",
        title: "Farmer adoption and social dimensions of regenerative practices",
        locations: ["Georgia", "Cotton Belt planning network"],
        team: "Jennifer Jo Thompson, Cydney Seigerman, Soil Health Institute collaborators, and UGA partners",
        summary:
          "Adoption research focused on producer experiences, soil health decision-making, and the social dimensions of regenerative practice adoption.",
        accomplishments: [
          "Facilitated three in-person South Georgia focus groups with nine current or prospective cotton farmers in collaboration with the Soil Health Institute.",
          "Analyzed results and shared them through an internal report, social media post, UGA Impact Statement, and a 2025 American Anthropological Association presentation.",
          "Developed a manuscript on farmer adoption research and a field survey instrument for Georgia producers participating in SAS-CAP soil sampling.",
          "Planned to share the survey instrument across other Cotton Belt teams after piloting."
        ]
      },
      {
        objective: "Objective 5",
        title: "Extension, outreach, and stakeholder engagement",
        locations: ["Texas", "Mississippi", "Arizona", "Georgia", "New Mexico", "Tennessee", "Utah", "online"],
        team: "Peter Dotray, Benjamin McKnight, Drew Gholson, Rajan Ghimire, Debankur Sanyal, Katie Lewis, Sanjay Antony-Babu, Agricenter, and collaborators",
        summary:
          "The Year 2 source lists field days, grower meetings, seminars, workshops, conference presentations, podcasts, stakeholder visits, and annual meeting activities that moved project findings toward growers, consultants, industry, students, and local stakeholders.",
        accomplishments: [
          "Shared SAS Smart Cotton updates through county meetings, conferences, radio/public programming, field days, seminars, webinars, and scientific symposia.",
          "Documented outreach across cotton cropping systems, irrigation, circular buffer strips, risk management, living mulches, soil health workshops, Arizona cotton tent talks, and Agricenter robotics/field visits.",
          "Scheduled the 2025 SAS CAP Grant Annual Update Meeting for November 9, 2025, in Salt Lake City with hybrid participation."
        ]
      },
      {
        objective: "Objective 6",
        title: "Education, training, and workforce development",
        locations: ["Texas", "Texas Tech University", "project-wide"],
        team: "Project trainees, undergraduate students, graduate students, postdocs, and faculty mentors",
        summary:
          "The project provided hands-on training and professional development for students and trainees involved in regenerative and climate-smart cotton research.",
        accomplishments: [
          "Four Texas Tech undergraduate students were employed and supported through the project.",
          "Students gained field and greenhouse experience in chemical and non-chemical weed control tactics for agronomic systems.",
          "Training included weed identification, sprayer calibration, small plot data collection, data entry, exposure to farming practices, precision agriculture, data management, and regenerative cotton research."
        ]
      }
    ]
  }
];
