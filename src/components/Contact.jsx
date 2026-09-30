import { motion } from 'framer-motion'
import { Linkedin, MapPin, Phone, Send } from 'lucide-react'
import { Button } from './ui/button'

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Contact({ onSendMessage }) {
  return (
    <section id="contact" className="bg-gray-900 py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-stone-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
            Get In Touch
          </span>
          <div className="h-px w-10 bg-stone-400" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fadeUp(0.08)}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-white"
        >
          Let's{' '}
          <span className="relative inline-block">
            <span className="relative z-10 gradient-text-light">Connect</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-3 bg-stone-400/40 rounded-full -z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.div {...fadeUp(0.14)} className="flex items-center justify-center gap-2 text-gray-300 mb-2">
          <MapPin className="w-4 h-4 text-stone-400 flex-shrink-0" />
          <p className="text-base font-medium">Brampton, ON</p>
        </motion.div>
        <motion.p
          {...fadeUp(0.19)}
          className="text-base text-gray-400 leading-relaxed mb-12 max-w-md mx-auto"
        >
          Whether you have a project in mind, a role you think I'd be a good fit for, or just want to connect, my inbox is always open!
        </motion.p>

        {/* Contact links */}
        <motion.div
          {...fadeUp(0.26)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nawalelkhatib"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="linkedin"
              size="lg"
              className="w-full sm:w-auto gap-3 text-base px-8 h-13 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 sm:min-w-[220px]"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </a>

          {/* Phone */}
          <a href="tel:+16474471115" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-3 text-base px-8 h-13 rounded-2xl sm:min-w-[220px] border-stone-800 text-stone-300 hover:bg-stone-900/40 bg-transparent"
            >
              <Phone className="w-5 h-5" />
              (647) 447-1115
            </Button>
          </a>
        </motion.div>

        {/* Send a Message CTA */}
        <motion.div {...fadeUp(0.32)}>
          <button
            onClick={onSendMessage}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-400 hover:text-stone-300 underline underline-offset-4 transition-colors duration-200"
          >
            <Send className="w-4 h-4" />
            Send a Message
          </button>
        </motion.div>
      </div>
    </section>
  )
}
