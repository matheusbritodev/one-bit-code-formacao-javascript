/* Uma empresa de logística precisa de uma estrutura para representar sua frota de veículos.

Cada veículo deve possuir um identificador, o modelo, a categoria do veículo e, quando necessário, sua capacidade. A empresa trabalha apenas com caminhões, vans e motocicletas.

A frota também deve armazenar o nome da empresa, a quantidade total de veículos e quais veículos estão atualmente ativos. Além disso, deve ser possível registrar o responsável pela supervisão da frota, contendo seu nome e cargo. Em alguns casos, a empresa pode estar temporariamente sem supervisor.

Crie um exemplo de uma frota preenchida com dados fictícios, contendo pelo menos dois veículos ativos e um supervisor responsável.

Ao final, exiba no console o nome da empresa e o modelo do primeiro veículo ativo para verificar se os dados foram cadastrados corretamente. */

type CategoriaVeiculo = "caminhao" | "vans" | "motocicletas"

class Veiculo {
    id: number
    modelo: string
    categoria: CategoriaVeiculo
    ativo: boolean
    capacidade?: number

    constructor(id: number, modelo: string, categoria: CategoriaVeiculo, ativo: boolean, capacidade?: number ) {
        this.id = id
        this.modelo = modelo
        this.categoria = categoria
        this.ativo = ativo
        this.capacidade = capacidade
    }
}

class Frota {
    nomeEmpresa: string
    quantidadeVeiculos: number
    veiculosAtivos: Array<Veiculo>
    supervisor?: Funcionario

    constructor(nomeEmpresa: string, quantidadeVeiculos: number, supervisor?: Funcionario) {
        this.nomeEmpresa = nomeEmpresa
        this.quantidadeVeiculos = quantidadeVeiculos
        this.veiculosAtivos = []
        this.supervisor = supervisor
    }

    adicionarVeiculo(veiculo: Veiculo) {
        if (veiculo.ativo === true) {
            this.veiculosAtivos.push(veiculo)
            return "Veiculo adicionado com sucesso"
        } else {
            return "ERRO: Esse veiculo nao esta ativo"
        }
    }

    removerVeiculo(veiculo: Veiculo) {
        const naoRemovidos = this.veiculosAtivos.filter((atual) => atual !== veiculo)
        this.veiculosAtivos = naoRemovidos
        return "Veiculo removido"
    }
}

class Funcionario {
    nome: string
    cargo: string
    constructor(nome: string, cargo: string) {
        this.nome = nome
        this.cargo = cargo
    }
}

const supervisor: Funcionario = new Funcionario("ViniciusMaMaDoR", "supervisor")
const frota1: Frota = new Frota("Six Seven", 2, supervisor)
const veiculo1: Veiculo = new Veiculo(1, "Mercedes Bens - 1318", "caminhao", true, 1000)
const veiculo2: Veiculo = new Veiculo(2, "Mercedes Bens - 1620", "caminhao", true, 2000)

frota1.adicionarVeiculo(veiculo1)
frota1.adicionarVeiculo(veiculo2)

console.log(`Nome da empresa: ${frota1.nomeEmpresa}\nModelo do primeiro veiculo ativo: ${JSON.stringify(frota1.veiculosAtivos[0].modelo)}`)
