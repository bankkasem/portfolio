"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "th" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      disabled={isPending}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium text-white/90"
      aria-label="Switch language"
    >
      <span
        className={locale === "en" ? "text-accent font-bold" : "opacity-50"}
      >
        EN
      </span>
      <span className="opacity-30">|</span>
      <span
        className={locale === "th" ? "text-accent font-bold" : "opacity-50"}
      >
        TH
      </span>
    </button>
  );
}
