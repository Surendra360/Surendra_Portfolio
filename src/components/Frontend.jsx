import React from "react";
import { Link } from "react-router-dom";

const Frontend = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-10 bg-gray-500 border-b">
                <div className="w-full flex flex-col gap-4 items-center justify-center mb-20 p-5 text-white mt-10">
                    <h1 className="text-4xl font-semibold mb-5 hover:text-[#16FF00] border-b-4 p-3 duration-200">
                        Front-End Lending Page
                    </h1>
                    <div className="md:flex flex-nowrap gap-10 md:px-10 justify-center items-center w-[80vw] border-b-2 py-10">
                        <div id="img" className="border-2 border-yellow-400 h-60 md:w-96 md:mb-0 mb-5 rounded-md overflow-hidden relative">
                            <img
                                className="hover:scale-150 duration-500 h-full w-full"
                                src="src/assets/burger.png"
                                alt=""
                            />
                            <div
                                id="overlay"
                                className="flex items-center justify-center w-full h-full bg-[#15ff005d] absolute top-0 left-0 duration-500"
                            >
                                <Link
                                    to="https://surendra360.github.io/BurgerRestaurant/"
                                    id="btn"
                                    className="max-w-max border-b py-1 px-3 bg-black hover:bg-yellow-500 rounded"
                                >
                                    {" "}
                                    Live Preview
                                </Link>
                            </div>
                        </div>

                        <div id='img' className='border-2 border-yellow-400 h-60 md:w-96 md:mb-0 mb-5 rounded-md overflow-hidden relative'>
                            <img className='hover:scale-150 duration-500 h-full w-full' src="src\assets\Etech.png" alt="" />
                            <div id='overlay' className='flex items-center justify-center w-full h-full bg-[#15ff005d] absolute top-0 left-0 duration-500'><Link to="https://surendra360.github.io/Etech/" id='btn' className='max-w-max border-b py-1 px-3 bg-black hover:bg-yellow-500 rounded'> Live Preview</Link></div>
                        </div>

                        <div id='img' className='border-2 border-yellow-400 h-60 md:w-96 md:mb-0 mb-5 rounded-md overflow-hidden relative'>
                          <img className='hover:scale-150 duration-500 h-full w-full' src="src\assets\planoo.png" alt="" />
                         <div id='overlay' className='flex items-center justify-center w-full h-full bg-[#15ff005d] absolute top-0 left-0 duration-500'><Link to="https://surendra360.github.io/Planoo-web-page/" id='btn' className='max-w-max border-b py-1 px-3 bg-black hover:bg-yellow-500 rounded'> Live Preview</Link></div>
                       </div>

                       <div id='img' className='border-2 border-yellow-400 h-60 md:w-96 md:mb-0 mb-5 rounded-md overflow-hidden relative'>
                          <img className='hover:scale-150 duration-500 h-full w-full' src="src\assets\quest.png" alt="" />
                           <div id='overlay' className='flex items-center justify-center w-full h-full bg-[#15ff005d] absolute top-0 left-0 duration-500'><Link to="https://surendra360.github.io/Quest.family/" id='btn' className='max-w-max border-b py-1 px-3 bg-black hover:bg-yellow-500 rounded'> Live Preview</Link></div>
                       </div>

                    </div>


                    <div className="md:flex gap-10 px-10 justify-center items-center w-[80vw] mt-20 ">
                        <div className="md:flex flex-col gap-5">  
                           <h1 className='text-3xl font-semibold max-w-max relative py-2 px-1 overflow-hidden' id='heading'><div id='line' className='absolute bottom-0 -left-14 bg-[#16FF00] w-1/2 h-1 rounded-md duration-500'></div> Medipluse Hospital</h1>
                           <p>In this page, I am using the following tech stack to create this project.  </p>
                           <p><span className='text-[#16FF00]'>Teach Stack</span> :  HTML5 | CSS3 | Js </p>
                           <Link to="https://surendra360.github.io/medipluse-clone/" className='hover:text-yellow-400 max-w-max border-b'> Live Preview</Link>
                        </div>
                        <div className='md:w-[50%] rounded-md overflow-hidden py-10 md:py-0'>
                             <video className='hover:scale-150 duration-500' muted loop autoPlay src="src\assets\medipluse.mp4"></video>
                        </div>                   
                    </div>

                    <div className="md:flex gap-10 px-10 justify-center items-center w-[80vw] mt-20 ">
                        <div className='md:w-[50%] rounded-md overflow-hidden py-10 md:py-0'>
                             <video className='hover:scale-150 duration-500' muted loop autoPlay src="src\assets\web03.mp4"></video>
                        </div>                   
                        <div className="md:flex flex-col gap-5">  
                           <h1 className='text-3xl font-semibold max-w-max relative py-2 px-1 overflow-hidden' id='heading'><div id='line' className='absolute bottom-0 -left-14 bg-[#16FF00] w-1/2 h-1 rounded-md duration-500'></div> Wev03 webPage</h1>
                           <p>In this page, I am using the following tech stack to create this project.  </p>
                           <p><span className='text-[#16FF00]'>Teach Stack</span> :  HTML5 | CSS3 | Js </p>
                           <Link to="https://surendra360.github.io/web03/" className='hover:text-yellow-400 max-w-max border-b'> Live Preview</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Frontend;
