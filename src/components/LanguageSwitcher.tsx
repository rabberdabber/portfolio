"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useSection } from "@/context/section-context";
import { useTransition } from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  { value: "en", label: "English", icon: "🇺🇸" },
  { value: "ko", label: "한국어", icon: "🇰🇷" },
] as const;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const { activeSection } = useSection();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      const hash = activeSection ? `#${activeSection}` : "";
      router.replace(pathname + hash, { locale: newLocale });
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          disabled={isPending}
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-[140px] p-1 gap-2">
        {languages.map((language) => (
          <Button
            key={language.value}
            variant={locale === language.value ? "secondary" : "ghost"}
            className="w-full justify-start gap-2"
            onClick={() => handleLanguageChange(language.value)}
            disabled={isPending}
          >
            <span>{language.icon}</span>
            <span>{language.label}</span>
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
