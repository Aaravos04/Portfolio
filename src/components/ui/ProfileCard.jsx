import React from "react";
import { HiExternalLink } from "react-icons/hi";

const ProfileCard = ({ name, link, logo, text }) => {
  return (
    <div className="border border-neutral-400/20 rounded-xs flex items-center gap-3 px-3 py-2 bg-zinc-900 flex-1">
      <div className="text-xl">{logo}</div>

      <div className="flex w-full items-center justify-between">
        <div>
          <p className="text-sm font-semibold">{name}</p>
          {text && <p className="text-xs text-wrap">{text}</p>}
        </div>
        <a className="text-sm" href={link} target="blank">
          <HiExternalLink className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
