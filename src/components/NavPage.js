import React from "react"
import { Link } from "react-router-dom"
const NavPage = () => {
    return (
        <>
            <div className="container mx-auto flex justify-between items-center">
                <h1>Portfolio</h1>

                <div className="hidden lg:flex">
                    <ul className="flex justify-between space-x-8 container mx-auto">
                        <li className="">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>About</li>
                        <li>
                            <Link to="skills">
                                Skills
                            </Link>
                        </li>
                        <li>
                        <Link to="/projects">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className=" flex justify-between items-center">
                        <button id="dark-switch" 
                                className="shadow w-[72px] flex items-center transition duration-200 rounded-full m-5 bg-slate-800 p-1">
                            <div id="dark-switch-icon"
                                 className="bg-slate-50 w-8 h-8 rounded-full transform transition duration-200 flex justify-center items-center">
                                <i className="fa-regular fa-sun"></i>
                            </div>
                            <h6 id="dark-text" className="text-slate-200 dark:text-slate-900 translate-x-1">FF</h6>
                        </button>
                        <div className="lg:hidden">
                            <i className="fa-solid fa-bars"></i>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export  default NavPage
