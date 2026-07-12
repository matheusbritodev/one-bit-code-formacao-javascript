/* Fala, tudo bem? Seguinte, a base do nosso aplicativo está crescendo e eu preciso que você crie uma lógica para analisar nossas assinaturas.

Primeiro, eu preciso de um relatório que me traga todos os dados apenas dos clientes que usam a plataforma 'mobile', porque vamos focar uma campanha neles. Depois, preciso de uma outra extração que me mostre somente os nomes da galera que está com a assinatura no status 'ativo', para a equipe de marketing mandar um e-mail de agradecimento.

Por fim, a parte financeira: preciso que o sistema calcule a nossa receita recorrente total. Ele tem que somar o valor das mensalidades, mas preste atenção, tem que somar estritamente o dinheiro de quem está com o status 'ativo', ignorando totalmente os cancelados.

Você consegue montar o código para me entregar esses três resultados? */

const clientes = [
    { nome: 'Ana', plataforma: 'mobile', status: 'ativo', mensalidade: 49.90 },
    { nome: 'Carlos', plataforma: 'web', status: 'cancelado', mensalidade: 29.90 },
    { nome: 'Beatriz', plataforma: 'mobile', status: 'ativo', mensalidade: 49.90 },
    { nome: 'João', plataforma: 'mobile', status: 'cancelado', mensalidade: 49.90 },
    { nome: 'Fernanda', plataforma: 'web', status: 'ativo', mensalidade: 29.90 },
    { nome: 'Lucas', plataforma: 'mobile', status: 'ativo', mensalidade: 49.90 }
]

//  dados dos clientes que usam a plataforma 'mobile'
const clientesMobile = clientes.filter((cliente) => cliente.plataforma === "mobile")

// coletar apenas os nomes dos usuarios que estão com a assinatura no status 'ativo'
const usuariosAtivos = clientes
    .filter((cliente) => cliente.status === "ativo")
    .map((cliente) => cliente.nome)

// soma das mensalidades que estao com status 'ativo'
const receitaRecorrente = clientes
.filter((cliente) => cliente.status === "ativo")
.reduce((receitaTotal, cliente) =>  receitaTotal + cliente.mensalidade, 0)

console.log(
    "Clientes que usam a plataforma 'mobile':\n", clientesMobile,
    "Usuários ativos:\n", usuariosAtivos,
    "\nFaturamento bruto: R$", receitaRecorrente.toFixed(2)
)