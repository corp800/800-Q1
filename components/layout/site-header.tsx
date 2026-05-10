"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { IoMenu } from "react-icons/io5";
import { ThemeSelector } from "@/components/theme/themeSelector";
import {
  desktopSidebarOpenAtom,
  mobileSidebarOpenAtom,
} from "@/lib/layout-store";

export function SiteHeader() {
  const isDesktopSidebarOpen = useAtomValue(desktopSidebarOpenAtom);
  const isMobileSidebarOpen = useAtomValue(mobileSidebarOpenAtom);
  const setDesktopSidebarOpen = useSetAtom(desktopSidebarOpenAtom);
  const setMobileSidebarOpen = useSetAtom(mobileSidebarOpenAtom);
  const desktopToggleLabel = isDesktopSidebarOpen
    ? "데탑용 사이드바 닫기"
    : "데탑용 사이드바 열기";
  const mobileToggleLabel = isMobileSidebarOpen
    ? "모바일용 메뉴 닫기"
    : "모바일용 메뉴 열기";

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b border-border bg-background/80 backdrop-blur">
      <div className="flex w-full items-center justify-between gap-3 px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <div className="relative h-10 w-10 shrink-0">
            <button
              className="absolute inset-0 hidden items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
              type="button"
              aria-label={desktopToggleLabel}
              aria-controls="desktop-sidebar"
              aria-expanded={isDesktopSidebarOpen}
              onClick={() => setDesktopSidebarOpen((prev) => !prev)}
            >
              <IoMenu size={24} />
            </button>
            <button
              className="absolute inset-0 inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
              type="button"
              aria-label={mobileToggleLabel}
              aria-controls="mobile-sidebar"
              aria-expanded={isMobileSidebarOpen}
              onClick={() => setMobileSidebarOpen((prev) => !prev)}
            >
              <IoMenu size={24} />
            </button>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-wide text-foreground">
              800-q1
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}
