"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type CarouselSlide = {
  image: string;
  alt: string;
  label: string;
};

const slides: CarouselSlide[] = [
  {
    image: "/images/cotton-field-research-real.png",
    alt: "Cotton research field with white bolls and trial markers",
    label: "Field-scale systems research"
  },
  {
    image: "/images/precision-cotton-banner-real.png",
    alt: "Cotton rows with field sensors and a monitoring drone",
    label: "AI and precision agriculture"
  },
  {
    image: "/images/soil-carbon-banner-real.png",
    alt: "Cotton plant roots exposed in healthy field soil",
    label: "Soil health and carbon"
  }
];

export function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  return (
    <div className="absolute inset-0" aria-label="SmartCotton research image carousel">
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-cotton-900/90 via-cotton-900/70 to-cotton-900/20" />
      <div className="absolute inset-x-0 bottom-5 z-20">
        <div className="container-page flex items-center justify-between gap-4">
          <p className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur sm:block">
            {slides[activeIndex].label}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur hover:bg-white/25"
              onClick={showPrevious}
              aria-label="Show previous banner image"
            >
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur hover:bg-white/25"
              onClick={showNext}
              aria-label="Show next banner image"
            >
              <ChevronRight aria-hidden="true" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
