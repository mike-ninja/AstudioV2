"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { englishText, linktrLink, russianText } from "@/lib";

export default function CallToAction() {
  const { language } = useLanguage();
  const text = language === "english" ? englishText : russianText;

  return (
    <section
      id="calltoaction"
      className="relative h-[20rem] sm:h-[35rem] lg:h-[45rem] flex items-center"
    >
      <Image
        src="/images/hair-saloon-larnaca.webp"
        alt="Hair Salon Larnaca"
        fill
        className="object-cover z-0"
      />
      <div className="container flex">
        <div className="z-10 bg-white/80 w-full text-center py-10 sm:py-24 rounded-xl px-5">
          <h2
            style={{ fontFamily: "Shrikhand" }}
            className="text-2xl sm:text-6xl italic text-teal-400 mb-0 sm:mb-4"
          >
            {"It's time to treat your hair!"}
          </h2>
          <p className="text-base sm:text-2xl text-sky-800/70">
            {text.callToAction.cta[0]}{" "}
            <Link
              href={linktrLink}
              target="_blank"
              rel="noreferrer"
              className="text-teal-400 transition-all duration-500 ease-in-out active:scale-95 hover:text-pink-500"
            >
              {text.callToAction.cta[1]}
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <div className="flex items-center">
          <div className="bg-[#91C4D9]/70 h-8 w-2 mr-1 sm:mr-2" />
          <p className="text-white text-xs sm:text-lg text-center text-nowrap">
            {text.callToAction.cta[2]}
            {"  "}
            <Link
              href="#contact"
              className="text-teal-400 transition-all duration-500 ease-in-out active:scale-95 hover:text-pink-500"
            >
              {text.callToAction.cta[3]}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
