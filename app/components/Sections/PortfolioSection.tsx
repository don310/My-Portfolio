"use client"

import { fullPortfolio, portfolio } from '@/constants/portfolio'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { FaGithub, FaEye } from "react-icons/fa";
=======
import { FaEye } from "react-icons/fa";

>>>>>>> 71a8f4a08b431c59e833ebe2111ca66341d87215

function PortfolioSection() {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['portfolio'];
            let currentSection = '';

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = sectionId;
                    }
                }
            });

            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
<<<<<<< HEAD
        <div id='portfolio' className='flex w-full py-20'>
            <div className='container mx-auto'>
                <div className='text-center mb-28'>
                    <h2 className='text-5xl font-bold mb-[5rem] mt-[5rem]'>Portfolio</h2>
                    <p className='text-gray-700 dark:text-gray-500'>
                        Here are some projects I created while learning about web development. 🧑🏻‍💻.
                    </p>
                </div>

                {/* Portfolio Content Start */}
                <div>
                    {portfolio.map((port, index) => (
                        <div key={index} className='flex flex-col md:flex-row gap-4 items-center justify-center mb-10 shadow-xl p-5 rounded-md dark:bg-slate-900'>
                            <div className='w-full md:w-1/2'>
                                <img src={port.image} alt={port.name} className='w-full h-full rounded-md object-cover' />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <h3 className='text-2xl font-semibold text-teal-500'>{port.name}</h3>
                                <div className='flex flex-row m-1'>
                                    {port.technologies.map((tech, index) => (
                                        <img key={index} src={tech} alt={port.name} className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] m-2' />
                                    ))}
                                </div>
                                <p className='text-gray-700 dark:text-gray-400'>{port.description}</p>
                                <div className='flex gap-4 mt-4'>
                                    <a href={port.link} target='_blank' rel='noreferrer' className='bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-300 flex flex-row'><FaEye className='mt-1 mr-2' /> Demo</a>
                                    {/* <a href={port.source} target='_blank' rel='noreferrer' className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 flex flex-row'><FaGithub className='mt-1 mr-2' /> Source</a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Portfolio Content End */}

                {/* All Projects Link Start */}
                <div className='text-center mt-20'>
                    <Link href='/portfolio' className={`link ${pathname === '/portfolio' || activeLink === 'portfolio' ? 'active' : ''} bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-all duration-300`}>View All Projects</Link>
                </div>
                {/* All Projects Link End */}
=======
        <div id="portfolio" className="w-full py-28">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-5 mt-8">Portfolio</h2>
        <p className="text-gray-700 dark:text-gray-500">
          Here are all the projects I created while I was learning about website development. 🧑🏻‍💻.
        </p>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {fullPortfolio.map((port, index) => (
          <div key={index} className="shadow-xl p-5 rounded-md dark:bg-slate-900">
            <div className="w-full mb-4">
              <img src={port.gambar} alt={port.nama} className="w-full h-full rounded-md object-cover" />
>>>>>>> 71a8f4a08b431c59e833ebe2111ca66341d87215
            </div>
            <div className="w-full p-5">
              <h3 className="text-2xl font-semibold text-teal-500 mb-3">{port.nama}</h3>
              <div className="flex flex-row mb-3">
                {port.teknologi.map((tekno, index) => (
                  <img key={index} src={tekno} alt={port.nama} className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] m-2" />
                ))}
              </div>
              <p className='text-gray-700 dark:text-gray-400'>{port.deskripsi}</p>
              <div className='flex gap-4 mt-4'>
                <a href={port.link} target='_blank' rel='noreferrer' className='bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-300 flex flex-row'><FaEye className='mt-1 mr-2' /> Demo</a>
                {/* <a href={port.source} target='_blank' rel='noreferrer' className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 flex flex-row'><FaGithub className='mt-1 mr-2' /> Source</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default PortfolioSection
