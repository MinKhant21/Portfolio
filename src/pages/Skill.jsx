import React from 'react'

export default function Skill() {
  return (
     <div className=' text-white h-screen'>
          <h1 className=' text-2xl font-extrabold font-sans text-center'>My Skills</h1>
          <div className="flex w-1/2 mx-auto my-20">
               <div className="grid p-5 flex-grow card shadow-md  rounded-box place-items-center">
                    <h1 className=' text-2xl font-extrabold font-sans text-center my-5'>Languages</h1>
                    <ul className=' list-disc  font-sans font-bold space-y-3 '>
                         <li >HTML</li>
                         <li>CSS</li>
                         <li>JAVASCRIPT</li>
                         <li>PHP</li>
                         <li>TAILWIND CSS</li>
                         <li>BOOTSTRAP</li>
                         <li>NODE JS</li>
                    </ul>
               </div>
               <div className="divider divider-horizontal"></div>
               <div className="grid p-5  flex-grow card shadow-md rounded-box place-items-center">
                    <h1 className=' text-2xl font-extrabold font-sans text-center my-5'>Frameworks And Others</h1>
                    <ul className=' list-disc  font-sans font-bold space-y-3 '>
                         <li>LARAVEL</li>
                         <li>EXPRESS JS</li>
                         <li>REACT JS</li>
                         <li>VUE JS</li>
                         <li>AWS</li>
                         <li>MYSQL</li>
                         <li>MONGOOSE</li>
                         <li>FIREBASE</li>
                    </ul>
               </div>
          </div>
              
     </div>
     
  )
}
