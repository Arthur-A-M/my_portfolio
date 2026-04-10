import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!routing.locales.includes(lang as (typeof routing.locales)[number])) {
    notFound();
  }

  const t = await getTranslations({ locale: lang, namespace: "metadata" });
  const keywords = t.raw("keywords") as string[];

  return {
    title: {
      default: t("title.default"),
      template: t("title.template"),
    },
    description: t("description"),
    applicationName: t("applicationName"),
    keywords,
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!routing.locales.includes(lang as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(lang);
  const messages = await getMessages({ locale: lang });

  return <NextIntlClientProvider locale={lang} messages={messages}>{children}</NextIntlClientProvider>;
}
