"use client";
import React from "react";

import Link from "next/link";
import { addressLink, englishText, instagramLink, russianText } from "@/lib";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { language } = useLanguage();
  const text = language === "english" ? englishText : russianText;

  return (
    <section id="contact">
      <div className="container">
        <div className="px-6 sm:px-10 py-10 sm:py-16 bg-[#91C4D9] flex flex-col rounded-t-md text-white">
          <span className="w-fit">
            <h2 
              style={{ fontFamily: "Shrikhand" }}
              className="mb-2 text-2xl sm:text-3xl tracking-wide font-semibold">
              Contact Us
            </h2>
            <div className="border-solid border-b-[3px] border-white/80 w-full my-2 sm:my-3" />
          </span>
          <span className="text-lg sm:text-xl">
            <Link
              href={addressLink}
              target="_blank"
              rel="noreferrer"
            >
              {text.contact.info[0]}:{" "}
              <span className="transition-all hover:text-sky-700">
                Miltiadou 3, 6017 Larnaca, Cyprus
              </span>
            </Link>
          </span>
          <span className="text-lg sm:text-xl">
            <Link href="tel:+35797732797">
              {text.contact.info[1]}:{" "}
              <span className="transition-all hover:text-sky-700">
                +357 97 732 797
              </span>
            </Link>
          </span>
          <span className="text-lg sm:text-xl">
            <Link
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
            >
              Instagram:{" "}
              <span className="transition-all hover:text-sky-700">
                @astudio_larnaca
              </span>
            </Link>
          </span>
          <span className="text-lg sm:text-xl">
            {text.contact.businessHours}
          </span>
        </div>
      </div>
    </section>
  );
}
