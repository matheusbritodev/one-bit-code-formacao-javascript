import { Service } from "./service.js";

export class Project {
    #budget = 0
    constructor(projectName) {
        this.projectName = projectName
        this.services = []
    }

    addBudget(value) {
        return this.#budget += value
    }

    queryBudget() {
        return this.#budget
    }

    addService(service) {
        this.services.push(service)
        return this.services
    }

    generateReport() {
        let total = 0
        for (const service of this.services) {
            total += service.calculateCost()
        }
        const status = this.#budget >= total ? this.projectName + " is inside of the budget" : this.projectName + " is out of the budget"
        return status
    }
}
