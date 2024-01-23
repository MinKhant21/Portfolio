import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FootBall from "../assets/projects/football.png";
import Rcep from "../assets/projects/rcep.png";
import ShweSport from "../assets/projects/smartJob.png";
import SmartJob from "../assets/projects/shwesport.png";
import Filter from "../components/Filter";
import Movie from "../components/Movie";
import "../pages/style.css";
const projects = [
  {
    id: 1,
    title: "Football Projects",
    image: FootBall,
  },
  {
    id: 2,
    title: "Football Projects",
    image: Rcep,
  },
  {
    id: 3,
    title: "Football Projects",
    image: ShweSport,
  },
  {
    id: 4,
    title: "Football Projects",
    image: SmartJob,
  },
];
function Projects() {
  return (
    <div className="App my-10 min-h-screen ">
      <h1 className="text-2xl text-black font-semibold text-center">
        PORJECTS
      </h1>
      <div className=" flex justify-center items-center gap-10 mx-10 mt-4">
        <div className=" p-6  w-[500px] h-[460px] rounded-xl shadow-xl my-4">
          <img src={FootBall} alt="" />
          <p className=" text-lg font-bold">Foot Ball Project</p>
          <p className=" mt-3 mb-3">
            FootBall Live Score and Suggestion ,Real Time Live Score Show Case
          </p>
          <span className=" cursor-pointer px-3 py-2 hover:bg-slate-500 bg-slate-400 rounded-2xl ">
            View
          </span>
        </div>

        <div className=" p-6  w-[500px] h-[460px]  rounded-xl shadow-xl my-4">
          <img src={Rcep} alt="" />
          <p className=" text-lg font-bold">Rcep Ecommerce Project</p>
          <p className=" mt-3 mb-3">
            Four crucial components that play a pivotal role in this process are
            Live Sales, Order Tracking, Notifications, and Delivery Systems.
          </p>
          <span className=" cursor-pointer px-3 py-2 hover:bg-slate-500 bg-slate-400 rounded-2xl ">
            View
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
