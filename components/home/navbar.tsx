"use client";

import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-6 px-4 z-20 w-fit py-2 bg-black/30 backdrop-blur-md rounded-full items-center text-white/50">
      {navLinks.map((link) => (
        <Fragment key={link.hash}>
          <Link
            href={link.hash}
            className={`text-xl p-3 transition-all rounded-full ${
              activeSection === link.name
                ? "bg-sky-700  text-white/90"
                : "hover:bg-stone-900"
            }`}
            onClick={() => {
              setTimeOfLastClick(Date.now());
              setActiveSection(link.name);
            }}
          >
            {link.icon}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}
