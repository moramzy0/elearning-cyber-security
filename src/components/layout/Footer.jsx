import { useTheme } from '../../contexts/ThemeContext'
import { motion } from 'framer-motion'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 border-t border-gray-700' : 'bg-blue-600 border-t border-blue-700'} mt-20`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>CyberLearn</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'} mb-4`}>
              Empowering the next generation of cybersecurity professionals through comprehensive SOC Analyst training.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-blue-200 hover:text-white'} transition-colors`}
              >
                📘
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-blue-200 hover:text-white'} transition-colors`}
              >
                🐦
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-blue-200 hover:text-white'} transition-colors`}
              >
                💼
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-blue-100 hover:text-white'} transition-colors`}>
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-blue-100 hover:text-white'} transition-colors`}>
                  Courses
                </a>
              </li>
              <li>
                <a href="/lessons" className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-blue-100 hover:text-white'} transition-colors`}>
                  Lessons
                </a>
              </li>
              <li>
                <a href="#" className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-blue-100 hover:text-white'} transition-colors`}>
                  About
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Courses</h4>
            <ul className="space-y-2">
              <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'}`}>
                SOC Fundamentals
              </li>
              <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'}`}>
                Threat Detection
              </li>
              <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'}`}>
                Incident Response
              </li>
              <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'}`}>
                SIEM Tools
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Contact Us</h4>
            <div className="space-y-2">
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'}`}>
                📧 info@cyberlearn.com
              </p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'}`}>
                📞 +1 (555) 123-4567
              </p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-blue-100'}`}>
                📍 123 Cyber Street, Security City
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-blue-500'} mt-8 pt-8 text-center`}
        >
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-blue-200'}`}>
            © 2024 CyberLearn. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer