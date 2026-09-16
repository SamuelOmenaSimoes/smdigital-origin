import { useState } from 'react'
import { projects } from '../catalog.js'
import ProjectCards from '../components/ProjectCards.jsx'
import SitePreview from '../components/SitePreview.jsx'
import TemplateShowcase from '../components/TemplateShowcase.jsx'
import { projectUrl } from '../projectConfig.js'
export default function Portfolio({ showPage, selectedProject }) {
  const [filter, setFilter] = useState('Todos')
  const selected = projects.find(p => p.id === selectedProject)
  const filters = ['Todos', ...new Set(projects.map(p => p.sector))]
  return <><div className="page-hero"><div className="container"><div className="tag">Portfólio</div><h1>Ideias que ganham<br /><span className="text-cyan">forma na tela.</span></h1><p>Diferentes nichos, diferentes soluções. Os estudos de layout estão identificados; projetos publicados podem ser visitados no site original.</p></div></div>
    <section><div className="container">
      {selected && !projectUrl(selected.url) && <TemplateShowcase project={selected} showPage={showPage} />}
      {selected && projectUrl(selected.url) && <article className="project-detail" key={selected.id}><div className="detail-preview"><SitePreview project={selected} /></div><div><span className="eyebrow">{projectUrl(selected.url) ? 'Projeto publicado' : 'Estudo demonstrativo'}</span><h2>{selected.title}</h2><p>{selected.desc}</p><p>{selected.category} / {selected.sector}</p>{projectUrl(selected.url) && <a className="btn btn-primary mt-2" href={projectUrl(selected.url)} target="_blank" rel="noopener noreferrer">Visitar site</a>}<button className="btn btn-outline mt-2" onClick={() => showPage('budget')}>Conversar sobre um site</button><button className="text-link mt-2" onClick={() => showPage('portfolio')}>Voltar ao portfólio</button></div></article>}
      <div className="filter-bar" aria-label="Filtrar projetos">{filters.map(f => <button key={f} className={`filter-btn${filter === f ? ' active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}</div>
      <ProjectCards projects={projects.filter(p => filter === 'Todos' || p.sector === filter)} showPage={showPage} />
    </div></section></>
}
