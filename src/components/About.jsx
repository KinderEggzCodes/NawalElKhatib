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
      className="bg-gradient-to-br from-white via-amber-50/20 to-amber-50/10"
    >
      {/* ── Full-bleed photo hero ── */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Nawal El Khatib"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Black transparent gradient — keeps text legible over the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />

        {/* Hero text */}
        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl flex-col justify-end px-6 pb-32 pt-28 lg:px-10">

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.04)}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight text-shadow-hero"
          >
            Nawal
            <br />
            El Khatib
          </motion.h1>

          {/* Subheadline */}
          <motion.div {...fadeUp(0.12)} className="mt-4 sm:mt-6 flex flex-col gap-1 sm:gap-1.5">
            <div className="flex items-start gap-1 sm:gap-2">
              <Library className="w-3 h-3 sm:w-4 sm:h-4 text-white/80 flex-shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-base font-semibold tracking-wide text-white text-shadow-hero-sm">
                Business Technology<br className="sm:hidden" />Management Co-Op Student
              </p>
            </div>
            <div className="flex items-start gap-1 sm:gap-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 flex-shrink-0 mt-0.5" />
              <p className="text-[9px] sm:text-sm font-medium tracking-wide text-white/90 text-shadow-hero-sm">
                Toronto Metropolitan University<br />
                <span className="text-white/60 font-normal">(Previously known as: Ryerson University)</span>
              </p>
            </div>
          </motion.div>

          {/* Bio — hidden on mobile */}
          <motion.p
            {...fadeUp(0.18)}
            className="hidden sm:block mt-4 max-w-2xl text-[15px] text-white/85 leading-[1.8] text-shadow-hero-sm"
          >
            Driven by a passion for the intersection of business and technology, I
            actively seek diverse experiences across industries to identify where I can
            make the greatest impact. With hands-on expertise in marketing, data
            analysis, conference leadership, and lead generation, I bring a strong drive
            toward automation and AI-driven solutions. Outside of work and academics, I
            enjoy snowboarding, bouldering, hiking, and staying active.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.24)} className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="/Nawal_El_Khatibs_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
            <Button variant="outline" size="lg" onClick={handleConnect} className="w-full sm:w-auto gap-2 border-white/70 text-white hover:bg-white/10 hover:text-white">
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-4 sm:pt-6 sm:pb-20">
        {/* ── Skills — full-width below the hero ── */}

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
      ? 'bg-amber-50 text-black border border-stone-200'
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
          className="sm:hidden mt-2 text-[10px] font-semibold text-stone-800 hover:text-black transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '▲ Show less' : `▼ +${skills.length - mobileLimit} more`}
        </button>
      )}
    </div>
  )
}
