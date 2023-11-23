import React from 'react'
import NavBar from './NavBar'
import { Outlet, useLocation } from "react-router-dom"
import { SwitchTransition , CSSTransition } from "react-transition-group"
import './style.css'
import useTheme from '../../hook/useTheme'
export default function Layout() {
  const {theme} = useTheme();
  const location = useLocation();
  return (
    <>
        <div className={`${theme == 'light' ? 'bg-white' : 'bg-black'}`} style={{width:"auto",height:"100%"}}>
          <NavBar/>
          <SwitchTransition>
              <CSSTransition timeout={600} classNames="fade" key={location.pathname}>
                  <div className="container mx-auto mt-5">
                      <Outlet/>
                  </div>
              </CSSTransition>
          </SwitchTransition>
        </div>
    </>
  )
}
