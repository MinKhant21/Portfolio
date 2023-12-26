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
          <p className=' max-w-3xl mt-3'>
            I am a dynamic developer from the state of Wisconsin, fueled by an insatiable passion for crafting awe-inspiring websites and captivating emails. Armed with a knack for creativity and an adept ability to transform designs into seamless fully functional digital experiences. I bring a unique blend of vision and technical prowess to every project. My goal is to not only meet but exceed expectations, sculpting visually striking and intuitively responsive websites and emails that leave a lasting impression on users. Let my skills and expertise help you in the journey of turning concepts into captivating digital realities.
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
