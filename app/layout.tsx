import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Header } from "@/components/header";
import { TabBar } from "@/components/tab-bar";
import { DiscoverProvider } from "@/components/discover-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Culture - Frise chronologique interactive",
  description: "Explorez l'histoire de la philosophie, de la litterature, de l'art et du cinema",
  icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%' y='50%' style='dominant-baseline:central;text-anchor:middle;font-size:90px;'>📚</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DiscoverProvider>
            <Header />
            <main className="pb-14 md:pb-0">
              {children}
            </main>
            <TabBar />
          </DiscoverProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
