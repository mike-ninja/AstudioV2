import "./globals.css";

import type { Metadata } from "next";

import { Lato } from "next/font/google";

import { Header } from "@/components";
import { ActiveSectionContextProvider } from "@/context";

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
    <html lang="en" className="!scroll-smooth">
      <body className={`${lato.className}`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
