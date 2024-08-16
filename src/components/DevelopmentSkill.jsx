import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaExpand,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: <FaDatabase />, color: "text-green-600" },
  { name: "Express.Js", icon: <SiExpress />, color: "text-green-500" },
  { name: "React", icon: <FaReact />, color: "text-blue-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
  { name: "TailwindCss", icon: <SiTailwindcss />, color: "text-blue-400" },
  { name: "BootStrap", icon: <FaBootstrap />, color: "text-purple-700" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500" },
];

const DevelopmentSkill = () => {
  return (
    <div>
      <div className="w-screen flex items-center justify-center gap-10 bg-gray-500">
        <div className="w-3/5 flex flex-col gap-4 items-center justify-center p-5 text-white mt-20">
          <h1 className="text-4xl font-semibold mb-5 hover:text-[#16FF00] border-b-4 p-3 duration-200">
            DEVELOPMENT SKILLS
          </h1>
          <section>
            <div className="max-w-4xl w-full bg-gray-800 border hover:border-amber-400 p-8 rounded shadow-sm shadow-[#16FF00]">
              <div className="flex flex-wrap justify-start p-5 ">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`m-4 p-6 border w-40 rounded-xl shadow-lg flex flex-col items-center transition-transform duration-300 transform hover:scale-105 ${skill.color} hover:text-white`}
                  >
                    <div className="text-6xl mb-4">{skill.icon}</div>
                    <p className="text-xl font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSkill;
