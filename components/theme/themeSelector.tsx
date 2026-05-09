"use client";

import { type ThemeName, themes } from "@/theme";
import { useTheme } from "../../theme/themeProvider";

export function ThemeSelector() {
  const { themeName, setThemeName } = useTheme();

  return (
    <label className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
      <span>테마</span>
      <select
        className="h-9 rounded-md border border-border bg-surface px-3 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
        value={themeName}
        onChange={(event) => setThemeName(event.target.value as ThemeName)}
      >
        {Object.values(themes).map((theme) => (
          <option key={theme.name} value={theme.name}>
            {theme.label}
          </option>
        ))}
      </select>
    </label>
  );
}
