import { Component } from "./component.js"

export class Processor extends Component{
    constructor(name, price, cores) {
        super(name, price)
        this.cores = cores
    }
}