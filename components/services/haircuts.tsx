"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { englishText, russianText } from "@/lib";
import { englishPricelist, russianPricelist } from "@/lib";

export default function Haircuts() {
  const { language } = useLanguage();
  const text = language === "english" ? englishText : russianText;
  const priceText = language === "english"
    ? englishPricelist
    : russianPricelist;

  return (
    <section>
      <div className="container pt-8 sm:pb-4">
        <h2 className="text-pink-500 mb-2 sm:mb-8 text-2xl sm:text-3xl text-center font-semibold">
          {text.services.heading}
        </h2>
        <h3 className="text-center mb-4 italic">{text.priceUpdate}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <div className="py-2 sm:py-6 sm:min-h-[32rem] lg:min-h-[40rem] flex flex-col justify-center">
            <div className="mb-3">
              <h3 className="text-lg sm:text-2xl uppercase text-sky-800">
                {priceText.haircuts.heading}
              </h3>
              <h4 className="italic">{priceText.haircuts.description}</h4>
            </div>
            {priceText.haircuts.services.map((service, index) => (
              <span
                key={index}
                className="flex mb-2 last:mb-0 text-sm sm:text-base"
              >
                <span className="flex-grow">
                  {service.title.map((item, index) => (
                    <h4 key={index}>{item}</h4>
                  ))}
                </span>
                <h4 className="text-right flex-shrink">{service.price}</h4>
              </span>
            ))}
          </div>
          <div className="relative hidden sm:block overflow-hidden">
            <Image
              src="/images/service-image-one.webp"
              alt="Hair Salon in Larnaca"
              fill
              className="object-cover rounded-sm hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
