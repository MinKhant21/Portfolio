import React, { useContext, useEffect, useState } from "react";
import lightIcon from "../../assets/light.svg";
import darkIcon from "../../assets/dark.svg";

import { ThemeContext } from "../../contexts/ThemeContext";
export default function NavBar() {
  return (
    <>
      <div className="bg-[#18181B]">
        <nav className=" container p-10 text-white flex justify-between items-center mx-auto">
            <h1>Kaung</h1>
            <ul className=" flex items-center space-x-10">
                <li>Home</li>
                <li>About</li>
                <li>Work Experiences</li>
                <li>Projects</li>
            </ul>
        </nav>
      </div>
    </>
  );
}
