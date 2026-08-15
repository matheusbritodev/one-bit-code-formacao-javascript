import { Pedido } from "./pedido.js"

export class Cliente {
    #totalConta = 0
    constructor(id, nome) {
        this.id = id
        this.nome = nome
    }

    getConta() {
        return this.#totalConta
    }

    fecharConta(pedido) {
        const pagamento = pedido.getTotal()
        pedido.setStatusPedido(true)
        return `Cliente: ${this.nome}\nTOTAL A PAGAR: R$${pagamento.toFixed(2)}`
    }
}