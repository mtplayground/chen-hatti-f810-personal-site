import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  const classes = [
    "mx-auto w-full max-w-[1200px] px-site-x py-section-sm sm:px-site-x-lg lg:py-section",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
