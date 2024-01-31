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
                            Hi, I'm Abhishek Kumar, a passionate frontend developer based in Gorakhpur, Uttar Pradesh. With a strong foundation in web technologies, I specialize in creating intuitive and dynamic user interfaces using modern frontend frameworks such as ReactJS.
                        </p>
                        <br />
                        <p className='text-xl'>
                            As a frontend enthusiast, I enjoy bringing designs to life with clean and efficient code. My expertise includes working with technologies like ReactJS, Tailwind CSS, JavaScript, HTML, and CSS. I am committed to staying updated with the latest trends and continuously expanding my skill set to deliver high-quality and user-friendly web applications.
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