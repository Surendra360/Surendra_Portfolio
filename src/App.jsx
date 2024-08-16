import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from "react-router-dom";
import Project from './components/Project';
import Home from './components/Home';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-screen h-[100vh] bg-black'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App