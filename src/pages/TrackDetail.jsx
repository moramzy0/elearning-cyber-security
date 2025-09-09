import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
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
  FaBriefcase,
  FaClock,
  FaBook,
  FaArrowLeft
} from 'react-icons/fa'
import { MdSecurity, MdComputer } from 'react-icons/md'
import { IoShield } from 'react-icons/io5'

const TrackDetail = () => {
  const { theme } = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()

  const bgClass = theme === 'dark'
    ? 'bg-gradient-to-br from-blue-900 to-green-900'
    : 'bg-white'

  // Mock track data - in a real app, this would come from an API or context
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
      overview: 'This comprehensive track takes you from cybersecurity basics to advanced SOC operations. Learn threat detection, incident response, and security monitoring through hands-on projects and real-world scenarios.',
      courseList: [
        { title: 'Introduction to Cybersecurity', duration: '2 hours', level: 'Beginner', completed: true },
        { title: 'Network Fundamentals', duration: '3 hours', level: 'Beginner', completed: true },
        { title: 'Threat Detection Basics', duration: '4 hours', level: 'Intermediate', completed: true },
        { title: 'Incident Response Techniques', duration: '5 hours', level: 'Intermediate', completed: false },
        { title: 'Advanced Threat Hunting', duration: '6 hours', level: 'Advanced', completed: false },
        { title: 'SIEM Implementation', duration: '4 hours', level: 'Advanced', completed: false },
        { title: 'Security Automation', duration: '3 hours', level: 'Advanced', completed: false },
        { title: 'SOC Management', duration: '5 hours', level: 'Expert', completed: false }
      ],
      futureJobs: ['SOC Analyst', 'Security Operations Center Lead', 'Cybersecurity Analyst', 'Threat Intelligence Analyst']
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
      overview: 'Master the full spectrum of cybersecurity skills including network security, ethical hacking, compliance, and risk management.',
      courseList: [
        { title: 'Network Security Fundamentals', duration: '4 hours', level: 'Intermediate', completed: false },
        { title: 'Ethical Hacking Basics', duration: '5 hours', level: 'Intermediate', completed: false },
        { title: 'Web Application Security', duration: '4 hours', level: 'Intermediate', completed: false },
        { title: 'Cryptography Essentials', duration: '3 hours', level: 'Intermediate', completed: false },
        { title: 'Cloud Security', duration: '4 hours', level: 'Advanced', completed: false },
        { title: 'Compliance & Governance', duration: '3 hours', level: 'Advanced', completed: false }
      ],
      futureJobs: ['Cybersecurity Specialist', 'Security Consultant', 'IT Security Manager', 'Chief Information Security Officer']
    }
  ]

  const track = tracks.find(t => t.id === id)

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
    if (level.includes('Expert')) return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
  }

  if (!track) {
    return (
      <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Track Not Found</h1>
          <p className="text-lg opacity-75">The track you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/tracks')}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Tracks
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/tracks')}
          className="flex items-center mb-6 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Tracks
        </motion.button>

        {/* Track Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`p-8 rounded-xl mb-8 ${theme === 'dark' ? 'bg-white/10 backdrop-blur-md' : 'bg-blue-50'} border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'}`}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-6xl text-blue-600">
                {getIcon(track.icon)}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{track.title}</h1>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getLevelColor(track.level)}`}>
                  {track.level}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600 mb-1">{track.duration}</div>
              <div className="text-sm opacity-75">Duration</div>
            </div>
          </div>

          <p className="text-lg opacity-90 mb-6">{track.overview}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{track.courses}</div>
              <div className="text-sm opacity-75">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{track.courseList.filter(c => c.completed).length}</div>
              <div className="text-sm opacity-75">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">{track.courseList.filter(c => !c.completed).length}</div>
              <div className="text-sm opacity-75">Remaining</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{track.category}</div>
              <div className="text-sm opacity-75">Category</div>
            </div>
          </div>
        </motion.div>

        {/* Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FaBook className="mr-3" />
            Courses in this Track
          </h2>
          <div className="grid gap-4">
            {track.courseList.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`p-6 rounded-lg border transition-all ${
                  course.completed
                    ? `${theme === 'dark' ? 'bg-green-600/20 border-green-600/30' : 'bg-green-50 border-green-200'}`
                    : `${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${course.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                      {course.completed && <div className="w-full h-full rounded-full bg-green-500 animate-pulse" />}
                    </div>
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <div className="flex items-center space-x-4 text-sm opacity-75 mt-1">
                        <span className="flex items-center">
                          <FaClock className="mr-1" />
                          {course.duration}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-medium ${course.completed ? 'text-green-600' : 'text-gray-500'}`}>
                      {course.completed ? 'Completed' : 'Not Started'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Jobs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/10 backdrop-blur-md' : 'bg-blue-50'} border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'}`}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FaBriefcase className="mr-3" />
            Future Career Paths
          </h2>
          <div className="flex flex-wrap gap-3">
            {track.futureJobs.map((job, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  theme === 'dark'
                    ? 'bg-green-600/20 text-green-300 border border-green-600/30'
                    : 'bg-green-100 text-green-800 border border-green-200'
                }`}
              >
                {job}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TrackDetail