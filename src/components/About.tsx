import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate software engineer with expertise in building modern web and android applications.
              I studied computer science with applied mathematics at the <span className="text-red-500">Indraprastha Institute of Information Technology</span>, Delhi (IIIT-D) in (2020-2024).

              My focus is on machine learning and LLMs applications. I have a strong foundation in computer science and software engineering.
              I also intrested in the Competative Programming and have a good knowledge of Data Structures and Algorithms.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-500">What I do</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Data Science Team
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Backend Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  LLM Engineer
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 