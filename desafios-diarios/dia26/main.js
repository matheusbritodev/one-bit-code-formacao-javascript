class ItemCardapio {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}

class Mesa {
    #check = 0
    constructor(id) {
        this.id = id
        this.orders = []
    }

    addItem(item) {
        this.#check += item.value
        this.orders.push(item)
    }

    finalizeCheck() {
        console.log(`The total to pay: ${this.#check}`)
        this.orders = []
        this.#check = 0
        return this.#check
    }

    getCheck() {
        return this.#check
    }
}

const pizza = new ItemCardapio("Pizza", 50)
const suco = new ItemCardapio("Suco", 10)

const mesa1 = new Mesa(1)

mesa1.addItem(pizza)
mesa1.addItem(suco)

mesa1.finalizeCheck()