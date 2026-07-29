class Carteira {
    #saldo = 0
    constructor(titular) {
        this.titular = titular
        this.historico = []
    }

    registrarTransacao(transacao) {
         this.#saldo += transacao.valor
         this.historico.push(transacao)
    }

    mostrarStatus() {
        return `Titular:${this.titular} \nSaldo: R$${this.#saldo}`
    }

    getSaldo() {
        return this.#saldo
    }
}

class Transacao {
    constructor(descricao, valor) {
        this.descricao = descricao
        this.valor = valor
    }
}

const minhaCarteira = new Carteira("Matheus")

const barbeiro = new Transacao("almoco", 50.00)
const mercado = new Transacao("compra do mes", 1223.57)

minhaCarteira.registrarTransacao(barbeiro)
minhaCarteira.registrarTransacao(mercado)

console.log(minhaCarteira.mostrarStatus())