import React from 'react'
import Project from '../assets/images/vanilla.png'
import { CSSTransition, SwitchTransition} from 'react-transition-group'
import { useLocation } from 'react-router-dom';
import './Layout/style.css'
export default function Projects() {
  const location = useLocation();

  return (
    <div className='h-[700px] '>
        <SwitchTransition>
            <CSSTransition timeout={600} classNames="fade" key={location.pathname}>
                <div className="container mx-auto mt-5">
                <div className="container flex  justify-center items-center">
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
        </div>
        <div className="container flex  justify-center items-center">
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
        </div>
        <div className="container flex  justify-center items-center">
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
            <div className="p-3 shadow-md rounded-md ">
                <img className=' w-full' src={Project} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque distinctio, aperiam incidunt eum eligendi obcaecati modi cumque laudantium ipsum ut reiciendis eveniet voluptatibus necessitatibus. Temporibus perspiciatis minima delectus pariatur mollitia.
                </p>
            </div>
        </div>    
                </div>
            </CSSTransition>
        </SwitchTransition>

   
    </div>
  )
}
