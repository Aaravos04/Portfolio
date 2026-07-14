import React, { useState } from "react";
import { motion } from "motion/react";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaTerminal } from "react-icons/fa;

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="flex items-center justify-between px-8 sm:px-12 py-4 lg:z-10">
      <div className="sm:px-12">
        <p className="text-2xl font-semibold"><FaTerminal className="inline" /> neelabhra</p>
      </div>

      <ul className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 px-12">
        <li className="font-semibold duration-350 ease-in-out">
          <a href="#home" className="hover:underline">
            .home()
          </a>
        </li>

        <li className="font-semibold duration-350 ease-in-out">
          <a href="#about" className="hover:underline">
            .about()
          </a>
        </li>

        <li className="font-semibold duration-350 ease-in-out">
          <a href="#skills" className="hover:underline">
            .skills()
          </a>
        </li>

        <li className="font-semibold duration-350 ease-in-out">
          <a href="#projects" className="hover:underline">
            .projects()
          </a>
        </li>

        <li className="font-semibold duration-350 ease-in-out">
          <a href="#contact" className="hover:underline">
            .contact()
          </a>
        </li>
      </ul>

      <div className="sm:px-12 block lg:hidden z-50">
        <button
          className="text-3xl p-1"
          onClick={() => setSidebarActive((currentState) => !currentState)}
        >
          <IoMenu />
        </button>
      </div>

      <motion.div
        className="w-screen h-screen bg bg-black absolute z-50 top-0"
        initial={{ left: "100%" }}
        animate={{ left: sidebarActive ? "0" : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ul className="flex flex-col h-full items-center justify-center gap-12 px-12">
          <li className="font-semibold duration-350 ease-in-out">
            <a
              href="#home"
              className="hover:underline"
              onClick={() => setSidebarActive((currentState) => !currentState)}
            >
              .home()
            </a>
          </li>

          <li className="font-semibold duration-350 ease-in-out">
            <a
              href="#about"
              className="hover:underline"
              onClick={() => setSidebarActive((currentState) => !currentState)}
            >
              .about()
            </a>
          </li>

          <li className="font-semibold duration-350 ease-in-out">
            <a
              href="#skills"
              className="hover:underline"
              onClick={() => setSidebarActive((currentState) => !currentState)}
            >
              .skills()
            </a>
          </li>

          <li className="font-semibold duration-350 ease-in-out">
            <a
              href="#projects"
              className="hover:underline"
              onClick={() => setSidebarActive((currentState) => !currentState)}
            >
              .projects()
            </a>
          </li>

          <li className="font-semibold duration-350 ease-in-out">
            <a
              href="#contact"
              className="hover:underline"
              onClick={() => setSidebarActive((currentState) => !currentState)}
            >
              .contact()
            </a>
          </li>
        </ul>

        <div className="m-8 absolute top-0 right-0">
          <button
            className="text-3xl p-1"
            onClick={() => setSidebarActive((currentState) => !currentState)}
          >
            <FaXmark />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
