export class Product {
    #stock
    constructor(name, price, initialStock) {
        this.name = name
        this.price = price
        this.#stock = initialStock
    }

    sell(quantity) {
        return (quantity <= this.#stock) ? this.#stock -= quantity : "Insufficient Stock"
    }

    getStock() {
        return this.#stock
    }
}

