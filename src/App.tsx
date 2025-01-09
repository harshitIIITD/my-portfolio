import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollProgress } from './components/ScrollProgress'
import { PageTransition } from './components/PageTransition'
import { MobileMenu } from './components/MobileMenu'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { MessageCircle, Github, Twitter, Mail, ArrowUp, Sun, Moon } from 'lucide-react'
import { Contact } from './components/Contact'
import { useEffect, useState, createContext, useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Gamepad2 } from 'lucide-react'
import { Blogs } from './components/Blogs'
import GithubHeatmap from './components/GithubHeatmap'

const ThemeContext = createContext()

function App() {
  const { scrollYProgress } = useScroll()
  const socialOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const socialY = useTransform(scrollYProgress, [0, 0.1], [20, 0])

  const [displayText, setDisplayText] = useState("Harshit")
  const [showIcon, setShowIcon] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((current) => {
        if (current === "Harshit") {
          setShowIcon(true)
          return "I_LOVE_OPEN_SOURCE"
        }
        setShowIcon(false)
        return "Harshit"
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : ''
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`bg-black text-white ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <ScrollProgress />
        
        {/* Skip Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 px-4 py-2 rounded-md"
        >
          Skip to main content
        </a>

        {/* Fixed Social Links */}
        <motion.div 
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6"
          style={{ opacity: socialOpacity, y: socialY }}
        >
          {[
            { icon: Github, href: 'https://github.com/harshitIIITD', label: 'GitHub' },
            { icon: Twitter, href: 'https://x.com/anipleades', label: 'Twitter' },
            { icon: Mail, href: 'mailto: anipleades@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors group"
              aria-label={label}
            >
              <Icon className="w-5 h-5 group-hover:text-indigo-400 transition-colors" />
              <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-1 rounded text-sm backdrop-blur-sm">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Navigation with Mobile Menu */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
              >
                Portfolio
              </motion.div>
              <div className="hidden md:flex space-x-8">
                {['About', 'Experience', 'Skills', 'Projects', 'Blogs'].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
                  </motion.button>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.button>
                <MobileMenu />
              </div>
            </div>
          </div>
        </motion.nav>

        <main id="main-content">
          <PageTransition>
            {/* Hero Section */}
            <section className="min-h-screen relative flex items-center">
              <div className="container mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="block">Hi, I'm</span>
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={displayText}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-4"
                      >
                        <span className="block text-blue-500">{displayText}</span>
                        {showIcon && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Gamepad2 className="w-12 h-12 text-blue-500" />
                          </motion.div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    AI Engineer specializing in deep learning, computer vision, and natural language processing.
                    Currently focused on building scalable AI solutions and pushing the boundaries of machine intelligence.
                  </p>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition-colors"
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View My Projects
                    </motion.button>
                    
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-medium transition-colors"
                    onClick={() => window.open('https://www.codechef.com/users/trickster_46', '_blank')}
                  >
                    CodeChef Achievements
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-3/4 md:w-2/3 mx-auto" // Added width classes and centered
              >
                  <div className="aspect-square rounded-full overflow-hidden border-4 border-blue-600/20">
                    <img
                      src="/my-portfolio/profile_picture.png"
                      alt="harshit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </section>
          </PageTransition>

          <PageTransition>
            <About />
          </PageTransition>

          <PageTransition>
            <Experience />
          </PageTransition>

          <PageTransition>
            <Skills />
          </PageTransition>

          <PageTransition>
            <Projects />
          </PageTransition>

          <PageTransition>
            <Blogs />
          </PageTransition>
          
          <PageTransition>
            <GithubHeatmap />
          </PageTransition>
          
        </main>

        <ScrollToTop />

        {/* Floating Contact Button with Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button 
            className="bg-indigo-600 p-4 rounded-full shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-110"
            aria-label="Contact Me"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </motion.div>

        <footer>
          {/* Footer content */}
          <PageTransition>
            <Contact />
          </PageTransition>
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 left-8 p-4 bg-indigo-600 rounded-full z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button
  ) : null
}

export default App
