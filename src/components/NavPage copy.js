import React from "react";

const NavPage = () => {
    return (
        <div className="p-3 flex justify-between items-center">
            {/* <img src="" alt="hello"/> */}
            <h2 className="text-3xl font-bold text-center">Porfolio</h2>
            <ul className="flex justify-between space-x-6 ">
                <li className=" hover:border-b-2 border-b-amber-300 p-3">
                    <a href="" className="">
                        Home
                    </a>
                </li>
                <li className="hover:border-b-2 border-b-amber-300  p-3">
                    <a href="">About</a>
                </li>
                <li className="hover:border-b-2 border-b-amber-300  p-3">
                    <a href="">Porjects</a>
                </li>
                <li className=" hover:border-b-2 border-b-amber-300 p-3">
                    <a href="">
                        Skill
                    </a>
                </li>
            </ul>
            <a href="">
                <span className="p-3 bg-gray-500 rounded-2xl">Contact Us</span>
            </a>
        </div>
    )
}

export default  NavPage