import test from 'node:test'
import assert from 'node:assert/strict'
import { QUESTIONS, updateAnswer, validateBrief, briefMessage, whatsappUrl } from './brief.js'
const valid = Object.fromEntries(QUESTIONS.map(q=>[q.key,q.options[0].value]))
test('reduzir faixa limpa institucional e loja, preservando landing page',()=>{
  assert.equal(updateAnswer({...valid,type:'institucional'},'budget','ate900').type,'')
  assert.equal(updateAnswer({...valid,type:'ecommerce'},'budget','900-1600').type,'')
  assert.equal(updateAnswer({...valid,type:'lp'},'budget','ate900').type,'lp')
})
test('não saber a faixa mantém escolha e permite pedir orientação',()=>{
  assert.equal(updateAnswer({...valid,type:'institucional'},'budget','nao-sei').type,'institucional')
})
test('validar campos e impedir combinação incompatível ou opção desconhecida',()=>{
  assert.equal(validateBrief(valid,'Ana','Minha clínica'), '')
  assert.notEqual(validateBrief({...valid,type:'institucional'},'Ana',''), '')
  assert.notEqual(validateBrief({...valid,goal:'valor-injetado'},'Ana',''), '')
  assert.notEqual(validateBrief(valid,'  ',''), '')
  assert.notEqual(validateBrief(valid,'Ana','x'.repeat(181)), '')
})
test('mensagem preserva escolhas e modelo, sem referências nem coleta redundante de contato',()=>{
  const message=briefMessage(valid,'Ana & João','Clínica em São Paulo',{title:'Viva Clínica'})
  assert.match(message,/Viva Clínica/)
  assert.match(message,/Ana & João/)
  assert.match(message,/não é uma proposta fechada/i)
  assert.doesNotMatch(message,/\*REFERÊNCIAS\*|\*OBSERVAÇÕES\*|E-mail:|WhatsApp:/)
  const url=new URL(whatsappUrl(message))
  assert.equal(url.hostname,'wa.me')
  assert.equal(url.pathname,'/5511913195079')
  assert.equal(url.searchParams.get('text'),message)
})

