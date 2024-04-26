import React from 'react'

export default function Eduction() {
  return (
    <div className='text-white h-screen flex flex-col justify-center' id='education'>
        <h1 className='  text-center font-sans font-extrabold text-2xl mb-10 underline underline-offset-8  decoration-sky-500/30'>EDUCATION</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-10">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2018-2019</time>
              <div className="text-lg font-black">A.G.T.I COLLAGE</div>
              Electronical Communication
            </div>
            <hr/>
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2021-2022</time>
              <div className="text-lg font-black">KBTC UNIVERSITY</div>
              Diploma in Computer Programming ( NCC Education )
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2023-2023</time>
              <div className="text-lg font-black">Udemy Node JS Course</div>
              <p className=' md:text-right text-justify w-1/2 md:float-right'>
              successfully completed the course NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) on 11/09/2023 as taught by Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller on Udemy.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2023-present</time>
              <div className="text-lg font-black">KMD Institute</div>
              Diploma in Computer Programming ( NCC Education Level 4 )
            </div>
            <hr />
          </li>
          
        </ul>
    </div>
  )
}
