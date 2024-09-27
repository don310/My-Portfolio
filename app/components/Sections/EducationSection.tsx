"use client"

import React, { useEffect } from 'react';
import { Card, CardHeader, CardDescription } from '@/components/ui/card';
import { education } from '@/constants/education';
import { organization } from '@/constants/organization';

function EducationSection(): React.ReactElement {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in-element');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 150); 
        });
    }, []);

    return (
        <div id="educations">
            <div className="container mx-auto">
                {/* Educations Content Start */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    {education.map((edu, index) => (
                        <Card key={index} className="flex flex-col items-center p-4 mb-5 hover:shadow-teal-500 shadow-md transition-all ease-in-out duration-300 fade-in-element">
<<<<<<< HEAD
                            <img src={edu.logo} alt={edu.name} className="w-24 h-20 mb-4" />
                            <CardHeader className="text-lg font-semibold mb-2 text-teal-500">{edu.name}</CardHeader>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{edu.major}</CardDescription>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{edu.year}</CardDescription>
=======
                            {/* <img src={edu.logo} alt={edu.nama} className="w-full h-full mb-4" /> */}
                            <CardHeader className="text-lg font-semibold mb-2 text-teal-500">{edu.nama}</CardHeader>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{edu.jurusan}</CardDescription>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{edu.tahun}</CardDescription>
>>>>>>> 71a8f4a08b431c59e833ebe2111ca66341d87215
                        </Card>
                    ))}
                </div>
                {/* Education Content End */}

                {/* Organizations Content Start */}
                {/* <h2 className="text-3xl font-bold text-center mb-[2rem] mt-[5rem] fade-in-element">Organizations</h2>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    {organization.map((org, index) => (
                        <Card key={index} className="flex flex-col items-center p-4 mb-5 hover:shadow-teal-500 shadow-md transition-all ease-in-out duration-300 fade-in-element">
                            <img src={org.logo} alt={org.nama} className="w-24 h-20 mb-4" />
                            <CardHeader className="text-lg font-semibold mb-2 text-teal-500 text-center">{org.nama}</CardHeader>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{org.jabatan}</CardDescription>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{org.tahun}</CardDescription>
                        </Card>
                    ))}
                </div> */}
                {/* Organizations Content End */}
            </div>
        </div>
    );
}

export default EducationSection;
