"use client";

import React from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { carouselImages } from "@/lib";

export default function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    slidesToScroll: "auto",
    // containScroll: "trimSnaps",
  }, [
    WheelGesturesPlugin(),
  ]);

  return (
    <section className="h-[30rem] flex items-center">
      <div className="container">
        <div className="relative">
          <div
            ref={emblaRef}
            className="overflow-hidden cursor-grab"
          >
            <div className="flex touch-pan-y -ml-4">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pl-4 h-[25rem]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={image.image}
                      alt={image.alt}
                      fill
                      quality={95}
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
