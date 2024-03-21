import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./style.css";
import useTheme from "../../hook/useTheme";
import Home from "../Home";
import About from "../About";
import Eduction from "../Eduction";
import Projects from "../Projects";
import Skill from "../Skill";
import { motion, useScroll } from "framer-motion";
import Contant from "../Contant";
import Service from "../Service";
import Footer from "./Footer";
import Experience from "../Experience";
import SeactionMotion from "../../components/SeactionMotion";
export default function Layout() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const location = useLocation();
  const disableRightClick = (event) => {
    event.preventDefault();
  };
 
  return (
    <>
      <motion.div
        className="progress-bar "
        style={{ scaleX: scrollYProgress }}
      />
      <div className=" bg-[#e5e5e5] ">
        <NavBar />
        <Home />
        <SeactionMotion>
          <About />
        </SeactionMotion>
        
        <SeactionMotion>
          <Experience />
        </SeactionMotion>
        {/* <SeactionMotion>
          <Eduction />
        </SeactionMotion> */}
        {/* <SeactionMotion>
          <Skill />
        </SeactionMotion> */}

        <SeactionMotion>
          <Projects />
        </SeactionMotion>
        {/* <SeactionMotion>
          <Contant />
        </SeactionMotion>
        <Service/> */}
        <Footer />
      </div>
    </>
  );
}
