import ServiceCards from '../components/ServiceCards.jsx'
export default function Services({ showPage }) {
  return <><div className="page-hero"><div className="container"><div className="tag">Nossos serviços</div><h1>Clareza no escopo.<br /><span className="text-cyan">Cuidado em cada página.</span></h1><p>Escolha pelo objetivo do seu negócio. As faixas são estimativas. A proposta final considera conteúdo, funcionalidades e integrações.</p></div></div>
    <section><div className="container"><ServiceCards showPage={showPage} /><p className="scope-note">Prazos estimados após o recebimento dos materiais e a aprovação do escopo. Domínio, hospedagem e serviços de terceiros são contratados separadamente.</p></div></section>
    <section className="content-section"><div className="container"><div className="section-header"><div className="tag">Uma escolha prática</div><h2>Qual site você precisa?</h2></div><div className="table-scroll"><table className="compare-table"><thead><tr><th>Seu objetivo</th><th>Site institucional</th><th>Landing page</th></tr></thead><tbody>
      <tr><td>Apresentar a empresa</td><td>Várias páginas para serviços e conteúdo</td><td>Apresentação resumida em uma página</td></tr>
      <tr><td>Divulgar uma oferta</td><td>Parte de uma presença mais ampla</td><td>Foco em uma campanha ou serviço</td></tr>
      <tr><td>Investimento estimado</td><td>R$ 1.900 a R$ 6.000</td><td>R$ 900 a R$ 1.600</td></tr>
      <tr><td>Prazo estimado</td><td>15 a 20 dias úteis</td><td>5 a 7 dias úteis</td></tr>
    </tbody></table></div></div></section>
    <section><div className="container grid-2"><div><div className="tag">Publicação</div><h2>Do primeiro layout<br />ao endereço online.</h2></div><div><h3>Domínio e hospedagem</h3><p className="mt-2">O domínio é o endereço da sua empresa na internet. A hospedagem mantém os arquivos disponíveis. Orientamos a escolha de ambos conforme o projeto.</p><h3 className="mt-2">Depois da entrega</h3><p>A estimativa de manutenção é de R$ 199 a R$ 699/mês, conforme as necessidades. A proposta detalha as horas de alterações, os backups e as atualizações incluídas.</p><button className="btn btn-primary mt-2" onClick={() => showPage('budget')}>Definir meu projeto</button></div></div></section>
  </>
}
