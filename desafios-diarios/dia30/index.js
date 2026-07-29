class Veiculo {
    constructor(placa, modelo) {
        this.placa = placa
        this.modelo = modelo
    }
}

class Estacionamento {
    constructor(nome, limiteVagas) {
        this.nome = nome
        this.limiteVagas = limiteVagas
        this.veiculosEstacionados = []
    }

    estacionarVeiculo(veiculo) {
        if (this.veiculosEstacionados.length < this.limiteVagas) {
            this.veiculosEstacionados.push(veiculo)
            return "Veiculo cadastrado com sucesso!"
        } else {
            return "ERRO: limite de vagas alcançado"
        }
    }

    retirarVeiculo(placaVeiculo) {
        const veiculoRemover = this.veiculosEstacionados
        .filter((veiculoAtual) => placaVeiculo.toLowerCase() !== veiculoAtual.placa.toLowerCase())

        return this.veiculosEstacionados = veiculoRemover
    }

    relatorioVagas() {
        return `VAGAS DISPONIVEIS: ${this.limiteVagas - this.veiculosEstacionados.length} - ${JSON.stringify(this.veiculosEstacionados)}`
    }
}

const estacionamento = new Estacionamento("Shopping da Ilha", 2)
const bmw = new Veiculo("ABC1C23", "BMW")
const corolla = new Veiculo("KJD4A56 ", "Corolla")
const onix = new Veiculo("XYZ9B87", "Onix")

console.log(estacionamento.estacionarVeiculo(bmw))
console.log(estacionamento.estacionarVeiculo(corolla))
console.log(estacionamento.estacionarVeiculo(onix))

console.log(estacionamento.retirarVeiculo("ABC1C23"))
console.log(estacionamento.estacionarVeiculo(onix))

console.log(estacionamento.relatorioVagas())