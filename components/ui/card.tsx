import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface CardProps extends ComponentPropsWithoutRef<"article"> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  const classes = [
    "rounded-card border border-card bg-academic-surface p-card shadow-card transition-[border-color,box-shadow,transform] duration-200 hover:border-academic-accent/40 hover:shadow-card-hover motion-safe:hover:-translate-y-0.5 dark:border-card-dark dark:bg-academic-dark-surface dark:hover:border-academic-dark-accent/40",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
}
