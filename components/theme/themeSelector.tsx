"use client";

import { useTheme } from "next-themes";

const themeOptions = [
  { value: "system", label: "시스템" },
  { value: "light", label: "라이트" },
  { value: "dark", label: "다크" },
  { value: "mumu", label: "무무" },
] as const;

const themeSelectorStyles = {
  label:
    "flex items-center gap-2 text-sm font-medium text-muted-foreground md:gap-3",
  labelText: "hidden sm:inline",
  select:
    "h-9 w-28 rounded-md border border-border bg-surface px-3 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring sm:w-32",
} as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const value = theme ?? "system";

  return (
    <label className={themeSelectorStyles.label}>
      <span className={themeSelectorStyles.labelText}>테마</span>
      <select
        className={themeSelectorStyles.select}
        value={value}
        onChange={(event) => setTheme(event.target.value)}
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
