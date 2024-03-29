import React, { useContext, useEffect, useState } from "react";


import { ThemeContext } from "../../contexts/ThemeContext";
import MenusBar from "../components/MenusBar";
export default function NavBar() {


  return (
    <>
      <div className="bg-[#18181B]  sticky top-0 z-10">
        <nav className=" container p-1 md:p-8 text-white flex justify-between items-center mx-auto ">
          <h1 className="text-[#C98A03] font-bold text-2xl pl-5 md:pl-0">Kaung</h1>
          <div className="block md:hidden ">
            <MenusBar/>
          </div>
          <ul className="hidden   md:flex items-center space-x-10">
            <li className="">
          <a href="#home" className="hover:bg-[#282D36] text-white  text-right py-1 px-3 rounded-xl cursor-pointer">Home</a>

            </li>
            <li className="">
              <a className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer" href="#about">About</a>
            </li>
            <li className="">
              <a className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer" href="#WorkExperiences">Work Experiences</a>
            </li>
            <li className=" ">
              <a  className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer"  href="#Projects">Projects</a>
            </li>
         
          </ul>
        </nav>
        
     
      </div>
    </>
  );
}
