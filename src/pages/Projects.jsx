import React from 'react'
import smartJob from '../assets/projects/smartJob.png'
import football from '../assets/projects/football.png'
import shwesport from '../assets/projects/shwesport.png'
import rcep from '../assets/projects/rcep.png'
import './Layout/style.css'
export default function Projects() {

  return (
    <div className='h-[700px] '>
       
        <div className="container mx-auto mt-5">
            <div className="container flex  justify-center items-center mb-4">
                <div className="p-3 shadow-md rounded-md ">
                    <img className=' w-full' src={smartJob} alt="" />
                    <p>
                    <h1 className=' cursor-pointer  font-sans text-2xl text-center font-semibold mb-2 mt-2 bg-slate-100 w-40 p-1 rounded-lg shadow-md'>Smart Job</h1>

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                    </p>
                </div>
                <div className="p-3 shadow-md rounded-md ">
                    <img className=' w-full' src={football} alt="" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                    </p>
                </div>
                <div className="p-3 shadow-md rounded-md ">
                    <img className=' w-full' src={shwesport} alt="" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                    </p>
                </div>
            </div>
            <div className="container flex  justify-center items-center">
                <div className="p-3 shadow-md rounded-md ">
                    <img className=' w-full' src={rcep} alt="" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                    </p>
                </div>
                
            </div>    
        </div>
   
    </div>
  )
}
