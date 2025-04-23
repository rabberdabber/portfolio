import Link from "next/link";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import NavBar from "@/components/nav-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function SiteHeader() {
  const t = useTranslations("header");

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between">
        <div className="flex flex-1 items-center space-x-4">
          <NavBar />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <LanguageSwitcher />
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">{t("github")}</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.linkedin />
                <span className="sr-only">{t("linkedin")}</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
