"use client";

import { createContext, type ReactNode, useContext, useMemo } from "react";
import { useStorage } from "@/hooks/use-storage";
import {
  activeThemeName,
  isThemeName,
  type ThemeName,
  themes,
  themeToCssVars,
} from "@/theme";

type ThemeContextValue = {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const parseThemeName = (value: unknown) =>
  typeof value === "string" && isThemeName(value) ? value : activeThemeName;

export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return value;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { value: storedThemeName, setValue: setThemeName } = useStorage(
    "800-q1-theme",
    activeThemeName,
    {
      storageKind: "local",
      parse: parseThemeName,
    },
  );

  const themeName =
    typeof storedThemeName === "string" && isThemeName(storedThemeName)
      ? storedThemeName
      : activeThemeName;

  const theme = themes[themeName];

  const value = useMemo(
    () => ({
      themeName,
      setThemeName: (nextThemeName: ThemeName) => setThemeName(nextThemeName),
    }),
    [setThemeName, themeName],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        data-theme={theme.name}
        className="min-h-screen bg-background text-foreground"
        style={themeToCssVars(theme)}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
