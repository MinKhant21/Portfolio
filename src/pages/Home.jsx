import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import Photo from '../assets/images/kaungminkhant.png'
import FaceBook from '../assets/social/facebook.png'
import GitHub from '../assets/social/github.png'
import LinkIn from '../assets/social/linkin.png'
import Laravel from '../assets/skills/laravel.png'
import ReactIcon from '../assets/skills/react.png'
import NodeJS from '../assets/skills/nodejs.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTheme from '../hook/useTheme'
export default function Home() {

  let {theme} = useTheme();
  
  return (
       <section className=' h-screen flex justify-center items-center  mx-auto '>
          <div className='container flex justify-between items-center space-x-3 px-10'>
            {/* Left Side */}
            <div>
              <p style={{fontWeight: "500",marginBottom:"10px"}} className={`${theme === 'light' ? 'text-black' : "text-slate-600"}`}>WELCOME TO MY WORLD</p>
              <p className=''>
                <span className={` mt-10 mb-10 text-3xl font-extrabold md:text-5xl ${theme === 'light' ? 'text-black' : "text-slate-600"}`}>Hi , I'm</span> 
                <span style = {
                    {color: "#FF014F"}
                  }
                  className=' text-3xl ml-4 md:text-6xl  font-extrabold '
                  >
                  Kaung Min Khant
                </span>
              </p>
              <p  className={` mt-5 font-extrabold text-3xl font-serif mb-6 md:text-5xl ${theme === 'light'  ? 'text-black' : "text-slate-600"}`}>
                  <TypewriterComponent
                          options={{
                            strings:"a Full Stack Developer",
                            autoStart: true,
                            loop: true,
                          }}
                    />
              </p>

              <p className=' text-slate-600 text-lg max-w-md md:max-w-3xl' 
                >
                  I use animation as a third dimension by which to simplify experiences and 
                  kuiding thro each and every interaction. I’m not adding motion just to spruce 
                  things up, but doing it in ways that.
                </p>

                {/* social Block */}
               <div className=' flex gap-11 items-center mt-3'>
                <div
                  className='mt-5'>
                    <p className=' text-slate-700 font-semibold'>FIND WITH ME</p>
                  <div className="mt-5 flex gap-5 items-center ">
                      <img src={FaceBook} className=' w-[50px]  h-[50px] rounded-full bg-purple-600  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1'/>
                      <img src={LinkIn} className=' object-fill w-[50px]  h-[50px]  p-2 rounded-full bg-blue-700 shadow-lg flex justify-center items-center hover:-translate-y-1'  alt="" />
                      <img src={GitHub}  className=' bg-green-700 w-[50px] h-[50px] p-2  shadow-lg flex justify-center items-center hover:-translate-y-1 rounded-full' alt="" />
                  </div>
                  </div>

                  <div
                  className='mt-5 '>
                    <p className=' text-slate-700 font-semibold'>BEST SKILL ON</p>
                  <div className="mt-5 flex gap-5 items-center ">
                      <img src={Laravel} className=' rounded-full w-[60px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1' />
                      <img src={ReactIcon} className='w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1 rounded-full'/>
                      <img src={NodeJS} className=' rounded-full w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1' />
                  </div>
                  </div>
               </div>
            </div>
            {/* Right Side */}
            <div className='hidden md:block '>
              <div className={`h-[500px] w-[500px] rounded-full relative  p-3 ${theme === 'light' ? 'bg-slate-50' : "bg-black"}  shadow-xl  `} >
                <img src={Photo} className='object-cover w-full h-full rounded-full   ' />
              </div>
            </div>
          </div>
       </section>
  )
}
