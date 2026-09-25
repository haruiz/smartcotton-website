import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAssetPath } from "@/utils/path";

type CTAAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions: CTAAction[];
  image?: {
    src: string;
    alt: string;
  };
};

export function CTASection({ eyebrow = "Next Step", title, description, actions, image }: CTASectionProps) {
  return (
    <section className="bg-cotton-900 py-14 text-white md:py-16">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark">{eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={
                  action.variant === "secondary"
                    ? "focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                    : "focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-cotton-900 transition hover:bg-cotton-100"
                }
              >
                {action.label}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        </div>
        {image ? (
          <div className="mt-8 overflow-hidden rounded-lg border border-white/15 bg-white p-2 shadow-soft">
            <Image
              src={getAssetPath(image.src)}
              width={1792}
              height={1024}
              alt={image.alt}
              className="w-full rounded-md object-contain"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
