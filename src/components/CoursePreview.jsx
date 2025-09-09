import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { FaClock, FaBook, FaBullseye } from 'react-icons/fa'

const CoursePreview = () => {
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
        className="text-3xl font-bold mb-8"
      >
        Course Preview
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-8 rounded-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'}`}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-4"
          >
            Introduction to SOC Operations
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-lg mb-6"
          >
            Start your journey with the fundamentals of Security Operations Centers.
            Learn about SOC structure, roles, and daily operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 text-sm opacity-75"
          >
            <span className="flex items-center">
              <FaClock className="mr-1" />
              2 hours
            </span>
            <span className="flex items-center">
              <FaBook className="mr-1" />
              5 lessons
            </span>
            <span className="flex items-center">
              <FaBullseye className="mr-1" />
              Beginner Level
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CoursePreview