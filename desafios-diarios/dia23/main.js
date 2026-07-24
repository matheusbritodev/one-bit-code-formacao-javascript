class Pagamento {
    processar(valor) {

    }
}

class PagamentoPix extends Pagamento {
    processar(valor) {
        return `O valor ${valor} foi processado via pix!`
    }
} 

class PagamentoCartao extends Pagamento {
    processar(valor) {
        return `O valor ${valor} está aguardando aprovação do limite do cartão!`
    }
}

class PagamentoBoleto extends Pagamento {
    processar(valor) {
        return `O boleto no valor de ${valor} foi gerado e aguarda compensação bancária`
    }
}

const pix = new PagamentoPix()
const cartao = new PagamentoCartao()
const boleto = new PagamentoBoleto()

const formasPagamentos = [pix, cartao, boleto]

for (const pagamento of formasPagamentos) {
    console.log(formasPagamentos[i].processar(150.00))
}