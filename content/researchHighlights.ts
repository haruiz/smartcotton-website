export type ResearchHighlight = {
  title: string;
  category: string;
  summary: string;
};

// TODO: Replace draft research highlight copy with vetted project descriptions and real field imagery.
export const researchHighlights: ResearchHighlight[] = [
  {
    title: "Soil Health and Carbon Sequestration",
    category: "Soil systems",
    summary:
      "Field research evaluates how conservation tillage, cover crops, living mulches, and residue management can improve soil structure, microbial activity, and carbon storage in cotton systems."
  },
  {
    title: "AI/ML Precision Cotton Management",
    category: "Digital agriculture",
    summary:
      "Researchers are developing data-driven approaches that combine remote sensing, field measurements, and machine learning to improve timing and placement of inputs."
  },
  {
    title: "Greenhouse Gas Reduction in Cotton",
    category: "Climate impact",
    summary:
      "Multi-state trials measure emissions and management tradeoffs to identify practical pathways for reducing greenhouse gases while sustaining cotton productivity."
  },
  {
    title: "Pest, Nutrient, and Water Management",
    category: "Production resilience",
    summary:
      "Integrated studies connect weed control, pest pressure, irrigation scheduling, and nutrient stewardship to strengthen climate-smart cotton recommendations."
  }
];
