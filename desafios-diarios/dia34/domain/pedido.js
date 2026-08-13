import { Item, Bebida, Acompanhamento } from "./item.js"


export class Pedido {
    #total = 0
    constructor(idPedido, cliente) {
        this.itensPedido = []
        this.cliente = cliente
    }

    getTotal() {
        return this.#total
    }

    adicionarItem(item) {
        this.itensPedido.push(item)
        this.#total += i
        return "Novo item adicionado com sucesso!"
    }

    removerItem(id) {
        this.itensPedido = this.itensPedido.filter((item) => item.id !== id)
        return "Item removido com sucesso"
    }

    visualizarPedidos() {
        let total = ""
        this.itensPedido.forEach((item) => total += `${item}\n`)
        return total
    }
}