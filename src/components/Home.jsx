import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HeroText from "./HeroText";

const Home = () => {
  return (
    <div>
      <div className="h-screen bg-gray-500 text-white flex flex-col items-center justify-center">
        <div className="w-5/6 mb-10 md:flex items-center justify-center md:gap-20">
          <section className="flex flex-col md:w-[50%]">
            <h1 className="text-2xl font-semibold mb-2"><span className="text-[#16FF00]">Hi,</span> My name is</h1>
            <h1 className="max-sm:text-[2rem] text-[5rem] mb-5 font-semibold ">
              Surendra Kumar
            </h1>
            <p className="text-xl">
               Full Stack Developer specializing
              in <span className="text-[#16FF00]">MERN Stack</span> development. 
            </p>

            <Link to="/about" className="max-w-max">
              <button class="w-40 relative px-3 mt-5 py-2 rounded-md bg-gray-800 isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                Explore now
              </button>
            </Link>
          </section>
          <section className="p-10">
            <img src="assets/desk profile.gif" alt="" />
          </section>

          <section className="hidden w-[40%] rounded">
            <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
              <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span class="text-5xl font-bold">Jr</span>
                <p class="text-amber-300 font-thin">- Frontend Developer -</p>
              </div>
            </div>
          </section>
        </div>
          
          <div className="py-10 ">
          <HeroText />
          </div>

      </div>
    </div>
  );
};

export default Home;
