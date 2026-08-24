export type PublicationStatus = "Published" | "Submitted" | "In preparation" | "Presentation" | "Proceeding" | "Abstract" | "Seminar/Webinar";

export type PublicationType =
  | "Peer-reviewed publication"
  | "Submitted manuscript"
  | "Manuscript in preparation"
  | "Conference abstract"
  | "Conference proceeding"
  | "Oral presentation"
  | "Poster presentation"
  | "Seminar/Webinar";

export type Publication = {
  id: string;
  year: string;
  reportingPeriod: "2024-2025" | "2025-2026";
  type: PublicationType;
  status: PublicationStatus;
  citation: string;
  link?: string;
  institution?: string;
};

const publicationItems = [
  {
    id: "nagy-hyphosphere-tppc-2024",
    year: "2024",
    reportingPeriod: "2024-2025",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Elek Nagy, Gayan Abeysinghe, Sanjay Antony-Babu. Hunting the Hyphosphere: A method for baiting hyphal-dwelling bacteria from soil. 36th Annual Texas Plant Protection Conference, College Station, TX."
  },
  {
    id: "nagy-hyphosphere-method-in-prep",
    year: "2025",
    reportingPeriod: "2024-2025",
    type: "Manuscript in preparation",
    status: "In preparation",
    citation:
      "Elek Nagy, Nithya Subramanian, Muthu Bagavathiannan, Lindsey Perkin, Gayan Abeysinghe and Sanjay Antony-Babu. A novel method to bait the hyphosphere bacteria in plant-associated soil. Manuscript in preparation; target journal: PlosOne."
  },
  {
    id: "reyes-cover-crops-beltwide-2025",
    year: "2025",
    reportingPeriod: "2024-2025",
    type: "Conference abstract",
    status: "Abstract",
    citation:
      "Reyes A, Singh J, Jhonson A, Gamble A, Feng Y, Balckom K, Sanz-Saez A. Impact of Cover Crops on Cotton: Evaluating Root Characteristics and Photosynthetic Traits in Southern and Northern Alabama. Beltwide Cotton Conference, New Orleans, LA, January 14-16, 2025."
  },
  {
    id: "sapkota-buffer-strips-submission-ready",
    year: "2025",
    reportingPeriod: "2024-2025",
    type: "Submitted manuscript",
    status: "Submitted",
    citation:
      "Sapkota, S., Bista, P., Angadi, S. and Ghimire, R. Reducing greenhouse gas emissions in water-limited agroecosystems by integrating grass buffer strips in irrigation circles. Journal of Environmental Management. Submission ready, 03/06/2025."
  },
  {
    id: "singh-cotton-nutrient-uptake-2024",
    year: "2024",
    reportingPeriod: "2024-2025",
    type: "Peer-reviewed publication",
    status: "Published",
    citation:
      "Singh J, Gamble AV, Brown S, Campbell BT, Jenkins J, Koebernick J, Bartley PC, Sanz-Saez A. Exploring 65 Years of Progress in Cotton Nutrient Uptake, Efficiency and Partitioning in the USA. Field Crops Research, 305, 2024.",
    link: "https://doi.org/10.1016/j.fcr.2023.109189"
  },
  {
    id: "singh-cover-crops-alabama-southern-asa-2024",
    year: "2024",
    reportingPeriod: "2024-2025",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Singh J, Gamble A, Brown S, Koebernick Bartley P, Sanz-Saez A. Exploring Cover Crops in Alabama: Assessing Soil Health, Yield, and Root Characteristics of Following Cash Crop. Southern ASA Meeting, February 3-5, 2024, Atlanta, Georgia."
  },
  {
    id: "ramachandran-root-morphology-tppa-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Conference abstract",
    status: "Abstract",
    citation:
      "Ramachandran, R., Mowrer, J. E., Bagavathiannan, M., Rajan, N., & Isakeit, T. 120 Years of Cotton Cultivar Development: Impacts on Root Morphology and Potassium Response [Abstract]. Texas Plant Protection Association 2025, Bryan, TX."
  },
  {
    id: "ramachandran-root-morphology-canvas-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Conference abstract",
    status: "Abstract",
    citation:
      "Ramachandran, R., Mowrer, J. E., Bagavathiannan, M., Rajan, N., & Isakeit, T. 120 Years of Cotton Cultivar Development: Impacts on Root Morphology and Potassium Response [Abstract]. CANVAS 2025, Salt Lake City, UT.",
    link: "https://scisoc.confex.com/scisoc/2025am/meetingapp.cgi/Paper/166800"
  },
  {
    id: "ramachandran-wet-aggregate-canvas-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Conference abstract",
    status: "Abstract",
    citation:
      "Ramachandran, R., Mowrer, J. E., Bagavathiannan, M., & Rajan, N. Advancing Wet Aggregate Stability Measurement: A Comparison of Conventional and Modern Field Techniques [Abstract]. CANVAS 2025, Salt Lake City, UT.",
    link: "https://scisoc.confex.com/scisoc/2025am/meetingapp.cgi/Paper/166789"
  },
  {
    id: "ghimire-soil-health-webinar-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Seminar/Webinar",
    status: "Seminar/Webinar",
    citation:
      "Ghimire, R., S. Sapkota, J.P. Frene, S.M.U. Salehin, and S.V. Angadi. Soil health and organic carbon responses to the circular buffer strips of perennial grasses. Royal College UK, April 9, 2025 (Webinar)."
  },
  {
    id: "ghimire-circular-buffer-colorado-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Seminar/Webinar",
    status: "Seminar/Webinar",
    citation:
      "Ghimire, R. and S.V. Angadi. Circular buffer strips of native perennial grasses: an innovative way to add multiple benefits to center pivot irrigated agriculture. Colorado State University, Department of Soil and Crop Science Special Seminar, April 2, 2025, Fort Collins, CO."
  },
  {
    id: "ghimire-eastern-colorado-presentations-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Ghimire R. and S.V. Angadi. Soil health and organic carbon responses to the circular buffer strips of perennial grasses. Multiple presentations to farmers in eastern Colorado, March 31-April 1, 2025."
  },
  {
    id: "mollaee-allelopathic-cotton-lines-swss-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Conference proceeding",
    status: "Proceeding",
    citation:
      "Mollaee M, Coello SG, Sanz-Saez A, Bagavathiannan M, Maity A. Field Evaluation for Allelopathic Potential of 120 Cotton Lines Against Southern Weeds for Sustainable Weed Management Control. Proceedings of the Southern Weed Science Society Annual Meeting, Nashville, TN, March 8-10, 2026."
  },
  {
    id: "nimakoh-precision-management-saea-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Nimakoh, M., D. Hudson, and M. Bagavathiannan. An Analysis of Precision Management Technologies and Agricultural Productivity in the U.S. Southern Agricultural Economics Association Annual Meeting, Louisville, KY, 2026."
  },
  {
    id: "taylor-insurance-saea-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Taylor, C., D. Hudson, Y. Che, and C. Wang. Potential Insurance Implications of Climate Smart Production Practices. Southern Agricultural Economics Association Annual Meeting, Louisville, KY, 2026."
  },
  {
    id: "nimakoh-precision-management-beltwide-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Nimakoh, M., D. Hudson, and M. Bagavathiannan. An Analysis of Precision Management Technologies and Agricultural Productivity in the U.S. Beltwide Cotton Conferences Economics and Marketing Conference, San Antonio, TX, 2026."
  },
  {
    id: "taylor-insurance-beltwide-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Taylor, C., D. Hudson, Y. Che, and C. Wang. Potential Insurance Implications of Climate Smart Production Practices. Beltwide Cotton Conferences Economics and Marketing Conference, San Antonio, TX, 2026."
  },
  {
    id: "campos-living-mulches-wssa-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Priscila Campos, Himani Ahlawat, Kamana Pilania, Sydney Buffington, Muthu Bagavathiannan, Gaylon Morgan, Nicholas Basinger. How Cool Are Living Mulches? Cool-Season Perennial Grasses for Weed Management in Cotton. Weed Science Society of America, Raleigh, NC, 2026."
  },
  {
    id: "campos-living-mulches-sccc-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Priscila Campos, Himani Ahlawat, Kamana Pilania, Sydney Buffington, Muthu Bagavathiannan, Gaylon Morgan, Nicholas Basinger. How Cool Are Living Mulches? Cool-Season Perennial Grasses for Weed Management in Cotton. Southern Cover Crop Council Conference, Gainesville, FL, 2026."
  },
  {
    id: "campos-perennial-grasses-swss-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Priscila Campos, Himani Ahlawat, Kamana Pilania, Sydney Buffington, Muthu Bagavathiannan, Gaylon Morgan, Nicholas Basinger. Evaluating Perennial Cool-Season Grasses for Weed Suppression in Cotton Production. Southern Weed Science Society, Nashville, TN, 2026."
  },
  {
    id: "abeysinghe-organic-cotton-practices-beltwide-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Abeysinghe G, Wagner T, Santos J, Parunandi S, Nagy E, Mohsin F, Bagavathiannan M, Antony-Babu S. Organic cotton practices reshape hyphosphere microbiota and modulate the microbial response to Fusarium oxysporum f. sp. vasinfectum Race 4. Disease Council, Beltwide Cotton Conference, San Antonio, TX, 2026."
  },
  {
    id: "parunandi-ecosystem-resilience-beltwide-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Parunandi, S.S., Abeysinghe, G., Bagavathiannan, M., Rajan, N., and Antony-Babu. Ecosystem Resilience and Microbial Diversity in Cotton Systems Under Organic, Transitional, and Conventional Management. Beltwide Cotton Conference, San Antonio, TX, January 7-9, 2026. 3rd Prize, Student Competition."
  },
  {
    id: "wagner-fov4-pathobiome-poster-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Poster presentation",
    status: "Presentation",
    citation:
      "Wagner TA, Abeysinghe G, Santos J, Antony-Babu S. Functional dissection and experimental reassembly of the hyphosphere FOV4 pathobiome. Poster presented at the Beltwide Cotton Conference, San Antonio, TX, January 7-9, 2026."
  },
  {
    id: "santos-hyphal-baiting-besc-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Poster presentation",
    status: "Presentation",
    citation:
      "Santos J, Abeysinghe G, Wagner T, Parunandi S, Bagavathiannan M, Antony-Babu S. A hyphal-baiting method for enriching hyphosphere bacteria associated with Fusarium oxysporum f. sp. vasinfectum Race 4. BESC Symposium, Department of Plant Pathology and Microbiology, Texas A&M University, College Station, TX, 2025. First place poster award for Josh Santos."
  },
  {
    id: "abeysinghe-postdoc-symposium-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Abeysinghe G, Antony-Babu S. Hyphosphere recruitment dynamics of Fusarium oxysporum f. sp. vasinfectum Race 4 in cotton soils. Flash talk, 9th Annual Texas A&M Postdoctoral Research Symposium, College Station, TX, 2025."
  },
  {
    id: "abeysinghe-hyphosphere-microcosm-in-prep-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Manuscript in preparation",
    status: "In preparation",
    citation:
      "Gayan Abeysinghe, Elek Nagy, Tanya Wagner, Shravan Sharma Parunandi, Joshua Santos, Muthu Bagavathiannan, Sanjay Antony-Babu. Reconstructing the hyphosphere using a hyphal release-capture soil microcosm. In preparation, 2026."
  },
  {
    id: "abeysinghe-hyphosphere-pathobiome-submitted-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Submitted manuscript",
    status: "Submitted",
    citation:
      "Gayan Abeysinghe, Sanjay Antony-Babu. The Hyphosphere-Pathobiome: A New Paradigm in Soil-Borne Pathogenesis. Submitted to FEMS Microbiology Reviews, 2026."
  },
  {
    id: "parunandi-organic-management-microbiome-in-prep-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Manuscript in preparation",
    status: "In preparation",
    citation:
      "Parunandi, S.S., Abeysinghe, G., Bagavathiannan, M., Rajan, N. and Antony-Babu, S. Transition to organic management reshapes soil microbiome assembly, functional potential, and cultivable diversity. In preparation, 2026."
  },
  {
    id: "parunandi-soil-leaf-microbiome-in-prep-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Manuscript in preparation",
    status: "In preparation",
    citation:
      "Parunandi, S.S., Abeysinghe, G., Bagavathiannan, M., Rajan, N. and Antony-Babu, S. Organic transition alters soil-leaf microbiome connectivity in cotton agroecosystems. In preparation, 2026."
  },
  {
    id: "sanyal-desert-cotton-seminar-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Seminar/Webinar",
    status: "Seminar/Webinar",
    citation:
      "Sanyal, D., Mayo, K., Thodeti, P., Aswin, D., Stackpole, C., Fahlgren, K., Norton, R. Soil Management in the Irrigated Desert Cotton Production Systems. Cotton Production Seminar, Casa Grande, AZ, 2026."
  },
  {
    id: "sanyal-arizona-regenerative-cotton-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Seminar/Webinar",
    status: "Seminar/Webinar",
    citation:
      "Sanyal, D., Mayo, K., Thodeti, P., Aswin, D., Stackpole, C., Fahlgren, K., Norton, R. Updates from Regenerative Cotton Research in Arizona. Crop Production Seminar, Safford, AZ, 2026."
  },
  {
    id: "seigerman-king-cotton-aaa-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Seigerman, C. K. & Thompson, J. J. How King Cotton Continues to Haunt Georgia Cotton Farming. American Anthropological Association Annual Meeting, New Orleans, LA, November 2025."
  },
  {
    id: "seigerman-social-capital-in-prep",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Manuscript in preparation",
    status: "In preparation",
    citation:
      "Seigerman, C. K. & Thompson, J. J. How Researchers' Social Capital Affects Who Participates in On-Farm Research. In preparation for Agricultural and Human Values."
  },
  {
    id: "jackson-cereal-rye-weed-science-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Peer-reviewed publication",
    status: "Published",
    citation:
      "Jackson, A.W., Moore, V.M., Reberg-Horton, C., Mirsky, S.B., & Leon, R.G. Seed age changes the germination response of weed species to cereal rye (Secale cereale) allelopathy. Weed Science, 73(e9), 1-6, 2025."
  },
  {
    id: "goldsmith-uas-maize-yield-loss-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Peer-reviewed publication",
    status: "Published",
    citation:
      "Goldsmith, A., Austin, R., Cahoon, C.W., & Leon, R.G. Predicting maize yield loss with crop-weed leaf cover ratios determined with UAS imagery. Weed Science, 73(e22), 1-9, 2025."
  },
  {
    id: "oreja-crop-rotation-herbicide-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Peer-reviewed publication",
    status: "Published",
    citation:
      "Oreja, F.H., Mahoney, D.J., Jordan, D.L., Jennings, K.M., Vann, M., & Leon, R.G. Crop rotation and herbicide program effects on Palmer amaranth and common ragweed population growth rate. Crop, Forage, & Turfgrass Management 11, e70022, 2025."
  },
  {
    id: "leon-cereal-rye-cultivars-canvas-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Conference abstract",
    status: "Abstract",
    citation:
      "Leon, R.G., C. Perera, V. Moore, S.C. Reberg-Horton, S.B. Mirsky, L. Kissing Kucek. Cereal rye (Secale cereale) cultivars differ in allelopathic activity, inhibiting growth in unique ways depending on weed and crop species. CANVAS 2025, Salt Lake City, UT."
  },
  {
    id: "goldsmith-carinata-herbicide-programs-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Goldsmith, A., E. Almeida, A. Dobbs, R. Leon. Evaluation of Brassica carinata A. Braun crop safety to potential herbicide programs. Weed Science Society of America and Canadian Weed Science Society Annual Meeting, Vancouver, Canada, 2025."
  },
  {
    id: "goldsmith-cover-crop-biomass-spatial-analysis-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Goldsmith, A., A. Dobbs, R. Leon. Comparison of cover crop biomass predictions to summer annual weed escapes using spatial analysis techniques. Weed Science Society of America and Canadian Weed Science Society Annual Meeting, Vancouver, Canada, 2025."
  },
  {
    id: "kariyawasam-cover-crop-termination-canvas-2025",
    year: "2025",
    reportingPeriod: "2025-2026",
    type: "Conference abstract",
    status: "Abstract",
    citation:
      "Kariyawasam Hetti Gamage, L. R., Poudyal, C., Bagavathiannan, M., & Rajan, N. Evaluating cover crop termination strategies for sustainable cotton production in raised bed and flat planting systems [Abstract]. ASA-CSSA-SSSA International Annual Meeting (CANVAS 2025), Salt Lake City, UT."
  },
  {
    id: "gamage-raised-bed-beltwide-proceeding-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Conference proceeding",
    status: "Proceeding",
    citation:
      "Gamage, L. K. H., Poudyal, C., & Rajan, N. Assessing the impact of raised bed and non-raised bed planting systems with cover crops on cotton productivity in the Texas Blackland region [Proceeding Paper]. Beltwide Cotton Conferences, San Antonio, TX, 2026."
  },
  {
    id: "gamage-ndvi-nitrogen-beltwide-proceeding-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Conference proceeding",
    status: "Proceeding",
    citation:
      "Gamage, L. K. H., Poudyal, C., & Rajan, N. Assessing the relationship between UAV-derived NDVI and nitrogen use dynamics in cotton under variable cover crop and bed management systems [Proceeding Paper]. Beltwide Cotton Conferences, San Antonio, TX, 2026. Processing."
  },
  {
    id: "gamage-raised-bed-beltwide-oral-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Oral presentation",
    status: "Presentation",
    citation:
      "Gamage, L. K. H., Poudyal, C., & Rajan, N. Assessing the impact of raised bed and non-raised bed planting systems with cover crops on cotton productivity in the Texas Blackland region. Oral presentation, Beltwide Cotton Conferences, San Antonio, TX, 2026."
  },
  {
    id: "gamage-ndvi-nitrogen-beltwide-poster-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Poster presentation",
    status: "Presentation",
    citation:
      "Gamage, L. K. H., Poudyal, C., & Rajan, N. Assessing the relationship between UAV-derived NDVI and nitrogen use dynamics in cotton under variable cover crop and bed management systems. Poster presentation, Beltwide Cotton Conferences, San Antonio, TX, 2026."
  },
  {
    id: "singletary-cereal-rye-swss-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Conference proceeding",
    status: "Proceeding",
    citation:
      "Singletary, M.M., P.A. Dotray, J. Burke, W. Keeling, Y. Breaux, S. Jones, M.V. Bagavathiannan. Cereal Rye Seeding Rate and Termination Method on Weed Suppression in Organic Cotton. Proceedings of the Southern Weed Science Society Annual Meeting, Nashville, TN, 2026."
  },
  {
    id: "singletary-organic-herbicides-swss-2026",
    year: "2026",
    reportingPeriod: "2025-2026",
    type: "Conference proceeding",
    status: "Proceeding",
    citation:
      "Singletary, M.M., P.A. Dotray, Y. Breaux, S. Jones, M.V. Bagavathiannan. Organic Herbicides for Terminating a Cereal Rye Cover Crop. Proceedings of the Southern Weed Science Society Annual Meeting, Nashville, TN, 2026."
  }
] satisfies Publication[];

export const publications = [...publicationItems].sort(
  (first, second) => Number(second.year) - Number(first.year) || first.citation.localeCompare(second.citation)
);
