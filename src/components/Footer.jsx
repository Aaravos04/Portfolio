import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
  return <div className="w-full bg-black flex items-center justify-between px-8 md:px-24 py-3">
    <p className="text-white font-semibold">Created by Neelabhra Roy</p>
    <a href="#home" className="text-white h-full aspect-square flex items-center justify-center rounded-sm p-1"><FaAngleDoubleUp /></a>
  </div>;
};

export default Footer;
