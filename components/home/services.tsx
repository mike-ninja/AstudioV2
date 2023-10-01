"use client";
import React, { useState } from "react";

import Link from "next/link";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { englishText, linktrLink } from "@/lib";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="text-pink-500 mb-2 text-3xl">
            <Link href="/pricelist">
              {englishText.services.heading}
            </Link>
          </h2>
          <h3>
            {englishText.services.cta.text}{" "}
            <Link className="text-pink-500 text-base" href="/pricelist">
              here
            </Link>
            {" "}
          </h3>
          <div className="">
            {englishText.services.products.map((service, index) => {
              return (
                <div key={index}>
                  <div className=""></div>
                  <Service {...service} />
                </div>
              );
            })}
            <div className=""></div>
          </div>
          <h4 className="text-base">
            {englishText.services.consultation.text[0]}{" "}
            <Link href={linktrLink} target="_blank" rel="noreferrer" className="text-pink-500">
              {englishText.services.consultation.tag}
            </Link>{" "}
            {englishText.services.consultation.text[1]}
          </h4>
        </div>
      </div>
    </section>
  );
}

type ServiceProps = (typeof englishText.services.products)[number];

function Service({ title, description, extra }: ServiceProps) {
  const [view, setView] = useState(false);

  const hideWhenVisible = {
    display: view ? "none" : "",
    opacity: view ? 0 : 1,
  };
  const showWhenVisible = {
    display: view ? "" : "none",
    opacity: view ? 1 : 0,
  };

  const toggleView = () => {
    setView(!view);
  };

  return (
    <div onClick={toggleView} className="py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold uppercase text-sky-800">{title}</h2>
        <div className="">
          <AiOutlinePlus
            style={hideWhenVisible}
            onClick={toggleView}
            className="cursor-pointer text-2xl text-slate-600"
          />
          <AiOutlineClose
            style={showWhenVisible}
            onClick={toggleView}
            className="cursor-pointer"
          />
        </div>
      </div>
      <ul className="text-left pl-6 flex flex-col gap-1" style={showWhenVisible}>
        {description.map((d) => <li key={d} className="list-disc">{d}</li>)}
        {extra.map((d) => <li key={d} className="pl-2">{d}</li>)}
      </ul>
    </div>
  );
}
