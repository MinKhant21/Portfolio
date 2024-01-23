import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import EDKA from "../assets/images/EDKA.png";
import Secret from "../assets/images/secret.jpeg";
import ZED from "../assets/images/zed.jpeg";
export default function Experience() {
  return (
    <div className=" my-24 md:my-80 h-auto flex flex-col justify-center items-center ">
      <h1 className="  text-center font-sans font-extrabold text-2xl mb-10 underline underline-offset-8  decoration-sky-500/30">
        Experience
      </h1>
     {/* EDKA */}
      <div className=" mx-1  md:w-1/2 ">
        <details className="  collapse  collapse-plus border border-base-300   shadow-md">
          <summary className="collapse-title md:text-xl font-medium    ">
            <div className=" flex justify-between items-center">
              <p className="mr-5 md:mr-0">Full-Stack Developer @ EDKA Digital Ltd </p>
              <p className=" text-sm">Oct 2023 - Present</p>
            </div>
          </summary>
          <div className="collapse-content space-y-4">
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
                <div className=" mx-6 max-w-xl">
                  <ul className="list-disc">
                    <li>Work closely with developers, UI/UX designers, product managers, project managers and architects to implement software solutions</li>
                    <li>Design client-side and server-side architecture</li>
                    <li>Build the front-end of applications through appealing visual design Develop and manage well-functioning applications</li>
                    <li>Test software to ensure responsiveness and efficiency</li>
                    <li>Troubleshoot, debug and upgrade softwares</li>
                    <li>Deploy the codes in staging and production environments</li>
                    <li>Write well-documented, clean and efficient code</li>
                    <li>Conduct unit testing and integration testing to ensure code quality and reliability</li>
                    <li>Work closely with cross-functional teams, including project managers, designers and other developers, to understand project requirements and deliver high-quality solutions</li>
                    <li>Stay updated on the latest industry trends and technologies, and apply new knowledge to improve existing processes and systems</li>
                  </ul>
                </div>
                <div className=" flex justify-start gap-5 items-center">
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
                </div>
              </div>

              <div className="hidden md:block">
                <img src={EDKA} className=" w-1/2" alt="" />
              </div>
            </div>
          </div>
        </details>
      </div>
     {/* Secret */}
      {/* <div className=" mx-1 md:w-1/2 my-5">
        <details className="  collapse  collapse-plus border border-base-300   shadow-md">
          <summary className="collapse-title  md:text-xl font-medium    ">
            <div className=" flex justify-between items-center">
              <p className="mr-5 md:mr-0">PHP Developer @ Secret Code Ltd </p>
              <p className=" text-sm">Jun 2023- Oct 2023</p>
            </div>
          </summary>
          <div className="collapse-content space-y-4">
            <div className=" flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="md:hidden sm:block flex justify-center items-center">
                <img src={Secret} className=" w-1/2" alt="" />
              </div>
              <div className=" flex flex-col gap-5">
                <div className=" flex item-center gap-5">
                  <div className=" flex items-center gap-1">
                    <IoLocation />
                    <p>Yangon , Myanmar</p>
                  </div>
                  
                </div>
                <div className=" mx-6 max-w-xl">
                    <ul className=" list-disc">
                         <li>Integration of user-facing elements developed by front-end developers</li>
                         <li>Build efficient, testable, and reusable PHP modules</li>
                         <li>Prepare and maintain all applications utilizing standard development tools</li>
                         <li>Utilize backend data services and contribute to increase existing data services API</li>
                         <li>Refactor, optimize and improve the existing codebase for maintenance and scale</li>
                         <li>Searching for and correcting errors</li>
                    </ul>
                </div>
                <div className=" flex justify-start gap-5 items-center">
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Javascript
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Vue JS
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Laravel
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    Angular JS
                  </p>
                  <p className=" px-3 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer">
                    PHP
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={Secret} className=" w-1/2" alt="" />
              </div>
            </div>
          </div>
        </details>
      </div> */}
     {/* ZED */}
      <div className=" mx-1 md:w-1/2 my-5">
        <details className="  collapse  collapse-plus border border-base-300   shadow-md">
          <summary className="collapse-title  md:text-xl font-medium    ">
            <div className=" flex justify-between items-center">
              <p className="mr-5 md:mr-0">Junior Developer @ Zed  Digital Ltd </p>
              <p className=" text-sm">May 2022-Jun 2023</p>
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
                         <li> Created Dynamic Website and Web Applications - Handle Server</li>
                         <li> Meeting Clients</li>
                         <li> Collaborated with senoir developers to develop </li>
                         <li> projects maintained existing code and functionality</li>
                         <li> Contributed to the development of the - company's own product. Developed and managed a responsive website to drive sales for the organization.</li>
                         <li> Api Integration and Security</li>
                    </ul>
                </div>
                <div className=" flex justify-start gap-5 items-center">
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
                </div>
              </div>
              <div className="hidden md:block">
                <img src={ZED} className=" w-1/2" alt="" />
              </div>
            </div>
          </div>
        </details>
      </div>
       {/* Freelance */}
       <div className=" mx-1 md:w-1/2 my-5">
        <details className="  collapse  collapse-plus border border-base-300   shadow-md">
          <summary className="collapse-title  md:text-xl font-medium    ">
            <div className=" flex justify-between items-center">
              <p className="mr-5 md:mr-0">Freelance Developer @ FreeLance </p>
              <p className=" text-sm">Sep 2020 - Nov 2021</p>
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
                <div className=" flex justify-start gap-5 items-center">
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
                </div>
              </div>
              {/* <div className="hidden md:block">
                <img src={ZED} className=" w-1/2" alt="" />
              </div> */}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
