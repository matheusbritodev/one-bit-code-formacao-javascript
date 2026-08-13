


export class Item {
    constructor(id, nome, precoBase, categoria) {
        this.nome = nome
        this.precoBase = precoBase
        this.categoria = categoria
    }
}

export class Acompanhamento extends Item {
    constructor(id, nome, precoBase, categoria) {
        super(id, nome, precoBase, categoria)
    }
}

export class Bebida extends Item {
    constructor(id, nome, precoBase, categoria, nomeDoAdicional, precoAdicional) {
        super(id, nome, precoBase, categoria)
        this.adicional = nomeDoAdicional
        this.precoAdicional = precoAdicional
    }
}

