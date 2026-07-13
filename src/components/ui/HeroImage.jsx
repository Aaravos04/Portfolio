import React, { useEffect, useState } from "react";
import skills from "../../data/heroImage.data.js";
import { motion } from "motion/react";

const HeroImage = () => {
  const [hover, setHover] = useState(false);
  const [state, setState] = useState(Array(9).fill(false));

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="max-w-full w-108 aspect-square grid grid-cols-3 grid-flow-row relative"
    >
      {skills.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex-1 p-6 aspect-square flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1, delay: idx * 0.1 }}
              onHoverStart={() => {
                setState((curr) =>
                  curr.map((value, i) => (i === idx ? true : value)),
                );
              }}
              onHoverEnd={() => {
                setState((curr) =>
                  curr.map((value, i) => (i === idx ? false : value)),
                );
              }}
              className={`h-full relative overflow-hidden aspect-square flex items-center justify-center flex-col gap-1 duration-500 backdrop-blur-none
              ${hover ? "" : item.bg} ${item.hoverBg} ${hover ? "text-white" : item.color} ${item.hoverColor}`}
            >
              <item.logo className="text-2xl duration-500" />
              <p className="text-sm text-center duration-500">{item.name}</p>

              {state[idx] ? (
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "200%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute h-2/1 w-4 border rotate-24 bg-white/60 blur-lg"
                ></motion.div>
              ) : null}
            </motion.div>
          </div>
        );
      })}

      <div className="absolute border-zinc-400/10 border-t border-b w-full h-1/3 top-1/3"></div>
      <div className="absolute border-zinc-400/10 border-t border-b w-full h-1/3 top-1/3 rotate-90"></div>
    </div>
  );
};

export default HeroImage;
