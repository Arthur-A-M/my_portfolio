"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);

    if (routing.locales.includes(segments[0] as (typeof routing.locales)[number])) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    const nextPath = `/${segments.join("/")}`;
    router.replace(nextPath);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/80 p-1 backdrop-blur">
      <span className="px-2 text-xs text-muted-foreground">{t("label")}</span>
      {routing.locales.map((item) => {
        const isActive = item === locale;

        return (
          <button
            key={item}
            onClick={() => switchLocale(item)}
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              isActive
                ? "bg-chart-1 text-white"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
            aria-label={t(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
