import React from 'react'
import NavBar from './NavBar'
import { Outlet, useLocation } from "react-router-dom"
import { SwitchTransition , CSSTransition } from "react-transition-group"
import './style.css'
export default function Layout() {
  const location = useLocation();
  return (
    <>
        <NavBar/>
        <SwitchTransition>
            <CSSTransition timeout={600} classNames="fade" key={location.pathname}>
                <div className="container mx-auto mt-5">
                    <Outlet/>
                </div>
            </CSSTransition>
        </SwitchTransition>
    </>
  )
}
