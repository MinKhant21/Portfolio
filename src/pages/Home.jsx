import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import Photo from '../assets/images/kaungminkhant.png'
import FaceBook from '../assets/social/facebook.svg'

export default function Home() {
  
  return (
       <section className=' h-screen flex justify-between items-center '>
          <div className='container flex justify-between items-center space-x-3 px-10'>
            {/* Left Side */}
            <div>
              <p style={{color:" var(--color-body-white)",fontWeight: "500"}}>WELCOME TO MY WORLD</p>
              <p className='mt-10 mb-10 text-3xl font-extrabold md:text-5xl'>Hi , I'm 
                <span style = {
                    {color: "#FF014F"}
                  }
                  className='text-3xl ml-4 md:text-6xl'
                  >
                  Kaung Min Khant
                </span>
              </p>
              <p  className=' font-extrabold text-3xl font-serif mb-6 md:text-5xl'>
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
                    <div className=' w-[50px]  h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1'>
                      <img src={FaceBook} width={"15px"} style={{
                        top: "0",
                        left: "0"
                      }}  alt="" />
                    </div>
                    <div className=' w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1'>
                      <img src={FaceBook} width={"15px"} style={{
                        top: "0",
                        left: "0"
                      }}  alt="" />
                    </div>
                    <div className=' w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1'>
                      <img src={FaceBook} width={"15px"} style={{
                        top: "0",
                        left: "0"
                      }}  alt="" />
                    </div>
                  </div>
                  </div>

                  <div
                  className='mt-5 '>
                    <p className=' text-slate-700 font-semibold'>BEST SKILL ON</p>
                  <div className="mt-5 flex gap-5 items-center ">
                    <div className=' w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1 '>
                      <img src={FaceBook} width={"15px"} style={{
                        top: "0",
                        left: "0"
                      }}  alt="" />
                    </div>
                    <div className=' w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1'>
                      <img src={FaceBook} width={"15px"} style={{
                        top: "0",
                        left: "0"
                      }}  alt="" />
                    </div>
                    <div className=' w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1'>
                      <img src={FaceBook} width={"15px"} style={{
                        top: "0",
                        left: "0"
                      }}  alt="" />
                    </div>
                  </div>
                  </div>
               </div>
            </div>
            {/* Right Side */}
            <div className='hidden md:block'>
              <div className=' h-[500px] w-[500px]  p-3 bg-slate-50 object-cover shadow-xl rounded-md ' >
                <img src={Photo} alt="" style={{
                      top: "0",
                      left: "0"
                }} />
              </div>
            </div>
          </div>
       </section>
  )
}
