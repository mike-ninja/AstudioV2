import { Navbar } from "@/components";
import "./globals.css";

import type { Metadata } from "next";

import { Lato } from "next/font/google";
import ActiveLanguageContextProvider from "@/context/language-context";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
      <body className={`${lato.className} relative`}>
        <ActiveLanguageContextProvider>
          <Navbar />
          {children}
        </ActiveLanguageContextProvider>
      </body>
    </html>
  );
}
