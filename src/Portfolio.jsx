import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Projects from './Projects';
import PixelatedBackground from './PixelatedBackground';

const projects = [
    { id: 1, title: 'MeetApp', image: '/portfolio/imgs/meetapp.png', url: 'https://github.com/KyattPL/MeetApp-GPS' },
    { id: 2, title: 'Master Thesis', image: '/portfolio/imgs/thesis.png', url: 'https://github.com/KyattPL/masters-backup' },
    { id: 3, title: 'Po Odznake', image: '/portfolio/imgs/po-odznake.png', url: 'https://github.com/KyattPL/Po-Odznake' },
    { id: 4, title: 'Microservices', image: '/portfolio/imgs/isi-projekt.png', url: 'https://github.com/KyattPL/isi-projekt' },
];

const skills = ['JavaScript', 'React', 'Java', 'Python', 'Svelte', 'AI Tools'];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
};

const Portfolio = () => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-[#f5e6d3] dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 relative overflow-hidden transition-colors duration-300">
                <PixelatedBackground />

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Dark Mode Toggle */}
                    <div className="relative text-center mb-2 sm:absolute sm:top-2 sm:right-2">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                            {isDarkMode ? '🌞' : '🌙'}
                        </button>
                    </div>

                    <motion.header className="mb-16 text-center" {...fadeInUp}>
                        <h1 className="text-5xl font-bold mb-4 font-['Fira_Code']">Kajetan Pynka</h1>
                        <p className="text-xl font-['Fira_Code']">Master's Degree in Computer Science</p>
                    </motion.header>

                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">About Me</h2>
                        <p className="text-lg leading-relaxed font-['Courier_Prime']">
                            Hello! I'm Kajetan "Kyatt" Pynka, a graduate with a Master's degree in Computer Science from Wrocław University of Science
                            and Technology. Specializing in web development, I excel in creating dynamic, responsive, and user-friendly websites.
                            With a strong background in both front-end and back-end development, I am passionate about delivering high-quality solutions.
                        </p>
                    </motion.section>

                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Skills</h2>
                        <motion.ul className="grid grid-cols-2 sm:grid-cols-3 gap-4" variants={staggerChildren}>
                            {skills.map((skill, index) => (
                                <motion.li
                                    key={index}
                                    className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-md text-center font-['Courier_Prime']"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.section>

                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Education & Important Courses</h2>
                        <div className="space-y-6">
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 font-['Fira_Code']">Bachelor's Degree</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-['Courier_Prime']">2019 - 2023</p>
                                <ul className="list-disc list-inside space-y-2 font-['Courier_Prime']">
                                    <li>Structural and Object-Oriented Programming</li>
                                    <li>Maths: Algebra, Calculus, Logic, Statistics, Discrete Maths</li>
                                    <li>Algorithms and Data Structured</li>
                                    <li>Computer Architecture</li>
                                    <li>Operating Systems</li>
                                    <li>Computer Networks</li>
                                    <li>Programming Paradigms</li>
                                    <li>Linux system</li>
                                    <li>Databases & Data Warehouses</li>
                                    <li>Software Engineering & Planning</li>
                                    <li>Mobile Apps / Multimedia / Web Dev</li>
                                    <li>Internet of Things</li>
                                    <li>Basics of Cybersecurity / AI / ML</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 font-['Fira_Code']">Master's Degree</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-['Courier_Prime']">2023 - 2024</p>
                                <ul className="list-disc list-inside space-y-2 font-['Courier_Prime']">
                                    <li>Mobile systems</li>
                                    <li>Game Development</li>
                                    <li>Information systems design methodology</li>
                                    <li>Semantic Web</li>
                                    <li>Data Analysis</li>
                                    <li>Computational Intelligence</li>
                                    <li>IT project management</li>
                                    <li>Multimedia</li>
                                    <li>User Experience</li>
                                    <li>Integration of IT systems</li>
                                    <li>Business Intelligence</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.section>

                    <Projects projects={projects} />

                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Work Experience</h2>
                        <div className="space-y-6">
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 font-['Fira_Code']">Python Developer Internship - Nokia</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-['Courier_Prime']">2021/07 - 2021/09</p>
                                <ul className="list-disc list-inside space-y-2 font-['Courier_Prime']">
                                    <li>Developed automated testing suites using Robot framework</li>
                                    <li>Tracked issues and provided bug-fixes for a Kotlin app</li>
                                    <li>Maintained libraries for a telecom system (CELL IDs etc.)</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Hobbies</h2>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-gray-600 dark:text-gray-300">
                            <ul className="space-y-4 font-['Courier_Prime']">
                                <motion.li whileHover={{ scale: 1.02, x: 5 }}>🎸 Playing guitar (at least trying to)</motion.li>
                                <motion.li whileHover={{ scale: 1.02, x: 5 }}>💬 Learning languages (Spanish/Japanese are the main focus rn)</motion.li>
                                <motion.li whileHover={{ scale: 1.02, x: 5 }}>🎾 Sports (esp. Tennis) & E-sports (esp. LoL) fan</motion.li>
                                <motion.li whileHover={{ scale: 1.02, x: 5 }}>😈 Metal concerts</motion.li>
                            </ul>
                        </div>
                    </motion.section>

                    <motion.section {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Contact</h2>
                        <p className="text-lg mb-4 font-['Courier_Prime']">
                            Feel free to reach out!
                        </p>
                        <motion.a
                            href="mailto:kajetanossos1@gmail.com"
                            className="inline-block mr-2 mb-2 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md font-['Fira_Code'] hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                        >
                            Email 📧
                        </motion.a>
                        <motion.a
                            href="https://github.com/KyattPL"
                            className="mr-2 mb-2 inline-flex gap-2 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md font-['Fira_Code'] hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                        >
                            GitHub <img width="16px" height="16px" src="/portfolio/imgs/github.svg" alt="GitHub icon" />
                        </motion.a>
                        <motion.a
                            href="https://x.com/KyattPL"
                            className="inline-flex gap-2 mr-2 mb-2 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md font-['Fira_Code'] hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                        >
                            Twitter (X) <img width="16px" height="16px" src="/portfolio/imgs/twitter.svg" alt="Twitter or X icon" />
                        </motion.a>
                        <motion.a
                            href="https://www.youtube.com/@kyatt_"
                            className="inline-flex gap-2 mr-2 mb-2 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md font-['Fira_Code'] hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                        >
                            Youtube <img width="16px" height="16px" src="/portfolio/imgs/yt.svg" alt="Youtube icon" />
                        </motion.a>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;