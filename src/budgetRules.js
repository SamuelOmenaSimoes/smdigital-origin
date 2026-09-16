export const BUDGETS = [
  { value:'ate900', label:'Até cerca de R$ 900', max:900 },
  { value:'900-1600', label:'Em torno de R$ 900 a R$ 1.600', max:1600 },
  { value:'1600-3000', label:'Em torno de R$ 1.600 a R$ 3.000', max:3000 },
  { value:'3000-6000', label:'Em torno de R$ 3.000 a R$ 6.000', max:6000 },
  { value:'acima6000', label:'Acima de R$ 6.000', max:Infinity },
  { value:'nao-sei', label:'Preciso de orientação sobre o investimento', max:Infinity },
]
export const ESTIMATES = { institucional:'R$ 1.900 a R$ 6.000', lp:'R$ 900 a R$ 1.600', ecommerce:'Sob avaliação do escopo', manutencao:'R$ 199 a R$ 699/mês' }
export function canSelectType(type,budget) {
  const max = BUDGETS.find(b=>b.value===budget)?.max ?? Infinity
  if (type==='institucional') return max>=1900
  if (type==='ecommerce') return max>=3000
  return true
}
