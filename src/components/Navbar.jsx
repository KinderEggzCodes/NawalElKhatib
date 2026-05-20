import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About Me',      id: 'about'      },
  { label: 'Experience',    id: 'experience' },
  { label: 'My Projects',   id: 'projects'   },
  { label: "Let's Connect", id: 'contact'    },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ onLogoClick, onNavClick }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id) })
      },
      { threshold: 0.25 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (id) => {
    if (onNavClick) { onNavClick(id); return }
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <motion.header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-stone-100 shadow-sm'
          : 'bg-transparent',
      ].join(' ')}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onLogoClick ? onLogoClick() : scrollTo('about')}
              className="text-base font-black tracking-tight text-stone-900 hover:text-violet-600 transition-colors duration-200"
            >
              Nawal El Khatib
            </button>
            <span className="hidden sm:flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Work
            </span>
          </div>

          {/* ── Desktop links ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="relative text-sm font-medium text-stone-600 hover:text-violet-600 transition-colors duration-200 group py-1"
              >
                {label}
                <span
                  className={[
                    'absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-violet-600 to-purple-500 transition-all duration-300',
                    activeId === id ? 'w-full' : 'w-0 group-hover:w-full',
                  ].join(' ')}
                />
              </button>
            ))}
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 -mr-2 text-stone-600 hover:text-violet-600 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-stone-100 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-emerald-700">Open to Work</span>
              </div>
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className="text-sm font-semibold text-stone-700 hover:text-violet-600 transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}