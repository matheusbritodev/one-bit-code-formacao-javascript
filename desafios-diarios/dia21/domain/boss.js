import { Character } from "./character.js"

export class Boss extends Character{
    constructor(name, attackPower) {
        super(name, 1000, attackPower)
    }

    takeDamage(amount) {
        const damage = amount / 2
        return super.takeDamage(damage)
    }

}