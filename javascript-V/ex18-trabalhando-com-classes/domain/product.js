export class Product {
    constructor (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock (quantity) {
        return this.inStock += quantity
    }

    calculateDiscount (discountPercent) {
        return this.price * (1 - (discountPercent / 100))
    }
}
