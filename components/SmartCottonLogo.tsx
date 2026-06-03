import type { SVGProps } from "react";

type SmartCottonLogoProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export function SmartCottonLogo({ title = "SmartCotton logo", ...props }: SmartCottonLogoProps) {
  const isDecorative = props["aria-hidden"] === true || props["aria-hidden"] === "true";

  return (
    <svg viewBox="0 0 48 48" {...(isDecorative ? { "aria-hidden": true } : { role: "img", "aria-label": title })} {...props}>
      <rect width="48" height="48" rx="12" fill="#21331a" />
      <path
        d="M12 33.5c6.4-5.7 17.2-5.8 24 0"
        fill="none"
        stroke="#c4d7b3"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
      <path
        d="M14.5 38c5.5-4.1 13.9-4.1 19 0"
        fill="none"
        stroke="#6f8f55"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="M24 31.4c-2.7-3.1-4.1-6.2-4.1-9.2 0-5.2 3.5-9 4.1-9.6.6.6 4.1 4.4 4.1 9.6 0 3-1.4 6.1-4.1 9.2Z"
        fill="#f8faf5"
      />
      <path
        d="M19.9 26.8c-3.5-.3-6.1-2.3-6.9-5.3-.9-3.3.7-6.7 3.6-8.2 2.9 2.2 4.8 5.3 5.2 8.4.2 1.8-.4 3.5-1.9 5.1Z"
        fill="#eef3e7"
      />
      <path
        d="M28.1 26.8c3.5-.3 6.1-2.3 6.9-5.3.9-3.3-.7-6.7-3.6-8.2-2.9 2.2-4.8 5.3-5.2 8.4-.2 1.8.4 3.5 1.9 5.1Z"
        fill="#eef3e7"
      />
      <path
        d="M16.5 18.8c3 3.3 5.1 7 6 10.9M31.5 18.8c-3 3.3-5.1 7-6 10.9"
        fill="none"
        stroke="#dce8d1"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.8 15.6c5.1-4.8 12.8-6.7 20-4.5 2.7.8 4.9 2.1 6.4 3.6"
        fill="none"
        stroke="#2f7da1"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle cx="10.8" cy="15.6" r="2.2" fill="#8a5a36" />
      <circle cx="37.2" cy="14.7" r="2.2" fill="#2f7da1" />
      <circle cx="24" cy="9.8" r="1.8" fill="#c4d7b3" />
    </svg>
  );
}
