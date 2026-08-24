import type { Metadata } from "next";
import Image from "next/image";
import { PhotoSequence } from "@/components/PhotoSequence";
import { SectionHeader } from "@/components/SectionHeader";
import { galleryCollections, galleryItems } from "@/content/projectFeatures";
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
  "Regenerative cotton trials",
  "Soil carbon sampling",
  "Cover crops and living mulches",
  "UAS and sensor work",
  "Field days",
  "Student training",
  "Professional visits",
  "Project updates",
  "Annual meetings",
  "Cotton Belt locations"
];

export default function GalleryPage() {
  const featuredItem = galleryItems[0];
  const remainingItems = galleryItems.slice(1);

  return (
    <section className="section-band">
      <div className="container-page">
        <SectionHeader
          as="h1"
          eyebrow="Photo Gallery"
          title="Field research, training, and project moments"
          description="A visual entry point into SmartCotton field trials, soil sampling, precision tools, outreach, training, and annual meeting activity."
        />

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Photo topics">
          {requestedPhotoTopics.map((topic) => (
            <span key={topic} className="rounded-md border border-cotton-200 bg-cotton-50 px-4 py-2 text-sm font-medium text-cotton-700">
              {topic}
            </span>
          ))}
        </div>

        <article className="surface-card group mt-10 grid overflow-hidden bg-cotton-50 lg:grid-cols-[1.2fr_0.8fr]">
          <Image
            src={getAssetPath(featuredItem.image)}
            width={1100}
            height={720}
            alt={featuredItem.alt}
            className="image-zoom h-full min-h-[18rem] w-full object-cover"
            style={featuredItem.objectPosition ? { objectPosition: featuredItem.objectPosition } : undefined}
            priority
          />
          <div className="flex flex-col justify-center p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">Featured Visual</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cotton-900">{featuredItem.title}</h2>
            <p className="mt-4 text-sm leading-6 text-cotton-900/70">{featuredItem.description}</p>
          </div>
        </article>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {remainingItems.map((item) => (
            <article key={item.title} className="surface-card group overflow-hidden">
              <Image
                src={getAssetPath(item.image)}
                width={900}
                height={620}
                alt={item.alt}
                className="image-zoom aspect-[4/3] w-full object-cover"
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-cotton-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-cotton-900/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {galleryCollections.map((collection) => (
          <PhotoSequence key={collection.title} collection={collection} />
        ))}

        <div className="surface-card-muted mt-10 p-5 text-sm leading-6 text-cotton-900/70">
          The gallery will expand with additional approved field, training, outreach, professional visit, project update, and annual meeting photos.
        </div>
      </div>
    </section>
  );
}
