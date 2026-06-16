import Link from "next/link";
import { siteContent } from "../../data/config";
import type { BlogItem } from "../../data/types";
import { SectionHeading, ViewAllLink } from "../ui";

function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));
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

      <ol className="border-y border-academic-border dark:border-academic-dark-border">
        {blogs.map((blog) => (
          <li
            className="border-b border-academic-border py-card last:border-b-0 dark:border-academic-dark-border"
            key={blog.id}
          >
            <Link
              className="group grid gap-2 no-underline sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-card"
              href={blogHref(blog)}
            >
              <time
                className="text-sm font-semibold text-academic-accent dark:text-academic-dark-accent"
                dateTime={blog.date}
              >
                {formatBlogDate(blog.date)}
              </time>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold leading-snug text-academic-text transition-colors group-hover:text-academic-accent dark:text-academic-dark-text dark:group-hover:text-academic-dark-accent">
                    {blog.title}
                  </h3>
                  {blog.readingTime ? (
                    <span className="text-xs font-semibold uppercase tracking-normal text-academic-muted dark:text-academic-dark-muted">
                      {blog.readingTime}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-xs text-academic-muted dark:text-academic-dark-muted">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
