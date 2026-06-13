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
    <div className="mt-4 flex flex-wrap gap-2">
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
  const thumbnails = publications.filter((publication) => publication.thumbnail).slice(0, 3);

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

      <Card className="grid gap-card lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="grid grid-cols-2 gap-3">
          {thumbnails.map((publication, index) =>
            publication.thumbnail ? (
              <div
                className={[
                  "relative min-h-40 overflow-hidden rounded-card border border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface-muted",
                  index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={publication.id}
              >
                <Image
                  alt={publication.thumbnail.alt}
                  className="object-cover"
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 430px, 100vw"
                      : "(min-width: 1024px) 210px, 50vw"
                  }
                  src={publication.thumbnail.src}
                />
              </div>
            ) : null
          )}
        </div>

        <div className="space-y-card">
          {publications.map((publication) => (
            <article
              className="border-b border-academic-border pb-card last:border-b-0 last:pb-0 dark:border-academic-dark-border"
              key={publication.id}
            >
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
              <PublicationLinks publication={publication} />
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}
