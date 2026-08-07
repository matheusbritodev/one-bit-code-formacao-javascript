import { Estoque } from "./domain/estoque.js"
import { Alimento } from "./domain/alimento.js"

const estoque = new Estoque("Restaurante")

const maca = new Alimento("Maçã", 5, 7)
const banana = new Alimento("Banana", 2, 4)
const pera = new Alimento("Pêra", 3, 0)

estoque.adicionarAlimento(maca)
estoque.adicionarAlimento(banana)
estoque.adicionarAlimento(pera)

console.log(estoque.relatorio())