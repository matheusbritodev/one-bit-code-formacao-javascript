import { CheckingAccount } from "./checkingAccount.js"
import { SavingsAccount } from "./savingsAccount.js"


const account1 = new SavingsAccount("Matheus")
const account2 = new CheckingAccount("Samuel", 1000)

account2.deposit(500)

console.log(account2.withdraw(1200))
 
console.log(account2.checkBalance)
