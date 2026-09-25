import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const TMP_DIR = "C:\\Users\\deepak.loura\\workspace\\smartcotton-website\\.codex-tmp\\sas_eval_deck";
const FINAL_PPTX = "C:\\Users\\deepak.loura\\workspace\\smartcotton-website\\SAS_Cotton_Project_Evaluation_Update_2026_Professional.pptx";
const HERO_IMAGE = path.join(TMP_DIR, "assets", "cotton-hero-bg.png");

const W = 1280;
const H = 720;
const C = {
  canvas: "#F7F4EC",
  dark: "#102019",
  deep: "#173A2B",
  green: "#245B3A",
  leaf: "#3F7A49",
  gold: "#D8A94F",
  sky: "#66C5E8",
  cream: "#FFF9EE",
  panel: "#FFFFFF",
  ink: "#17201A",
  muted: "#5C675F",
  line: "#DDD2BD",
  paleGreen: "#E9F2E8",
  paleGold: "#F4E6C6",
};

async function readImageBlob(imagePath) {
  const bytes = await fs.readFile(imagePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function shape(slide, position, options = {}) {
  const geometry = options.geometry ?? "roundRect";
  const config = {
    geometry,
    name: options.name,
    position,
    fill: options.fill ?? C.panel,
    line: options.line ?? { style: "solid", fill: options.lineFill ?? C.line, width: options.lineWidth ?? 1 },
  };
  if (["rect", "roundRect", "textbox"].includes(geometry)) {
    config.borderRadius = options.borderRadius ?? "rounded-md";
  }
  if (options.shadow) config.shadow = options.shadow;
  return slide.shapes.add(config);
}

function text(slide, value, position, options = {}) {
  const box = slide.shapes.add({
    geometry: "textbox",
    name: options.name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  box.text = value;
  box.text.style = {
    fontSize: options.fontSize ?? 20,
    bold: options.bold ?? false,
    color: options.color ?? C.ink,
    typeface: options.typeface ?? "Aptos",
    alignment: options.alignment ?? "left",
    verticalAlignment: options.verticalAlignment ?? "top",
  };
  return box;
}

function header(slide, slideNo, kicker, title) {
  slide.background.fill = C.canvas;
  shape(slide, { left: 0, top: 0, width: 34, height: H }, {
    geometry: "rect",
    fill: C.dark,
    line: { style: "solid", fill: C.dark, width: 0 },
  });
  shape(slide, { left: 34, top: 0, width: 5, height: H }, {
    geometry: "rect",
    fill: C.gold,
    line: { style: "solid", fill: C.gold, width: 0 },
  });
  text(slide, kicker.toUpperCase(), { left: 72, top: 28, width: 560, height: 24 }, {
    fontSize: 13,
    bold: true,
    color: C.green,
  });
  text(slide, title, { left: 72, top: 54, width: 1100, height: 58 }, {
    fontSize: 36,
    bold: true,
    color: C.ink,
    typeface: "Aptos Display",
  });
  text(slide, String(slideNo).padStart(2, "0"), { left: 1155, top: 646, width: 56, height: 28 }, {
    fontSize: 14,
    bold: true,
    alignment: "right",
    color: C.green,
  });
}

function notes(slide, lines) {
  slide.speakerNotes.textFrame.setText(["[Sources]", ...lines]);
  slide.speakerNotes.setVisible(true);
}

function stat(slide, left, top, value, label, detail, options = {}) {
  const cardWidth = options.width ?? 330;
  const cardHeight = options.height ?? 198;
  shape(slide, { left, top, width: cardWidth, height: cardHeight }, {
    fill: options.fill ?? C.panel,
    lineFill: options.lineFill ?? "#E6DCC7",
    shadow: "shadow-sm",
  });
  text(slide, value, { left: left + 26, top: top + 24, width: 250, height: 56 }, {
    fontSize: 42,
    bold: true,
    color: options.valueColor ?? C.green,
    typeface: "Aptos Display",
  });
  text(slide, label, { left: left + 28, top: top + 90, width: cardWidth - 56, height: 34 }, {
    fontSize: 21,
    bold: true,
    color: C.ink,
  });
  text(slide, detail, { left: left + 28, top: top + 126, width: cardWidth - 58, height: cardHeight - 140 }, {
    fontSize: 14,
    color: C.muted,
  });
}

function labelPill(slide, left, top, label, fill = C.deep, color = C.cream) {
  shape(slide, { left, top, width: 128, height: 34 }, {
    fill,
    line: { style: "solid", fill, width: 0 },
    borderRadius: "rounded-md",
  });
  text(slide, label, { left, top: top + 7, width: 128, height: 22 }, {
    fontSize: 13,
    bold: true,
    alignment: "center",
    color,
  });
}

function addQuoteBar(slide, value) {
  shape(slide, { left: 74, top: 622, width: 1088, height: 46 }, {
    fill: C.deep,
    line: { style: "solid", fill: C.deep, width: 0 },
  });
  text(slide, value, { left: 104, top: 634, width: 1010, height: 22 }, {
    fontSize: 16,
    bold: true,
    color: C.cream,
  });
}

async function addHeroImage(slide, imageBytes, position, options = {}) {
  slide.images.add({
    blob: imageBytes,
    contentType: "image/png",
    alt: options.alt ?? "Cotton field at golden hour with precision agriculture cues",
    fit: "cover",
    geometry: options.geometry ?? "roundRect",
    borderRadius: options.borderRadius ?? "rounded-md",
    position,
  });
}

async function buildDeck() {
  const heroBytes = await readImageBlob(HERO_IMAGE);
  const deck = Presentation.create({ slideSize: { width: W, height: H } });

  // 1. Cover
  {
    const slide = deck.slides.add();
    slide.background.fill = C.dark;
    shape(slide, { left: 0, top: 0, width: W, height: H }, {
      geometry: "rect",
      fill: C.dark,
      line: { style: "solid", fill: C.dark, width: 0 },
    });
    shape(slide, { left: 0, top: 0, width: 760, height: H }, {
      geometry: "rect",
      fill: "#13271E",
      line: { style: "solid", fill: "#13271E", width: 0 },
    });
    await addHeroImage(slide, heroBytes, { left: 708, top: 34, width: 536, height: 652 }, {
      borderRadius: "rounded-lg",
    });
    shape(slide, { left: 688, top: 72, width: 5, height: 520 }, {
      geometry: "rect",
      fill: C.gold,
      line: { style: "solid", fill: C.gold, width: 0 },
    });
    text(slide, "SAS COTTON PROJECT", { left: 78, top: 72, width: 410, height: 28 }, {
      fontSize: 14,
      bold: true,
      color: C.gold,
    });
    text(slide, "Climate-Smart\nCotton", { left: 76, top: 134, width: 560, height: 136 }, {
      fontSize: 54,
      bold: true,
      color: C.cream,
      typeface: "Aptos Display",
    });
    text(slide, "Two-Year Evaluation Update", { left: 80, top: 300, width: 560, height: 52 }, {
      fontSize: 34,
      bold: true,
      color: "#E8D9B7",
      typeface: "Aptos Display",
    });
    text(slide, "Developing precision regenerative practices and market opportunities for the Cotton Belt", {
      left: 82,
      top: 386,
      width: 510,
      height: 78,
    }, { fontSize: 22, color: "#DCE7D9" });
    labelPill(slide, 82, 516, "Research", C.green);
    labelPill(slide, 228, 516, "Education", C.gold, C.dark);
    labelPill(slide, 374, 516, "Extension", C.sky, C.dark);
    text(slide, "Award 2024-68012-41750", { left: 82, top: 632, width: 420, height: 26 }, {
      fontSize: 15,
      color: "#CAD7CA",
    });
    notes(slide, [
      "Project title, award number, and project framing from SAS Cotton annual reports.",
      "Cover omits meeting timing per user request.",
      "Background image generated with OpenAI imagegen and embedded from workspace asset .codex-tmp/sas_eval_deck/assets/cotton-hero-bg.png.",
    ]);
  }

  // 2. Purpose and agenda
  {
    const slide = deck.slides.add();
    header(slide, 2, "Evaluation Meeting", "Focus the review on evidence, integration, and Year 3-5 decisions");
    shape(slide, { left: 72, top: 148, width: 404, height: 418 }, {
      fill: C.deep,
      line: { style: "solid", fill: C.deep, width: 0 },
      shadow: "shadow-sm",
    });
    text(slide, "Meeting purpose", { left: 106, top: 184, width: 300, height: 36 }, {
      fontSize: 26,
      bold: true,
      color: C.cream,
    });
    text(slide, "Provide a concise two-year progress update, test whether the project is functioning as a fully integrated SAS effort, and identify course corrections before the next phase.", {
      left: 106,
      top: 244,
      width: 320,
      height: 160,
    }, { fontSize: 20, color: "#E6EFE3" });
    text(slide, "Evaluator output", { left: 106, top: 440, width: 300, height: 28 }, {
      fontSize: 20,
      bold: true,
      color: C.gold,
    });
    text(slide, "Strengths, gaps, recommended metrics, and priority actions for Years 3-5.", {
      left: 106,
      top: 474,
      width: 320,
      height: 56,
    }, { fontSize: 17, color: "#E6EFE3" });
    const agenda = [
      ["01", "Integrated SAS model and evaluator lens"],
      ["02", "Progress across six objectives"],
      ["03", "Evidence, outcomes, and metrics"],
      ["04", "Stakeholder engagement and adoption readiness"],
      ["05", "Implementation risks and Year 3-5 priorities"],
    ];
    agenda.forEach((item, i) => {
      const y = 158 + i * 82;
      shape(slide, { left: 528, top: y, width: 634, height: 58 }, {
        fill: C.panel,
        shadow: "shadow-sm",
      });
      text(slide, item[0], { left: 552, top: y + 15, width: 44, height: 24 }, {
        fontSize: 18,
        bold: true,
        color: C.gold,
      });
      text(slide, item[1], { left: 616, top: y + 15, width: 490, height: 24 }, {
        fontSize: 21,
        bold: true,
        color: C.ink,
      });
    });
    addQuoteBar(slide, "Evaluator role: help turn project activity into integrated evidence and actionable recommendations.");
    notes(slide, [
      "Meeting purpose, evaluator deliverable, and agenda adapted from user-provided evaluation-team planning note.",
      "NIFA SAS FAQ states A9201 applications must be fully integrated projects addressing research, education, and extension: https://www.nifa.usda.gov/grants/programs/agriculture-food-research-initiative/afri-strengthening-agricultural-systems-rfa-frequently-asked-questions",
    ]);
  }

  // 3. Evaluation lens
  {
    const slide = deck.slides.add();
    header(slide, 3, "SAS Evaluation Lens", "Assess whether the project is acting like one integrated system");
    text(slide, "NIFA positions SAS CAP projects as large, systems-oriented efforts where research, education, and Extension/outreach reinforce one another around problems that matter to farmers and agricultural systems.", {
      left: 76,
      top: 138,
      width: 1040,
      height: 56,
    }, { fontSize: 21, color: C.muted });
    const cards = [
      ["Integration quality", "Are agronomy, soil health, AI/ML, economics, adoption, education, and extension feeding a shared learning loop?"],
      ["Logic-model evidence", "Are activities producing outputs, short-term outcomes, intermediate outcomes, and a credible path to Year 5 impact?"],
      ["Stakeholder value", "Are growers, extension personnel, industry, and supply-chain partners engaged at the right depth?"],
      ["Course corrections", "What coordination, indicators, and governance routines should be adjusted now?"],
    ];
    cards.forEach((card, i) => {
      const left = i % 2 === 0 ? 78 : 640;
      const top = i < 2 ? 246 : 424;
      shape(slide, { left, top, width: 500, height: 136 }, {
        fill: i === 0 ? C.paleGreen : C.panel,
        shadow: "shadow-sm",
      });
      shape(slide, { left, top, width: 8, height: 136 }, {
        geometry: "rect",
        fill: i % 2 === 0 ? C.green : C.gold,
        line: { style: "solid", fill: i % 2 === 0 ? C.green : C.gold, width: 0 },
      });
      text(slide, card[0], { left: left + 30, top: top + 24, width: 420, height: 30 }, {
        fontSize: 24,
        bold: true,
        color: C.ink,
      });
      text(slide, card[1], { left: left + 30, top: top + 64, width: 420, height: 58 }, {
        fontSize: 17,
        color: C.muted,
      });
    });
    notes(slide, [
      "NIFA SAS program page describes SAS as fully integrated research, education, and extension projects and CAP grants as systems-oriented collaborations: https://www.nifa.usda.gov/grants/programs/agriculture-food-research-initiative/afri-strengthening-agricultural-systems",
      "FY26 SAS NOFO describes fully integrated extension, education, and research projects through CAP grants: https://www.nifa.usda.gov/sites/default/files/2026-01/FY26-AFRI-SAS-NOFO-P_0.pdf",
      "Evaluation themes adapted from user-provided planning note.",
    ]);
  }

  // 4. Six-objective system
  {
    const slide = deck.slides.add();
    header(slide, 4, "Project Architecture", "Six objectives connect to producer value");
    shape(slide, { left: 452, top: 276, width: 326, height: 132 }, {
      fill: C.deep,
      line: { style: "solid", fill: C.deep, width: 0 },
      shadow: "shadow-sm",
    });
    text(slide, "Climate-smart cotton outcomes", { left: 484, top: 304, width: 262, height: 52 }, {
      fontSize: 26,
      bold: true,
      color: C.cream,
      alignment: "center",
    });
    text(slide, "soil health | resource efficiency | market opportunity | adoption readiness", {
      left: 478,
      top: 360,
      width: 272,
      height: 30,
    }, { fontSize: 13, color: "#D7E8D4", alignment: "center" });
    const objs = [
      ["01", "Regenerative production and soil carbon baselines", 78, 170],
      ["02", "AI/ML and smart technologies for resource conservation", 78, 420],
      ["03", "Economic feasibility and market opportunities", 840, 170],
      ["04", "Producer adoption and social science evidence", 840, 420],
      ["05", "Extension and outreach for practice adoption", 458, 458],
      ["06", "Education, training, and workforce development", 458, 130],
    ];
    objs.forEach(([num, label, left, top]) => {
      shape(slide, { left, top, width: 330, height: 110 }, {
        fill: C.panel,
        shadow: "shadow-sm",
      });
      text(slide, num, { left: left + 24, top: top + 28, width: 48, height: 34 }, {
        fontSize: 25,
        bold: true,
        color: C.gold,
      });
      text(slide, label, { left: left + 82, top: top + 24, width: 214, height: 58 }, {
        fontSize: 18,
        bold: true,
        color: C.ink,
      });
    });
    addQuoteBar(slide, "Evaluation question: where can these objectives exchange data, decisions, and stakeholder feedback more deliberately?");
    notes(slide, [
      "Long-term goal and six objectives from both annual reports.",
      "Project architecture phrasing synthesized for evaluator-facing discussion.",
    ]);
  }

  // 5. Two-year trajectory
  {
    const slide = deck.slides.add();
    header(slide, 5, "Two-Year Trajectory", "Year 2 moved the project from setup into evidence generation");
    await addHeroImage(slide, heroBytes, { left: 70, top: 130, width: 1092, height: 138 }, {
      geometry: "roundRect",
      borderRadius: "rounded-md",
      alt: "Cotton field banner",
    });
    shape(slide, { left: 70, top: 130, width: 1092, height: 138 }, {
      fill: "#102019",
      line: { style: "solid", fill: "#102019", width: 0 },
    });
    text(slide, "The project has enough activity and early evidence to move from reporting outputs to managing outcome evidence.", {
      left: 105,
      top: 170,
      width: 930,
      height: 38,
    }, { fontSize: 24, bold: true, color: C.cream });
    const phases = [
      ["2024-25", "Foundation", "Hiring, protocols, site identification, early trials, seed increase, and outreach launch."],
      ["2025-26", "Evidence", "Soil sampling, field datasets, microbiome analyses, AI/ML planning, economics, adoption research, and outreach expanded."],
      ["2026-27", "Integration", "Harmonize data streams, connect research with adoption/economics, and define dashboard metrics."],
    ];
    phases.forEach((phase, i) => {
      const left = 80 + i * 373;
      shape(slide, { left, top: 332, width: 328, height: 206 }, {
        fill: i === 1 ? C.paleGreen : C.panel,
        shadow: "shadow-sm",
      });
      text(slide, phase[0], { left: left + 26, top: 358, width: 120, height: 26 }, {
        fontSize: 17,
        bold: true,
        color: C.gold,
      });
      text(slide, phase[1], { left: left + 26, top: 394, width: 260, height: 38 }, {
        fontSize: 27,
        bold: true,
        color: C.ink,
      });
      text(slide, phase[2], { left: left + 26, top: 446, width: 274, height: 70 }, {
        fontSize: 17,
        color: C.muted,
      });
    });
    notes(slide, [
      "Year 1 startup activities and challenges from SAS Cotton Annual Report 2024-25.",
      "Year 2 progress and next reporting period plans from SAS_Annual Report_2025-2026.",
      "Banner image generated with OpenAI imagegen and embedded from workspace asset .codex-tmp/sas_eval_deck/assets/cotton-hero-bg.png.",
    ]);
  }

  // 6. Research evidence
  {
    const slide = deck.slides.add();
    header(slide, 6, "Research Evidence", "Datasets are now forming across the production system");
    const streams = [
      ["Soil carbon and health", "TX High Plains farms, 20 GA fields, all 30 MS sites, and initial NC fields reported in sampling workflows.", "Standardize baselines and metadata."],
      ["Regenerative systems", "Cover crop, bed, living mulch, tillage, rotation, and weed-suppression trials active across states.", "Choose indicators of climate-smart performance."],
      ["Microbiome", "Hyphal baiting, rhizosphere, leaf, 16S, and shotgun sequencing workflows moved into analysis.", "Translate technical results for stakeholders."],
      ["AI/ML and modeling", "Irrigation data plan developed; Holos DSS calibrated; ET/model comparisons and early simulations underway.", "Define data quality rules before model building."],
      ["Economics and adoption", "Meta-analysis, risk/insurance work, focus groups, survey instrument, and participatory workshops underway.", "Connect field evidence to adoption and market claims."],
    ];
    streams.forEach((row, i) => {
      const y = 142 + i * 91;
      shape(slide, { left: 76, top: y, width: 1084, height: 72 }, {
        fill: i % 2 === 0 ? C.panel : "#FBF8F0",
        shadow: "shadow-sm",
      });
      text(slide, row[0], { left: 104, top: y + 18, width: 230, height: 28 }, {
        fontSize: 20,
        bold: true,
        color: C.green,
      });
      text(slide, row[1], { left: 368, top: y + 14, width: 448, height: 42 }, {
        fontSize: 16,
        color: C.ink,
      });
      text(slide, row[2], { left: 850, top: y + 14, width: 270, height: 42 }, {
        fontSize: 16,
        bold: true,
        color: C.muted,
      });
    });
    notes(slide, [
      "Soil sampling details from Year 2 annual report entries for Mowrer, Lewis, Ghimire, Basinger, Gholson, and Leon-Gonzalez.",
      "Regenerative systems details from Year 2 annual report entries for Rajan, Sanyal, Basinger, Sanz-Saez, Gholson, Jordan/Barth, and others.",
      "Microbiome details from Year 2 annual report entry for Sanjay Antony-Babu.",
      "AI/ML and modeling details from Year 2 annual report entries for Mahendra Bhandari, Uday Vaddevolu, Karthikeyan Kannappan, and Drew Gholson.",
      "Economics and adoption details from Year 2 annual report entries for Darren Hudson and Jennifer Jo Thompson.",
    ]);
  }

  // 7. Economics and adoption
  {
    const slide = deck.slides.add();
    header(slide, 7, "Decision Evidence", "Economics and adoption translate field results into producer choices");
    shape(slide, { left: 76, top: 146, width: 1090, height: 116 }, {
      fill: C.deep,
      line: { style: "solid", fill: C.deep, width: 0 },
      shadow: "shadow-sm",
    });
    text(slide, "The evaluation opportunity is to connect agronomic performance, risk, market value, and adoption barriers into one decision story.", {
      left: 112,
      top: 184,
      width: 990,
      height: 34,
    }, { fontSize: 24, bold: true, color: C.cream });
    const cards = [
      ["Economic feasibility", "Meta-analysis of precision application and soil-health practices; cotton findings emphasized guidance systems and variable-rate planters for yield and profit improvements."],
      ["Risk and insurance", "Monte Carlo analysis indicated soil-health improvements can raise yield and reduce crop-failure risk in Texas High Plains dryland cotton systems."],
      ["Producer adoption", "Three South Georgia focus groups with nine cotton farmers examined cover-crop adoption complexity, barriers, and sustaining conditions."],
      ["Survey and workshops", "A field survey instrument and participatory soil-health workshops create a path for cross-state adoption evidence in Years 3-5."],
    ];
    cards.forEach((card, i) => {
      const left = i % 2 === 0 ? 76 : 642;
      const top = i < 2 ? 318 : 486;
      shape(slide, { left, top, width: 524, height: 118 }, {
        fill: C.panel,
        shadow: "shadow-sm",
      });
      text(slide, card[0], { left: left + 28, top: top + 22, width: 440, height: 26 }, {
        fontSize: 21,
        bold: true,
        color: C.green,
      });
      text(slide, card[1], { left: left + 28, top: top + 56, width: 450, height: 50 }, {
        fontSize: 15,
        color: C.muted,
      });
    });
    notes(slide, [
      "Economic feasibility and risk/insurance claims from Year 2 annual report entry for Darren Hudson, Texas Tech University.",
      "Focus groups, survey instrument, and participatory workshop details from Year 2 annual report entry for Jennifer Jo Thompson, University of Georgia.",
    ]);
  }

  // 8. Stakeholder and workforce reach
  {
    const slide = deck.slides.add();
    header(slide, 8, "Stakeholder Reach", "Extension and education are building early visibility");
    await addHeroImage(slide, heroBytes, { left: 72, top: 132, width: 344, height: 438 }, {
      borderRadius: "rounded-md",
      alt: "Cotton field visual",
    });
    shape(slide, { left: 72, top: 432, width: 344, height: 138 }, {
      fill: C.deep,
      line: { style: "solid", fill: C.deep, width: 0 },
    });
    text(slide, "Counts are reported contacts and trainees, not unique people. They show early reach before Objective 5's larger Years 4-5 ramp.", {
      left: 108,
      top: 452,
      width: 270,
      height: 84,
    }, { fontSize: 18, bold: true, color: C.cream });
    stat(slide, 472, 150, "3,560+", "Year 1 contacts", "Reported conferences, grower meetings, workshops, podcasts, and field programs.", { width: 300 });
    stat(slide, 818, 150, "1,500+", "Year 2 contacts", "Reported event and summary counts; direct contacts still exceed 1,000.", { width: 300, valueColor: C.gold });
    stat(slide, 472, 390, "7+", "Students and interns", "PVAMU/TAMUK interns, TTU undergraduates, graduate students, and postdoctoral trainees.", { width: 300, valueColor: C.sky });
    shape(slide, { left: 818, top: 390, width: 300, height: 198 }, {
      fill: C.paleGreen,
      shadow: "shadow-sm",
    });
    text(slide, "Next evaluator question", { left: 846, top: 418, width: 244, height: 56 }, {
      fontSize: 21,
      bold: true,
      color: C.green,
    });
    text(slide, "Which outreach indicators should show knowledge gain, practice readiness, and stakeholder value by Year 5?", {
      left: 846,
      top: 486,
      width: 236,
      height: 86,
    }, { fontSize: 18, color: C.ink });
    notes(slide, [
      "Year 1 outreach lower bound calculated from outreach table in SAS Cotton Annual Report 2024-25.",
      "Year 2 reported contacts summarized from dissemination section in SAS_Annual Report_2025-2026; count excludes a future field day reported after the planned evaluation meeting.",
      "Training examples from Year 2 annual report Objective 6 section and Peter Dotray entry.",
      "Cotton field image generated with OpenAI imagegen and embedded from workspace asset .codex-tmp/sas_eval_deck/assets/cotton-hero-bg.png.",
    ]);
  }

  // 9. Evaluator questions
  {
    const slide = deck.slides.add();
    header(slide, 9, "Evaluator Discussion", "The next review should strengthen evidence flow across objectives");
    shape(slide, { left: 76, top: 144, width: 314, height: 418 }, {
      fill: C.deep,
      line: { style: "solid", fill: C.deep, width: 0 },
      shadow: "shadow-sm",
    });
    text(slide, "Where feedback is most valuable", { left: 110, top: 190, width: 238, height: 80 }, {
      fontSize: 30,
      bold: true,
      color: C.cream,
      typeface: "Aptos Display",
    });
    text(slide, "The project has activity and early evidence. The need now is sharper integration, outcome evidence, and reporting discipline.", {
      left: 112,
      top: 332,
      width: 230,
      height: 118,
    }, { fontSize: 18, color: "#E7EFE2" });
    const qs = [
      ["Integration", "Which objectives are still too independent, and where should data, economics, adoption, and extension be linked?"],
      ["Metrics", "What should be tracked quarterly to show outputs, short-term outcomes, and adoption readiness?"],
      ["Data flow", "Where are protocols, metadata, sample transfers, or model inputs creating quality risk?"],
      ["Stakeholders", "Which producer, extension, industry, or supply-chain groups should be engaged more deeply?"],
      ["Reporting", "What evidence will make NIFA annual reports and the final impact story more credible?"],
    ];
    qs.forEach((q, i) => {
      const y = 146 + i * 84;
      shape(slide, { left: 440, top: y, width: 722, height: 60 }, {
        fill: i % 2 === 0 ? C.panel : "#FBF8F0",
        shadow: "shadow-sm",
      });
      text(slide, q[0], { left: 466, top: y + 17, width: 150, height: 24 }, {
        fontSize: 19,
        bold: true,
        color: C.gold,
      });
      text(slide, q[1], { left: 635, top: y + 12, width: 472, height: 36 }, {
        fontSize: 15,
        color: C.ink,
      });
    });
    notes(slide, [
      "Challenge themes from Year 1 and Year 2 annual report sections: hiring, protocol clarity, soil sampling timing, weather/grower access, data flow, and AI/ML student recruitment.",
      "Evaluation questions adapted from user-provided planning note.",
    ]);
  }

  // 10. Year 3-5 plan
  {
    const slide = deck.slides.add();
    header(slide, 10, "Year 3-5 Evaluation Rhythm", "Manage the next phase around integration and impact evidence");
    const milestones = [
      ["Year 3", "Dashboard", "Quarterly status, outputs, risks, and stakeholder contacts."],
      ["Year 3-4", "Data QA", "Harmonize soil, field, microbiome, AI/ML, economics, and adoption datasets."],
      ["Year 4", "Evaluator memo", "Strengths, gaps, course corrections, and priority metrics."],
      ["Year 4-5", "Impact link", "Connect agronomic evidence with economics, adoption, and extension."],
      ["Year 5", "Final package", "Outcomes, adoption readiness, stakeholder value, and NIFA story."],
    ];
    milestones.forEach((m, i) => {
      const left = 72 + i * 220;
      shape(slide, { left, top: 158, width: 196, height: 322 }, {
        fill: i === 0 || i === 4 ? C.paleGreen : C.panel,
        shadow: "shadow-sm",
      });
      text(slide, m[0], { left: left + 22, top: 190, width: 130, height: 26 }, {
        fontSize: 18,
        bold: true,
        color: C.gold,
      });
      text(slide, m[1], { left: left + 22, top: 242, width: 150, height: 70 }, {
        fontSize: 24,
        bold: true,
        color: C.ink,
      });
      text(slide, m[2], { left: left + 22, top: 328, width: 150, height: 116 }, {
        fontSize: 15,
        color: C.muted,
      });
    });
    shape(slide, { left: 76, top: 542, width: 1090, height: 78 }, {
      fill: C.deep,
      line: { style: "solid", fill: C.deep, width: 0 },
      shadow: "shadow-sm",
    });
    text(slide, "Meeting ask: confirm evaluation cadence, dashboard format, core indicators, and Year 3 course corrections.", {
      left: 112,
      top: 564,
      width: 1010,
      height: 44,
    }, { fontSize: 19, bold: true, color: C.cream });
    notes(slide, [
      "Next-period plans from Year 2 annual report.",
      "Evaluation cadence, annual evaluator memo, and dashboard suggestions adapted from user-provided planning note.",
      "NIFA SAS page emphasizes systems-oriented CAP collaboration and stakeholder input: https://www.nifa.usda.gov/grants/programs/agriculture-food-research-initiative/afri-strengthening-agricultural-systems",
    ]);
  }

  return deck;
}

async function writeBlob(filePath, blob) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  const renderedDir = path.join(TMP_DIR, "premium-rendered");
  await fs.mkdir(renderedDir, { recursive: true });
  const deck = await buildDeck();

  for (const [index, slide] of deck.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(path.join(renderedDir, `${stem}.png`), await deck.export({ slide, format: "png", scale: 1 }));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(renderedDir, `${stem}.layout.json`), await layout.text(), "utf8");
  }

  await writeBlob(path.join(TMP_DIR, "premium-montage.webp"), await deck.export({ format: "webp", montage: true, scale: 1 }));
  const pptx = await PresentationFile.exportPptx(deck);
  await pptx.save(FINAL_PPTX);
  console.log(FINAL_PPTX);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
