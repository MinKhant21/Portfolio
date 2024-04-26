import { motion } from "framer-motion";
import EyeIcon from "../assets/eye.svg";
import FootBall from "../assets/projects/football.png";
import Rcep from "../assets/projects/rcep.png";
import ShweSport from "../assets/projects/smartJob.png";
import SmartJob from "../assets/projects/shwesport.png";
const Movie = ({ movie }) => {
  return (
    <motion.div
      className=""
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div class=" w-[420px] md:w-[400px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src={movie.image}
            alt="Product"
            class="h-80 w-[420px] md:w-[400px] object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-[420px] md:w-[400px]">
            <span class="text-gray-400 mr-3 uppercase text-xs">
              {movie.position}
            </span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              {movie.title}
            </p>
            <p class="text-lg font-semibold text-black cursor-auto my-3">
              {movie.des}
            </p>
            <div className="flex justify-between items-center">
              <div className=" flex items-center gap-3">
                {movie.language.map((language) => (
                  <div className="badge badge-neutral text-white font-sans py-2">
                    {language}
                  </div>
                ))}
            
              </div>
              <a href={movie.url} target="_blank" className=" cursor-pointer px-3 py-2 hover:bg-slate-500 bg-purple-500 text-white rounded-2xl ">
            View
          </a>
            </div>
            
          </div>
        </a>
      </div>

      {/* <h2 className=" text-md font-sans font-bold my-5">{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className=" w-full h-full" alt="" /> */}
    </motion.div>
  );
};

export default Movie;
