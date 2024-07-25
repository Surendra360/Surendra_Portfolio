import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav className="w-screen bg-black text-white font-semibold flex items-center justify-between px-10 py-5 border-b">
            <div>
                <Link to="/"><h1 className=' w-10 h-10 p-1 border rounded-full flex items-center justify-center'>S<span className='text-[#16FF00]'>K</span></h1></Link>
            </div>
            <div className='flex items-center justify-center gap-12 text-lg'>
                
                <Link to='/home' className='hover:text-[#16FF00] duration-200'>Home</Link>
                <Link to='/about' className='hover:text-[#16FF00] duration-200'>About</Link>
                <Link to='/Skills' className='hover:text-[#16FF00] duration-200'>Skills</Link>
                <Link to='/Projects' className='hover:text-[#16FF00] duration-200'>Projecs</Link>
            </div>
            <div>
                <button  className='px-3 py-1 border border-[#16FF00] rounded'>Resume</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav