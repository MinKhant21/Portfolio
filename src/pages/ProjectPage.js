import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser ,FaInfoCircle ,FaDisease ,FaNetworkWired} from "react-icons/fa";
const ProjectsPage = () => {
    return (
        <>
            <div className="w-full min-h-screen container mx-auto px-3 ">
            <h3 className="text-white font-serif font-bold  text-2xl  underline mb-4">EDUCATION & SKILLS</h3>
               <div className="flex flex-col  md:flex-row md:space-x-3">
                     {/* 1 */}
                    <div className="bg-white  p-3 rounded-lg shadow-xl mb-3  hover:scale-105">
                        
                        <Link to="https://github.com/MinKhant21/Ecommerce">
                            <p className="container px-3 mb-3"><span className=" font-serif text-2xl font-semibold">MinKhant21</span>/Ecommerce</p>
                           <div className="flex justify-around items-center">
                            <div className="flex justify-center items-baseline">
                                    <FaRegUser/> 
                                    <div className="flex flex-col">
                                        <span>1</span>
                                        <span>Contributor</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaInfoCircle/> 
                                    <div className="flex flex-col">
                                        <span>1</span>
                                        <span>Issues</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaDisease/> 
                                    <div className="flex flex-col">
                                        <span>1</span>
                                        <span>Stars</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaNetworkWired/> 
                                    <div className="flex flex-col">
                                        <span>1</span>
                                        <span>Forks</span>
                                    </div>
                                </div>
                           </div>
                          <div className="container px-3 mt-4">
                            <h3 className=" font-mono font-extrabold">GitHub - MinKhant21/Ecommerce</h3>
                            <p>GitHub</p>
                            <p>
                                Shopping Website Using Laravel FrameWorks
                            </p>
                          </div>
                        </Link>
                       
                    </div>
                    {/* 2 */}
                    <div className= "bg-white  hover:scale-105 p-3 rounded-lg shadow-xl  mb-3 ">
                            
                        <Link to="https://github.com/MinKhant21/WeatherApp-Laravel-WeatherApi">
                            <p className="container px-3 mb-3"><span className=" font-serif text-2xl font-semibold">MinKhant21</span>/WeatherApp-Laravel-WeatherApi</p>
                           <div className="flex justify-around items-center">
                            <div className="flex justify-center items-baseline">
                                    <FaRegUser/> 
                                    <div className="flex flex-col">
                                        <span>1</span>
                                        <span>Contributor</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaInfoCircle/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Issues</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaDisease/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Stars</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaNetworkWired/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Forks</span>
                                    </div>
                                </div>
                           </div>
                          <div className="container px-3 mt-4">
                            <h3 className=" font-mono font-extrabold">GitHub - WeatherApp-Laravel-WeatherApi</h3>
                            <p>GitHub</p>
                            <p>
                                WeatherApi with Laravel Framework
                            </p>
                          </div>
                        </Link>
                       
                    </div>
                    {/* 3 */}
                    <div className="bg-white p-3  hover:scale-105 rounded-lg shadow-xl  mb-3 ">
                            
                        <Link to="https://github.com/MinKhant21/ChatApp">
                            <p className="container px-3 mb-3"><span className=" font-serif text-2xl font-semibold">MinKhant21</span>/ChatApp</p>
                           <div className="flex justify-around items-center">
                            <div className="flex justify-center items-baseline">
                                    <FaRegUser/> 
                                    <div className="flex flex-col">
                                        <span>1</span>
                                        <span>Contributor</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaInfoCircle/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Issues</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaDisease/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Stars</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaNetworkWired/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Forks</span>
                                    </div>
                                </div>
                           </div>
                          <div className="container px-3 mt-4">
                            <h3 className=" font-mono font-extrabold">GitHub - MinKhant21/ChatApp</h3>
                            <p>GitHub</p>
                            <p>
                                Using Node Js
                            </p>
                          </div>
                        </Link>
                       
                    </div>
                    {/* 4 */}
                    <div className="bg-white p-3  hover:scale-105 rounded-lg shadow-xl  mb-3 ">
                            
                        <Link to="https://github.com/MinKhant21/OnlineFoodOrder">
                            <p className="container px-3 mb-3"><span className=" font-serif text-2xl font-semibold">MinKhant21</span>/OnlineFoodOrder</p>
                           <div className="flex justify-around items-center">
                            <div className="flex justify-center items-baseline">
                                    <FaRegUser/> 
                                    <div className="flex flex-col">
                                        <span>1</span>
                                        <span>Contributor</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaInfoCircle/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Issues</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaDisease/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Stars</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaNetworkWired/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Forks</span>
                                    </div>
                                </div>
                           </div>
                          <div className="container px-3 mt-4">
                            <h3 className=" font-mono font-extrabold">GitHub - MinKhant21/OnlineFoodOrder</h3>
                            <p>GitHub</p>
                            <p>
                                User view && Admin Panel
                                Management system
                                Using Laravel Framework
                            </p>
                          </div>
                        </Link>
                       
                    </div>
                    {/* 5 */}
                    <div className="bg-white p-3  hover:scale-105 rounded-lg shadow-xl  mb-3 ">
                            
                        <Link to="https://github.com/MinKhant21/Live-Chat">
                            <p className="container px-3 mb-3"><span className=" font-serif text-2xl font-semibold">MinKhant21</span>/Live-Chat</p>
                           <div className="flex justify-around items-center">
                            <div className="flex justify-center items-baseline">
                                    <FaRegUser/> 
                                    <div className="flex flex-col">
                                        <span>1</span>
                                        <span>Contributor</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaInfoCircle/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Issues</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaDisease/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Stars</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-baseline">
                                    <FaNetworkWired/> 
                                    <div className="flex flex-col">
                                        <span>0</span>
                                        <span>Forks</span>
                                    </div>
                                </div>
                           </div>
                          <div className="container px-3 mt-4">
                            <h3 className=" font-mono font-extrabold">GitHub - MinKhant21/Live-Chat</h3>
                            <p>GitHub</p>
                            <p>
                                Using Vue.js composition api with firebase,
                                this project is real time chat app ,
                                used Auth , Route Guard with firebase
                            </p>
                          </div>
                        </Link>
                       
                    </div>
               </div>
            </div>
                 
        </>
    ) 
}

export default ProjectsPage