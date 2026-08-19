import { Account } from "./account.js"

export class SavingsAccount extends Account {
    static fee = 1.15
    constructor(titular) {
        super(titular)
    }

    balanceYield() {
        const newBalance = this.checkBalance * SavingsAccount.fee
        this.updateBalance(newBalance)
        return `Yield applied. New balance: ${this.checkBalance}`
    }
}