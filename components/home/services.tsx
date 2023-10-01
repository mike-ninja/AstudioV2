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
          <h1>
            <Link className="text-pink-500" href="/pricelist">
              {englishText.services.heading}
            </Link>
          </h1>
          <h3>
            {englishText.services.cta.text}{" "}
            <Link className="text-pink-500" href="/pricelist">here</Link>
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
          <h3>
            {englishText.services.consultation.text[0]}{" "}
            <a href={linktrLink} target="_blank" rel="noreferrer">
              {englishText.services.consultation.tag}
            </a>{" "}
            {englishText.services.consultation.text[1]}
          </h3>
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
    <div onClick={toggleView} className="">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <div className="">
          <AiOutlinePlus
            style={hideWhenVisible}
            onClick={toggleView}
          />
          <AiOutlineClose
            className=""
            style={showWhenVisible}
            onClick={toggleView}
          />
        </div>
      </div>
      <div className="" style={showWhenVisible}>
        <ul>
          {description.map((d) => <li className="" key={d}>{d}</li>)}
          {extra.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </div>
    </div>
  );
}
