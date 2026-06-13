import type { Metadata } from "next";
import { ExternalLink, MapPin } from "lucide-react";
import { ListPage } from "../../components/layout/list-page";
import { Card } from "../../components/ui";
import { siteContent } from "../../data/config";
import type { ContentLink, ExperienceItem } from "../../data/types";

export const metadata: Metadata = {
  title: "Experience | chen-hatti-f810-personal-site",
  description: "Full experience listing"
};

function joinText(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" - ");
}

function experienceDates(item: ExperienceItem) {
  return joinText([item.startDate, item.current ? "Present" : item.endDate]);
}

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function ResourceLink({ link }: { link: ContentLink }) {
  const external = link.external ?? isExternalHref(link.href);

  return (
    <a
      aria-label={link.ariaLabel}
      className="inline-flex items-center gap-1.5 rounded-full border border-academic-border px-3 py-1.5 text-sm font-semibold text-academic-accent no-underline transition-colors hover:border-academic-accent hover:text-academic-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:border-academic-dark-border dark:text-academic-dark-accent dark:hover:border-academic-dark-accent dark:hover:text-academic-dark-accent-hover dark:focus-visible:outline-academic-dark-accent"
      href={link.href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span>{link.label}</span>
      {external ? (
        <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} />
      ) : null}
    </a>
  );
}

export default function ExperiencePage() {
  return (
    <ListPage
      description="Research experience, academic appointments, and selected projects."
      title="Experience"
    >
      <ol className="space-y-card">
        {siteContent.experience.map((item, index) => (
          <li className="relative pl-8" key={item.id}>
            {index < siteContent.experience.length - 1 ? (
              <div className="absolute left-[5px] top-4 h-[calc(100%+1.5rem)] w-px bg-academic-border dark:bg-academic-dark-border" />
            ) : null}
            <div className="absolute left-0 top-6 h-3 w-3 rounded-full border-2 border-academic-bg-subtle bg-academic-accent dark:border-academic-dark-bg dark:bg-academic-dark-accent" />

            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-academic-accent dark:text-academic-dark-accent">
                    {experienceDates(item)}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug text-academic-text dark:text-academic-dark-text">
                    {item.role}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-academic-muted dark:text-academic-dark-muted">
                    {item.organization}
                  </p>
                </div>
                {item.location ? (
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-academic-bg-subtle px-3 py-1 text-xs font-semibold uppercase tracking-normal text-academic-muted dark:bg-academic-dark-surface-muted dark:text-academic-dark-muted">
                    <MapPin aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} />
                    <span>{item.location}</span>
                  </p>
                ) : null}
              </div>

              {item.description ? (
                <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                  {item.description}
                </p>
              ) : null}
              {item.highlights?.length ? (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      className="flex gap-2 text-sm text-academic-muted dark:text-academic-dark-muted"
                      key={`${item.id}-${highlight}`}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-academic-accent dark:bg-academic-dark-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <ResourceLink key={`${item.id}-${link.label}`} link={link} />
                  ))}
                </div>
              ) : null}
            </Card>
          </li>
        ))}
      </ol>
    </ListPage>
  );
}
