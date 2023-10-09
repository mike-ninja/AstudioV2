"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { englishPricelist } from "@/lib";

export default function Styling() {
  const { language } = useLanguage();
  const priceText = language === "english"
    ? englishPricelist
    : englishPricelist;

  return (
    <section>
      <div className="container sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <div className="py-6 sm:min-h-[20rem] lg:min-h-[30rem] flex flex-col justify-center">
            <h3 className="text-2xl mb-3">
              {priceText.styling.heading}
            </h3>
            {priceText.styling.services.map((service, index) => (
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
              src="/images/service-image-three.webp"
              alt="Hair Salon in Larnaca"
              fill
              className="object-cover rounded-sm object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
