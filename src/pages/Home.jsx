import Faq from '../components/Faq.jsx'
import ServiceCards from '../components/ServiceCards.jsx'
import ProjectCards from '../components/ProjectCards.jsx'
import { projects } from '../catalog.js'
export default function Home({ showPage }) {
  return <>
    <section id="hero"><div className="container hero-grid">
      <div><div className="tag">S&M Digital / Design e desenvolvimento</div>
        <h1>Seu negócio.<br />Um site à<br /><span className="text-cyan">sua altura.</span></h1>
        <p className="hero-sub">Sites institucionais e landing pages com design cuidadoso, informação clara e espaço para a sua marca crescer.</p>
        <div className="hero-ctas"><button className="btn btn-primary" onClick={() => showPage('budget')}>Vamos criar seu site</button><button className="btn btn-outline" onClick={() => showPage('portfolio')}>Conheça os projetos</button></div>
        <div className="hero-note"><span>São Paulo, SP</span><span>Atendimento em todo o Brasil</span></div>
      </div>
      <figure className="studio-figure"><img src="/images/development.png" alt="Estação de desenvolvimento com editor de código e prévia de um site" fetchPriority="high" /><figcaption><span>Design com intenção.</span><span>Desenvolvimento com cuidado.</span></figcaption><div className="image-label" aria-hidden="true">S&M<br /><span>ESTÚDIO DIGITAL</span></div></figure>
    </div></section>
    <div className="brand-strip"><div className="container"><span>Identidade que se reconhece.</span><span>Experiência que faz sentido.</span><span>Um site que é seu.</span></div></div>
    <section id="about"><div className="container about-grid">
      <div className="brand-panel"><div className="brand-panel-top"><span>S&M DIGITAL</span><span>SÃO PAULO / BRASIL</span></div><div className="brand-monogram" aria-hidden="true">S<span>&</span>M</div><div className="brand-panel-bottom"><p>O seu próximo capítulo<br />começa no digital.</p><span>ESTRATÉGIA<br />DESIGN<br />DESENVOLVIMENTO</span></div></div>
      <div className="about-text"><div className="tag">Sobre a S&M</div><h2>Antes do layout,<br />a gente entende<br />o seu negócio.</h2>
        <p>Somos uma agência de criação de sites em São Paulo. Trabalhamos com empresas que precisam apresentar seus serviços com clareza e tornar o contato com seus clientes mais simples.</p>
        <p>Você acompanha as decisões de estrutura, visual e conteúdo. Assim, o site ganha a identidade da sua empresa e faz sentido para quem vai usá-lo.</p>
        <div className="about-principles"><div><h3>Contato próximo</h3><p>Conversa direta e revisões em cada etapa.</p></div><div><h3>Cuidado na entrega</h3><p>Layout responsivo e orientação para publicar.</p></div></div>
        <button className="text-link" onClick={() => showPage('contact')}>Conheça nossa forma de trabalhar</button>
      </div></div></section>
    <section id="services-preview"><div className="container"><div className="section-header"><div className="tag">Nossos serviços</div><h2>O formato certo<br />para o seu momento.</h2><p>Uma presença completa, uma campanha específica ou o cuidado com o site que já existe.</p></div><ServiceCards showPage={showPage} /><button className="btn btn-outline mt-2" onClick={() => showPage('services')}>Compare os serviços</button></div></section>
    <section id="portfolio-preview"><div className="container"><div className="section-header"><div className="tag">Portfólio</div><h2>Cada negócio tem<br />a sua própria linguagem.</h2><p>Conheça diferentes soluções de design. Os estudos demonstrativos estão identificados; projetos publicados abrem no site original.</p></div><ProjectCards projects={projects.slice(0, 8)} showPage={showPage} /></div></section>
    <section id="process"><div className="container"><div className="section-header"><div className="tag">Como trabalhamos</div><h2>Você participa.<br />A gente cuida da execução.</h2></div><div className="process-editorial">{[
      ['01', 'Uma boa conversa', 'Entendemos o que você oferece, quem deseja alcançar e o que o site precisa fazer.'],
      ['02', 'Estrutura e criação', 'Organizamos as páginas, apresentamos o visual e desenvolvemos o site.'],
      ['03', 'Revisão e publicação', 'Ajustamos com você, verificamos o funcionamento e orientamos os próximos passos.'],
    ].map(([n, title, desc]) => <div key={n}><span className="eyebrow">{n}</span><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section id="faq"><div className="container grid-2"><div><div className="tag">Antes de começar</div><h2>Vamos tirar<br />suas dúvidas.</h2></div><Faq /></div></section>
    <section id="cta-final"><div className="container"><div className="cta-box"><div className="tag">Seu próximo projeto</div><h2>Vamos dar forma<br />à sua ideia?</h2><p>Conte o que você precisa. A gente ajuda a definir o escopo e o investimento.</p><button className="btn btn-cyan" onClick={() => showPage('budget')}>Solicitar orçamento</button></div></div></section>
  </>
}
