"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isClient = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full border border-white/20 bg-white/10"
      />
    );
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-slate-700 shadow-sm transition hover:scale-105 hover:bg-white dark:border-white/20 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
