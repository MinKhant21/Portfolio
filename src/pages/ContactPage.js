import React from "react";


class ContactPage extends React.Component {
    render() {
        return (
            <>
                <div className="w-full max-h-screen container mx-auto px-3">
                    <h3 className="text-white font-serif font-bold  text-2xl mb-3 underline">EDUCATION & SKILLS</h3>
                    <div className="flex flex-col md:flex-row md:space-x-4 ">
                        <div className="p-2 bg-black shadow-xl rounded-lg mb-3">
                            <p className="text-white font-serif font-bold  text-1xl mb-3 ">
                                What's your story?
                            </p>
                            <p className="text-white font-serif font-bold  text-1xl mb-3 ">
                            Get in touch
                            </p>

                            <p className="text-gray-500 mb-3">
                            Always available for freelancing if the right project comes along, Feel free to contact me.
                            </p>

                            <div className="mb-2">
                                <p className="text-white font-sans"> SanChaung , Boho Street , Yangon</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-white font-sans"> kaungminkhant6889@gmail.com</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-white font-sans"> 09402532566</p>
                            </div>
                        </div>
                        <div className="p-2 bg-black shadow-xl rounded-lg">
                        <p className="text-white font-serif font-bold  text-1xl mb-3 ">
                               Say Something
                            </p>
                            <input type="text" className="p-1 w-full mb-3 bg-gray-700  rounded-md" name="" placeholder="Name" value=""/>
                            <input type="email" className="p-1 w-full mb-3 bg-gray-700  rounded-md" name="" placeholder="email" value=""/>
                            <input type="text" className="p-1 w-full mb-3 bg-gray-700  rounded-md" name="" placeholder="Subject" value=""/>
                            <textarea rows="4" cols="" className="p-1 w-full mb-3 bg-gray-700  rounded-md" placeholder="Your Message">          
                            </textarea>

                            <button className="p-2 bg-purple-700 shadow-lg rounded-md px-3">
                                Send Message
                            </button>

                        </div>
                    </div>
                    <div className="mt-3" style={{ height: "50vh" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.354935189873!2d96.12754807562824!3d16.808739069215996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb3822a3d473%3A0x2e5aa07d0b7f68e1!2sBaho%20Rd%2C%20Yangon!5e0!3m2!1sen!2smm!4v1683907408202!5m2!1sen!2smm" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      
                    </div>
                </div>
            </>
        )
    }
}

export default ContactPage