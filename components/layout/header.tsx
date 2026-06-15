"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "../../data/config";
import type { NavItem } from "../../data/types";
import { ThemeToggle } from "../theme/theme-toggle";

function isActiveNavItem(item: NavItem, pathname: string) {
  if (item.external || !item.activeMatch) {
    return false;
  }

  if (item.activeMatch === "/") {
    return pathname === "/";
  }

  return pathname === item.activeMatch || pathname.startsWith(`${item.activeMatch}/`);
}

export function Header() {
  const pathname = usePathname();
  const { nav, profile } = siteContent;

  return (
    <header className="sticky top-0 z-40 border-b border-academic-border bg-academic-bg-subtle/95 backdrop-blur dark:border-academic-dark-border dark:bg-academic-dark-bg/95">
      <div className="mx-auto flex min-h-14 w-full max-w-[1200px] items-center justify-between gap-4 px-site-x py-2 sm:px-site-x-lg">
        <Link
          className="shrink-0 text-xl font-bold tracking-tight text-academic-text no-underline transition-colors hover:text-academic-accent sm:text-2xl dark:text-academic-dark-text dark:hover:text-academic-dark-accent"
          href="/"
        >
          {profile.name}
        </Link>

        <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
          <nav aria-label="Primary navigation" className="min-w-0 overflow-x-auto">
            <div className="flex items-center gap-1 sm:gap-2">
              {nav.map((item) => {
                const active = isActiveNavItem(item, pathname);
                const className = [
                  "relative inline-flex h-9 shrink-0 items-center gap-1 px-2.5 text-sm font-medium no-underline transition-colors sm:px-3",
                  "text-academic-muted hover:text-academic-accent dark:text-academic-dark-muted dark:hover:text-academic-dark-accent",
                  "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-5 after:-translate-x-1/2 after:rounded-full after:bg-transparent after:transition-colors",
                  active
                    ? "text-academic-accent after:bg-academic-accent dark:text-academic-dark-accent dark:after:bg-academic-dark-accent"
                    : ""
                ]
                  .filter(Boolean)
                  .join(" ");

                if (item.external) {
                  return (
                    <a
                      aria-label={item.ariaLabel}
                      className={className}
                      href={item.href}
                      key={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>{item.label}</span>
                      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </a>
                  );
                }

                return (
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={className}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
