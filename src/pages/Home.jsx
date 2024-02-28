import React, { useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import Photo from "../assets/images/kaungminkhant.png";
import FaceBook from "../assets/social/facebook.png";
import GitHub from "../assets/social/github.png";
import LinkIn from "../assets/social/linkin.png";
import Laravel from "../assets/skills/laravel.png";
import ReactIcon from "../assets/skills/react.png";
import NodeJS from "../assets/skills/nodejs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTheme from "../hook/useTheme";
export default function Home() {
  let { theme } = useTheme();

  return (
    // min-h-screen
    <section
      className=" bg-[#18181B]  md:h-[910px] py-10 flex justify-center items-center  mx-auto "
      id="home"
    >
      <div className="container relative flex-row md:flex justify-between items-center space-x-3 ">
        <div className="block md:hidden mb-10">
          <div
            className={`h-[250px]  w-[250px] rounded-full  shadow-lg border border-[#42424b] mx-auto  p-3 ${
              theme === "light" ? "bg-[#18181B]" : "bg-black"
            }  shadow-xl  `}
          >
            <img src={Photo} className=" w-full h-full rounded-full z-10   " />
          </div>
        </div>
        {/* Left Side */}
        <div className=" w-full h-full ">
          <p
            style={{ fontWeight: "500", marginBottom: "10px" }}
            className={`${theme === "light" ? "text-white" : "text-white"}`}
          >
            WELCOME TO MY WORLD
          </p>
          <p className="">
            <span
              className={` mt-10 mb-10 text-3xl font-extrabold md:text-5xl ${
                theme === "light" ? "text-[#C98A03]" : "text-white"
              }`}
            >
              Hi , I'm
            </span>
            <span className=" text-3xl ml-4 md:text-6xl  font-extrabold text-[#C98A03] ">
              Kaung Min Khant
            </span>
          </p>
          <p
            className={` mt-5 font-extrabold text-3xl font-serif mb-6 md:text-5xl ${
              theme === "light" ? "text-[#C98A03]" : "text-white"
            }`}
          >
            <TypewriterComponent
              options={{
                strings: "a Full Stack Developer",
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <p className=" text-white text-lg max-w-md md:max-w-3xl text-justify">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          {/* social Block */}
          <div className=" flex-row md:flex gap-11 items-center mt-3">
            <div className="mt-5">
              <p className=" text-white font-semibold">FIND WITH ME</p>
              <div className="mt-5 flex gap-5 items-center ">
                <img
                  src={FaceBook}
                  className=" w-[50px]  h-[50px] rounded-full bg-purple-600  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1"
                />
                <img
                  src={LinkIn}
                  className=" object-fill w-[50px]  h-[50px]  p-2 rounded-full bg-blue-700 shadow-lg flex justify-center items-center hover:-translate-y-1"
                  alt=""
                />
                <img
                  src={GitHub}
                  className=" bg-green-700 w-[50px] h-[50px] p-2  shadow-lg flex justify-center items-center hover:-translate-y-1 rounded-full"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-5 ">
              <p className=" text-white font-semibold">BEST SKILL ON</p>
              <div className="mt-5 flex gap-5 items-center ">
                <img
                  src={Laravel}
                  className=" rounded-full w-[60px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1"
                />
                <img
                  src={ReactIcon}
                  className="w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1 rounded-full"
                />
                <img
                  src={NodeJS}
                  className=" rounded-full w-[50px] h-[50px]  p-2  shadow-lg flex justify-center items-center hover:-translate-y-1"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        {/* <div className='hidden md:block h-full w-full transition-all duration-300 rounded-lg cursor-pointer  filter  grayscale-0 hover:grayscale absolute'>
            <img src={Photo} className=' object-center w-full h-full object-cover ' />
           
            </div> */}
        <div className="hidden md:flex justify-center items-center w-full h-auto">
          <img src={Photo} className="absolute h-auto w-[925px] " />
        </div>
      </div>
    </section>
  );
}
