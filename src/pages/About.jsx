import React from 'react'
import { Link } from 'react-router-dom';

import  AboutImage from '../assets/images/aboutimage.webp'
export default function About() {
  
  return (
    <>
      <h1 className='text-gray-700 text-xl text-center border-blue-700 mb-[4rem] font-extrabold'>About Me</h1>

      <div className="container flex  justify-center  mb-5">
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-[30rem] md:w-full md:max-w-[70rem] flex-col  md:flex-row  mx-auto">
          <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="card-image" className="object-cover w-full h-full"/>
          </div>
          <div className="p-6">
            <h6
                className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              startups
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Lyft launching cross-platform service this week
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software company
              selling licenses. Yet its own business model disruption is only part of
              the story
            </p>
            <a href="#" className="inline-block">
              <button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center bg-gray-200 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-300 active:bg-gray-900/20"
                  type="button">
                Learn More
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
    </>
  )
}
