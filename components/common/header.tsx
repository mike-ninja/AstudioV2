"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { linktrLink } from "@/lib";
import { englishText, russianText } from "@/lib";
import Waves from "./waves";
import { useLanguage } from "@/context/language-context";

type HeaderProps = {
  headerBackground: string;
};

export default function Header({ headerBackground }: HeaderProps) {
  const { language } = useLanguage();
  const text = language === "english" ? englishText : russianText;

  return (
    <header id="home" className="relative h-screen text-white z-0">
      <Image
        src={headerBackground}
        alt="Astudio Larnaca Header"
        quality={100}
        fill
        className="object-cover object-top z-0"
      />

      <small className="absolute top-4 left-1/2 -translate-x-1/2 text-sm sm:text-lg tracking-widest uppercase italic">
        {text.header}
      </small>

      <div className="container flex justify-center items-center h-full">
        <HeaderBox button={text.button} studio={text.studio} />
      </div>
      <Waves />
    </header>
  );
}

function HeaderBox({ button, studio }: { button: string; studio: string }) {
  return (
    <div className="z-10 text-center">
      <h1
        style={{ fontFamily: "Playfair Display SC" }}
        className="tracking-tight text-7xl sm:text-8xl"
      >
        A&nbsp;Studio
      </h1>
      <h2 className="text-lg sm:text-2xl mb-4">
        {studio}
      </h2>
      <div className="flex justify-center">
        <Link
          href={linktrLink}
          target="_blank"
          rel="noreferrer"
          className="flex relative py-3 px-4 group transition-all active:scale-95"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-sky-700 z-0 rounded-full transition-all ease-in-out duration-300 group-hover:w-full">
          </div>
          <span className="text-xl z-10 capitalize">{button}</span>
        </Link>
      </div>
    </div>
  );
}
