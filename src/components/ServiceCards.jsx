import { services } from '../catalog.js'
import SitePreview from './SitePreview.jsx'
export default function ServiceCards({ showPage }) {
  return <div className="grid-3 service-list">{services.map((s, i) => <article className="service-card" key={s.title}>
    {i < 2 ? <div className="service-cover service-demo"><SitePreview project={{ title: s.title, preview: i === 0 ? 'architecture' : 'education' }} /></div> : <img className="service-cover" src="/images/development.png" alt="" loading="lazy" />}
    <div className="service-copy"><span className="eyebrow">0{i + 1}</span><h3>{s.title}</h3><p>{s.desc}</p>
      <ul className="service-highlights">{s.details.map(d => <li key={d}>{d}</li>)}</ul>
      <div className="service-price">Estimativa: {s.price}</div><p className="service-time">{s.time}</p>
      <button className="text-link" onClick={() => showPage('budget')}>Conversar sobre o projeto</button>
    </div></article>)}</div>
}
