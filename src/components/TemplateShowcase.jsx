import { templateContent } from '../templateContent.js'
export default function TemplateShowcase({ project, showPage }) {
  const c = templateContent[project.preview]
  if (!c) return null
  const prefix = `template-${project.id}`
  return <div className="template-experience">
    <button className="text-link template-back" onClick={() => showPage('portfolio')}>Voltar aos modelos</button><div className="template-toolbar"><div><span className="eyebrow">Modelo demonstrativo</span><h2>{project.title}</h2><p>Conteúdo ilustrativo. Personalizamos a identidade e o conteúdo para o seu negócio.</p></div><button className="btn btn-primary" onClick={() => showPage('budget',project.id)}>Quero este estilo</button></div>
    <div className={`template-page template-${project.preview}`}>
      <header className="template-nav"><a href={`#${prefix}-top`} className="template-brand">{c.brand}</a><div><a href={`#${prefix}-services`}>{project.preview === 'hotel' ? 'Acomodações' : project.preview === 'restaurant' ? 'Nossa cozinha' : 'Conheça'}</a><a href={`#${prefix}-about`}>Sobre</a><a href={`#${prefix}-contact`}>Contato</a></div></header>
      <div className="template-hero" id={`${prefix}-top`}><div className="template-hero-copy"><span className="template-eyebrow">{c.eyebrow}</span><h3>{c.title}</h3><p>{c.intro}</p><a className="template-button" href={`#${prefix}-services`}>{c.action}</a></div><div className={`template-photo photo-${project.preview}`} role="img" aria-label={`Imagem ilustrativa para ${project.title}`} /></div>
      <section className="template-services" id={`${prefix}-services`}><div className="template-section-heading"><span className="template-eyebrow">{project.preview === 'education' ? 'Seu percurso' : 'Conheça nossa proposta'}</span><h3>{c.section}</h3></div><div className="template-offerings">{c.items.map(([title,desc],i) => <article key={title}><span className="template-index">0{i+1}</span><h4>{title}</h4><p>{desc}</p><a href={`#${prefix}-contact`}>{project.preview === 'hotel' ? 'Consultar estadia' : 'Saiba mais'}</a></article>)}</div></section>
      {project.preview === 'fitness' && <section className="template-schedule"><h3>Um treino que cabe na rotina.</h3><p>Exemplo de organização de turmas. Os horários são definidos pelo studio.</p><div><span>MANHÃ</span><b>Força e funcional</b><span>TARDE</span><b>Mobilidade e técnica</b><span>NOITE</span><b>Funcional e força</b></div></section>}
      <section className="template-story" id={`${prefix}-about`}><div className={`template-photo photo-${project.preview}`} role="img" aria-label="Detalhe ilustrativo da proposta" /><div><span className="template-eyebrow">Um jeito próprio de fazer</span><h3>{c.story}</h3><p>{c.detail}</p></div></section>
      <section className="template-process"><span className="template-eyebrow">Próximos passos</span><div>{c.steps.map((step,i)=><p key={step}><span>0{i+1}</span>{step}</p>)}</div></section>
      <section className="template-contact" id={`${prefix}-contact`}><span className="template-eyebrow">Vamos conversar</span><h3>{c.closing}</h3><p>Gostou desta direção? A S&M adapta este modelo à sua marca e aos objetivos do seu negócio.</p><button className="template-button" onClick={() => showPage('budget',project.id)}>Quero este estilo para minha empresa</button></section>
      <footer className="template-footer"><strong>{c.brand}</strong><span>Estudo de layout por S&M Digital / Conteúdo demonstrativo</span></footer>
    </div>
  </div>
}
