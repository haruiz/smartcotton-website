import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SmartCottonLogo } from "@/components/SmartCottonLogo";
import { contact, flatNavItems } from "@/content/site";

const footerGroups = [
  {
    title: "Research",
    links: flatNavItems.filter((item) =>
      ["/research-highlights", "/ongoing-activities", "/gallery", "/publications"].includes(item.href)
    )
  },
  {
    title: "Site",
    links: flatNavItems.filter((item) => ["/project", "/project-team", "/news", "/events", "/contact"].includes(item.href))
  }
];

export function Footer() {
  return (
    <footer className="border-t border-cotton-200 bg-[#fbfcf7]">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.15fr_0.95fr_0.9fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <SmartCottonLogo aria-hidden="true" className="h-11 w-11 shrink-0 drop-shadow-sm" />
            <div>
              <p className="text-lg font-black leading-none text-cotton-900">SmartCotton</p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cotton-700">
                Field intelligence
              </p>
            </div>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-cotton-900/75">
            Renewing American Cotton through regenerative practices, precision management, and multi-state research
            partnerships for climate-smart agriculture.
          </p>
          <p className="mt-4 text-sm font-medium text-cotton-900/75">
            {contact.organization} climate-smart cotton research initiative
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
