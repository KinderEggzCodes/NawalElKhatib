import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'contact') {
    return <ContactPage onBack={() => setPage('home')} />
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact onSendMessage={() => setPage('contact')} />
      </main>
    </div>
  )
}
