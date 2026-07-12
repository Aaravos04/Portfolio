import React from "react";
import skills from "../data/skills.data.js";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  SiChessdotcom,
  SiCodeforces,
  SiLeetcode,
  SiMonkeytype,
} from "react-icons/si";

import SkillCard from "./ui/SkillCard.jsx";
import ProfileCard from "./ui/ProfileCard.jsx";

const Skills = () => {
  return (
    <div id="skills">
      <div className="flex justify-center p-24">
        <hr className="w-196 max-w-full mx-8" />
      </div>

      <div className="flex justify-center flex-wrap gap-8">
        <div className="w-120 max-w-full m-4 p-2 h-fit">
          <div className="flex items-center justify-center gap-4 pb-3 w-full">
            <hr className="w-24" />
            <p className="text-center font-black text-xl">Skills</p>
            <hr className="w-24" />
          </div>

          <div className="py-1">
            <p className="py-0.5 font-bold">Languages</p>
            <div className="flex flex-wrap gap-1">
              {skills.languages.map((item, index) => {
                return <SkillCard key={index} item={item} />;
              })}
            </div>
          </div>

          <div className="py-1">
            <p className="py-0.5 font-bold">Frontend</p>
            <div className="flex flex-wrap gap-1">
              {skills.frontend.map((item, index) => {
                return <SkillCard key={index} item={item} />;
              })}
            </div>
          </div>

          <div className="py-1">
            <p className="py-0.5 font-bold">Backend & Database</p>
            <div className="flex flex-wrap gap-1">
              {skills.backend.map((item, index) => {
                return <SkillCard key={index} item={item} />;
              })}
            </div>
          </div>

          <div className="py-1">
            <p className="py-0.5 font-bold">Tools & Deployment</p>
            <div className="flex flex-wrap gap-1">
              {skills.tools.map((item, index) => {
                return <SkillCard key={index} item={item} />;
              })}
            </div>
          </div>
        </div>

        <div className="w-120 max-w-full m-4 p-2 h-fit">
          <div className="flex items-center justify-center gap-4 pb-3 w-full">
            <hr className="w-24" />
            <p className="text-center font-black text-xl">Profiles</p>
            <hr className="w-24" />
          </div>

          <div className="py-1 pb-1.5">
            <p className="py-0.5 font-bold">Developer</p>
            <div className="flex flex-wrap gap-2">
              <ProfileCard
                name={"Github"}
                link={"https://github.com/Aaravos04"}
                logo={<FaGithub />}
              />

              <ProfileCard
                name={"Linkedin"}
                link={"https://www.linkedin.com/in/neelabhra-roy/"}
                logo={<FaLinkedin />}
              />
            </div>
          </div>

          <div className="py-1 pb-1.5">
            <p className="py-0.5 font-bold">Data Structures & Algorithms</p>
            <div className="flex flex-wrap gap-2">
              <ProfileCard
                name={"Leetcode"}
                link={"https://leetcode.com/u/neelabhra04/"}
                logo={<SiLeetcode />}
                text={"Rating: 2275 (Guardian)"}
              />

              <ProfileCard
                name={"Codeforces"}
                link={"https://codeforces.com/profile/Neelabhra"}
                logo={<SiCodeforces />}
                text={"Rating: 1568 (Specialist)"}
              />
            </div>
          </div>

          <div className="py-1 pb-1.5">
            <p className="py-0.5 font-bold">Hobbies</p>
            <div className="flex flex-wrap gap-2">
              <ProfileCard
                name={"Chess.com"}
                link={"https://www.chess.com/member/aaravos04"}
                logo={<SiChessdotcom />}
                text={"Rating: 1360"}
              />

              <ProfileCard
                name={"Monkeytype"}
                link={"https://monkeytype.com/profile/aaravos04"}
                logo={<SiMonkeytype />}
                text={"Speed: 70+ WPM"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
