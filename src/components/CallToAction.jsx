import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const CallToAction = () => {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-20 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        Ready to Start Your SOC Career?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-lg mb-8 max-w-2xl mx-auto"
      >
        Join thousands of professionals who have advanced their careers in cybersecurity.
        Start your SOC Analyst training today and become a security expert.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200 mr-4"
      >
        Enroll Now
      </motion.button>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${theme === 'dark' ? 'bg-white/20 hover:bg-white/30' : 'bg-blue-100 hover:bg-blue-200'} text-${theme === 'dark' ? 'white' : 'gray-800'} font-semibold py-3 px-8 rounded-lg transition-colors duration-200`}
      >
        View Courses
      </motion.button>
    </motion.div>
  )
}

export default CallToAction