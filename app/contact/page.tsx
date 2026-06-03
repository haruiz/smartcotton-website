import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the SmartCotton team for project questions, outreach coordination, research collaboration, publication requests, and partnership opportunities.",
  openGraph: {
    title: "Contact | SmartCotton",
    description: "Connect with SmartCotton for project inquiries, outreach coordination, publications, and partnerships."
  }
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="Contact"
          title="Reach the SmartCotton project"
          description="Connect with the SmartCotton team for research inquiries, outreach coordination, publication requests, and partnership updates."
        />
        <div className="rounded-lg border border-cotton-200 bg-cotton-50 p-6 shadow-sm">
          <div className="grid gap-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-cotton-700" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold text-cotton-900">{contact.organization}</h2>
                <p className="mt-1 text-sm leading-6 text-cotton-900/70">
                  {contact.building}
                  <br />
                  {contact.address}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 shrink-0 text-cotton-700" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold text-cotton-900">Project contact</h2>
                <a className="focus-ring mt-1 inline-block rounded-sm text-sm font-semibold text-skydata-700 underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="rounded-md border border-cotton-200 bg-white p-4 text-sm leading-6 text-cotton-900/70">
              For project inquiries, collaboration opportunities, or outreach requests, please contact the SmartCotton
              team by email. Messages will be reviewed and directed to the appropriate project representative.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
