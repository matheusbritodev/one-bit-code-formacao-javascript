export class Item {
    constructor(id, nome, quantidade, precoBase, categoria, nomeDoAdicional=null, precoAdicional=null) {
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
        this.precoBase = precoBase
        this.categoria = categoria
        this.nomeDoAdicional = nomeDoAdicional
        this.precoAdicional = precoAdicional
        this.precoTotal = 0
    }

    calcularPrecoTotal() {
        if (this.precoAdicional === null) {
            return this.precoBase * this.quantidade + 0

        } else {
            return this.precoBase * this.quantidade + this.precoAdicional
        }
    }
}
