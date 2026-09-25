import type { ImgHTMLAttributes } from "react";

type SmartCottonLogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  variant?: "mark" | "wordmark";
};

export function SmartCottonLogo({ alt = "SMARTCOTTON logo", variant = "wordmark", ...props }: SmartCottonLogoProps) {
  const isDecorative = props["aria-hidden"] === true || props["aria-hidden"] === "true";
  const src = variant === "mark" ? "/images/smartcotton-logo-mark.jpg" : "/images/smartcotton-logo-header.jpg";

  return (
    <img
      src={src}
      alt={isDecorative ? "" : alt}
      {...(isDecorative ? { "aria-hidden": true } : {})}
      {...props}
    />
  );
}
