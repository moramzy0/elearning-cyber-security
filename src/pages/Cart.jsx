import { useTheme } from '../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../components/Footer'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import CheckoutItems from '../components/CheckoutItems'

const Cart = () => {
  const { theme } = useTheme()

  // Mock cart data - in a real app, this would come from a cart context/state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'SOC Analyst Fundamentals',
      description: 'Complete beginner to advanced training in cybersecurity operations',
      price: 299,
      originalPrice: 499,
      discount: 40,
      duration: '8 hours',
      lessons: 15,
      level: 'Beginner',
      quantity: 1
    },
    {
      id: 2,
      title: 'Threat Detection Masterclass',
      description: 'Advanced threat hunting techniques and real-world scenarios',
      price: 199,
      originalPrice: 349,
      discount: 43,
      duration: '6 hours',
      lessons: 12,
      level: 'Intermediate',
      quantity: 1
    }
  ])

  const bgClass = theme === 'dark'
    ? 'bg-gradient-to-br from-blue-900 to-green-900'
    : 'bg-white'

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalOriginalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.originalPrice * item.quantity), 0)
  }

  const getTotalSavings = () => {
    return getTotalOriginalPrice() - getTotalPrice()
  }


  return (
    <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Shopping Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-16"
          >
            <FaShoppingCart className="text-6xl text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Add some courses to get started with your learning journey!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Browse Courses
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <CheckoutItems
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`${theme === 'dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-blue-50'} p-6 rounded-xl shadow-lg border ${theme === 'dark' ? 'border-white/20' : 'border-blue-200'} sticky top-4`}
              >
                <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  {getTotalSavings() > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>You Save</span>
                      <span>-${getTotalSavings()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <hr className="border-gray-300 dark:border-gray-600" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
                >
                  Proceed to Checkout
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full ${theme === 'dark' ? 'bg-white/20 hover:bg-white/30' : 'bg-blue-100 hover:bg-blue-200'} text-${theme === 'dark' ? 'white' : 'gray-800'} font-semibold py-3 px-6 rounded-lg transition-colors duration-200`}
                >
                  Continue Shopping
                </motion.button>
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
      <Footer />
    </div>
  )
}

export default Cart