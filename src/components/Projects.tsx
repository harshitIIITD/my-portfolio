import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'

interface ProjectProps {
  title: string
  description: string
  images: string[]
  technologies: string[]
  link?: string
}

const Project = ({ title, description, images, technologies, link }: ProjectProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden group max-w-4xl mx-auto"
    >
      {/* Single Image Display */}
      <div className="mb-8 w-full max-w-2xl mx-auto">
        <motion.div
          className="relative rounded-xl overflow-hidden aspect-video"
        >
          <img
            src={images[0]}
            alt={`${title} screenshot`}
            className="w-full h-full object-contain bg-gray-800/50"
          />
        </motion.div>
      </div>

      {/* Content in the Middle */}
      <div className="space-y-4 text-center">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="text-indigo-400 hover:text-indigo-300 inline-flex items-center mt-4"
          >
            View Project
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "Digital Twin Technology for Personalized Medicine",
      description: "Digital Twin Technology involves creating a virtual replica of a physical entity or system that can be used for analysis, simulation, and optimization. In the context of personalized medicine, a digital twin is an individualized computational model of a patient's physiological systems. This model can simulate responses to treatments, predict disease progression, and assist in clinical decision-making, leading to more precise and effective healthcare interventions..",
      images: [
        
        "/src/images/project1-1.png"
      
      ],
      technologies: ["Python", "MLOPS", "CI/CD", "NLP", "Docker"],
      link: "https://github.com/harshitIIITD/digital-twin-system/tree/main"
    },
    // Add more projects here
    {
      title: "Healthcare Management System",
      description: "A comprehensive healthcare management web application built with Laravel, React, and Vultr cloud services. The system provides health assessments, MRI analysis, wellness planning, and educational content to users. It also includes a chatbot for answering health-related queries and a serverless inference engine for real-time data processing.",
      images: [
        "/src/images/project1-2.png"
      ],
      technologies: ["Laravel", "React", "Vultr", "MySql", "PHP", "Python"],
      link: "https://github.com/harshitIIITD/Healthcare"
    },
    {
      title: "portfolio website",
      description: "A portfolio website build using react, TypeScript and Vite with adding smooth scroll and animations and also added dark mode feature, with 3d scene in the background and user friendly UI.",
      images: [
        "/src/images/project1-2.png"
      ],
      technologies: ["typescript", "React", "git", "vite", "html", "csss"],
      link: "https://github.com/harshitIIITD/Healthcare"
    },
    
  

    
  ]

  return (
    <section id="projects" className="min-h-screen bg-slate-900 relative py-20">
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-center text-6xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          PROJECTS
        </h2>

        <div 
          ref={containerRef}
          className="overflow-x-auto scroll-smooth hide-scrollbar"
        >
          <div className="flex gap-8 px-4 min-w-max">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="w-[800px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Project {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                containerRef.current?.scrollTo({
                  left: index * 850,
                  behavior: 'smooth'
                })
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
} 