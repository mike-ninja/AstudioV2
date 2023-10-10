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
        <div className="z-10 bg-white/80 w-full text-center py-10 sm:py-24 rounded-lg">
          <h2 className="text-2xl sm:text-6xl italic text-teal-400 mb-0 sm:mb-4">
            {text.callToAction.heading}
          </h2>
          <p className="text-base sm:text-2xl text-sky-800/70">
            {text.callToAction.cta[0]}{" "}
            <Link
              href={linktrLink}
              target="_blank"
              rel="noreferrer"
              className="text-pink-500"
            >
              {text.callToAction.cta[1]}
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
        <p className="text-white text-xs sm:text-lg text-center">
          {text.callToAction.cta[2]}{"  "}
          <Link href="#contact" className="text-pink-500">
            {text.callToAction.cta[3]}
          </Link>
        </p>
      </div>
    </section>
  );
}
