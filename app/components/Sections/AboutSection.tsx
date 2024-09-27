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

            <div className='max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center'>
                {/* Image Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                    className='flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0'
                >
                    <img
                        src={photo}
                        alt={`${name}'s photo`}
                        className='w-64 h-55 lg:w-80 lg:h-96 rounded-md object-cover border-4 border-teal-500'
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                    className='flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4'
                >
                    <p className='text-gray-700 dark:text-gray-400 text-3xl font-bold mb-[1.5rem]'>
                    Hi..👋 I&#39;m <span className='text-3xl text-teal-500'>{name}</span>
                    </p>
                    <p className='text-gray-700 dark:text-gray-400 text-xl font-bold mb-[4rem] italic'>
                        A <span className='text-2xl text-teal-500'>{role} 🧑🏻‍💻</span> living in <span className='text-2xl text-teal-500'>{country} 🌏</span>.
                    </p>
                    <p className='text-md lg:text-lg mb-6'>
                        {description}
                    </p>
                    <Separator className="mb-5" />
                </motion.div>
            </div>

            {/* Added a title for education */}
            <h2 className="text-3xl font-bold text-center mb-6 fade-in-element">Educations</h2> 
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                className="flex flex-col md:flex-row gap-4 items-center justify-center"
            >
                {education.map((edu) => (
                    <Card
                        key={edu.name} // Use a unique identifier if available
                        className="flex flex-col items-center p-4 mb-5 hover:shadow-teal-500 shadow-md transition-all ease-in-out duration-300"
                    >
                        <img src={edu.logo} alt={edu.name} className="w-24 h-20 mb-4" />
                        <CardHeader className="text-lg font-semibold mb-2 text-teal-500">
                            {edu.name}
                        </CardHeader>
                        <CardDescription className="text-sm text-gray-700 dark:text-gray-400">
                            {edu.major}
                        </CardDescription>
                        <CardDescription className="text-sm text-gray-700 dark:text-gray-400">
                            {edu.year}
                        </CardDescription>
                    </Card>
                ))}
            </motion.div>
        </div>
    );
}

export default AboutSection;
