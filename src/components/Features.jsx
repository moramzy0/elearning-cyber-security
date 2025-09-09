import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const Features = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-16 grid md:grid-cols-3 gap-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <GlassCard>
        <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
        <p>Learn to identify and analyze security threats in real-time.</p>
        </GlassCard>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <GlassCard>
        <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
        <p>Master the process of responding to security incidents effectively.</p>
        </GlassCard>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <GlassCard>
        <h3 className="text-xl font-semibold mb-4">Security Tools</h3>
        <p>Get hands-on experience with industry-standard security tools.</p>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

export default Features