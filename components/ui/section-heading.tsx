import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  action,
  className
}: SectionHeadingProps) {
  const classes = [
    "mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div>
        {eyebrow ? (
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-xl font-bold text-academic-text dark:text-academic-dark-text">
          {title}
        </h2>
        <div className="mt-2 h-0.5 w-10 rounded-full bg-academic-accent dark:bg-academic-dark-accent" />
        {description ? (
          <p className="mt-3 max-w-3xl text-sm text-academic-muted dark:text-academic-dark-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
