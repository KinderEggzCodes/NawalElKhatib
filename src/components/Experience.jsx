import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import ScrollPrompt from './ScrollPrompt'

// ── Work experience data ──────────────────────────────────────────────────────

const EXPERIENCES = [
  {
    company:  'Kyocera Document Solutions Ltd.',
    role:     'Marketing Co-Op',
    period:   'Sep 2025 to Apr 2026',
    location: 'Mississauga, ON',
    logo:     '/kyocera.jpeg',
    initials: 'KD',
    bullets: [
      'Secured Claude AI adoption with Director of Marketing, building custom Artifacts/skills to standardize branded content workflows',
      'Restructured lead generation Excel database and presented performance analysis via Power BI and Claude AI',
      'Optimized Amazon Brand Store collateral and conducted keyword analysis to improve B2B lead generation',
      'Managed email marketing campaigns via Mailchimp, segmenting dealer and partner lists to support product launches and activations',
      'Coordinated 3 partner events, dealer activations, and product launches cross-functionally via Monday CRM',
      'Collaborated with a Spain-based creative agency via Jira, managing sprint cycles to deliver marketing content/collaterals on schedule',
      'Deployed Veed and CapCut for avatar-led videos and French translations for Quebec dealer communications',
    ],
  },
  {
    company:  'SOIL Jewelry',
    role:     'Public Relations Specialist',
    period:   'Jan 2022 to Dec 2025',
    location: 'Toronto, ON',
    logo:     '/soil.jpeg',
    initials: 'TS',
    bullets: [
      'Handled sponsorship outreach, building partnerships with influencers and brands by leveraging Excel for tracking performance',
      'Produced high-quality photos for the website and over 200 social media video ads, increasing user engagement by over 60%',
      'Managed and organized 40+ pop-up events while addressing customer inquiries',
      'Coordinated 5+ photoshoots, collaborating with photographers, models, and stylists',
    ],
  },
  {
    company:  'PVH Calvin Klein',
    role:     'Floor Expert and Sales Associate',
    period:   'Jun 2022 to May 2025',
    location: 'Milton, ON',
    logo:     '/ck.jpeg',
    initials: 'CK',
    bullets: [
      "Provided elite customer service at Canada's top-performing high-volume location, achieving a 95% satisfaction rating and driving monthly sales increases of 20%",
      'Closed and opened registers, processing 200 transactions daily while ensuring excellent customer service during peak hours',
      'Maintained merchandise presentation, trained 20+ new employees, and guided them on store standards for corporate visits',
      'Collaborated with team members to optimize store layout and inventory processes',
    ],
  },
  {
    company:  'Night Market Toronto',
    role:     'Food Market Ambassador',
    period:   'Jun 2020 to Aug 2021',
    location: 'Toronto, ON',
    logo:     null,
    initials: 'NM',
    bullets: [
      'Provided customer service to 1,000+ attendees and 30+ on-site vendors',
      'Led 8 new volunteers through site operations',
      'Engaged attendees to promote vendor products, resulting in increased sales',
    ],
  },
  {
    company:  'ReGen Thrift',
    role:     'Retail and Food Bank Employee',
    period:   'May 2021 to Sep 2021',
    location: 'Brampton, ON',
    logo:     null,
    initials: 'RT',
    bullets: [
      'Managed retail duties contributing to a 15% increase in satisfaction',
      'Collaborated with a team of 5 to design an efficient store layout',
      'Engaged with 100+ financially vulnerable individuals',
    ],
  },
]

const ROWS = [
  EXPERIENCES.slice(0, 2),
  EXPERIENCES.slice(2, 4),
  EXPERIENCES.slice(4, 5),
]

// ── Leadership data ───────────────────────────────────────────────────────────

const LEADERSHIP = [
  {
    org:      'Ted Rogers Finance Society',
    role:     'Conference Associate',
    period:   'Jun 2024 to Apr 2026',
    location: 'Toronto, ON',
    logo:     '/trfs.jpeg',
    initials: 'TR',
    links: [
      { label: 'Website',       url: 'https://tedrogersfinance.ca/' },
      { label: 'Battle on Bay', url: 'https://battleonbay.ca/'      },
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
  '/bob.jpg',
  '/girls.jpg',
  '/winning%20team.jpg',
  '/pannel.jpg',
  '/team.jpg',
  '/speaker.jpg',
]

// ── Animation helpers ─────────────────────────────────────────────────────────

const cardAnim = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay },
})

const rowAnim = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay },
})

const tabContent = {
  initial:   { opacity: 0, y: 16 },
  animate:   { opacity: 1, y: 0,  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:      { opacity: 0, y: -10, transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] } },
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Experience() {
  const [tab, setTab] = useState('work')

  return (
    <section id="experience" className="bg-slate-50 pt-14 pb-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gradient-to-r from-violet-600 to-purple-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600">
              My Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10 gradient-text">Experience</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-3 bg-violet-100 rounded-full -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex gap-2 mb-12 bg-white rounded-2xl p-1.5 border border-stone-200 w-fit shadow-sm mx-auto"
        >
          <TabButton active={tab === 'work'} onClick={() => setTab('work')}>
            Work Experience
          </TabButton>
          <TabButton active={tab === 'leadership'} onClick={() => setTab('leadership')}>
            Beyond the Classroom
          </TabButton>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {tab === 'work' ? (
            <motion.div key="work" {...tabContent}>
              <WorkTab />
            </motion.div>
          ) : (
            <motion.div key="leadership" {...tabContent}>
              <LeadershipTab />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <ScrollPrompt label="My Projects" targetId="projects" />
    </section>
  )
}

// ── Tab button ────────────────────────────────────────────────────────────────

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={[
        'px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-200',
        active
          ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-sm'
          : 'text-stone-500 hover:text-violet-600',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

// ── Work tab ──────────────────────────────────────────────────────────────────

function WorkTab() {
  return (
    <div className="space-y-0">
      <motion.div {...rowAnim(0)} className="grid md:grid-cols-2 gap-6 items-stretch">
        {ROWS[0].map((exp, i) => <ExperienceCard key={i} exp={exp} delay={i * 0.08} />)}
      </motion.div>

      <SnakeCurve direction="right" />

      <motion.div {...rowAnim(0.05)} className="grid md:grid-cols-2 gap-6 items-stretch">
        {ROWS[1].map((exp, i) => <ExperienceCard key={i} exp={exp} delay={i * 0.08} />)}
      </motion.div>

      <SnakeCurve direction="left" />

      <motion.div {...rowAnim(0.05)} className="grid md:grid-cols-2 gap-6">
        {ROWS[2].map((exp, i) => <ExperienceCard key={i} exp={exp} delay={0} />)}
      </motion.div>
    </div>
  )
}

// ── Leadership tab ────────────────────────────────────────────────────────────

function LeadershipTab() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {LEADERSHIP.map((item, i) => (
          <motion.div key={i} {...cardAnim(i * 0.12)} className="h-full">
            <div className="h-full bg-gradient-to-br from-violet-50/50 to-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-violet-200 hover:shadow-violet-100/50 transition-all duration-300 group flex flex-col">

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

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {INITIATIVE_PHOTOS.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            className="w-full h-44 rounded-2xl object-cover"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Snake curve connector ─────────────────────────────────────────────────────

function SnakeCurve({ direction }) {
  return (
    <div className="relative h-10 hidden md:block" aria-hidden="true">
      {direction === 'right' ? (
        <>
          <div
            className="absolute top-0 right-0 h-full border-r-2 border-b-2 border-violet-200 rounded-br-[28px]"
            style={{ width: 'calc(50% + 1px)' }}
          />
          <div
            className="absolute bottom-0 left-0 border-b-2 border-violet-200"
            style={{ width: 'calc(50%)' }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute top-0 left-0 h-full border-l-2 border-b-2 border-violet-200 rounded-bl-[28px]"
            style={{ width: 'calc(50% + 1px)' }}
          />
          <div
            className="absolute bottom-0 right-0 border-b-2 border-violet-200"
            style={{ width: 'calc(50%)' }}
          />
        </>
      )}
    </div>
  )
}

// ── Experience card ───────────────────────────────────────────────────────────

function ExperienceCard({ exp, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className="h-full"
    >
      <div className="h-full bg-white border border-stone-200 rounded-2xl p-5 hover:shadow-lg hover:border-violet-200 hover:shadow-violet-100/50 transition-all duration-300 group flex flex-col">

        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <CompanyLogo src={exp.logo} initials={exp.initials} alt={exp.company} />
            <div className="min-w-0">
              <h3 className="text-sm font-black text-stone-900 group-hover:text-violet-700 transition-colors leading-tight truncate">
                {exp.company}
              </h3>
              <p className="text-xs font-semibold text-violet-600 mt-0.5">{exp.role}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className="flex items-center gap-1 text-[10px] text-stone-500 font-medium whitespace-nowrap">
              <Calendar className="w-2.5 h-2.5" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-stone-400 font-medium whitespace-nowrap">
              <MapPin className="w-2.5 h-2.5" />
              {exp.location}
            </span>
          </div>
        </div>

        <div className="h-px bg-stone-100 mb-4" />

        <ul className="flex flex-col gap-2 flex-1">
          {exp.bullets.map((b, j) => (
            <li key={j} className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-[5px]" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// ── Company logo ──────────────────────────────────────────────────────────────

function CompanyLogo({ src, initials, alt }) {
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

// ── Org logo ──────────────────────────────────────────────────────────────────

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
