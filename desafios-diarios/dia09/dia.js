/* "Olá! Administro uma loja de peças de computador e acabei de extrair um relatório bruto do nosso sistema de vendas. O problema é que o sistema me joga todos os dados misturados, e eu preciso de um script rápido rodando no terminal para me dar três informações exatas antes de eu fechar o caixa de hoje.

O formato que o sistema me entrega é uma lista. Cada venda registrada tem o 'produto' (ex: Ryzen 7 5700X, DeepCool V2 360mm, etc.), o 'valor' pago pelo cliente e o 'setor' da loja (ex: processador, refrigeracao, placa_mae).

O que eu preciso que o seu código faça: primeiro, quero que você separe para mim uma lista que contenha exclusivamente as vendas do setor de 'refrigeracao', para eu analisar a saída desses itens. Depois, o setor de compras me pediu uma relação limpa, então preciso que você gere uma lista contendo apenas os nomes dos produtos que foram vendidos hoje, sem misturar com os preços. Por fim, preciso do cálculo automático do faturamento bruto, ou seja, a soma financeira de absolutamente tudo o que foi vendido nessa lista. Consegue me entregar isso rodando no console? */

const vendasGerais = [
    { data: '2026-07-09', produto: 'Ryzen 7 5700X', valor: 1200.00, setor: 'processador' },
    { data: '2026-07-08', produto: 'Placa Mãe ASUS TUF B550M', valor: 850.00, setor: 'placa_mae' },
    { data: '2026-07-09', produto: 'DeepCool V2 360mm', valor: 650.00, setor: 'refrigeracao' },
    { data: '2026-07-07', produto: 'Placa de Vídeo RX 9060 XT', valor: 3500.00, setor: 'placa_video' },
    { data: '2026-07-09', produto: 'Memória RAM 16GB DDR4', valor: 250.00, setor: 'memoria' },
    { data: '2026-07-08', produto: 'SSD 1TB NVMe', valor: 400.00, setor: 'armazenamento' },
    { data: '2026-07-09', produto: 'Elden Ring (Key)', valor: 230.00, setor: 'jogos' },
    { data: '2026-07-07', produto: 'Water Cooler Corsair 240mm', valor: 450.00, setor: 'refrigeracao' },
    { data: '2026-07-09', produto: 'Ryzen 5 5500', valor: 600.00, setor: 'processador' },
    { data: '2026-07-08', produto: 'Placa Mãe MSI A520M', valor: 450.00, setor: 'placa_mae' },
    { data: '2026-07-09', produto: 'Fonte 750W 80 Plus Gold', valor: 550.00, setor: 'fonte' },
    { data: '2026-07-07', produto: 'Gabinete Aquário Vidro Temperado', valor: 350.00, setor: 'gabinete' },
    { data: '2026-07-09', produto: 'SSD 512GB SATA', valor: 180.00, setor: 'armazenamento' },
    { data: '2026-07-08', produto: 'Memória RAM 8GB DDR4', valor: 130.00, setor: 'memoria' },
    { data: '2026-07-09', produto: 'Pasta Térmica Alta Performance', valor: 50.00, setor: 'refrigeracao' },
    { data: '2026-07-07', produto: 'Kit 3 Ventoinhas 120mm RGB', valor: 120.00, setor: 'refrigeracao' },
    { data: '2026-07-09', produto: 'Monitor 144Hz IPS', valor: 1100.00, setor: 'perifericos' },
    { data: '2026-07-08', produto: 'Teclado Mecânico Switch Red', valor: 300.00, setor: 'perifericos' },
    { data: '2026-07-09', produto: 'Mouse Gamer 12000 DPI', valor: 150.00, setor: 'perifericos' },
    { data: '2026-07-07', produto: 'Sekiro: Shadows Die Twice', valor: 200.00, setor: 'jogos' }
]

const dayjs = require('dayjs')

//  lista que contém exclusivamente as vendas do setor de 'refrigeracao'
const vendasRefrigeracao = vendasGerais.filter((venda) => venda.setor === 'refrigeracao')

// lista contendo apenas os nomes dos produtos que foram vendidos hoje
const dataAtual = dayjs().format('YYYY-MM-DD')
const vendasHoje = vendasGerais
    .filter((venda) => dataAtual === venda.data)
    .map((venda) => venda.produto)

// cálculo do faturamento bruto
const faturamento = vendasGerais.reduce((faturamentoTotal, venda) => {
    return faturamentoTotal + venda.valor
}, 0)

// resultado
console.log(
    "Vendas do setor 'refrigeração':\n", vendasRefrigeracao,
    "Produtos vendidos hoje (" + dataAtual + "):\n", vendasHoje,
    "Faturamento bruto: R$", faturamento.toFixed(2)
)