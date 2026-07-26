class Plan {
    constructor(name, rentlyValue) {
        this.name = name
        this.rentlyValue = rentlyValue
    }
}

class User {
    #invoice
    constructor(name, email) {
        this.name = name
        this.email = email
        this.subscription = "inactive"
        this.plan = null
    }

    subscriptionPlan(plan) {
        this.subscription = "active"
        this.plan = plan
    }

    generateInvoice() {
        console.log(`Name:${this.name}\nPlan:${this.plan.name}\nValue: R$${this.plan.rentlyValue}`)
    }

    getInvoice() {
        return this.#invoice
    }
}

const planoPro = new Plan("Plano Pro", 99.90)

const user1 = new User("Matheus Brito", "matheus@email.com")

user1.subscriptionPlan(planoPro)

user1.generateInvoice()