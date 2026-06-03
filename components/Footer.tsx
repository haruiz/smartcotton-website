import Link from "next/link";
import { SmartCottonLogo } from "@/components/SmartCottonLogo";
import { contact, flatNavItems } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-cotton-200 bg-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <SmartCottonLogo aria-hidden="true" className="h-11 w-11 shrink-0 shadow-sm" />
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
          <p className="mt-4 text-sm text-cotton-900/75">
            {contact.organization} climate-smart cotton research initiative
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Contact</p>
            <address className="mt-3 text-sm not-italic leading-6 text-cotton-900/75">
              {contact.building}
              <br />
              {contact.address}
              <br />
              <a className="focus-ring rounded-sm underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </address>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Site</p>
            <div className="mt-3 grid gap-2">
              {flatNavItems.slice(1, 6).map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring rounded-sm text-sm text-cotton-900/75 hover:text-cotton-900">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
