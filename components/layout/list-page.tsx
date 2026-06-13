import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface ListPageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ListPage({ title, description, children }: ListPageProps) {
  return (
    <main className="space-y-card-lg">
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-academic-accent no-underline transition-colors hover:text-academic-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:text-academic-dark-accent dark:hover:text-academic-dark-accent-hover dark:focus-visible:outline-academic-dark-accent"
        href="/"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
        <span>Back to home</span>
      </Link>

      <header>
        <h1 className="text-3xl font-bold text-academic-text dark:text-academic-dark-text">
          {title}
        </h1>
        <div className="mt-3 h-1 w-12 rounded-full bg-academic-accent dark:bg-academic-dark-accent" />
        {description ? (
          <p className="mt-4 max-w-3xl text-base text-academic-muted dark:text-academic-dark-muted">
            {description}
          </p>
        ) : null}
      </header>

      {children}
    </main>
  );
}
