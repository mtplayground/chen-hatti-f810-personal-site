import { siteContent } from "../../data/config";
import { SocialButton } from "../ui";

export function Footer() {
  const { profile } = siteContent;
  const year = new Date().getFullYear();
  const tagline = `${profile.title} - ${profile.affiliation}`;

  return (
    <footer className="border-t border-academic-border bg-academic-bg-subtle dark:border-academic-dark-border dark:bg-academic-dark-bg">
      <div className="mx-auto grid w-full max-w-[1200px] gap-4 px-site-x py-6 text-sm text-academic-muted sm:px-site-x-lg lg:grid-cols-3 lg:items-center">
        <p className="text-center lg:text-left">
          &copy; {year} {profile.name}
        </p>

        <nav aria-label="Social links" className="flex items-center justify-center gap-2">
          {profile.socials.map((social) => (
            <SocialButton key={social.href} social={social} />
          ))}
        </nav>

        <p className="text-center lg:text-right">{tagline}</p>
      </div>
    </footer>
  );
}
