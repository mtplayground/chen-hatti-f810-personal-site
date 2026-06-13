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
        <div className="grid gap-card-lg lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-normal text-academic-accent dark:text-academic-dark-accent">
              {profile.title}
            </p>
            <h1
              className="mt-3 text-4xl font-bold leading-tight text-academic-text dark:text-academic-dark-text sm:text-5xl"
              id="hero-heading"
            >
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-academic-muted dark:text-academic-dark-muted">
              {profile.affiliation}
            </p>
            <p className="mt-card max-w-2xl text-base text-academic-muted dark:text-academic-dark-muted">
              {profile.researchIntro}
            </p>
            <div className="mt-card flex flex-wrap gap-3" aria-label="Social links">
              {profile.socials.map((social) => (
                <SocialButton
                  className="rounded-full border-academic-border bg-academic-surface shadow-card hover:bg-academic-accent-subtle dark:border-academic-dark-border dark:bg-academic-dark-surface dark:hover:bg-academic-dark-surface-muted"
                  key={social.href}
                  social={social}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-card bg-academic-accent-subtle dark:bg-academic-dark-accent-soft sm:min-h-[360px]">
            <Image
              alt={profile.heroImage.alt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 440px, 100vw"
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
