import React from "react";

export default function Experience() {
  return (
    <div className=" my-10 h-screen flex flex-col justify-center items-center">
      <h1 className="  text-center font-sans font-extrabold text-2xl mb-10 underline underline-offset-8  decoration-sky-500/30">
        Experience
      </h1>
      <div
        tabIndex={0}
        className=" mx-auto w-1/2 collapse  collapse-plus border border-base-300  shadow-md"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>

      <div
        tabIndex={0}
        className=" mx-auto mt-8 w-1/2 collapse  collapse-plus border border-base-300  shadow-md"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="mx-auto mt-8 w-1/2 collapse  collapse-plus border border-base-300  shadow-md"
      >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
}
