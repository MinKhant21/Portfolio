// import { render } from "@testing-library/react";
import React from "react"
import { Link } from "react-router-dom"

// Switch theme function


class NavPage extends React.Component {
    
    dataV() {
        let darkSwitchIcon = document.querySelector("#dark-switch-icon");
        let darkSwitch = document.querySelector("#dark-switch")
        let darkText = document.querySelector("#dark-text")
        let darkChangeText = document.querySelector("#dark-text-change")
        let html = document.documentElement;
        let isDarkMode = false;
        let dataTheme = localStorage.getItem('data-theme')
        dataTheme === 'dark' ? this.toDark() : this.toLight();
    }
    toggleTheme = () => {   
        this.dataV.isDarkMode = !this.dataV.isDarkMode;
        this.switchTheme()
        // console.log("okkk")
    }
    switchTheme = () => {
        this.dataV.isDarkMode ? this.toDark() : this.toLight()
    }
     toDark = () => {
        this.dataV.darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
        this.dataV.darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
        this.dataV.darkChangeText.innerText = 'Dark'
        this.dataV.darkSwitch.classList.remove('bg-slate-800')
        this.dataV.darkSwitch.classList.add('bg-slate-100')
        this.dataV.localStorage.setItem('data-theme', 'dark')
        this.dataV.html.classList.add('dark')
        this.dataV.darkText.classList.add('-translate-x-7')
        this.dataV.darkText.innerText = 'ON'
    }
    
     toLight = () => {
        this.dataV.darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
        this.dataV.darkChangeText.innerText = 'Light'
        this.dataV.darkSwitch.classList.remove('bg-slate-100')
        this.dataV.darkSwitch.classList.add('bg-slate-800')
        this.dataV.localStorage.removeItem('data-theme')
        this.dataV.html.classList.remove('dark')
        this.dataV.darkText.classList.remove('-translate-x-7')
        this.dataV.darkText.innerText = 'FF'
        this.dataV.darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
        setTimeout(() => {
            this.dataV.darkSwitchIcon.classList.remove('rotate-[360deg]')
        }, 200)
    }
    //  dataTheme = localStorage.getItem('data-theme')

    // dataTheme === 'dark' ? toDark() : toLight();
    render() {
        return (
            <div>
                <div className="container mx-auto flex justify-between items-center">
                    <h1>Portfolio</h1>
    
                    <div className="hidden lg:flex">
                        <ul className="flex justify-between space-x-8 container mx-auto">
                            <li className="">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>About</li>
                            <li>
                                <Link to="skills">
                                    Skills
                                </Link>
                            </li>
                            <li>
                            <Link to="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li>
                            <Link to="/contact">
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className=" flex justify-between items-center">
                            {/* <button id="dark-switch" 
                                    className="shadow w-[72px] flex items-center transition duration-200 rounded-full m-5 bg-slate-800 p-1">
                                <div id="dark-switch-icon"
                                     className="bg-slate-50 w-8 h-8 rounded-full transform transition duration-200 flex justify-center items-center">
                                    <i className="fa-regular fa-sun"></i>
                                </div>
                                <h6 id="dark-text" className="text-slate-200 dark:text-slate-900 translate-x-1">FF</h6>
                            </button> */}
                            <div>
                            <div className="">
            <button id="dark-switch" onClick={this.toggleTheme} className="shadow w-[72px] flex items-center transition duration-200 rounded-full m-5 bg-slate-800 p-1">
                <div id="dark-switch-icon" className="bg-slate-50 w-8 h-8 rounded-full transform transition duration-200 flex justify-center items-center">
                    <i className="fa-regular fa-sun"></i>
                </div>
                <h6 id="dark-text" className="text-slate-200 dark:text-slate-900 translate-x-1">FF</h6>
            </button>
            <h1 id="dark-text-change" className="text-center text-3xl font-bold dark:text-slate-200">Light</h1>
        </div>
                            </div>
                            <div className="lg:hidden" >
                                <i className="fa-solid fa-bars"></i>
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
            </div>
        )
    }
    
}

export  default NavPage
