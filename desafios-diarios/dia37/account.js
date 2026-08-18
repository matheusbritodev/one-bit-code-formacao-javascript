class Account {
    #balance = 0
    constructor(titular) {
        this.titular = titular
    }

    get checkBalance() {
        return this.#balance
    }

    set withdraw(value) {
        if (this.#balance >= value && value > 0) {
            return this.#balance -= value
        } else {
            return "ERROR: Insufficient funds"
        }
    }

    set deposit(value) {
        if (value > 0) {
            return this.#balance += value
        } else {
            return "ERROR: Values negative are not allowed!"
        }
    }
}