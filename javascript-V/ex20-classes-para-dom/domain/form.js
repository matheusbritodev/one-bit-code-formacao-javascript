import { Component } from "./superClass.js"

export class FormElements extends Component {
    constructor() {
        super("form")
    }

    addElements(son) {
        son.render(this.readDomElement())

    }
}