import React, { useRef } from "react";

import AboutGIF from "../assets/images/abou.gif";
export default function About() {
  return (
    <div id="about" className="    container h-screen  md:mx-auto py-10 flex-row  md:flex items-center justify-start gap-60">
      <div className="mx-3 ">
        <img src={AboutGIF} className=" h-[450px] w-[500px]  " />
      </div>
      <div className=" mx-3 mt-3">
        <div>
          <h1 className="text-gray-700 text-xl  border-blue-700  font-extrabold">
            About Me
          </h1>
          <p className=" max-w-3xl mt-3 text-justify">
            I am a{" "}
            <b>
              <i>FULL-STACK DEVLOPER</i>
            </b>{" "}
            from Myanmar.I have three years experiences in Software Development.
            creativity and an adept ability to transform designs into seamless
            fully functional digital experiences. I bring a unique blend of
            vision and technical prowess to every projects. Seeking to leverage
            broad development experience and hands-on technical expertise in a
            challenging role as a Full Stack Developer.
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-5 md:flex-row md:justify-start md:items-center  md:gap-10">
          <div>
            <h1 className="text-gray-700 text-xl  border-blue-700  font-extrabold">
              NAME
            </h1>
            <p>Kaung Min Khant</p>
          </div>
          <div>
            <h1 className="text-gray-700 text-xl  border-blue-700  font-extrabold">
              PHONE
            </h1>
            <a href="tel:+959402532566" className=" hover:text-blue-400">
              +959402532566
            </a>
          </div>
          <div>
            <h1 className="text-gray-700 text-xl  border-blue-700  font-extrabold">
              EMAIL
            </h1>
            <a
              href="mailto:kaungminkhant6889@gmail.com"
              className=" hover:text-blue-400"
            >
              kaungminkhant6889@gmail.com
            </a>
          </div>
        </div>
        <div className=" mt-3">
          <h1 className="text-gray-700 text-xl  border-blue-700  font-extrabold">
            EMPLOYMENT
          </h1>
          <p>Open</p>
        </div>
      </div>
    </div>
  );
}
