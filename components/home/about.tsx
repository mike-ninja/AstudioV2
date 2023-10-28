"use client";

import React from "react";
import Image from "next/image";
import { englishText, linktrLink, russianText } from "@/lib";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { language } = useLanguage();
  const text = language === "english" ? englishText : russianText;

  return (
    <section id="about">
      <div className="container grid grid-cols-1 sm:grid-cols-2 py-14">
        <div className="relative hidden sm:block px-10 sm:h-[35rem] lg:h-[45rem] overflow-hidden">
          <Image
            src="/images/larnaca-hair-studio.webp"
            alt="Hair Salon Larnaca"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top rounded-sm hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 sm:mx-10">
          <h2 className="mb-2 text-2xl sm:text-3xl tracking-wide text-pink-500 font-semibold">
            {text.about.heading}
          </h2>
          {text.about.text.map((paragraph, index) => (
            <p key={index} className="text-justify">{paragraph}</p>
          ))}
          <Link
            href={linktrLink}
            target="_blank"
            rel="noreferrer"
            className="flex relative py-3 px-4 group transition-all active:scale-95 w-fit mt-4 sm:mt-10"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-pink-500 z-0 rounded-full transition-all ease-in-out duration-300 group-hover:w-full">
            </div>
            <span className="text-xl z-10">{text.button}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
