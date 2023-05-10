import React from "react";

const ProjectsPage = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-around flex-col space-y-4 items-center lg: lg:h-screen lg:space-x-4 lg:flex-row">
                    
                    <div class="p-3 shadow-2xl bg-rose-100 flex flex-col rounded-2xl  space-x-4 md:flex-row hover:scale-105 transition duration-500 ">
                        <img src="https://cdn.dribbble.com/users/1769954/screenshots/14867104/media/61fb2e7aca0c9e8b9e7bde5db155d538.png?compress=1&resize=400x300" class="w-64 rounded-2xl" alt="" />
                    <div>
                    <p class="text-3xl">Live Chat App</p>
                    <p>Feb 4 . 5 . 2023</p>
                    <p class="max-w-xs">
                        Using Vue , Friebase
                    </p>
                    <a href="https://github.com/MinKhant21/Live-Chat">
                    <button class="p-2 rounded-lg mt-2 bg-cyan-600">
                        See More
                    </button>
                    </a>
                    </div>
                    </div>

                    {/* 2 */}
                    <div class="p-3 shadow-2xl bg-rose-100 flex flex-col rounded-2xl  space-x-4 md:flex-row hover:scale-105 transition duration-500 ">
                        <img src="https://www.creativefabrica.com/wp-content/uploads/2022/06/17/Ecommerce-Logo-Design-Graphics-32523051-1.jpg" class="w-60 rounded-2xl" alt="" />
                    <div>
                    <p class="text-3xl">Ecommerce</p>
                    <p>Feb 4 . 5 . 2023</p>
                    <p class="max-w-xs">
                        Using Laravel , Jquery

                    </p>
                    <a href="https://github.com/MinKhant21/Ecommerce">
                    <button class="p-2 rounded-lg mt-2 bg-cyan-600">
                        See More
                    </button>
                    </a>
                    </div>
                    </div>

                    {/* 3 */}
                    <div class="p-3 shadow-2xl bg-rose-100 flex flex-col rounded-2xl  space-x-4 md:flex-row hover:scale-105 transition duration-500 ">
                        <img src="https://img.freepik.com/premium-vector/online-food-order-logo-icon_61778-45.jpg  " class="w-64 rounded-2xl" alt="" />
                    <div>
                    <p class="text-3xl">Online Food Order</p>
                    <p>Feb 4 . 5 . 2023</p>
                    <p class="max-w-xs">
                        Using Laravel 
                       
                    </p>
                    <a href="https://github.com/MinKhant21/OnlineFoodOrder">
                    <button class="p-2 rounded-lg mt-2 bg-cyan-600">
                        See More
                    </button>
                    </a>
                    </div>
                    </div>


                    
                    
                    
                </div>
                    {/* 2row */}

            </div>
                 
        </>
    ) 
}

export default ProjectsPage