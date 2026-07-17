export type ResearchHighlight = {
  title: string;
  category: string;
  summary: string;
  update?: string;
};

// TODO: Replace draft research highlight copy with vetted project descriptions and real field imagery.
export const researchHighlights: ResearchHighlight[] = [
  {
    title: "Soil Health and Carbon Sequestration",
    category: "Soil systems",
    summary:
      "Field research evaluates how conservation tillage, cover crops, living mulches, and residue management can improve soil structure, microbial activity, and carbon storage in cotton systems.",
    update:
      "Annual updates will track baseline sampling, soil carbon measurements, biological indicators, and management comparisons across research sites."
  },
  {
    title: "AI/ML Precision Cotton Management",
    category: "Digital agriculture",
    summary:
      "Researchers are developing data-driven approaches that combine remote sensing, field measurements, and machine learning to improve timing and placement of inputs.",
    update:
      "Current work emphasizes UAS data collection, field-data integration, and early decision-support workflows for precision cotton management."
  },
  {
    title: "Regenerative Cotton Practices",
    category: "Regenerative systems",
    summary:
      "Multi-state trials examine how cover crops, conservation tillage, residue management, and diversified rotations can support resilient climate-smart cotton systems.",
    update:
      "Project reports will summarize establishment progress, cover crop observations, management challenges, and early field performance indicators."
  },
  {
    title: "Economics, Adoption, and Market Opportunities",
    category: "Adoption pathways",
    summary:
      "Economic and adoption research connects field outcomes with grower decision-making, implementation costs, risk, and market opportunities for climate-smart cotton.",
    update:
      "Annual updates will report stakeholder engagement, adoption barriers, participant reach, and progress toward market-oriented project outcomes."
  }
];
