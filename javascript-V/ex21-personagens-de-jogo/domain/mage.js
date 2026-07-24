import { Character } from "./character.js"

export class Mage extends Character {
    constructor(name, hp, attackPoints, defensePoints, magicPoints) {
        super(name, hp, attackPoints, defensePoints)
        this.magicPoints = magicPoints
    }

    attack(targetCharacter) {
        const damage = (this.attackPoints + this.magicPoints) - targetCharacter.defensePoints
        if (damage > 0) {
            targetCharacter.hp -= damage
        }
    }

    heal(targetCharacter) {
        targetCharacter.hp += this.magicPoints * 2
    }
}