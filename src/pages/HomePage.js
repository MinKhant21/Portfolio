import React  from "react";
import NavPage from "../components/NavPage";
import AboutPage from "./AboutPage";
import SkillPage from "./SkillPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
// import HeroPage from "./HeroPage";
import photo from  "../assets/images/kaungminkhant.png"
const HomePage = () => {
    return (
        
      <div>
            {/*NavBar*/}
            
            <div className=" container mx-auto  min-h-screen flex lg:flex-row justify-between items-center md:flex-col  flex-col">
                <div className="w-1/2 container mx-auto ">
                    <p className="font-bold text-8xl from-stone-50 text-slate-200">
                        <span className="hover:text-slate-500 skew-y-12">M</span> <span> y, Myself & I</span>
                    </p>
                    <br/>
                    <p className="container mx-auto flex-1 from-stone-50 text-slate-200">
                        I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.

                        Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,

                        Interested in the entire frontend spectrum and working on ambitious projects with positive people.


                    </p>
                    <p className="p-3 bg-cyan-900 mt-3 w-40 text-center rounded-md hover:bg-cyan-500 ">
                        Download Cv
                    </p>
                </div>
                <div className="w-1/2 md:flex justify-center items-center hidden  ">
                    <div className="w-1/2 h-1/2 bg-center">
                        <img src={photo} alt="photo"  className="rounded-full"/>
                    </div>
                </div>
            </div>

            {/* About */}

            <AboutPage/>

           < SkillPage/>

           <ProjectPage/>

           <ContactPage/>
          
    </div>

    )
}

export default HomePage