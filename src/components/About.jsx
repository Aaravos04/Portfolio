import React from "react";
import image from "../assets/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="flex justify-center pb-24">
        <hr className="w-196 max-w-full mx-8" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        <div className="max-w-full w-96">
          <img src={image} className="" alt="image" />
        </div>

        <div className="max-w-full w-196 px-3">
          <div className="flex items-center justify-center gap-4 pb-6 w-full">
            <hr className="w-24" />
            <p className="text-center font-black text-xl">About Me</p>
            <hr className="w-24" />
          </div>

          <p>
            I'm Neelabhra Roy, a full-stack developer focused on building modern
            web applications with React.js, Node.js, Express.js, and MongoDB.
          </p>
          <br />

          <p>
            I enjoy combining problem solving with clean UI and smooth user
            experiences. Alongside web development, I'm exploring React Native,
            cloud computing, system design, and animation-focused frontend
            development.
          </p>
          <br />

          <p>
            I also enjoy competitive programming and DSA in C++, which strongly
            shapes the way I approach logic, optimization, and backend
            architecture.
          </p>
          <br />

          <p>
            Outside of coding, I'm someone who loves learning — whether it's
            technology, chess, creativity, or simply understanding how things
            work.
          </p>
          <br />

          <div className="mt-3">
            <a className="px-4 py-2 border w-fit" href="#contact">
              developer.contact()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
