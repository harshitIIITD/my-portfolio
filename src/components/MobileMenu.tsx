import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = ['About', 'Experience', 'Skills', 'Projects']

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg"
          >
            <nav className="py-4">
              {menuItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 10 }}
                  onClick={() => {
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                    setIsOpen(false)
                  }}
                  className="block w-full text-left px-8 py-4 text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 