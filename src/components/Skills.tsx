import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'

interface SkillProps {
  name: string
  icon: string
  proficiency?: string
  level: string
}

const SkillIcon = ({ name, icon, proficiency, level }: SkillProps) => {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 'text-purple-400'
      case 'advanced':
        return 'text-blue-400'
      case 'intermediate':
        return 'text-green-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative group"
    >
      <div className="w-24 h-24 rounded-full bg-white/10 p-4 backdrop-blur-sm flex items-center justify-center relative">
        <img src={icon} alt={name} className="w-16 h-16 object-contain group-hover:opacity-20 transition-opacity duration-300" />
        <div className={`absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90`}>
          <span className={`font-semibold text-sm ${getLevelColor(level)}`}>{level}</span>
        </div>
      </div>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-sm whitespace-nowrap"
      >
        {proficiency || name}
      </motion.div>
    </motion.div>
  )
}

export const Skills = () => {
  const skills = [
    { name: 'SQL', icon: '/src/assets/sql.svg', proficiency: 'Advanced - 5 years', level: 'Advanced' },
    { name: 'MySQL', icon: '/src/assets/mysql.svg', proficiency: 'Advanced - 4 years', level: 'Advanced' },
    { name: 'Laravel', icon: '/src/assets/Laravel.svg', proficiency: 'Intermediate - 2 years', level: 'Intermediate' },
    { name: 'AWS', icon: '/src/assets/aws.svg', proficiency: 'Advanced - 3 years', level: 'Advanced' },
    { name: 'Git', icon: '/src/assets/git.svg', proficiency: 'Expert - 6 years', level: 'Expert' },
    { name: 'React', icon: '/src/assets/react.svg', proficiency: 'Advanced - 4 years', level: 'Advanced' },
    { name: 'powerBI', icon: '/src/assets/powerBI.svg', proficiency: 'Intermediate - 2 years', level: 'Intermediate' },
    { name: 'C++', icon: '/src/assets/cpp.svg', proficiency: 'Advanced - 5 years', level: 'Advanced' },
    { name: 'Python', icon: '/src/assets/python.svg', proficiency: 'Expert - 6 years', level: 'Expert' },
    { name: 'TensorFlow', icon: '/src/assets/TensorFlow.svg', proficiency: 'Advanced - 3 years', level: 'Advanced' },
    { name: 'kotlin', icon: '/src/assets/kotlin.svg', proficiency: 'Intermediate - 2 years', level: 'Intermediate' },
    { name: 'Firebase', icon: '/src/assets/firebase.svg', proficiency: 'Advanced - 3 years', level: 'Advanced' },
    { name: 'Azure', icon: '/src/assets/Azure.svg', proficiency: 'Intermediate - 2 years', level: 'Intermediate' },
    { name: 'spark', icon: '/src/assets/spark.svg', proficiency: 'Advanced - 3 years', level: 'Advanced' },
    {name: 'java', icon: '/src/assets/java.svg', proficiency: 'Advanced - 3 years', level: 'Advanced' },
    {name: 'Nvidia Cuda', icon: '/src/assets/nvdiacuda.svg', proficiency: 'Advanced - 3 years', level: 'Advanced' },
  ]

  return (
    <section id="skills" className="min-h-screen bg-slate-900 relative py-20">
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-center text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          SKILLS
        </h2>
        
        <p className="text-center text-xl text-gray-400 mb-16">
          HOVER OVER A SKILL FOR CURRENT PROFICIENCY
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillIcon
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              proficiency={skill.proficiency}
              level={skill.level}
            />
          ))}
        </div>


      </motion.div>
    </section>
  )
} 