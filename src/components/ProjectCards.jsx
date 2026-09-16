import SitePreview from './SitePreview.jsx'
import { projectUrl } from '../projectConfig.js'
export default function ProjectCards({ projects, showPage }) {
  return <div className="portfolio-grid">{projects.map(p => {
    const url = projectUrl(p.url)
    return <article className="portfolio-card" key={p.id}>
      <div className="portfolio-img"><SitePreview project={p} /></div>
      <div className="portfolio-info"><div className="project-meta"><span>{p.category} / {p.sector}</span><span className="project-status">{url ? 'Publicado' : 'Estudo de layout'}</span></div><h3>{p.title}</h3>
        {url ? <a className="project-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${p.title} (abre em nova aba)`}>Ver projeto <span aria-hidden="true">↗</span></a> : <button className="project-link" onClick={() => showPage('portfolio', p.id)}>Explorar conceito <span aria-hidden="true">→</span></button>}
      </div></article>
  })}</div>
}
