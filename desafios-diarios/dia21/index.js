import { Boss } from "./domain/boss.js"
import { Character } from "./domain/character.js"


const hero = new Character('Tarnished', 100, 20)
hero.takeDamage(120)
console.log(hero.getHealth())

const boss = new Boss('Malenia', 80) 
boss.takeDamage(100)
console.log(boss.getHealth())