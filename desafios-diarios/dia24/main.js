class Worker {
    constructor(name, baseSalary) {
        this.name = name
        this.baseSalary = baseSalary
    }

    paymentCalculate() {
        return this.baseSalary
    }
}

class Manager extends Worker {
    constructor(name, baseSalary, bonus) {
        super(name, baseSalary)
        this.bonus = bonus
    }

    paymentCalculate() {
        return this.baseSalary + this.bonus
    }
}

class Seller extends Worker {
    constructor(name, baseSalary, commission) {
        super(name, baseSalary)
        this.commission = commission
    }

    paymentCalculate() {
        return this.baseSalary + this.commission
    }
}

const manager = new Manager("Matheus", 3000, 1500)
const seller = new Seller("Marcos", 2000, 1000)

const payments = [manager, seller]

for (const payment of payments) {
    console.log(`O pagamento de ${payment.name} é R$${payment.paymentCalculate()}.`)
}