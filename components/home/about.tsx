import React from "react";
import Image from "next/image";
import { englishText } from "@/lib";

export default function About() {
  return (
    <section id="about">
      <div className="container grid grid-cols-1 sm:grid-cols-2 py-14">
        <div className="relative hidden sm:block px-10 h-[30rem]">
          <Image
            src="/images/larnaca-hair-studio.webp"
            alt="Hair Salon Larnaca"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top rounded-sm"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 sm:mx-10">
          <h2 className="mb-2 text-2xl sm:text-3xl tracking-wide text-pink-500">About AStudio</h2>
          {englishText.about.text.map((paragraph, index) => (
            <p key={index} className="text-justify">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
