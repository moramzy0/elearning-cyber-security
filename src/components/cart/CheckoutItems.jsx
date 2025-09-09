import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
import GlassCard from '../common/GlassCard'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

const CheckoutItems = ({ cartItems, updateQuantity, removeItem }) => {
  const { theme } = useTheme()

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
      case 'Advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100'
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
    }
  }

  return (
    <div className="lg:col-span-2 space-y-6">
      <AnimatePresence>
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <GlassCard>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-75 mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center gap-4 text-sm opacity-75">
                        <span className="flex items-center">
                          <span className="mr-1">⏱️</span>
                          {item.duration}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">📚</span>
                          {item.lessons} lessons
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                          {item.level}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2"
                    >
                      <FaTrash />
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm opacity-75">Quantity:</span>
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center hover:bg-red-200 dark:hover:bg-red-800/40 transition-all duration-200 border border-red-200 dark:border-red-800/50"
                        >
                          <FaMinus className="text-xs" />
                        </motion.button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-800/40 transition-all duration-200 border border-green-200 dark:border-green-800/50"
                        >
                          <FaPlus className="text-xs" />
                        </motion.button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        ${item.price * item.quantity}
                      </div>
                      {item.discount > 0 && (
                        <div className="text-sm opacity-75 line-through">
                          ${item.originalPrice * item.quantity}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default CheckoutItems