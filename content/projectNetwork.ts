export type NetworkRole = "Research" | "Outreach" | "Extension";

export type NetworkPartner = {
  name: string;
  location: string;
  climateZone: string;
  roles: NetworkRole[];
  longitude: number;
  latitude: number;
  website: string;
  logoUrl: string;
};

export const climateZones = [
  { name: "Arid", color: "#eaa04c" },
  { name: "Semi-arid", color: "#e8cf7d" },
  { name: "Subhumid", color: "#9fb38f" },
  { name: "Moist-subhumid", color: "#72b9ad" },
  { name: "Humid south", color: "#255f9e" },
  { name: "Humid southeast", color: "#3aa06b" }
];

// TODO: Replace with approved partner names, exact sites, and official role labels.
export const networkPartners: NetworkPartner[] = [
  {
    name: "Texas A&M University",
    location: "Texas",
    climateZone: "Subhumid",
    roles: ["Research", "Outreach", "Extension"],
    longitude: -96.34,
    latitude: 30.61,
    website: "https://www.tamu.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.tamu.edu&sz=64"
  },
  {
    name: "AgriLife Research & Extension Center",
    location: "Lubbock, TX",
    climateZone: "Semi-arid",
    roles: ["Research", "Outreach", "Extension"],
    longitude: -101.85,
    latitude: 33.58,
    website: "https://lubbock.tamu.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=lubbock.tamu.edu&sz=64"
  },
  {
    name: "Prairie View A&M University",
    location: "Texas",
    climateZone: "Subhumid",
    roles: ["Extension"],
    longitude: -95.99,
    latitude: 30.09,
    website: "https://www.pvamu.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.pvamu.edu&sz=64"
  },
  {
    name: "New Mexico State University",
    location: "New Mexico",
    climateZone: "Semi-arid",
    roles: ["Research", "Outreach"],
    longitude: -106.76,
    latitude: 32.28,
    website: "https://nmsu.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=nmsu.edu&sz=64"
  },
  {
    name: "University of Arizona",
    location: "Arizona",
    climateZone: "Arid",
    roles: ["Research", "Outreach"],
    longitude: -110.95,
    latitude: 32.23,
    website: "https://www.arizona.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.arizona.edu&sz=64"
  },
  {
    name: "Mississippi State University",
    location: "Mississippi",
    climateZone: "Moist-subhumid",
    roles: ["Research", "Outreach"],
    longitude: -88.79,
    latitude: 33.45,
    website: "https://www.msstate.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.msstate.edu&sz=64"
  },
  {
    name: "Auburn University",
    location: "Alabama",
    climateZone: "Moist-subhumid",
    roles: ["Research", "Outreach", "Extension"],
    longitude: -85.48,
    latitude: 32.6,
    website: "https://www.auburn.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.auburn.edu&sz=64"
  },
  {
    name: "University of Georgia",
    location: "Georgia",
    climateZone: "Humid south",
    roles: ["Research", "Outreach", "Extension"],
    longitude: -83.37,
    latitude: 33.95,
    website: "https://www.uga.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.uga.edu&sz=64"
  },
  {
    name: "University of Tennessee",
    location: "Tennessee",
    climateZone: "Moist-subhumid",
    roles: ["Outreach"],
    longitude: -83.92,
    latitude: 35.96,
    website: "https://www.utk.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.utk.edu&sz=64"
  },
  {
    name: "North Carolina State University",
    location: "North Carolina",
    climateZone: "Humid southeast",
    roles: ["Research", "Outreach", "Extension"],
    longitude: -78.67,
    latitude: 35.78,
    website: "https://www.ncsu.edu/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.ncsu.edu&sz=64"
  },
  {
    name: "AgriCenter International",
    location: "Tennessee",
    climateZone: "Moist-subhumid",
    roles: ["Outreach", "Extension"],
    longitude: -89.8,
    latitude: 35.14,
    website: "https://www.agricenter.org/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.agricenter.org&sz=64"
  },
  {
    name: "The Farm Journal / Trust In Food",
    location: "Kansas",
    climateZone: "National partner",
    roles: ["Research", "Outreach"],
    longitude: -98.49,
    latitude: 39.01,
    website: "https://www.trustinfood.com/",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.trustinfood.com&sz=64"
  },
  {
    name: "GaiaDhi Earth Enterprises, Inc.",
    location: "California",
    climateZone: "National partner",
    roles: ["Research", "Outreach"],
    longitude: -121.89,
    latitude: 37.34,
    website: "",
    logoUrl: "https://www.google.com/s2/favicons?domain=www.google.com&sz=64"
  }
];
