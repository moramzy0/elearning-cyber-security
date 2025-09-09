import { useTheme } from '../../contexts/ThemeContext'
import { motion } from 'framer-motion'
import { FaPlay, FaStar, FaUser } from 'react-icons/fa'

const CoursePreview = () => {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Video Player */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl overflow-hidden mb-8 shadow-2xl`}>
          <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
            <div className="text-center text-white">
              <FaPlay className="text-6xl mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Course Preview</h3>
              <p className="text-blue-100">Introduction to SOC Operations</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-3 py-1 rounded text-sm">
              Preview • 2:30
            </div>
          </div>
        </div>

        {/* Course Header */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">SOC Analyst Training: Complete Course</h1>
            <p className="text-lg mb-6 opacity-90">
              Master the essential skills needed to become a Security Operations Center Analyst.
              Learn threat detection, incident response, and cybersecurity best practices.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold">4.9</span>
                <span className="text-sm opacity-75 ml-1">(2,543 ratings)</span>
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2 opacity-75" />
                <span>8,932 students enrolled</span>
              </div>
              <div className="flex items-center">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Intermediate Level
                </span>
              </div>
            </div>
          </div>
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-700' : 'border-blue-200'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$299</div>
              <div className="text-sm opacity-75 mb-6">Lifetime access</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} w-full text-${theme === 'dark' ? 'white' : 'gray-800'} font-semibold py-3 px-6 rounded-lg transition-colors duration-200`}
              >
                Add to Wishlist
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CoursePreview