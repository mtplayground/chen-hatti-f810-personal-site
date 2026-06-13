import {
  ExternalLink,
  GitBranch,
  GraduationCap,
  Link as LinkIcon,
  Mail,
  type LucideIcon
} from "lucide-react";
import type { SocialLink } from "../../data/types";

const socialIcons: Record<string, LucideIcon> = {
  Github: GitBranch,
  GraduationCap,
  Linkedin: LinkIcon,
  Mail
};

interface SocialButtonProps {
  social: SocialLink;
  className?: string;
}

export function SocialButton({ social, className }: SocialButtonProps) {
  const Icon = social.icon ? (socialIcons[social.icon] ?? ExternalLink) : ExternalLink;
  const classes = [
    "inline-flex h-10 w-10 items-center justify-center rounded-card border border-transparent text-academic-muted no-underline transition-colors hover:border-academic-accent hover:text-academic-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:text-academic-dark-muted dark:hover:border-academic-dark-accent dark:hover:text-academic-dark-accent dark:focus-visible:outline-academic-dark-accent",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      aria-label={social.ariaLabel ?? social.label}
      className={classes}
      href={social.href}
      rel={social.external ? "noreferrer" : undefined}
      target={social.external ? "_blank" : undefined}
      title={social.label}
    >
      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
    </a>
  );
}
