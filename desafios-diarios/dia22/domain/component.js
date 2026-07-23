export class Component {
    #price
    constructor(name, price) {
        this.name = name
        this.#price = price
    }

    getPrice() {
        return this.#price
    }
}