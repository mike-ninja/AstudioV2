"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { englishPricelist } from "@/lib";

export default function Colouring() {
  const { language } = useLanguage();
  const priceText = language === "english"
    ? englishPricelist
    : englishPricelist;

  return (
    <section>
      <div className="container sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <div className="relative hidden sm:block">
            <Image
              src="/images/service-image-two.webp"
              alt="Hair Salon in Larnaca"
              fill
              className="object-cover object-top rounded-sm"
            />
          </div>
          <div className="py-6 sm:min-h-[20rem] lg:min-h-[30rem] flex flex-col justify-center">
            <h3 className="text-2xl">
              {priceText.colouring.heading}
            </h3>
            <h5 className="mb-3 text-xs sm:text-sm">
              {priceText.colouring.description}
            </h5>
            {priceText.colouring.services.map((service, index) => (
              <span key={index} className="block mb-2 last:mb-0">
                <h4>{service.title}</h4>
                {service.options.map((item, index) => (
                  <span
                    key={index}
                    className="flex"
                  >
                    <h4 className="flex-grow">- {item.title}</h4>
                    <h4 className="text-right flex-shrink">{item.price}</h4>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
