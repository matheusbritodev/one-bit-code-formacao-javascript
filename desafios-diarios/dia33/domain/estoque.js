export class Estoque {
    constructor(nome) {
        this.nome = nome
        this.alimentos = []
    }

    adicionarAlimento(alimento) {
        return alimento.diasRestantes <= 0 ? "ERRO: ALIMENTO VENCIDO DEVE SER DESCARTADO": this.alimentos.push(alimento)
    }

    relatorio() {
        let relatorio = ""
        for (const i of this.alimentos) {
            relatorio += `Nome: ${i.nome} | Quantidade: ${i.quantidade} | Dias para vencer ${i.diasRestantes}\n\n`
        }

        return relatorio
    }
}