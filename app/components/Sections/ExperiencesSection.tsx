"use client"

import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { experiences } from '@/constants/experiences';
import { motion } from 'framer-motion';

function ExperienceSectionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current slide index
  const [slidesPerView, setSlidesPerView] = useState(1); // State to track how many slides are shown based on screen size

  useEffect(() => {
    const updateSlidesPerView = () => {
      // Updates the number of slides to be shown per view based on screen width
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    };

    updateSlidesPerView(); // Call function initially when the component mounts
    window.addEventListener('resize', updateSlidesPerView); // Add event listener for screen resizing

    return () => {
      window.removeEventListener('resize', updateSlidesPerView); // Clean up the event listener
    };
  }, []);

  const handlePrevClick = () => {
    // Navigate to the previous slide, ensuring it doesn't go below 0
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextClick = () => {
    // Navigate to the next slide, ensuring it doesn't exceed the total number of slides
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(experiences.length / slidesPerView) ? prevIndex : prevIndex + 1));
  };

  return (
    <div id="experiences" className="w-full py-20">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-[5rem] mt-[5rem]">Experiences</h2>
      </div>

      <div className="container mx-auto">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-7">Work Experience⌛</h3>
          <p className="text-gray-700 dark:text-gray-500">
            I also have experience in web development, which I have learned for more than 2 years, as explained below.
          </p>
        </div>

        {/* Experience Carousel Start */}
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            {/* Carousel Content */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100 / slidesPerView}%)` }}
              >
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-full ${slidesPerView === 2 ? 'md:w-1/2' : ''} p-4`}
                    style={{ minWidth: slidesPerView === 2 ? '50%' : '100%' }}
                  >
                    {/* Individual Experience Card */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-black">
                      <h4 className="text-3xl lg:text-4xl font-semibold text-teal-500 mb-5">{exp.position}</h4>
                      <p className="text-lg text-teal-700 dark:text-teal-500 mb-5">
                        {exp.name}<span className="text-base text-black dark:text-white mb-5"> | {exp.contract}</span>
                      </p>
                      <div className='flex flex-row m-1'>
                        {exp.logo.map((logo, index) => (
                          <img key={index} src={logo} alt={exp.name} className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] m-2' />
                        ))}
                      </div>
                      <p className="text-sm dark:text-gray-400 text-gray-500 mb-5">{exp.year}</p>
                      <p className="text-md lg:text-lg text-gray-700 dark:text-white mb-5">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Experience Carousel End */}

        {/* Navigation Buttons Start */}
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className={`p-2 text-teal-500 bg-white border border-teal-500 dark:bg-gray-800 rounded-md mx-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <BsChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNextClick}
            disabled={currentIndex === Math.ceil(experiences.length / slidesPerView) - 1}
            className={`p-2 text-teal-500 bg-white border border-teal-500 dark:bg-gray-800 rounded-md mx-2 ${currentIndex === Math.ceil(experiences.length / slidesPerView) - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <BsChevronRight className="w-8 h-8" />
          </button>
        </div>
        {/* Navigation Buttons End */}
      </div>
    </div>
  );
}

export default ExperienceSectionComponent;
