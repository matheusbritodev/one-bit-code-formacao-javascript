import { Character } from "./domain/character.js"
import { Thief } from "./domain/thief.js"
import { Mage } from "./domain/mage.js"
import { Warrior } from "./domain/warrior.js"

const aragorn = new Character("Aragorn", 100, 20, 10)
const legolas = new Thief("Legolas", 80, 25, 5)
const gandalf = new Mage("Gandalf", 90, 15, 10, 20)
const boromir = new Warrior("Boromir", 120, 30, 15, 10, "ataque")

console.table({ aragorn, legolas, gandalf, boromir })


console.log("\n Ladrão ataca Aragorn ")
legolas.attack(aragorn)
console.log(`HP do Aragorn: ${aragorn.hp}`) 

console.log("\n Mago ataca Boromir ")
gandalf.attack(boromir)
console.log(`HP do Boromir: ${boromir.hp}`)

console.log("\n Mago cura Aragorn ")
gandalf.heal(aragorn)
console.log(`HP do Aragorn: ${aragorn.hp}`)

console.log("\n Guerreiro ataca Legolas em modo Ataque ")
boromir.attack(legolas)
console.log(`HP do Legolas: ${legolas.hp}`)

console.log("\n Guerreiro muda de posição ")
console.log(`Defesa antiga do Boromir: ${boromir.defensePoints}`)
boromir.switchPosition()
console.log(`Nova defesa do Boromir: ${boromir.defensePoints}`) 

boromir.attack(legolas)