"use client";

import { useAtom } from "jotai";
import { SidebarNav } from "@/components/layout/sidebar/sidebar-nav";
import { desktopSidebarOpenAtom } from "@/lib/layout-store";
import { cn } from "@/lib/utils";

export function DesktopSidebar() {
  const [isOpen] = useAtom(desktopSidebarOpenAtom);

  return (
    <aside
      id="desktop-sidebar"
      aria-label="데스크톱 사이드바"
      className={cn(
        "hidden shrink-0 overflow-hidden border-r border-border bg-card transition-[width,border-color] duration-300 ease-out will-change-[width] md:flex",
        isOpen
          ? "md:max-xl:w-20 xl:w-64"
          : "md:max-xl:w-0 md:max-xl:border-r-0 xl:w-0 xl:border-r-0",
      )}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col transition-[opacity,transform] duration-200 ease-out will-change-[opacity,transform]",
          isOpen
            ? "opacity-100 translate-x-0 delay-75 pointer-events-auto"
            : "opacity-0 translate-x-2 pointer-events-none",
        )}
      >
        <div
          className={cn(
            "flex h-16 w-full shrink-0 items-center border-b border-border",
            "md:max-xl:justify-center md:max-xl:px-0",
            "xl:w-64 xl:px-6",
          )}
        >
          <span className="hidden text-lg font-bold xl:block">데탑용</span>
          <span className="hidden h-10 w-12 items-center justify-center rounded-xl border border-border bg-primary/10 text-sm font-bold text-foreground md:max-xl:flex xl:hidden">
            800
          </span>
        </div>
        <SidebarNav variant="desktop" />
        <div className="border-t border-border p-3 xl:p-4">
          <div className="flex items-center gap-3 rounded-xl bg-primary/10 px-3 py-3 md:max-xl:justify-center md:max-xl:px-0">
            <div className="h-9 w-9 shrink-0 rounded-full bg-primary/20" />
            <div className="min-w-0 md:max-xl:hidden">
              <p className="truncate text-sm font-medium text-foreground">
                작업공간
              </p>
              <p className="truncate text-xs text-muted-foreground">정리됨</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
