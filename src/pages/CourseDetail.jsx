import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import CourseModule from '../components/course/CourseModule'
import CoursePreview from '../components/course/CoursePreview'
import { useState } from 'react'
import {
  FaPlay,
  FaList,
  FaQuestionCircle,
  FaComments,
  FaQuestion,
  FaChevronDown,
  FaChevronUp,
  FaUser,
  FaStar,
  FaThumbsUp,
  FaReply
} from 'react-icons/fa'

const CourseDetail = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('content')

  const bgClass = theme === 'dark'
    ? 'bg-gradient-to-br from-blue-900 to-green-900'
    : 'bg-white'

  const faqs = [
    {
      question: 'What are the prerequisites for this course?',
      answer: 'Basic understanding of computer networks and cybersecurity concepts is recommended, but not required. We start from fundamentals.'
    },
    {
      question: 'How long do I have access to the course?',
      answer: 'You have lifetime access to all course materials, including future updates and new content additions.'
    },
    {
      question: 'Is there a certificate upon completion?',
      answer: 'Yes, you will receive a certificate of completion that you can add to your professional portfolio.'
    },
    {
      question: 'Can I download the course videos?',
      answer: 'Videos are available for offline viewing through our mobile app, but cannot be downloaded externally.'
    }
  ]

  const comments = [
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: 'SJ',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent course! The instructor explains complex concepts very clearly. Highly recommended for anyone starting in SOC.',
      likes: 12,
      replies: []
    },
    {
      id: 2,
      user: 'Mike Chen',
      avatar: 'MC',
      rating: 5,
      date: '1 month ago',
      comment: 'Practical examples and real-world scenarios make this course stand out. The hands-on exercises are particularly valuable.',
      likes: 8,
      replies: [
        {
          user: 'John Doe',
          comment: 'Agreed! The practical approach really helped me understand the concepts better.',
          date: '3 weeks ago'
        }
      ]
    }
  ]

  const qna = [
    {
      id: 1,
      question: 'Will this course prepare me for the CISSP certification?',
      answers: 3,
      lastActivity: '2 days ago',
      tags: ['certification', 'cissp']
    },
    {
      id: 2,
      question: 'What tools are covered in the SIEM section?',
      answers: 5,
      lastActivity: '1 week ago',
      tags: ['tools', 'siem']
    },
    {
      id: 3,
      question: 'Are there any prerequisites for advanced modules?',
      answers: 2,
      lastActivity: '3 days ago',
      tags: ['prerequisites', 'advanced']
    }
  ]

  return (
    <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>

      {/* Course Preview Section */}
      <CoursePreview />

      {/* Course Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="flex border-b border-gray-300 dark:border-gray-700">
              {[
                { id: 'content', label: 'Course Content', icon: FaList },
                { id: 'faq', label: 'FAQ', icon: FaQuestionCircle },
                { id: 'comments', label: 'Comments', icon: FaComments },
                { id: 'qna', label: 'Q&A', icon: FaQuestion }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 font-semibold transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  <tab.icon className="mr-2" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Course Content Tab */}
            {activeTab === 'content' && (
              <CourseModule />
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-blue-200'}`}
                  >
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-sm opacity-90">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Comments Tab */}
            {activeTab === 'comments' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                {comments.map((comment, index) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-blue-200'}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{comment.user}</h4>
                            <div className="flex items-center">
                              {[...Array(comment.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-sm" />
                              ))}
                              <span className="text-sm opacity-75 ml-2">{comment.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="mb-4">{comment.comment}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center text-sm opacity-75 hover:opacity-100">
                            <FaThumbsUp className="mr-1" />
                            {comment.likes}
                          </button>
                          <button className="flex items-center text-sm opacity-75 hover:opacity-100">
                            <FaReply className="mr-1" />
                            Reply
                          </button>
                        </div>
                        {comment.replies && comment.replies.map((reply, replyIndex) => (
                          <div key={replyIndex} className="mt-4 ml-8 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                            <div className="flex items-center mb-1">
                              <span className="font-semibold text-sm">{reply.user}</span>
                              <span className="text-xs opacity-75 ml-2">{reply.date}</span>
                            </div>
                            <p className="text-sm">{reply.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Q&A Tab */}
            {activeTab === 'qna' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold mb-6">Questions & Answers</h2>
                {qna.map((question, index) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} p-6 rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-blue-200'} cursor-pointer hover:shadow-md transition-shadow`}
                  >
                    <h3 className="font-semibold text-lg mb-2">{question.question}</h3>
                    <div className="flex items-center justify-between text-sm opacity-75">
                      <div className="flex items-center space-x-4">
                        <span>{question.answers} answers</span>
                        <span>Last activity: {question.lastActivity}</span>
                      </div>
                      <div className="flex space-x-2">
                        {question.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}

export default CourseDetail