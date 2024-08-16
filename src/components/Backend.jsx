import React from 'react'
import { Link } from 'react-router-dom'

const Backend = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-10 bg-gray-500">
        <div className="w-full flex flex-col gap-4 items-center justify-center mb-20 p-5 text-white mt-10">
            <h1 className="text-4xl font-semibold mb-5 hover:text-[#16FF00] border-b-4 p-3 duration-200">
                Back-end 
            </h1>

            <div className="md:flex gap-10 px-10 justify-center items-center w-[80vw] mt-20 ">
                <div className='md:w-[80vw] h-[50vh] rounded-md overflow-hidden py-10 md:py-0'>
                     <video className='hover:scale-150 duration-500' muted loop autoPlay src="src\assets\e-appointment.mp4"></video>
                </div>                   
                <div className="md:flex flex-col gap-5">  
                   <h1 className='text-3xl font-semibold max-w-max relative py-2 px-1 overflow-hidden' id='heading'><div id='line' className='absolute bottom-0 -left-14 bg-[#16FF00] w-1/2 h-1 rounded-md duration-500'></div>E-Appointment</h1>
                   <p>In this project, there are two types of logins: 'admin' and 'user'. I am using the following tech stack to create this project. The CRUD operation is also available for both the user and admin. </p>
                   <p><span className='text-[#16FF00]'>Teach Stack</span> :  Express.js | Node.js | Mongoose | ejs | Nodemailer | Passport Authentication </p>
                   <Link to="https://e-appointment.onrender.com" className='hover:text-yellow-400 max-w-max border-b'> Live Preview</Link>
                </div>
            </div>

            <div className="md:flex gap-10 px-10 justify-center items-center w-[80vw] mt-20 ">
                <div className="md:flex flex-col gap-5">  
                   <h1 className='text-3xl font-semibold max-w-max relative py-2 px-1 overflow-hidden' id='heading'><div id='line' className='absolute bottom-0 -left-14 bg-[#16FF00] w-1/2 h-1 rounded-md duration-500'></div>Library Books</h1>
                   <p>In this Project we can perform CRUD operation on books and adding new book in library</p>
                   <p><span className='text-[#16FF00]'>Teach Stack</span> :  Express.js | Node.js | Mongoose | ejs | Nodemailer | Passport Authentication </p>
                   <Link to="https://library-management-m33b.onrender.com" className='hover:text-yellow-400 max-w-max border-b'> Live Preview</Link>
                </div>
                <div className='md:w-[40vw] h-[50vh] rounded-md overflow-hidden py-10 md:py-0'>
                     <video className='hover:scale-150 duration-500' muted loop autoPlay src="src\assets\library.mp4"></video>
                </div>                   
            </div>


        </div>
    </div>
</>
  )
}

export default Backend