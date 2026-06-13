import type { Metadata } from "next";
import { ListPage } from "../../components/layout/list-page";
import { Card } from "../../components/ui";
import { siteContent } from "../../data/config";

export const metadata: Metadata = {
  title: "Research | chen-hatti-f810-personal-site",
  description: "Research overview"
};

export default function ResearchPage() {
  const { profile } = siteContent;

  return (
    <ListPage description={profile.researchIntro} title="Research">
      <div className="grid gap-card lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Card className="h-full">
          <p className="text-sm font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-academic-text dark:text-academic-dark-text">
            Research Direction
          </h2>
          <p className="mt-4 text-base text-academic-muted dark:text-academic-dark-muted">
            {profile.researchIntro}
          </p>
        </Card>

        <Card className="h-full">
          <p className="text-sm font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
            Areas
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-academic-text dark:text-academic-dark-text">
            Research Areas
          </h2>

          <ol className="mt-card grid gap-3 sm:grid-cols-2">
            {profile.researchInterests.map((interest, index) => (
              <li
                className="flex gap-3 rounded-card border border-academic-border bg-academic-bg-subtle p-4 dark:border-academic-dark-border dark:bg-academic-dark-surface-muted"
                key={interest}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-academic-accent text-sm font-bold text-white dark:bg-academic-dark-accent dark:text-academic-dark-bg">
                  {index + 1}
                </span>
                <span className="pt-1 text-base font-semibold text-academic-text dark:text-academic-dark-text">
                  {interest}
                </span>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </ListPage>
  );
}
