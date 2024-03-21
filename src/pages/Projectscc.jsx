import React from "react";
import FootBall from "../assets/projects/football.png";
import Rcep from "../assets/projects/rcep.png";
import ShweSport from "../assets/projects/smartJob.png";
import SmartJob from "../assets/projects/shwesport.png";
import Filter from "../components/Filter";
import Movie from "../components/Movie";
import AungThamarDi from '../assets/projects/aungthamardi.png'
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
    <div className=" h-auto">
      <h1 className=" uppercase text-4xl   font-extrabold  text-center my-10  md:mt-30 md:mb-32">
        My PROFESSIONAL PROJECTS
      </h1>
      <div className=" flex md:flex-row flex-col justify-center  gap-20 mx-10 md:mx-auto">
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
        <img src={AungThamarDi} className=" w-1/2" alt="" />
      </div>
      <div className=" flex md:flex-row flex-col py-20 justify-center  gap-20 mx-10 md:mx-auto">
        <ul className="text-justify max-w-xl list-disc">
          <li>
            Led the design and implementation of the dashboard page, ensuring an
            intuitive and visually appealing interface for efficient stock
            monitoring and management.
          </li>
          <li>
            Implemented robust inventory control features, optimizing stock
            tracking, and ensuring accurate real-time updates for efficient
            inventory management.
          </li>
          <li>
            {" "}
            Contributed to the development of comprehensive inventory management
            functionalities, facilitating organized tracking and control of
            stock levels.
          </li>
          <li>
            Integrated voucher, invoice, and bill functionalities, streamlining
            financial transactions and enhancing record-keeping within the Stock
            Management system.
          </li>
          <li>
            Introduced barcoding capabilities to the system, improving accuracy
            in stock identification, tracking, and minimizing errors during
            inventory operations.
          </li>
          <li>
            Proactively engaged in ongoing system improvements, implementing
            updates to meet evolving business needs and staying abreast of
            emerging technologies for future enhancements.
          </li>
        </ul>
        <div className=" flex flex-col items-end gap-10  ">
          <h1 className=" uppercase text-xl md:text-2xl   font-extrabold ">
            Lucky XD (Stock Management)
          </h1>
          <p>As a Full Stack Developer</p>
          <div className="flex flex-wrap  items-center gap-4 container">
            <p className=" w-auto px-4 py-2 border border-black bg-[#D1D5DB] text-center rounded-full cursor-pointer hover:skew-y-3">
              React Js
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
      </div>
    </div>
  );
}
