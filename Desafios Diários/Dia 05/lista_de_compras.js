let carrinho = []

// registrar compra
function compra() {
    let nomeProduto = String(prompt("Nome do produto: "))
    let precoUnitário = parseFloat(prompt("Preço: "))

    let compra = {
        "nome_produto": nomeProduto,
        "preco_unitario": precoUnitário,
    }

    carrinho.push(compra)

    return carrinho
}
        
let teste = compra()
console.log(teste)

    
