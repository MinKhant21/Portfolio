import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import EDKA from "../assets/images/EDKA.png";
import Secret from "../assets/images/secret.jpeg";
import ZED from "../assets/images/zed.jpeg";
export default function Experience() {
  return (
    <>
      <div className=" bg-[#18181B] min-h-screen flex flex-col justify-center items-center    text-white " id="experiences">
        <h1 className=" uppercase text-4xl   font-extrabold  text-center my-10  md:mt-30 md:mb-32">
          My PROFESSIONAL Journey
        </h1>
        <div className=" w-full h-auto flex flex-col justify-center gap-10 items-center">
          <div className=" mx-1  md:w-1/2 ">
            <details className="  collapse  collapse-plus border border-base-300   shadow-md">
              <summary className="collapse-title md:text-xl font-medium    ">
                <div className=" flex justify-between items-center">
                  <p className="mr-5 md:mr-0">
                    Full-Stack Developer @ EDKA Digital Ltd{" "}
                  </p>
                  <p className=" text-sm">Oct 2023 - Present</p>
                </div>
              </summary>
              <div className="md:collapse-content p-0 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="md:hidden sm:block flex justify-center items-center">
                    <img src={EDKA} className=" w-1/2" alt="" />
                  </div>
                  <div className=" flex flex-col gap-5">
                    <div className=" flex item-center gap-5">
                      <div className=" flex items-center gap-1">
                        <IoLocation />
                        <p>Mandalay , Myanmar</p>
                      </div>
                      <div className=" flex items-center gap-1">
                        <a
                          href="https://edkamm.com/"
                          target="_blank"
                          className=" hover:text-blue-400"
                        >
                          <FaExternalLinkSquareAlt />
                        </a>
                        <a
                          href="https://edkamm.com/"
                          target="_blank"
                          className=" hover:text-blue-400"
                        >
                          edkamm.com
                        </a>
                      </div>
                    </div>
                    <div className=" mx-6 max-w-xl md:pb-0 pb-3">
                      <ul className="list-disc">
                        <li>
                          Work closely with developers, UI/UX designers, product
                          managers, project managers and architects to implement
                          software solutions
                        </li>
                        <li>Design client-side and server-side architecture</li>
                        <li>
                          Build the front-end of applications through appealing
                          visual design Develop and manage well-functioning
                          applications
                        </li>
                        <li>
                          Test software to ensure responsiveness and efficiency
                        </li>
                        <li>Troubleshoot, debug and upgrade softwares</li>
                        <li>
                          Deploy the codes in staging and production
                          environments
                        </li>
                        <li>Write well-documented, clean and efficient code</li>
                        <li>
                          Conduct unit testing and integration testing to ensure
                          code quality and reliability
                        </li>
                        <li>
                          Work closely with cross-functional teams, including
                          project managers, designers and other developers, to
                          understand project requirements and deliver
                          high-quality solutions
                        </li>
                        <li>
                          Stay updated on the latest industry trends and
                          technologies, and apply new knowledge to improve
                          existing processes and systems
                        </li>
                      </ul>
                    </div>
                    {/* <div className=" flex flex-col md:flex-row  justify-start gap-5 md:items-center">
                      <p className=" w-1/2 text-center md:w-auto px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        Javascript
                      </p>
                      <p className=" w-1/2 text-center md:w-auto px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        React JS
                      </p>
                      <p className=" w-1/2 text-center md:w-auto px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        Laravel
                      </p>
                      <p className=" w-1/2 text-center md:w-auto px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        Node JS
                      </p>
                      <p className=" w-1/2 text-center md:w-auto px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        AWS
                      </p>
                    </div> */}
                  </div>

                  <div className="hidden md:block">
                    <img src={EDKA} className=" w-1/2" alt="" />
                  </div>
                </div>
              </div>
            </details>
          </div>
          <div className=" mx-1 md:w-1/2 my-5">
        <details className="  collapse  collapse-plus border border-base-300   shadow-md">
          <summary className="collapse-title  md:text-xl font-medium    ">
            <div className=" flex justify-between items-center">
              <p className="mr-5 md:mr-0">Freelance Developer @ FreeLance </p>
              <p className=" text-sm">Feb 2022 - Aug 2023</p>
            </div>
          </summary>
          <div className="collapse-content space-y-4">
            <div className=" flex flex-col md:flex-row justify-between items-center gap-10">
              {/* <div className="md:hidden sm:block flex justify-center items-center">
                <img src={ZED} className=" w-1/2" alt="" />
              </div> */}
              <div className=" flex flex-col gap-5">
                <div className=" flex item-center gap-5">
                  <div className=" flex items-center gap-1">
                    <IoLocation />
                    <p>Mandalay , Myanmar</p>
                  </div>
                  {/* <div className=" flex items-center gap-1">
                    <a
                      href="https://zedmyanmar.com/"
                      target="_blank"
                      className=" hover:text-blue-400"
                    >
                      <FaExternalLinkSquareAlt />
                    </a>
                    <a
                      href="https://zedmyanmar.com/"
                      target="_blank"
                      className=" hover:text-blue-400"
                    >
                      zedmyanmar.com
                    </a>
                  </div> */}
                </div>
                <div className=" mx-6 max-w-xl">
                    <ul className="list-disc">
                         <li> Created Dynamic Website and Web Applications </li>
                         <li> Meeting Clients</li>
                         <li> Collaborated with other developers to develop </li>
                         <li> projects maintained existing code and functionality</li>
                         <li> Api Integration</li>
                         <li> POS Systems , Management Systems and others</li>
                    </ul>
                </div>
                {/* <div className="">
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Javascript
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    React JS
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Laravel
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Node JS
                  </p>
                </div> */}
              </div>
              {/* <div className="hidden md:block">
                <img src={ZED} className=" w-1/2" alt="" />
              </div> */}
            </div>
          </div>
        </details>
      </div>
          <div className=" mx-1 md:w-1/2 my-5">
            <details className="  collapse  collapse-plus border border-base-300   shadow-md">
              <summary className="collapse-title  md:text-xl font-medium    ">
                <div className=" flex justify-between items-center">
                  <p className="mr-5 md:mr-0">
                    Junior Developer @ Zed Digital Ltd{" "}
                  </p>
                  <p className=" text-sm">Step 2020 - Nov 2021</p>
                </div>
              </summary>
              <div className="collapse-content space-y-4">
                <div className=" flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="md:hidden sm:block flex justify-center items-center">
                    <img src={ZED} className=" w-1/2" alt="" />
                  </div>
                  <div className=" flex flex-col gap-5">
                    <div className=" flex item-center gap-5">
                      <div className=" flex items-center gap-1">
                        <IoLocation />
                        <p>Mandalay , Myanmar</p>
                      </div>
                      <div className=" flex items-center gap-1">
                        <a
                          href="https://zedmyanmar.com/"
                          target="_blank"
                          className=" hover:text-blue-400"
                        >
                          <FaExternalLinkSquareAlt />
                        </a>
                        <a
                          href="https://zedmyanmar.com/"
                          target="_blank"
                          className=" hover:text-blue-400"
                        >
                          zedmyanmar.com
                        </a>
                      </div>
                    </div>
                    <div className=" mx-6 max-w-xl">
                      <ul className="list-disc">
                        <li>
                          {" "}
                          Created Dynamic Website and Web Applications - Handle
                          Server
                        </li>
                        <li> Meeting Clients</li>
                        <li>
                          {" "}
                          Collaborated with senoir developers to develop{" "}
                        </li>
                        <li>
                          {" "}
                          projects maintained existing code and functionality
                        </li>
                        <li>
                          {" "}
                          Contributed to the development of the - company's own
                          product. Developed and managed a responsive website to
                          drive sales for the organization.
                        </li>
                        <li> Api Integration and Security</li>
                      </ul>
                    </div>
                    {/* <div className=" flex justify-start gap-5 items-center">
                      <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        Javascript
                      </p>
                      <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        React JS
                      </p>
                      <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        Laravel
                      </p>
                      <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        Node JS
                      </p>
                      <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                        AWS
                      </p>
                    </div> */}
                  </div>
                  <div className="hidden md:block">
                    <img src={ZED} className=" w-1/2" alt="" />
                  </div>
                </div>
              </div>
            </details>
          </div>
          
        </div>
      </div>
    </>
  );
}
