import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from './ui/button'
import PlaceholderImage from './PlaceholderImage'
import ScrollPrompt from './ScrollPrompt'

const PROJECTS = [
  {
    title:       'Project One',
    description: 'A brief description of what this project does, the problem it solves, and the technologies or skills used. Swap in your real project details here.',
    tags:        ['React', 'Python', 'SQL'],
    liveUrl:     '#',
    githubUrl:   '#',
  },
  {
    title:       'Project Two',
    description: 'A brief description of what this project does, the problem it solves, and the technologies or skills used. Swap in your real project details here.',
    tags:        ['Power BI', 'Excel', 'Analytics'],
    liveUrl:     '#',
    githubUrl:   '#',
  },
  {
    title:       'Project Three',
    description: 'A brief description of what this project does, the problem it solves, and the technologies or skills used. Swap in your real project details here.',
    tags:        ['Figma', 'Adobe XD', 'Marketing'],
    liveUrl:     '#',
    githubUrl:   '#',
  },
]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.16 } },
}

const card = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-orange-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600">
              Featured Work
            </span>
            <div className="h-px w-10 bg-orange-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
            My Portfolio
          </h2>
          <p className="mt-3 text-stone-500 text-base max-w-md mx-auto leading-relaxed">
            Projects I've built, experiments I've run, and problems I've loved solving.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>
      </div>

      <ScrollPrompt label="Let's Connect" targetId="contact" />
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={card}
      className="group flex flex-col bg-white rounded-3xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-400 ease-out hover:-translate-y-1"
    >
      {/* Image placeholder */}
      <PlaceholderImage
        label="Project screenshot"
        iconSize="md"
        className="h-52 rounded-none border-0 border-b border-stone-200 group-hover:border-orange-100 transition-colors"
      />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 border border-orange-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-black text-stone-900 mb-2 group-hover:text-orange-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-stone-500 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2 border-t border-stone-100">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button size="sm" className="w-full gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" />
              View Project
            </Button>
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-1.5">
              <Github className="w-3.5 h-3.5" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </motion.article>
  )
}