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
  'Wix', 'Figma', 'Monday CRM', 'Jira', 'Power BI',
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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-4 sm:pt-6 sm:pb-20">
        <div className="grid grid-cols-2 gap-3 sm:gap-14 lg:gap-20 items-start sm:items-stretch">

          {/* ── LEFT: text ── */}
          <div className="flex flex-col gap-2 sm:gap-8">

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.04)}
              className="text-2xl sm:text-6xl lg:text-8xl font-black text-stone-900 leading-[1.0] tracking-tight"
            >
              Nawal
              <br />
              <span className="gradient-text">El Khatib</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.div {...fadeUp(0.12)} className="flex flex-col gap-1 sm:gap-1.5">
              <div className="flex items-start gap-1 sm:gap-2 text-stone-600">
                <Library className="w-3 h-3 sm:w-4 sm:h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                <p className="text-[10px] sm:text-base font-semibold tracking-wide">
                  Business Technology<br className="sm:hidden" />Management Co-Op Student
                </p>
              </div>
              <div className="flex items-start gap-1 sm:gap-2 text-stone-500">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                <p className="text-[9px] sm:text-sm font-medium tracking-wide">
                  Toronto Metropolitan University<br />
                  <span className="text-stone-400 font-normal">(Previously known as: Ryerson University)</span>
                </p>
              </div>
            </motion.div>

            {/* Bio — hidden on mobile */}
            <motion.p
              {...fadeUp(0.18)}
              className="hidden sm:block text-[15px] text-stone-600 leading-[1.8]"
            >
              Driven by a passion for the intersection of business and technology, I
              actively seek diverse experiences across industries to identify where I can
              make the greatest impact. With hands-on expertise in marketing, data
              analysis, conference leadership, and lead generation, I bring a strong drive
              toward automation and AI-driven solutions. Outside of work and academics, I
              enjoy snowboarding, bouldering, hiking, and staying active.
            </motion.p>

            {/* CTA buttons — hidden on mobile */}
            <motion.div {...fadeUp(0.24)} className="hidden sm:flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="/Nawal%20ElKhatib's%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <Button variant="outline" size="lg" onClick={handleConnect} className="w-full sm:w-auto gap-2">
                Let's Connect
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

          </div>

          {/* ── RIGHT: profile photo ── */}
          <motion.div
            className="flex justify-end items-start sm:items-stretch"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative sm:h-full">
              <ProfilePhoto />

              {/* Floating card — top right */}
              <motion.div
                className="absolute -top-2 sm:-top-5 -right-1 sm:-right-5 bg-gradient-to-br from-violet-600 to-purple-500 rounded-xl sm:rounded-2xl shadow-xl px-2 sm:px-4 py-1.5 sm:py-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[7px] sm:text-[10px] text-violet-200 font-semibold uppercase tracking-widest mb-0">Available for</p>
                <p className="text-[9px] sm:text-sm font-black text-white leading-tight">Fall 2026 +<br className="sm:hidden" />Winter 2027</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile-only CTA buttons (below the hero grid) ── */}
        <motion.div
          {...fadeUp(0.28)}
          className="flex sm:hidden flex-col gap-3 mt-4"
        >
          <a
            href="/Nawal%20ElKhatib's%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button size="lg" className="w-full gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
          <Button variant="outline" size="lg" onClick={handleConnect} className="w-full gap-2">
            Let's Connect
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* ── Skills — full-width below the grid ── */}
        <motion.div
          {...fadeUp(0.30)}
          className="mt-6 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-200"
        >
          <div className="flex flex-col sm:flex-row gap-8">
            <SkillGroup title="Technical Skills" skills={TECHNICAL} variant="purple" mobileLimit={8} />
            <div className="hidden sm:block w-px bg-stone-200 self-stretch" />
            <SkillGroup title="People Skills" skills={PEOPLE} variant="stone" mobileLimit={5} />
          </div>
        </motion.div>

      </div>

      {/* ── Full-width hobby filmstrip ── */}
      <motion.div
        className="overflow-hidden mt-0 sm:mt-6 bg-gray-900 py-5"
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
    <div className="w-36 h-44 sm:w-72 sm:h-full lg:w-[360px] rounded-[12px] bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
      <span className="text-3xl sm:text-6xl font-black gradient-text">NE</span>
    </div>
  ) : (
    <img
      src="/nawal.jpg"
      alt="Nawal El Khatib"
      onError={() => setErrored(true)}
      className="w-36 h-44 sm:w-72 sm:h-full lg:w-[360px] rounded-[12px] object-cover object-top block"
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

function SkillGroup({ title, skills, variant, mobileLimit }) {
  const [expanded, setExpanded] = useState(false)

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
        {skills.map((s, i) => (
          <span
            key={s}
            className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${pillClass}${mobileLimit && i >= mobileLimit && !expanded ? ' hidden sm:inline-flex' : ''}`}
          >
            {s}
          </span>
        ))}
      </div>
      {mobileLimit && skills.length > mobileLimit && (
        <button
          className="sm:hidden mt-2 text-[10px] font-semibold text-violet-500 hover:text-violet-700 transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '▲ Show less' : `▼ +${skills.length - mobileLimit} more`}
        </button>
      )}
    </div>
  )
}
