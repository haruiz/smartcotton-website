import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const TMP_DIR = "C:\\Users\\deepak.loura\\workspace\\smartcotton-website\\.codex-tmp\\sas_eval_deck";
const FINAL_PPTX = "C:\\Users\\deepak.loura\\workspace\\smartcotton-website\\SAS_Cotton_Project_Evaluation_Update_2026.pptx";

const W = 1280;
const H = 720;
const C = {
  ink: "#000000",
  gray: "#F2F2F2",
  gray2: "#EDEDED",
  rule: "#B8BCC4",
  accent: "#6DCBF4",
  accentStrong: "#3D8DFF",
  white: "#FFFFFF",
};

function textbox(slide, text, position, options = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name: options.name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontSize: options.fontSize ?? 24,
    bold: options.bold ?? false,
    color: options.color ?? C.ink,
    typeface: "Helvetica Neue",
    alignment: options.alignment ?? "left",
    verticalAlignment: options.verticalAlignment ?? "top",
  };
  return shape;
}

function panel(slide, position, options = {}) {
  const geometry = options.geometry ?? "roundRect";
  const config = {
    geometry: options.geometry ?? "roundRect",
    name: options.name,
    position,
    fill: options.fill ?? C.gray,
    line: options.line ?? { style: "solid", fill: "none", width: 0 },
  };
  if (["rect", "textbox", "roundRect"].includes(geometry)) {
    config.borderRadius = options.borderRadius ?? "rounded-sm";
  }
  return slide.shapes.add(config);
}

function rule(slide, left, top, width, options = {}) {
  return slide.shapes.add({
    geometry: "straightConnector1",
    name: options.name,
    position: { left, top, width, height: 0 },
    fill: "none",
    line: { style: "solid", fill: options.fill ?? C.rule, width: options.width ?? 1 },
  });
}

function footer(slide, slideNo) {
  textbox(slide, String(slideNo).padStart(2, "0"), {
    left: 1184,
    top: 659,
    width: 54,
    height: 25,
  }, {
    name: `footer-${slideNo}`,
    fontSize: 13,
    alignment: "right",
    verticalAlignment: "bottom",
  });
}

function title(slide, text, slideNo) {
  textbox(slide, text, {
    left: 41,
    top: 36,
    width: 1197,
    height: 110,
  }, {
    name: `title-${slideNo}`,
    fontSize: 38,
    bold: false,
  });
  footer(slide, slideNo);
}

function notes(slide, sourceLines) {
  slide.speakerNotes.textFrame.setText([
    "[Sources]",
    ...sourceLines,
  ]);
  slide.speakerNotes.setVisible(true);
}

function addMetricCard(slide, left, stat, label, note) {
  panel(slide, { left, top: 318, width: 374, height: 312 });
  textbox(slide, stat, { left: left + 32, top: 356, width: 310, height: 142 }, {
    fontSize: 48,
    bold: false,
    verticalAlignment: "bottom",
  });
  textbox(slide, label, { left: left + 32, top: 514, width: 310, height: 38 }, {
    fontSize: 23,
    bold: true,
  });
  textbox(slide, note, { left: left + 32, top: 557, width: 310, height: 60 }, {
    fontSize: 17,
    color: "#2F2F2F",
  });
}

function addTwoLine(slide, left, top, label, body, width = 520) {
  textbox(slide, label, { left, top, width, height: 36 }, { fontSize: 25, bold: true });
  textbox(slide, body, { left, top: top + 39, width, height: 70 }, { fontSize: 18, color: "#222222" });
}

function makeDeck() {
  const deck = Presentation.create({ slideSize: { width: W, height: H } });

  // 1. Title
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    textbox(slide, "SAS Cotton Project Evaluation Team Meeting", {
      left: 41,
      top: 41,
      width: 720,
      height: 60,
    }, { fontSize: 28 });
    textbox(slide, "Two-year progress update", {
      left: 41,
      top: 170,
      width: 1030,
      height: 250,
    }, { fontSize: 76, verticalAlignment: "bottom" });
    textbox(slide, "Climate-Smart Cotton | April 1, 2024-March 31, 2029\nAward 2024-68012-41750 | Meeting week of August 17, 2026", {
      left: 41,
      top: 500,
      width: 820,
      height: 110,
    }, { fontSize: 28 });
    panel(slide, { left: 1005, top: 505, width: 235, height: 104 }, { fill: "#EAF5FB", line: { style: "solid", fill: C.rule, width: 1 } });
    textbox(slide, "Research\nEducation\nExtension", { left: 1026, top: 523, width: 190, height: 70 }, { fontSize: 21, bold: true });
    notes(slide, [
      "Project title, period, award number, and long-term goal from SAS Cotton Annual Report 2024-25 and SAS_Annual Report_2025-2026.",
      "Meeting timing and purpose from user-provided evaluation-team planning note.",
    ]);
  }

  // 2. Agenda
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    title(slide, "Today's purpose is to convert two years of progress into evaluator guidance", 2);
    const agenda = [
      ["01", "Confirm SAS integration expectations"],
      ["02", "Review progress across the six objectives"],
      ["03", "Check logic-model evidence and reporting metrics"],
      ["04", "Discuss stakeholder engagement and adoption readiness"],
      ["05", "Identify implementation, data-flow, and coordination gaps"],
      ["06", "Agree on Year 3-5 evaluation priorities and follow-up"],
    ];
    const table = slide.tables.add({
      rows: agenda.length,
      columns: 2,
      left: 41,
      top: 218,
      width: 1197,
      height: 411,
      columnWidths: [92, 1105],
      values: agenda,
    });
    table.borders.assign({ style: "solid", fill: C.rule, width: 1 });
    notes(slide, [
      "Meeting agenda and purpose adapted from user-provided evaluation-team planning note.",
      "NIFA SAS FAQ says A9201 applications must be fully integrated projects addressing research, education, and extension: https://www.nifa.usda.gov/grants/programs/agriculture-food-research-initiative/afri-strengthening-agricultural-systems-rfa-frequently-asked-questions",
    ]);
  }

  // 3. SAS evaluation lens
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    title(slide, "The evaluation lens should match NIFA's integrated SAS model", 3);
    textbox(slide, "NIFA positions SAS CAP projects as large, systems-oriented efforts where research, education, and Extension/outreach are coordinated around farmer-relevant problems.", {
      left: 41,
      top: 146,
      width: 1040,
      height: 82,
    }, { fontSize: 24 });
    addTwoLine(slide, 41, 270, "Integration quality", "Are research, education, extension, economics, social science, and AI/ML feeding each other rather than running in parallel?");
    addTwoLine(slide, 657, 270, "Logic-model evidence", "Are activities producing outputs, short-term outcomes, intermediate outcomes, and a credible path to Year 5 impact?");
    addTwoLine(slide, 41, 443, "Stakeholder value", "Are producer, extension, industry, and supply-chain partners engaged strongly enough to support adoption and reporting?");
    addTwoLine(slide, 657, 443, "Course corrections", "Which implementation gaps, indicators, and governance routines should be adjusted now for Years 3-5?");
    rule(slide, 41, 244, 1197);
    notes(slide, [
      "NIFA SAS program page describes SAS as fully integrated research, education, and extension projects and CAP grants as systems-oriented collaborations: https://www.nifa.usda.gov/grants/programs/agriculture-food-research-initiative/afri-strengthening-agricultural-systems",
      "FY26 SAS NOFO states SAS funds fully integrated extension, education, and research projects through CAP grants: https://www.nifa.usda.gov/sites/default/files/2026-01/FY26-AFRI-SAS-NOFO-P_0.pdf",
      "Evaluation themes adapted from user-provided planning note.",
    ]);
  }

  // 4. Project structure
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    title(slide, "The six objectives form one Cotton Belt system", 4);
    textbox(slide, "Long-term goal", { left: 41, top: 232, width: 360, height: 34 }, { fontSize: 25, bold: true });
    textbox(slide, "Apply precision regenerative practices to improve carbon sequestration, greenhouse-gas mitigation, pest, nutrient, and water management; address labor challenges; create market opportunities; and sustain climate-smart cotton supply.", {
      left: 41,
      top: 274,
      width: 380,
      height: 280,
    }, { fontSize: 20 });
    const rows = [
      ["Obj. 1", "Regenerative production, soil carbon baselines, soil health, simulation"],
      ["Obj. 2", "Precision AI/ML and smart technologies for resource conservation"],
      ["Obj. 3", "Economic feasibility and climate-smart market opportunities"],
      ["Obj. 4", "Producer adoption, farmer experience, and social science evidence"],
      ["Obj. 5", "Extension and outreach to support practice adoption"],
      ["Obj. 6", "Education, training, underserved-community engagement, workforce"],
    ];
    const table = slide.tables.add({
      rows: rows.length,
      columns: 2,
      left: 505,
      top: 205,
      width: 734,
      height: 424,
      columnWidths: [110, 624],
      values: rows,
    });
    table.borders.assign({ style: "solid", fill: C.rule, width: 1 });
    notes(slide, [
      "Long-term goal and six objectives from both annual reports.",
      "Project period and award metadata from annual reports.",
    ]);
  }

  // 5. Two-year trajectory
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    title(slide, "Year 2 shows a shift from startup activity to evidence generation", 5);
    rule(slide, 40, 354, 1200, { fill: C.ink, width: 1 });
    const xs = [41, 453, 859];
    const labels = ["2024-25", "2025-26", "2026-27"];
    const heads = ["Launch and alignment", "Data generation and engagement", "Integration and evaluation"];
    const bodies = [
      "Students hired, protocols clarified, sites identified, seed increases and early field trials started, and outreach began across Texas, Mississippi, New Mexico, Alabama, Georgia, and North Carolina.",
      "Soil sampling, field trials, microbiome datasets, AI/ML data planning, economics, adoption research, and outreach outputs expanded across institutions.",
      "Priority is to harmonize data streams, connect research with adoption and economics, and convert outputs into measurable outcomes for NIFA and stakeholders.",
    ];
    xs.forEach((x, i) => {
      panel(slide, { left: x - 6, top: 348, width: 12, height: 12 }, { geometry: "ellipse", fill: C.ink });
      textbox(slide, labels[i], { left: x, top: 296, width: 170, height: 30 }, { fontSize: 22, bold: true });
      textbox(slide, heads[i], { left: x, top: 402, width: 335, height: 38 }, { fontSize: 25, bold: true });
      textbox(slide, bodies[i], { left: x, top: 444, width: 335, height: 150 }, { fontSize: 18, color: "#222222" });
    });
    notes(slide, [
      "Year 1 startup activities and challenges from SAS Cotton Annual Report 2024-25.",
      "Year 2 progress and next reporting period plans from SAS_Annual Report_2025-2026.",
      "Year 3 framing synthesized from reported next-period plans and user-provided evaluation questions.",
    ]);
  }

  // 6. Research dashboard
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    title(slide, "Research workstreams now have tangible datasets to integrate", 6);
    textbox(slide, "Objective-wise progress is strongest where field protocols, sample flows, and data ownership are already clear.", {
      left: 42,
      top: 116,
      width: 1120,
      height: 72,
    }, { fontSize: 22 });
    const rows = [
      ["Evidence stream", "Year 2 update", "Evaluator discussion"],
      ["Soil carbon and soil health", "Samples reported from TX High Plains farms, 20 GA fields, all 30 MS sites, and initial NC fields.", "How should baselines and site metadata be standardized?"],
      ["Regenerative systems", "Cover crop, bed, living mulch, tillage, rotation, and weed-suppression trials active across multiple states.", "Which indicators best show climate-smart performance?"],
      ["Microbiome", "Hyphal baiting, rhizosphere, leaf, 16S, and shotgun sequencing workflows moved into analysis.", "How should microbiome results translate for stakeholders?"],
      ["AI/ML and modeling", "Multi-source irrigation dataset plan developed; Holos DSS calibrated and early simulations run.", "What data-quality rules are needed before model building?"],
      ["Economics and adoption", "Meta-analysis, risk/insurance work, focus groups, survey instrument, and participatory workshops underway.", "How should field evidence feed adoption and market claims?"],
    ];
    const table = slide.tables.add({
      rows: rows.length,
      columns: 3,
      left: 41,
      top: 214,
      width: 1197,
      height: 416,
      columnWidths: [260, 535, 402],
      values: rows,
    });
    table.borders.assign({ style: "solid", fill: C.rule, width: 1 });
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
    slide.background.fill = C.white;
    title(slide, "Economics and adoption work can turn agronomic results into decision evidence", 7);
    addTwoLine(slide, 41, 214, "Economic feasibility", "Completed meta-analysis of precision application and soil-health practices; cotton findings emphasized guidance systems and variable-rate planters for yield and profit improvements.");
    addTwoLine(slide, 657, 214, "Risk and insurance", "Monte Carlo analysis for Texas High Plains dryland cotton indicated soil-health improvements can raise yield and reduce crop-failure risk, with yield benefits outweighing higher insurance costs.");
    addTwoLine(slide, 41, 421, "Producer adoption", "Three in-person South Georgia focus groups with nine cotton farmers examined cover-crop adoption complexity, barriers, and sustaining conditions.");
    addTwoLine(slide, 657, 421, "Survey and workshops", "A field survey instrument and participatory soil-health workshops create a path for cross-state adoption evidence in Years 3-5.");
    notes(slide, [
      "Economic feasibility and risk/insurance claims from Year 2 annual report entry for Darren Hudson, Texas Tech University.",
      "Focus groups, survey instrument, and participatory workshop details from Year 2 annual report entry for Jennifer Jo Thompson, University of Georgia.",
    ]);
  }

  // 8. Extension and education
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    title(slide, "Extension and education are creating early stakeholder reach", 8);
    textbox(slide, "Counts below are reported contacts and trainees, not unique individuals. They show early reach before Objective 5's larger Years 4-5 ramp.", {
      left: 41,
      top: 126,
      width: 1120,
      height: 76,
    }, { fontSize: 21 });
    addMetricCard(slide, 41, "3,560+", "Year 1 outreach contacts", "Lower-bound total from reported conferences, grower meetings, workshops, podcasts, and field programs.");
    addMetricCard(slide, 453, "1,500+", "Year 2 reported contacts", "Event-level and summary counts with known overlap risk; direct contacts still exceed 1,000.");
    addMetricCard(slide, 864, "7+", "Students and interns", "Includes PVAMU/TAMUK interns, TTU undergraduates, graduate students, and postdoctoral trainees.");
    notes(slide, [
      "Year 1 outreach lower bound calculated from outreach table in SAS Cotton Annual Report 2024-25.",
      "Year 2 reported contacts summarized from dissemination section in SAS_Annual Report_2025-2026; count excludes a September 2026 field day because it is after the August 2026 meeting and current date July 31, 2026.",
      "Training examples from Year 2 annual report Objective 6 section and Peter Dotray entry.",
    ]);
  }

  // 9. Gaps and questions
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    title(slide, "The main evaluation need is stronger evidence flow across objectives", 9);
    textbox(slide, "Reported challenges are typical for a multi-state CAP, but they should now be managed through a shared dashboard and evaluator feedback loop.", {
      left: 41,
      top: 126,
      width: 1120,
      height: 70,
    }, { fontSize: 22 });
    const issues = [
      ["Integration", "Which objectives are still too independent, and where should data, field protocols, economics, adoption, and extension be linked?"],
      ["Metrics", "What indicators should be tracked quarterly to show outputs, short-term outcomes, and adoption readiness?"],
      ["Data flow", "Where are protocols, metadata, or sample transfers creating delays or quality risks?"],
      ["Stakeholders", "Which producer, industry, extension, or supply-chain groups should be more deeply engaged before Year 5?"],
      ["Reporting", "What evidence will make the NIFA annual reports and final impact story more credible?"],
    ];
    issues.forEach((row, i) => {
      const y = 240 + i * 77;
      panel(slide, { left: 60, top: y + 9, width: 18, height: 18 }, { geometry: "ellipse", fill: i < 2 ? C.accentStrong : C.accent });
      textbox(slide, row[0], { left: 106, top: y, width: 190, height: 34 }, { fontSize: 24, bold: true });
      textbox(slide, row[1], { left: 300, top: y + 1, width: 885, height: 55 }, { fontSize: 19, color: "#222222" });
    });
    notes(slide, [
      "Challenge themes from Year 1 and Year 2 annual report sections: hiring, protocol clarity, soil sampling timing, weather/grower access, data flow, and AI/ML student recruitment.",
      "Evaluation questions adapted from user-provided planning note.",
    ]);
  }

  // 10. Next steps
  {
    const slide = deck.slides.add();
    slide.background.fill = C.white;
    title(slide, "Years 3-5 should focus on integration and impact evidence", 10);
    const milestones = ["Year 3", "Year 3-4", "Year 4", "Year 4-5", "Year 5"];
    const header = slide.tables.add({
      rows: 1,
      columns: 5,
      left: 41,
      top: 145,
      width: 1197,
      height: 484,
      columnWidths: [239, 239, 239, 239, 241],
      values: [milestones],
    });
    header.borders.assign({ style: "solid", fill: C.rule, width: 1 });
    const bars = [
      [53, 208, 440, "Quarterly dashboard: objective status, outputs, risks, stakeholder contacts"],
      [296, 284, 675, "Complete, harmonize, and QA soil, field, microbiome, AI/ML, and adoption datasets"],
      [296, 359, 923, "Link agronomic evidence with economics, adoption, and extension recommendations"],
      [496, 432, 479, "Annual evaluator memo: strengths, gaps, corrections, and priority metrics"],
      [790, 500, 430, "Final impact package: outcomes, adoption readiness, stakeholder value, NIFA reporting story"],
      [61, 575, 1158, "Meeting ask: confirm cadence, indicators, dashboard format, and Year 3 course corrections"],
    ];
    bars.forEach(([left, top, width, text], index) => {
      panel(slide, { left, top, width, height: 54 }, { fill: index === bars.length - 1 ? "#EAF5FB" : C.gray });
      textbox(slide, text, { left: left + 22, top: top + 12, width: width - 40, height: 34 }, { fontSize: 22, verticalAlignment: "middle" });
    });
    notes(slide, [
      "Next-period plans from Year 2 annual report.",
      "Evaluation cadence, annual evaluator memo, and dashboard suggestions adapted from user-provided planning note.",
      "NIFA SAS page emphasizes systems-oriented CAP collaboration and stakeholder input: https://www.nifa.usda.gov/grants/programs/agriculture-food-research-initiative/afri-strengthening-agricultural-systems",
    ]);
  }

  return deck;
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(path.join(TMP_DIR, "rendered"), { recursive: true });
  const deck = makeDeck();

  for (const [index, slide] of deck.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(path.join(TMP_DIR, "rendered", `${stem}.png`), await deck.export({ slide, format: "png", scale: 1 }));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(TMP_DIR, "rendered", `${stem}.layout.json`), await layout.text(), "utf8");
  }

  await writeBlob(path.join(TMP_DIR, "deck-montage.webp"), await deck.export({ format: "webp", montage: true, scale: 1 }));
  const pptx = await PresentationFile.exportPptx(deck);
  await pptx.save(FINAL_PPTX);
  console.log(FINAL_PPTX);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
