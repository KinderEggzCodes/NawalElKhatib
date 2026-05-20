import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import ScrollPrompt from './ScrollPrompt'
import PlaceholderImage from './PlaceholderImage'

const LEADERSHIP = [
  {
    org:      'Ted Rogers Finance Society',
    role:     'Conference Associate',
    period:   'Jun 2024 to Apr 2026',
    location: 'Toronto, ON',
    logo:     '/trfs.jpeg',
    initials: 'TR',
    links: [
      { label: 'Website',      url: 'https://tedrogersfinance.ca/' },
      { label: 'Battle on Bay', url: 'https://battleonbay.ca/'     },
    ],
    bullets: [
      'Outreached to over 100 universities to attract student participants and boost event engagement',
      'Secured over 20 in-kind sponsorship items from local and major businesses',
      'Created 10+ marketing materials including social media posts, flyers, and email campaigns',
      'Contacted 100+ industry professionals and invited them to the 18th annual 3-day Battle on Bay conference',
      'Secured and coordinated venues ensuring a professional environment for presentations and networking',
    ],
  },
  {
    org:      'Metropolitan Data Science Association',
    role:     'Director of Corporate Relations',
    period:   'Jun 2024 to Jan 2025',
    location: 'Toronto, ON',
    logo:     '/mdsa.jpeg',
    initials: 'MD',
    links: [
      { label: 'Website', url: 'https://mdsa.ca/' },
    ],
    bullets: [
      'Collaborated with the team to negotiate and close over 5 partnerships with companies like Fidelity, CIBC, and RBC, generating $10,000 in funding',
      'Connected with industry professionals from RBC, Indeed, and KPMG, inviting them to events to boost networking',
      'Participated in a 3-day DataDash Hackathon case competition, developing a solution for sustainable development issues',
      'Presented solutions to 5 corporate representatives',
    ],
  },
]

const INITIATIVE_PHOTOS = [
  { label: 'Conference' },
  { label: 'Networking' },
  { label: 'Events'     },
]

const cardAnim = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Leadership() {
  return (
    <section id="leadership" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gradient-to-r from-violet-600 to-purple-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600">
              Leadership and Extracurriculars
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            <span className="gradient-text">Beyond the Classroom</span>
          </h2>
          <p className="mt-3 text-stone-500 text-base max-w-md leading-relaxed">
            Building communities, securing partnerships, and showing up where it counts.
          </p>
        </motion.div>

        {/* ── Side-by-side initiative cards ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {LEADERSHIP.map((item, i) => (
            <motion.div key={i} {...cardAnim(i * 0.12)} className="h-full">
              <div className="h-full bg-gradient-to-br from-violet-50/50 to-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-violet-200 hover:shadow-violet-100/50 transition-all duration-300 group flex flex-col">

                {/* Logo + header */}
                <div className="flex items-start gap-3 mb-4">
                  <OrgLogo src={item.logo} initials={item.initials} alt={item.org} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-black text-stone-900 group-hover:text-violet-700 transition-colors leading-tight">
                      {item.org}
                    </h3>
                    <p className="text-xs font-semibold text-violet-600 mt-0.5">{item.role}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5">
                      <span className="flex items-center gap-1 text-[10px] text-stone-500 font-medium">
                        <Calendar className="w-2.5 h-2.5" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-stone-400 font-medium">
                        <MapPin className="w-2.5 h-2.5" />
                        {item.location}
                      </span>
                    </div>
                    {/* Website links */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-semibold text-violet-600 hover:text-violet-800 bg-violet-50 hover:bg-violet-100 border border-violet-200 px-2 py-0.5 rounded-full transition-colors duration-150"
                        >
                          <ExternalLink className="w-2.5 h-2.5" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-stone-100 mb-4" />

                {/* Bullets */}
                <ul className="flex flex-col gap-2 flex-1">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-[5px]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Initiative photos ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {INITIATIVE_PHOTOS.map((p, i) => (
            <div key={i} className="flex flex-col gap-2 group">
              <PlaceholderImage
                label={p.label}
                iconSize="md"
                className="w-full h-44 rounded-2xl group-hover:border-violet-300 transition-colors duration-300"
              />
              <p className="text-xs font-semibold text-stone-500 text-center tracking-wide group-hover:text-violet-600 transition-colors">
                {p.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16">
        <ScrollPrompt label="My Projects" targetId="projects" />
      </div>
    </section>
  )
}

// ─── Org logo — same pattern as CompanyLogo in Experience ────────────────────

function OrgLogo({ src, initials, alt }) {
  const [errored, setErrored] = useState(false)

  if (!src || errored) {
    return (
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white text-[10px] font-black flex-shrink-0 shadow-sm">
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="w-9 h-9 rounded-lg object-contain bg-white border border-stone-200 flex-shrink-0 shadow-sm"
    />
  )
}

