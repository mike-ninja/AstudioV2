"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { englishText, russianText } from "@/lib";
import { englishPricelist } from "@/lib";

export default function Haircuts() {
  const { language } = useLanguage();
  const text = language === "english" ? englishText : russianText;
  const priceText = language === "english"
    ? englishPricelist
    : englishPricelist;

  return (
    <section>
      <div className="container py-8 sm:pb-14">
        <h2 className="text-pink-500 mb-8 text-2xl sm:text-3xl text-center">
          {text.services.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <div className="py-6 min-h-[25rem] flex flex-col justify-center">
            <h3 className="text-2xl mb-3">
              {priceText.haircuts.heading}
            </h3>
            {priceText.haircuts.services.map((service, index) => (
              <span key={index} className="flex mb-2 last:mb-0">
                <span className="flex-grow">
                  {service.title.map((item, index) => (
                    <h4 key={index}>{item}</h4>
                  ))}
                </span>
                <h4 className="text-right flex-shrink">{service.price}</h4>
              </span>
            ))}
          </div>
          <div className="relative hidden sm:block">
            <Image
              src="/images/larnaca-hair.webp"
              alt="Hair Salon in Larnaca"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
