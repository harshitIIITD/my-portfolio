import { motion } from 'framer-motion'

interface WorkExperienceProps {
  company: string
  role: string
  period: string
  description: string
}

export const WorkExperience = ({ company, role, period, description }: WorkExperienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-l-2 border-indigo-600 pl-8 pb-12"
    >
      <h3 className="text-2xl font-bold mb-2">{company}</h3>
      <div className="text-indigo-500 mb-2">{role}</div>
      <div className="text-gray-400 mb-4">{period}</div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}