import React from "react";

import { addressLink, englishText, instagramLink } from "@/lib";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="">
          <div className=""></div>
          <span>
            {englishText.contact.instagram[0]}{" "}
            <a href={instagramLink} target="_blank" rel="noreferrer">
              {englishText.contact.instagram[1]}
            </a>{" "}
            {englishText.contact.instagram[2]}
          </span>
          <div className=""></div>
        </div>
        <div className="">
          <div className="">
          </div>
          <div className="">
            <h3>{englishText.contact.info[0]}</h3>
            <div className=""></div>
            <p>
              <a
                href={addressLink}
                target="_blank"
                rel="noreferrer"
              >
                {englishText.contact.info[1]}: Miltiadou 3, 6017 Larnaca, Cyprus
              </a>
            </p>
            <p>
              <a href="tel:+35797732797">
                {englishText.contact.info[2]}: +357 97 732 797
              </a>
            </p>
            <p>
              <a href={instagramLink} target="_blank" rel="noreferrer">
                Instagram: @astudio_larnaca
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
