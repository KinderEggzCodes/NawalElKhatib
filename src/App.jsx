import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactPage from './pages/ContactPage'
import UgcPage from './pages/UgcPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

// The UGC subdomain serves the UGC page as its homepage.
const isUgcSubdomain =
  typeof window !== 'undefined' && window.location.hostname === 'ugc.nawalelkhatib.ca'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={isUgcSubdomain ? <UgcPage /> : <HomePage />} />
        <Route path="/ugc" element={<UgcPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={isUgcSubdomain ? <UgcPage /> : <HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
