import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { galleryItems } from "@/content/projectFeatures";
import { getAssetPath } from "@/utils/path";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "View SmartCotton field trials, soil sampling, cover crop plots, UAS and drone work, field days, training activities, team meetings, and Cotton Belt locations.",
  openGraph: {
    title: "Photo Gallery | SmartCotton",
    description: "SmartCotton project photos from field research, training, outreach, and Cotton Belt locations."
  }
};

const requestedPhotoTopics = [
  "Field trials",
  "Soil sampling",
  "Cover crop plots",
  "UAS and drone work",
  "Field days",
  "Student training",
  "Team meetings",
  "Cotton Belt locations"
];

export default function GalleryPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <SectionHeader
          eyebrow="Photo Gallery"
          title="Field research, training, and Cotton Belt project activity"
          description="The gallery is structured for approved project photos from field trials, soil sampling, cover crop plots, UAS work, field days, student training, team meetings, and Cotton Belt research locations."
        />

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Photo topics">
          {requestedPhotoTopics.map((topic) => (
            <span key={topic} className="rounded-full border border-cotton-200 bg-cotton-50 px-4 py-2 text-sm font-medium text-cotton-800">
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {galleryItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-lg border border-cotton-200 bg-white shadow-sm">
              <Image
                src={getAssetPath(item.image)}
                width={900}
                height={620}
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-cotton-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-cotton-900/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-dashed border-cotton-300 bg-cotton-50 p-5 text-sm leading-6 text-cotton-900/70">
          Add approved photos to the image library and update the gallery items to replace placeholders with project-specific field, training, and outreach images.
        </div>
      </div>
    </section>
  );
}
