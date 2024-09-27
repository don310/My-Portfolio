"use client";

import { about } from '@/constants/about';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { education } from '@/constants/education';
import { Card, CardHeader, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

function AboutSection(): React.ReactElement {
    const { name, country, role, description, photo } = about[0];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div id='about' className='min-h-screen flex flex-col justify-center items-center p-3 py-20'>
            {/* Title Animation */}
            <motion.h2
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className='text-5xl font-bold mb-[5rem] mt-[5rem]'
            >
                About Me
            </motion.h2>

<<<<<<< HEAD
                {/* Image Content Start */}
                <div ref={imgRef} className='opacity-0 transform translate-y-10 transition-all duration-700 flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0' id='about-img'>
                    <img src={photo} alt='deepak' className=' w-64 h-70 lg:w-80 lg:h-90 rounded-md object-cover border-4 border-teal-500' /> 
                </div>
                {/* Image Content End */}

                {/* Content Start */}
                <div ref={contentRef} className='opacity-0 transform translate-y-10 transition-all duration-700 flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4 lg:flex lg:flex-col' id='about-content'>
                    <p className=' text-gray-700 dark:text-gray-400 text-3xl font-bold mb-[1.5rem]'>
                        Hii..👋 I&#39;m <span className='text-3xl text-teal-500'>{name}</span>
=======
            <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center'>
                {/* Image Animation */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInLeft}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className='flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0'
                >
                    <img
                        src={foto}
                        alt='Ammar'
                        className='w-64 h-64 lg:w-80 lg:h-96 rounded-md object-cover border-4 border-teal-500'
                    />
                </motion.div>

                {/* Content Animation */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInRight}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                    className='flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4 lg:flex lg:flex-col'
                >
                    <p className='text-gray-700 dark:text-gray-400 text-3xl font-bold mb-[1.5rem]'>
                        Hii..👋 Im <span className='text-3xl text-teal-500'>{nama}</span>
>>>>>>> 71a8f4a08b431c59e833ebe2111ca66341d87215
                    </p>
                    <p className='text-gray-700 dark:text-gray-400 text-xl font-bold mb-[4rem] italic'>
                        An <span className='text-2xl text-teal-500'>{role} 🧑🏻‍💻</span> and live in <span className='text-2xl text-teal-500'>{country} 🌏</span>.
                    </p>
<<<<<<< HEAD
                    <p className=' text-md lg:text-lg mb-6'>
                        {description}
=======
                    <p className='text-md lg:text-lg mb-6'>
                        {deskripsi}
>>>>>>> 71a8f4a08b431c59e833ebe2111ca66341d87215
                    </p>
                    <Separator className="mb-5" />
                </motion.div>
            </div>

            {/* Education Animation */}
            <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="text-md lg:text-lg mb-6 text-gray-700 dark:text-gray-400 mt-5"
            >
                Here are some of my educations background
            </motion.p>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="flex flex-col md:flex-row gap-4 items-center justify-center"
            >
                {education.map((edu, index) => (
                    <Card
                        key={index}
                        className="flex flex-col items-center p-4 mb-5 hover:shadow-teal-500 shadow-md transition-all ease-in-out duration-300"
                    >
                        <CardHeader className="text-lg font-semibold mb-2 text-teal-500">
                            {edu.nama}
                        </CardHeader>
                        <CardDescription className="text-sm text-gray-700 dark:text-gray-400">
                            {edu.jurusan}
                        </CardDescription>
                        <CardDescription className="text-sm text-gray-700 dark:text-gray-400">
                            {edu.tahun}
                        </CardDescription>
                    </Card>
                ))}
            </motion.div>
        </div>
    );
}

export default AboutSection;
