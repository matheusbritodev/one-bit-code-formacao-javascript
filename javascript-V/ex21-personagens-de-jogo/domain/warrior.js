import { Character } from "./character.js"

export class Warrior extends Character {
    constructor(name, hp, attackPoints, defensePoints, shieldPoints, position = "ataque") {
        super(name, hp, attackPoints, defensePoints)
        this.shieldPoints = shieldPoints
        this.position = position.toLowerCase()

        // Se iniciar em posição de defesa, soma os pontos do escudo à defesa
        if (this.position === "defesa") {
            this.defensePoints += this.shieldPoints
        }
    }

    attack(targetCharacter) {
        if (this.position === "ataque") {
            super.attack(targetCharacter)
        } else {
            console.log(`${this.name} está na posição de defesa e não pode atacar!`)
        }
    }

    switchPosition() {
        if (this.position === "ataque") {
            this.position = "defesa"
            this.defensePoints += this.shieldPoints
        } else {
            this.position = "ataque"
            this.defensePoints -= this.shieldPoints
        }
    }
}