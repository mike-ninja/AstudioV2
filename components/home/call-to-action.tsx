import React from 'react'

import { englishText, linktrLink } from '@/lib'

export default function CallToAction() {
  return (
    <section id="calltoaction">
      <div className="calltoaction__container">
    <div className="book__now">
      <div className="book__now-container">
        <h2>{englishText.callToAction.heading}</h2>
        <p>
          {englishText.callToAction.cta[0]}{" "}
          <a href={linktrLink} target="_blank" rel="noreferrer">
            {englishText.callToAction.cta[1]}
          </a>
        </p>
      </div>
      <div className="book__now-contact">
        <span>
          {englishText.callToAction.cta[2]}{"  "}
          <a href="#contact">{englishText.callToAction.cta[3]}</a>
        </span>
      </div>
    </div>
      </div>
    </section>
  )
}
