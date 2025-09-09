import { useTheme } from '../../contexts/ThemeContext'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaPlay,
  FaCheck,
  FaClock,
  FaFileAlt,
  FaQuestion
} from 'react-icons/fa'

const CourseModule = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [activeModule, setActiveModule] = useState(1)

  const modules = [
    {
      id: 1,
      title: 'Introduction to SOC Operations',
      description: 'Learn the fundamentals of Security Operations Centers',
      progress: 100
    },
    {
      id: 2,
      title: 'Threat Detection Fundamentals',
      description: 'Master the core concepts of threat detection',
      progress: 60
    },
    {
      id: 3,
      title: 'Security Monitoring Tools',
      description: 'Hands-on experience with essential security tools',
      progress: 0
    },
    {
      id: 4,
      title: 'Incident Response',
      description: 'Master incident response procedures and best practices',
      progress: 0
    }
  ]

  const lessons = [
    {
      id: 1,
      title: 'Welcome to SOC Operations',
      type: 'video',
      duration: '15 min',
      completed: true,
      moduleId: 1
    },
    {
      id: 2,
      title: 'SOC Structure and Roles',
      type: 'video',
      duration: '20 min',
      completed: true,
      moduleId: 1
    },
    {
      id: 3,
      title: 'Daily Operations Overview',
      type: 'video',
      duration: '18 min',
      completed: false,
      moduleId: 1
    },
    {
      id: 4,
      title: 'Understanding Security Threats',
      type: 'video',
      duration: '25 min',
      completed: false,
      moduleId: 2
    },
    {
      id: 5,
      title: 'Detection Techniques',
      type: 'video',
      duration: '30 min',
      completed: false,
      moduleId: 2
    },
    {
      id: 6,
      title: 'Practical Threat Detection Lab',
      type: 'interactive',
      duration: '45 min',
      completed: false,
      moduleId: 2
    },
    {
      id: 7,
      title: 'Introduction to SIEM Systems',
      type: 'video',
      duration: '35 min',
      completed: false,
      moduleId: 3
    },
    {
      id: 8,
      title: 'Log Analysis Fundamentals',
      type: 'video',
      duration: '28 min',
      completed: false,
      moduleId: 3
    },
    {
      id: 9,
      title: 'Tool Configuration Lab',
      type: 'interactive',
      duration: '50 min',
      completed: false,
      moduleId: 3
    },
    {
      id: 10,
      title: 'Incident Response Process',
      type: 'video',
      duration: '32 min',
      completed: false,
      moduleId: 4
    },
    {
      id: 11,
      title: 'Containment Strategies',
      type: 'video',
      duration: '27 min',
      completed: false,
      moduleId: 4
    },
    {
      id: 12,
      title: 'Post-Incident Analysis',
      type: 'video',
      duration: '22 min',
      completed: false,
      moduleId: 4
    }
  ]

  const selectedModule = modules.find(module => module.id === activeModule)
  const moduleLessons = lessons.filter(lesson => lesson.moduleId === activeModule)
  const totalLessons = lessons.length
  const completedCount = lessons.filter(lesson => lesson.completed).length
  const overallProgress = Math.round((completedCount / totalLessons) * 100)

  return (
    <div className="max-w-7xl mx-auto">
      {/* Course Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">SOC Analyst Training: Complete Course</h1>
            <p className="text-lg opacity-90">Master essential SOC skills and cybersecurity best practices</p>
          </div>
          <div className="text-right">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <FaPlay key={i} className="text-sm" />
                ))}
              </div>
              <span className="text-sm opacity-75">4.9 (2,543 reviews)</span>
            </div>
            <div className="text-sm opacity-75">
              {completedCount} of {totalLessons} lessons completed
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} rounded-full h-3 mb-4`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-blue-600 h-3 rounded-full"
          />
        </div>
        <div className="text-sm opacity-75">{overallProgress}% Complete</div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column: Modules */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} rounded-xl p-6 border ${theme === 'dark' ? 'border-gray-700' : 'border-blue-200'}`}
          >
            <h3 className="text-lg font-semibold mb-4">Course Modules</h3>
            <div className="space-y-3">
              {modules.map((module, index) => (
                <motion.button
                  key={module.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    activeModule === module.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : `${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' : 'bg-white hover:bg-gray-50 border-gray-200'}`
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{module.title}</span>
                    <span className="text-sm opacity-75">{module.progress}%</span>
                  </div>
                  <p className="text-sm opacity-90 mb-3">{module.description}</p>
                  <div className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} rounded-full h-2`}>
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Lessons */}
        <div className="lg:col-span-1">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} rounded-xl p-6 border ${theme === 'dark' ? 'border-gray-700' : 'border-blue-200'}`}
          >
            <h3 className="text-lg font-semibold mb-2">{selectedModule.title}</h3>
            <p className="text-sm opacity-90 mb-4">{selectedModule.description}</p>
            <div className="text-sm opacity-75 mb-4">
              {moduleLessons.length} lessons • {moduleLessons.reduce((total, lesson) => total + parseInt(lesson.duration), 0)} minutes total
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {moduleLessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-lg border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} overflow-hidden`}
                >
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-opacity-80 transition-colors"
                    onClick={() => navigate(`/lesson/${lesson.id}`)}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        lesson.completed
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-400 text-gray-700'
                      }`}>
                        {lesson.completed ? <FaCheck /> :
                         lesson.type === 'video' ? <FaPlay /> :
                         lesson.type === 'interactive' ? <FaFileAlt /> : <FaQuestion />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{lesson.title}</h3>
                        <div className="flex items-center text-xs opacity-75 mt-1">
                          <span className="mr-3">{lesson.duration}</span>
                          <span className="capitalize">{lesson.type}</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/lesson/${lesson.id}`)
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
                    >
                      {lesson.type === 'video' ? 'Watch' :
                       lesson.type === 'interactive' ? 'Start' : 'Take'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CourseModule