import React from 'react';
import pro from '../assets/profile.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import { PiBagFill } from "react-icons/pi";
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <motion.div
                    className='flex flex-col justify-center h-full'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className='text-4xl sm:text-7xl font-bold text-white mb-4 md:mb-0'>
                        <span className="text-2xl sm:text-4xl">Hey! This is</span>
                        <span className="text-yellow-500 block md:inline-block"> Abhishek Kumar</span>
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md break-words'>
                        A dedicated <span className='font-bold text-xl'>Full Stack developer</span> with expertise in both front-end and back-end technologies. Skilled in creating responsive, user-friendly applications and optimizing server-side processes. Passionate about delivering seamless, high-performance solutions.
                    </p>
                    <div className='flex'>
                        <Link to='portfolio' smooth duration={500} className='font-bold group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </Link>
                        <Link to='contact' smooth duration={500} className='font-bold mx-4 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Hire Me
                            <span>
                                <PiBagFill size={25} className='ml-1'/>
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img src={pro} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
