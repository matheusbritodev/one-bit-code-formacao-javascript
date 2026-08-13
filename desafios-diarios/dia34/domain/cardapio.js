export class Cardapio {
    constructor() {
        this.bebidas = []
        this.acompanhamentos = []
    }

    adicionarBebida(bebida) {
        this.bebidas.push(bebida)
    }

    adicionarAcompanhamento(acompanhamento) {
        this.acompanhamentos.push(acompanhamento)
    }

    visualizarCardapio() {
        let total = "BEBIDAS: \n"
        this.bebidas.forEach((i) => total += `${i}\n`)
        total += `ACOMPANHAMENTOS: \n`
        this.acompanhamentos.forEach((i) => total += `${i}\n`)
        return total
    }
}