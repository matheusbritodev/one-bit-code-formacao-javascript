import { User } from "./domain/user.js"
import { Deposit } from "./domain/deposit.js"
import { Goal } from "./domain/goal.js"

const user1 = new User("Matheus")
const goal1 = new Goal("House", 200000)

const deposit1 = new Deposit(25000, "19-04-2026")
const deposit2 = new Deposit(100000, "19-05-2026")
const deposit3 = new Deposit(200000, "19-06-2026")

user1.addGoal(goal1)
console.log(goal1.newContribution(deposit1))
console.log(goal1.newContribution(deposit2))
console.log(goal1.newContribution(deposit3))

console.log(user1.relatory())
