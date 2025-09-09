import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
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
  FaBullseye,
  FaChevronDown,
  FaChevronUp,
  FaBriefcase
} from 'react-icons/fa'
import { MdSecurity, MdComputer } from 'react-icons/md'
import { IoShield } from 'react-icons/io5'

const TrackCard = ({ track, index }) => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

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

  const getLevelColor = (level) => {
    if (level.includes('Beginner')) return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
    if (level.includes('Intermediate')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
    if (level.includes('Advanced')) return 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100'
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
  }

  const futureJobs = {
    'SOC Analyst Track': ['SOC Analyst', 'Security Operations Center Lead', 'Cybersecurity Analyst', 'Threat Intelligence Analyst'],
    'Cybersecurity Specialist Track': ['Cybersecurity Specialist', 'Security Consultant', 'IT Security Manager', 'Chief Information Security Officer'],
    'Incident Response Track': ['Incident Response Specialist', 'Digital Forensics Analyst', 'Cybersecurity Incident Manager', 'Threat Hunter'],
    'SIEM & Log Analysis Track': ['SIEM Engineer', 'Log Analysis Specialist', 'Security Monitoring Analyst', 'SOC Engineer'],
    'Network Security Track': ['Network Security Engineer', 'Firewall Administrator', 'Network Security Architect', 'VPN Specialist'],
    'Compliance & Governance Track': ['Compliance Officer', 'Security Auditor', 'Risk Assessment Specialist', 'Governance Analyst']
  }

  const courses = [
    { title: 'Introduction to Cybersecurity', duration: '2 hours', level: 'Beginner' },
    { title: 'Network Fundamentals', duration: '3 hours', level: 'Beginner' },
    { title: 'Threat Detection Basics', duration: '4 hours', level: 'Intermediate' },
    { title: 'Incident Response Techniques', duration: '5 hours', level: 'Intermediate' },
    { title: 'Advanced Threat Hunting', duration: '6 hours', level: 'Advanced' },
    { title: 'SIEM Implementation', duration: '4 hours', level: 'Advanced' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-white/10 backdrop-blur-md border border-white/20'
          : 'bg-white/80 backdrop-blur-md border border-gray-200/50'
      } shadow-lg hover:shadow-2xl`}
      onClick={() => navigate(`/track/${track.title.toLowerCase().replace(/\s+/g, '-')}`)}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl text-blue-600">
              {getIcon(track.icon)}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{track.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(track.level)}`}>
                {track.level}
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </motion.button>
        </div>

        {/* Description */}
        <p className="text-sm opacity-90 mb-4 line-clamp-3">{track.description}</p>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm opacity-75 mb-4">
          <span className="flex items-center">
            <span className="mr-1">⏱️</span>
            {track.duration}
          </span>
          <span className="flex items-center">
            <span className="mr-1">📚</span>
            {track.courses} courses
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            theme === 'dark' ? 'bg-blue-600/20 text-blue-300' : 'bg-blue-100 text-blue-800'
          }`}>
            {track.category}
          </span>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t pt-4 mt-4 space-y-4">
            {/* Courses List */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <FaGraduationCap className="mr-2" />
                Courses in this Track
              </h4>
              <div className="space-y-2">
                {courses.slice(0, track.courses).map((course, idx) => (
                  <div key={idx} className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                  }`}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{course.title}</span>
                      <div className="flex items-center space-x-2 text-xs opacity-75">
                        <span>{course.duration}</span>
                        <span className={`px-2 py-1 rounded ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Jobs */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <FaBriefcase className="mr-2" />
                Future Career Paths
              </h4>
              <div className="flex flex-wrap gap-2">
                {(futureJobs[track.title] || ['Cybersecurity Specialist', 'Security Analyst', 'IT Security Manager']).map((job, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      theme === 'dark'
                        ? 'bg-green-600/20 text-green-300 border border-green-600/30'
                        : 'bg-green-100 text-green-800 border border-green-200'
                    }`}
                  >
                    {job}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Start Track
        </motion.button>
      </div>
    </motion.div>
  )
}

export default TrackCard