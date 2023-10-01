import "./globals.css";

import type { Metadata } from "next";

import { Lato } from "next/font/google";
// import { Playfair } from "next/font/google";

import { Header } from "@/components";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300"],
});
// const playFair = Playfair({ weight: "700", subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${lato.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
