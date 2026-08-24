import { clsx } from "clsx";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeader({ eyebrow, title, description, className, as = "h2" }: SectionHeaderProps) {
  const Heading = as;

  return (
    <div className={clsx("max-w-3xl", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading className="heading-display mt-2 text-3xl sm:text-4xl">{title}</Heading>
      {description ? <p className="body-copy mt-4 text-base">{description}</p> : null}
    </div>
  );
}
