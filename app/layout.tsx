import { Contact, Navbar } from "@/components";
import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import ActiveLanguageContextProvider from "@/context/language-context";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Studio Larnaca",
  description: "Hair Salon Larnaca",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth no-scrollbar">
      <body className={`${inter.className} relative`}>
        <ActiveLanguageContextProvider>
          <Navbar />
          {children}
          <Contact />
        </ActiveLanguageContextProvider>
      </body>
    </html>
  );
}
