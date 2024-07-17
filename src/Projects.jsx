import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const Projects = ({ projects }) => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (<>
        {/* Projects section */}
        <motion.section className="mb-16" {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-6 font-['Fira_Code']">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.03, rotate: 1, transition: { duration: 0.2 } }}
                        onHoverStart={() => setHoveredProject(project.id)}
                        onHoverEnd={() => setHoveredProject(null)}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 font-['Fira_Code']">{project.title}</h3>
                            <motion.p
                                className="text-sm mt-2 text-gray-600 dark:text-gray-300 font-['Courier_Prime']"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: hoveredProject === project.id ? 1 : 0,
                                    y: hoveredProject === project.id ? 0 : 10
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                Click to view details
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    </>
    )
};

export default Projects;