import React from 'react';
import game from '../assets/portfolio/game.png';
import job from '../assets/portfolio/job.png';
import mba from '../assets/portfolio/mba.png';
import blog from '../assets/portfolio/blog.png';
import prompt from '../assets/portfolio/prompt.png';
import estate from '../assets/portfolio/estate.png'

const Portfolio = () => {

    const navigateToDemo = (url) => {
        window.open(url, '_blank');
    };

    const navigateToCode = (url) => {
        window.open(url, '_blank');
    };

    const portfolios = [
        {
            id: 1,
            src: prompt,
            demo: 'https://promptriot-gr8k4cxo7-abhiriteshs-projects.vercel.app/',
            code: 'https://github.com/AbhiRitesh/Promptriot'
        },
        {
            id: 2,
            src: estate,
            demo: "",
            code: "https://github.com/AbhiRitesh/RealEstateApp"
        },
        {
            id: 3,
            src: job,
            demo: 'https://job-boarding-site.netlify.app/',
            code: 'https://github.com/AbhiRitesh/Job-Board'
        },
        {
            id: 4,
            src: mba,
            demo: 'https://mbachaiwala-eta.vercel.app/',
            code: 'https://github.com/AbhiRitesh/mbachaiwala/tree/master/Desktop/Web%20Dev/MBACHAIWALA/mbachaiwala'
        },
        {
            id: 5,
            src: blog,
            demo: "https://mega-blog-drab.vercel.app/",
            code: "https://github.com/AbhiRitesh/MegaBlog"
        },
        {
            id: 6,
            src: game,
            demo: 'https://abhiritesh.github.io/2048-Game/',
            code: 'https://github.com/AbhiRitesh/2048-Game'
        },
    ];

    return (
        <div
            name="portfolio"
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6 text-xl mt-12'>Checkout out some of my projects right here which are built using technology stacks like HTML, CSS, JavaScript, Tailwind CSS, ReactJS, NextJS, NodeJS, ExpressJS, MongoDB and many more.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo, code }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                                <img src={src} alt="" className='rounded-md' />
                                <div className='flex items-center justify-center'>
                                    <button onClick={() => navigateToDemo(demo)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button onClick={() => navigateToCode(code)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
