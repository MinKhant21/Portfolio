import React from 'react'
import { Link } from 'react-router-dom';

import  AboutImage from '../assets/images/aboutimage.webp'
export default function About() {
  
  return (
    <div className=' container  md:mx-auto py-10 flex-row  md:flex justify-start gap-60'>
      <div className='mx-3 '>
        <img src={AboutImage} className=' h-[450px] w-[500px]  ' />
      </div>
      <div className=' mx-3 mt-3'>
        <div>
          <h1 className='text-gray-700 text-xl  border-blue-700  font-extrabold' >About Me</h1>
          <p className=' max-w-3xl mt-3 text-justify'>
            I am a <b><i>FULL-STACK DEVLOPER</i></b> from Myanmar.I have three years experiences in Software Development.
            creativity and an adept ability to transform designs into seamless fully functional digital experiences. I bring a unique blend of vision and technical prowess to every projects.
            Seeking to leverage broad development experience and
            hands-on technical expertise in a challenging role as a Full Stack Developer.     
          </p>
        </div>
        <div className='mt-3 flex justify-start items-center gap-10'>
          <div>
            <h1 className='text-gray-700 text-xl  border-blue-700  font-extrabold' >NAME</h1>
            <p>Kaung Min Khant</p>
          </div>
          <div>
            <h1 className='text-gray-700 text-xl  border-blue-700  font-extrabold' >EMAIL</h1>
            <p>kaungminkhant6889@gmail.com</p>
          </div>
        </div>
        <div className=' mt-3'>
          <h1 className='text-gray-700 text-xl  border-blue-700  font-extrabold' >EMPLOYMENT</h1>
          <p>Open</p>
        </div>

      </div>
      
    </div>
  )
}
