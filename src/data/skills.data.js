import { FaBootstrap, FaGit, FaGitAlt, FaGithub, FaJava, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiCplusplus, SiCss, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiMongoose, SiMysql, SiNetlify, SiPostman, SiPython, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skills = {
    languages: [
        {
            name: "C/C++",
            logo: SiCplusplus,
            hover: "hover:bg-[#00599C]/84"
        },
        {
            name: "Javascript",
            logo: SiJavascript,
            hover: "hover:bg-[#F7DF1E]/84"
        },
        {
            name: "Python",
            logo: SiPython,
            hover: "hover:bg-[#3776AB]/84"
        },
        {
            name: "Java",
            logo: FaJava,
            hover: "hover:bg-[#F01F28]/84"
        },
    ],
    frontend: [
        {
            name: "HTML",
            logo: SiHtml5,
            hover: "hover:bg-[#E34F26]/84"
        },
        {
            name: "CSS",
            logo: SiCss,
            hover: "hover:bg-[#663399]/84"
        },
        {
            name: "Javascript",
            logo: SiJavascript,
            hover: "hover:bg-[#F7DF1E]/84"
        },
        {
            name: "React",
            logo: FaReact,
            hover: "hover:bg-[#61DAFB]/84"
        },
        {
            name: "Framer Motion",
            logo: TbBrandFramerMotion,
            hover: "hover:bg-[#FFDB2A]/84"
        },
        {
            name: "Tailwind CSS",
            logo: SiTailwindcss,
            hover: "hover:bg-[#06B6D4]/84"
        },
        {
            name: "Bootstrap",
            logo: FaBootstrap,
            hover: "hover:bg-[#7952B3]/84"
        },
    ],
    backend: [
        {
            name: "Node.js",
            logo: FaNodeJs,
            hover: "hover:bg-[#5FA04E]/84"
        },
        {
            name: "Express.js",
            logo: SiExpress,
            hover: "hover:bg-[#000000]/84"
        },
        {
            name: "MongoDB",
            logo: SiMongodb,
            hover: "hover:bg-[#47A248]/84"
        },
        {
            name: "MySQL",
            logo: SiMysql,
            hover: "hover:bg-[#4479A1]/84"
        },
        {
            name: "Mongoose",
            logo: SiMongoose,
            hover: "hover:bg-[#880000]/84"
        },
    ],
    tools: [
        {
            name: "Git",
            logo: FaGitAlt,
            hover: "hover:bg-[#F03C2E]/84"
        },
        {
            name: "Github",
            logo: FaGithub,
            hover: "hover:bg-[#181717]/84"
        },
        {
            name: "Visual Studio Code",
            logo: VscVscode,
            hover: "hover:bg-[#0080FF]/84"
        },
        {
            name: "Postman",
            logo: SiPostman,
            hover: "hover:bg-[#FF6C37]/84"
        },
        {
            name: "Netlify",
            logo: SiNetlify,
            hover: "hover:bg-[#00C7B7]/84"
        },
    ],
};

export default skills;