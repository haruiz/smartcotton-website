import { ExternalLink, Linkedin } from "lucide-react";
import { socialLinks } from "@/content/site";

export function SocialLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {socialLinks.map((link) => {
        const visibleUrl = link.href.replace(/^https?:\/\//, "").replace(/\/$/, "");

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${link.label} on LinkedIn`}
            className="surface-card focus-ring flex h-full gap-3 p-4 text-sm transition hover:-translate-y-0.5 hover:border-skydata-300 hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#0a66c2] text-white">
              <Linkedin aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="flex items-start gap-2 font-semibold leading-6 text-cotton-900">
                <span>{link.label}</span>
                <ExternalLink aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-skydata-700" />
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-[#0a66c2]">LinkedIn</span>
              <span className="mt-1 block break-all text-xs leading-5 text-cotton-900/70">{visibleUrl}</span>
              {"note" in link ? (
                <span className="mt-1 block text-xs leading-5 text-cotton-900/60">{link.note}</span>
              ) : null}
            </span>
          </a>
        );
      })}
    </div>
  );
}
