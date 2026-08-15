import { Item } from "./item.js"


export class Pedido {
    #total = 0
    #fechado = false
    constructor(idPedido, cliente) {
        this.itensPedido = []
        this.cliente = cliente
    }

    getTotal() {
        return this.#total
    }

    setStatusPedido(status) {
        return this.#fechado = status
    }

    adicionarItem(item) {
        if (this.#fechado === false) {
            this.itensPedido.push(item)
            this.#total += item.calcularPrecoTotal()
            item.precoTotal += item.calcularPrecoTotal()
            return "Novo item adicionado com sucesso!"
        } else {
            return "ERRO: O pedido já foi fechado!"
        }
    }

    removerItem(item) {
        const index = this.itensPedido.indexOf(item)
        if (index !== -1 ){
            this.itensPedido.splice(index, 1)
            this.#total -= item.calcularPrecoTotal()
        }
        return "Item removido com sucesso"
    }

    visualizarPedidos() {
        return this.itensPedido
    }
}