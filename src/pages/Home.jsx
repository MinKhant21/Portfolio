import React, { useEffect } from 'react'
import Photo from '../assets/images/kaungminkhant.png'
import TypewriterComponent from 'typewriter-effect'
export default function Home() {
  
  return (
       <div className='h-[700px] flex justify-around items-center'>
          <div>
              <h1 className=' font-sans text-4xl font-extrabold'>Kaung Min Khant</h1>
              <div className=' flex justify-around items-center'>
                <TypewriterComponent
                  options={{
                    strings:"I'm Full Stack Developer",
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
          </div>
          <div className='w-80'>
            <img src={Photo} alt="" className='w-40 rounded-full' />
          </div>
       </div>
  )
}
