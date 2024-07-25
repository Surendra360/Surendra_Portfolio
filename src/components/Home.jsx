import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="max-sm:w-full max-sm:items-start w-[100%] h-screen bg-black text-white flex flex-col items-center justify-center font-[Kanit] ">
      <div className="max-sm:w-[79%] max-sm:p-2 w-5/6 h-full mt-32 ">
        <section className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-5">Hi,</h1>
        <h1 className="text-2xl font-semibold mb-5"> My name is</h1>
        <h1 className="max-sm:text-[2rem] text-[3em] mb-10 ">Surendra Kumar</h1>
        </section>
        <section className=" max-sm:w-full max-sm:text-sm  w-full text-xl font-semibold ">
          <p>
          Dedicated and results-oriented Full Stack Developer specializing in MERN stack development. Proficient in building dynamic and responsive web applications with a strong emphasis on backend development using React.Js Node.js and Express. Experienced in handling image uploads with Multer and ImageKit and creating engaging user interfaces with animations. Passionate about leveraging modern technologies to solve real-world problems and deliver high-quality solutions.
          </p>
        </section>
      </div>

    </div>
    </div>
  )
}

export default Home