import React, { useContext, useEffect, useState } from 'react'
import lightIcon from '../../assets/light.svg'
import darkIcon from '../../assets/dark.svg'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';
import { ThemeContext } from '../../contexts/ThemeContext';
export default function NavBar() {
    const [navBar, setNavbarActive] = useState(false);
    const {theme,ChangeTheme} = useContext(ThemeContext)
    const navbarHandler = () => {
        setNavbarActive(!navBar);
    };
    useEffect(()=>{
    },[])
    return (
        <>
            <header className={`shadow-md sticky top-0  ${theme === 'light' ? 'bg-white' : ' bg-zinc-800'}`}>
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
                                <Link to={"/"} className=' hidden md:block font-sans font-semibold cursor-pointer' 
                                    spy={true} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500} >
                                    <span className={`${theme === 'light' ? 'text-black' : ' text-slate-200'}`}>Home</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link  spy={true} 
                                        smooth={true} 
                                        offset={150} 
                                        duration={500} 
                                        className='font-sans hidden md:block  font-semibold cursor-pointer' to='about'>
                                    <span className={`${theme === 'light' ? 'text-black' : ' text-slate-200'}`}>About</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} className='font-sans hidden md:block  font-semibold cursor-pointer' to='eduction'>
                                    <span className={`${theme === 'light' ? 'text-black' : ' text-slate-200'}`}>Education</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link spy={true} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500}  
                                    className='font-sans hidden md:block  font-semibold cursor-pointer' to={"/"}>
                                    <span className={`${theme === 'light' ? 'text-black' : ' text-slate-200'}`}>Experience</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link spy={true} 
                                    smooth={true} 
                                    offset={100} 
                                    duration={500} 
                                    className='font-sans hidden md:block  font-semibold cursor-pointer' to="projects">
                                    <span className={`${theme === 'light' ? 'text-black' : ' text-slate-200'}`}>Projects</span>
                                </Link>
                            </li>
                            <li>
                                {
                                    theme == 'light' ?
                                    <div className="cusuor-pointer border p-2 bg-white rounded-lg "
                                        onClick={()=>ChangeTheme('dark')}>
                                        <img  src={darkIcon} alt="" className="w-5 bg-white"  />
                                    </div>
                                    :
                                    <div className="cusuor-pointer border p-2 bg-white rounded-lg "
                                        onClick={()=>ChangeTheme('light')}>
                                        <img  src={lightIcon} alt="" className="w-5 bg-white" style={{color:"white"}}  />
                                    </div>
                                }
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
                    <li className="mb-2 text-lg">
                        <Link to={'/eduction'}>Education</Link>
                    </li>
                    <li className="mb-2 text-lg">Experience</li>
                    <li className="mb-2 text-lg">Projects</li>
                
                    </ul>
                </div>
            
            </header>
        </>
    )
}
