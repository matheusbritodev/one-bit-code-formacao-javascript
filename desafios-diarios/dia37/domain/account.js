export class Account {
    #balance = 0
    constructor(titular) {
        this.titular = titular
    }

    get checkBalance() {
        return this.#balance
    }

    updateBalance(value) {
        this.#balance = value
    }

    withdraw(value) {
        if (this.#balance >= value && value > 0) {
            this.#balance -= value
            return "Withdraw successful!"
        } else {
            return "ERROR: Insufficient funds"
        }
    }

    deposit(value) {
        if (value > 0) {
            this.#balance += value
            return "Deposit successful!"
        } else {
            return "ERROR: Negative values are not allowed!"
        }
    }
}