import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { ListPage } from "../../components/layout/list-page";
import { Card } from "../../components/ui";
import { siteContent } from "../../data/config";

export const metadata: Metadata = {
  title: "Education | chen-hatti-f810-personal-site",
  description: "Full education listing"
};

function joinText(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" - ");
}

export default function EducationPage() {
  return (
    <ListPage description="Academic background, degrees, and training." title="Education">
      <ol className="space-y-card">
        {siteContent.education.map((item) => {
          const degree = item.field ? `${item.degree} in ${item.field}` : item.degree;
          const dates = joinText([item.startDate, item.endDate]);

          return (
            <li key={item.id}>
              <Card className="grid gap-card sm:grid-cols-[112px_minmax(0,1fr)]">
                {item.logo ? (
                  <div className="relative h-24 w-24 overflow-hidden rounded-card border border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface-muted">
                    <Image
                      alt={item.logo.alt}
                      className="object-cover"
                      fill
                      sizes="96px"
                      src={item.logo.src}
                    />
                  </div>
                ) : null}

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold leading-snug text-academic-text dark:text-academic-dark-text">
                        {item.institution}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-academic-accent dark:text-academic-dark-accent">
                        {degree}
                      </p>
                    </div>
                    <p className="rounded-full bg-academic-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-normal text-academic-accent dark:bg-academic-dark-surface-muted dark:text-academic-dark-accent">
                      {dates}
                    </p>
                  </div>

                  {item.location ? (
                    <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-academic-muted dark:text-academic-dark-muted">
                      <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                      <span>{item.location}</span>
                    </p>
                  ) : null}
                  {item.description ? (
                    <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                      {item.description}
                    </p>
                  ) : null}
                  {item.highlights?.length ? (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          className="flex gap-2 text-sm text-academic-muted dark:text-academic-dark-muted"
                          key={`${item.id}-${highlight}`}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-academic-accent dark:bg-academic-dark-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Card>
            </li>
          );
        })}
      </ol>
    </ListPage>
  );
}
