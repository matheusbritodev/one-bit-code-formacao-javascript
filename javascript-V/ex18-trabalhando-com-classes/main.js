import { Product } from "./class/product.js"
import { User } from "./class/user.js"

const matheus = new User("Matheus Martins Brito", "matheusbritodev@gmail.com", "1234")
matheus.login("matheusbritodev@gmail.com", "1234")

const mouse = new Product("Mouse Logitech", "mouse gamer", 199.90, 0)
mouse.addToStock(30)
const precoMouseComDesconto = mouse.calculateDiscount(30)

console.log(matheus)

console.log(mouse)
console.log(precoMouseComDesconto)
