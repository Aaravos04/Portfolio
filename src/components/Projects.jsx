import React from "react";
import image from "../assets/main.png";
import { VscGlobe } from "react-icons/vsc";
import { VscCode } from "react-icons/vsc";

const Projects = () => {
  return (
    <div id="projects">
      <div className="flex justify-center py-24">
        <hr className="w-196 max-w-full mx-8" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 pb-12">
          <hr className="w-24" />
          <p className="text-2xl font-black">Projects</p>
          <hr className="w-24" />
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {[...Array(3)].map((item, index) => {
            return (
              <div key={index} className="w-84">
                <img className="aspect-video w-full" src={image} alt="" />
                <p className="font-bold text-lg py-1.5">Project Name</p>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Distinctio, quam?
                </p>

                <div className="py-2.5 flex items-center flex-wrap gap-0.5">
                  <span className="font-black">Tech Stack: </span>
                  {[
                    "HTML",
                    "CSS",
                    "Javascript",
                    "React.js",
                    "Node.js",
                    "Express",
                    "TailwindCSS",
                    "MongoDB",
                    "Framer Motion",
                  ].map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="px-2 py-0.5 rounded-xs bg-neutral-900 border border-zinc-400/20"
                      >
                        <p className="text-sm">{item}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-2">
                  <a
                    href=""
                    className="flex-1 border px-2 py-1 flex items-center justify-center gap-1.5 text-sm"
                  >
                    <VscGlobe />
                    <p>demo.launch()</p>
                  </a>

                  <a
                    href=""
                    className="flex-1 border px-2 py-1 flex items-center justify-center gap-1.5 text-sm"
                  >
                    <VscCode />
                    <p>source.view()</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
