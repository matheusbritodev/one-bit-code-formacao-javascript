import { Cliente } from "./domain/cliente.js";
import { Item } from "./domain/item.js";
import { Pedido } from "./domain/pedido.js";


const cliente1 = new Cliente(1, "Matheus")
const pedido1 = new Pedido(1, cliente1)
const cliente2 = new Cliente(2, "Brito")
const pedido2 = new Pedido(2, cliente2)

const acompanhamento1 = new Item(1, "bolo", 1, 10.00, "acompanhamento")
const bebida1 = new Item(2, "refrigerante", 1, 12.00, "bebida")

console.log(pedido1.adicionarItem(acompanhamento1))
console.log(pedido1.adicionarItem(bebida1))

console.table(pedido1.visualizarPedidos())

console.log(cliente1.fecharConta(pedido1))

console.log(pedido1.removerItem(bebida1))

console.log(cliente1.fecharConta(pedido1))
console.log(pedido1.adicionarItem(bebida1))
console.log(cliente1.fecharConta(pedido1))
