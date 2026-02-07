// biome-ignore assist/source/organizeImports: ignore import sort order
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Kasemsarn Purisarn",
  description:
    "Full-Stack Developer crafting beautiful and scalable web applications. Passionate about building modern solutions with cutting-edge technologies.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Kasemsarn Purisarn" }],
  openGraph: {
    title: "Kasemsarn Purisarn | Full-Stack Developer",
    description:
      "Full-Stack Developer crafting beautiful and scalable web applications.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Parallelize independent async operations to eliminate waterfall
  const [{ locale }, messages] = await Promise.all([
    params,
    getMessages(),
  ]);

  // Ensure that the incoming `locale` is valid
  // biome-ignore lint/suspicious/noExplicitAny: library type mismatch
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
