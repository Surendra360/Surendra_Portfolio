import React from 'react'
import { Link } from 'react-router-dom'

const FrontendAnimation = () => {
  return (
    <>
            <div className="flex flex-col items-center justify-center gap-10 bg-black">
                <div className="w-full flex flex-col gap-4 items-center justify-center mb-20 p-5 text-white mt-10">
                    <h1 className="text-4xl font-semibold mb-5 hover:text-[#16FF00] border-b-4 p-3 duration-200">
                        Front-End Animation
                    </h1>

                    <div className="md:flex gap-10 px-10 justify-center items-center w-[80vw] mt-20 ">
                        <div className="md:flex flex-col gap-5">  
                           <h1 className='text-3xl font-semibold max-w-max relative py-2 px-1 overflow-hidden' id='heading'><div id='line' className='absolute bottom-0 -left-14 bg-[#16FF00] w-1/2 h-1 rounded-md duration-500'></div> Brain Space</h1>
                           <p>In this page, I am using the following tech stack to create and animate this project.  </p>
                           <p><span className='text-[#16FF00]'>Teach Stack</span> :  HTML5 | CSS3 | Js | Gsap </p>
                           <Link to="https://surendra360.github.io/brain-space-sukumar/" className='hover:text-yellow-400 max-w-max border-b'> Live Preview</Link>
                        </div>
                        <div className='md:w-[50%] rounded-md overflow-hidden py-10 md:py-0'>
                             <video className='hover:scale-150 duration-500' muted loop autoPlay src="/assets/brain space.mp4"></video>
                        </div>                   
                    </div>

                    <div className="md:flex gap-10 px-10 justify-center items-center w-[80vw] mt-20 ">
                        <div className='md:w-[50%] rounded-md overflow-hidden py-10 md:py-0'>
                             <video className='hover:scale-150 duration-500' muted loop autoPlay src="/assets/Elastic.mp4"></video>
                        </div>                   
                        <div className="md:flex flex-col gap-5">  
                           <h1 className='text-3xl font-semibold max-w-max relative py-2 px-1 overflow-hidden' id='heading'><div id='line' className='absolute bottom-0 -left-14 bg-[#16FF00] w-1/2 h-1 rounded-md duration-500'></div> We Think Elastic</h1>
                           <p>In this page, I am using the following tech stack to create and animate this project.  </p>
                           <p><span className='text-[#16FF00]'>Teach Stack</span> :  HTML5 | CSS3 | Js | Gsap </p>
                           <Link to="https://surendra360.github.io/We-think-elastic/" className='hover:text-yellow-400 max-w-max border-b'> Live Preview</Link>
                        </div>
                    </div>
                    
                    <div className="md:flex gap-10 px-10 justify-center items-center w-[80vw] mt-20 ">
                        <div className="md:flex flex-col gap-5">  
                           <h1 className='text-3xl font-semibold max-w-max relative py-2 px-1 overflow-hidden' id='heading'><div id='line' className='absolute bottom-0 -left-14 bg-[#16FF00] w-1/2 h-1 rounded-md duration-500'></div> DUO Animation</h1>
                           <p>In this page, I am using the following tech stack to create and animate this project.  </p>
                           <p><span className='text-[#16FF00]'>Teach Stack</span> :  HTML5 | CSS3 | Js | Gsap </p>
                           <Link to="https://surendra360.github.io/DUo-animation/" className='hover:text-yellow-400 max-w-max border-b'> Live Preview</Link>
                        </div>
                        <div className='md:w-[50%] rounded-md overflow-hidden py-10 md:py-0'>
                             <video className='hover:scale-150 duration-500' muted loop autoPlay src="/assets/duo.mp4"></video>
                        </div>                   
                    </div>

                </div>
            </div>
        </>
  )
}

export default FrontendAnimation