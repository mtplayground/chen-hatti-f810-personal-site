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

      <ol className="flex gap-card overflow-x-auto pb-3">
        {news.map((item) => {
          const venueLink = getVenueLink(item);

          return (
            <li className="relative min-w-[280px] flex-1 pl-8" key={item.id}>
              <div className="absolute left-0 top-2 h-[calc(100%-0.5rem)] w-px bg-academic-border dark:bg-academic-dark-border" />
              <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full border-2 border-academic-bg-subtle bg-academic-accent dark:border-academic-dark-bg dark:bg-academic-dark-accent" />
              <time
                className="text-sm font-semibold text-academic-accent dark:text-academic-dark-accent"
                dateTime={item.date}
              >
                {formatNewsDate(item.date)}
              </time>
              <h3 className="mt-2 text-lg font-semibold text-academic-text dark:text-academic-dark-text">
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
            </li>
          );
        })}
      </ol>
    </section>
  );
}
