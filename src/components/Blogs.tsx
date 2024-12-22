import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { ArrowRight } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  link: string
  tags: string[]
}

const BlogCard = ({ title, excerpt, date, readTime, image, link, tags }: BlogPost) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden"
    >
      <div className="relative group h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.a
          href={link}
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export const Blogs = () => {
  const blogs: BlogPost[] = [
    {
      title: "Role of solar panels in reducing grid dependency",
      excerpt: " Solar panels enable decentralised energy production, where power is generated close to where it is consumed, reducing strain on the grid and making the energy system more resilient....",
      date: "2024-10-15",
      readTime: "8",
      image: "/my-portfolio/blog-1.png",
      link: "https://theprint.in/yourturn/subscriberwrites-role-of-solar-panels-in-reducing-grid-dependency/2233639/",
      tags: ["ThePrint", "Solar Energy", "YourTurn", "Technology"]
    },
    {
      title: "Turtuk: A Hidden Gem in Ladakh’s Cultural Mosaic",
      excerpt: "On my recent trip to Ladakh in July, we made a plan to visit Ladakh, Nubra valley, and Pangong Lake. We did not even know about the Turtuk, so we made a plan to visit Turtuk from Nubra Valley....",
      date: "2024-10-28",
      readTime: "6",
      image: "/my-portfolio/blog-2.png",
      link: "https://medium.com/@nhk2harshit/turtuk-a-hidden-gem-in-ladakhs-cultural-mosaic-2b72ec6a58f4",
      tags: ["Travel", "Ladaakh", "Turtuk", "History"]
    },
    // Add more blog posts here
  ]

  return (
    <section id="blogs" className="min-h-screen bg-slate-900 relative py-20">
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
          MY BLOGS
        </h2>
        
        <p className="text-center text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Sharing my thoughts and experiences on travel, technology, and Machine Learning and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 