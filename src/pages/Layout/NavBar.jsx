import React, { useContext, useEffect, useState } from "react";


import { ThemeContext } from "../../contexts/ThemeContext";
import MenusBar from "../components/MenusBar";
export default function NavBar() {


  return (
    <>
      <div className="bg-[#18181B]  sticky top-0 z-10">
        <nav className=" container p-3 md:p-8 text-white flex justify-between items-center mx-auto ">
          <h1 className="text-[#C98A03] font-bold text-2xl">Kaung</h1>
          <div className="block md:hidden ">
            <MenusBar/>
          </div>
          <ul className="hidden   md:flex items-center space-x-10">
            <li className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer">Home</li>
            <li className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer">About</li>
            <li className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer">
              Work Experiences
            </li>
            <li className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer">
              Projects
            </li>
         
          </ul>
        </nav>
        
     
      </div>
    </>
  );
}
