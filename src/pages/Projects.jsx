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
        title : "Smart Job",
        date : '2021-1-1 -> 2021.4.2',
        imageUrl : smartJob,
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
        title : "Shwesport Job",
        date : '2021-1-1 -> 2021.4.2',
        imageUrl : shwesport,
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
        title : "Rceo Job",
        date : '2023-11-1 -> 2021.4.2',
        imageUrl : rcep,
        position : 'Full-Stack Developer',
        description : 'I am worked WEB Developer in this project using Laravel and Vue Js.\n' +
            ' Fixture and result\n' +
            ' Predict\n' +
            ' Forecast Score Pick\n' +
            ' Web page UI and Responsive\n' +
            ' Fatch Data From FootBall-api\n' +
            ' Show web page\n' +
            ' All page Design and Responsive\n',
    },
]
export default function Projects() {

  return (
      <>
          <h1 className='text-gray-700 text-xl text-center border-blue-700 mb-[4rem] font-extrabold pt-10'>Projects</h1>
            {/*211 Sport*/}
          <div className="container flex  justify-center mx-auto mb-10">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[50rem] md:max-w-[70rem] flex-col  md:flex-row  mx-auto">
                  <div className="relative w-full md:w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                      <img src={projectslist[0].imageUrl}
                           alt="card-image" className="object-cover w-full h-full"/>
                  </div>
                  <div className="p-6">
                      <h6
                          className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                          FreeLance
                      </h6>
                      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          {projectslist[0].title}
                      </h4>
                      <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                          {projectslist[0].description}
                      </p>
                      <a href="#" className="inline-block">
                          <button
                              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center bg-gray-200 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-300 active:bg-gray-900/20"
                              type="button">
                              Live View
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                   stroke-width="2" className="w-4 h-4">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                              </svg>
                          </button>
                      </a>
                  </div>
              </div>
          </div>
          {/*Smart JOb*/}
          <div className="container flex  justify-center mx-auto mb-10">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[50rem] md:max-w-[70rem] flex-col  md:flex-row  mx-auto">

                  <div className="p-6">
                      <h6
                          className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                          FreeLance
                      </h6>
                      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          {projectslist[1].title}
                      </h4>
                      <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                          {projectslist[1].description}
                      </p>
                      <a href="#" className="inline-block">
                          <button
                              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center bg-gray-200 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-300 active:bg-gray-900/20"
                              type="button">
                              Live View
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                   stroke-width="2" className="w-4 h-4">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                              </svg>
                          </button>
                      </a>
                  </div>
                  <div className="relative w-full md:w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                      <img src={projectslist[1].imageUrl}
                           alt="card-image" className="object-cover w-full h-full"/>
                  </div>
              </div>
          </div>
          {/*211 Sport*/}
          <div className="container flex  justify-center mx-auto mb-10">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[50rem] md:max-w-[70rem] flex-col  md:flex-row  mx-auto">
                  <div className="relative w-full md:w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                      <img src={projectslist[2].imageUrl}
                           alt="card-image" className="object-cover w-full h-full"/>
                  </div>
                  <div className="p-6">
                      <h6
                          className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                          FreeLance
                      </h6>
                      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          {projectslist[2].title}
                      </h4>
                      <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                          {projectslist[2].description}
                      </p>
                      <a href="#" className="inline-block">
                          <button
                              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center bg-gray-200 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-300 active:bg-gray-900/20"
                              type="button">
                              Live View
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                   stroke-width="2" className="w-4 h-4">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                              </svg>
                          </button>
                      </a>
                  </div>
              </div>
          </div>
          {/*Rcep JOb*/}
          <div className="container flex  justify-center mx-auto mb-10">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[50rem] md:max-w-[70rem] flex-col  md:flex-row  mx-auto">

                  <div className="p-6">
                      <h6
                          className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                          FreeLance
                      </h6>
                      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          {projectslist[3].title}
                      </h4>
                      <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                          {projectslist[3].description}
                      </p>
                      <a href="#" className="inline-block">
                          <button
                              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center bg-gray-200 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-300 active:bg-gray-900/20"
                              type="button">
                              Live View
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                   stroke-width="2" className="w-4 h-4">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                              </svg>
                          </button>
                      </a>
                  </div>
                  <div className="relative w-full md:w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                      <img src={projectslist[3].imageUrl}
                           alt="card-image" className=" w-full h-[400px]"/>
                  </div>
              </div>
          </div>
      </>
  )
}
