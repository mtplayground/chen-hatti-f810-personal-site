import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface CardProps extends ComponentPropsWithoutRef<"article"> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  const classes = [
    "rounded-card border border-card bg-academic-surface p-card shadow-card transition-[border-color,box-shadow] duration-200 hover:border-academic-accent/30 hover:shadow-card-hover dark:border-card-dark dark:bg-academic-dark-surface dark:hover:border-academic-dark-accent/30",
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
