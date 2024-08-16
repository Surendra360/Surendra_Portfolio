import React from "react";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";

const skills = [
  { name: "C/C++", icon: <BiLogoCPlusPlus />, color: "text-purple-600" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500" },
];

const ProgrammingLangusge = () => {
  return (
    <div>
      <div className="w-screen flex items-center justify-center gap-10 bg-gray-500">
        <div className="w-3/5 flex flex-col gap-4 items-center justify-center mb-20 p-5 text-white mt-20">
          <h1 className="text-4xl font-semibold mb-5 hover:text-[#16FF00] border-b-4 p-3 duration-200">
            PROGRAMMING SKILLS
          </h1>
          <section className="w-full">
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

export default ProgrammingLangusge;
