"use client";

import React from "react";

import { addressLink, englishText, instagramLink, useSectionInView } from "@/lib";
import Link from "next/link";

export default function Contact() {
  const {ref} =useSectionInView("Contact");
  return (
    <section ref={ref} id="contact">
      <div className="container">
        <div className="px-10 py-16 bg-teal-500 flex flex-col rounded-t-md text-white">
          <h2 className="text-6xl font-normal">Contact Us</h2>
          <div className="border-solid border-b-[3px] border-white/90 w-[15rem] my-3">
          </div>
          <span className="text-3xl">
            <Link
              href={addressLink}
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:text-sky-700"
            >
              {englishText.contact.info[1]}: Miltiadou 3, 6017 Larnaca, Cyprus
            </Link>
          </span>
          <span className="text-3xl">
            <Link
              href="tel:+35797732797"
              className="transition-all hover:text-sky-700"
            >
              {englishText.contact.info[2]}: +357 97 732 797
            </Link>
          </span>
          <span className="text-3xl">
            <Link
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:text-sky-700"
            >
              Instagram: @astudio_larnaca
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
