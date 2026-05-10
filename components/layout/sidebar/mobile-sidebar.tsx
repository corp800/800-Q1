"use client";

import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { SidebarNav } from "@/components/layout/sidebar/sidebar-nav";
import { mobileSidebarOpenAtom } from "@/lib/layout-store";
import { cn } from "@/lib/utils";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useAtom(mobileSidebarOpenAtom);
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  const drawerLabel = "모바일용 메뉴";

  useEffect(() => {
    if (!pathname) {
      return;
    }

    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (!isOpen) {
      previousActiveElementRef.current?.focus();
      return;
    }

    previousActiveElementRef.current =
      document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const focusables = Array.from(focusableElements).filter(
        (element) => !element.hasAttribute("disabled"),
      );
      if (focusables.length === 0) {
        return;
      }

      const firstFocusable = focusables[0];
      const lastFocusable = focusables[focusables.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
        return;
      }

      if (!event.shiftKey && activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/50 backdrop-blur-[2px] transition-opacity md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100 duration-[250ms] ease-out"
            : "pointer-events-none opacity-0 duration-[150ms] ease-in",
        )}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <aside
        id="mobile-sidebar"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={drawerLabel}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-card shadow-2xl transform-gpu transition-[transform,opacity,box-shadow] md:hidden",
          isOpen
            ? "translate-x-0 opacity-100 shadow-2xl duration-[250ms] ease-out"
            : "-translate-x-full opacity-0 pointer-events-none shadow-lg duration-[150ms] ease-in",
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-border px-6">
            <span className="font-bold text-lg">메뉴</span>
            <button
              className="p-2 text-muted-foreground hover:text-foreground"
              type="button"
              aria-label="메뉴 닫기"
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
            >
              <IoClose size={24} />
            </button>
          </div>

          <SidebarNav variant="mobile" onNavigate={() => setIsOpen(false)} />

          <div className="border-t border-border p-6">
            <div className="rounded-xl bg-secondary/50 px-4 py-3 text-sm text-muted-foreground">
              빠른 이동
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
