import type { Metadata } from "next";
import { BookOpen, ExternalLink } from "lucide-react";
import { ListPage } from "../../components/layout/list-page";
import { Card } from "../../components/ui";
import { siteContent } from "../../data/config";
import type { ContentLink, TeachingItem } from "../../data/types";

export const metadata: Metadata = {
  title: "Teaching | chen-hatti-f810-personal-site",
  description: "Full teaching listing"
};

function joinText(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" - ");
}

function teachingMeta(item: TeachingItem) {
  return joinText([item.courseCode, item.role]);
}

function teachingTerm(item: TeachingItem) {
  return joinText([item.term, item.year, item.institution]);
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

export default function TeachingPage() {
  return (
    <ListPage description="Courses, lectures, labs, and workshops." title="Teaching">
      <ol className="space-y-card">
        {siteContent.teaching.map((item) => (
          <li key={item.id}>
            <Card className="grid gap-card sm:grid-cols-[72px_minmax(0,1fr)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-card border border-academic-border bg-academic-accent-subtle text-academic-accent dark:border-academic-dark-border dark:bg-academic-dark-accent-soft dark:text-academic-dark-accent">
                <BookOpen aria-hidden="true" className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold leading-snug text-academic-text dark:text-academic-dark-text">
                      {item.courseTitle}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-academic-accent dark:text-academic-dark-accent">
                      {teachingMeta(item)}
                    </p>
                  </div>
                  <p className="rounded-full bg-academic-bg-subtle px-3 py-1 text-xs font-semibold uppercase tracking-normal text-academic-muted dark:bg-academic-dark-surface-muted dark:text-academic-dark-muted">
                    {joinText([item.term, item.year])}
                  </p>
                </div>

                <p className="mt-3 text-sm font-medium text-academic-muted dark:text-academic-dark-muted">
                  {item.institution}
                </p>
                {item.description ? (
                  <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {item.description}
                  </p>
                ) : null}
                {item.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <ResourceLink key={`${item.id}-${link.label}`} link={link} />
                    ))}
                  </div>
                ) : null}
                <p className="sr-only">{teachingTerm(item)}</p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </ListPage>
  );
}
