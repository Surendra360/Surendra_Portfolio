import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from "react-router-dom";
import Project from './components/Project';
import Home from './components/Home';

const App = () => {
  return (
    <div className='w-screen h-[100vh] bg-black'>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App