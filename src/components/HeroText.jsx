import React from 'react'
import { motion, useScroll } from "framer-motion";
import 'remixicon/fonts/remixicon.css'
import { FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiPassport } from 'react-icons/si';
import { TbBrandFramerMotion, TbBrandRedux } from 'react-icons/tb';




const HeroText = () => {
  return (
    <div className='fixed left-0 bottom-0'>
        <motion.div className='flex gap-24 py-2 bg-gray-800 text-[2.55vw] overflow-hidden'
            animate={{
                x:-1718
            }}
            transition={{
                duration: 11,
                repeat: Infinity,
                // repeatType: 'reverse',
                ease: "linear",
            
            }}
        >
        <h1 className='whitespace-nowrap'><span><i class="ri-html5-fill"></i></span> <span>HTML5</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-css3-fill"></i></span> <span>CSS3</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-javascript-fill"></i></span> <span>JvaScript</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-reactjs-line"></i></span> <span>React</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-tailwind-css-fill"></i></span> <span>Tailwind-CSS</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-bootstrap-fill"></i></span> <span>Bootstrap</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-html5-fill"></i></span> <span>HTML5</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-css3-fill"></i></span> <span>CSS3</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-javascript-fill"></i></span> <span>JvaScript</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-reactjs-line"></i></span> <span>React</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-tailwind-css-fill"></i></span> <span>Tailwind-CSS</span></h1>
        <h1 className='whitespace-nowrap'><span><i class="ri-bootstrap-fill"></i></span> <span>Bootstrap</span></h1>
        </motion.div>
        <motion.div className='flex gap-14 py-2 bg-gray-800 text-[2.55vw] overflow-hidden'
            initial={{
                x:-1670
            }}
            animate={{
                x:0 
            }}
            transition={{
                duration: 11,
                repeat: Infinity,
                ease: "linear",
            
            }}
        >
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><FaDatabase /></span> <span>MongoDB</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span></span> <SiExpress /> <span>Express.Js</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><FaNodeJs /></span> <span>Node.js</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><TbBrandFramerMotion /></span> <span>FramerMotion</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><SiPassport /></span> <span>PassportJs</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><TbBrandRedux /></span> <span>Redux</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><FaDatabase /></span> <span>MongoDB</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span></span> <SiExpress /> <span>Express.Js</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><FaNodeJs /></span> <span>Node.js</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><TbBrandFramerMotion /></span> <span>FramerMotion</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><SiPassport /></span> <span>PassportJs</span></h1>
        <h1 className='whitespace-nowrap flex items-center gap-2'><span><TbBrandRedux /></span> <span>Redux</span></h1>
  
        </motion.div>
    </div>
  )
}

export default HeroText