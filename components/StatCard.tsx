import { clsx } from "clsx";

type StatCardProps = {
  value: string | number;
  label: string;
  description?: string;
  className?: string;
};

export function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <div className={clsx("stat-card", className)}>
      <p className="text-2xl font-semibold leading-tight text-cotton-900">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-wide text-cotton-900/60">{label}</p>
      {description ? <p className="mt-3 text-sm leading-6 text-cotton-900/70">{description}</p> : null}
    </div>
  );
}
