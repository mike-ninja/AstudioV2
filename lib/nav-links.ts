import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCalendarHeart } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsChatHeart } from "react-icons/bs";

export const navLinks = [
  {
    name: "Home",
    link: "/",
    icon: React.createElement(AiOutlineHome),
  },
  {
    name: "Pricelist",
    hash: "#services",
    icon: React.createElement(BsListCheck),
  },
  {
    name: "CallToAction",
    hash: "#calltoaction",
    icon: React.createElement(BsCalendarHeart),
  },
  {
    name: "Instagram",
    hash: "#instagram",
    icon: React.createElement(BsInstagram),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(BsChatHeart),
  },
] as const;
