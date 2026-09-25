"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, ExternalLink, Globe2, MapPinned, Network } from "lucide-react";
import { useMemo, useState } from "react";
import { climateZones, featuredPartnerInstitutions, networkPartners } from "@/content/projectNetwork";
import { getAssetPath } from "@/utils/path";

const roleLabels = [
  { short: "R", label: "Research" },
  { short: "O", label: "Outreach" },
  { short: "E", label: "Extension" }
];

const metrics = [
  {
    value: featuredPartnerInstitutions.length,
    label: "Partner Institutions",
    icon: Building2
  },
  {
    value: climateZones.length,
    label: "Site Categories",
    icon: MapPinned
  },
  {
    value: "R/O/E",
    label: "Research, Outreach, Extension Roles",
    icon: Network
  }
];

const mapBounds = {
  west: -125,
  east: -66,
  north: 50,
  south: 24
};

function toMapPosition(longitude: number, latitude: number) {
  const x = ((longitude - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100;
  const y = ((mapBounds.north - latitude) / (mapBounds.north - mapBounds.south)) * 100;

  return {
    left: `${Math.min(96, Math.max(4, x))}%`,
    top: `${Math.min(91, Math.max(7, y))}%`
  };
}

type ProjectNetworkProps = {
  compact?: boolean;
};

export function ProjectNetwork({ compact = false }: ProjectNetworkProps) {
  const [activePartner, setActivePartner] = useState<string | null>(null);

  const partnerMapMarkers = useMemo(
    () =>
      networkPartners.map((partner, index) => ({
        ...partner,
        markerKey: `${partner.name}-${index}`,
        position: toMapPosition(partner.longitude, partner.latitude),
        zoneColor: climateZones.find((zone) => zone.name === partner.climateZone)?.color ?? "#435f32"
      })),
    []
  );

  return (
    <section className={`border-y border-cotton-200/70 bg-[#fbfcf7] ${compact ? "py-12 md:py-16" : "py-16 md:py-20"}`}>
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-12">
          <div className="animate-section-rise">
            <p className="eyebrow">{compact ? "Research Network" : "Our Network"}</p>
            <h2 className="heading-display mt-3 max-w-xl text-3xl sm:text-4xl lg:text-[2.65rem]">
              {compact ? "A Cotton Belt-wide research network" : "SmartCotton partner sites and collaborators across the Cotton Belt."}
            </h2>
            <p className="body-copy mt-5 max-w-md text-sm">
              {compact
                ? "SmartCotton connects research, outreach, and extension partners across major cotton-producing regions of the United States."
                : "The multistate partnership map highlights SmartCotton performance locations, collaborator roles, and ecoregion context across the U.S. Cotton Belt."}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {metrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="group min-h-28 rounded-xl border border-cotton-200/90 bg-white/85 p-4 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-cotton-300 hover:shadow-md"
                  >
                    <div className="flex h-full flex-col justify-between gap-3">
                      <Icon className="h-4 w-4 text-cotton-700 transition group-hover:text-cotton-900" aria-hidden="true" />
                      <div>
                        <p className="text-2xl font-semibold leading-none text-cotton-900">{metric.value}</p>
                        <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-wide text-cotton-900/60">
                          {metric.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">Partner roles</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {roleLabels.map((role) => (
                  <span
                    key={role.short}
                    className="inline-flex items-center gap-1.5 rounded-md border border-cotton-200 bg-white px-3 py-1.5 text-xs font-semibold text-cotton-900 shadow-sm"
                  >
                    <span className="text-cotton-700">{role.short}</span>
                    <span aria-hidden="true">·</span>
                    {role.label}
                  </span>
                ))}
              </div>
            </div>

            {compact ? (
              <Link href="/project-team" className="text-link mt-7 inline-flex items-center gap-2 text-sm">
                Explore the network
                <ExternalLink aria-hidden="true" size={15} />
              </Link>
            ) : null}
          </div>

          <figure className="animate-section-rise overflow-hidden rounded-2xl border border-cotton-200/90 bg-white p-3 shadow-soft sm:p-5">
            <div className="relative overflow-hidden rounded-xl border border-cotton-200 bg-cotton-50">
              <div className="relative">
                <Image
                  src={getAssetPath("/images/smartcotton-multistate-partnership-map.png")}
                  width={1018}
                  height={616}
                  alt="SmartCotton project performance locations and collaborator roles across six U.S. Cotton Belt ecoregions"
                  className="w-full bg-white object-contain"
                  priority={false}
                />
                <div className="absolute inset-0" aria-label="Interactive SmartCotton partner map markers">
                  {partnerMapMarkers.map((partner) => {
                    const isActive = activePartner === partner.name;

                    return (
                      <button
                        key={partner.markerKey}
                        type="button"
                        aria-label={`${partner.name}, ${partner.location}. ${partner.roles.join(", ")} partner.`}
                        className="focus-ring group absolute z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-sm transition duration-200 ease-out hover:scale-125 focus-visible:scale-125 sm:h-5 sm:w-5"
                        style={{ ...partner.position, backgroundColor: partner.zoneColor }}
                        onMouseEnter={() => setActivePartner(partner.name)}
                        onMouseLeave={() => setActivePartner(null)}
                        onFocus={() => setActivePartner(partner.name)}
                        onBlur={() => setActivePartner(null)}
                      >
                        <span
                          className={`absolute inset-[-0.35rem] rounded-full border transition ${
                            isActive ? "border-cotton-900/70 opacity-100" : "border-white/0 opacity-0 group-hover:opacity-100"
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <figcaption className="px-1 pt-4 text-xs leading-5 text-cotton-900/65">
              Project performance locations and roles across the six ecoregions (Partner institutions: TX, AL, GA, NC,
              NM, MS, AZ, LA) in the US Cotton Belt.
            </figcaption>

            <div className="mt-4 grid gap-2 rounded-xl border border-cotton-200/80 bg-cotton-50/80 p-3 sm:grid-cols-2 lg:grid-cols-4">
              {climateZones.map((zone) => (
                <div key={zone.name} className="flex min-w-0 items-center gap-2 text-xs font-medium text-cotton-900/80">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white"
                    style={{ backgroundColor: zone.color }}
                    aria-hidden="true"
                  />
                  {zone.name}
                </div>
              ))}
            </div>
          </figure>
        </div>

        {compact ? (
          <div className="mt-6 rounded-xl border border-cotton-200/80 bg-white/80 p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {featuredPartnerInstitutions.map((partner) => (
                  <a
                    key={partner.stateCode}
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${partner.name} official website opens in a new tab`}
                    className="focus-ring group inline-flex items-center gap-2 rounded-md border border-cotton-200 bg-white px-3 py-2 text-sm font-semibold text-cotton-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-cotton-300 hover:text-skydata-700"
                    onMouseEnter={() => setActivePartner(partner.name)}
                    onMouseLeave={() => setActivePartner(null)}
                    onFocus={() => setActivePartner(partner.name)}
                    onBlur={() => setActivePartner(null)}
                  >
                    <img
                      src={partner.logoUrl}
                      alt=""
                      className="h-5 w-5 rounded-sm"
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <span>{partner.name}</span>
                    <ExternalLink
                      className="h-3.5 w-3.5 shrink-0 text-cotton-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
              <Link href="/project-team" className="text-link inline-flex shrink-0 items-center gap-2 text-sm">
                View all partners
                <ExternalLink aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
        ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredPartnerInstitutions.map((partner, index) => {
            const isActive = activePartner === partner.name;

            return (
              <a
                key={partner.stateCode}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`${partner.name} official website opens in a new tab`}
                className={`focus-ring animate-section-rise group flex min-h-32 flex-col justify-between rounded-xl border bg-white/95 p-5 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-md ${
                  isActive ? "border-cotton-500 ring-2 ring-cotton-200" : "border-cotton-200/90 hover:border-cotton-300"
                }`}
                style={{ animationDelay: `${index * 45}ms` }}
                onMouseEnter={() => setActivePartner(partner.name)}
                onMouseLeave={() => setActivePartner(null)}
                onFocus={() => setActivePartner(partner.name)}
                onBlur={() => setActivePartner(null)}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={partner.logoUrl}
                    alt={`${partner.name} logo`}
                    className="mt-0.5 h-9 w-9 rounded-md border border-cotton-200 bg-white p-1"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cotton-700">{partner.stateCode}</p>
                    <h3 className="mt-1 text-base font-semibold leading-6 text-cotton-900">{partner.name}</h3>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-cotton-900/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Globe2 className="h-3.5 w-3.5 text-cotton-700" aria-hidden="true" />
                    Official website
                  </span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-cotton-700 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </a>
            );
          })}
        </div>
        )}

      </div>
    </section>
  );
}
