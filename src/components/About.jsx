import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, MapPin, Library } from 'lucide-react'
import { Button } from './ui/button'
import ScrollPrompt from './ScrollPrompt'
const HOBBIES = [
  '/bouldering.jpg',
  '/disney.jpg',
  '/gym.jpg',
  '/hike.jpg',
  '/snow.jpg',
  '/usa.jpg',
  '/fall.jpg',
  '/school.jpg',
  '/water.jpg',
]

const TECHNICAL = [
  'Microsoft Office', 'Excel', 'PowerPoint', 'Word', 'Visio',
  'Wix', 'Figma', 'Monday.com', 'Jira', 'Power BI',
  'Google Analytics', 'Adobe Creative Suite', 'CapCut', 'Veed',
  'Python', 'SQL', 'AWS', 'Azure', 'GCP',
  'Claude AI', 'Gemini', 'Amazon Ads', 'Google Ads',
  'Mailchimp', 'Agile/Scrum', 'WebStorm', 'GitHub',
]

const PEOPLE = [
  'Leadership', 'Communication', 'Interpersonal', 'Adaptability',
  'Collaboration', 'Problem-Solving', 'Stakeholder Management', 'Event Planning',
  'Public Relations', 'Sponsorship Outreach', 'Initiative', 'Detail-Oriented',
  'Time Management', 'Relationship Building', 'Creativity', 'Curiosity',
  'Growth Mindset', 'Self-Motivated', 'Open to Feedback', 'Continuous Learner',
  'Resourceful', 'Coachable',
]

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
})

export default function About() {
  const handleConnect = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="about"
      className="min-h-screen pt-16 pb-4 bg-gradient-to-br from-white via-violet-50/20 to-purple-50/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── LEFT: text ── */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.04)}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-stone-900 leading-[1.0] tracking-tight"
            >
              Nawal
              <br />
              <span className="gradient-text">El Khatib</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.div {...fadeUp(0.12)} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-stone-600">
                <Library className="w-4 h-4 text-violet-500 flex-shrink-0" />
                <p className="text-base font-semibold tracking-wide">
                  Business Technology Management Co-Op Student
                </p>
              </div>
              <div className="flex items-center gap-2 text-stone-500">
                <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <p className="text-sm font-medium tracking-wide">
                  Toronto Metropolitan University{' '}
                  <span className="text-stone-400 font-normal">(Previously known as: Ryerson University)</span>
                </p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.18)}
              className="text-[15px] text-stone-600 leading-[1.8] max-w-[520px]"
            >
              Driven by a passion for the intersection of business and technology, I
              actively seek diverse experiences across industries to identify where I can
              make the greatest impact. With hands-on expertise in marketing, data
              analysis, conference leadership, and lead generation, I bring a strong drive
              toward automation and AI-driven solutions. Outside of work and academics, I
              enjoy snowboarding, bouldering, hiking, and staying active.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3">
              <a
                href="/Nawal%20ElKhatib's%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <Button variant="outline" size="lg" onClick={handleConnect} className="gap-2">
                Let's Connect
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

          </div>

          {/* ── RIGHT: profile photo ── */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <ProfilePhoto />

              {/* Floating card — top right */}
              <motion.div
                className="absolute -top-5 -right-5 bg-gradient-to-br from-violet-600 to-purple-500 rounded-2xl shadow-xl px-4 py-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[10px] text-violet-200 font-semibold uppercase tracking-widest mb-0.5">Available for</p>
                <p className="text-sm font-black text-white leading-snug">Fall 2026 + Winter 2027</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Skills — full-width below the grid ── */}
        <motion.div
          {...fadeUp(0.30)}
          className="mt-12 pt-8 border-t border-stone-200"
        >
          <div className="flex flex-col sm:flex-row gap-8">
            <SkillGroup title="Technical Skills" skills={TECHNICAL} variant="purple" />
            <div className="hidden sm:block w-px bg-stone-200 self-stretch" />
            <SkillGroup title="People Skills" skills={PEOPLE} variant="stone" />
          </div>
        </motion.div>

      </div>

      {/* ── Full-width hobby filmstrip ── */}
      <motion.div
        className="overflow-hidden mt-6 bg-gray-900 py-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex gap-4 w-max animate-scroll-left">
          {HOBBIES.map((src, i) => <FilmItem key={i}         src={src} />)}
          {HOBBIES.map((src, i) => <FilmItem key={`d-${i}`} src={src} />)}
        </div>
      </motion.div>

      <ScrollPrompt label="Experience" targetId="experience" />
    </section>
  )
}

function ProfilePhoto() {
  const [errored, setErrored] = useState(false)

  return errored ? (
    <div className="w-64 h-80 sm:w-72 sm:h-[400px] lg:w-[360px] lg:h-[460px] rounded-[12px] bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
      <span className="text-6xl font-black gradient-text">NE</span>
    </div>
  ) : (
    <img
      src="/nawal.jpg"
      alt="Nawal El Khatib"
      onError={() => setErrored(true)}
      className="w-64 h-80 sm:w-72 sm:h-[400px] lg:w-[360px] lg:h-[460px] rounded-[12px] object-cover block"
    />
  )
}

function FilmItem({ src }) {
  return (
    <div className="flex-shrink-0">
      <img
        src={src}
        alt=""
        className="w-56 h-32 rounded-xl object-cover"
      />
    </div>
  )
}

function SkillGroup({ title, skills, variant }) {
  const pillClass =
    variant === 'purple'
      ? 'bg-violet-50 text-violet-700 border border-violet-100'
      : 'bg-stone-100 text-stone-600 border border-stone-200'

  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400 mb-3">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <span key={s} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${pillClass}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
