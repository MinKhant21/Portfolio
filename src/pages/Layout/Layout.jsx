import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useLocation } from "react-router-dom"
import { SwitchTransition , CSSTransition } from "react-transition-group"
import './style.css'
import useTheme from '../../hook/useTheme'
import Home from "../Home";
import About from "../About";
import Eduction from "../Eduction";
import Projects from "../Projects";
import Skill from '../Skill'
import Contant from '../Contant'
import Service from '../Service'
import Footer from './Footer'
export default function Layout() {
  const {theme} = useTheme();
  const location = useLocation();
  return (
    <>
        <div  style={{width:"auto",height:"100%"}}>
            <NavBar/>
            <Home/>
            <About/>
            <Skill/>
            <Service/>
            <Projects/>
            <Contant/>
            <Footer/>
        </div>
    </>
  )
}
