import { useState } from 'react'

const FAQS = [
  {
    q: 'Qual o prazo de entrega?',
    a: 'Landing pages são entregues em 5 a 7 dias úteis. Sites institucionais levam entre 15 e 20 dias úteis, dependendo da complexidade e agilidade nas aprovações.'
  },
  {
    q: 'Preciso ter domínio e hospedagem?',
    a: 'Não necessariamente. Podemos auxiliar na contratação e configuração de domínio e hospedagem. Se você já tem, ótimo — aproveitamos o que você possui.'
  },
  {
    q: 'Vocês criam o conteúdo (textos e imagens)?',
    a: 'Sim. Oferecemos serviço de copywriting e curadoria de imagens. Você pode nos fornecer o conteúdo ou contratar essa parte conosco — temos planos que incluem ambos.'
  },
  {
    q: 'O site aparece no Google?',
    a: 'Todo site que desenvolvemos inclui SEO técnico básico: metatags, velocidade otimizada, sitemap e estrutura semântica. Crescimento orgânico depende também de estratégia de conteúdo.'
  },
  {
    q: 'Consigo editar o site sozinho depois?',
    a: 'Dependendo da tecnologia escolhida, sim. Sites em WordPress permitem edição de conteúdo sem conhecimento técnico. Disponibilizamos treinamento após a entrega.'
  },
  {
    q: 'Quantas revisões estão inclusas?',
    a: 'Incluímos até 2 rodadas de revisão no valor do projeto. Ajustes adicionais são cobrados por hora ou em pacotes mensais de manutenção.'
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <div className="faq-list">
      {FAQS.map((item, i) => (
        <div className="faq-item" key={i}>
          <button aria-expanded={openIndex === i} aria-controls={`faq-answer-${i}`} className={`faq-q${openIndex === i ? ' open' : ''}`} onClick={() => toggle(i)}>
            {item.q}
            <span className="icon">+</span>
          </button>
          <div id={`faq-answer-${i}`} hidden={openIndex !== i} className={`faq-a${openIndex === i ? ' open' : ''}`}>{item.a}</div>
        </div>
      ))}
    </div>
  )
}
