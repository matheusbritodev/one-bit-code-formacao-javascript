import { Component } from "./component.js"

export class Computer{
    #components
    constructor(owner) {
        this.owner = owner
        this.#components = []
    }

    addComponent(component) {
        return this.#components.push(component)
    }

    getTotalPrice() {
        const total = this.#components.reduce((total, component) => total + component.getPrice(), 0)
        return total
    }
}