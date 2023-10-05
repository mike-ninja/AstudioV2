"use client";

import React from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { DotButton, useDotButton } from "./carousel-buttons";

import { carouselImages } from "@/lib";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  }, [
    WheelGesturesPlugin(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
  );

  return (
    <section className="flex items-center">
      <div className="container py-14">
        <div className="relative">
          <div
            ref={emblaRef}
            className="overflow-hidden cursor-grab"
          >
            <div className="flex touch-pan-y -ml-4">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pl-4 h-[25rem] sm:h-[40rem]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={image.image}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={95}
                      className="object-cover rounded-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`touch-manipulation inline-flex cursor-pointer border-none p-0 mx-1 w-6 h-2 rounded-sm transition-all ${
                index === selectedIndex
                  ? "bg-pink-500"
                  : "bg-slate-500/50 hover:bg-sky-400/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
