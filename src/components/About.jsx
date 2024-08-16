import React from "react";
import { Link } from "react-router-dom";
import DevelopmentSkill from "./DevelopmentSkill";
import ProgrammingLangusge from "./ProgrammingLangusge";
import ToolsAndTechnology from "./ToolsAndTechnology";

const About = () => {
  return (
    <div>
      <div className="w-screen flex items-center justify-center gap-10 bg-gray-500">
        <div className="w-3/5 flex flex-col gap-4 items-center justify-center mb-20 p-5 text-white mt-20">
          <h1 className="text-4xl font-semibold mb-5 hover:text-[#16FF00] border-b-4 p-3 duration-200">
            ABOUT
          </h1>
          <div className="flex flex-col gap-5 ">
            <p className="text-lg mb-4 border bg-gray-800 hover:border-yellow-400 duration-200 p-5">
              Hi 👋, <br /> I'm Surendra Kumar, a recent B.Tech graduate in Information
              Technology from the Oriental Institute of Science and Technology,
              Bhopal. I have a strong foundation in computer science and a
              passion for web development.
            </p>
            <p className="text-lg mb-4 border bg-gray-800 hover:border-yellow-400 duration-200 p-5">
              I am proficient in HTML, CSS, and JavaScript, with hands-on
              experience in creating visually appealing and user-friendly
              interfaces. My technical skills extend to technologies like
              Node.js, React.js, and database management with SQL and MongoDB.
            </p>
            <p className="text-lg mb-4 border bg-gray-800 hover:border-yellow-400 duration-200 p-5">
              I am currently exploring opportunities to further develop my
              skills and contribute to exciting projects. Feel free to reach out
              to me via .
              <section className="flex gap-10 p-5 mt-5">
                <section class="flex justify-center items-center">
                  <Link to="https://github.com/Surendra360">
                    <button class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                      <svg fill="none" viewBox="0 0 15 15" class="w-10">
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          fill="currentColor"
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                        ></path>
                      </svg>
                      <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-100 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                        GitHub
                      </span>
                    </button>
                  </Link>
                </section>
                <section class="flex justify-center items-center">
                <Link to="https://www.linkedin.com/in/surendra-kumar-ab90611a7">
                <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 530 512"
                      stroke-width="0"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                    </svg>
                    <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-blue-100 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Linkedin
                    </span>
                  </button>
                </Link>
                </section>
                <section class="flex justify-center items-center">
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#CD201F] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 530 512"
                      stroke-width="0"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                    <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-red-100 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Gmail
                    </span>
                  </button>
                </Link>
                </section>
              </section>
            </p>
          </div>
            <DevelopmentSkill />
            <ToolsAndTechnology />
            <ProgrammingLangusge />
        </div>
      </div>
    </div>
  );
};

export default About;

// src/About.jsx
// import React from 'react';

// const About = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
//       <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
//         <p className="text-lg mb-4">
//           Hi, I'm Surendra Kumar, a recent B.Tech graduate in Information Technology from the Oriental Institute of Science and Technology, Bhopal. I have a strong foundation in computer science and a passion for web development.
//         </p>
//         <p className="text-lg mb-4">
//           I am proficient in HTML, CSS, and JavaScript, with hands-on experience in creating visually appealing and user-friendly interfaces. My technical skills extend to technologies like Node.js, React.js, and database management with SQL and MongoDB.
//         </p>
//         <p className="text-lg mb-4">
//           I am currently exploring opportunities to further develop my skills and contribute to exciting projects. Feel free to reach out to me via <a href="mailto:surendrakeerbaniya@gmail.com" className="text-blue-500">email</a>, <a href="https://www.linkedin.com/in/surendra-kumar-ab90611a7" className="text-blue-500">LinkedIn</a>, or check out my work on <a href="https://github.com/Surendra360" className="text-blue-500">GitHub</a>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
