import { useTheme } from '../../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdSunny, MdDarkMode } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaBars, FaShoppingCart, FaTrash } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Breadcrumb from './Breadcrumb'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  // Mock cart data - in a real app, this would come from a cart context/state
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'SOC Analyst Training', price: 299, image: '🎓' },
    { id: 2, title: 'Cybersecurity Fundamentals', price: 199, image: '🔒' },
    { id: 3, title: 'Network Security Course', price: 249, image: '🌐' },
    { id: 4, title: 'Ethical Hacking Masterclass', price: 399, image: '💻' }
  ])

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartOpen && !event.target.closest('.cart-dropdown')) {
        setCartOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [cartOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.hamburger-dropdown') && !event.target.closest('.hamburger-button')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <header className={`${theme === 'dark' ? 'bg-gradient-to-br from-blue-900 to-green-900 backdrop-blur-md' : scrolled ? 'bg-blue-600/1 backdrop-blur-md' : 'bg-blue-600 backdrop-blur-md'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl font-bold ${theme === 'dark' ? '' : scrolled ? 'text-black' : 'text-white'} transition-colors duration-300`}
        >
          Ramzy Tech
        </motion.div>

        <div className={`lg:hidden flex items-center border rounded ml-4 ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} focus-within:ring-2 focus-within:ring-blue-500 hover:border-transparent transition-colors`}>
          <input type="text" placeholder="Search..." className={`flex-1 px-3 py-1 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} focus:outline-none`} />
          <div className="px-3 py-1 cursor-pointer transition-colors flex items-center justify-center">
            <FaSearch className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all" />
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-12">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className={`${theme === 'dark' ? 'hover:text-blue-400' : scrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/courses" className={`${theme === 'dark' ? 'hover:text-blue-400' : scrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>Courses</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/tracks" className={`${theme === 'dark' ? 'hover:text-blue-400' : scrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors`}>Tracks</Link>
          </motion.div>
          <div className={`flex items-center border rounded ml-8 ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} focus-within:ring-2 focus-within:ring-blue-500 hover:border-transparent transition-colors`}>
            <input type="text" placeholder="Search..." className={`flex-1 px-3 py-1 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} focus:outline-none`} />
            <div className="px-3 py-1 cursor-pointer transition-colors flex items-center justify-center">
              <FaSearch className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all" />
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-2">
            <FaFacebook className={`${theme === 'dark' || (theme === 'light' && scrolled) ? 'text-blue-600' : 'text-white'} hover:shadow-lg hover:shadow-blue-600/50 hover:scale-110 transition-all cursor-pointer`} />
            <FaTwitter className="text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-110 transition-all cursor-pointer" />
            <FaInstagram className="text-pink-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110 transition-all cursor-pointer" />
          </div>
          <button className={`hidden lg:block ${theme === 'dark' ? 'btn btn-outline-primary' : 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600'} px-4 py-2 rounded transition-colors`}>Login / Signup</button>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:block p-2 transition-colors"
          >
            {theme === 'dark' ? <MdSunny className="text-yellow-500" /> : <MdDarkMode className="text-gray-800" />}
          </motion.button>

          {/* Cart Icon with Dropdown */}
          <div className="relative cart-dropdown">
            <motion.button
              onClick={() => setCartOpen(!cartOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 transition-colors"
            >
              <FaShoppingCart className={`${theme === 'dark' ? 'text-white' : scrolled ? 'text-black' : 'text-white'} hover:text-blue-400 transition-colors`} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length > 4 ? '4+' : cartItems.length}
                </span>
              )}
            </motion.button>

            {/* Cart Dropdown */}
            {cartOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`absolute right-0 mt-2 w-[326px] ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-blue-50 border-blue-200 text-black'} border rounded-lg shadow-lg z-50`}
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-3">Shopping Cart</h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {cartItems.slice(0, 4).map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 group">
                        <div className="text-2xl">{item.image}</div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium truncate">{item.title}</h4>
                          <p className="text-blue-600 font-semibold">${item.price}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:text-red-700 transition-all duration-200"
                        >
                          <FaTrash className="text-sm" />
                        </motion.button>
                      </div>
                    ))}
                    {cartItems.length > 4 && (
                      <p className="text-sm text-gray-500 text-center py-2">
                        +{cartItems.length - 4} more items...
                      </p>
                    )}
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold">Total:</span>
                      <span className="text-blue-600 font-bold">
                        ${cartItems.reduce((total, item) => total + item.price, 0)}
                      </span>
                    </div>
                    <Link to="/Cart">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setCartOpen(false)}
                        className={`w-full ${theme === 'dark' ? 'btn btn-outline-primary' : 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600'} font-semibold py-2 px-4 rounded-lg transition-colors`}
                      >
                        View Cart
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`hamburger-button lg:hidden p-2 ${theme === 'dark' ? 'text-white' : scrolled ? 'text-black' : 'text-white'} transition-colors`}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <Breadcrumb />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`hamburger-dropdown lg:hidden absolute top-full left-0 right-0 z-60 shadow-lg ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-center ${theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'} transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className={`text-center ${theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'} transition-colors`}
            >
              Courses
            </Link>
            <Link
              to="/tracks"
              onClick={() => setIsOpen(false)}
              className={`text-center ${theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'} transition-colors`}
            >
              Tracks
            </Link>
            <div className="flex justify-center space-x-4">
              <FaFacebook className={`${theme === 'dark' ? 'text-blue-600' : 'text-blue-600'} hover:shadow-lg hover:shadow-blue-600/50 hover:scale-110 transition-all cursor-pointer`} />
              <FaTwitter className="text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-110 transition-all cursor-pointer" />
              <FaInstagram className="text-pink-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110 transition-all cursor-pointer" />
            </div>
            <button className={`${theme === 'dark' ? 'btn btn-outline-primary' : 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600'} px-4 py-2 rounded transition-colors`}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header