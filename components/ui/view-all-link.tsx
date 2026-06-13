import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { ContentLink } from "../../data/types";

interface ViewAllLinkProps extends ContentLink {
  className?: string;
}

export function ViewAllLink({ label, href, external, ariaLabel, className }: ViewAllLinkProps) {
  const classes = [
    "inline-flex items-center gap-2 text-sm font-semibold text-academic-accent no-underline transition-colors hover:text-academic-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:text-academic-dark-accent dark:hover:text-academic-dark-accent-hover dark:focus-visible:outline-academic-dark-accent",
    className
  ]
    .filter(Boolean)
    .join(" ");
  const Icon = external ? ExternalLink : ArrowRight;

  if (external) {
    return (
      <a aria-label={ariaLabel} className={classes} href={href} rel="noreferrer" target="_blank">
        <span>{label}</span>
        <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={classes} href={href}>
      <span>{label}</span>
      <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
    </Link>
  );
}
