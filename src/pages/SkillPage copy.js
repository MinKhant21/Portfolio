import { Link } from "react-router-dom";
import React from "react"
const SkillPage = () => {
    return (
        <>
            <div className="container mx-auto h-screen flex flex-col w-full lg:flex-row justify-between items-center md:flex-col  ">
            {/* <div className="flex flex-col items-center justify-between p-5"> */}
                <div className="w-full ">
                    <p className="text-6xl font-bold text-[#0DFDD7] ">
                        <span className="hover:text-slate-500 skew-y-12">Experience</span> 
                    </p>
                    <br/>
                    <div className="w-auto text-white">
                        
                        <p className="container mb-2">
                            I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.


                        </p>
                        <p className="mb-3">
                        I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
                        </p>
                        <p>
                            visit my LinkeIn profile for more details or just <Link>Contact me</Link>
                        </p>
                    </div>
                    <div className="flex justify-around flex-col space-y-3 lg:flex-row lg:space-x-3 md:flex-row  items-center mt-4 ">
                        <div className="bg-[#2A2A2A] w-80 p-3  rounded-lg border-green-500  hover:scale-105 ">
                            <p className="text-2xl font-bold font-mono">Junior Web Developer</p>
                            <span class>2022-Nov & On Going</span>
                            <p>
                                i create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                            </p>
                        </div>
                        <div className="bg-[#2A2A2A] w-80 p-3  rounded-lg border-green-500   hover:scale-105  ">
                            <p className="text-2xl font-bold font-mono">FreeLance Web Developer</p>
                            <span>2022-Nov & On Going</span>
                            <p>
                                i create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="w-full  " >
                <p className="text-6xl font-bold text-[#0DFDD7] ">
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

    </>
    )
}

export default SkillPage