import type { Metadata } from "next";
import Link from "next/link";
import { ListPage } from "../../components/layout/list-page";
import { Card } from "../../components/ui";
import { siteContent } from "../../data/config";
import type { BlogItem } from "../../data/types";

export const metadata: Metadata = {
  title: "Blog | chen-hatti-f810-personal-site",
  description: "Full blog listing"
};

function formatBlogDate(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);

  return {
    day: new Intl.DateTimeFormat("en", {
      day: "2-digit",
      timeZone: "UTC"
    }).format(parsed),
    month: new Intl.DateTimeFormat("en", {
      month: "short",
      timeZone: "UTC"
    }).format(parsed),
    year: new Intl.DateTimeFormat("en", {
      year: "numeric",
      timeZone: "UTC"
    }).format(parsed)
  };
}

function blogHref(blog: BlogItem) {
  return blog.href ?? `/blog/${blog.slug}`;
}

export default function BlogPage() {
  return (
    <ListPage description="Research notes, project updates, and writing." title="Blog">
      <ol className="space-y-card">
        {siteContent.blogs.map((blog) => {
          const date = formatBlogDate(blog.date);

          return (
            <li key={blog.id}>
              <Card>
                <div className="grid gap-card sm:grid-cols-[96px_minmax(0,1fr)]">
                  <time
                    className="flex h-24 w-24 flex-col items-center justify-center rounded-card border border-academic-border bg-academic-bg-subtle text-center dark:border-academic-dark-border dark:bg-academic-dark-surface-muted"
                    dateTime={blog.date}
                  >
                    <span className="text-xs font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
                      {date.month}
                    </span>
                    <span className="mt-1 text-3xl font-bold leading-none text-academic-text dark:text-academic-dark-text">
                      {date.day}
                    </span>
                    <span className="mt-1 text-xs font-medium text-academic-muted dark:text-academic-dark-muted">
                      {date.year}
                    </span>
                  </time>

                  <div>
                    <Link className="group no-underline" href={blogHref(blog)}>
                      <h2 className="text-xl font-semibold leading-snug text-academic-text transition-colors group-hover:text-academic-accent dark:text-academic-dark-text dark:group-hover:text-academic-dark-accent">
                        {blog.title}
                      </h2>
                    </Link>
                    <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                      {blog.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {blog.readingTime ? (
                        <span className="rounded-full bg-academic-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-normal text-academic-accent dark:bg-academic-dark-surface-muted dark:text-academic-dark-accent">
                          {blog.readingTime}
                        </span>
                      ) : null}
                      {blog.tags?.map((tag) => (
                        <span
                          className="rounded-full bg-academic-bg-subtle px-3 py-1 text-xs font-medium text-academic-muted dark:bg-academic-dark-surface-muted dark:text-academic-dark-muted"
                          key={`${blog.id}-${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ol>
    </ListPage>
  );
}
