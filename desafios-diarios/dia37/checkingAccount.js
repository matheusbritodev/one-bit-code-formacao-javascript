import { Account } from "./account.js"

class CheckingAccount extends Account {
    constructor(limitWithdrawals) {
        this.limitWithdrawals = limitWithdrawals
    }
}