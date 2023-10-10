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
        <h2 className="text-pink-500 mb-2 sm:mb-8 text-2xl sm:text-3xl text-center">
          {text.services.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <div className="py-2 sm:py-6 sm:min-h-[32rem] lg:min-h-[40rem] flex flex-col justify-center">
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
              src="/images/service-image-one.webp"
              alt="Hair Salon in Larnaca"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
