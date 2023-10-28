"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { englishPricelist, russianPricelist } from "@/lib";

export default function Colouring() {
  const { language } = useLanguage();
  const priceText = language === "english"
    ? englishPricelist
    : russianPricelist;

  return (
    <section>
      <div className="container sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:gap-12">
          <div className="relative hidden sm:block overflow-hidden">
            <Image
              src="/images/service-image-two.webp"
              alt="Hair Salon in Larnaca"
              fill
              className="object-cover object-top rounded-sm hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="py-6 sm:min-h-[32rem] lg:min-h-[40rem] flex flex-col justify-center">
            <h3 className="text-lg sm:text-2xl uppercase text-sky-800">
              {priceText.colouring.heading}
            </h3>
            <h5 className="mb-3 text-xs sm:text-sm">
              {priceText.colouring.description}
            </h5>
            {priceText.colouring.services.map((service, index) => (
              <span
                key={index}
                className="block mb-2 last:mb-0 text-sm sm:text-base"
              >
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
