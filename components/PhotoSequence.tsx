"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";
import type { GalleryCollection } from "@/content/projectFeatures";
import { getAssetPath } from "@/utils/path";

type PhotoSequenceProps = {
  collection: GalleryCollection;
};

export function PhotoSequence({ collection }: PhotoSequenceProps) {
  const titleId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = collection.photos[activeIndex] ?? collection.photos[0];

  if (!activePhoto) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? collection.photos.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % collection.photos.length);
  };

  return (
    <section className="surface-card mt-10 overflow-hidden p-4 md:p-6" aria-labelledby={titleId}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cotton-700">{collection.eyebrow}</p>
          <h2 id={titleId} className="mt-2 font-serif text-3xl font-semibold leading-tight text-cotton-900">
            {collection.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-cotton-900/70">{collection.description}</p>
        </div>
        <p className="text-sm font-semibold text-cotton-700">
          {activeIndex + 1} / {collection.photos.length}
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="flex h-[28rem] items-center justify-center overflow-hidden rounded-md bg-cotton-50 md:h-[34rem] lg:h-[36rem]">
          <Image
            src={getAssetPath(activePhoto.image)}
            width={1200}
            height={760}
            alt={activePhoto.alt}
            className="h-full w-full object-contain p-2"
          />
        </div>

        <div className="flex flex-col justify-between gap-5 p-1 lg:p-3">
          <div>
            <h3 className="text-xl font-semibold text-cotton-900">{activePhoto.title}</h3>
            <p className="mt-3 text-sm leading-6 text-cotton-900/70">{activePhoto.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-cotton-300 bg-cotton-50 text-cotton-900 shadow-sm transition hover:bg-cotton-100"
              onClick={showPrevious}
              aria-label={`Show previous photo in ${collection.title}`}
            >
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <button
              type="button"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-cotton-300 bg-cotton-50 text-cotton-900 shadow-sm transition hover:bg-cotton-100"
              onClick={showNext}
              aria-label={`Show next photo in ${collection.title}`}
            >
              <ChevronRight aria-hidden="true" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5" aria-label={`${collection.title} photo thumbnails`}>
        {collection.photos.map((photo, index) => (
          <button
            key={photo.title}
            type="button"
            className={`focus-ring overflow-hidden rounded-md border-2 bg-cotton-50 transition ${
              index === activeIndex ? "border-cotton-700" : "border-transparent hover:border-cotton-300"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${photo.title}`}
          >
            <Image
              src={getAssetPath(photo.image)}
              width={260}
              height={170}
              alt=""
              className="aspect-[4/3] w-full object-contain p-1"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
