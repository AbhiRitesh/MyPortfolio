import React from 'react'
import meImage from '../assets/me.png';

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About Me</p>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-3/4'>
                        <p className='text-xl mt-12'>
                            Hi, I’m Abhishek Kumar, a dedicated Full Stack Developer based in Ranchi, Jharkhand. With a strong foundation in web technologies, I specialize in building end-to-end solutions using modern frameworks like ReactJS for the frontend and Node.js for the backend.
                        </p>
                        <br />
                        <p className='text-xl'>
                            As a Full Stack Developer, I thrive on crafting complete, high-performance web applications from the ground up. My expertise spans both front-end and back-end technologies, including ReactJS, Tailwind CSS, JavaScript, HTML, and CSS for seamless user interfaces, and Node.js for robust server-side solutions. I am dedicated to staying current with industry trends and continuously enhancing my skills to deliver innovative and efficient web solutions.
                        </p>

                    </div>
                    <div className='w-full md:w-1/4 flex justify-center items-center'>
                        <img src={meImage} alt='Abhishek Kumar' className='rounded-full h-64 w-64 object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About