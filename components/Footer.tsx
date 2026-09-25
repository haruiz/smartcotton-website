import Link from "next/link";
import { ExternalLink, Linkedin, Mail, MapPin } from "lucide-react";
import { SmartCottonLogo } from "@/components/SmartCottonLogo";
import { contact, flatNavItems, socialLinks } from "@/content/site";

const footerGroups = [
  {
    title: "Research",
    links: flatNavItems.filter((item) =>
      ["/research-highlights", "/ongoing-activities", "/gallery", "/publications", "/outreach"].includes(item.href)
    )
  },
  {
    title: "Site",
    links: flatNavItems.filter((item) => ["/project", "/project-team", "/news", "/events", "/contact"].includes(item.href))
  }
];

const footerSocialLabels = ["SAS Cotton", "Muthukumar", "Deepak Loura"] as const;

export function Footer() {
  return (
    <footer className="border-t border-cotton-200 bg-[#fbfcf7]">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_0.52fr_0.85fr_0.85fr]">
        <div>
          <div className="flex items-center gap-3">
            <SmartCottonLogo
              variant="mark"
              aria-hidden="true"
              className="h-14 w-14 shrink-0 rounded-md bg-black object-cover shadow-sm ring-1 ring-black/10"
            />
            <div className="min-w-0">
              <p className="text-lg font-extrabold tracking-wide text-cotton-950">SMARTCOTTON</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cotton-700">
                Precision. Regeneration. Resilience.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-cotton-900/75">
            {contact.organization} climate-smart cotton initiative
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Contact</p>
          <address className="mt-3 grid gap-3 text-sm not-italic leading-6 text-cotton-900/75">
            <span className="flex gap-2">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cotton-700" />
              <span>
                {contact.building}
                <br />
                {contact.address}
              </span>
            </span>
            <a className="text-link inline-flex w-fit items-center gap-2" href={`mailto:${contact.footerEmail}`}>
              <Mail aria-hidden="true" className="h-4 w-4" />
              {contact.footerEmail}
            </a>
          </address>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Social</p>
          <div className="mt-3 grid gap-1.5">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${link.label} on LinkedIn`}
                className="focus-ring group inline-flex w-fit items-center gap-2 rounded-md border border-cotton-200 bg-white/80 px-2.5 py-1.5 text-sm font-semibold text-cotton-900/78 shadow-sm transition hover:border-skydata-300 hover:bg-white hover:text-cotton-900"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#0a66c2] text-white">
                  <Linkedin aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                <span className="whitespace-nowrap">
                  {footerSocialLabels[index] ?? link.label}
                </span>
                <ExternalLink aria-hidden="true" className="h-3 w-3 text-skydata-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">{group.title}</p>
            <div className="mt-3 grid gap-2">
              {group.links.map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring rounded-sm text-sm text-cotton-900/75 transition hover:text-cotton-900">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

      </div>
      <div className="border-t border-cotton-200/80">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-cotton-900/60 sm:flex-row sm:items-center sm:justify-between">
          <p>USDA-NIFA SAS-CAP | Award No. 2024-68012-41750</p>
          <p>2024-2029 project period</p>
        </div>
      </div>
    </footer>
  );
}
