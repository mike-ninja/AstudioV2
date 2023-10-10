"use client";

import React, { Fragment } from "react";
import { useLanguage } from "@/context/language-context";
import { englishText, russianText } from "@/lib";

export default function AdditionalInformation() {
  const { language } = useLanguage();
  const text = language === "english" ? englishText : russianText;

  return (
    <section>
      <div className="container pt-8 pb-8 text-center">
        <h2 className="text-pink-500 mb-2 sm:mb-4 text-2xl sm:text-3xl">
          {text.additionalInformation.heading}
        </h2>
        <h3 className="text-sm sm:text-base">{text.additionalInformation.information[0]}</h3>
        <div className="flex flex-wrap gap-1 sm:gap-3 justify-center my-5">
          {text.additionalInformation.information.slice(1, 4).map((
            information,
            index,
          ) => (
            <Fragment key={index}>
              <p className="px-1 py-1 bg-slate-400/80 rounded-md text-sm">
                {information}
              </p>
            </Fragment>
          ))}
        </div>
        <h3 className="text-sm sm:text-base">{text.additionalInformation.information[4]}</h3>
      </div>
    </section>
  );
}
