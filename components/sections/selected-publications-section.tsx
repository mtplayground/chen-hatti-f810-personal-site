import { BookOpen, Code2, FileText } from "lucide-react";
import Image from "next/image";
import { siteContent } from "../../data/config";
import type { PublicationItem } from "../../data/types";
import { Card, SectionHeading, ViewAllLink } from "../ui";

const visibleLinkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-academic-border px-3 py-1.5 text-sm font-semibold text-academic-accent no-underline transition-colors hover:border-academic-accent hover:text-academic-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:border-academic-dark-border dark:text-academic-dark-accent dark:hover:border-academic-dark-accent dark:hover:text-academic-dark-accent-hover dark:focus-visible:outline-academic-dark-accent";

function selectedPublications() {
  const selected = siteContent.publications.filter((publication) => publication.selected);

  return selected.length > 0 ? selected : siteContent.publications.slice(0, 3);
}

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function bibtexHref(publication: PublicationItem) {
  const bibtex = publication.links?.bibtex;

  if (!bibtex) {
    return undefined;
  }

  return isExternalHref(bibtex) || bibtex.startsWith("/")
    ? bibtex
    : `data:text/plain;charset=utf-8,${encodeURIComponent(bibtex)}`;
}

function PublicationAuthors({ publication }: { publication: PublicationItem }) {
  return (
    <p className="mt-2 text-sm text-academic-muted dark:text-academic-dark-muted">
      {publication.authors.map((author, index) => (
        <span key={`${publication.id}-${author.name}`}>
          <span
            className={
              author.isSelf ? "font-semibold text-academic-text dark:text-academic-dark-text" : ""
            }
          >
            {author.name}
          </span>
          {index < publication.authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

function PublicationLinks({ publication }: { publication: PublicationItem }) {
  const links = publication.links;
  const bibHref = bibtexHref(publication);

  if (!links?.pdf && !links?.code && !bibHref) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
      {links?.pdf ? (
        <a className={visibleLinkClass} href={links.pdf}>
          <FileText aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          <span>PDF</span>
        </a>
      ) : null}
      {links?.code ? (
        <a
          className={visibleLinkClass}
          href={links.code}
          rel={isExternalHref(links.code) ? "noreferrer" : undefined}
          target={isExternalHref(links.code) ? "_blank" : undefined}
        >
          <Code2 aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          <span>Code</span>
        </a>
      ) : null}
      {bibHref ? (
        <a
          className={visibleLinkClass}
          download={
            !isExternalHref(bibHref) && !bibHref.startsWith("/")
              ? `${publication.id}.bib`
              : undefined
          }
          href={bibHref}
          rel={isExternalHref(bibHref) ? "noreferrer" : undefined}
          target={isExternalHref(bibHref) ? "_blank" : undefined}
        >
          <BookOpen aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          <span>BibTeX</span>
        </a>
      ) : null}
    </div>
  );
}

export function SelectedPublicationsSection() {
  const publications = selectedPublications();

  if (publications.length === 0) {
    return null;
  }

  return (
    <section aria-label="Selected publications">
      <SectionHeading
        action={<ViewAllLink href="/publications" label="View all publications" />}
        description="A selection of recent papers, systems, and research artifacts."
        title="Selected Publications"
      />

      <Card>
        <div className="divide-y divide-academic-border dark:divide-academic-dark-border">
          {publications.map((publication) => (
            <article
              className="grid gap-card py-card first:pt-0 last:pb-0 md:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[160px_minmax(0,1fr)_auto] lg:items-start"
              key={publication.id}
            >
              {publication.thumbnail ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface-muted">
                  <Image
                    alt={publication.thumbnail.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 160px, (min-width: 768px) 150px, 100vw"
                    src={publication.thumbnail.src}
                  />
                </div>
              ) : (
                <div className="hidden rounded-card border border-academic-border bg-academic-bg-subtle md:block dark:border-academic-dark-border dark:bg-academic-dark-surface-muted" />
              )}

              <div className="min-w-0">
                <h3 className="text-xl font-semibold leading-snug text-academic-accent dark:text-academic-dark-accent">
                  {publication.title}
                </h3>
                <PublicationAuthors publication={publication} />
                <p className="mt-2 text-sm font-semibold text-academic-text dark:text-academic-dark-text">
                  {publication.venue} - {publication.year}
                </p>
                {publication.abstract ? (
                  <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {publication.abstract}
                  </p>
                ) : null}
              </div>

              <div className="lg:min-w-28">
                <PublicationLinks publication={publication} />
              </div>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}
