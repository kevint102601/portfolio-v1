import React from 'react'
import heroimage from '../assets/profilepic7.png'
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">

            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img className='rounded-lg' src={heroimage} alt="hero" />
            </div>
            <div className='col-span-2 px-5'>

                <h1 className="text-white text-4x1 sm:text-5x1 lg:text-8x1 font-extrabold">
                    <span className="primary-color">
                        I'm a
                    </span> <br />
                    <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "Backend Dev",
                            1000,
                            "Full Stack",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className="text-white sm:text-lg my-6 lg:text-x1">
                    My name is John Doe and I have 5+ years experience in web development.
                </p>

                <div className="my-8">
                    <a href="/" className="px-6 py-3 w-full rounded-x1 mr-4
                    bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                        Download CV
                    </a>
                    <a href="#contact" className="px-6 py-3 w-full rounded-x1 
                    border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
                    text-white hover:border-none">
                        Contact
                    </a>

                </div>

            </div>
        </div>

    )
}

export default Hero