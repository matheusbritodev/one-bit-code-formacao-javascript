import { Pedido } from "./pedido.js"

export class Cliente {
    #totalconta = 0
    constructor(id, nome) {
        this.id = id
        this.nome = nome
    }

    getConta() {
        return this.#totalconta
    }

    fecharConta(pedido) {
        const pagamento = getTotal()
        return pagamento
    }
}