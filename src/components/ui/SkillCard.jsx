import React from "react";

const SkillCard = ({ item }) => {
  return (
    <div
      className={`flex gap-1 items-center w-fit border border-neutral-400/20 px-2.5 py-0.5 rounded-xs duration-350 cursor-pointer bg-zinc-900 ${item.hover}`}
    >
      <item.logo className="text-sm" />
      <p className="text-sm">{item.name}</p>
    </div>
  );
};

export default SkillCard;
