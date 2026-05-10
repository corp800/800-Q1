"use client";

import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { mobileSidebarOpenAtom } from "@/lib/layout-store";

const DESKTOP_BREAKPOINT = "(min-width: 768px)";

export function SidebarBreakpointSync() {
  const setMobileSidebarOpen = useSetAtom(mobileSidebarOpenAtom);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_BREAKPOINT);

    const closeMobileSidebar = () => {
      // 모바일 드로어 상태를 데스크톱 전환에 맞춘다.
      setMobileSidebarOpen(false);
    };

    // 처음 진입할 때도 한 번 정리한다.
    closeMobileSidebar();
    mediaQuery.addEventListener("change", closeMobileSidebar);

    return () => {
      mediaQuery.removeEventListener("change", closeMobileSidebar);
    };
  }, [setMobileSidebarOpen]);

  return null;
}
