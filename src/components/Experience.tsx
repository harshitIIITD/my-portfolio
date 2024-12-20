import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ExperienceCardProps {
  company: string
  role: string
  period: string
  description: string[]
  technologies: string[]
  logo?: string
}

const ExperienceCard = ({ company, role, period, description, technologies, logo }: ExperienceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden group min-w-[300px] md:min-w-[400px]"
    >
      {logo && (
        <div className="w-24 h-24 mb-6 bg-white/10 rounded-2xl p-4">
          <img src={logo} alt={company} className="w-full h-full object-contain" />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{role}</h3>
      <div className="text-indigo-400 mb-2">{company}</div>
      <div className="text-gray-400 mb-4">{period}</div>
      <ul className="space-y-2 mb-6">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300">• {item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      company: "Vultr cloud",
      role: "Hackathon finalist",
      period: "aug 2024 - oct 2024",
      logo: "/src/assets/vultr.svg",
      description: [
        "worked on a vultr hackathon and built a web app for health monitoring",
        "used vultr cloud services to deploy the app",
        "worked with the vultr serverless inference for chatbot integration",
        "built a laravel backend for the app and react frontend"
      ],
      technologies: ["react", "laravel", "Vultr", "MySql", "PHP", "python"]
    }
    ,
    {
      company: "GE Healthcare",
      role: "Machine Learning Engineer",
      period: "Jan 2023 - Dec 2023",
      logo: "/src/assets/GE_healthcare.svg",
      description: [
        "worked on mri image segmentation and classification",
        "built a project on Digital Twin Technology for Personalized Medicine ",
        "worked on a project on AI-based image segmentation"
      ],
      technologies: ["Python", "SimpleTK", "Git", "PyTorch", "Docker"]
    },
    {
      company: "Null Classes",
      role: "LLM engineer",
      period: "SEP 2024 - current",
      logo: "/src/assets/nullclass.svg",
      description: [
        "worked on a serverless inference pipeline for a LLM",
        "worked with embeddings and vector databases to build a semantic search engine",
        "made a pdf analyzer for scientific papers and extracted the relevant information"
      ],
      technologies: ["Python", "Pinecone", "Langchain", "Transformers", "Streamlit"]
    },
  
    // Add more experiences here
  ]

  const slideLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current
      container.scrollBy({ left: -400, behavior: 'smooth' })
      setCurrentIndex(Math.max(0, currentIndex - 1))
    }
  }

  const slideRight = () => {
    if (containerRef.current) {
      const container = containerRef.current
      container.scrollBy({ left: 400, behavior: 'smooth' })
      setCurrentIndex(Math.min(experiences.length - 1, currentIndex + 1))
    }
  }

  return (
    <section id="experience" className="min-h-screen bg-slate-900 relative py-20">
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
          EXPERIENCE
        </h2>

        <div className="relative">
          <div 
            ref={containerRef}
            className="overflow-x-hidden scroll-smooth"
          >
            <div className="flex gap-8 px-4">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={slideLeft}
              className="p-3 rounded-full bg-indigo-600/80 backdrop-blur-sm pointer-events-auto"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={slideRight}
              className="p-3 rounded-full bg-indigo-600/80 backdrop-blur-sm pointer-events-auto"
              disabled={currentIndex === experiences.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  containerRef.current?.scrollTo({
                    left: index * 400,
                    behavior: 'smooth'
                  })
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
} 