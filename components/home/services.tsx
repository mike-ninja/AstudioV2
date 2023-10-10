"use client";

import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { a, useSpring } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useLanguage } from "@/context/language-context";

import Link from "next/link";

import { englishText, linktrLink, russianText } from "@/lib";

export default function Services() {
  const { language } = useLanguage();
  const text = language === "english" ? englishText : russianText;

  return (
    <section id="services">
      <div className="container py-8 sm:pb-14">
        <div className="text-center">
          <h2 className="text-pink-500 mb-2 text-2xl sm:text-3xl font-semibold transition-all duration-500 ease-in-out active:scale-95 hover:text-sky-900">
            <Link href="/services">
              {text.services.heading}
            </Link>
          </h2>
          <h3 className="text-xs sm:text-base">
            {text.services.cta.text}{" "}
            <Link className="text-pink-500 transition-all duration-500 ease-in-out active:scale-95 hover:text-sky-900" href="/services">
              {text.services.cta.tag}
            </Link>
            {" "}
          </h3>
          <div className="">
            {text.services.products.map((service, index) => {
              return (
                <div key={index}>
                  <Service {...service} />
                  <div className="h-[1px] w-full bg-slate-400/40"></div>
                </div>
              );
            })}
            <div className=""></div>
          </div>
          <h4 className="text-xs sm:text-base mt-5 sm:mt-12 italic">
            {text.services.consultation.text[0]}{" "}
            <Link
              href={linktrLink}
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 transition-all duration-500 ease-in-out active:scale-95 hover:text-sky-900"
            >
              {text.services.consultation.tag}
            </Link>{" "}
            {text.services.consultation.text[1]}
          </h4>
        </div>
      </div>
    </section>
  );
}

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

function Service(
  { title, description, extra }: {
    title: string;
    description: readonly string[];
    extra: readonly string[];
  },
) {
  const [isOpen, setOpen] = useState(false);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, transform, y } = useSpring({
    from: { height: 0, transform: "rotate(0deg)", y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
      y: isOpen ? 0 : -10,
    },
  });

  return (
    <div
      onClick={() => setOpen(!isOpen)}
      className="pt-3 pb-2 sm:pt-6 sm:pb-5 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-2xl uppercase text-sky-800">
          {title}
        </h2>
        <a.div
          style={{ transform: transform }}
          className="rounded-full transition-all ease-in p-1 hover:bg-slate-300"
        >
          <AiOutlinePlus
            onClick={() => setOpen(!isOpen)}
            className="cursor-pointer text-xl sm:text-2xl text-slate-600"
          />
        </a.div>
      </div>

      <a.div
        style={{
          height: isOpen && previous === isOpen ? "auto" : height,
          overflow: "hidden",
          y: y,
        }}
      >
        <a.ul
          ref={ref}
          className="text-left pl-6 flex flex-col gap-1 pt-2 text-xs sm:text-base"
        >
          {description.map((d) => <li key={d} className="list-disc">{d}</li>)}
        </a.ul>
      </a.div>
    </div>
  );
}
