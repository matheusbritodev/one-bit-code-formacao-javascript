import { Service } from "./service.js";

export class Database extends Service {
    constructor(name, GBSize, GBPerPrice) {
        super(name)
        this.GBSize = GBSize
        this.GBPerPrice = GBPerPrice
    }

    calculateCost() {
        return this.GBSize * this.GBPerPrice
    }
}