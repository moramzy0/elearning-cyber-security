import { motion } from 'framer-motion'

const Description = () => {
  return (
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-6"
      >
        SOC Analyst Training
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl mb-8 max-w-2xl mx-auto"
      >
        Master the skills needed to become a Security Operations Center Analyst.
        Learn threat detection, incident response, and cybersecurity best practices.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200"
      >
        Start Learning
      </motion.button>
    </div>
  )
}

export default Description