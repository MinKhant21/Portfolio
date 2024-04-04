import React, { useRef } from "react";

import AboutGIF from "../assets/images/abou.gif";
export default function About() {
  return (
    <div id="about" className=" w-auto md:min-h-screen container   md:mx-auto py-10  px-10">
        <h1  className=" text-4xl  uppercase font-extrabold mt-10   md:mt-52 md:mb-32 md:text-center text-clip">Professional Background and Skillset</h1>

        <div className=" flex-row md:flex justify-between gap-40 mt-24 ">
            <div className=" space-y-10">
              <div className=" flex items-center gap-10">
                  <p>Name</p>
                  <p>:</p>
                  <p className=" text-sm md:text-md">Kaung Min Khant</p>
              </div>
              <div className=" flex items-center gap-9">
                  <p>Phone</p>
                  <p>:</p>
                  <p className=" text-sm md:text-md">+959402532566</p>
              </div>
              <div className=" flex items-center gap-10">
                  <p>Email</p>
                  <p>:</p>
                  <p className=" text-sm md:text-md">kaungminkhant.dev.mm@gmail.com</p>
              </div>
              <div className=" flex items-center gap-4">
                  <p>Address</p>
                  <p>:</p>
                  <p className=" pl-7  text-sm md:text-md">Mandalay,Myanmar</p>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <ul className="list-disc space-y-10 text-justify">
                <li>I have over 3 years of experience in Software development. In the earlier stages of my career, I built hundreds of company portfolio websites tailored to customer needs using HTML, CSS, jQuery, and WordPress</li>
                <li>Starting in 2020, I transitioned to working with React.js, Next.js, and Redux, accumulating 2 years of experience in React.js, over 3 years in Node.js, and 2 years in TypeScript. I also have experience with Scss, Material-UI (@mui), Bootstrap, and Tailwind.</li>
                <li>Throughout my career, I have developed multiple web applications and websites with a user-centric approach, always considering the user's perspective.</li>
                <li>Currently, I'm actively pursuing professional development in Node.js, Express, and MongoDB, aiming to expand my expertise into backend development.</li>
              </ul>
            </div>
        </div>
    </div>
  );
}
