import { ESTIMATES } from './budgetRules.js'
export const services = [
  { title: 'Site institucional', price: ESTIMATES.institucional, desc: 'Apresente sua empresa, explique seus serviços e facilite o contato com novos clientes.', details: ['Páginas para empresa, serviços e contato', 'Layout adaptado ao celular', 'Estrutura básica de SEO'], time: '15 a 20 dias úteis', image: '/images/business.svg' },
  { title: 'Landing page', price: ESTIMATES.lp, desc: 'Uma página dedicada à sua oferta, com um caminho claro para o visitante entrar em contato.', details: ['Página única para produto ou campanha', 'Formulário ou WhatsApp', 'Estrutura para anúncios'], time: '5 a 7 dias úteis', image: '/images/landing.svg' },
  { title: 'Manutenção e suporte', price: ESTIMATES.manutencao, desc: 'Acompanhamento depois da publicação, com atualizações e ajustes para manter seu site em dia.', details: ['Backup semanal', 'Atualizações conforme a tecnologia', 'Alterações conforme o plano'], time: 'Plano mensal', image: '/images/studio.png' },
]
export { default as projects } from './projects.json'
