import type { Metadata } from "next";
import Image from "next/image";
import { Trophy } from "lucide-react";
import { ListPage } from "../../components/layout/list-page";
import { Card } from "../../components/ui";
import { siteContent } from "../../data/config";

export const metadata: Metadata = {
  title: "Awards | chen-hatti-f810-personal-site",
  description: "Full awards listing"
};

export default function AwardsPage() {
  return (
    <ListPage description="Awards, fellowships, honors, and recognition." title="Awards">
      <ol className="space-y-card">
        {siteContent.awards.map((award) => (
          <li key={award.id}>
            <Card className="grid gap-card sm:grid-cols-[112px_minmax(0,1fr)]">
              {award.logo ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-card border border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface-muted">
                  <Image
                    alt={award.logo.alt}
                    className="object-cover"
                    fill
                    sizes="96px"
                    src={award.logo.src}
                  />
                </div>
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-card border border-academic-border bg-academic-accent-subtle text-academic-accent dark:border-academic-dark-border dark:bg-academic-dark-accent-soft dark:text-academic-dark-accent">
                  <Trophy aria-hidden="true" className="h-10 w-10" strokeWidth={1.8} />
                </div>
              )}

              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold leading-snug text-academic-text dark:text-academic-dark-text">
                      {award.title}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-academic-accent dark:text-academic-dark-accent">
                      {award.organization}
                    </p>
                  </div>
                  <p className="rounded-full bg-academic-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-normal text-academic-accent dark:bg-academic-dark-accent-soft dark:text-academic-dark-accent">
                    {award.year}
                  </p>
                </div>
                {award.description ? (
                  <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {award.description}
                  </p>
                ) : null}
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </ListPage>
  );
}
