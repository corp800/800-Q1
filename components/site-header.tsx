import { ThemeSelector } from "@/components/theme/themeSelector";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-4">
        <div>
          <p className="text-sm font-semibold tracking-wide text-foreground">
            800-q1
          </p>
          <p className="text-xs text-muted-foreground">
            Theme-driven design system
          </p>
        </div>
        <ThemeSelector />
      </div>
    </header>
  );
}
