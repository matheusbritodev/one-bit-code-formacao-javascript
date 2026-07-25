import { Service } from "./service.js";

export class Host extends Service {
    constructor(name, monthlyFee) {
        super(name)
        this.monthlyFee = monthlyFee
    }

    calculateCost() {
        return this.monthlyFee
    }
}