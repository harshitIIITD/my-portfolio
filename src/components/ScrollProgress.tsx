import { motion, useScroll, MotionValue } from 'framer-motion'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50"
      style={{ scaleX: scrollYProgress as MotionValue<number> }}
    />
  )
} 