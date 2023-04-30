import React from "react"
import HomePage from "./pages/HomePage"
// import SkillPage from "./pages/SkillPage"
//
import { Routes, Route ,Switch ,BrowserRouter as Router} from "react-router-dom"
import NavPage from "./components/NavPage"
import SkillPage from "./pages/SkillPage"
import ProjectsPage from "./pages/ProjectPage"
const App = () => {
  return (
      <>
        <div className=" bg-[#000000] w-full h-auto text-white">
            <NavPage/>
        </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>

          


      </>
      
  )
}

export default App