import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const About = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-20 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        What is a SOC Analyst?
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed mb-6"
        >
          A Security Operations Center (SOC) Analyst is a cybersecurity professional responsible for monitoring,
          detecting, and responding to security threats in real-time. They play a crucial role in protecting
          organizations from cyber attacks and maintaining the integrity of digital assets.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard>
            <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
            <ul className="text-left space-y-2">
              <li>• Monitor security systems 24/7</li>
              <li>• Analyze security alerts and logs</li>
              <li>• Investigate potential security incidents</li>
              <li>• Implement security measures</li>
              <li>• Report security findings</li>
            </ul>
            </GlassCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard>
            <h3 className="text-xl font-semibold mb-4">Required Skills</h3>
            <ul className="text-left space-y-2">
              <li>• Network security knowledge</li>
              <li>• SIEM tools proficiency</li>
              <li>• Incident response techniques</li>
              <li>• Analytical thinking</li>
              <li>• Communication skills</li>
            </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About