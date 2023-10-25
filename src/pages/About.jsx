import React from 'react'
import Photo from '../assets/images/kaungminkhant.png'
import Arrow from '../assets/arrow.svg'
export default function About() {
  
  return (
    <>
      <div className="container ">
        <p className=' font-sans font-semibold text-3xl flex justify-start items-center p-4 text-gray-500'>About
        </p>
        <p className=' font-sans font-semibold text-3xl flex justify-start items-center p-4 text-gray-500'>
          LEARN MORE ABOUT ME
        </p>
        <div>
          <div>
            <img src={Photo} alt=""  className=' w-[350px] h-[350px] opacity-1'/>
          </div>
          <div>
            <h2>Full-Stack Developer</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div>
              <div>
                <img src={Arrow} className=' bg-green-500' alt="" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
