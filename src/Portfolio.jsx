import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Projects from './Projects';
import PixelatedBackground from './PixelatedBackground';

const projects = [
    { id: 1, title: 'Project 1', image: '/portfolio/imgs/pog.png' },
    { id: 2, title: 'Project 2', image: '/portfolio/imgs/pog.png' },
    { id: 3, title: 'Project 3', image: '/portfolio/imgs/pog.png' },
    { id: 4, title: 'Project 4', image: '/portfolio/imgs/pog.png' },
];

const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS'];

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
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                            {isDarkMode ? '🌞' : '🌙'}
                        </button>
                    </div>

                    {/* Header section */}
                    <motion.header className="mb-16 text-center" {...fadeInUp}>
                        <h1 className="text-5xl font-bold mb-4 font-['Fira_Code']">John Doe</h1>
                        <p className="text-xl font-['Fira_Code']">Full-stack Developer & Tech Enthusiast</p>
                    </motion.header>

                    {/* About Me section */}
                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">About Me</h2>
                        <p className="text-lg leading-relaxed font-['Courier_Prime']">
                            I'm a passionate developer with a keen eye for design and a love for creating
                            efficient, scalable solutions. With expertise in various programming languages
                            and frameworks, I bring ideas to life through code.
                        </p>
                    </motion.section>

                    {/* Skills section */}
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

                    <Projects projects={projects} />

                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Work Experience</h2>
                        <div className="space-y-6">
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 font-['Fira_Code']">Senior Developer - Tech Innovators Inc.</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-['Courier_Prime']">2020 - Present</p>
                                <ul className="list-disc list-inside space-y-2 font-['Courier_Prime']">
                                    <li>Led development of cloud-based SaaS platform</li>
                                    <li>Mentored junior developers and conducted code reviews</li>
                                    <li>Implemented CI/CD pipelines, improving deployment efficiency by 40%</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 font-['Fira_Code']">Full-stack Developer - WebSolutions Co.</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-['Courier_Prime']">2017 - 2020</p>
                                <ul className="list-disc list-inside space-y-2 font-['Courier_Prime']">
                                    <li>Developed and maintained multiple client websites</li>
                                    <li>Integrated third-party APIs and payment gateways</li>
                                    <li>Optimized database queries, improving site performance by 25%</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Personal Interests</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg text-gray-600 dark:text-gray-300"
                                whileHover={{ scale: 1.05, rotate: -1 }}
                            >
                                <h3 className="text-xl font-semibold mb-3 font-['Fira_Code']">Open Source Contribution</h3>
                                <p className="font-['Courier_Prime']">Actively contributing to React and Node.js ecosystems. Passionate about giving back to the community.</p>
                            </motion.div>
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg text-gray-600 dark:text-gray-300"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                            >
                                <h3 className="text-xl font-semibold mb-3 font-['Fira_Code']">Tech Blogging</h3>
                                <p className="font-['Courier_Prime']">Writing about latest tech trends and sharing coding tips on my personal blog and Medium.</p>
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section className="mb-16" {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Fun Facts</h2>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-gray-600 dark:text-gray-300">
                            <ul className="space-y-4 font-['Courier_Prime']">
                                <motion.li whileHover={{ scale: 1.02, x: 5 }}>🎸 Plays guitar in a local indie band</motion.li>
                                <motion.li whileHover={{ scale: 1.02, x: 5 }}>🏃‍♂️ Completed two marathons</motion.li>
                                <motion.li whileHover={{ scale: 1.02, x: 5 }}>🌱 Passionate about sustainable living and tech</motion.li>
                                <motion.li whileHover={{ scale: 1.02, x: 5 }}>🎨 Enjoys creating pixel art in free time</motion.li>
                            </ul>
                        </div>
                    </motion.section>

                    <motion.section {...fadeInUp}>
                        <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Contact</h2>
                        <p className="text-lg mb-4 font-['Courier_Prime']">
                            I'm always open to new opportunities and collaborations. Feel free to reach out!
                        </p>
                        <motion.a
                            href="mailto:john.doe@example.com"
                            className="inline-block bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md font-['Fira_Code'] hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Email Me
                        </motion.a>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;