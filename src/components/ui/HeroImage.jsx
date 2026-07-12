import React, { useEffect, useState } from "react";
import skills from "../../data/heroImage.data.js";
import { motion } from "motion/react";

const HeroImage = () => {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    console.log(hover)
  }, [hover])
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="h-108 aspect-square grid grid-cols-3 grid-flow-row relative z-10"
    >
      {skills.map((item, idx) => {
        return (
          <div key={idx} className="flex-1 p-6 aspect-square flex items-center justify-center">
            <div
              className={`h-full aspect-square flex items-center justify-center flex-col gap-1 z-10 duration-500 backdrop-blur-none
              ${hover ? "" : item.bg} ${item.hoverBg} ${hover ? "text-white" : item.color} ${item.hoverColor}`}
            >
              <item.logo className="text-2xl duration-500" />
              <p className="text-sm text-center duration-500">{item.name}</p>
            </div>
          </div>
        );
      })}

      <div className="absolute border-zinc-400/10 border-t border-b w-full h-1/3 top-1/3 z-0"></div>
      <div className="absolute border-zinc-400/10 border-t border-b w-full h-1/3 top-1/3 z-0 rotate-90"></div>
    </div>
  );
};

export default HeroImage;
