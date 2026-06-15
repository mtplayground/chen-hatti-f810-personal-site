import { Trophy } from "lucide-react";
import Image from "next/image";
import { siteContent } from "../../data/config";
import type { AwardItem, EducationItem } from "../../data/types";
import { Card, SectionHeading, ViewAllLink } from "../ui";

function joinText(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" - ");
}

function educationDegree(item: EducationItem) {
  return item.field ? `${item.degree} in ${item.field}` : item.degree;
}

function educationDates(item: EducationItem) {
  return joinText([item.startDate, item.endDate]);
}

function EducationRow({ item }: { item: EducationItem }) {
  return (
    <li className="flex gap-3 border-b border-academic-border pb-3 last:border-b-0 last:pb-0 dark:border-academic-dark-border">
      {item.logo ? (
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-card border border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface-muted">
          <Image alt={item.logo.alt} className="object-cover" fill sizes="48px" src={item.logo.src} />
        </div>
      ) : null}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <p className="text-base font-semibold text-academic-text dark:text-academic-dark-text">
            {item.institution}
          </p>
          <p className="text-xs font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
            {educationDates(item)}
          </p>
        </div>
        <p className="mt-1 text-sm font-medium text-academic-accent dark:text-academic-dark-accent">
          {educationDegree(item)}
        </p>
        {item.description ? (
          <p className="mt-2 text-sm text-academic-muted dark:text-academic-dark-muted">
            {item.description}
          </p>
        ) : null}
      </div>
    </li>
  );
}

function AwardRow({ item }: { item: AwardItem }) {
  return (
    <li className="flex gap-3 border-b border-academic-border pb-3 last:border-b-0 last:pb-0 dark:border-academic-dark-border">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-academic-border bg-academic-accent-subtle text-academic-accent dark:border-academic-dark-border dark:bg-academic-dark-accent-soft dark:text-academic-dark-accent">
        <Trophy aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <p className="text-base font-semibold text-academic-text dark:text-academic-dark-text">
            {item.title}
          </p>
          <p className="text-xs font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
            {item.year}
          </p>
        </div>
        <p className="mt-1 text-sm font-medium text-academic-accent dark:text-academic-dark-accent">
          {item.organization}
        </p>
        {item.description ? (
          <p className="mt-2 text-sm text-academic-muted dark:text-academic-dark-muted">
            {item.description}
          </p>
        ) : null}
      </div>
    </li>
  );
}

export function EducationAwardsSection() {
  const { education, awards } = siteContent;

  if (education.length === 0 && awards.length === 0) {
    return null;
  }

  return (
    <section aria-label="Education and awards">
      <SectionHeading
        description="Academic background and selected recognition."
        title="Education & Awards"
      />

      <div className="grid gap-card lg:grid-cols-2">
        <Card className="h-full">
          <div className="mb-card flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-academic-text dark:text-academic-dark-text">
                Education
              </h3>
              <p className="mt-1 text-sm text-academic-muted dark:text-academic-dark-muted">
                {education.length} {education.length === 1 ? "entry" : "entries"}
              </p>
            </div>
            <ViewAllLink href="/education" label="View all" />
          </div>

          <ol className="space-y-3">
            {education.map((item) => (
              <EducationRow item={item} key={item.id} />
            ))}
          </ol>
        </Card>

        <Card className="h-full">
          <div className="mb-card flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-academic-text dark:text-academic-dark-text">
                Awards
              </h3>
              <p className="mt-1 text-sm text-academic-muted dark:text-academic-dark-muted">
                {awards.length} {awards.length === 1 ? "entry" : "entries"}
              </p>
            </div>
            <ViewAllLink href="/awards" label="View all" />
          </div>

          <ol className="space-y-3">
            {awards.map((item) => (
              <AwardRow item={item} key={item.id} />
            ))}
          </ol>
        </Card>
      </div>
    </section>
  );
}
