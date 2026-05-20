import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ScrollPrompt({ label, targetId }) {
  const scrollTo = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex justify-center pt-12 pb-4">
      <motion.button
        onClick={scrollTo}
        className="group flex items-center gap-3 text-stone-400 hover:text-violet-600 transition-colors duration-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.15em]">{label}</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="text-violet-500 group-hover:text-violet-600 transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </motion.button>
    </div>
  )
}