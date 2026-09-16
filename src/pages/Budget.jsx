import { useState } from 'react'
import { BUDGETS, ESTIMATES, canSelectType } from '../budgetRules.js'
import { QUESTIONS, updateAnswer, validateBrief, briefMessage, whatsappUrl } from '../brief.js'
import { projects } from '../catalog.js'
function Choices({question,value,onChange,options}) {
  return <fieldset className={`brief-question${question.key==='sector' ? ' brief-sectors' : ''}`}><legend>{question.title} <span aria-hidden="true">*</span></legend><div className="brief-options">{(options || question.options).map(o=><label className={`brief-choice${value===o.value ? ' selected' : ''}`} key={o.value}><input required type="radio" name={question.key} value={o.value} checked={value===o.value} onChange={()=>onChange(question.key,o.value)} /><span>{o.label}</span></label>)}</div></fieldset>
}
export default function Budget({selectedTemplateId}) {
  const [answers,setAnswers]=useState({})
  const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const [error,setError]=useState('')
  const template=projects.find(p=>p.id===selectedTemplateId)
  const message=briefMessage(answers,name,description,template)
  const onChange=(key,value)=>{setAnswers(prev=>updateAnswer(prev,key,value));setError('')}
  const submit=e=>{e.preventDefault();const issue=validateBrief(answers,name,description);setError(issue);if(!issue) window.location.assign(whatsappUrl(message))}
  const estimate=ESTIMATES[answers.type]
  const lowBudget=answers.budget && !canSelectType('institucional',answers.budget)
  return <><div className="page-hero"><div className="container"><div className="tag">Vamos conversar</div><h1>Seu projeto começa<br /><span className="text-cyan">com algumas escolhas.</span></h1><p>Marque as opções que combinam com sua empresa. Os detalhes, o valor final e o prazo a gente define pelo WhatsApp.</p></div></div>
    <section className="brief-section"><div className="container budget-layout"><form className="form-section brief-form" onSubmit={submit}>
      <h2>Conte o essencial.</h2><p className="brief-intro">Campos com * são obrigatórios. Não precisa ter todas as decisões prontas: você pode pedir orientação.</p>
      {template && <div className="chosen-template"><span>Estilo escolhido</span><strong>{template.title}</strong><p>Vamos considerar esta direção visual na conversa.</p></div>}
      <div className="form-section-title">01 / Projeto e investimento</div>
      {QUESTIONS.slice(0,2).map(q=><Choices key={q.key} question={q} value={answers[q.key]} onChange={onChange} options={q.key==='type' ? q.options.filter(o=>canSelectType(o.value,answers.budget)) : BUDGETS} />)}
      {lowBudget && <p className="brief-note" role="status">Para esta faixa, mostramos landing page e orientação. Sites com várias páginas e lojas exigem uma avaliação de investimento maior.</p>}
      {estimate && <div className="brief-estimate" role="status"><span>Referência de investimento</span><strong>{estimate}</strong><p>Estimativa inicial, não uma proposta fechada. O escopo e o valor final serão combinados na conversa.</p></div>}
      <div className="form-section-title">02 / Sua empresa</div>
      {QUESTIONS.slice(2,5).map(q=><Choices key={q.key} question={q} value={answers[q.key]} onChange={onChange} />)}
      {answers.goal==='vendas' && answers.type!=='ecommerce' && <p className="brief-note" role="status">Venda com carrinho e pagamento online precisa de avaliação específica. Uma landing page pode apresentar a oferta e direcionar o contato, mas não inclui automaticamente uma loja virtual.</p>}
      <div className="form-section-title">03 / O que você já tem</div>
      {QUESTIONS.slice(5).map(q=><Choices key={q.key} question={q} value={answers[q.key]} onChange={onChange} />)}
      <div className="form-section-title">04 / Como podemos chamar você?</div>
      <div className="form-group"><label htmlFor="brief-name">Seu nome *</label><input id="brief-name" className="form-control" autoComplete="name" required maxLength={60} value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome" /></div>
      <div className="form-group"><label htmlFor="brief-description">Uma breve descrição da empresa (opcional)</label><textarea id="brief-description" className="form-control" rows={3} maxLength={180} value={description} onChange={e=>setDescription(e.target.value)} placeholder="Ex.: clínica de fisioterapia que atende adultos em São Paulo." aria-describedby="brief-description-help" /><p id="brief-description-help" className="brief-counter">{description.length}/180 caracteres. Só um resumo; os detalhes ficam para a conversa.</p></div>
      {error && <p role="alert" className="form-error">{error}</p>}
      <button className="btn btn-primary submit-btn" type="submit">Continuar no WhatsApp</button><p className="brief-note">O WhatsApp abrirá com o resumo pronto. Você confirma o envio no aplicativo. Não precisa informar telefone ou e-mail aqui.</p>
    </form><aside className="budget-sidebar"><div className="sidebar-card"><span className="tag">Próximo passo</span><h3>Uma conversa para definir o projeto.</h3><p>Vamos revisar suas escolhas, entender o que falta e preparar uma proposta com escopo e condições claros.</p><ul className="brief-summary"><li>Faixas de investimento indicativas</li><li>Prazo conforme escopo e disponibilidade</li><li>Sem compromisso ao iniciar a conversa</li></ul><a className="text-link" href="https://wa.me/5511913195079" target="_blank" rel="noopener noreferrer">Prefiro falar direto</a></div><details className="sidebar-card brief-message"><summary>Ver resumo da conversa</summary><pre>{message}</pre></details></aside></div></section></>
}
