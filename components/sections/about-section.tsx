import { Download } from "lucide-react";
import Image from "next/image";
import { siteContent } from "../../data/config";
import { Card, SectionHeading } from "../ui";

export function AboutSection() {
  const { profile } = siteContent;

  return (
    <section aria-labelledby="about-heading">
      <Card>
        <div className="grid gap-card-lg lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center">
          <div className="mx-auto w-full max-w-[320px]">
            <div className="relative aspect-square overflow-hidden rounded-full border border-academic-border bg-academic-accent-subtle shadow-card dark:border-academic-dark-border dark:bg-academic-dark-surface-muted">
              <Image
                alt={profile.avatar.alt}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                src={profile.avatar.src}
              />
            </div>
          </div>

          <div>
            <SectionHeading className="mb-card" title="About Me" />
            <div className="space-y-4 text-base text-academic-muted dark:text-academic-dark-muted">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              className="mt-card inline-flex items-center gap-2 rounded-card bg-academic-accent px-4 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-academic-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:bg-academic-dark-accent dark:text-academic-dark-bg dark:hover:bg-academic-dark-accent-hover dark:focus-visible:outline-academic-dark-accent"
              href={profile.cvHref}
            >
              <Download aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
