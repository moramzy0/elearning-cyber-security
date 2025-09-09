/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
import { useState, useEffect } from 'react'

const Banner = () => {
  const { theme } = useTheme()

  const courses = [
    {
      id: 1,
      title: 'SOC Analyst Fundamentals',
      description: 'Complete beginner to advanced training in cybersecurity operations',
      originalPrice: 499,
      discountedPrice: 299,
      discount: 40,
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      title: 'Threat Detection Masterclass',
      description: 'Advanced threat hunting techniques and real-world scenarios',
      originalPrice: 349,
      discountedPrice: 199,
      discount: 43,
      bgImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: 'Incident Response Pro',
      description: 'Master incident handling and response strategies',
      originalPrice: 399,
      discountedPrice: 249,
      discount: 38,
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length)
    }, 4000) // Auto slide every 4 seconds

    return () => clearInterval(interval)
  }, [courses.length])

  return (
    <div className="relative overflow-hidden h-[33.87rem]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${courses[currentIndex].bgImage})`
          }}
        >
          <div className="text-center text-white px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {courses[currentIndex].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
            >
              {courses[currentIndex].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-5xl font-bold text-yellow-300 mb-2">
                ${courses[currentIndex].discountedPrice}
                <span className="text-2xl line-through text-gray-300 ml-2">
                  ${courses[currentIndex].originalPrice}
                </span>
              </div>
              <div className="text-xl text-green-300 font-semibold">
                {courses[currentIndex].discount}% OFF - Limited Time!
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Enroll Now
            </motion.button>
          </div>

          {/* Slider indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Banner