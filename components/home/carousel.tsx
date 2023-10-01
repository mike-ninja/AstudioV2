"use client";

import React from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { carouselImages } from "@/lib";

export default function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  }, [
    WheelGesturesPlugin(),
  ]);

  return (
    <section className="px-10 py-10">
      <div className="container flex items-center">
        <div className="relative">
          <div
            ref={emblaRef}
            className="overflow-hidden cursor-grab"
          >
            <div className="flex touch-pan-y -ml-[1rem]">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pl-[1rem] relative"
                >
                  <Image
                    src={image.image}
                    alt={image.alt}
                    height={700}
                    width={700}
                    quality={95}
                    className="object-cover h-full rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
