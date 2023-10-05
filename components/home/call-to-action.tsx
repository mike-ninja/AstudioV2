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
        <div className="z-10 bg-white/70 w-full text-center py-10 sm:py-16 rounded-md">
          <h2 className="text-3xl sm:text-6xl italic text-teal-400 font-semibold">
            {text.callToAction.heading}
          </h2>
          <p className="text-lg sm:text-2xl text-sky-800/70 font-normal">
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
        <p className="text-white text-sm sm:text-lg font-normal text-center">
          {text.callToAction.cta[2]}{"  "}
          <Link href="#contact" className="text-pink-500">
            {text.callToAction.cta[3]}
          </Link>
        </p>
      </div>
    </section>
  );
}
