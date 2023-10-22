import React, { useState } from 'react'
import lightIcon from '../../assets/light.svg'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function NavBar() {
    const [navBar, setNavbarActive] = useState(false);

const navbarHandler = () => {
  setNavbarActive(!navBar);
};
  return (
    <>
         <header className=' container mx-auto shadow-md mt-3 rounded-md'>

            <div className="">
                <div className="p-2 md:p-4">
                    <ul className='flex justify-around items-center'>
                        <li className='md:hidden'>
                        <div className="flex sm:hidden" onClick={navbarHandler}>
                        {
                            !navBar ? <AiOutlineMenu size={30} />  : <AiOutlineClose size={30} />
                        }
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

                    </div>
                  
                </div>

            {/* Mobile navbar */}
            <div className="relative">
                <ul
                className={`
                ${!navBar ? "flex flex-col justify-start items-start text-center cursor-pointer absolute left-[-100%] top-0 p-4 transition-all duration-1000 h-screen w-full" :
                    "flex flex-col justify-start p-3 items-start text-center cursor-pointer absolute left-0 bg-teal-100  transition-all duration-1000 h-[90vh] w-full"}`}>
                <li className="mb-2 text-lg">Home</li>
                <li className="mb-2 text-lg">About</li>
                <li className="mb-2 text-lg">Education</li>
                <li className="mb-2 text-lg">Experience</li>
                <li className="mb-2 text-lg">Projects</li>
               
                </ul>
            </div>
        
        </header>
    </>
  )
}
