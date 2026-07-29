class Peca {
    constructor(modelo, socket) {
        this.modelo = modelo
        this.socket = socket
    }
}

class Computador {
    constructor() {
        this.placaMaeInstalada = null
        this.processadorInstalado = null
    }

    instalarPlacaMae(placaMae) {
        return this.placaMaeInstalada = placaMae
    }

    instalarProcesador(processador) {
        return processador.socket === this.placaMaeInstalada.socket ? this.processadorInstalado = processador : "O processador e a placa mãe não possuem o mesmo socket!"
    }

    resumo() {
        return `Processador: ${this.processadorInstalado.modelo}\nPlaca Mãe: ${this.placaMaeInstalada.modelo}`
    }
}

const processadorRyzen = new Peca("Ryzen 7 5700X", "AM4")
const processadorIntel = new Peca("i7-12700KF", "LGA 1700")

const placaMae = new Peca("B550M", "AM4")

const pc1 = new Computador()

pc1.instalarPlacaMae(placaMae)
console.log(pc1.instalarProcesador(processadorRyzen))
console.log(pc1.instalarProcesador(processadorIntel))

console.log(pc1.resumo())