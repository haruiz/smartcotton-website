import Image from "next/image";
import { climateZones, featuredPartnerInstitutions } from "@/content/projectNetwork";
import { getAssetPath } from "@/utils/path";

const roleLabels = [
  { short: "R", label: "Research" },
  { short: "O", label: "Outreach" },
  { short: "E", label: "Extension" }
];

export function ProjectNetwork() {
  return (
    <section className="section-band">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="eyebrow">Research Network</p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl">
              SmartCotton partner sites and collaborators across the Cotton Belt.
            </h2>
            <p className="body-copy mt-5 text-sm">
              The multistate partnership map highlights SmartCotton performance locations, collaborator roles, and
              ecoregion context across the U.S. Cotton Belt.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="stat-card p-4">
                <p className="text-2xl font-semibold text-cotton-900">{featuredPartnerInstitutions.length}</p>
                <p className="mt-1 text-xs text-cotton-900/60">partner institutions</p>
              </div>
              <div className="stat-card p-4">
                <p className="text-2xl font-semibold text-cotton-900">{climateZones.length}</p>
                <p className="mt-1 text-xs text-cotton-900/60">site categories</p>
              </div>
              <div className="stat-card p-4">
                <p className="text-2xl font-semibold text-cotton-900">R/O/E</p>
                <p className="mt-1 text-xs text-cotton-900/60">roles</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {roleLabels.map((role) => (
                <span key={role.short} className="chip text-cotton-900">
                  {role.short} · {role.label}
                </span>
              ))}
            </div>
          </div>

          <figure className="surface-card overflow-hidden">
            <div className="bg-cotton-50 p-3 sm:p-5">
              <Image
                src={getAssetPath("/images/smartcotton-multistate-partnership-map.png")}
                width={1018}
                height={616}
                alt="SmartCotton project performance locations and collaborator roles across six U.S. Cotton Belt ecoregions"
                className="w-full rounded-md border border-cotton-200 bg-white object-contain"
                priority={false}
              />
            </div>
            <figcaption className="border-t border-cotton-200 bg-white p-4 text-xs leading-5 text-cotton-900/65">
              Project performance locations and roles across the six ecoregions (Partner institutions: TX, AL, GA, NC,
              NM, MS, AZ, LA) in the US Cotton Belt.
            </figcaption>
            <div className="grid gap-3 border-t border-cotton-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-3">
              {climateZones.map((zone) => (
                <div key={zone.name} className="flex items-center gap-2 text-xs font-medium text-cotton-900">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: zone.color }} aria-hidden="true" />
                  {zone.name}
                </div>
              ))}
            </div>
          </figure>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPartnerInstitutions.map((partner) => (
            <article key={partner.stateCode} className="surface-card p-4">
              <div className="flex items-start gap-2">
                <img src={partner.logoUrl} alt="" className="mt-0.5 h-5 w-5 rounded-sm" loading="lazy" />
                <div>
                  <h3 className="text-sm font-semibold leading-5 text-cotton-900">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      {partner.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-xs text-cotton-900/60">
                    {partner.stateCode} · Official website
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
