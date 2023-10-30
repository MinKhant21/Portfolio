import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import Photo from '../assets/images/kaungminkhant.png'
export default function Home() {
  
  return (
       <section className='h-[700px] flex justify-center items-center'>
          <div className='container flex'>
            <div >
              <span style={
                {
                  color:" var(--color-body-white)",
                  fontWeight: "500"
                }
              }>WELCOME TO MY WORLD</span>
                <p style={{
                  fontWeight: "700",
                  fontSize: "60px",
                  lineHeight: "75px",
                  marginBottom: "22px",
                  fontFamily: "var(--font-secondary)",
                  marginTop:"20px"
                }}>Hi , I'm <span style = {
                  {color: "#FF014F"}
                }
                >
                   Kaung Min Khant
                  </span>
                  </p>
                <p style={{
                  fontWeight: "700",
                  fontSize: "60px",
                  lineHeight: "20px",
                  marginBottom: "22px",
                  fontFamily: "sans-serif",
                  marginBottom: "50px",
                }}>
                <TypewriterComponent
                        options={{
                          strings:"a Full Stack Developer",
                          autoStart: true,
                          loop: true,
                        }}
                       
                  />
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
            </div>
            <div className=' bg-slate-400'>
              <div className='h-[500px] w-[500px]  p-3 bg-slate-50 shadow-xl rounded-md ' >
                <img src={Photo} alt="" className='' />
              </div>
            </div>
          </div>
       </section>
  )
}
