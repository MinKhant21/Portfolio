import { motion } from "framer-motion"
import EyeIcon from '../assets/eye.svg'
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
      

    <div class="max-w-sm   md:h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg  h-[240px] " src={movie.image} alt="" />
        </a>
        <div class="p-5 min-w-sm">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 text-justify   dark:text-gray-400">{movie.des}</p>
        
            <a href={movie.url} target="_blank" className=" cursor-pointer px-3 py-2 hover:bg-slate-500 bg-purple-500 text-white rounded-2xl ">
            View
          </a>
        </div>
    </div>

      {/* <h2 className=" text-md font-sans font-bold my-5">{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className=" w-full h-full" alt="" /> */}
    </motion.div>
  )
}

export default Movie