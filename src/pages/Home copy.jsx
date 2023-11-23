import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import Photo from '../assets/images/kaungminkhant.png'
import FaceBook from '../assets/social/facebook.svg'

export default function Home() {
  
  return (
       <section className=' h-screen flex justify-between items-center '>
          <div className='container flex justify-between items-center  '>
            <div className=' max-w-md space-x-3'>
              <p style={
                {
                  color:" var(--color-body-white)",
                  fontWeight: "500"
                }
              }>WELCOME TO MY WORLD</p>
                <p style={{
                  // fontWeight: "700",
                  // fontSize: "60px",
                  // lineHeight: "75px",
                  // marginBottom: "22px",
                  // fontFamily: "var(--font-secondary)",
                  // marginTop:"20px"
                }}
                className=''
                >Hi , I'm <span style = {
                  {color: "#FF014F"}
                }
                >
                   Kaung Min Khant
                  </span>
                  </p>
                <p style={{
                  // fontWeight: "700",
                  // fontSize: "60px",
                  // lineHeight: "20px",
                  // marginBottom: "22px",
                  // fontFamily: "sans-serif",
                  // marginBottom: "50px",
                }}>
                {/* <TypewriterComponent
                        options={{
                          strings:"a Full Stack Developer",
                          autoStart: true,
                          loop: true,
                        }}
                       
                  /> */}
                </p>
                <p
                style={{
                  ontSize: "16px",
                  lineHeight: "30px",
                  color: "var(--color-lightn)",
                  paddingRight: "16%",
                  opacity: "0.9",
                  width : "600px"
                }}  
                >
                  I use animation as a third dimension by which to simplify experiences and 
                  kuiding thro each and every interaction. I’m not adding motion just to spruce 
                  things up, but doing it in ways that.
                </p>
               {/* social Block */}
               <div className=' flex gap-11 items-center'>
                <div
                  className='mt-5'>FIND WITH ME
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
                  className='mt-5'>BEST SKILL ON
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
