import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/theme/themeProvider";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "800",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <SiteHeader />
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
