import { useTheme } from '../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
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

const TrackSlider = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const tracks = [
    {
      id: 'soc-analyst-track',
      title: 'SOC Analyst Track',
      description: 'Complete learning path for Security Operations Center analysts from beginner to advanced.',
      duration: '12 weeks',
      courses: 8,
      category: 'Fundamentals',
      level: 'Beginner to Advanced',
      icon: 'IoMdShield',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 'cybersecurity-specialist-track',
      title: 'Cybersecurity Specialist Track',
      description: 'Comprehensive track covering all aspects of cybersecurity operations and defense.',
      duration: '16 weeks',
      courses: 12,
      category: 'Technical Skills',
      level: 'Intermediate',
      icon: 'FaSearch',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      backgroundImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 'incident-response-track',
      title: 'Incident Response Track',
      description: 'Master incident response, forensics, and threat hunting techniques.',
      duration: '10 weeks',
      courses: 6,
      category: 'Technical Skills',
      level: 'Advanced',
      icon: 'FaExclamationTriangle',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 'siem-log-analysis-track',
      title: 'SIEM & Log Analysis Track',
      description: 'Deep dive into Security Information and Event Management systems.',
      duration: '8 weeks',
      courses: 5,
      category: 'Advanced Topics',
      level: 'Advanced',
      icon: 'FaChartLine',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 'network-security-track',
      title: 'Network Security Track',
      description: 'Learn to secure and monitor network infrastructure against threats.',
      duration: '14 weeks',
      courses: 10,
      category: 'Advanced Topics',
      level: 'Intermediate',
      icon: 'FaNetworkWired',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center'
    },
    {
      id: 'compliance-governance-track',
      title: 'Compliance & Governance Track',
      description: 'Master regulatory compliance, risk management, and security governance.',
      duration: '6 weeks',
      courses: 4,
      category: 'Advanced Topics',
      level: 'Intermediate',
      icon: 'FaClipboardCheck',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600',
      backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center'
    }
  ]

  const getIcon = (iconName) => {
    const icons = {
      IoMdShield: <IoShield />,
      FaSearch: <FaSearch />,
      FaExclamationTriangle: <FaExclamationTriangle />,
      FaChartLine: <FaChartLine />,
      FaNetworkWired: <FaNetworkWired />,
      FaClipboardCheck: <FaClipboardCheck />,
      FaUserSecret: <FaUserSecret />,
      FaGraduationCap: <FaGraduationCap />,
      FaLock: <FaLock />,
      FaCloud: <FaCloud />,
      MdSecurity: <MdSecurity />,
      FaBullseye: <FaBullseye />
    }
    return icons[iconName] || <FaShieldAlt />
  }

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tracks.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, tracks.length])


  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const handleTrackClick = (trackId) => {
    navigate(`/track/${trackId}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold mb-4"
        >
          Learning Tracks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg opacity-75 max-w-2xl mx-auto"
        >
          Discover structured learning paths designed to take you from beginner to cybersecurity expert
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="relative cursor-pointer"
              onClick={() => handleTrackClick(tracks[currentIndex].id)}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${tracks[currentIndex].backgroundImage}")`
                  }}
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tracks[currentIndex].gradient} opacity-60`}></div>

                {/* Content */}
                <div className="relative h-full flex items-center p-8">
                  <div className="flex items-center space-x-8 w-full">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-6xl text-white/90"
                    >
                      {getIcon(tracks[currentIndex].icon)}
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1 text-white">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl font-bold mb-2"
                      >
                        {tracks[currentIndex].title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg opacity-90 mb-4 line-clamp-2"
                      >
                        {tracks[currentIndex].description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center space-x-6 text-sm"
                      >
                        <span className="flex items-center">
                          <span className="mr-1">⏱️</span>
                          {tracks[currentIndex].duration}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">📚</span>
                          {tracks[currentIndex].courses} courses
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full">
                          {tracks[currentIndex].level}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold"
                  >
                    View Track Details
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>


        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {tracks.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : theme === 'dark'
                    ? 'bg-white/30 hover:bg-white/50'
                    : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default TrackSlider