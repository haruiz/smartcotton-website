import { clsx } from "clsx";

type CardProps = {
  title: string;
  description: string;
  meta?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Card({ title, description, meta, children, className }: CardProps) {
  return (
    <article
      className={clsx(
        "surface-card group h-full p-6",
        className
      )}
    >
      {meta ? <p className="text-sm font-semibold uppercase tracking-wide text-skydata-700">{meta}</p> : null}
      <h3 className="mt-2 text-xl font-semibold text-cotton-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-cotton-900/70">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
