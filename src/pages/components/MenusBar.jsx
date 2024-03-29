import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MenusBar() {
  let [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        icon.classList.toggle("open");
        setisOpen(preState => !preState)
      });
    });
    // Cleanup function
    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("click", () => {
          icon.classList.toggle("open");
        });
      });
    };
  }, []);
  console.log(isOpen);
  return (
    <>
      <div className=" relative icon nav-icon-5">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen ? <ul className=" dropdownMenus space-y-3">
        <li  className=" ">
          <a href="#home" className="hover:bg-[#282D36] text-white  text-right py-1 px-3 rounded-xl cursor-pointer">Home</a>
        </li>
        <li  >
        <a className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer" href="#about">About</a>
          </li>
        <li >
        <a className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer" href="#WorkExperiences">Work Experiences</a>
        </li>
        <li  >
        <a  className=" hover:bg-[#282D36] py-1 px-3 rounded-xl cursor-pointer"  href="#Projects">Projects</a>
        </li>
      </ul> : ""}
      
    </>
  );
}
