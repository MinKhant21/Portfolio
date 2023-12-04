import React from 'react'
import NavBar from './NavBar'
import { Outlet, useLocation } from "react-router-dom"
import { SwitchTransition , CSSTransition } from "react-transition-group"
import './style.css'
import useTheme from '../../hook/useTheme'
import Home from "../Home";
import About from "../About";
import Eduction from "../Eduction";
import Projects from "../Projects";
export default function Layout() {
  const {theme} = useTheme();
  const location = useLocation();
  return (
    <>
        <div className={`${theme == 'light' ? 'bg-white' : 'bg-black'}`} style={{width:"auto",height:"100%"}}>
            <NavBar/>
            <div className=" mx-auto bg-gray-100">
                <Home/>
            </div>
            <div className="container mx-auto mt-10 ">
                <About/>
            </div>
            <div className=" mx-auto mt-20 bg-gray-100">
                <Projects/>
            </div>

            {/*<SwitchTransition>*/}
          {/*    <CSSTransition timeout={600} classNames="fade" key={location.pathname}>*/}
          {/*        <div className="container mx-auto mt-5">*/}
          {/*            <Outlet/>*/}
          {/*        </div>*/}
          {/*    </CSSTransition>*/}
          {/*</SwitchTransition>*/}
        </div>
    </>
  )
}
