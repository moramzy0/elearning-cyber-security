/* eslint-disable no-unused-vars */
import { useTheme } from '../../contexts/ThemeContext'
import { motion, useScroll, useTransform } from 'framer-motion'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/common/Banner'
import Description from '../../components/common/Description'
import Features from '../../components/common/Features'
import About from '../../components/common/About'
import WhyChooseUs from '../../components/common/WhyChooseUs'
import CoursePreview from '../../components/course/CoursePreview'
import CallToAction from '../../components/common/CallToAction'

const Home = () => {
  const { theme } = useTheme()
  const { scrollY } = useScroll()
  const bannerOpacity = useTransform(scrollY, [0, 542], [1, 0])

  const bgClass = theme === 'dark'
    ? 'bg-gradient-to-br from-blue-900 to-green-900'
    : 'bg-white'

  return (
    <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>
       <motion.div style={{ opacity: bannerOpacity }}>
         <Banner />
       </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <Description />

        <Features />

        <About />

        <WhyChooseUs />

        <CoursePreview />

        <CallToAction />
      </motion.div>
      <Footer />
    </div>
  )
}

export default Home