import React from 'react'

export default function Eduction() {
  return (
    <>

     <div className='container mx-auto flex justify-start gap-20 '>
        <div>
          <h1 className=' text-black text-center font-sans text-2xl font-bold mb-10'>Eduction</h1>
          <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start">(2016-2019)</div>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end timeline-box w-96 bg-white">
                  <h1>A.G.T.I Collage </h1>
                  <span>Electronical communication </span>
                </div>
                <hr/>
              </li>
            <li className=' '>
              <hr/>
              <div className="timeline-start">(2022-2023)</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box w-96 bg-white mt-10">
                  <h1>K.B.T.C University </h1>
                  <span>Diploma in Programming (NCC Education)</span>
                </div>
            </li>
          </ul>
        </div>
        <div className=' flex justify-center  gap-20'>
          <div className=' '>
            <h1 className=' text-black  font-sans text-2xl font-bold mb-5'>Skills</h1>
            <ul className=' list-disc'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className=' '>
          <h1 className=' text-black  font-sans text-2xl font-bold mb-5'>FROMEWORKS AND TOOLS</h1>
            <ul className="list-disc">
              <li>BOOTSTRAP</li>
              <li>TAILWIND CSS</li>
              <li>NODE JS (EXPRESS)</li>
              <li>REACT</li>
              <li>VUE</li>
              <li>LARAVLE</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className=' text-black  font-sans text-2xl font-bold mb-5'>Cloud</h1>
          <ul className="list-disc">
            <li>AWS</li>
          </ul>
        </div>
     </div>
    </>
  )
}
