"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      aria-label={mounted ? label : "Theme toggle loading"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-card border border-academic-border bg-academic-surface text-academic-muted shadow-card transition-colors hover:border-academic-accent hover:text-academic-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academic-accent disabled:cursor-default disabled:opacity-0 dark:border-academic-dark-border dark:bg-academic-dark-surface dark:text-academic-dark-muted dark:hover:border-academic-dark-accent dark:hover:text-academic-dark-accent dark:focus-visible:outline-academic-dark-accent"
      disabled={!mounted}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
      title={mounted ? label : undefined}
      type="button"
    >
      {mounted && isDark ? (
        <Sun aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      ) : (
        <Moon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      )}
    </button>
  );
}
