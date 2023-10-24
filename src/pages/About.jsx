import React from 'react'
import Photo from '../assets/images/kaungminkhant.png'
export default function About() {
  
  return (
    <>
      <div className="container mx-auto shadow-lg h-[700px] ">
        <p className=' font-sans font-semibold text-3xl flex justify-start items-center p-4 text-gray-500'>About
        </p>
        <p className=' font-sans font-semibold text-3xl flex justify-start items-center p-4 text-gray-500'>
          LEARN MORE ABOUT ME
        </p>
        <div>
          <img src={Photo} alt=""  className=' w-[350px] h-[350px] opacity-1'/>
        </div>
      </div>
    </>
  )
}
