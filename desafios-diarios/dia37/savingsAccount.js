import { Account } from "./account.js"

class SavingsAccount extends Account{
    static fee = 1.15
    constructor() {
    }

    balanceyield() {
        return this.checkBalance * this.fee
    }
}