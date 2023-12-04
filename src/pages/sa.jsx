import React from 'react'
import  {Link} from 'react-router-dom'
import smartJob from '../assets/projects/smartJob.png'
import football from '../assets/projects/football.png'
import  eyeSvg from '../assets/eye.svg'
import shwesport from '../assets/projects/shwesport.png'
import rcep from '../assets/projects/rcep.png'
import './Layout/style.css'
let projectslist = [
    {
        title : '211@Sport Football live Score',
        date : '2020-11-1 -> 2021.11.1',
        imageUrl : football,
        position : 'Web Developer',
        description : 'I am worked WEB Developer in this project using Laravel and Vue Js.\n' +
            ' Fixture and result\n' +
            ' Predict\n' +
            ' Forecast Score Pick\n' +
            ' Web page UI and Responsive\n' +
            ' Fatch Data From FootBall-api\n' +
            ' Show web page\n' +
            ' All page Design and Responsive\n',
    },
    {
        title : "kmk",
        date : '2023-1',
        imageUrl : football,
        position : '',
        description : '',
    },
    {
        title : "kmk",
        date : '2023-1',
        imageUrl : football,
        position : '',
        description : '',
    },

]
export default function Projects() {

  return (
    <div className='h-[700px]'>
        <h1 className=' text-2xl font-extrabold text-gray-700 mt-20   text-center ' >Projects</h1>
        <div className="container mx-auto flex mt-10 justify-center items-center ">
            <div className='p-6 border-blue-700  rounded-lg shadow-lg bg-white   flex justify-start gap-10'>
                <img src={projectslist[0].imageUrl} alt="" width={300} height={400}/>
                <div>
                    <h1 className='text-2xl font-bold mb-5 border-b-2'>{projectslist[0].title}</h1>
                    <ul>
                        <li>I am worked WEB Developer in this project using Laravel and Vue Js</li>
                        <li>I am worked WEB Developer in this project using Laravel and Vue Js</li>
                        <li>I am worked WEB Developer in this project using Laravel and Vue Js</li>
                        <li>I am worked WEB Developer in this project using Laravel and Vue Js</li>
                    </ul>
                    <Link className='px-7 bg-blue-100 py-2 rounded-lg flex justify-center items-center w-[10rem] gap-2 mt-4'>
                        <img src={eyeSvg} alt=""/>
                        <p>Live View</p>
                    </Link>
                </div>
            </div>
        </div>
   
    </div>
  )
}
