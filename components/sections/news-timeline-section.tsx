import { siteContent } from "../../data/config";
import type { ContentLink, NewsItem } from "../../data/types";
import { SectionHeading, ViewAllLink } from "../ui";

function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));
}

function getVenueLink(item: NewsItem): ContentLink | undefined {
  return item.links?.[0];
}

export function NewsTimelineSection() {
  const { news } = siteContent;

  return (
    <section aria-labelledby="news-heading">
      <SectionHeading
        action={<ViewAllLink href="/news" label="View all news" />}
        description="Recent updates, talks, publications, and milestones."
        title="News"
      />

      <ol className="border-y border-academic-border dark:border-academic-dark-border">
        {news.map((item, index) => {
          const venueLink = getVenueLink(item);
          const isLast = index === news.length - 1;

          return (
            <li
              className="grid gap-3 border-b border-academic-border py-card last:border-b-0 sm:grid-cols-[8.5rem_1.75rem_minmax(0,1fr)] sm:gap-card dark:border-academic-dark-border"
              key={item.id}
            >
              <time
                className="text-sm font-semibold text-academic-accent dark:text-academic-dark-accent sm:pt-0.5"
                dateTime={item.date}
              >
                {formatNewsDate(item.date)}
              </time>

              <div className="relative hidden justify-center sm:flex" aria-hidden="true">
                {!isLast ? (
                  <span className="absolute left-1/2 top-4 h-[calc(100%+1rem)] w-px -translate-x-1/2 bg-academic-border dark:bg-academic-dark-border" />
                ) : null}
                <span className="mt-1 h-3 w-3 rounded-full border-2 border-academic-bg-subtle bg-academic-accent dark:border-academic-dark-bg dark:bg-academic-dark-accent" />
              </div>

              <div className="relative pl-6 sm:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-academic-bg-subtle bg-academic-accent sm:hidden dark:border-academic-dark-bg dark:bg-academic-dark-accent"
                />
                <h3 className="text-lg font-semibold leading-snug text-academic-text dark:text-academic-dark-text">
                  {item.title}
                </h3>
                {item.description ? (
                  <p className="mt-2 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {item.description}
                  </p>
                ) : null}
                {item.venue ? (
                  <p className="mt-3 text-sm">
                    {venueLink ? (
                      <a
                        aria-label={venueLink.ariaLabel}
                        className="font-semibold text-academic-accent no-underline transition-colors hover:text-academic-accent-hover dark:text-academic-dark-accent dark:hover:text-academic-dark-accent-hover"
                        href={venueLink.href}
                      >
                        {item.venue}
                      </a>
                    ) : (
                      <span className="font-semibold text-academic-accent dark:text-academic-dark-accent">
                        {item.venue}
                      </span>
                    )}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
