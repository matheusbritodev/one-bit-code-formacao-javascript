export class Character {
    constructor(name, hp, attackPoints, defensePoints) {
        this.name = name
        this.hp = hp
        this.attackPoints = attackPoints
        this.defensePoints = defensePoints
    }

    attack(targetCharacter) {
        const damage = this.attackPoints - targetCharacter.defensePoints
        if (damage > 0) {
            targetCharacter.hp -= damage
        }
    }
}