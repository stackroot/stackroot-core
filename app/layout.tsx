import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from './providers';

import "./globals.css";

import { Inter, Lexend_Deca } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StackRoot | Modular Web2 & Web3 Frontend Engineering",
  description:
    "Freelance frontend developer for Web2 & Web3. Modular, fast, and calm. From wallet integrations to staking dashboards – built from the ground up.",
  keywords: [
    "freelance Web3 developer",
    "frontend engineer Web2 Web3",
    "Next.js expert",
    "React staking dashboard",
    "wallet connect integration",
    "Web3 UI developer",
    "modular frontend",
    "StackRoot developer",
    "custom dApp interfaces",
    "Ethereum dashboard UI"
  ],
  authors: [{ name: "StackRoot" }],
  openGraph: {
    title: "StackRoot | Modular Web2 & Web3 Frontend Engineering",
    description:
      "Clean code. Fast delivery. Calm mindset. Discover how StackRoot builds Web2 & Web3 interfaces.",
    url: "https://stackroot.dev",
    siteName: "StackRoot",
    images: [
      {
        url: "https://stackroot.dev/images/stackroot-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackRoot | Modular Web2 & Web3 Frontend Engineering",
    description:
      "Modular, fast, and made to fit — frontend engineering by a calm professional for Web2 & Web3 projects.",
    images: ["https://stackroot.dev/images/stackroot-og-image.jpg"],
  },
  metadataBase: new URL("https://stackroot.dev"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-screen flex flex-col ${inter.variable} ${lexendDeca.variable} antialiased bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200`}
      >
        <Header />

        <main className="flex-1 w-full px-4 md:px-8 py-8 container mx-auto overflow-y-auto font-sans">
          <Providers>
            {children}
          </Providers>
        </main>

        <Footer />
      </body>
    </html>
  );
}
