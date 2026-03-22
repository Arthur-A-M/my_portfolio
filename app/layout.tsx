import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "A modern portfolio base built with Next.js 16, React 19, and Tailwind CSS 4.",
  applicationName: "Portfolio",
  keywords: [
    "portfolio",
    "next.js",
    "react",
    "typescript",
    "tailwind css",
  ],
  openGraph: {
    title: "Portfolio",
    description:
      "A modern portfolio base built with Next.js 16, React 19, and Tailwind CSS 4.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
