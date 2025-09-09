import { useTheme } from '../../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../../components/layout/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaShieldAlt,
  FaSearch,
  FaExclamationTriangle,
  FaChartLine,
  FaNetworkWired,
  FaClipboardCheck,
  FaUserSecret,
  FaGraduationCap,
  FaLock,
  FaCloud,
  FaTools,
  FaBullseye
} from 'react-icons/fa'
import { MdSecurity, MdComputer } from 'react-icons/md'
import { IoShield } from 'react-icons/io5'

const Courses = () => {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const navigate = useNavigate()

  const bgClass = theme === 'dark'
    ? 'bg-gradient-to-br from-blue-900 to-green-900'
    : 'bg-white'

  const categories = ['All', 'Fundamentals', 'Technical Skills', 'Advanced Topics', 'Certifications']

  const courses = [
    {
      title: 'Introduction to SOC',
      description: 'Learn the fundamentals of Security Operations Centers and their role in cybersecurity.',
      duration: '2 hours',
      lessons: 5,
      category: 'Fundamentals',
      level: 'Beginner',
      icon: 'IoMdShield'
    },
    {
      title: 'Threat Detection and Analysis',
      description: 'Master techniques for identifying and analyzing security threats using various tools.',
      duration: '4 hours',
      lessons: 8,
      category: 'Technical Skills',
      level: 'Intermediate',
      icon: 'FaSearch'
    },
    {
      title: 'Incident Response',
      description: 'Develop skills for effective incident response and containment strategies.',
      duration: '3 hours',
      lessons: 6,
      category: 'Technical Skills',
      level: 'Intermediate',
      icon: 'FaExclamationTriangle'
    },
    {
      title: 'Security Information and Event Management (SIEM)',
      description: 'Hands-on training with SIEM tools for log analysis and threat hunting.',
      duration: '5 hours',
      lessons: 10,
      category: 'Technical Skills',
      level: 'Advanced',
      icon: 'FaChartLine'
    },
    {
      title: 'Network Security Monitoring',
      description: 'Monitor and secure network infrastructure against advanced threats.',
      duration: '4 hours',
      lessons: 7,
      category: 'Advanced Topics',
      level: 'Advanced',
      icon: 'FaNetworkWired'
    },
    {
      title: 'Compliance and Reporting',
      description: 'Understand regulatory compliance requirements and reporting procedures.',
      duration: '2 hours',
      lessons: 4,
      category: 'Advanced Topics',
      level: 'Intermediate',
      icon: 'FaClipboardCheck'
    },
    {
      title: 'Cyber Threat Intelligence',
      description: 'Learn to gather and analyze threat intelligence for proactive defense.',
      duration: '3 hours',
      lessons: 6,
      category: 'Advanced Topics',
      level: 'Advanced',
      icon: 'FaUserSecret'
    },
    {
      title: 'SOC Analyst Certification Prep',
      description: 'Prepare for industry-recognized SOC certifications with comprehensive review.',
      duration: '6 hours',
      lessons: 12,
      category: 'Certifications',
      level: 'Advanced',
      icon: 'FaGraduationCap'
    },
    {
      title: 'Ethical Hacking Fundamentals',
      description: 'Introduction to ethical hacking techniques and penetration testing.',
      duration: '4 hours',
      lessons: 8,
      category: 'Technical Skills',
      level: 'Intermediate',
      icon: 'FaLock'
    },
    {
      title: 'Cloud Security Essentials',
      description: 'Secure cloud environments and understand cloud-specific security challenges.',
      duration: '3 hours',
      lessons: 6,
      category: 'Advanced Topics',
      level: 'Intermediate',
      icon: 'FaCloud'
    },
    {
      title: 'Security Operations Basics',
      description: 'Essential concepts and daily operations in a Security Operations Center.',
      duration: '2 hours',
      lessons: 4,
      category: 'Fundamentals',
      level: 'Beginner',
      icon: 'MdSecurity'
    },
    {
      title: 'Advanced Threat Hunting',
      description: 'Master advanced techniques for proactive threat hunting and analysis.',
      duration: '5 hours',
      lessons: 10,
      category: 'Advanced Topics',
      level: 'Expert',
      icon: 'FaBullseye'
    }
  ]

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory)

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
      case 'Advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100'
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
    }
  }



  return (
    <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-8"
        >
          SOC Analyst Courses
        </motion.h1>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : `${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-blue-100 hover:bg-blue-200 text-gray-700'} border ${theme === 'dark' ? 'border-white/20' : 'border-blue-300'}`
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => navigate(`/course/${course.title.toLowerCase().replace(/\s+/g, '-')}`)}
              className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-xl shadow-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'} hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl text-blue-600">
                  {course.icon === 'IoMdShield' && <IoShield />}
                  {course.icon === 'FaSearch' && <FaSearch />}
                  {course.icon === 'FaExclamationTriangle' && <FaExclamationTriangle />}
                  {course.icon === 'FaChartLine' && <FaChartLine />}
                  {course.icon === 'FaNetworkWired' && <FaNetworkWired />}
                  {course.icon === 'FaClipboardCheck' && <FaClipboardCheck />}
                  {course.icon === 'FaUserSecret' && <FaUserSecret />}
                  {course.icon === 'FaGraduationCap' && <FaGraduationCap />}
                  {course.icon === 'FaLock' && <FaLock />}
                  {course.icon === 'FaCloud' && <FaCloud />}
                  {course.icon === 'MdSecurity' && <MdSecurity />}
                  {course.icon === 'FaBullseye' && <FaBullseye />}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 line-clamp-2">{course.title}</h3>
              <p className="mb-4 opacity-90 text-sm line-clamp-3">{course.description}</p>

              <div className="flex justify-between items-center text-sm opacity-75 mb-4">
                <span className="flex items-center">
                  <span className="mr-1">⏱️</span>
                  {course.duration}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">📚</span>
                  {course.lessons} lessons
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  theme === 'dark' ? 'bg-blue-600/20 text-blue-300' : 'bg-blue-100 text-blue-800'
                }`}>
                  {course.category}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                >
                  Start Course
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Course Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'}`}>
              <div className="text-3xl font-bold text-blue-600 mb-2">{courses.length}</div>
              <div className="text-sm opacity-75">Total Courses</div>
            </div>
            <div className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'}`}>
              <div className="text-3xl font-bold text-green-600 mb-2">{courses.reduce((sum, course) => sum + course.lessons, 0)}</div>
              <div className="text-sm opacity-75">Total Lessons</div>
            </div>
            <div className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'}`}>
              <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length - 1}</div>
              <div className="text-sm opacity-75">Categories</div>
            </div>
            <div className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'}`}>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm opacity-75">Support</div>
            </div>
          </div>
        </motion.div>
      </motion.div>


      <Footer />
    </div>
  )
}

export default Courses