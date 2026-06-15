import { BookOpen } from "lucide-react";
import { siteContent } from "../../data/config";
import type { ExperienceItem, TeachingItem } from "../../data/types";
import { Card, SectionHeading, ViewAllLink } from "../ui";

function joinText(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" - ");
}

function experienceDates(item: ExperienceItem) {
  return joinText([item.startDate, item.current ? "Present" : item.endDate]);
}

function teachingMeta(item: TeachingItem) {
  return joinText([item.courseCode, item.role]);
}

function teachingTerm(item: TeachingItem) {
  return joinText([item.term, item.year, item.institution]);
}

export function ExperienceTeachingSection() {
  const { experience, teaching } = siteContent;

  if (experience.length === 0 && teaching.length === 0) {
    return null;
  }

  return (
    <section aria-label="Experience and teaching">
      <SectionHeading
        description="Research experience, academic appointments, and teaching activity."
        title="Experience & Teaching"
      />

      <div className="grid gap-card lg:grid-cols-2">
        <Card className="h-full">
          <div className="mb-card flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-academic-text dark:text-academic-dark-text">
                Experience
              </h3>
              <p className="mt-1 text-sm text-academic-muted dark:text-academic-dark-muted">
                Selected roles and projects
              </p>
            </div>
            <ViewAllLink href="/experience" label="View all" />
          </div>

          <ol className="space-y-4">
            {experience.map((item, index) => (
              <li className="relative pl-6" key={item.id}>
                {index < experience.length - 1 ? (
                  <div className="absolute left-[4px] top-4 h-[calc(100%+1rem)] w-px bg-academic-border dark:bg-academic-dark-border" />
                ) : null}
                <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-academic-bg-subtle bg-academic-accent dark:border-academic-dark-surface dark:bg-academic-dark-accent" />

                <p className="text-xs font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
                  {experienceDates(item)}
                </p>
                <h4 className="mt-1 text-base font-semibold text-academic-text dark:text-academic-dark-text">
                  {item.role}
                </h4>
                <p className="mt-1 text-sm font-medium text-academic-muted dark:text-academic-dark-muted">
                  {joinText([item.organization, item.location])}
                </p>
                {item.description ? (
                  <p className="mt-2 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {item.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Card>

        <Card className="h-full">
          <div className="mb-card flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-academic-text dark:text-academic-dark-text">
                Teaching
              </h3>
              <p className="mt-1 text-sm text-academic-muted dark:text-academic-dark-muted">
                Courses, lectures, and workshops
              </p>
            </div>
            <ViewAllLink href="/teaching" label="View all" />
          </div>

          <ul className="divide-y divide-academic-border dark:divide-academic-dark-border">
            {teaching.map((item) => (
              <li className="flex gap-3 py-3 first:pt-0 last:pb-0" key={item.id}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card border border-academic-border bg-academic-accent-subtle text-academic-accent dark:border-academic-dark-border dark:bg-academic-dark-accent-soft dark:text-academic-dark-accent">
                  <BookOpen aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-semibold text-academic-text dark:text-academic-dark-text">
                    {item.courseTitle}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-academic-accent dark:text-academic-dark-accent">
                    {teachingMeta(item)}
                  </p>
                  <p className="mt-1 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {teachingTerm(item)}
                  </p>
                  {item.description ? (
                    <p className="mt-2 text-sm text-academic-muted dark:text-academic-dark-muted">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
