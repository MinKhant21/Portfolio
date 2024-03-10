import React from "react";
import FootBall from "../assets/projects/football.png";
import Rcep from "../assets/projects/rcep.png";
import ShweSport from "../assets/projects/smartJob.png";
import SmartJob from "../assets/projects/shwesport.png";
import Filter from "../components/Filter";
import Movie from "../components/Movie";
const projects = [
  {
    id: 1,
    title: "Football Projects",
    image: FootBall,
    url: "https://211sport.com/?show=all&dates=2023-10-04&byTime=false&search=",
    des: "FootBall Live Score Real Time",
  },
  {
    id: 2,
    title: "Rcep Projects",
    image: Rcep,
    url: "https://wap.rcepmall.net",
    des: " Live Sales, Order Tracking, Notifications, and Delivery Systems",
  },
  {
    id: 3,
    title: "ShweSport Projects",
    image: ShweSport,
    url: "https://shwesports.com/",
    des: "Live Stream Foot Ball And Forum System",
  },
  {
    id: 4,
    title: "SmartJob Projects",
    image: SmartJob,
    url: "https://172.105.113.91:810/",
    des: "Job Search Platform",
  },
];
export default function Projects() {
  return (
    <div className=" h-screen">
      <h1 className=" uppercase text-4xl   font-extrabold  text-center my-10  md:mt-30 md:mb-32">
        My PROFESSIONAL PROJECTS
      </h1>
      <div className=" flex md:flex-row flex-col justify-center items-center gap-20 mx-10 md:mx-auto">
        <div className=" flex flex-col items-start gap-10 ">
            <h1 className=" uppercase text-xl md:text-2xl   font-extrabold ">
              Aungthamardi Gold and Jewellery ERP System
            </h1>
            <p>As a Full Stack Developer</p>
          <div className="flex flex-wrap  items-center gap-4 container">
            <p className=" w-auto px-4 py-2 border border-black bg-[#D1D5DB] text-center rounded-full cursor-pointer hover:skew-y-3">
              Laravel
            </p>
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full  cursor-pointer hover:skew-y-3">
              Node Js
            </p>
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full  cursor-pointer hover:skew-y-3">
              TypeScript Js
            </p>
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full  cursor-pointer hover:skew-y-3">
              CI/CD
            </p>
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full  cursor-pointer hover:skew-y-3">
              AWS
            </p>
          </div>
        </div>
        <p className=" text-justify max-w-xl ">
          Contributed to the design and implementation of the dashboard page,
          ensuring an intuitive and user- friendly interface for efficient
          system navigation. Developed and enhanced features related to gold
          trading, gold saving bookkeeping, and gold sell and purchase
          functionalities, providing comprehensive solutions for the jewelry ERP
          system. Applied optimization techniques to enhance the efficiency of
          backend queries, resulting in a 30% improvement. Addressed and
          resolved bugs to ensure a stable and error-free system. Implemented
          voucher, invoice, and bill functionalities, contributing to the
          financial aspects of the ERP system and ensuring accurate
          record-keeping. Managed the deployment and hosting of the Node.js
          backend on AWS for production, offline, and staging environments.
          Utilized PM2 for process management, ensuring system reliability.
          Installed and configured local database servers, optimizing data
          management and accessibility for the ERP system. Contributed to the
          development of reporting
        </p>
      </div>
    </div>
  );
}
