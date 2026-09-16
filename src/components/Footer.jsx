export default function Footer({ showPage, english }) {
  if (english) return <footer lang="en"><div className="container footer-bottom"><p>S&M Digital / São Paulo, Brazil</p><button className="text-link" onClick={() => showPage('home')}>Português</button><p>© 2026 S&M Digital. All rights reserved.</p></div></footer>
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">S<span style={{ color: 'var(--cyan)' }}>&</span>M Digital</div>
            <p>Criamos sites institucionais e landing pages que transformam sua presença digital em resultado real.</p>
          </div>
          <div className="footer-col">
            <h5>Navegação</h5>
            <ul>
              <li><button onClick={() => showPage('home')}>Início</button></li>
              <li><button onClick={() => showPage('services')}>Serviços</button></li>
              <li><button onClick={() => showPage('portfolio')}>Portfólio</button></li>
              <li><button onClick={() => showPage('contact')}>Contato</button></li>
              <li><button onClick={() => showPage('english')}>English</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Serviços</h5>
            <ul>
              <li><button onClick={() => showPage('services')}>Site Institucional</button></li>
              <li><button onClick={() => showPage('services')}>Landing Page</button></li>
              <li><button onClick={() => showPage('services')}>Manutenção</button></li>
              <li><button onClick={() => showPage('budget')}>Orçamento</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contato</h5>
            <ul>
              <li><a href="https://wa.me/5511913195079" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="mailto:smdigitalcontato1@gmail.com">E-mail</a></li>


            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 S&M Digital. Todos os direitos reservados.</p>
          <p>Feito com estratégia, design e código.</p>
        </div>
      </div>
    </footer>
  )
}
