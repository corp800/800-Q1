"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoGridOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { cn } from "@/lib/utils";

type SidebarVariant = "desktop" | "mobile";

const sidebarItems = [
  {
    href: "/",
    label: "홈",
    icon: IoHomeOutline,
  },
  {
    href: "/main",
    label: "메인",
    icon: IoGridOutline,
  },
  {
    href: "/main/notice",
    label: "공지",
    icon: IoSettingsOutline,
  },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SidebarNav({
  variant,
  onNavigate,
}: {
  variant: SidebarVariant;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex-1 overflow-y-auto",
        variant === "desktop" ? "p-3 md:max-xl:p-2 xl:p-4" : "p-6",
      )}
      aria-label="주요 탐색"
    >
      <div
        className={cn(
          "space-y-3",
          variant === "desktop"
            ? "space-y-2 md:max-xl:space-y-3 xl:space-y-2"
            : "",
        )}
      >
        {sidebarItems.map((item) => {
          const active = isActivePath(pathname, item.href);
          const Icon = item.icon;

          return (
            <div
              key={item.href}
              className={variant === "desktop" ? "relative" : undefined}
            >
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl border outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "border-primary/20 bg-primary/10 text-foreground"
                    : "border-transparent bg-muted/50 text-foreground hover:border-border hover:bg-muted",
                  variant === "desktop"
                    ? "md:max-xl:justify-center md:max-xl:px-0 md:max-xl:py-3 xl:px-4 xl:py-3"
                    : "px-4 py-3",
                )}
                title={variant === "mobile" ? item.label : undefined}
              >
                <Icon
                  className={cn(
                    "shrink-0",
                    variant === "desktop"
                      ? "h-5 w-5 md:max-xl:h-5 md:max-xl:w-5 xl:h-4 xl:w-4"
                      : "h-5 w-5",
                  )}
                />
                <span
                  className={cn(
                    variant === "desktop"
                      ? "text-sm font-medium md:max-xl:sr-only"
                      : "text-sm font-medium",
                  )}
                >
                  {item.label}
                </span>
              </Link>
              {variant === "desktop" ? (
                <span className="pointer-events-none absolute left-full top-1/2 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-lg opacity-0 transition duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 md:max-xl:block xl:hidden">
                  {item.label}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
