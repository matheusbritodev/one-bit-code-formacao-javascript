const assinaturas = [
  { id: 101, usuario: 'Samuel', plano: 'Pro', ativo: true, valorBase: 99.90 },
  { id: 102, usuario: 'Carlos', plano: 'Gratuito', ativo: false, valorBase: 0.00 },
  { id: 103, usuario: 'Matheus', plano: 'Premium', ativo: true, valorBase: 149.90 },
  { id: 104, usuario: 'Vitoria', plano: 'Pro', ativo: true, valorBase: 99.90 }
]

const taxaGateway = 5.00;

const assinaturasAtivas = assinaturas
    .filter((assinatura) => assinatura.ativo === true)
    .map(({ usuario, valorBase }) => ({usuario, valorBase, valorLiquido: valorBase - taxaGateway}))

const faturamento = assinaturasAtivas.reduce((total, assinatura) => total + assinatura.valorLiquido, 0)

console.log(faturamento.toFixed(2), assinaturasAtivas)
