import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/header";
import { TabBar } from "@/components/tab-bar";
import { SwRegister } from "@/components/sw-register";
import { MadeWithLove } from "@/components/made-with-love";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: "Culture - Frise chronologique interactive",
  description: "Explorez l'histoire de la philosophie, de la littérature, de l'art et du cinéma",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%' y='50%' style='dominant-baseline:central;text-anchor:middle;font-size:90px;'>📚</text></svg>",
    apple: "/apple-touch-icon",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Culture",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <Header />
          <main className="pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
            {children}
            <MadeWithLove className="mt-10 pb-8" />
          </main>
          <TabBar />
          <SwRegister />
              </body>
    </html>
  );
}
