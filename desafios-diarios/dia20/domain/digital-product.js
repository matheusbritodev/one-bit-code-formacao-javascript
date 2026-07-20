import { Product } from "./product.js"

export class DigitalProduct extends Product{
    constructor(name, price) {
        super(name, price, Infinity)
    }

    sell(quantity) {
        return "Sale Completed"
    }
}
