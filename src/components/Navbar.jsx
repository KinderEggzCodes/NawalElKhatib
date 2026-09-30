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
          ? 'bg-[#f5f3ea]/90 backdrop-blur-lg border-b border-stone-100 shadow-sm'
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
              className={[
                'font-display text-xl font-bold tracking-wide transition-colors duration-200',
                scrolled ? 'text-stone-900 hover:text-stone-600' : 'text-white hover:text-white/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]',
              ].join(' ')}
            >
              Nawal El Khatib
            </button>
            <span className="hidden sm:flex items-center gap-1.5 bg-yellow-50 text-yellow-800 text-[11px] font-bold px-2.5 py-1 rounded-full border border-yellow-200">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              Available January 2027
            </span>
          </div>

          {/* ── Desktop links ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={[
                  'relative text-sm font-medium transition-colors duration-200 group py-1',
                  scrolled ? 'text-stone-950 hover:text-black' : 'text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]',
                ].join(' ')}
              >
                {label}
                <span
                  className={[
                    'absolute -bottom-0.5 left-0 h-[2px] transition-all duration-300',
                    scrolled ? 'bg-stone-900' : 'bg-white',
                    activeId === id ? 'w-full' : 'w-0 group-hover:w-full',
                  ].join(' ')}
                />
              </button>
            ))}
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className={[
              'md:hidden p-2 -mr-2 transition-colors',
              scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-white/80',
            ].join(' ')}
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
            className="md:hidden bg-[#f5f3ea] border-t border-stone-100 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-xs font-bold text-yellow-800">Available January 2027</span>
              </div>
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className="text-sm font-semibold text-stone-700 hover:text-stone-900 transition-colors text-left"
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