import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "stackroot",
  description: "build from the ground up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-screen flex flex-col ${inter.variable} ${spaceGrotesk.variable} antialiased bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200`}
      >
        <Header />

        <main className="flex-1 w-full px-4 md:px-8 py-8 container mx-auto overflow-y-auto font-sans">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
