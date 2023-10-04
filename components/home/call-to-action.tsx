import React from "react";

import { englishText, linktrLink } from "@/lib";
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      id="calltoaction"
      className="relative h-[45rem] flex items-center"
    >
      <Image
        src="/images/hair-saloon-larnaca.webp"
        alt="Hair Salon Larnaca"
        fill
        className="object-cover z-0"
      />
      <div className="container flex">
        <div className="z-10 bg-white/70 w-full text-center py-16 rounded-md">
          <h2 className="text-6xl italic text-teal-400 font-semibold">
            {englishText.callToAction.heading}
          </h2>
          <p className="text-2xl text-sky-800/70 font-normal">
            {englishText.callToAction.cta[0]}{" "}
            <Link
              href={linktrLink}
              target="_blank"
              rel="noreferrer"
              className="text-pink-500"
            >
              {englishText.callToAction.cta[1]}
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <span className="text-white text-lg font-normal">
          {englishText.callToAction.cta[2]}{"  "}
          <Link href="#contact" className="text-pink-500">
            {englishText.callToAction.cta[3]}
          </Link>
        </span>
      </div>
    </section>
  );
}
