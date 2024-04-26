import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import FootBall from "../assets/projects/football.png";
import Rcep from "../assets/projects/rcep.png";
import  SmartJob from "../assets/projects/smartJob.png";
import  ShweSport from "../assets/projects/shwesport.png";
import Filter from '../components/Filter'
import Movie from '../components/Movie';
import '../pages/style.css';
const projects = [
  {
    id: 1,
    title: "Football Projects",
    image: FootBall,
    position : "Full Stack Developer",
    url : 'https://211sport.com/?show=all&dates=2023-10-04&byTime=false&search=',
    des : "FootBall Live Score Real Time",
    language : ['Vue JS',"Laravel"]
  },
  {
    id: 2,
    title: "Rcep Projects",
    image: Rcep,
    position : "Full Stack Developer",
    url:'https://wap.rcepmall.net',
    des : "Ecommerce Systems",
    language : ['Angular JS',"Laravel"]

  },
  {
    id: 3,
    title: "SmartJob Projects",
    image: SmartJob,
    position : "Full Stack Developer",
    url:"https://172.105.113.91:810/",
    des : "Job Search Platform",
    language : ['React JS',"NodeJS"]

  },
  {
    id: 4,
    title: "ShweSport Projects",
    image: ShweSport,
    position : "Full Stack Developer",
    url:'https://shwesports.com/',
    des : "Live Stream & Forum System",
    language : ['React JS',"Laravel"]

  },
  
];
function Projects() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(()=>{
    setPopular(projects)
    setFiltered(projects)
  },[])
  return (
    
    <div className="App min-h-screen pt-20" id="Projects">
        <h1  className=" text-4xl  uppercase font-extrabold mt-10 text-white   md:mb-32 md:text-center text-clip text-center">Projects</h1>

      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      <motion.div
        layout
        className="popular-movies  w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >

        <AnimatePresence>
        {/* <div class=" container flex flex-col md:grid md:grid-cols-4 md:mx-auto mx-5 gap-3"> */}
          {filtered.map(movie => (
            <Movie 
            className=""
              key={movie.id} 
              movie = {movie}
            />
          ))}
          {/* </div> */}
        </AnimatePresence>
      </motion.div>
      {/* <div class=" container flex flex-col md:grid md:grid-cols-4 md:mx-auto mx-5 gap-3">
        {projects.map((project) => (
          <div class="relative rounded overflow-hidden">
            <img src={project.image} alt="Hanging Planters" class="" />
            <p class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              Hanging Planters
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Projects;
