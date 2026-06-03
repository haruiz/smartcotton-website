"use client";

import { useEffect, useRef } from "react";
import {
  LngLatBounds,
  Map as MapLibreMap,
  Marker,
  NavigationControl,
  Popup,
  type LngLatLike
} from "maplibre-gl";
import { climateZones, networkPartners } from "@/content/projectNetwork";

const roleLabels = [
  { short: "R", label: "Research" },
  { short: "O", label: "Outreach" },
  { short: "E", label: "Extension" }
];

const zoneColor = new globalThis.Map<string, string>(climateZones.map((zone) => [zone.name, zone.color]));

const mapStyleUrl = "https://demotiles.maplibre.org/style.json";
const usStatesGeoJsonUrl = "https://cdn.jsdelivr.net/gh/PublicaMundi/MappingAPI@master/data/geojson/us-states.json";

export function ProjectNetwork() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) {
      return;
    }

    const map = new MapLibreMap({
      container: mapContainerRef.current,
      style: mapStyleUrl,
      center: [-98.5, 39] as LngLatLike,
      zoom: 3,
      minZoom: 2.4,
      maxZoom: 6.5,
      attributionControl: { compact: true },
      cooperativeGestures: true
    });

    mapRef.current = map;
    map.addControl(new NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      map.addSource("us-states", {
        type: "geojson",
        data: usStatesGeoJsonUrl
      });

      map.addLayer({
        id: "us-states-fill",
        type: "fill",
        source: "us-states",
        paint: {
          "fill-color": "#d8dfdc",
          "fill-opacity": 0.32
        }
      });

      map.addLayer({
        id: "us-states-outline",
        type: "line",
        source: "us-states",
        paint: {
          "line-color": "#f8faf5",
          "line-width": 1.8
        }
      });

      map.addLayer({
        id: "us-states-outline-dark",
        type: "line",
        source: "us-states",
        paint: {
          "line-color": "#435f32",
          "line-opacity": 0.28,
          "line-width": 0.8
        }
      });

      const bounds = new LngLatBounds([-125, 24], [-66, 50]);
      map.fitBounds(bounds, { padding: 18, duration: 0 });
    });

    const markers = networkPartners.map((partner) => {
      const markerElement = document.createElement("button");
      markerElement.type = "button";
      markerElement.style.backgroundColor = zoneColor.get(partner.climateZone) ?? "#8a5a36";
      markerElement.className =
        "h-4 w-4 rounded-full border-2 border-white shadow-[0_0_0_5px_rgba(33,51,26,0.16)] transition hover:scale-110";
      markerElement.setAttribute("aria-label", `${partner.name}, ${partner.location}`);

      const popup = new Popup({ offset: 16, closeButton: false }).setHTML(`
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <img src="${partner.logoUrl}" alt="" width="24" height="24" style="border-radius:4px;" />
          <strong>${partner.name}</strong>
        </div>
        <span>${partner.location}</span><br/>
        <span>${partner.climateZone} · ${partner.roles.map((role) => role[0]).join(",")}</span>
      `);

      return new Marker({ element: markerElement, anchor: "center" })
        .setLngLat([partner.longitude, partner.latitude])
        .setPopup(popup)
        .addTo(map);
    });

    return () => {
      markers.forEach((marker) => marker.remove());
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Research Network</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cotton-900 sm:text-4xl">
              SmartCotton partner sites across U.S. state boundaries.
            </h2>
            <p className="mt-5 text-sm leading-6 text-cotton-900/70">
              State outlines provide the geographic context. Partner markers are colored by soil and climate environment,
              with research, outreach, and extension roles shown in each popup.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="border-t border-cotton-200 pt-3">
                <p className="text-2xl font-semibold text-cotton-900">{networkPartners.length}</p>
                <p className="mt-1 text-xs text-cotton-900/60">partner sites</p>
              </div>
              <div className="border-t border-cotton-200 pt-3">
                <p className="text-2xl font-semibold text-cotton-900">6</p>
                <p className="mt-1 text-xs text-cotton-900/60">soil types</p>
              </div>
              <div className="border-t border-cotton-200 pt-3">
                <p className="text-2xl font-semibold text-cotton-900">R/O/E</p>
                <p className="mt-1 text-xs text-cotton-900/60">roles</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {roleLabels.map((role) => (
                <span key={role.short} className="rounded-full border border-cotton-200 bg-cotton-50 px-3 py-1 text-xs font-semibold text-cotton-900">
                  {role.short} · {role.label}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-cotton-200 bg-cotton-50 shadow-soft">
            <div ref={mapContainerRef} className="h-[26rem] w-full sm:h-[34rem]" aria-label="Interactive SmartCotton partner map" />
            <div className="grid gap-3 border-t border-cotton-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-3">
              {climateZones.map((zone) => (
                <div key={zone.name} className="flex items-center gap-2 text-xs font-medium text-cotton-900">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: zone.color }} aria-hidden="true" />
                  {zone.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {networkPartners.slice(0, 8).map((partner) => (
            <article key={partner.name} className="border-t border-cotton-200 pt-4">
              <div className="flex items-start gap-2">
                <img src={partner.logoUrl} alt="" className="mt-0.5 h-5 w-5 rounded-sm" loading="lazy" />
                <div>
                  <h3 className="text-sm font-semibold leading-5 text-cotton-900">{partner.name}</h3>
                  <p className="mt-1 text-xs text-cotton-900/60">
                    {partner.location} · {partner.roles.map((role) => role[0]).join(",")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TODO: Replace approximate GeoJSON regions with official GIS data when project geography is finalized. */}
      </div>
    </section>
  );
}
