import { Download } from "lucide-react";
import Image from "next/image";
import { siteContent } from "../../data/config";
import { Card, SocialButton } from "../ui";

function NetworkDecoration() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full text-academic-accent opacity-25 dark:text-academic-dark-accent dark:opacity-30"
      fill="none"
      viewBox="0 0 520 360"
    >
      <path d="M62 257 170 165 268 214 384 104 462 151" stroke="currentColor" strokeWidth="1.5" />
      <path d="M94 102 170 165 229 77 384 104" stroke="currentColor" strokeWidth="1.5" />
      <path d="M268 214 330 290 462 151" stroke="currentColor" strokeWidth="1.5" />
      {[
        [62, 257],
        [94, 102],
        [170, 165],
        [229, 77],
        [268, 214],
        [330, 290],
        [384, 104],
        [462, 151]
      ].map(([cx, cy]) => (
        <circle cx={cx} cy={cy} fill="currentColor" key={`${cx}-${cy}`} r="5" />
      ))}
    </svg>
  );
}

export function HeroSection() {
  const { profile } = siteContent;

  return (
    <section aria-labelledby="hero-heading">
      <Card className="overflow-hidden">
        <div className="grid gap-card-lg lg:grid-cols-[180px_minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-center">
          <div className="mx-auto w-full max-w-[180px] lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-full border border-academic-border bg-academic-accent-subtle shadow-card dark:border-academic-dark-border dark:bg-academic-dark-accent-soft">
              <Image
                alt={profile.avatar.alt}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 180px, 45vw"
                src={profile.avatar.src}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
              {profile.title}
            </p>
            <h1
              className="mt-2 text-4xl font-bold leading-tight text-academic-text dark:text-academic-dark-text sm:text-5xl"
              id="hero-heading"
            >
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-academic-muted dark:text-academic-dark-muted">
              {profile.affiliation}
            </p>
            <p className="mt-card max-w-2xl text-base text-academic-muted dark:text-academic-dark-muted">
              {profile.researchIntro}
            </p>
            <div className="mt-3 space-y-3 text-base text-academic-muted dark:text-academic-dark-muted">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-card flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-card bg-academic-accent px-4 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-academic-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent dark:bg-academic-dark-accent dark:text-academic-dark-bg dark:hover:bg-academic-dark-accent-hover dark:focus-visible:outline-academic-dark-accent"
                href={profile.cvHref}
              >
                <Download aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                <span>Download CV</span>
              </a>
              <div className="flex flex-wrap gap-2" aria-label="Social links">
                {profile.socials.map((social) => (
                  <SocialButton
                    className="rounded-full border-academic-border bg-academic-surface shadow-card hover:bg-academic-accent-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface dark:hover:bg-academic-dark-surface-muted"
                    key={social.href}
                    social={social}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-card bg-academic-accent-subtle dark:bg-academic-dark-accent-soft sm:min-h-[320px] lg:min-h-[380px]">
            <Image
              alt={profile.heroImage.alt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 360px, 100vw"
              src={profile.heroImage.src}
            />
            <div className="absolute inset-0 bg-academic-accent-subtle/25 dark:bg-academic-dark-bg/20" />
            <NetworkDecoration />
          </div>
        </div>
      </Card>
    </section>
  );
}
