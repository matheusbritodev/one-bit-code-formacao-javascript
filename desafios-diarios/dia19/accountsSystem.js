class Account {
    #balance
    constructor(owner, initialBalance) {
        this.owner = owner
        this.#balance = initialBalance
    }

    deposit(amount) {
        return this.#balance += amount
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            return this.#balance -= amount
        } else {
            return "Insufficient balance"
        }
    }

    getBalance() {
        return this.#balance
    }
}

class PremiumAccount extends Account {
    constructor(creditLimit, initialBalance, owner) {
        super(owner, initialBalance)
        this.creditLimit = creditLimit
    }

    withdrawPremium(amount) {
        if (amount <= this.getBalance() || (this.getBalance() + this.creditLimit) >= amount) {
            return this.deposit(-amount) 
        } else {
            return "Insufficient funds and no credit limit"
        }
    }
}


// Teste a conta normal
const contaNormal = new Account('João', 100)
console.log(contaNormal.withdraw(150))

// Teste a conta VIP
const contaVIP = new PremiumAccount(500, 100, 'Matheus')

contaVIP.withdrawPremium(300) 
console.log(contaVIP.getBalance())