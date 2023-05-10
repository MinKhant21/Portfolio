import { Link } from "react-router-dom";
import React from "react"
const SkillPage = () => {
    return (
        <>
           
           <div className="w-full scroll-smooth min-h-screen  container mx-auto px-3 ">
               <div className="md:flex md:justify-between items-center">
               <div className="container mx-auto px-3 md:w-1/2">
                    <h3 className="text-white font-serif font-bold  text-2xl mb-3 underline">EDUCATION & SKILLS</h3>

                        <div>
                        <div className="p-5 bg-black rounded-md mb-2">
                            <span className="rounded-md shadow-md bg-indigo-600 p-1 text-white font-mono font-bold">2022-2023</span>
                            <h2 className="text-1xl mt-3 text-white font-serif font-semibold">Junior Web Developer</h2>
                            <p className=" text-gray-500">
                            Internation Design Institute
                            </p>
                        </div>

                        <div className="p-5 bg-black rounded-md mb-2">
                            <span className="rounded-md shadow-md bg-indigo-600 p-1 text-white font-mono font-bold">2022-2023</span>
                            <h2 className="text-1xl mt-3 text-white font-serif font-semibold">Junior Web Developer</h2>
                            <p className=" text-gray-500">
                            Internation Design Institute
                            </p>
                        </div>

                        <div className="p-5 bg-black rounded-md mb-2">
                            <span className="rounded-md shadow-md bg-indigo-600 p-1 text-white font-mono font-bold">2022-2023</span>
                            <h2 className="text-1xl mt-3 text-white font-serif font-semibold">Junior Web Developer</h2>
                            <p className=" text-gray-500">
                            Internation Design Institute
                            </p>
                        </div>

                    </div>
                </div>

                <div className="md:w-1/2">
                    <div className="w-full  container mx-auto px-3 mt-3" >
                    <p className="text-3xl  underline  mb-4 font-bold text-white">
                            <span className="hover:text-slate-500 skew-y-12">Skill</span>
                        </p>
                        <div className="text-white">
                            <p>HTML</p>
                            <div class="mb-6  h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="h-1 bg-green-500" style={{ width: "95%" }}></div>
                            </div>
                            <p>CSS</p>
                            <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="h-1 bg-primary-600" style={{ width: "50%" }}></div>
                            </div>
                            <p>JavaScript</p>

                            <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="h-1 bg-yellow-500" style={{ width: "75%" }}></div>
                            </div>
                            <p>PHP</p>

                            <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="h-1 bg-yellow-500" style={{ width: "75%" }}></div>
                            </div>
                            <p>Laravel</p>

                            <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="h-1 bg-yellow-500" style={{ width: "75%" }}></div>
                            </div>
                            <p>Tailwind CSS</p>

                            <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="h-1 bg-yellow-500" style={{ width: "75%" }}></div>
                            </div>
                            <p>Vue</p>

                            <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="h-1 bg-yellow-500" style={{ width: "75%" }}></div>
                            </div>
                            <p>React</p>

                            <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="h-1 bg-yellow-500" style={{ width: "75%" }}></div>
                            </div>
                        
                            
                        </div>
                    </div>
                </div>
               </div>
           </div>

    </>
    )
}

export default SkillPage