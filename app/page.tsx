"use client";

import { ActionsSection } from "./_components/actionsSection";
import { CalendarSection } from "./_components/calendarSection";
import { ControlsSection } from "./_components/controlsSection";
import { HeroSection } from "./_components/heroSection";
import { OverlaysSection } from "./_components/overlaysSection";
import { ShowcaseAside } from "./_components/showcaseAside";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-hidden bg-[radial-gradient(circle_at_top_left,color-mix(in_oklch,var(--primary)_18%,transparent)_0,transparent_38%),radial-gradient(circle_at_85%_15%,color-mix(in_oklch,var(--foreground)_8%,transparent)_0,transparent_28%),linear-gradient(180deg,color-mix(in_oklch,var(--background)_96%,var(--primary)_4%)_0%,var(--background)_52%,color-mix(in_oklch,var(--background)_94%,var(--foreground)_6%)_100%)]">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--primary)_7%,transparent),transparent)] opacity-70" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)]">
          <HeroSection />
          <ShowcaseAside />
        </header>

        <main className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <section className="grid gap-6">
            <ControlsSection />
            <div className="grid gap-6 lg:grid-cols-2">
              <OverlaysSection />
              <ActionsSection />
            </div>
          </section>
          <CalendarSection />
        </main>
      </div>
    </div>
  );
}
