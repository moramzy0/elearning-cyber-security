import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdSunny, MdDarkMode } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${theme === 'dark' ? 'bg-gradient-to-br from-blue-900 to-green-900 backdrop-blur-md border-b border-green-700' : scrolled ? 'bg-blue-600/1 backdrop-blur-md border-b border-blue-700' : 'bg-blue-600 backdrop-blur-md border-b border-blue-700/50'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl font-bold ${theme === 'dark' ? '' : scrolled ? 'text-black' : 'text-white'} transition-colors duration-300`}
        >
          Ramzy Tech
        </motion.div>

        <nav className="hidden lg:flex items-center space-x-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className={`${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-200'} transition-colors`}>Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/courses" className={`${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-200'} transition-colors`}>Courses</Link>
          </motion.div>
          <div className={`flex items-center border rounded ml-8 ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} focus-within:ring-2 focus-within:ring-blue-500`}>
            <input type="text" placeholder="Search..." className={`flex-1 px-3 py-1 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} focus:outline-none`} />
            <div className="px-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center">
              <FaSearch className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all" />
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <FaFacebook className={`${theme === 'dark' || (theme === 'light' && scrolled) ? 'text-blue-600' : 'text-white'} hover:shadow-lg hover:shadow-blue-600/50 hover:scale-110 transition-all cursor-pointer`} />
            <FaTwitter className="text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-110 transition-all cursor-pointer" />
            <FaInstagram className="text-pink-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110 transition-all cursor-pointer" />
          </div>
          <button className={`${theme === 'dark' ? 'btn btn-outline-primary' : 'bg-blue-600 text-white hover:bg-blue-700'} px-4 py-2 rounded transition-colors`}>Login / Signup</button>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:block p-2 transition-colors"
          >
            {theme === 'dark' ? <MdSunny className="text-yellow-500" /> : <MdDarkMode className="text-gray-800" />}
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-800 dark:text-white"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`lg:hidden ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900 to-green-900 border-t border-green-700' : 'bg-white border-t border-gray-200'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-center ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className={`text-center ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
            >
              Courses
            </Link>
            <div className={`flex items-center border rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus-within:ring-2 focus-within:ring-blue-500`}>
              <input
                type="text"
                placeholder="Search..."
                className={`flex-1 px-3 py-1 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} focus:outline-none`}
              />
              <div className="px-3 py-1 cursor-pointer transition-colors flex items-center justify-center">
                <FaSearch className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all" />
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <FaFacebook className={`${theme === 'dark' ? 'text-blue-600' : 'text-blue-600'} hover:shadow-lg hover:shadow-blue-600/50 hover:scale-110 transition-all cursor-pointer`} />
              <FaTwitter className="text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-110 transition-all cursor-pointer" />
              <FaInstagram className="text-pink-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110 transition-all cursor-pointer" />
            </div>
            <button className={`${theme === 'dark' ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'} px-4 py-2 rounded transition-colors`}>
              Login / Signup
            </button>
            <motion.button
              onClick={() => { toggleTheme(); setIsOpen(false); }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 transition-colors self-start"
            >
              {theme === 'dark' ? <MdSunny className="text-yellow-500" /> : <MdDarkMode className="text-gray-800" />}
            </motion.button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header