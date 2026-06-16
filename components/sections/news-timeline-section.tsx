import { siteContent } from "../../data/config";
import { SectionHeading, ViewAllLink } from "../ui";

function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));
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
        {news.map((item) => (
          <li
            className="grid gap-2 border-b border-academic-border py-2.5 last:border-b-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-card dark:border-academic-dark-border"
            key={item.id}
          >
            <time
              className="text-xs font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent"
              dateTime={item.date}
            >
              {formatNewsDate(item.date)}
            </time>

            <h3 className="text-sm font-semibold leading-snug text-academic-text dark:text-academic-dark-text">
              {item.title}
            </h3>
          </li>
        ))}
      </ol>
    </section>
  );
}
