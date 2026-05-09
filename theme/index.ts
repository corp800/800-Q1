import type { CSSProperties } from "react";
import { defaultTheme } from "./default";
import { mainTheme } from "./main";

export const themes = {
  default: defaultTheme,
  main: mainTheme,
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = (typeof themes)[ThemeName];
type ThemeCssVars = CSSProperties & Record<`--theme-${string}`, string>;

// 실제로 쓸 테마를 고른다.
export const activeThemeName: ThemeName = "default";

export const activeTheme = themes[activeThemeName];

export const themeOptions = Object.values(themes);

export function isThemeName(value: string): value is ThemeName {
  return value in themes;
}

export function themeToCssVars(theme: Theme): ThemeCssVars {
  const { colors } = theme;

  return {
    "--theme-background": colors.background,
    "--theme-foreground": colors.foreground,
    "--theme-surface": colors.surface,
    "--theme-surface-foreground": colors.surfaceForeground,
    "--theme-surface-muted": colors.surfaceMuted,
    "--theme-card": colors.card,
    "--theme-card-foreground": colors.cardForeground,
    "--theme-popover": colors.popover,
    "--theme-popover-foreground": colors.popoverForeground,
    "--theme-primary": colors.primary,
    "--theme-primary-foreground": colors.primaryForeground,
    "--theme-primary-hover": colors.primaryHover,
    "--theme-secondary": colors.secondary,
    "--theme-secondary-foreground": colors.secondaryForeground,
    "--theme-secondary-hover": colors.secondaryHover,
    "--theme-ghost": colors.ghost,
    "--theme-ghost-foreground": colors.ghostForeground,
    "--theme-ghost-hover": colors.ghostHover,
    "--theme-muted": colors.muted,
    "--theme-muted-foreground": colors.mutedForeground,
    "--theme-accent": colors.accent,
    "--theme-accent-foreground": colors.accentForeground,
    "--theme-destructive": colors.destructive,
    "--theme-destructive-foreground": colors.destructiveForeground,
    "--theme-success": colors.success,
    "--theme-success-foreground": colors.successForeground,
    "--theme-warning": colors.warning,
    "--theme-warning-foreground": colors.warningForeground,
    "--theme-info": colors.info,
    "--theme-info-foreground": colors.infoForeground,
    "--theme-border": colors.border,
    "--theme-border-strong": colors.borderStrong,
    "--theme-input": colors.input,
    "--theme-ring": colors.ring,
    "--theme-link": colors.link,
    "--theme-link-foreground": colors.linkForeground,
    "--theme-radius-lg": colors.radiusLg,
    "--theme-radius-md": colors.radiusMd,
    "--theme-radius-sm": colors.radiusSm,
  };
}
