import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa'

const WhyChooseUs = () => {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Why Choose Our SOC Analyst Training?
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-lg shadow-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'} text-center`}
        >
          <FaGraduationCap className="text-4xl mb-4 text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
          <p>Learn from industry professionals with years of SOC experience.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-lg shadow-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'} text-center`}
        >
          <FaBriefcase className="text-4xl mb-4 text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Practical Training</h3>
          <p>Hands-on experience with real-world security scenarios and tools.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-lg shadow-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'} text-center`}
        >
          <FaTrophy className="text-4xl mb-4 text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mb-4">Industry Certification</h3>
          <p>Prepare for industry-recognized SOC certifications.</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WhyChooseUs