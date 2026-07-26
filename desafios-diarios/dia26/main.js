class ItemMenu {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}

class Table {
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

const pizza = new ItemMenu("Pizza", 50)
const juice = new ItemMenu("juice", 10)

const table1 = new Table(1)

table1.addItem(pizza)
table1.addItem(juice)

table1.finalizeCheck()