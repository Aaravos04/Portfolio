import React from "react";

// Import Image
import image from "../assets/main.png";

import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import HeroImage from "./ui/HeroImage";

const Home = () => {
  return (
    <div id="home" className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="bg flex flex-col lg:flex-row items-center justify-center flex-1 bg-black lg:gap-18 relative">
        <div className="max-w-full w-144 px-3 py-8">
          <div>
            <p className="text-xl font-black">Hello World!</p>
            <p className="text-3xl py-1 font-bold">I'm <span className="font-black">Neelabhra Roy.</span></p>
            <p>Full Stack Web Developer</p>
            <p className="pt-5 font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, impedit quod quos iusto eius modi? Laboriosam
              obcaecati vel nisi enim.
            </p>
          </div>

          <button className="my-4 py-2 px-4 border cursor-pointer">
            resume.download()
          </button>

          <div className="flex py-4 gap-6">
            <a
              href="https://github.com/Aaravos04"
              target="blank"
              className="aspect-square rounded-full border p-3 text-lg cursor-pointer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/neelabhra-roy/"
              target="blank"
              className="aspect-square rounded-full border p-3 text-lg cursor-pointer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/neelabhra04/"
              target="blank"
              className="aspect-square rounded-full border p-3 text-lg cursor-pointer"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>

        <div className="max-w-full m-3 overflow-hidden">
          <HeroImage />
        </div>
      </div>

      <div className="absolute bg-white/4 blur-3xl h-full aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center">
        <div className="bg-white/5 blur-3xl h-2/3 aspect-square rounded-full"></div>
      </div>
    </div>
  );
};

export default Home;
