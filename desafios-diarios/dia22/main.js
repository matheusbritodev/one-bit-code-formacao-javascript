import { Component } from "./domain/component.js"
import { Processor } from "./domain/processor.js"
import { Computer } from "./domain/computer.js"

const cpu = new Processor('Ryzen 7 5700X', 1200, 8)
const cooler = new Component('Water Cooler 360mm V2', 500)

const myPC = new Computer('Matheus')
myPC.addComponent(cpu)
myPC.addComponent(cooler)

console.log(myPC.getTotalPrice())