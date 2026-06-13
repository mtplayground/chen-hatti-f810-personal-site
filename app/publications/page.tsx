import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  Code2,
  ExternalLink,
  FileText,
  Link as LinkIcon,
  PlayCircle,
  Presentation
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ListPage } from "../../components/layout/list-page";
import { Card } from "../../components/ui";
import { siteContent } from "../../data/config";
import type { PublicationItem } from "../../data/types";

export const metadata: Metadata = {
  title: "Publications | chen-hatti-f810-personal-site",
  description: "Full publications listing"
};

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-academic-border px-3 py-1.5 text-sm font-semibold text-academic-accent no-underline transition-colors hover:border-academic-accent hover:text-academic-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:border-academic-dark-border dark:text-academic-dark-accent dark:hover:border-academic-dark-accent dark:hover:text-academic-dark-accent-hover dark:focus-visible:outline-academic-dark-accent";

interface PublicationResourceLink {
  label: string;
  href: string;
  icon: LucideIcon;
  download?: string;
}

function hasLink(link: PublicationResourceLink | undefined): link is PublicationResourceLink {
  return Boolean(link);
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
  const publicationLinks = [
    links?.pdf ? { label: "PDF", href: links.pdf, icon: FileText } : undefined,
    links?.code ? { label: "Code", href: links.code, icon: Code2 } : undefined,
    links?.project ? { label: "Project", href: links.project, icon: LinkIcon } : undefined,
    links?.doi ? { label: "DOI", href: links.doi, icon: ExternalLink } : undefined,
    links?.slides ? { label: "Slides", href: links.slides, icon: Presentation } : undefined,
    links?.video ? { label: "Video", href: links.video, icon: PlayCircle } : undefined,
    bibHref
      ? { label: "BibTeX", href: bibHref, icon: BookOpen, download: `${publication.id}.bib` }
      : undefined
  ].filter(hasLink);

  if (publicationLinks.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {publicationLinks.map((link) => {
        const Icon = link.icon;
        const isDataBibtex = link.href.startsWith("data:");
        const external = isExternalHref(link.href);

        return (
          <a
            className={linkClass}
            download={isDataBibtex ? link.download : undefined}
            href={link.href}
            key={`${publication.id}-${link.label}`}
            rel={external ? "noreferrer" : undefined}
            target={external ? "_blank" : undefined}
          >
            <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <ListPage
      description="A complete list of publications, papers, and research artifacts."
      title="Publications"
    >
      <ol className="space-y-card">
        {siteContent.publications.map((publication) => (
          <li key={publication.id}>
            <Card className="grid gap-card lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
              {publication.thumbnail ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface-muted">
                  <Image
                    alt={publication.thumbnail.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 220px, 100vw"
                    src={publication.thumbnail.src}
                  />
                </div>
              ) : null}

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-academic-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-normal text-academic-accent dark:bg-academic-dark-surface-muted dark:text-academic-dark-accent">
                    {publication.type}
                  </span>
                  {publication.selected ? (
                    <span className="rounded-full border border-academic-border px-3 py-1 text-xs font-semibold uppercase tracking-normal text-academic-muted dark:border-academic-dark-border dark:text-academic-dark-muted">
                      Selected
                    </span>
                  ) : null}
                </div>

                <h2 className="mt-3 text-xl font-semibold leading-snug text-academic-accent dark:text-academic-dark-accent">
                  {publication.title}
                </h2>
                <PublicationAuthors publication={publication} />
                <p className="mt-2 text-sm font-semibold text-academic-text dark:text-academic-dark-text">
                  {publication.venue} - {publication.year}
                </p>
                {publication.abstract ? (
                  <p className="mt-3 text-sm text-academic-muted dark:text-academic-dark-muted">
                    {publication.abstract}
                  </p>
                ) : null}
                {publication.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <span
                        className="rounded-full bg-academic-bg-subtle px-3 py-1 text-xs font-medium text-academic-muted dark:bg-academic-dark-surface-muted dark:text-academic-dark-muted"
                        key={`${publication.id}-${tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                <PublicationLinks publication={publication} />
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </ListPage>
  );
}
