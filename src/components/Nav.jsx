import { useState } from 'react'
export default function Nav({ showPage, page }) {
  const [open, setOpen] = useState(false)
  const en = page === 'english'
  const go = (id) => { setOpen(false); showPage(id) }
  const links = en ? [['english', 'Overview'], ['services', 'Services (PT)'], ['portfolio', 'Portfolio (PT)'], ['home', 'PT']] : [['home','Início'],['services','Serviços'],['portfolio','Portfólio'],['contact','Contato'],['english','EN']]
  return <nav aria-label={en ? 'Main navigation' : 'Navegação principal'}><div className="container nav-inner">
    <button className="logo" onClick={() => go(en ? 'english' : 'home')}>S<span>&</span>M Digital</button>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? (en ? 'Close' : 'Fechar') : 'Menu'}</button>
    <ul id="main-menu" className={`nav-links${open ? ' is-open' : ''}`}>{links.map(([id,label]) => <li key={id}><button aria-current={page === id ? 'page' : undefined} onClick={() => go(id)}>{label}</button></li>)}<li>{en ? <a className="nav-cta" href="#english-contact" onClick={() => setOpen(false)}>Get in touch</a> : <button className="nav-cta" onClick={() => go('budget')}>Solicitar orçamento</button>}</li></ul>
  </div></nav>
}
