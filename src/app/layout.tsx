import "@/app/globals.css";
import { Metadata, type Viewport } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import SiteHeader from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SectionProvider } from "@/context/section-context";
import { ScrollNavigation } from "@/components/scroll-navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SectionProvider>
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Toaster />
            <TailwindIndicator />
            <ScrollNavigation />
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
