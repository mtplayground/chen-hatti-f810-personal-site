import Link from "next/link";
import { siteContent } from "../../data/config";
import type { BlogItem } from "../../data/types";
import { Card, SectionHeading, ViewAllLink } from "../ui";

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

export function BlogsSection() {
  const { blogs } = siteContent;

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section aria-label="Blogs">
      <SectionHeading
        action={<ViewAllLink href="/blog" label="View all blogs" />}
        description="Recent writing, research notes, and project updates."
        title="Blog"
      />

      <div className="grid gap-card md:flex md:overflow-x-auto md:pb-3">
        {blogs.map((blog) => {
          const date = formatBlogDate(blog.date);

          return (
            <Card className="md:min-w-[300px] md:flex-1" key={blog.id}>
              <Link className="group flex h-full gap-card no-underline" href={blogHref(blog)}>
                <time
                  className="flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-card border border-academic-border bg-academic-bg-subtle text-center dark:border-academic-dark-border dark:bg-academic-dark-surface-muted"
                  dateTime={blog.date}
                >
                  <span className="text-xs font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
                    {date.month}
                  </span>
                  <span className="mt-1 text-2xl font-bold leading-none text-academic-text dark:text-academic-dark-text">
                    {date.day}
                  </span>
                  <span className="mt-1 text-xs font-medium text-academic-muted dark:text-academic-dark-muted">
                    {date.year}
                  </span>
                </time>

                <div>
                  <h3 className="text-lg font-semibold leading-snug text-academic-text transition-colors group-hover:text-academic-accent dark:text-academic-dark-text dark:group-hover:text-academic-dark-accent">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {blog.excerpt}
                  </p>
                  {blog.readingTime ? (
                    <p className="mt-3 text-xs font-semibold uppercase tracking-normal text-academic-muted dark:text-academic-dark-muted">
                      {blog.readingTime}
                    </p>
                  ) : null}
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
