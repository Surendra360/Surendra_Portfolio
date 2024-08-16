import React from 'react'
import { Link } from 'react-router-dom'
import Frontend from './Frontend'
import FrontendAnimation from './FrontendAnimation'
import Backend from './Backend'

const Project = () => {
  return (
    <div>
      <Frontend />
      <FrontendAnimation />
      <Backend />
    </div>
  )
}

export default Project