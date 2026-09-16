import { BUDGETS, ESTIMATES, canSelectType } from './budgetRules.js'
export const QUESTIONS = [
  { key:'budget', title:'Qual faixa de investimento você considera?', options:BUDGETS },
  { key:'type', title:'O que você precisa?', options:[{value:'lp',label:'Landing page — uma página'},{value:'institucional',label:'Site institucional — várias páginas'},{value:'ecommerce',label:'Loja virtual — avaliar com a agência'},{value:'nao-sei',label:'Quero ajuda para escolher'}] },
  { key:'sector', title:'Qual é o segmento da sua empresa?', options:['Saúde','Arquitetura e construção','Gastronomia','Educação','Jurídico','Fitness','Hospedagem e turismo','Veterinária','Estética','Imobiliário','Tecnologia','Outros serviços'].map(label=>({value:label,label})) },
  { key:'goal', title:'Qual é o principal objetivo?', options:[{value:'apresentar',label:'Apresentar a empresa'},{value:'contatos',label:'Receber contatos pelo WhatsApp'},{value:'campanha',label:'Divulgar uma campanha ou oferta'},{value:'vendas',label:'Vender produtos online'},{value:'orientacao',label:'Quero orientação'}] },
  { key:'deadline', title:'Quando você gostaria de começar?', options:[{value:'urgente',label:'O quanto antes — avaliar disponibilidade'},{value:'semanas',label:'Nas próximas semanas'},{value:'planejando',label:'Estou planejando, sem urgência'}] },
  { key:'domain', title:'Já tem domínio (endereço do site)?', options:[{value:'sim',label:'Sim'},{value:'nao',label:'Ainda não'},{value:'ajuda',label:'Não sei / preciso de ajuda'}] },
  { key:'hosting', title:'Já tem hospedagem?', options:[{value:'sim',label:'Sim'},{value:'nao',label:'Ainda não'},{value:'ajuda',label:'Não sei / preciso de ajuda'}] },
  { key:'identity', title:'Já tem logo e identidade visual?', options:[{value:'completa',label:'Sim, já tenho tudo'},{value:'parcial',label:'Tenho apenas o logo'},{value:'nao',label:'Ainda não tenho'}] },
]
export function updateAnswer(answers,key,value) {
  const next={...answers,[key]:value}
  if(key==='budget' && !canSelectType(next.type,value)) next.type=''
  return next
}
export function validateBrief(answers,name,description) {
  if(!name.trim() || name.trim().length>60) return 'Informe seu nome (até 60 caracteres).'
  if(description.length>180) return 'Resuma a empresa em até 180 caracteres.'
  for(const q of QUESTIONS) if(!q.options.some(o=>o.value===answers[q.key])) return 'Marque uma opção em cada pergunta para continuar.'
  if(!canSelectType(answers.type,answers.budget)) return 'Escolha um tipo de projeto compatível com a faixa selecionada.'
  return ''
}
export function briefMessage(answers,name,description,template) {
  const lines=['Olá! Quero conversar sobre um site com a S&M Digital.', '', `*Nome:* ${name.trim() || 'A preencher'}`]
  if(description.trim()) lines.push(`*Sobre a empresa:* ${description.trim().slice(0,180)}`)
  if(template) lines.push(`*Estilo escolhido:* ${template.title} (referência visual, sujeito a personalização)`)
  lines.push('')
  for(const q of QUESTIONS) lines.push(`*${q.title}*`, q.options.find(o=>o.value===answers[q.key])?.label || 'A escolher', '')
  if(ESTIMATES[answers.type]) lines.push(`*Estimativa indicativa:* ${ESTIMATES[answers.type]}`, 'O valor final e o prazo dependem do escopo combinado. Não é uma proposta fechada.', '')
  lines.push('Podemos conversar para definir os detalhes e o próximo passo?')
  return lines.join('\n')
}
export function whatsappUrl(message) { return 'https://wa.me/5511913195079?text='+encodeURIComponent(message) }
