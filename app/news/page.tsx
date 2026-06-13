import type { Metadata } from "next";
import { CalendarDays, ExternalLink } from "lucide-react";
import { ListPage } from "../../components/layout/list-page";
import { Card } from "../../components/ui";
import { siteContent } from "../../data/config";
import type { ContentLink } from "../../data/types";

export const metadata: Metadata = {
  title: "News | chen-hatti-f810-personal-site",
  description: "Full news listing"
};

function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));
}

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function NewsLink({ link }: { link: ContentLink }) {
  const external = link.external ?? isExternalHref(link.href);

  return (
    <a
      aria-label={link.ariaLabel}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-academic-accent no-underline transition-colors hover:text-academic-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:text-academic-dark-accent dark:hover:text-academic-dark-accent-hover dark:focus-visible:outline-academic-dark-accent"
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

export default function NewsPage() {
  return (
    <ListPage description="Updates, talks, publications, and milestones." title="News">
      <ol className="space-y-card">
        {siteContent.news.map((item) => (
          <li key={item.id}>
            <Card className="grid gap-card sm:grid-cols-[180px_minmax(0,1fr)]">
              <time
                className="flex items-center gap-3 text-sm font-semibold text-academic-accent dark:text-academic-dark-accent sm:block"
                dateTime={item.date}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-academic-accent-subtle text-academic-accent dark:bg-academic-dark-surface-muted dark:text-academic-dark-accent sm:mb-3">
                  <CalendarDays aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span>{formatNewsDate(item.date)}</span>
              </time>

              <div>
                <h2 className="text-xl font-semibold leading-snug text-academic-text dark:text-academic-dark-text">
                  {item.title}
                </h2>
                {item.venue ? (
                  <p className="mt-2 text-sm font-semibold text-academic-accent dark:text-academic-dark-accent">
                    {item.venue}
                  </p>
                ) : null}
                {item.description ? (
                  <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {item.description}
                  </p>
                ) : null}
                {item.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <NewsLink key={`${item.id}-${link.label}`} link={link} />
                    ))}
                  </div>
                ) : null}
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </ListPage>
  );
}
