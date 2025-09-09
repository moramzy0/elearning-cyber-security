import { useTheme } from '../../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../../components/layout/Footer'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaClock
} from 'react-icons/fa'
import { getLessonById, getNextLessonId, getPrevLessonId } from '../../data/lessons'

const LessonDetail = () => {
  const { theme } = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showQuizResults, setShowQuizResults] = useState(false)
  const [completedLessons, setCompletedLessons] = useState([1, 2])

  const lesson = getLessonById(id)

  const bgClass = theme === 'dark'
    ? 'bg-gradient-to-br from-blue-900 to-green-900'
    : 'bg-white'

  const nextLessonId = getNextLessonId(id)
  const prevLessonId = getPrevLessonId(id)

  const nextLesson = () => {
    if (nextLessonId) {
      navigate(`/lesson/${nextLessonId}`)
      setProgress(0)
      setIsPlaying(false)
    }
  }

  const prevLesson = () => {
    if (prevLessonId) {
      navigate(`/lesson/${prevLessonId}`)
      setProgress(0)
      setIsPlaying(false)
    }
  }

  const markComplete = () => {
    setCompletedLessons(prev => [...prev, parseInt(id)])
  }

  const submitQuiz = () => {
    setShowQuizResults(true)
  }

  const calculateQuizScore = () => {
    const quiz = lesson.content
    let correct = 0
    quiz.questions.forEach(question => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / quiz.questions.length) * 100)
  }

  // Simulate video progress
  useEffect(() => {
    if (isPlaying && lesson.type === 'video') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 100
          }
          return prev + 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, lesson.type])

  if (!lesson) {
    return (
      <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Lesson Not Found</h1>
          <p className="text-lg opacity-75">The lesson you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Top Bar */}
        <div className={`flex items-center justify-between p-4 mb-6 rounded-xl ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} border`}>
          <div className="flex items-center">
            <div className="ml-4">
              <h1 className="text-2xl font-bold">{lesson.title}</h1>
              <div className="text-sm opacity-75 flex items-center mt-1">
                <FaClock className="mr-1" />
                {lesson.duration} • Lesson {id}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm opacity-75">
              {completedLessons.length} of 5 completed
            </div>
            <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedLessons.length / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="mb-6">
          {lesson.type === 'video' && (
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-black'} rounded-xl overflow-hidden mb-6 relative`}>
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <FaPlay className="text-6xl mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold">Video Content</h3>
                  <p className="opacity-75">Duration: {lesson.duration}</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2"
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2"
                    >
                      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </motion.button>
                    <span className="text-sm">0:00 / {lesson.duration}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2"
                  >
                    <FaExpand />
                  </motion.button>
                </div>
                <div className="mt-2 bg-gray-600 rounded-full h-1">
                  <div
                    className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {lesson.type === 'lecture' && (
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} rounded-xl p-8 mb-6`}>
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: lesson.content.text }}
              />
            </div>
          )}

          {lesson.type === 'quiz' && (
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} rounded-xl p-8 mb-6`}>
              {!showQuizResults ? (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Module Assessment</h2>
                  <div className="space-y-8">
                    {lesson.content.questions.map((question, qIndex) => (
                      <div key={question.id} className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-lg p-6`}>
                        <h3 className="text-lg font-semibold mb-4">{qIndex + 1}. {question.question}</h3>
                        <div className="space-y-3">
                          {question.options.map((option, oIndex) => (
                            <motion.button
                              key={oIndex}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              onClick={() => setQuizAnswers(prev => ({ ...prev, [question.id]: oIndex }))}
                              className={`w-full text-left p-4 rounded-lg border transition-all ${
                                quizAnswers[question.id] === oIndex
                                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                                  : `${theme === 'dark' ? 'border-gray-600 hover:bg-gray-600' : 'border-gray-300 hover:bg-gray-50'}`
                              }`}
                            >
                              {option}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={submitQuiz}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                    >
                      Submit Quiz
                    </motion.button>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">
                    {calculateQuizScore() >= 70 ? '🎉' : '📚'}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
                  <div className="text-4xl font-bold mb-4 text-blue-600">
                    {calculateQuizScore()}%
                  </div>
                  <p className="text-lg mb-6">
                    {calculateQuizScore() >= 70
                      ? 'Congratulations! You passed the assessment.'
                      : 'Keep studying and try again. You can retake this quiz.'}
                  </p>
                  <div className="space-y-4">
                    {lesson.content.questions.map((question) => (
                      <div key={question.id} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
                        <p className="font-semibold mb-2">{question.question}</p>
                        <p className="text-sm opacity-75">{question.explanation}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Resources */}
          {lesson.content.resources && (
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} rounded-xl p-6`}>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <div className="grid grid-cols-2 gap-4">
                {lesson.content.resources.map((resource, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 rounded-lg text-left ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} transition-colors`}
                  >
                    <FaFileAlt className="inline mr-2" />
                    {resource}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className={`flex items-center justify-between p-4 rounded-xl ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} border`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevLesson}
            disabled={!prevLessonId}
            className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
              !prevLessonId
                ? 'opacity-50 cursor-not-allowed'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <FaChevronLeft className="mr-2" />
            Previous
          </motion.button>

          <div className="flex items-center space-x-4">
            {!completedLessons.includes(parseInt(id)) && lesson.type !== 'quiz' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={markComplete}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                <FaCheck className="inline mr-2" />
                Mark Complete
              </motion.button>
            )}
            {completedLessons.includes(parseInt(id)) && (
              <div className="flex items-center text-green-600">
                <FaCheck className="mr-2" />
                <span className="font-semibold">Completed</span>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextLesson}
            disabled={!nextLessonId}
            className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
              !nextLessonId
                ? 'opacity-50 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Next
            <FaChevronRight className="ml-2" />
          </motion.button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LessonDetail