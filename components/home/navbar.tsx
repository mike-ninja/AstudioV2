"use client";

import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib";
import { navScreenPosition } from "@/lib";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState<string | null>("#home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setActiveNav(navScreenPosition);
      // console.log(activeNav);
    });
  }, []);

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-6 px-4 z-20 w-fit py-2 bg-black/30 backdrop-blur-md rounded-full items-center text-white/50">
      {navLinks.map((link) => (
        <Fragment key={link.hash}>
          <Link
            href={link.hash}
            className={`text-xl p-3 transition-all rounded-full ${
              activeNav === link.hash
                ? "bg-sky-700  text-white/90"
                : "hover:bg-stone-900"
            }`}
            onClick={() => setActiveNav(link.hash)}
          >
            {link.icon}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}
