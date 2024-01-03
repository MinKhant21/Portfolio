import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import FootBall from "../assets/projects/football.png";
import Rcep from "../assets/projects/rcep.png";
import ShweSport from "../assets/projects/smartJob.png";
import SmartJob from "../assets/projects/shwesport.png";
import Filter from '../components/Filter'
import Movie from '../components/Movie';
import '../pages/style.css';
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
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(()=>{
    setPopular(projects)
    setFiltered(projects)
  },[])
  return (
    
    <div className="App my-10 min-h-screen ">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div
        layout
        className="popular-movies  md:mx-40 p-10 grid-rows-1 md:grid-cols-2 xl:grid-cols-4  "
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
