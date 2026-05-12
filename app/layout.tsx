import type { Metadata } from "next";
import { DesktopSidebar } from "@/components/layout/sidebar/desktopSidebar";
import { MobileSidebar } from "@/components/layout/sidebar/mobileSidebar";
import { SidebarBreakpointSync } from "@/components/layout/sidebar/sidebarBreakpointSync";
import { SiteHeader } from "@/components/layout/siteHeader";
import { ThemeProvider } from "@/theme/themeProvider";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import "react-day-picker/dist/style.css";
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "800",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className="h-screen bg-background text-foreground antialiased overflow-hidden">
        <ThemeProvider>
          <Providers>
            <div className="flex h-full w-full">
              <SidebarBreakpointSync />
              <MobileSidebar />
              <DesktopSidebar />
              <div className="flex flex-col flex-1 min-w-0 h-full min-h-0">
                <SiteHeader />
                <main className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
                  {children}
                </main>
              </div>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
