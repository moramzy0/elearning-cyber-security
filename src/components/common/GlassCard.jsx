import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

const GlassCard = ({ children, className = '' }) => {
  const { theme } = useTheme()

  const glassClasses = `p-6 rounded-lg shadow-lg border border-transparent transition-all duration-300 ${theme === 'dark' ? 'hover:bg-white/20 hover:backdrop-blur-md hover:shadow-xl hover:border-white/30' : 'hover:bg-gray-900/20 hover:backdrop-blur-md hover:shadow-xl hover:border-gray-900/30'} ${className}`

  return (
    <motion.div
      className={glassClasses}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard