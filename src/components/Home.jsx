import React from "react";
import { motion } from "motion/react";

// Assets
import image from "../assets/main.png";
import resume from "../assets/Resume.pdf";

// Icons
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Components
import Navbar from "./Navbar.jsx";
import HeroImage from "./ui/HeroImage.jsx";

const Home = () => {
  return (
    <div id="home" className="bg-black min-h-screen flex flex-col relative">
      <Navbar />
      <div className="bg flex flex-col lg:flex-row items-center justify-center flex-1 xl:gap-18 relative z-10">
        <div className="max-w-full h-120 flex flex-col justify-center w-144 px-3 py-8 text-center lg:text-left">
          <div>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-black"
            >
              Hello World!
            </motion.p>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl py-1 font-bold"
            >
              I'm <span className="font-black">Neelabhra Roy.</span>
            </motion.p>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Web Developer
            </motion.p>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-5 font-light"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, impedit quod quos iusto eius modi? Laboriosam
              obcaecati vel nisi enim.
            </motion.p>
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-fit block my-4 py-2 px-4 border cursor-pointer"
              href={resume}
              download={"resume.pdf"}
            >
              resume.download()
            </motion.a>
          </div>

          <div className="flex py-4 gap-6 justify-center lg:justify-start">
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              href="https://github.com/Aaravos04"
              target="blank"
              className="aspect-square rounded-full border p-3 text-lg cursor-pointer"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              href="https://www.linkedin.com/in/neelabhra-roy/"
              target="blank"
              className="aspect-square rounded-full border p-3 text-lg cursor-pointer"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              href="https://leetcode.com/u/neelabhra04/"
              target="blank"
              className="aspect-square rounded-full border p-3 text-lg cursor-pointer"
            >
              <SiLeetcode />
            </motion.a>
          </div>
        </div>

        <div className="max-w-full m-3 h-120 overflow-hidden">
          <HeroImage />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bg-white/4 blur-3xl h-full aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <div className="bg-white/5 blur-3xl h-2/3 aspect-square rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default Home;
