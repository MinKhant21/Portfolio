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
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    const handleContextMenu = (event) => {
      disableRightClick(event);
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <>
        <div className={`${theme == 'light' ? 'bg-white' : 'bg-black'}`} style={{width:"auto",height:"100%"}}>
            <NavBar/>
            <div className=" mx-auto bg-gray-100"  id='home'>
                <Home/>
            </div>
            <div className="about container mx-auto mt-10 " id='about'>
                <About/>
            </div>
            <div className=" mt-20 bg-gray-100" id="projects">
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
