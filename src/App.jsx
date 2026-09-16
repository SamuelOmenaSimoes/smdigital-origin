import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Budget from './pages/Budget.jsx'
import Contact from './pages/Contact.jsx'
import English from './pages/English.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  const [selectedProject, setSelectedProject] = useState(null)
  useEffect(() => { document.documentElement.lang = page === 'english' ? 'en' : 'pt-BR' }, [page])

  const showPage = (id, project = null) => {
    setSelectedProject(project)
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Nav showPage={showPage} page={page} />

      <div id="page-home" className={`page${page === 'home' ? ' active' : ''}`}>
        <Home showPage={showPage} />
      </div>

      <div id="page-services" className={`page${page === 'services' ? ' active' : ''}`}>
        <Services showPage={showPage} />
      </div>

      <div id="page-portfolio" className={`page${page === 'portfolio' ? ' active' : ''}`}>
        <Portfolio showPage={showPage} selectedProject={selectedProject} />
      </div>

      <div id="page-budget" className={`page${page === 'budget' ? ' active' : ''}`}>
        <Budget selectedTemplateId={selectedProject} />
      </div>

      <div id="page-contact" className={`page${page === 'contact' ? ' active' : ''}`}>
        <Contact showPage={showPage} />
      </div>

      <div id="page-english" className={`page${page === 'english' ? ' active' : ''}`}>
        <English showPage={showPage} />
      </div>

      <Footer showPage={showPage} english={page === 'english'} />
    </>
  )
}
