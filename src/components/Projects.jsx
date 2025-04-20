import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import openoctSvg from '../assets/openoct.svg';
import kalisteeSvg from '../assets/kalistee.svg';
import codebyteSvg from '../assets/Codebyte.svg';
import canvaaiSvg from '../assets/canvaai.svg';

const projects = [
  {
    title: "CanvaAi",
    description: "A platform for effective data analysis and visualization using AI",
    image: canvaaiSvg,
    technologies: ["TypeScript", "Deepseek-R1", "MCP", "MongoDB"],
    demoUrl: "https://canvatical.vercel.app/",
    githubUrl: "https://github.com/Jivan052/Canva-ai",
  },
  {
    title: "OpenOct",
    description: "Designed whole Open source club website with React and Firebase",
    image: openoctSvg,
    technologies: ["React", "Firebase Authentication","Firestore", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Kalistee",
    description: "A modern skin & hair care product website which promotes eco-friendly indian ayurvedic products",
    image: kalisteeSvg,
    technologies: ["React", "Tailwind CSS"],
    demoUrl: "https://kalistee.vercel.app/",
    githubUrl: "https://github.com/Jivan052/NodeX-Kalistee",
  },
  {
    title: "Social Media Analytics module",
    description: "A full-featured realtime chat supported module for social media analytics",
    image: codebyteSvg,
    technologies: ["React", "Langflow", "Datastax", "AI Agent"],
    demoUrl: "https://supermind.vercel.app/",
    githubUrl: "https://github.com/Jivan052/Supermind",
  },
];

export default function Projects() {
  // State for showing all projects
  const [showAll, setShowAll] = useState(false);
  
  // Determine how many projects to display
  const initialProjectCount = 3;
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectCount);
  
  // Function to toggle showing all projects
  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demoUrl}
                      className="flex items-center text-primary hover:text-secondary"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="flex items-center text-primary hover:text-secondary"
                    >
                      <FaGithub className="mr-2" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Load More Button - only show if there are more projects to display */}
        {!showAll && projects.length > initialProjectCount && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}