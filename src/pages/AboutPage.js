
import React from "react";
import web from "../assets/images/web.jpeg"
class AboutPage extends React.Component {
    render() {
        return (
            <>
                <div className="w-full  min-h-screen container mx-auto px-3  scroll-smooth md:flex justify-around items-stretch">
                    <div className=""> 
                        <img src={web} alt="" className="md:w-35 my-auto rounded-md mt-5 "/>
                    </div>
                    <div className="mt-4 container mx-auto px-4 md:mt-9 md:flex-col md:justify-center md:items-center ">
                        <h3 className=" text-white font-serif font-bold text-2xl underline mb-3 ">About Me</h3>

                        <p className="text-white font-serif font-bold  text-2xl mb-3">
                        I'm a Freelancer Front-end Developer with over 3 years of experience. 
                        </p>
                        <p className=" text-gray-500">
                        Ubuntu Advantage is the professional support package from the experts at Canonical. Get 24x7 support with access to engineers with first-hand experience of your issues. It includes Landscape, the systems management tool, for monitoring, managing, patching, and compliance reporting on all your Ubuntu desktops. Learn more about Ubuntu for enterprises ›
                        </p>
                        <button type="" className="p-3 bg-indigo-500 rounded-lg shadow-md mt-3">Contact Me</button>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default AboutPage