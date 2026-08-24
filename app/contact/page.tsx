import type { Metadata } from "next";
import Image from "next/image";
import { Database, FileText, Handshake, Mail, MapPin, Megaphone } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { contact } from "@/content/site";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the SmartCotton team for project questions, outreach coordination, research collaboration, publication requests, and partnership opportunities.",
  openGraph: {
    title: "Contact | SmartCotton",
    description: "Connect with SmartCotton for project inquiries, outreach coordination, publications, and partnerships."
  }
};

const helpTopics = [
  {
    title: "Research Collaboration",
    description: "Connect on field studies, research coordination, data needs, or cross-state project questions.",
    icon: Handshake
  },
  {
    title: "Extension & Outreach",
    description: "Coordinate field days, grower-facing updates, workshops, trainings, or stakeholder activities.",
    icon: Megaphone
  },
  {
    title: "Publications & Data",
    description: "Ask about project outputs, annual reports, publication records, and available SmartCotton resources.",
    icon: FileText
  },
  {
    title: "General Project Inquiries",
    description: "Reach the project team for routing, partnership opportunities, or other SmartCotton questions.",
    icon: Database
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="section-band">
        <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionHeader
              as="h1"
              eyebrow="Contact"
              title="Connect with the SmartCotton team"
              description="For research questions, outreach coordination, publication requests, and partnership updates, connect with the project team directly."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href={`mailto:${contact.projectContacts[1].email}`}>
                <Mail aria-hidden="true" size={18} />
                Email project manager
              </a>
              <a className="btn-secondary" href="#how-can-we-help">
                How can we help?
              </a>
            </div>
          </div>

          <div className="image-frame">
            <Image
              src={getAssetPath("/images/cotton-field-research-real.png")}
              width={900}
              height={560}
              alt="SmartCotton field research rows"
              className="aspect-[16/10] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="container-page grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="surface-card p-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cotton-900 text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="eyebrow">Address</p>
                <h2 className="mt-2 text-xl font-semibold text-cotton-900">{contact.organization}</h2>
                <p className="mt-2 text-sm leading-6 text-cotton-900/70">
                  {contact.building}
                  <br />
                  {contact.address}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="section-divider">
              <p className="eyebrow">Project contacts</p>
              <h2 className="mt-2 text-2xl font-semibold text-cotton-900">Direct project coordination</h2>
              <p className="mt-2 text-sm leading-6 text-cotton-900/70">
                Messages can be sent directly to the project lead or project manager and routed to the appropriate project representative.
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {contact.projectContacts.map((person) => (
                <article key={person.email} className="surface-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cotton-100 text-cotton-900">
                      <Mail aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cotton-900">{person.name}</h3>
                      <p className="mt-1 text-sm font-medium text-cotton-900/65">{person.role}</p>
                      <a className="text-link mt-3 inline-block text-sm" href={`mailto:${person.email}`}>
                        {person.email}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-can-we-help" className="section-band scroll-mt-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="How can we help?"
            title="Find the right route into SmartCotton"
            description="Use the contact topics below to frame your message. The team will review inquiries and direct them to the appropriate project representative."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {helpTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <article key={topic.title} className="surface-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cotton-900 text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-cotton-900">{topic.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-cotton-900/70">{topic.description}</p>
                </article>
              );
            })}
          </div>

          <div className="surface-card-muted mt-10 p-5 text-sm leading-6 text-cotton-900/70">
            For project inquiries, collaboration opportunities, or outreach requests, please contact the SmartCotton team
            by email. Messages will be reviewed and directed to the appropriate project representative.
          </div>
        </div>
      </section>
    </>
  );
}
