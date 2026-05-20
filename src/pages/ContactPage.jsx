import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { useForm, ValidationError } from '@formspree/react'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

const FIELDS = [
  { id: 'name',    label: 'Full Name',    type: 'text',  placeholder: 'Jane Smith' },
  { id: 'email',   label: 'Email',        type: 'email', placeholder: 'jane@example.com' },
  { id: 'subject', label: 'Subject',      type: 'text',  placeholder: "What's this about?" },
]

export default function ContactPage({ onBack }) {
  const [state, handleSubmit] = useForm('mredeaaq')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-gray-900">

      {/* ── Minimal header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-violet-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
          <span className="text-base font-black text-white">
            Nawal <span className="gradient-text">El Khatib</span>
          </span>
          <div className="w-32" />
        </div>
      </header>

      {/* ── Form section ── */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto">

          {state.succeeded ? (
            <SuccessState onBack={onBack} />
          ) : (
            <>
              {/* Headline */}
              <motion.div {...fadeUp(0)} className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-10 bg-gradient-to-r from-violet-400 to-purple-400" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400">
                    Contact
                  </span>
                  <div className="h-px w-10 bg-gradient-to-r from-purple-400 to-violet-400" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-3">
                  Send a <span className="gradient-text">Message</span>
                </h1>
                <p className="text-gray-400 text-base leading-relaxed">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </motion.div>

              {/* Form card */}
              <motion.div
                {...fadeUp(0.1)}
                className="bg-gray-800 rounded-3xl border border-gray-700 shadow-lg shadow-black/30 p-8"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {FIELDS.map(({ id, label, type, placeholder }, i) => (
                    <motion.div key={id} {...fadeUp(0.12 + i * 0.06)}>
                      <label htmlFor={id} className="block text-sm font-semibold text-gray-200 mb-1.5">
                        {label}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        className={[
                          'w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700',
                          'text-sm text-white placeholder-gray-500',
                          'outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30',
                          'transition-all duration-200',
                        ].join(' ')}
                      />
                      <ValidationError
                        field={id}
                        prefix={label}
                        errors={state.errors}
                        className="text-red-400 text-xs mt-1"
                      />
                    </motion.div>
                  ))}

                  {/* Message */}
                  <motion.div {...fadeUp(0.30)}>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, role, or just say hi..."
                      className={[
                        'w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700',
                        'text-sm text-white placeholder-gray-500 resize-none',
                        'outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30',
                        'transition-all duration-200',
                      ].join(' ')}
                    />
                    <ValidationError
                      field="message"
                      prefix="Message"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.div {...fadeUp(0.36)}>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className={[
                        'w-full h-12 rounded-xl font-semibold text-white text-sm tracking-wide',
                        'bg-gradient-to-r from-violet-600 to-purple-500',
                        'hover:from-violet-700 hover:to-purple-600',
                        'shadow-sm hover:shadow-md hover:shadow-violet-900/50',
                        'active:scale-[0.98] transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800',
                        'disabled:opacity-70 disabled:cursor-not-allowed',
                        'flex items-center justify-center gap-2',
                      ].join(' ')}
                    >
                      {state.submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

function SuccessState({ onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-12"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 mb-6 shadow-lg shadow-violet-200">
        <CheckCircle2 className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-3xl font-black text-white mb-3">Message sent!</h2>
      <p className="text-gray-400 text-base mb-8 leading-relaxed">
        Thanks for reaching out. I'll get back to you shortly.
      </p>
      <Button onClick={onBack} variant="outline" className="gap-2 border-violet-500 text-violet-300 hover:bg-violet-900/40 bg-transparent">
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </Button>
    </motion.div>
  )
}
