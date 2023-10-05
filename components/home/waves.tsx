import React from "react";
import Image from "next/image";

export default function Waves() {
  return (
    <div className="absolute bottom-0 lg:-bottom-1 w-full h-28">
      <div className="relative w-full h-full">
        <Wave
          wave="/images/waves/wave-haikei-one.svg"
          alt="Hair Salon in Larnaca"
          extraStyle="animation-delay-1400"
        />
        <Wave
          wave="/images/waves/wave-haikei-two.svg"
          alt="Hair Salon in Larnaca"
          extraStyle="opacity-80 animation-delay-100"
        />
        <Wave
          wave="/images/waves/wave-haikei-three.svg"
          alt="Hair Salon in Larnaca"
          extraStyle="opacity-60 animation-delay-600"
        />
        <Wave
          wave="/images/waves/wave-haikei-four.svg"
          alt="Hair Salon in Larnaca"
          extraStyle="opacity-60 animation-delay-1000"
        />
      </div>
    </div>
  );
}

type WaveProp = {
  wave: string;
  alt: string;
  extraStyle?: string;
};
function Wave({ wave, alt, extraStyle }: WaveProp) {
  return (
    <Image
      src={wave}
      alt={alt}
      fill
      className={`animate-wave object-cover object-bottom ${extraStyle}`}
    />
  );
}
