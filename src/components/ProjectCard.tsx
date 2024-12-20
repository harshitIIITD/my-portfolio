import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gray-900 rounded-xl overflow-hidden"
    >
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <motion.a
          href={link}
          whileHover={{ x: 5 }}
          className="text-indigo-500 hover:text-indigo-400 inline-flex items-center"
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
      </div>
    </motion.div>
  )
}
