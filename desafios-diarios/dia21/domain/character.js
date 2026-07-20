export class Character {
    #health
    constructor(name, health, attackPower) {
        this.name = name
        this.#health = health
        this.attackPower = attackPower
    }

    takeDamage(amount) {
        this.#health -= amount
        return (this.#health <= 0) ? this.#health = 0 : this.#health
    }

    getHealth() {
        return this.#health
    }
}