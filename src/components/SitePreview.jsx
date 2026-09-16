import { useState } from 'react'
import { projectImage, projectUrl } from '../projectConfig.js'

function Concept({ type }) {
  if (type === 'law') return <div className="mini-site mini-law" aria-hidden="true"><div className="mini-nav"><b>ALMEIDA</b><span>ESCRITÓRIO &nbsp; ATUAÇÃO &nbsp; CONTATO</span></div><div className="law-body"><div><span className="mini-kicker">ADVOCACIA CONSULTIVA</span><strong>Clareza para<br />decidir.<br /><em>Segurança<br />para seguir.</em></strong><div className="mini-button">Conheça o escritório</div></div><div className="mini-photo photo-law" /></div><div className="law-bottom">DIREITO CIVIL &nbsp; / &nbsp; EMPRESARIAL &nbsp; / &nbsp; CONTRATOS</div></div>
  if (type === 'fitness') return <div className="mini-site mini-fitness" aria-hidden="true"><div className="mini-nav"><b>PULSO</b><span>O STUDIO &nbsp; MODALIDADES &nbsp; HORÁRIOS</span></div><div className="fitness-body"><div className="mini-photo photo-fitness" /><div><span className="mini-kicker">MOVIMENTO QUE FAZ PARTE DE VOCÊ.</span><strong>SEU RITMO.<br />SUA FORÇA.<br /><em>SEU PULSO.</em></strong><div className="mini-button">Conheça o studio</div></div></div><div className="fitness-bottom">FORÇA &nbsp; / &nbsp; MOBILIDADE &nbsp; / &nbsp; CONSTÂNCIA</div></div>
  if (type === 'hotel') return <div className="mini-site mini-hotel" aria-hidden="true"><div className="mini-photo photo-hotel" /><div className="mini-nav"><b>brisa</b><span>A CASA &nbsp; ACOMODAÇÕES &nbsp; RESERVAR</span></div><div className="hotel-title"><span>UMA PAUSA PERTO DO MAR</span><strong>Aqui, a vida<br />vai mais devagar.</strong></div><div className="hotel-bottom"><span>ABRA ESPAÇO PARA O DESCANSO.</span><span>Conheça a casa</span></div></div>
  if (type === 'vet') return <div className="mini-site mini-vet" aria-hidden="true"><div className="mini-nav"><b>amigo.</b><span>NOSSO CUIDADO &nbsp; SERVIÇOS</span><div className="mini-button">Fale com a clínica</div></div><div className="vet-body"><div><span className="mini-kicker">CLÍNICA VETERINÁRIA</span><strong>Quem é da família<br />merece todo<br /><em>o cuidado.</em></strong><p>Orientação próxima e atenção<br />em cada fase da vida.</p><div className="mini-button">Conheça os serviços</div></div><div className="mini-photo photo-vet" /></div><div className="vet-bottom"><span>Consultas</span><span>Prevenção</span><span>Acompanhamento</span></div></div>
  if (type === 'architecture') return <div className="mini-site mini-architecture" aria-hidden="true">
    <div className="mini-nav"><b>forma.</b><span>PROJETOS &nbsp; ESTÚDIO &nbsp; CONTATO</span></div>
    <div className="mini-photo photo-architecture"><div className="arch-title"><span>ARQUITETURA PARA VIVER</span><strong>O essencial.<br />Em cada espaço.</strong></div><span className="arch-caption">CASA HORIZONTE / RESIDENCIAL</span></div>
    <div className="arch-bottom"><span>Espaços pensados para a vida.</span><span>Conheça o estúdio</span></div>
  </div>
  if (type === 'restaurant') return <div className="mini-site mini-restaurant" aria-hidden="true">
    <div className="mini-nav"><span>NOSSA CASA &nbsp; MENU</span><b>casa di terra</b><span>RESERVAS</span></div>
    <div className="restaurant-heading"><span>À MESA, O TEMPO DESACELERA.</span><strong>Feito com tempo.<br />Servido com afeto.</strong></div>
    <div className="restaurant-body"><div><span>INGREDIENTES DE VERDADE</span><p>A cozinha que reúne.<br />Os sabores que ficam.</p><div className="mini-button">Conheça nosso menu</div></div><div className="mini-photo photo-restaurant" /></div>
  </div>
  if (type === 'education') return <div className="mini-site mini-education" aria-hidden="true">
    <div className="mini-nav"><b>ofício<span>®</span></b><span>CURSOS &nbsp; A ESCOLA &nbsp; ENTRAR</span></div>
    <div className="education-body"><div><span className="mini-kicker">ESCOLA DE DESIGN & CRIATIVIDADE</span><strong>Ideia boa<br />merece<br /><em>prática.</em></strong><p>Aprenda fazendo.<br />Crie o que só você pode criar.</p><div className="mini-button">Conheça os cursos</div></div><div className="edu-image"><div className="mini-photo photo-education" /><div className="edu-label">DO PRIMEIRO TRAÇO<br />AO SEU PRÓXIMO PROJETO.</div></div></div>
    <div className="edu-bottom">DESIGN GRÁFICO &nbsp; / &nbsp; DIREÇÃO DE ARTE &nbsp; / &nbsp; PROCESSO CRIATIVO</div>
  </div>
  return <div className="mini-site mini-clinic" aria-hidden="true">
    <div className="mini-nav"><b>viva<span> clínica</span></b><span>ESPECIALIDADES &nbsp; NOSSA CLÍNICA</span><div className="mini-button">Agendar consulta</div></div>
    <div className="clinic-body"><div><span className="mini-kicker">MEDICINA COM PROXIMIDADE</span><strong>Cuidar de você.<br />Por inteiro.</strong><p>Escuta atenta, orientação clara<br />e cuidado em cada etapa.</p><div className="mini-button">Encontre seu especialista</div><small>Um espaço para se sentir bem.</small></div><div className="mini-photo photo-clinic" /></div>
    <div className="clinic-bottom"><span>Clínica geral</span><span>Cardiologia</span><span>Dermatologia</span></div>
  </div>
}

export default function SitePreview({ project }) {
  const src = projectImage(project)
  const [failedSrc, setFailedSrc] = useState(null)
  if (src && src !== failedSrc) return <img className="project-screenshot" src={src} alt={`Captura do site ${project.title}`} loading="lazy" onError={() => setFailedSrc(src)} />
  if (projectUrl(project.url)) return <div className="project-placeholder"><span>{project.sector}</span><strong>{project.title}</strong><p>Conheça o projeto no site publicado.</p></div>
  return <div className="site-preview" role="img" aria-label={`Estudo demonstrativo de layout: ${project.title}`}><Concept type={project.preview} /></div>
}
