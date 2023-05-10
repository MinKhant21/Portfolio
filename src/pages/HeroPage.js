import React from "react";
const HeroPage = () => {
    return (
        <section className="container mx-auto ">
            <div className="flex justify-between ">
                <div className="mx-auto mt-9">
                    <p className="font-bold text-2xl font-serif">Welcome To My World</p>
                    <br/>
                    <span className="font-bold text-3xl font-serif">Hi</span>
                    <span className="text-3xl">
                        , i am Kaung Min Khant
                    </span>
                    <p className="text-amber-400 text-4xl font-semibold mt-2">
                        Web Developer
                    </p>
                    <br/>
                    <p>
                        I'm Front-End and Back-End Developer
                        <span>
                            visit My Profile & Stay Contact with me
                        </span>
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    
                    <img src="./assets/images/kaungminkhant.heic" width={200} className="rounded-3xl" alt="hello"/>
                </div>
            </div>
        </section>
    )
}

export  default  HeroPage