import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, Clapperboard, Camera,
  PackageOpen, MessageSquareHeart, Mic, Wand2, ShoppingBag, Play,
  BadgeCheck, Zap, HeartHandshake, Star,
} from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

const NICHES = ['Beauty', 'Skincare', 'Fashion', 'Lifestyle', 'Food', 'Wellness', 'Haircare', 'Travel']

const SERVICES = [
  { icon: PackageOpen,       title: 'Unboxing Videos',      desc: 'First-impression unboxings that make your packaging part of the story.' },
  { icon: Clapperboard,      title: 'Product Demos',        desc: 'Clear, relatable demos showing exactly how your product fits real life.' },
  { icon: MessageSquareHeart, title: 'Testimonials & Reviews', desc: 'Honest-feeling reviews that build trust faster than any script.' },
  { icon: Mic,               title: 'Voiceover Ads',        desc: 'Polished voiceover creatives, ready for paid social and whitelisting.' },
  { icon: Wand2,             title: 'How-To Tutorials',     desc: 'Step-by-step tutorials that teach, entertain, and convert.' },
  { icon: Camera,            title: 'Lifestyle Photography', desc: 'Natural, scroll-stopping photos for feeds, ads, and product pages.' },
  { icon: ShoppingBag,       title: 'GRWM & Vlogs',         desc: 'Day-in-the-life style content where your product shows up organically.' },
  { icon: Sparkles,          title: 'Hooks & Concepts',     desc: 'Scroll-stopping openers and creative angles, tailored to your audience.' },
]

const STEPS = [
  { n: '01', title: 'You send the brief', desc: 'Tell me about your product, your audience, and the vibe you are going for. The looser the brief, the more room for creativity.' },
  { n: '02', title: 'I create & film',    desc: 'I script, shoot, and edit your content in my own authentic style — the kind people actually watch.' },
  { n: '03', title: 'You post & convert', desc: 'You get polished, ready-to-post content with full usage rights. Then we watch it work.' },
]

const PLACEHOLDER_WORK = [
  { niche: 'Beauty',    title: 'Your video here' },
  { niche: 'Skincare',  title: 'Your video here' },
  { niche: 'Fashion',   title: 'Your video here' },
  { niche: 'Food',      title: 'Your video here' },
  { niche: 'Lifestyle', title: 'Your video here' },
  { niche: 'Wellness',  title: 'Your video here' },
]

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`h-px w-10 ${light ? 'bg-stone-400' : 'bg-stone-900'}`} />
      <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${light ? 'text-stone-400' : 'text-stone-900'}`}>
        {children}
      </span>
    </div>
  )
}

export default function UgcPage() {
  const navigate = useNavigate()
  const goBack = () => navigate('/')
  const workWithMe = () => navigate('/contact', { state: { from: '/ugc' } })
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const scrollToWork = () =>
    document.getElementById('ugc-work')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-[#f5f3ea] text-stone-900 overflow-x-hidden">

      {/* ── Minimal header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3ea]/90 backdrop-blur-lg border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
          <span className="text-base font-black tracking-tight">
            Nawal <span className="gradient-text">El Khatib</span>
          </span>
          <button
            onClick={workWithMe}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-black transition-colors"
          >
            Work With Me
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="w-8 sm:hidden" />
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <Eyebrow>UGC Creator — Toronto</Eyebrow>
            </motion.div>
            <motion.h1
              {...fadeUp(0.06)}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-6"
            >
              Real content for brands people <span className="gradient-text">trust.</span>
            </motion.h1>
            <motion.p
              {...fadeUp(0.12)}
              className="text-base sm:text-lg text-stone-600 leading-relaxed mb-4 max-w-lg"
            >
              I'm Nawal, a Toronto-based UGC creator just getting started — and I'm
              looking for my first brand partners.
            </motion.p>
            <motion.p
              {...fadeUp(0.16)}
              className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-lg"
            >
              Authentic, scroll-stopping videos and photos made for TikTok, Reels,
              and paid ads. No stiff scripts, no fake energy — just content that
              feels like it came from a friend.
            </motion.p>
            <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={workWithMe}
                className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-black transition-colors"
              >
                Work With Me
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 border-2 border-stone-900 text-stone-900 font-semibold px-8 py-3.5 rounded-full hover:bg-stone-900 hover:text-white transition-colors"
              >
                <Play className="w-4 h-4" />
                See My Work
              </button>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.15)} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 bg-stone-900/5 rounded-[2rem] rotate-3" />
            <img
              src="/hero.jpg"
              alt="Nawal El Khatib"
              className="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-2xl -rotate-2"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="inline-flex items-center gap-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                Open for collaborations
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Niche marquee ── */}
      <div className="overflow-hidden bg-stone-900 py-4 -rotate-1 scale-[1.02] my-4">
        <div className="flex w-max animate-scroll-left gap-8 pr-8">
          {[...NICHES, ...NICHES].map((niche, i) => (
            <span key={i} className="flex items-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-stone-100 whitespace-nowrap">
              {niche}
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section className="py-20 sm:py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <motion.div {...fadeUp(0)}>
              <Eyebrow>Why me</Eyebrow>
            </motion.div>
            <motion.h2 {...fadeUp(0.06)} className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              A creator, <span className="gradient-text">not a billboard.</span>
            </motion.h2>
            <motion.div {...fadeUp(0.12)} className="space-y-4 text-stone-600 leading-relaxed max-w-lg">
              <p>
                I'm starting my UGC journey with fresh eyes and a marketer's brain.
                By day I work in brand marketing — so I don't just film pretty
                videos, I think about who is watching and what makes them buy.
              </p>
              <p>
                Every piece of content is made to feel native to the feed: the kind
                of video you'd stop for even if you didn't know it was an ad.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            {[
              { icon: HeartHandshake, title: 'Authentic on camera', desc: 'Natural delivery that feels like a recommendation from a friend.' },
              { icon: Zap,            title: 'Quick turnaround',   desc: 'Brief to final cut in days, not weeks — without cutting corners.' },
              { icon: BadgeCheck,     title: 'Strategy-minded',    desc: 'A marketing background means your content is built to convert.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.08 + i * 0.06)}
                className="flex gap-4 bg-white/60 border border-stone-200 rounded-2xl p-5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-stone-900 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="ugc-work" className="py-20 sm:py-28 px-6 lg:px-10 bg-white/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-stone-900" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900">Portfolio</span>
              <div className="h-px w-10 bg-stone-900" />
            </div>
          </motion.div>
          <motion.h2 {...fadeUp(0.06)} className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-4">
            My <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-center text-stone-600 max-w-md mx-auto mb-12">
            Fresh page, fresh start — this is where my brand collaborations will
            live. Check back soon.
          </motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PLACEHOLDER_WORK.map(({ niche, title }, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.05)}
                className="group relative aspect-[3/4] rounded-2xl border-2 border-dashed border-stone-300 bg-stone-100/60 flex flex-col items-center justify-center gap-3 p-6 text-center hover:border-stone-500 transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-stone-900 text-white px-3 py-1 rounded-full">
                  {niche}
                </span>
                <Clapperboard className="w-8 h-8 text-stone-400" />
                <p className="text-sm font-semibold text-stone-500">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 sm:py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Services</Eyebrow>
          </motion.div>
          <motion.h2 {...fadeUp(0.06)} className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            What I <span className="gradient-text">create</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-stone-600 max-w-xl mb-12">
            Available in organic and paid ad style. Every project is quoted
            individually — tell me what you need.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.04 + i * 0.04)}
                className="bg-white/60 border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-stone-900 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three hooks band ── */}
      <section className="bg-stone-900 text-white py-20 sm:py-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-stone-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">My signature offer</span>
            <div className="h-px w-10 bg-stone-400" />
          </motion.div>
          <motion.h2 {...fadeUp(0.06)} className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            One video, <span className="gradient-text-light">three hooks.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.12)} className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
            The first three seconds decide everything. Every video package includes
            three different opening hooks, so you can test them against each other
            and find the one your audience can't scroll past. You get three videos
            for barely more effort than one — a win for both of us.
          </motion.p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 sm:py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>How it works</Eyebrow>
          </motion.div>
          <motion.h2 {...fadeUp(0.06)} className="text-4xl sm:text-5xl font-black tracking-tight mb-12">
            Simple <span className="gradient-text">process</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {STEPS.map(({ n, title, desc }, i) => (
              <motion.div
                key={n}
                {...fadeUp(0.06 + i * 0.08)}
                className="relative bg-white/60 border border-stone-200 rounded-2xl p-8"
              >
                <span className="font-display text-6xl font-black text-stone-200">{n}</span>
                <h3 className="font-bold text-xl mt-2 mb-2">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials (placeholder) ── */}
      <section className="py-20 sm:py-28 px-6 lg:px-10 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-stone-900" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900">Kind words</span>
              <div className="h-px w-10 bg-stone-900" />
            </div>
          </motion.div>
          <motion.h2 {...fadeUp(0.06)} className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-12">
            Love <span className="gradient-text">notes</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                {...fadeUp(0.06 + i * 0.08)}
                className="border-2 border-dashed border-stone-300 rounded-2xl p-8 text-center flex flex-col items-center gap-3"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-stone-300" />
                  ))}
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Your brand's kind words could be here — let's make something worth raving about.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rate card CTA ── */}
      <section className="bg-stone-900 text-white py-24 sm:py-32 px-6 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-stone-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
              Let's work together
            </span>
            <div className="h-px w-10 bg-stone-400" />
          </motion.div>
          <motion.h2 {...fadeUp(0.08)} className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
            Let's make something <span className="gradient-text-light">scroll-stopping.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.14)} className="text-stone-300 leading-relaxed mb-10 max-w-xl mx-auto">
            Every brand is different, so every package is custom. Contact me for
            my rate card and let's build something that fits your goals.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <button
              onClick={workWithMe}
              className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-10 py-4 rounded-full hover:bg-stone-200 transition-colors"
            >
              Get My Rate Card
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-stone-900 text-white border-t border-stone-800 px-6 lg:px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-400">© 2026 Nawal El Khatib — UGC Creator</p>
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </footer>
    </div>
  )
}
