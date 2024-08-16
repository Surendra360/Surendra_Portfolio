import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white font-semibold flex items-center justify-between px-4 py-5 border-b sm:w-full md:px-10 lg:px-20 relative">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="w-10 h-10 p-1 border rounded-full flex items-center justify-center">
              S<span className="text-[#16FF00]">K</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center gap-12 text-lg">
          <Link to="/home" className="hover:text-[#16FF00] duration-200">Home</Link>
          <Link to="/about" className="hover:text-[#16FF00] duration-200">About</Link>
          <Link to="/projects" className="hover:text-[#16FF00] duration-200">Projects</Link>
        </div>
        <div className="md:hidden flex justify-end">
          <button
            className="px-3 py-1 border border-[#16FF00] rounded"
            onClick={toggleMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="md:flex hidden justify-end">
          <a href="./assets/resume.pdf" download>
            <button className="px-3 py-1 border border-[#16FF00] rounded">
              Resume
            </button>
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex absolute top-14 right-0 flex-col justify-center gap-4 p-4 bg-gray-800 text-white">
          <Link to="/home" className="hover:text-[#16FF00] duration-200">Home</Link>
          <Link to="/about" className="hover:text-[#16FF00] duration-200">About</Link>
          <Link to="/projects" className="hover:text-[#16FF00] duration-200">Projects</Link>
          <a href="./assets/resume.pdf" download>
            <button className="px-3 py-1 border border-[#16FF00] rounded">
              Resume
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;