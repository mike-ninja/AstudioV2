"use client";

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "@/context/language-context";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-3 right-3 z-[999]">
      <div className="text-sky-700 rounded-md flex flex-col sm:flex-row gap-3 px-2 sm:px-3 py-2 sm:py-1 justify-center items-center">
        <Link
          href="/"
          className="text-center transition hover:text-pink-500 active:scale-95"
        >
          <span className="block">
            <AiFillHome className="mx-auto text-xl block sm:hidden" />
            <span className="hidden sm:block text-sm uppercase font-normal">
              {language !== "english" ? "Главная" : "Home"}
            </span>
          </span>
        </Link>
        <Link
          href="/services"
          className="text-center transition hover:text-pink-500 active:scale-95"
        >
          <span className="block">
            <BsListUl className="mx-auto text-xl block sm:hidden" />
            <span className="hidden sm:block text-sm uppercase font-normal">
              {language !== "english" ? "Услуги" : "Services"}
            </span>
          </span>
        </Link>
        <button
          onClick={toggleLanguage}
          className="text-center transition hover:text-pink-500 active:scale-95"
        >
          <span className="block">
            <MdLanguage className="mx-auto text-xl block sm:hidden" />
            <span className="hidden sm:block text-sm uppercase font-normal">
              {language === "english" ? "Ru" : "Eng"}
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
}
