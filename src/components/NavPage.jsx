// import { render } from "@testing-library/react";
import React from "react"
import { Link } from "react-router-dom"

// Switch theme function

class NavPage extends React.Component {
     constructor(props) {
        super(props)
        this.state= {
            show : true
        }
        
    }
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
    HandleMenu = () => {
        // console.log('ok')
        this.setState({
            show : false
        })
    }
    ShowNature = () => {
        this.setState({
            show : true
        })
    }

    HandleUl = () => {
        return (
            <div className="fixed top-0 md:top-auto left-full md:left-0   h-screen md:h-auto w-full bg-slate-500 md:bg-black z-10 md:static menu-contest  ">
            <div className=" absolute top-0 right-0 w-10 h-10 border border-green-400 flex justify-center items-center rounded-2xl mr-5 mt-5">
                <i className="fa-solid fa-large"></i>

            </div>
        <ul className="md:flex justify-center items-center">
            <li className="p-4">
                <Link to="/">
                    Home
                </Link>
            </li>
            <li className="p-4">About</li>
            <li className="p-4">
                <Link to="skills">
                    Skills
                </Link>
            </li>
            <li className="p-4">
            <Link to="/projects">
                    Projects
                </Link>
            </li>
            <li className="p-4">
            <Link to="/contact">
                    Contact Me
                </Link>
            </li>
        </ul>
    </div>
        )
    }
    
    HandleUlSlider = () => {
        return (
            <div className="fixed top-0 md:top-auto left-full md:left-0   h-screen md:h-auto w-full bg-slate-500 md:bg-black z-10 md:static menu-contest   ">
            <div className=" absolute top-0 right-0 w-10 h-10 border border-green-400 flex justify-center items-center rounded-2xl mr-5 mt-5 cursor-pointer duration-150">
                <i className="fa-solid fa-large"></i>

            </div>
        <ul className="md:flex justify-center items-center">
            <li className="p-4">
                <Link to="/">
                    Home
                </Link>
            </li>
            <li className="p-4">About</li>
            <li className="p-4">
                <Link to="skills">
                    Skills
                </Link>
            </li>
            <li className="p-4">
            <Link to="/projects">
                    Projects
                </Link>
            </li>
            <li className="p-4">
            <Link to="/contact">
                    Contact Me
                </Link>
            </li>
        </ul>
    </div>
        )
    }
    //  dataTheme = localStorage.getItem('data-theme')

    // dataTheme === 'dark' ? toDark() : toLight();
    render() {
        return (
                <div className="container max-auto ">
                    <div className="flex flex-row md:flex-row justify-between items-center   ">
                    <h1>Portfolio</h1>
    
                {/* ul Block */}
                {   (this.state.show == true) ?
                    this.HandleUl 
                    : ""
                    
                }
                {   (this.state.show == false) ?
                    this.HandleUlSlider : ""
                }
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
{/* <h6 id="dark-text" className="text-slate-200 dark:text-slate-900 translate-x-1">FF</h6> */}
</button>
{/* <h1 id="dark-text-change" className="text-center text-3xl font-bold dark:text-slate-200">Light</h1> */}
            </div>
            </div>
            
            <div className="lg:hidden menu-open cursor-pointer" onClick={this.HandleMenu} >
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
