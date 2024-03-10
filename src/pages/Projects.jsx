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
      <div className=" flex justify-center items-center gap-20">
        <div>
          <h1 className=" uppercase text-2xl   font-extrabold   my-10 ">
            AUNGTHAMAR DI
          </h1>
          <div className="flex justify-start items-center gap-4">
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full">
              Laravel
            </p>
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full">
              Node Js
            </p>
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full">
              TypeScript Js
            </p>
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full">
              CI/CD
            </p>
            <p className=" w-auto px-4 py-2 bg-[#D1D5DB] text-center rounded-full">
              AWS
            </p>
          </div>
        </div>
        <div className="">
          <p className=" text-justify max-w-xl ">
            In a digital realm, I embarked on an exciting endeavor—building an
            advanced environmental management platform, empowered users to draw,
            update, and delete areas on our map. They could select the analysis
            type they needed and receive environmental analyses. I crafted a
            robust platform, ensuring seamless navigation and user-friendliness.
            I transformed complex tools like Leaflet into intuitive interfaces.
            My expertise in CSS, HTML, and JavaScript enhanced the
            platform&apos;s UI/UX, while AJAX calls ensured the smooth and
            consistent flow of data.
          </p>
        </div>
      </div>
    </div>
  );
}
