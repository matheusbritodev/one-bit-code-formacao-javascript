import { Product } from "./domain/product.js"
import { DigitalProduct } from "./domain/digital-product.js"

const cadeira = new Product('Cadeira Gamer', 500, 10)
console.log(cadeira.sell(15)) 
cadeira.sell(5)
console.log(cadeira.getStock()) 

const ebook = new DigitalProduct('Ebook de JS', 50)
console.log(ebook.sell(100))