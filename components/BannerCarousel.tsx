"use client";

import { useEffect, useState } from "react";
import { getAssetPath } from "@/utils/path";

type HeroClip = {
  src: string;
  poster: string;
  label: string;
};

const introClip: HeroClip = {
  src: "/videos/smartcotton-hero-intro.mp4",
  poster: "/images/project-photos/cotton-row-canopy.jpg",
  label: "SmartCotton field research"
};

const heroClips: HeroClip[] = [
  {
    src: "/videos/cotton-harvest-hero-01-0102-0115.mp4",
    poster: "/images/project-photos/cotton-harvest-machinery.jpg",
    label: "Cotton harvest in motion"
  },
  {
    src: "/videos/cotton-harvest-hero-02-0308-0321.mp4",
    poster: "/images/project-photos/cotton-open-boll-field.jpg",
    label: "Field-scale harvest activity"
  }
];

export function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroClips.length);
    }, 12000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <video
        className={`absolute inset-0 z-10 h-full w-full object-cover brightness-[0.72] saturate-[0.9] transition-opacity duration-1000 ${
          showIntro ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={getAssetPath(introClip.poster)}
      >
        <source src={getAssetPath(introClip.src)} type="video/mp4" />
      </video>
      {heroClips.map((clip, index) => (
        <video
          key={clip.src}
          className={`absolute inset-0 h-full w-full object-cover brightness-[0.72] saturate-[0.9] transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={getAssetPath(clip.poster)}
        >
          <source src={getAssetPath(clip.src)} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-cotton-950 via-cotton-950/86 via-[58%] to-cotton-950/32" />
      <div className="absolute inset-0 bg-gradient-to-t from-cotton-950/78 via-cotton-950/24 to-cotton-950/52" />
      <div className="absolute inset-0 bg-cotton-950/24" />
      <div className="absolute inset-x-0 bottom-5 z-20">
        <div className="container-page">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
            {showIntro ? introClip.label : heroClips[activeIndex].label}
          </p>
        </div>
      </div>
    </div>
  );
}
