import React, { useEffect, useState } from "react";

export default function MenusBar() {
  let [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        icon.classList.toggle("open");
      });
      setisOpen((preState) => !preState);
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
      <ul className=" dropdownMenus">
        <li className=" hover:bg-[#282D36] text-black py-1 px-3 rounded-xl">Home</li>
        <li className=" hover:bg-[#282D36] text-black py-1 px-3 rounded-xl">About</li>
        <li className=" hover:bg-[#282D36] text-black py-1 px-3 rounded-xl">
          Work Experiences
        </li>
        <li className=" hover:bg-[#282D36] py-1 px-3 rounded-xl">Projects</li>
      </ul>
      
    </>
  );
}
