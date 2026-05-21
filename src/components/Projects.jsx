import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Megaphone, ArrowUp, ArrowDown } from 'lucide-react'

// ─── Project data ─────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title:     'Comparative Analysis of Three Cloud Platforms',
    tools:     ['AWS', 'Azure', 'GCP', 'Technical Research'],
    bullets: [
      'Compared AWS, Azure, and GCP across core services',
      'Recommended best-fit platform based on client needs',
    ],
  },
  {
    title:     'Retail Inventory Database Project',
    tools:     ['SQL', 'ERD', 'Data Normalization'],
    bullets: [
      'Built a relational database to track products, suppliers, and sales',
      'Designed ERD and wrote SQL queries for inventory control and sales analysis',
    ],
  },
  {
    title:     'Dealer and Trade Show Event Planning',
    tools:     ['Monday.com', 'Budget Management', 'Cross-functional Coordination'],
    bullets: [
      'Planned dealer activations, trade shows, and product launches across Canada',
      'Managed full event budgets from vendor negotiations to post-event reporting',
      'Coordinated cross-functional timelines using Monday.com',
    ],
  },
  {
    title:     'AI Integration and Creative Content Initiative',
    tools:     ['Adobe Creative Suite', 'CapCut', 'Claude AI', 'Content Strategy'],
    bullets: [
      'Introduced Claude AI to the marketing team before end of co-op',
      'Identified workflows where AI could streamline content creation and reporting',
      'Laid groundwork for AI-assisted marketing initiatives going forward',
    ],
  },
  {
    title:      'B2B Marketing Campaign Management',
    tools:      ['Google Ads', 'Amazon Ads', 'Power BI', 'Jira', 'Google Analytics'],
    showStats:  true,
    bullets: [
      'Managed Google Ads and Amazon B2B campaigns while optimizing targeting and ad spend',
      'Tracked Agile deliverables through Jira and reported insights using Power BI and Google Analytics',
    ],
  },
]

// ─── Stats data ───────────────────────────────────────────────────────────────

const STATS = [
  { to: 9700, format: (n) => n.toLocaleString(), label: 'Total Followers',   subtext: '+850 since Sept 2025' },
  { to: 15,   format: (n) => `${n}%`,            label: 'Engagement Rate',   subtext: '+1.5% increase'       },
  { to: 1850000, format: (n) => n >= 1000000 ? `${(n / 1000000).toFixed(2)}M` : `${Math.floor(n / 1000)}K`, label: 'Total Impressions', subtext: '+254K from September' },
]

// ─── Card animation ───────────────────────────────────────────────────────────

const cardAnim = (delay = 0) => ({
  initial:     { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay },
})

// ─── Main component ───────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-br from-violet-50/20 to-white pt-6 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gradient-to-r from-violet-600 to-purple-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="mt-3 text-stone-500 text-base leading-relaxed whitespace-nowrap">
            Projects I've built, experiments I've run, and problems I've loved solving.
          </p>
        </motion.div>

        {/* Cards grid — 3-col on lg, 2-col on md */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              {...cardAnim(i * 0.07)}
              className={project.showStats ? 'col-span-2 lg:col-span-1 lg:row-span-2 lg:flex lg:flex-col' : ''}
            >
              <ProjectCard project={project} tall={project.showStats} />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-stone-500 text-base font-medium mb-4 tracking-wide">
            Want to learn more? Connect with me below
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="flex justify-center"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-violet-400 hover:text-violet-600 transition-colors duration-200"
              aria-label="Scroll to contact"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, tall = false }) {
  return (
    <article className={`group flex flex-col bg-white rounded-3xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-violet-200 hover:shadow-violet-100/40 transition-all duration-300 hover:-translate-y-1${tall ? ' h-full' : ''}`}>
      <div className="flex flex-col flex-1 p-4 sm:p-6 gap-4">

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tools.map((tag) => (
            <span
              key={tag}
              className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-violet-50 text-violet-600 border border-violet-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + bullets */}
        <div className="flex-1">
          <h3 className="text-[10px] sm:text-base font-black text-stone-900 mb-2 sm:mb-3 group-hover:text-violet-700 transition-colors leading-snug">
            {project.title}
          </h3>
          <ul className="flex flex-col gap-1 sm:gap-2">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-1.5 sm:gap-2.5 text-[10px] sm:text-sm text-stone-500 leading-relaxed">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-[4px] sm:mt-[6px]" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Embedded social stats — B2B card only */}
        {project.showStats && <MiniStatsBanner />}
      </div>
    </article>
  )
}

// ─── Mini stats banner (embedded inside B2B card) ─────────────────────────────

function MiniStatsBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-violet-950 to-purple-900 p-3 sm:p-5 mt-1">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Label */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
          <Megaphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/50" />
          <p className="text-white/50 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">
            Social Media Growth · Kyocera
          </p>
        </div>

        {/* Counters */}
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1.5 sm:gap-3">
          {STATS.map((stat, i) => (
            <StatCounter key={i} stat={stat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Animated counter ─────────────────────────────────────────────────────────

function StatCounter({ stat, delay = 0 }) {
  const [val, setVal]  = useState(0)
  const ref            = useRef(null)
  const inView         = useInView(ref, { once: true, margin: '-30px' })

  useEffect(() => {
    if (!inView) return
    const DURATION  = 1800 + delay * 300
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / DURATION, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(eased * stat.to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, stat.to, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 + delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0.5"
    >
      <div className="flex items-end gap-0.5 flex-shrink-0">
        <span className="text-base sm:text-xl font-black text-white tabular-nums leading-none">
          {stat.format(val)}
        </span>
        <ArrowUp className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-400 mb-0.5" />
      </div>
      <div className="flex flex-col gap-0 sm:gap-0.5">
        <p className="text-white/60 text-[8px] sm:text-[10px] font-semibold leading-tight">{stat.label}</p>
        <p className="text-emerald-400 text-[8px] sm:text-[10px] font-medium">{stat.subtext}</p>
      </div>
    </motion.div>
  )
}
