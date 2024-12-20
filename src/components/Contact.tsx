import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, X } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-12">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center gap-8 mb-12">
          {[
            { icon: Github, href: 'https://github.com/harshitIIITD', color: '#fff' },
            { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', color: '#0A66C2' },
            { icon: X, href: 'https://x.com/anipleades', color: '#1DA1F2' },
            { icon: Mail, href: 'mailto:anipleades@gmail.com', color: '#EA4335' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: social.color }}
              className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-4 bg-white/5 rounded-lg border border-white/10 focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-4 bg-white/5 rounded-lg border border-white/10 focus:border-blue-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full px-6 py-4 bg-white/5 rounded-lg border border-white/10 focus:border-blue-500 outline-none resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  )
} 