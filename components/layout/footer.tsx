import { ExternalLink, GitBranch, GraduationCap, Link, Mail, type LucideIcon } from "lucide-react";
import { siteContent } from "../../data/config";

const socialIcons: Record<string, LucideIcon> = {
  Github: GitBranch,
  GraduationCap,
  Linkedin: Link,
  Mail
};

export function Footer() {
  const { profile } = siteContent;
  const year = new Date().getFullYear();
  const tagline = `${profile.title} - ${profile.affiliation}`;

  return (
    <footer className="border-t border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-bg">
      <div className="mx-auto grid w-full max-w-[1200px] gap-4 px-site-x py-6 text-sm text-academic-muted sm:px-site-x-lg lg:grid-cols-3 lg:items-center">
        <p className="text-center lg:text-left">
          &copy; {year} {profile.name}
        </p>

        <nav aria-label="Social links" className="flex items-center justify-center gap-2">
          {profile.socials.map((social) => {
            const Icon = social.icon ? (socialIcons[social.icon] ?? ExternalLink) : ExternalLink;

            return (
              <a
                aria-label={social.ariaLabel ?? social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-card border border-transparent text-academic-muted no-underline transition-colors hover:border-academic-accent hover:text-academic-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:text-academic-dark-muted dark:hover:border-academic-dark-accent dark:hover:text-academic-dark-accent dark:focus-visible:outline-academic-dark-accent"
                href={social.href}
                key={social.href}
                rel={social.external ? "noreferrer" : undefined}
                target={social.external ? "_blank" : undefined}
                title={social.label}
              >
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </a>
            );
          })}
        </nav>

        <p className="text-center lg:text-right">{tagline}</p>
      </div>
    </footer>
  );
}
