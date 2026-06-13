import { Trophy } from "lucide-react";
import Image from "next/image";
import { siteContent } from "../../data/config";
import { Card, SectionHeading, ViewAllLink } from "../ui";

function joinText(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" - ");
}

export function EducationAwardsSection() {
  const education = siteContent.education[0];
  const award = siteContent.awards[0];

  if (!education || !award) {
    return null;
  }

  const degree = education.field ? `${education.degree} in ${education.field}` : education.degree;
  const educationDates = joinText([education.startDate, education.endDate]);

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
                {educationDates}
              </p>
            </div>
            <ViewAllLink href="/education" label="View all" />
          </div>

          <div className="flex gap-card">
            {education.logo ? (
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-card border border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface-muted">
                <Image
                  alt={education.logo.alt}
                  className="object-cover"
                  fill
                  sizes="80px"
                  src={education.logo.src}
                />
              </div>
            ) : null}
            <div>
              <p className="text-lg font-semibold text-academic-text dark:text-academic-dark-text">
                {education.institution}
              </p>
              <p className="mt-1 text-sm font-medium text-academic-accent dark:text-academic-dark-accent">
                {degree}
              </p>
              {education.description ? (
                <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                  {education.description}
                </p>
              ) : null}
            </div>
          </div>
        </Card>

        <Card className="h-full">
          <div className="mb-card flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-academic-text dark:text-academic-dark-text">
                Awards
              </h3>
              <p className="mt-1 text-sm text-academic-muted dark:text-academic-dark-muted">
                {award.year}
              </p>
            </div>
            <ViewAllLink href="/awards" label="View all" />
          </div>

          <div className="flex gap-card">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-card border border-academic-border bg-academic-accent-subtle text-academic-accent dark:border-academic-dark-border dark:bg-academic-dark-accent-soft dark:text-academic-dark-accent">
              <Trophy aria-hidden="true" className="h-9 w-9" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-lg font-semibold text-academic-text dark:text-academic-dark-text">
                {award.title}
              </p>
              <p className="mt-1 text-sm font-medium text-academic-accent dark:text-academic-dark-accent">
                {award.organization}
              </p>
              {award.description ? (
                <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                  {award.description}
                </p>
              ) : null}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
