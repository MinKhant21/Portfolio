import React from 'react'
import Photo from '../assets/images/kaungminkhant.png'
export default function Home() {
  return (
       <div className='h-[700px] flex justify-around items-center'>
          <div>
              <h1>Kaung Min Khant</h1>
              <p>
                Full Stack Developer
              </p>
          </div>
          <div>
            <img src={Photo} alt="" className='w-10' />
          </div>
       </div>
  )
}
