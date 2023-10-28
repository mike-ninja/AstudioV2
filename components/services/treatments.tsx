"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { englishPricelist, russianPricelist } from "@/lib";

export default function Treatments() {
  const { language } = useLanguage();
  const priceText = language === "english"
    ? englishPricelist
    : russianPricelist;

  return (
    <section>
      <div className="container sm:pt-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <div className="relative hidden sm:block overflow-hidden">
            <Image
              src="/images/service-image-four.webp"
              alt="Hair Salon in Larnaca"
              fill
              className="object-cover rounded-sm object-top hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="py-6 sm:min-h-[32rem] lg:min-h-[40rem] flex flex-col justify-center">
            <h3 className="text-lg sm:text-2xl uppercase text-sky-800 mb-3">
              {priceText.treatments.heading}
            </h3>
            {priceText.treatments.services.map((service, index) => (
              <span key={index} className="flex mb-2 last:mb-0 text-sm sm:text-base">
                <span className="flex-grow">
                  {service.title.map((item, index) => (
                    <h4 key={index}>{item}</h4>
                  ))}
                </span>
                <h4 className="text-right flex-shrink">{service.price}</h4>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
