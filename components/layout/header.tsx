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
      <div className="mx-auto flex min-h-16 w-full max-w-[1200px] flex-col gap-3 px-site-x py-3 sm:px-site-x-lg lg:flex-row lg:items-center lg:justify-between">
        <Link
          className="text-base font-semibold text-academic-text no-underline hover:text-academic-accent dark:text-academic-dark-text dark:hover:text-academic-dark-accent"
          href="/"
        >
          {profile.name}
        </Link>

        <div className="flex items-center gap-3">
          <nav
            aria-label="Primary navigation"
            className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto"
          >
            {nav.map((item) => {
              const active = isActiveNavItem(item, pathname);
              const className = [
                "relative inline-flex h-10 shrink-0 items-center gap-1.5 px-3 text-sm font-medium no-underline transition-colors",
                "text-academic-muted hover:text-academic-accent dark:text-academic-dark-muted dark:hover:text-academic-dark-accent",
                "after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-transparent after:transition-colors",
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
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
