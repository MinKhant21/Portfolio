import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import EDKA from "../assets/images/EDKA.png";
export default function Experience() {
  return (
    <div className=" my-10 h-screen flex flex-col justify-center items-center">
      <h1 className="  text-center font-sans font-extrabold text-2xl mb-10 underline underline-offset-8  decoration-sky-500/30">
        Experience
      </h1>

      <div className=" w-1/2">
        <details className="  collapse  collapse-plus border border-base-300   shadow-md">
          <summary className="collapse-title text-xl font-medium    ">
            <div className=" flex justify-between items-center">
              <p>Full-Stack Developer @ EDKA Digital Ltd </p>
              <p className=" text-sm">2023-Present</p>
            </div>
          </summary>
          <div className="collapse-content space-y-4">
            <div className=" flex justify-between items-center gap-10">
              <div className=" flex flex-col gap-5">
                <div className=" flex item-center gap-5">
                  <div className=" flex items-center gap-1">
                    <IoLocation />
                    <p>Mandalay , Myanmar</p>
                  </div>
                  <div className=" flex items-center gap-1">
                    <a
                      href="https://edkamm.com/"
                      target="_blank"
                      className=" hover:text-blue-400"
                    >
                      <FaExternalLinkSquareAlt />
                    </a>
                    <a
                      href="https://edkamm.com/"
                      target="_blank"
                      className=" hover:text-blue-400"
                    >
                      edkamm.com
                    </a>
                  </div>
                </div>
                <div className=" ">
                  Developing front-end and back-end app solutions in EDKA on
                  React , Laravel framework and AWS Cloud.
                </div>
                <div className=" flex justify-start gap-5 items-center">
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Javascript
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    React JS
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Laravel
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Node JS
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    AWS
                  </p>
                </div>
              </div>

              <div>
                <img src={EDKA} className=" w-1/2" alt="" />
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
