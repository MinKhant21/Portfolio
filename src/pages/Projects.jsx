import React from 'react'
import  {Link} from 'react-router-dom'
import smartJob from '../assets/projects/smartJob.png'
import football from '../assets/projects/football.png'
import  eyeSvg from '../assets/eye.svg'
import shwesport from '../assets/projects/shwesport.png'
import rcep from '../assets/projects/rcep.png'
import './Layout/style.css'
let projectslist = [
    {
        title : '211@Sport Football live Score',
        date : '2020-11-1 -> 2021.11.1',
        imageUrl : football,
        position : 'Web Developer',
        description : 'I am worked WEB Developer in this project using Laravel and Vue Js.\n' +
            ' Fixture and result\n' +
            ' Predict\n' +
            ' Forecast Score Pick\n' +
            ' Web page UI and Responsive\n' +
            ' Fatch Data From FootBall-api\n' +
            ' Show web page\n' +
            ' All page Design and Responsive\n',
    },
    {
        title : "Smart Job",
        date : '2021-1-1 -> 2021.4.2',
        imageUrl : smartJob,
        position : 'Web Developer',
        description : 'I am worked WEB Developer in this project using Laravel and Vue Js.\n' +
            ' Fixture and result\n' +
            ' Predict\n' +
            ' Forecast Score Pick\n' +
            ' Web page UI and Responsive\n' +
            ' Fatch Data From FootBall-api\n' +
            ' Show web page\n' +
            ' All page Design and Responsive\n',
    },
    {
        title : "Shwesport Job",
        date : '2021-1-1 -> 2021.4.2',
        imageUrl : shwesport,
        position : 'Web Developer',
        description : 'I am worked WEB Developer in this project using Laravel and Vue Js.\n' +
            ' Fixture and result\n' +
            ' Predict\n' +
            ' Forecast Score Pick\n' +
            ' Web page UI and Responsive\n' +
            ' Fatch Data From FootBall-api\n' +
            ' Show web page\n' +
            ' All page Design and Responsive\n',
    },
    {
        title : "Rceo Job",
        date : '2023-11-1 -> 2021.4.2',
        imageUrl : rcep,
        position : 'Full-Stack Developer',
        description : 'I am worked WEB Developer in this project using Laravel and Vue Js.\n' +
            ' Fixture and result\n' +
            ' Predict\n' +
            ' Forecast Score Pick\n' +
            ' Web page UI and Responsive\n' +
            ' Fatch Data From FootBall-api\n' +
            ' Show web page\n' +
            ' All page Design and Responsive\n',
    },
]
export default function Projects() {

  return (
      <div >
          <h1 className='text-gray-700 text-xl text-center border-blue-700 mb-[4rem] font-extrabold pt-10'>Projects</h1>
            {/*211 Sport*/}
          <div className='md:flex sm:flex-row  mb-10 shrink-0 rounded-md shadow-lg mx-auto  justify-center md:w-[70rem] md:h-[15rem] bg-white'>
            <div className='w-full md:w-2/5 md:h-2/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0'> 
                <img src={football} alt="" className=' object-cover  w-full h-full' />
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between mx-2 items-center'>
                    <h1 className=' text-lg font-serif font-semibold'>211 Sports</h1>
                    <span className=' text-sm'>Date : 11/2020 - 11/2021</span>
                </div>
                <p className=' mx-2 text-md font-sans font-bold mb-2 mt-2'>Web Developer</p>
                <p className=' mx-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nemo laborum alias culpa architecto eius iusto necessitatibus ipsum facere totam. Vel quibusdam sint culpa inventore sit minus voluptates, numquam reprehenderit?
                </p>
            </div>
          </div>

            {/*211 Sport*/}
            <div className='md:flex sm:flex-row  mb-10 shrink-0 rounded-md shadow-lg mx-auto  justify-center md:w-[70rem] md:h-[15rem] bg-white'>
            <div className='w-full md:w-2/5 md:h-2/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0'> 
                <img src={football} alt="" className=' object-cover  w-full h-full' />
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between mx-2 items-center'>
                    <h1 className=' text-lg font-serif font-semibold'>211 Sports</h1>
                    <span className=' text-sm'>Date : 11/2020 - 11/2021</span>
                </div>
                <p className=' mx-2 text-md font-sans font-bold mb-2 mt-2'>Web Developer</p>
                <p className=' mx-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nemo laborum alias culpa architecto eius iusto necessitatibus ipsum facere totam. Vel quibusdam sint culpa inventore sit minus voluptates, numquam reprehenderit?
                </p>
            </div>
          </div>

            {/*211 Sport*/}
            <div className='md:flex sm:flex-row  mb-10 shrink-0 rounded-md shadow-lg mx-auto  justify-center md:w-[70rem] md:h-[15rem] bg-white'>
            <div className='w-full md:w-2/5 md:h-2/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0'> 
                <img src={football} alt="" className=' object-cover  w-full h-full' />
            </div>
            <div className=' mt-2'>
                <div className=' flex justify-between mx-2 items-center'>
                    <h1 className=' text-lg font-serif font-semibold'>211 Sports</h1>
                    <span className=' text-sm'>Date : 11/2020 - 11/2021</span>
                </div>
                <p className=' mx-2 text-md font-sans font-bold mb-2 mt-2'>Web Developer</p>
                <p className=' mx-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nemo laborum alias culpa architecto eius iusto necessitatibus ipsum facere totam. Vel quibusdam sint culpa inventore sit minus voluptates, numquam reprehenderit?
                </p>
            </div>
          </div>
      </div>
  )
}
