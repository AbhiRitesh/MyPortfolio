import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import reactjs from '../assets/react.png'
import github from '../assets/github.png'
import nodejs from "../assets/nodejs.png"
import mongodb from "../assets/mongodb.png"
import postman from "../assets/postman.png"
import next from "../assets/next.png"
import mysql from "../assets/mysql.png"
import express from "../assets/express.png";


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactjs,
            title: 'ReactJS',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind CSS",
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: next,
            title: 'NextJS',
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: nodejs,
            title: 'NodeJS',
            style: 'shadow-green-400'
        },
        {
            id: 8,
            src: express,
            title: 'ExpressJS',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src: mongodb,
            title: "MongoDB",
            style: 'shadow-green-400'
        },
        {
            id: 10,
            src: mysql,
            title: "MySQL",
            style: 'shadow-blue-400'
        },
        {
            id: 11,
            src: postman,
            title: "Postman API",
            style: 'shadow-orange-400'
        },
        {
            id: 12,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
    ]
    return (
        <div name="services" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='mt-10'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Services</p>
                    <p className='py-6 mt-12 text-xl'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience