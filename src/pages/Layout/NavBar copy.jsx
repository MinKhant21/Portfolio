import React from 'react'
import lightIcon from '../../assets/light.svg'

export default function NavBar() {
  return (
    <>
         <header className=' container mx-auto shadow-md mt-3 rounded-md'>
          <nav className='  p-4 '>
            <ul className='flex justify-around items-center'>
              <li className='md:hidden'>
              <div class="p-2 space-y-2 bg-gray-400 rounded shadow-md">
                <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
              </div>
              </li>
              <li className=''>
                  <a href="" className=' hidden md:block font-sans font-semibold '>Home</a>
              </li>
              <li className=''>
                <a  className='font-sans hidden md:block  font-semibold ' href="">About</a>
              </li>
              <li className=''>
                <a  className='font-sans hidden md:block  font-semibold ' href="">Education</a>
              </li>
              <li className=''>
                <a  className='font-sans hidden md:block  font-semibold ' href="">Experience</a>
              </li>
              <li className=''>
                <a  className='font-sans hidden md:block  font-semibold ' href="">Projects</a>
              </li>
              <li>
                <div className="cusuor-pointer border p-2 bg-white rounded-lg ">
                  <img src={lightIcon} alt="" className="w-5 bg-white"  />
                </div>
              </li>
            </ul>    
          </nav>
        </header>
    </>
  )
}
