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
  FaChevronRight,
  FaPlay
} from 'react-icons/fa'
import { MdSecurity, MdComputer } from 'react-icons/md'
import { IoShield } from 'react-icons/io5'

const TrackTree = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [expandedCategories, setExpandedCategories] = useState(['Fundamentals'])

  const tracks = [
    {
      id: 'soc-analyst-track',
      title: 'SOC Analyst Track',
      description: 'Complete learning path for Security Operations Center analysts',
      duration: '12 weeks',
      courses: 8,
      category: 'Fundamentals',
      level: 'Beginner to Advanced',
      icon: 'IoMdShield',
      color: 'blue',
      prerequisites: [],
      nextTracks: ['cybersecurity-specialist-track']
    },
    {
      id: 'cybersecurity-specialist-track',
      title: 'Cybersecurity Specialist Track',
      description: 'Comprehensive track covering all aspects of cybersecurity',
      duration: '16 weeks',
      courses: 12,
      category: 'Technical Skills',
      level: 'Intermediate',
      icon: 'FaSearch',
      color: 'green',
      prerequisites: ['soc-analyst-track'],
      nextTracks: ['incident-response-track']
    },
    {
      id: 'incident-response-track',
      title: 'Incident Response Track',
      description: 'Master incident response, forensics, and threat hunting',
      duration: '10 weeks',
      courses: 6,
      category: 'Technical Skills',
      level: 'Advanced',
      icon: 'FaExclamationTriangle',
      color: 'red',
      prerequisites: ['cybersecurity-specialist-track'],
      nextTracks: []
    },
    {
      id: 'siem-log-analysis-track',
      title: 'SIEM & Log Analysis Track',
      description: 'Deep dive into Security Information and Event Management',
      duration: '8 weeks',
      courses: 5,
      category: 'Advanced Topics',
      level: 'Advanced',
      icon: 'FaChartLine',
      color: 'purple',
      prerequisites: ['soc-analyst-track'],
      nextTracks: []
    },
    {
      id: 'network-security-track',
      title: 'Network Security Track',
      description: 'Learn to secure and monitor network infrastructure',
      duration: '14 weeks',
      courses: 10,
      category: 'Advanced Topics',
      level: 'Intermediate',
      icon: 'FaNetworkWired',
      color: 'orange',
      prerequisites: ['cybersecurity-specialist-track'],
      nextTracks: []
    },
    {
      id: 'compliance-governance-track',
      title: 'Compliance & Governance Track',
      description: 'Master regulatory compliance and security governance',
      duration: '6 weeks',
      courses: 4,
      category: 'Advanced Topics',
      level: 'Intermediate',
      icon: 'FaClipboardCheck',
      color: 'teal',
      prerequisites: [],
      nextTracks: []
    }
  ]

  const categories = ['Fundamentals', 'Technical Skills', 'Advanced Topics']

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

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100',
        border: theme === 'dark' ? 'border-blue-600/30' : 'border-blue-300',
        text: theme === 'dark' ? 'text-blue-300' : 'text-blue-800',
        line: theme === 'dark' ? 'bg-blue-600/40' : 'bg-blue-300'
      },
      green: {
        bg: theme === 'dark' ? 'bg-green-600/20' : 'bg-green-100',
        border: theme === 'dark' ? 'border-green-600/30' : 'border-green-300',
        text: theme === 'dark' ? 'text-green-300' : 'text-green-800',
        line: theme === 'dark' ? 'bg-green-600/40' : 'bg-green-300'
      },
      red: {
        bg: theme === 'dark' ? 'bg-red-600/20' : 'bg-red-100',
        border: theme === 'dark' ? 'border-red-600/30' : 'border-red-300',
        text: theme === 'dark' ? 'text-red-300' : 'text-red-800',
        line: theme === 'dark' ? 'bg-red-600/40' : 'bg-red-300'
      },
      purple: {
        bg: theme === 'dark' ? 'bg-purple-600/20' : 'bg-purple-100',
        border: theme === 'dark' ? 'border-purple-600/30' : 'border-purple-300',
        text: theme === 'dark' ? 'text-purple-300' : 'text-purple-800',
        line: theme === 'dark' ? 'bg-purple-600/40' : 'bg-purple-300'
      },
      orange: {
        bg: theme === 'dark' ? 'bg-orange-600/20' : 'bg-orange-100',
        border: theme === 'dark' ? 'border-orange-600/30' : 'border-orange-300',
        text: theme === 'dark' ? 'text-orange-300' : 'text-orange-800',
        line: theme === 'dark' ? 'bg-orange-600/40' : 'bg-orange-300'
      },
      teal: {
        bg: theme === 'dark' ? 'bg-teal-600/20' : 'bg-teal-100',
        border: theme === 'dark' ? 'border-teal-600/30' : 'border-teal-300',
        text: theme === 'dark' ? 'text-teal-300' : 'text-teal-800',
        line: theme === 'dark' ? 'bg-teal-600/40' : 'bg-teal-300'
      }
    }
    return colors[color] || colors.blue
  }

  const toggleCategory = (category) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const getTracksByCategory = (category) => {
    return tracks.filter(track => track.category === category)
  }

  const getPrerequisiteTracks = (trackId) => {
    return tracks.filter(track => track.nextTracks.includes(trackId))
  }

  return (
    <div className="w-full">
      {categories.map((category, categoryIndex) => {
        const categoryTracks = getTracksByCategory(category)
        const isExpanded = expandedCategories.includes(category)

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-8"
          >
            {/* Category Header */}
            <motion.div
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer mb-4 ${
                theme === 'dark' ? 'bg-white/10 backdrop-blur-md' : 'bg-blue-50'
              } border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleCategory(category)}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                </motion.div>
                <h2 className="text-xl font-bold">{category}</h2>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  theme === 'dark' ? 'bg-white/20 text-white' : 'bg-blue-200 text-blue-800'
                }`}>
                  {categoryTracks.length} tracks
                </span>
              </div>
            </motion.div>

            {/* Category Tree */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="relative ml-8">
                {/* Vertical connecting line */}
                <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${
                  theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'
                }`} />

                {categoryTracks.map((track, trackIndex) => {
                  const colors = getColorClasses(track.color)
                  const prereqs = getPrerequisiteTracks(track.id)

                  return (
                    <motion.div
                      key={track.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: trackIndex * 0.1 }}
                      className="relative mb-6"
                    >
                      {/* Horizontal connecting line */}
                      <div className={`absolute left-6 top-8 w-8 h-0.5 ${colors.line}`} />

                      {/* Track Node */}
                      <motion.div
                        className={`relative ml-14 p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                          theme === 'dark' ? 'bg-white/10 backdrop-blur-md' : 'bg-white'
                        } border ${colors.border} shadow-lg hover:shadow-xl`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(`/track/${track.id}`)}
                      >
                        {/* Track Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`text-3xl ${colors.text}`}>
                              {getIcon(track.icon)}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-1">{track.title}</h3>
                              <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${colors.bg} ${colors.text}`}>
                                  {track.level}
                                </span>
                                <span className="text-sm opacity-75">{track.duration}</span>
                              </div>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-2 rounded-full ${colors.bg} ${colors.text} hover:opacity-80`}
                          >
                            <FaPlay className="text-sm" />
                          </motion.button>
                        </div>

                        {/* Track Description */}
                        <p className="text-sm opacity-90 mb-4">{track.description}</p>

                        {/* Track Stats */}
                        <div className="flex justify-between items-center text-sm">
                          <span className="flex items-center">
                            <span className="mr-1">📚</span>
                            {track.courses} courses
                          </span>
                          {prereqs.length > 0 && (
                            <span className="text-xs opacity-75">
                              Prerequisites: {prereqs.length}
                            </span>
                          )}
                        </div>

                        {/* Prerequisites */}
                        {prereqs.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs opacity-75 mb-2">Prerequisites:</div>
                            <div className="flex flex-wrap gap-1">
                              {prereqs.map((prereq, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 rounded text-xs ${colors.bg} ${colors.text}`}
                                >
                                  {prereq.title}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default TrackTree