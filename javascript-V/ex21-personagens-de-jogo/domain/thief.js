import { Character } from "./character.js"

export class Thief extends Character {
    constructor(name, hp, attackPoints, defensePoints) {
        super(name, hp, attackPoints, defensePoints)
    }

    attack(targetCharacter) {
        const damage = (this.attackPoints - targetCharacter.defensePoints) * 2
        if (damage > 0) {
            targetCharacter.hp -= damage
        }
    }
}