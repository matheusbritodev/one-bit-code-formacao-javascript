import { Account } from "./account.js"

export class CheckingAccount extends Account {
    constructor(titular, limitWithdrawals) {
        super(titular)
        this.limitWithdrawals = limitWithdrawals
    }

    withdraw(value) {
        if ((this.checkBalance + this.limitWithdrawals) >= value && value > 0) {
            this.updateBalance(this.checkBalance - value)
            return "The withdraw was successful!"
        } else {
            return "ERROR: Limit exceeded!"
        }
    }
}